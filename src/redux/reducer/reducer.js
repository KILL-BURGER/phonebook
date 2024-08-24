let initialState = {
    contactList: [],
    word: ''
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'ADD_CONTACT' :
            return {
                ...state,
                contactList: [...state.contactList, {name: payload, phoneNumber: payload.phoneNumber}]
            };
        case 'SEARCH_CONTACT':
            return {
                ...state,
                word: payload.word
            };
        default :
            return {...state};
    }
};

export default reducer;