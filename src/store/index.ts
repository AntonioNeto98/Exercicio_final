import { configureStore } from "@reduxjs/toolkit"
import cart from "./reducers/cart"
import { apiSlice } from "./apiSlice";


export const store = configureStore ({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cart, 
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

