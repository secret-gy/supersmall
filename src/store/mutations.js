import {ADD_COUNT, ADD_GOOD} from './mutations-types'
export default {
    [ADD_COUNT](state, payloda){
    },
    [ADD_GOOD](state, payloda){
        payloda.checked = true
        state.cartList.push(payloda)
    }
}