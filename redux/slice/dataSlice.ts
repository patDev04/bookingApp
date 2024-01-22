// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import next from "next";

// export const fetchData = createAsyncThunk("data/getAllData", async () => {
//   try {
//     const res = await fetch("http://localhost:4000/destinations", {
//       next: {
//         revalidate: 10,
//       },
//     });
//     return await res.json();
//   } catch (error) {
//     console.log(error);
//   }
// });

// // interface DataItem {
// //   id: number;
// //   name: string;
// //   country: string;
// //   continent: string;
// //   region: string;
// //   description: string;
// //   image: {};
// //   latitude: number;
// //   longitude: number;
// //   fun_things_to_do: [];
// // }

// interface DataSliceState {
//   data: [];
//   state: "idle" | "pending" | "succeeded" | "failed";
//   isLoading: boolean;
//   error: string | null;
// }

// const initialState: DataSliceState = {
//   data: [],
//   state: "idle",
//   isLoading: false,
//   error: null,
// };

// const dataSlice = createSlice({
//   name: "data",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.state = "pending";
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         const filterCountry = new Set();
//         const filterData = action.payload.filter((item: any) => {
//           if (!filterCountry.has(item.country)) {
//             filterCountry.add(item.country);
//             return true;
//           }
//           return false;
//         });
//         state.data = filterData;
//         state.state = "succeeded";
//         state.isLoading = false;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.isLoading = false;
//         state.state = "failed";
//         state.error = action.payload as string;
//       });
//   },
// });

// export const {} = dataSlice.actions;
// export default dataSlice.reducer;
