import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
            { id: 1, text: 'Hello!', likescount: 12 },
            { id: 2, text: 'How are you?', likescount: 5 }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            newMessageText: ''
        },
        sideBar: {
            users: [
                {id: 1, name: 'Lyffi Thompson'},
                {id: 2, name: 'Nami Oxford'},
                {id: 3, name: 'Alex Rayden'}
            ]
        }
    },
    _callSubscriber() {
        console.log("state is change!");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },  

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    }
}

window.state = store.getState();
export default store;