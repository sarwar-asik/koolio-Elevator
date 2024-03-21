
import LevelButton from '../../../../components/UI/LevelButton'
import UpArrowButton from '../../../../components/UI/UpArrowButton'
import { IElevator } from '../../../../types/elevator'

export default function ElevatorCard({ elevator }: { elevator: IElevator }) {
    console.log(elevator, 'elevator data')
    return (
        <div className="" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <div className="button-section">
                <UpArrowButton />

            </div>

            <div className='elevator-card' >
                <LevelButton>{elevator?.title}</LevelButton>
            </div>
        </div>
    )
}
