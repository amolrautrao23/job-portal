import { createSlice } from "@reduxjs/toolkit";
import img1 from "../../img/img2.jpg"
import img2 from "../../img/img1.jpg"
import img3 from "../../img/img2.jpg"


const BannerSlice=createSlice({
    name:"banner",
    initialState:[
        {
            // id:1,
            title:"This is title",
            description:"This is description",
            image:img1,
        },
        {
            // id:2,
            title:"This is title 2",
            description:"This is description",
            image:img2,
        },
        {
            // id:3,
            title:"This is title 3",
            description:"This is description",
            image:img3,
        },
       
    ],
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