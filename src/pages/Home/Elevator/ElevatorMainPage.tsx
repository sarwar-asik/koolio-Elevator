import { useState } from 'react';
import { IElevator } from '../../../types/elevator';
import '../style/elevator.css';
import ElevatorCard from './components/ElevatorCard';



//! all elevator card data for reusable 
const elevatorData: IElevator[] = [
    {
        title: "Level 2",
        no: 2
    },
    {
        title: "Level 1",
        no: 1
    },
    {
        title: "Level 0/ GL",
        no: 0
    },
]


//! type of Button handler

export type IButtonHandler = {
    type: "up" | 'down';
    no: number;
    title: string;
    currentLevel: number
};
export default function ElevatorMainPage() {

    // ! state for handle elevator move in boxes 
    const [currentElevator, setCurrentElevator] = useState<IButtonHandler>({ no: 2, title: 'Levels 2', type: 'down', currentLevel: 2 });   ///! here, given level-2 as default


    return (
        <div>
            <div className="main-elevator">
                {/* //! I made reusable every elevator card with active  */}
                {
                    elevatorData?.map((elevator: IElevator, index: number) => {
                        return <ElevatorCard elevator={elevator} key={index} setCurrentElevator={setCurrentElevator} currentElevator={currentElevator} />
                    })
                }
            </div>

        </div>
    )
}
