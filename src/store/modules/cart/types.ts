export enum ActionTypes {
    AddProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
    AddProductToCartSucess = 'ADD_PRODUCT_TO_CART_SUCESS',
    AddProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',

}

export interface IProduct{
    id: number;
    title: string;
    price: number;
}

export interface ICartItem{
    product: IProduct;
    quantity: number;
}

export interface IcartState{
    items: ICartItem[];
    failedStockCheck: number[];
}
