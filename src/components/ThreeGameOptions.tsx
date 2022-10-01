import { FC, useEffect } from "react"
import { IconRock } from "./SVG/Icon"
import { IconPaper } from "./SVG/Icon"
import { IconScissors } from "./SVG/Icon"
import { useDispatch, useSelector } from 'react-redux'
import { handlepickedP, handleStep } from '../store/reducers/globalReducer'
import { numberGenerator } from '../helpers/numberGenerator'
import { handlepickedIA, handleWin, handleDraw } from '../store/reducers/globalReducer'
import { deliveration } from "../helpers/deliveration"
import { RootState } from "../store/store"


interface IOptions {
  icon: JSX.Element
  size?: string
  value: null | number | false
}

export const Options: FC<IOptions> = ({ icon, size, value }) => {

  const dispatch = useDispatch()
  const { pickedIA, pickedP, win, draw } = useSelector((data: RootState) => data.state)
  
  const dispathResult = (result: string | undefined) => {
    if (result === 'draw') return dispatch(handleDraw(true)) && dispatch(handleWin(false));
    if (result === 'lose') return dispatch(handleWin(false)) && dispatch(handleDraw(false));
    if (result === 'win')  return dispatch(handleWin(true)) && dispatch(handleDraw(false));
  }

  useEffect(() => {
    dispatch(handlepickedIA(numberGenerator()))
    dispathResult(deliveration(pickedIA, pickedP))
  }, [dispatch,pickedP,pickedIA])

  const handleValue = (value: number | null | false) => {
    dispatch(handleStep(1))
    dispatch(handlepickedP(value))
  }

  return (
    <div onClick={() => handleValue(value)} className={`options ${size}`}>
      <div className="options__button ">
        {icon}
      </div>
    </div>
  )
}

export const ThreeGameOptions = () => {
  return (
    <div className="container_threeop">
      <Options value={1} size='Sizem' icon={<IconPaper />} />
      <Options value={2} size='Sizem' icon={<IconScissors />} />
      <Options value={0} size='Sizem' icon={<IconRock />} />
    </div>
  )
}
