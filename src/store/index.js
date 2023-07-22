import { configureStore } from "@reduxjs/toolkit";
import JobSlice from "./slices/JobSlice";
import bannerSlice from "./slices/bannerSlice";


const store = configureStore({
    reducer: {
        job: JobSlice,
        banner:bannerSlice,       
    }
})
export default store;