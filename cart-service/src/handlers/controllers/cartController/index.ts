import addToCart from "./addToCart"

export default (dependencies: any) => {
    return {
        addToCartController: addToCart(dependencies),
    }
}