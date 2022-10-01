import { IconClose } from "./SVG/Icon"
import { ImageRules,ImageRulesBonus } from "./SVG/Image"
import { useDispatch } from "react-redux"
import { handleModal } from "../store/reducers/globalReducer"

export const ModalRules = () => {

  const dispatch = useDispatch()
  return (
    <div className='modal'>
        <div className="modal__content">
            <div>
                <h4>rules</h4>
                <IconClose Click={() => dispatch(handleModal())}/>
            </div>
            <ImageRules/>
        </div>
    </div>
  )
}
