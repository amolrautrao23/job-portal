import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch data from api 
export const fetchAppliedJobs = createAsyncThunk("fetchAppliedJobs", async () => {
    try {
        const res = await fetch("https://hatsoffcareer.onrender.com/api/application/appliedapplications",
            {
                method: 'POST',
                headers: { 
                    'Accept':'*/*',
                    'Content-Type': 'application/json', 
                    "Authorization":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjYzOTk4NGE0M2U2MzhkYjgyZmJhNDhkYyJ9LCJpYXQiOjE2OTAyMDE4NDR9.eTL0w6_QybXptYVay3BBPrHTm3a3P44B3Jpl1sVu4io' 
            },
               
            });


const result = await res.json();
// console.log("openings,",result.opening)
return result.application;
    } catch (error) {
    console.log(error);
}
})
const JobSlice = createSlice({
    name: "job",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAppliedJobs.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAppliedJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.data = action.payload;
            console.log("applied jobs are:", action.payload);
        })
        builder.addCase(fetchAppliedJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.log("Error", action.payload);
        })
    },
    reducers: {

        removeApplication(state, action) {
            state.splice(action.payload, 1)
            // console.log(action.payload);
        },

    }
})
// console.log(JobSlice);
export default JobSlice.reducer;
export const { removeApplication } = JobSlice.actions;