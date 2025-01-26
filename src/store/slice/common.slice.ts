/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

interface CommonSlice {
  lang: string;
  dict: any;
}

const initialState: CommonSlice = {
  lang: 'en',
  dict: {},
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<string>) {
      state.lang = action.payload;
    },
    setDict(state, action: PayloadAction<any>) {
      state.dict = action.payload;
    },
  },
  extraReducers(builder) {},
});

export const { setLang, setDict } = commonSlice.actions;

export default commonSlice.reducer;
