
// import {ADD_NOTE, DELETE_NOTE} from "../actions/noteActions";

const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    notes: [{
        text: 'Groceries Shopping List : milk,bread,salt,potatoes'
        , createdOn: new Date().toDateString()
    },
    {
        text: 'Project Ideas: room rental web app, book exchange app, blog web app'
        , createdOn: new Date().toDateString()
    }]
};


const noteSlice = createSlice({
    name: 'note',
    initialState: initialState,
    reducers: {
        // this is add action
        add: (state, action) => {
            state.notes.push({
                text: action.payload,
                createdOn: new Date().toDateString()
            })
        },
        delete: (state, action) => {
            state.notes.splice(action.payload, 1);
        }
    }
});

export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;

// selector

export const noteSelector = (state) => state.noteReducer.notes;


// export function noteReducer(state=initialState, action){
//     switch(action.type){
//         case ADD_NOTE:
//             return {
//                 ...state,
//                 notes:[
//                     ...state.notes,
//                     {
//                         text:action.text,
//                         createdOn: new Date()
//                     }
//                 ]
//             }
//         case DELETE_NOTE:
//             state.notes.splice(action.index,1);
//             console.log(state.notes);
//             return{
//                 ...state,
//                 notes: [...state.notes]
//             }
//         default:
//             return state;
//     }
// }