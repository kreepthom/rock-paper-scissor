import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { ShowState } from './ShowState'
import { IconPaper, IconRock, IconScissors } from './SVG/Icon'
import { Options } from './ThreeGameOptions'

interface IChoice {
    picked: number | any
    title: string
    disable?: boolean
    win: boolean
    draw: boolean
}


const Choice: FC<IChoice> = ({ picked = 0, title, disable, win, draw }) => {
    const iconOblect = [
        { icon: <IconRock />, color: 'red' },
        { icon: <IconPaper />, color: 'blue' },
        { icon: <IconScissors />, color: 'yellow' }
    ]

    const { icon, color } = iconOblect[picked]
    return (
        <div className='choice_container'>
            <h3>{title}</h3>
            <Options
                value={
                    title === 'you picked' && picked
                }
                icon={icon}
                size={`${color} Sizel 
                    ${disable && 'disableclick'}
                     ${!draw && win && 'shadow_win'}
                `}
            />
        </div>
    )
}

export const SelectionIA = () => {
    const { pickedP, pickedIA, win, draw } = useSelector((data: RootState) => data.state)

    return (
        <div className='selectia__container'>
            <Choice title={'you picked'} picked={pickedP} win={win} draw={draw} />
            <ShowState />
            <Choice title={'the house picked'} picked={pickedIA} disable win={!win} draw={draw} />
        </div>
    )
}
