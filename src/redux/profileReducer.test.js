import profileReducer, { addPostActionCreator, deletePost } from './profileReducer';

let state = {
    posts: [
        { id: 1, text: 'Hello!', likescount: 12 },
        { id: 2, text: 'How are you?', likescount: 5 }
        ]
};

it('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('I am Faul');
    
    // 2. actions
    let newState = profileReducer(state,action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('length of post should be decremented', () => {
    // 1. test data
    let action = deletePost(1);
    
    // 2. actions
    let newState = profileReducer(state,action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(1);
});

it('length of post should be decremented', () => {
    // 1. test data
    let action = deletePost(1000);
    
    // 2. actions
    let newState = profileReducer(state,action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});
