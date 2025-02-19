const initState = {
    users: [
        { id: 1, name: 'Dean' },
        { id: 2, name: 'NgAnh' },
        { id: 3, name: 'ThaiPhuc' },
    ],
    posts: []
}

// state noi lưu trữ data của redux
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('>> run into delete user: ', action)
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            // console.log('>> check users: ', users)
            return {
                // copy state 
                ...state, users
            };
        // case y:
        //   // code block
        //   break;
        default:
            return state;
    }
}

export default rootReducer;