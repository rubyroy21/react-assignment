import * as types from "./type";

const initState = {
    loading: false,
    errorMsg: "",
    country: {},
    city: {}
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case(types.COUNTRY_ADD_LOAD):
            return {...state, loading: true}
        case(types.COUNTRY_ADDED_SUCCESS):
            return {...state, loading: false, country: action.payload.country}
        case(types.COUNTRY_ADD_FAILURE):
            return {...state, loading: false, errorMsg: action.payload.errorMsg}

        case(types.CITY_ADD_LOAD):
            return {...state, loading: true}
        case(types.CITY_ADDED_SUCCESS):
            return {...state, loading: false, city: action.payload.city}
        case(types.CITY_ADD_FAILURE):
            return {...state, loading: false, errorMsg: action.payload.errorMsg}
        default:
            return state;
    }
}

export default reducer