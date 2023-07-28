import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch data from api 
export const fetchAppliedJobs = createAsyncThunk("fetchAppliedJobs", async () => {
    try {
        const res = await fetch("https://hatsoffcareer.onrender.com/api/application/appliedapplications",
            {
                method: 'GET',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                    "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjYzOTk4NGE0M2U2MzhkYjgyZmJhNDhkYyJ9LCJpYXQiOjE2OTAyMDE4NDR9.eTL0w6_QybXptYVay3BBPrHTm3a3P44B3Jpl1sVu4io'
                },

            });


        const result = await res.json();
        return result.application;

    } catch (error) {
        console.log(error);
    }
})
const appliedJobSlice = createSlice({
    name: "application",
    initialState: {
        isLoading: false,
        data: [],        
        sortedData:[],
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
        })
        builder.addCase(fetchAppliedJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.log("Error", action.payload);
        })
    },
    reducers: {

        sortApplication(state,action){
            let newSortedData;
            let tempSortData=state.data;
            if(action.payload==="a-z")
            {
                state.sortedData=tempSortData.sort((a,b)=>a.title.localeCompare(b.title))
            }
            if(action.payload==="z-a")
            {
                state.sortedData=tempSortData.sort((a,b)=>b.title.localeCompare(a.title))
            }
           
        }

    }
})
// console.log(JobSlice);
export default appliedJobSlice.reducer;
export const { sortApplication } = appliedJobSlice.actions;