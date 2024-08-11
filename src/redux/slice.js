import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const initialState = {
    campers: null,
    filters: '',
    loading: false,
    error: null,
}

const camperSlice = createSlice({
  name: "campers",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchCampers.pending, (state) => { //1
      state.loading = true;
      state.error = false;
    })
    .addCase(fetchCampers.fulfilled, (state, action) => { //2
      state.loading = false;
      state.campers = action.payload;
      // console.log(action.payload);
      
    })
    .addCase(fetchCampers.rejected, (state) => { //3
      state.loading = false;
      state.error = true;
    })
});

export const campersReducer = camperSlice.reducer;