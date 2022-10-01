import { RootState } from "../store/store"
import { useDispatch, useSelector } from "react-redux"
import { addCountScore, resetCountScore,handleStep } from '../store/reducers/globalReducer'

export const ShowState = () => {

    const dispatch = useDispatch()
    const { win, draw } = useSelector((state: RootState) => state.state)

    const handleCountScore = () => {
        if (draw) return dispatch(handleStep(0))
        if (win) return dispatch(addCountScore()) && dispatch(handleStep(0))
        if (!win) return dispatch(resetCountScore()) && dispatch(handleStep(0))

    }

    return (
        <div className="showstate">
            <div className='showstate__container'>
                <h1>{
                    draw ? 'draw' : win ? 'you win' : 'you lose'
                }</h1>
                <button onClick={handleCountScore}>play again</button>
            </div>
        </div>
    )
}
