import { configureStore } from "@reduxjs/toolkit";
import JobSlice from "./slices/JobSlice";
import bannerSlice from "./slices/bannerSlice";
import appliedJobSlice from "./slices/appliedJobSlice";


const store = configureStore({
    reducer: {
        job: JobSlice,
        banner:bannerSlice, 
        application:appliedJobSlice,      
    }
})
export default store;