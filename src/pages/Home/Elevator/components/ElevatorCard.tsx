/* eslint-disable @typescript-eslint/no-explicit-any */

import { IButtonHandler } from '..';
import DownArrowButton from '../../../../components/UI/DownArrowButton';
import LevelButton from '../../../../components/UI/LevelButton';
import UpArrowButton from '../../../../components/UI/UpArrowButton';
import playAudioSound from '../../../../hooks/playSound';

import { IElevator } from '../../../../types/elevator';




export default function ElevatorCard({ elevator, currentElevator, setCurrentElevator }: { elevator: IElevator, currentElevator: IButtonHandler, setCurrentElevator: any }) {


    // button handler of side arrow icons
    const buttonHandler = (data: IButtonHandler) => {

        // console.log(currentElevator.title, 'and', elevator.title)
        // reusable sound play function
        // ! condition for correct or wrong select
        if (currentElevator.title !== elevator.title) {
            setCurrentElevator(data);
            playAudioSound("correct")
        } else {
            playAudioSound("incorrect")
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
                    <div onClick={() => buttonHandler({ no: 1, title: elevator.title, type: "down" })}>
                        <DownArrowButton style={{ color: currentElevator?.no === 1 && currentElevator?.type === 'down' ? "green" : "#969494" }} />
                    </div>
                )}

                {/* //! middle or level-1  arrow and down button with condition */}
                {elevator.no === 1 && (
                    <>
                        <div onClick={() => buttonHandler({ no: 2, title: elevator.title, type: "up" })}>
                            {/* //! up button */}
                            <UpArrowButton style={{ color: currentElevator?.no === 2 && currentElevator?.type === 'up' ? "green" : "#969494" }} />
                        </div>
                        <div onClick={() => buttonHandler({ no: 0, title: elevator.title, type: "down" })}>
                            {/* //! down button */}
                            <DownArrowButton style={{ color: currentElevator?.no === 0 && currentElevator?.type === 'down' ? "green" : "#969494" }} />
                        </div>
                    </>
                )}
                {/* //! bottom or level-0 / Ground  arrow button with condition */}
                {elevator.no === 0 && (
                    <div onClick={() => buttonHandler({ no: 1, title: elevator.title, type: "up" })}>
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
