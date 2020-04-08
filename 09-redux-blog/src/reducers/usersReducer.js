 const usersReducer = (state = [] , action) => {
    switch(action.type) {
        case 'FETCH_USER':
            return [...state, action.payload]; // making array of users
        
        default : 
            return state;
    } 
}

export default usersReducer;