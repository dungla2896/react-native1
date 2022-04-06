import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Username } from "../../models/username";

export interface SignUpState {
    isSignUp: boolean;
    logging?: boolean;
    currentUser?: Username;
    message: any;
}

const initialState: SignUpState = {
    isSignUp: false,
    logging: false,
    currentUser: undefined,
    message: '',
}

const userSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        signup(state, action: PayloadAction<Username>) {
            state.logging = true;
        },
        signupSuccess(state, action: PayloadAction<Username>) {
            state.isSignUp = true;
            state.logging = false;
            state.currentUser = action.payload;
        },
        signupFailed(state, action: PayloadAction<string>) {
            state.logging = false;
        },
        logout(state) {
            state.currentUser = undefined;
        },
    },
});

// Actions
export const userActions = userSlice.actions;

// Selectors
export const seclectIsSignUp = (state: any) =>   state.signUp.isSignUp;
export const seclectIsLogging = (state: any) =>   state.signUp.isLogging;
export const selectErrorMessage = (state: any) => state.signUp.message;
export const selectUser = (state: any) => state.signUp.currentUser;

// Reducer
const signUpReducer = userSlice.reducer;
export default signUpReducer;