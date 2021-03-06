import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../action";

let slice = createSlice({
  name: "images",
  initialState: {
    images: [],
    loading: false,
  },
  reducers: {
    fetchedImagesSuccess: (data, action) => {
      data.loading = false;
      data.images = action.payload;
    },
    fetchSearchedImagesSuccess: (data, action) => {
      data.loading = false;
      data.images = action.payload.results;
    },
    fetchStart: (data, action) => {
      data.loading = true;
    },
    fetchFailed: (data, action) => {
      data.loading = false;
    },
  },
});

const { fetchedImagesSuccess, fetchSearchedImagesSuccess, fetchStart, fetchFailed } = slice.actions;

export default slice.reducer;

export const fetchImages = (page, limit) =>
  apiCallBegan({
    url: `/photos?page=${page}&per_page=${limit}`,
    method: "GET",
    onSuccess: fetchedImagesSuccess.type,
    onStart: fetchStart.type,
    onError: fetchFailed.type,
  });
export const fetchSearchedImages = (query, page, limit) =>
  apiCallBegan({
    url: `/search/photos?page=${page}&per_page=${limit}}`,
    method: "GET",
    params: { query: query },
    onSuccess: fetchSearchedImagesSuccess.type,
    onStart: fetchStart.type,
    onError: fetchFailed.type,
  });
//   selectors

export const getImages = (state) => state.images;
