import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accommodationApi = createApi({
  reducerPath: "accommodation",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001" }),
  endpoints: (builder) => ({
    getAllAccommodation: builder.query({
      query: () => "/accommodations",
    }),
    getAccommodation: builder.query({
      query: (id: any) => `/accommodations/${id}`,
    }),
  }),
});

export const { useGetAllAccommodationQuery, useGetAccommodationQuery } =
  accommodationApi;
