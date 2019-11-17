
export default function (state = [], action) {
    const { payload } = action;
    switch (action.type) {
        case 'ADD_CART':
            const indx = state.findIndex(el => el.itemname === payload.itemname);
            const result = indx >= 0 ? state.map(el => {
                return el.itemname === payload.itemname ? { ...payload, qty: el.qty + payload.qty } : el
            }) : [...state, payload];
            return result;

        default:
            return state;
    }
}