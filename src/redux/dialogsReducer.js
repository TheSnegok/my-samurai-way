const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [
        {message: 'Hello!',id: 1},
        {message: 'How are you?',id: 2},
        {message: `I'm fine, and what about you?`,id: 3},
        {message: `I'm too, what about weather?`,id: 4},
        {message: 'My weather is hot, your weather?',id: 5},
        {message: 'Too hot',id: 6}
    ],
    dialogs: [
        {name: 'Lyffi',id: 1},
        {name: 'Nami',id: 2},
        {name: 'Alex',id: 3},
        {name: 'Fred',id: 4},
        {name: 'Langard',id: 5},
        {name: 'Max',id: 6},
        {name: 'Sang',id: 7}
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {message: action.message, id: 7}]
            };
        }
        default: 
            return state;
    }
}

export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message})

export default dialogsReducer;