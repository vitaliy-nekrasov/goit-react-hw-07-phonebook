import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://637f1c1e5b1cc8d6f93abcba.mockapi.io/api/v1',
    tagTypes: ['Contacts'],
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

// import { createSlice } from '@reduxjs/toolkit';
// // import storage from 'redux-persist/lib/storage';
// // import { persistReducer } from 'redux-persist';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     filter: '',
//   },
//   reducers: {
//     addContact(state, action) {
//       const findContact = state.contacts.find(contact =>
//         contact.name
//           .toLocaleLowerCase()
//           .includes(action.payload.name.toLocaleLowerCase())
//       );
//       findContact
//         ? alert(`${action.payload.name} is already in contacts.`)
//         : state.contacts.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     updateFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addContact, deleteContact, updateFilter } =
//   contactsSlice.actions;

// Reducer

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// Selectors

// export const getContacts = state => state.contacts.contacts;
// export const getFilterValue = state => state.contacts.filter;
