import { createSlice, current } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { USER_MODEL } from '~/models/user.model';

interface IAuth {
  signedIn: boolean;
  userInfo?: USER_MODEL;
}

const initialState: IAuth = {
  signedIn: false,
  userInfo: null,
};

// Actual Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setSignedIn(state, action) {
      state.signedIn = action.payload;
    },
    setProfile(state, action) {
      state.userInfo = action.payload;
    },
    setFavoriteProducts(state, action) {
      state.userInfo = {
        ...current(state.userInfo),
        favorites: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      state.signedIn = action.payload.auth.authState;
      state.userInfo = action.payload.auth.userInfo;
    });
  },
});

export const { setSignedIn, setFavoriteProducts, setProfile } =
  authSlice.actions;

export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
