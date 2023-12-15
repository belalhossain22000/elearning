import { baseApi } from "./baseApi";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get users
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),
    // get task by email
    getUserByEmail: builder.query({
      query: (email) => `/users/${email}`,
      providesTags: ["users"],
    }),

    // post user
    postUser: builder.mutation({
      query: (data) => ({
        url: "/users/create-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    // post user
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    // update user by email
    updateUserByEmail: builder.mutation({
      query: ({ updatedData, email }) => ({
        url: `/users/${email}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["users"],
    }),

    //delete user
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/deleteUser/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  usePostUserMutation,
  useGetUsersQuery,
  useGetUserByEmailQuery,
  useDeleteUserMutation,
  useLoginUserMutation,
  useUpdateUserByEmailMutation,
} = usersApi;
