import { ThreeGameOptions } from "./ThreeGameOptions"
import { useSelector } from "react-redux"
import { FiveGameOptions } from "./FiveGameOptions"
import { SelectionIA } from "./SelectionIA"
import { ModalRules } from "./ModalRules"

export const GameSection = () => {

  const { step,modal } = useSelector((state: any) => state.state)

  return (
    <div className="game_section">
      {
        step === 0 ?
          <ThreeGameOptions /> :
          <SelectionIA />
      }
      { modal &&
        <ModalRules />
      }
    </div>
  )
}
