const initialData = {
    vehicle : []
};

export const vehicleReducer = (state=initialData,action) =>{
    switch(action.type){
        case 'GET_ALL_VEHICLES':{
            return {
                ...state,
                vehicle: action.payload
            }
        }

        default:return state
    }
}