import { IElevator } from '../../../types/elevator';
import '../style/elevator.css';
import ElevatorCard from './components/ElevatorCard';


const elevatorData: IElevator[] = [
    {
        title: "Level 2",
        no: "2"
    },
    {
        title: "Level 1",
        no: "1"
    },
    {
        title: "Level 0/ GL",
        no: "0"
    },
]

export default function ElevatorMainPage() {

    return (
        <div>
            <div className="main-elevator">
                {
                    elevatorData?.map((elevator: IElevator, index: number) => {
                        return <ElevatorCard elevator={elevator} key={index} />
                    })
                }
            </div>

        </div>
    )
}
