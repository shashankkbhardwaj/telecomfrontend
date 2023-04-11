import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items:[],
    status:null
};


export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () =>{
     const response= await axios.get("http://localhost:8006/plan")
     return response?.data
    }
)


const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:{
        [productsFetch.pending]:(state,action) =>{
            state.status = "pending";
        },
        [productsFetch.pending]:(state,action) =>{
            state.status = "success";
            state.items = action.payload;
        },
        [productsFetch.pending]:(state,action) =>{
            state.status = "rejected";
        },
    }
});

export default productSlice.reducer;