import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Produto } from '../components/CardaHero';

    type Product = {
        id: number
        price: number
    }


    type PurchasePayload = {
        products: Product[]
        billing: {
            name: string
        }
        delivery: {
            cidade: string
            endereco: string
            cep: string
            numero: string
        }
        payment: {
            card: {
                name: string
                number: string
                expires: {
                    month: number
                    year: number
                }
                code: number
            }
            instalments: number
        }
    }

    export const api = createApi({
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://exercicio-final-three.vercel.app/'
        }),
        endpoints: (builder) => ({
            getCardapio: builder.query<Produto[], void> ({
                query: () => 'cardapio'
            }),
            purchase: builder.mutation<any, PurchasePayload> ({
                query: (body: PurchasePayload) => ({
                    url: 'checkout',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body,
                })
            }) 
        }),
    })


export const { useGetCardapioQuery, usePurchaseMutation } = api
export default api