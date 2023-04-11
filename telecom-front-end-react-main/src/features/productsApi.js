import{createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:8006"}),
    endpoints: (builder) =>({
        getAllProducts: builder.query({
        query:() => "plan"
        }),
    }),
});

export const { useGetAllProductsQuery } = productsApi