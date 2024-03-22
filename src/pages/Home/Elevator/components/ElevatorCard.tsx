/* eslint-disable @typescript-eslint/no-explicit-any */

import DownArrowButton from '../../../../components/UI/DownArrowButton';
import LevelButton from '../../../../components/UI/LevelButton';
import UpArrowButton from '../../../../components/UI/UpArrowButton';
import playAudioSound from '../../../../hooks/playSound';

import { IElevator } from '../../../../types/elevator';

type IButtonHandler = {
    type: "up" | 'down';
    no: number;
    title: string;
};

export default function ElevatorCard({ elevator, currentElevator, setCurrentElevator }: { elevator: IElevator, currentElevator: IButtonHandler, setCurrentElevator: any }) {
    // const [currentElevator, setCurrentElevator] = useState<IButtonHandler>({ no: 2, title: 'Level 2', type: 'down' });


    const buttonHandler = (data: IButtonHandler) => {

        setCurrentElevator(data);
        console.log(currentElevator.title, 'and', elevator.title)

        playAudioSound()
        // if (currentElevator.title !== elevator.title) {

        // }

    };

    // console.log('current', currentElevator, 'exist', elevator.no)

    return (
        <div className="" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <div className="button-section">
                {elevator.no === 2 && (
                    <div onClick={() => buttonHandler({ no: 1, title: elevator.title, type: "down" })}>
                        <DownArrowButton style={{ color: currentElevator?.no === 1 && currentElevator?.type === 'down' ? "green" : "#969494" }} />
                    </div>
                )}
                {elevator.no === 1 && (
                    <>
                        <div onClick={() => buttonHandler({ no: 2, title: elevator.title, type: "up" })}>
                            <UpArrowButton style={{ color: currentElevator?.no === 2 && currentElevator?.type === 'up' ? "green" : "#969494" }} />
                        </div>
                        <div onClick={() => buttonHandler({ no: 0, title: elevator.title, type: "down" })}>
                            <DownArrowButton style={{ color: currentElevator?.no === 0 && currentElevator?.type === 'down' ? "green" : "#969494" }} />
                        </div>
                    </>
                )}
                {elevator.no === 0 && (
                    <div onClick={() => buttonHandler({ no: 1, title: elevator.title, type: "up" })}>
                        <UpArrowButton style={{ color: currentElevator?.no === 1 && currentElevator?.type === 'up' ? "green" : "#969494" }} />
                    </div>
                )}
            </div>
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
