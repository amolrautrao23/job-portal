	import { createSlice } from "@reduxjs/toolkit";

const JobSlice = createSlice({
    name: "job",
    initialState: [
        {   id:1,
            title:"React Js Developer",
            salary:3,
            experience:1,
            description:"this is job Description",
            descPoints:["job description point 1","job description point 2","job description point 3"],
            responsibilities:["job responsibility point 1","job responsibility point 2","job responsibility point 3"],
            mustPoints:["must point 1","must point 2","must point 3"]
        },
        {   id:2,
            title:"Vue Js Developer",
            salary:13,
            experience:6,
            description:"this is job Description",
            descPoints:["job description point 1","job description point 2","job description point 3"],
            responsibilities:["job responsibility point 1","job responsibility point 2","job responsibility point 3"],
            mustPoints:["must point 1","must point 2","must point 3"]
        },
        {   id:3,
            title:"Vue Js Developer",
            salary:13,
            experience:6,
            description:"this is job Description",
            descPoints:["job description point 1","job description point 2","job description point 3"],
            responsibilities:["job responsibility point 1","job responsibility point 2","job responsibility point 3"],
            mustPoints:["must point 1","must point 2","must point 3"]
        },
        {   id:4,
            title:"Vue Js Developer",
            salary:13,
            experience:6,
            description:"this is job Description",
            descPoints:["job description point 1","job description point 2","job description point 3"],
            responsibilities:["job responsibility point 1","job responsibility point 2","job responsibility point 3"],
            mustPoints:["must point 1","must point 2","must point 3"]
        },
    ],
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
            state.splice(action.payload,1)
            // console.log(action.payload);
        },
        removeAllJob(state, action) { 
            state.length=0;
        }
    }
})
// console.log(JobSlice);
export default JobSlice.reducer;
export const { addNewJob,editJob, removeSingleJob,removeAllJob } = JobSlice.actions;