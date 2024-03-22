/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import { IButtonHandler } from '../ElevatorMainPage';
import DownArrowButton from '../../../../components/UI/DownArrowButton';
import LevelButton from '../../../../components/UI/LevelButton';
import UpArrowButton from '../../../../components/UI/UpArrowButton';
import playAudioSound from '../../../../hooks/playSound';

import { IElevator } from '../../../../types/elevator';




export default function ElevatorCard({ elevator, currentElevator, setCurrentElevator }: { elevator: IElevator, currentElevator: IButtonHandler, setCurrentElevator: any }) {


    const [loading, setLoading] = useState<boolean>(false)
    const [delay, setDelay] = useState<number>(5000)

    // let delay = 0;
    // button handler of side arrow icons
    const buttonHandler = (data: IButtonHandler) => {

        // console.log(currentElevator.title, 'and', elevator.title)


        setLoading(true)

        // console.log(data.currentLevel, 'no:', data.no)
        //! the delay time for level-0 to level-1 && level-2 to level 1
        if ((data.currentLevel === 0 && data.no === 1) || (data.currentLevel === 2 && data.no === 1)) {
            setDelay(5000)
        }
        //! the delay time for level-1 to level-2 && level-1 to level 0
        else if ((data.currentLevel === 1 && data.no === 2) || (data.currentLevel === 1 && data.no === 0)) {
            setDelay(10000)
        }

        setTimeout(() => {
            // ! condition for correct or wrong select
            if (currentElevator.title !== elevator.title) {
                setCurrentElevator(data);
                // ! reusable sound play function
                playAudioSound("correct");
                setLoading(false)
            }
        }, delay);

        if (currentElevator.title === elevator.title) {
            // ! reusable sound play function
            playAudioSound("incorrect");
            setLoading(false)

        }


    };

    // console.log('current', currentElevator, 'exist', elevator.no)

    return (
        <div className="" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            {/* //! left side arrow button section for each card */}
            <div className="button-section">

                {/* //! top or level-2  arrow button with condition */}
                {elevator.no === 2 && (
                    <div onClick={() => buttonHandler({ no: 1, title: elevator.title, type: "down", currentLevel: 2 })}>
                        <DownArrowButton style={{ color: currentElevator?.no === 1 && currentElevator?.type === 'down' ? "green" : "#969494" }} />

                        {loading && <h5>Moving.... in {delay / 1000}s</h5>
                        }
                    </div>
                )}

                {/* //! middle or level-1  arrow and down button with condition */}
                {elevator.no === 1 && (
                    <>
                        <div onClick={() => buttonHandler({ no: 2, title: elevator.title, type: "up", currentLevel: 1 })}>


                            {/* //! up button */}

                            <UpArrowButton style={{ color: currentElevator?.no === 2 && currentElevator?.type === 'up' ? "green" : "#969494" }} />

                        </div>
                        {loading && <h5> Moving.... in {delay / 1000}s</h5>
                        }
                        <div onClick={() => buttonHandler({ no: 0, title: elevator.title, type: "down", currentLevel: 1 })}>
                            {/* //! down button */}
                            <DownArrowButton style={{ color: currentElevator?.no === 0 && currentElevator?.type === 'down' ? "green" : "#969494" }} />
                        </div>
                    </>
                )}
                {/* //! bottom or level-0 / Ground  arrow button with condition */}
                {elevator.no === 0 && (
                    <div onClick={() => buttonHandler({ no: 1, title: elevator.title, type: "up", currentLevel: 0 })}>
                        {loading && <h5> Moving.... in {delay / 1000}s</h5>
                        }
                        <UpArrowButton style={{ color: currentElevator?.no === 1 && currentElevator?.type === 'up' ? "green" : "#969494" }} />
                    </div>
                )}

            </div>

            {/* //! active elevator sections */}
            <div className='elevator-card'>
                <LevelButton>{elevator.title}</LevelButton>
                {/* active elevator ui section */}
                {currentElevator.no === elevator.no && (
                    <div className="active-elevator" style={{
                        // background: '#9D5E3D',

                    }}>
                        <h6 className='elevator-text'>Elevator</h6>
                    </div>
                )}
            </div>
        </div>
    );
}
