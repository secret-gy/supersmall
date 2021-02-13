import {ADD_COUNT, ADD_GOOD} from './mutations-types'
export default {
    addCart(context, payload){
        // console.log(payload);
        // for(let item of context.state.cartList){
        //     if(context.state.cartList.iid == payload.iid){
        //         // payload.count = 1
        //         // context.commit(ADD_COUNT, item)
        //         console.log(111);
        //     }else{
        //         console.log(payload);
        //         // context.commit(ADD_GOOD, payload)
        //     }
        // }

        return new Promise((res, rej) => {
            let old = context.state.cartList.find(item => item.iid === payload.iid)

            if(old) {
                payload.count = 1
                context.commit(ADD_COUNT, payload)
                res('count++')
            }else {
                payload.count = 1
                context.commit(ADD_GOOD, payload)
                res('addNew')
            }
        })
    }
}