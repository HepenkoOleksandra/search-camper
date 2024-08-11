import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetAllCampers } from "../services/camperAPI";


export const fetchCampers = createAsyncThunk( 
    "campers/fetchAll",
    async (_, thunkAPI) => {
        try {
            const data = await apiGetAllCampers();
            // console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)