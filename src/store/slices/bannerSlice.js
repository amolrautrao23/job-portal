import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBanner = createAsyncThunk("fetchBanner", async () => {
    try {
        const res = await fetch("https://hatsoffcareer.onrender.com/api/banner/fetchallbanner");
        const result=await res.json();
        return result.banner;
      } catch (error) {
        console.log("err",error);
      }
   
})

const BannerSlice=createSlice({
    name:"banner",

        initialState: {
            isLoading: false,
            data: [],
            isError: false,
        },     

    extraReducers: (builder) => {
        builder.addCase(fetchBanner.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchBanner.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.data=action.payload;
        })
        builder.addCase(fetchBanner.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.log("Error", action.payload);
        })
    },
     reducers:{ 
            addBanner(state,action){
                state.push(action.payload);
            },
            editBanner(state,action){},
            removeBanner(state,action){},
    }
})
export default BannerSlice.reducer;
export const {addBanner,editBanner,removeBanner}=BannerSlice.actions;