import {configureStore} from "@reduxjs/toolkit"
import LoginState from "./LoginState" 

const Store = configureStore({
    reducer : {
        auth : LoginState,
    }
});

export default Store 