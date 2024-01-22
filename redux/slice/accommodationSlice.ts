// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchAccommodationApi = createAsyncThunk(
//   "accommodation/getAllAccommodations",
//   async () => {
//     try {
//       const res = await fetch("http://localhost:4001/accomodation/", {
//         next: {
//           revalidate: 10,
//         },
//       });
//       return await res.json();
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// interface accommodationSliceState {
//   accommodation: any;
//   state: "idle" | "pending" | "succeeded" | "failed";
//   isLoading: boolean;
//   error: string | null;
// }

// const initialState = {
//   accommodation: [],
//   state: "idle",
//   isLoading: false,
//   error: null,
// } as accommodationSliceState;

// const accommodationSlice = createSlice({
//   name: "accommodation",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) =>
//     builder
//       .addCase(fetchAccommodationApi.pending, (state) => {
//         state.state = "pending";
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchAccommodationApi.fulfilled, (state, action) => {
//         state.accommodation = action.payload;
//         state.state = "succeeded";
//         state.isLoading = false;
//       })
//       .addCase(fetchAccommodationApi.rejected, (state, action) => {
//         state.state = "failed";
//         state.isLoading = false;
//         state.error = action.payload as string;
//       }),
// });

// export const {} = accommodationSlice.actions;
// export default accommodationSlice.reducer;
