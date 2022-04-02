import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Username } from "../../models/username";


export interface SignUpState {
    isSignUp: boolean;
    logging?: boolean;
    isLoggedIn: boolean;
    currentUser?: Username;
    signupFailed: boolean;
    message: any;
}

const initialState: SignUpState = {
    isSignUp: false,
    logging: false,
    isLoggedIn: false,
    currentUser: undefined,
    signupFailed: true,
    message: '',
}

const userSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        signup(state, action: PayloadAction<Username>) {
            state.logging = true;
            state.message = '';
            state.signupFailed = true;
        },
        signupSuccess(state, action: PayloadAction<Username>) {
            state.isSignUp = true;
            state.logging = false;
            state.currentUser = action.payload;
            state.signupFailed = true;
        },
        signupFailed(state, action: PayloadAction<string>) {
            state.logging = false;
            state.signupFailed = false;
            state.message = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        },
    },
});

// Actions
export const userActions = userSlice.actions;

// Selectors
export const seclectIsSignUp = (state: any) =>   state.signup.isSignUp;
export const seclectIsLogging = (state: any) =>   state.signup.isLogging;
export const selectErrorMessage = (state: any) => state.signup.message;

// Reducer
const signUpReducer = userSlice.reducer;
export default signUpReducer;