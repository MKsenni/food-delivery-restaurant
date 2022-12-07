import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: [],
        pricesProducts: 0,
        count: 0,
    },
    reducers: {
        addProduct(state, action) {
            state.basket.push(action.payload)

            state.pricesProducts = state.basket.reduce((sum, current) => {
                return sum + parseInt(current.price)
            }, 0)
            state.count = state.basket.reduce((current) => {
                return current + 1
            }, 0)
        },
        removeProductBasket(state, action) {
            state.basket = state.basket.filter((item) => {
                return item.idx !== action.payload //в action.payload мы передаем id который был передан в задиспаченный(отправленный) action в basketCard
            } )
            state.pricesProducts = state.basket.reduce((sum, current) => {
                return sum + parseInt(current.price)
            }, 0)
            state.count = state.basket.reduce((current) => {
                return current + 1
            }, 0)
        }
    }
})

export const { addProduct, removeProductBasket } = basketSlice.actions

export default basketSlice.reducer
