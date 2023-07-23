import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch data from api 
export const fetchJobs = createAsyncThunk("fetchJobs", async () => {
    const res = await fetch("http://localhost:3000/jobs");
    const result=await res.json();
    return result;
})
const JobSlice = createSlice({
    name: "job",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.data = action.payload;
        })
        builder.addCase(fetchJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.log("Error", action.payload);
        })
    },
    reducers: {
        addNewJob(state, action) {
            state.push(action.payload);
            // console.log(action.payload);
        },
        editJob(state, action) {
            // state.push(action.payload);
            // console.log(action.payload);
        },
        removeSingleJob(state, action) {
            state.splice(action.payload, 1)
            // console.log(action.payload);
        },
        removeAllJob(state, action) {
            state.length = 0;
        }
    }
})
// console.log(JobSlice);
export default JobSlice.reducer;
export const { addNewJob, editJob, removeSingleJob, removeAllJob } = JobSlice.actions;