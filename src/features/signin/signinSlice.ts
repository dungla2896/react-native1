import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLogin } from "../../models/username";

export interface LogginPayload {
    login: string;
    validitySeconds: number;
    password: string;
}

export interface AuthState {
    isLoggedIn: boolean;
    logging?: boolean;
    loginFailed: boolean;
    currentUser?: UserLogin;
    message: string;
}

const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    loginFailed: true,
    currentUser: undefined,
    message: '',
}

const signInSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LogginPayload>) {
            state.logging = true;
            state.message = '';
        },
        loginSuccess(state, action: PayloadAction<UserLogin>) {
            state.isLoggedIn = true;
            state.logging = false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.logging = false;
            state.isLoggedIn = false;
            state.loginFailed = false;
            state.message = action.payload;
        },

        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        },
    },
});

// Actions
export const signInActions = signInSlice.actions;

// Selectors
export const seclectIsLoggedIn = (state: any) =>   state.signIn.isLoggedIn;
export const seclectIsLogging = (state: any) =>   state.signIn.logging;
export const seclectCurrent = (state: any) => state.signIn.currentUser;
export const seclectErrorMessaga = (state: any) => state.signIn.message;
export const seclectLoginfailed = (state: any) => state.signIn.loginFailed;

// Reducer
const signInReducer = signInSlice.reducer;
export default signInReducer;