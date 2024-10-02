import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    interface PurchaseInput {
    productId: string;
    quantity: number;
    userId: string;
    }

    interface Purchase {
    id: string;
    productId: string;
    quantity: number;
    userId: string;
    createdAt: string;
    }

    export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) =>   ({
        createPurchase: builder.mutation<Purchase, PurchaseInput>({
        query: (purchase) => ({
            url: '/purchases',
            method: 'POST',
            body: purchase,
        }),
        }),
    }),
    });

export const { useCreatePurchaseMutation } = apiSlice;