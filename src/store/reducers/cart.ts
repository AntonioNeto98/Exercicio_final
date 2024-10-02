import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Produto } from "../../components/CardaHero"



type CartState = {
    items: Produto[];
    isOpen: boolean;
    formData: any;
    
};

const initialState: CartState = {
    items: [],
    isOpen: false,
    formData: {},
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Produto>) => {
            const produto = state.items.find((item) => item.id === action.payload.id);
            if (!produto) {
                state.items.push(action.payload);
            } else {
                alert('Este sabor já está no carrinho');
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
        saveFormData: (state, action: PayloadAction<any>) => {
            state.formData = action.payload;
        }
    },
    
});



export const { add, open, close, remove, saveFormData } = cartSlice.actions;
export default cartSlice.reducer;