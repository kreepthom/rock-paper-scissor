import { createSlice } from "@reduxjs/toolkit";


interface IinitialState {
    pickedIA: null | number
    pickedP: null | number
    countscore: number
    step: number
    win: boolean
    modal: boolean
    draw: boolean
}
const initialState: IinitialState = {
    pickedIA: null,
    pickedP: null,
    countscore: 0,
    step: 0,
    win: true,
    draw: false,
    modal: false,
    // mode:''
}
const globalState = createSlice({
    name: 'state [ global ]',
    initialState,
    reducers: {
        handlepickedP: (state, action) => {
            state.pickedP = action.payload
        },
        handleStep: (state, action) => {
            state.step = action.payload
        },
        handlepickedIA: (state, action) => {
            state.pickedIA = action.payload
        },
        handleWin: (state, action) => {
            state.win = action.payload
        },
        handleDraw: (state, action) => {
            state.draw = action.payload
        },
        handleModal: (state) => {
            state.modal = !state.modal
        },
        addCountScore:(state)=>{
            state.countscore += 1 
        },
        resetCountScore:(state)=>{
            state.countscore = 0 
        }
    }
})
export const { 
    handlepickedP,
    handleStep, 
    handlepickedIA, 
    handleWin, 
    handleDraw, 
    handleModal,
    addCountScore,
    resetCountScore 
} = globalState.actions
export default globalState.reducer