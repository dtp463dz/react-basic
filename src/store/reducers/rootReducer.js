const initState = {
    users: [
        { id: 1, name: 'Dean' },
        { id: 2, name: 'NgAnh' },
    ]
}

// state noi lưu trữ data của redux
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;