import { Logo } from './SVG/Logo'
import { LogoBonus } from './SVG/Logo'
import { useSelector } from "react-redux"
import { RootState } from '../store/store'

export const ScoreSection = () => {
    const {countscore,pickedP,step,pickedIA} = useSelector( (data:RootState) => data.state)
    return (
        <div className='score'>
            <Logo className='score__logo'/>
            <div className='score__count'>
                <span>score</span>
                <p>{countscore}</p>
            </div>
        </div>
    )
}
