import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationApi = createApi({
  reducerPath: "destination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getAllDestination: builder.query({
      query: () => "/destinations",
    }),
    getCountry: builder.query({
      query: (country: any) => `destinations?country=${country}`,
    }),
  }),
});

export const { useGetAllDestinationQuery, useGetCountryQuery } = destinationApi;
