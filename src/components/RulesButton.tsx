import { useDispatch } from "react-redux"
import { handleModal } from "../store/reducers/globalReducer"


export const RulesButton = () => {
  const dispath = useDispatch()
  return (
    <div onClick={()=>dispath(handleModal())} className="rules_button">
        rules
    </div>
  )
}
