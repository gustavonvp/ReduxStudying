import { AxiosResponse } from 'axios'
import { all, select, takeLatest, call, put } from 'redux-saga/effects'
import { IState } from '../..'
import api from '../../../services/api'
import { addProductToCardRequest, addProductToCardSucess,addProductToCardFailure } from './action'
import { ActionTypes } from './types'

type CheckProductStockRequest = ReturnType<typeof addProductToCardRequest>

interface IStockResponse{
    id:number,
    quantity:number
}


function* checkProductStock({payload}:CheckProductStockRequest) {
    const { product} = payload

    const currentQuantity: number = yield select((state: IState)=> {
        return state.cart.items.find(item => item.product.id === product.id) ?.quantity ?? 0
    }) 

    const availableStockResponse: AxiosResponse<IStockResponse> = yield  call(api.get, `stock/${product.id}`)

    if(availableStockResponse.data.quantity > currentQuantity){
        yield put(addProductToCardSucess(product))
        console.log(console.log('deu certo'))
    }else{
        yield put(addProductToCardFailure(product.id))
        console.log('falta de estoque')
    }

}



export default all([
    takeLatest(ActionTypes.AddProductToCartRequest, checkProductStock)
])