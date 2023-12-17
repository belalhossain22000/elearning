import { baseApi } from "./baseApi";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get users
    getClassLink: builder.query({
      query: () => "/get-class-link",
      providesTags: ["classes"],
    }),

    // update user by email
    updateSingleClass: builder.mutation({
      query: (updatedData) => ({
        url: `/update-class-link`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["classes"],
    }),
  }),
});

export const { useGetClassLinkQuery, useUpdateSingleClassMutation } = usersApi;
