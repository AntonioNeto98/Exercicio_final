import { configureStore } from "@reduxjs/toolkit"
import cart from "./reducers/cart"
import { api } from "./api";


export const store = configureStore ({
    reducer: {
        [api.reducerPath]: api.reducer,
        cart: cart, 
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

