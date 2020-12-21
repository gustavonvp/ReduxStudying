import { IProduct,  ActionTypes } from './types';

export function addProductToCardRequest(product: IProduct) {
        return{
            type:ActionTypes.AddProductToCartRequest,
            payload:{
                product,
            }
        }
}


export function addProductToCardSucess(product: IProduct) {
    return{
        type:ActionTypes.AddProductToCartSucess,
        payload:{
            product,
        }
    }
}

export function addProductToCardFailure(productId: number) {
    return{
        type:ActionTypes.AddProductToCartFailure,
        payload:{
            productId,
        }

    }
}