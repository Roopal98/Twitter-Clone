import { configureStore } from "@reduxjs/toolkit";
import tweetsSlice from "./tweetsSlice";

const store  = configureStore({
    reducer:{tweet:tweetsSlice.reducer}
})

export default store;