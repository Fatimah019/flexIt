import { apiCallBegan, apiCallFailed, apiCallSuccess } from "../action";
import axios from "axios";

export const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) return next(action);

    next(action);
    const { url, method, onStart, onError, onSuccess, params } = action.payload;

    try {
      if (onStart) dispatch({ type: onStart });
      const response = await axios.request({
        baseURL: "https://api.unsplash.com",
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_API_TOKEN}`,
        },
        url,
        method,
        params,
      });

      if (onSuccess) return dispatch({ type: onSuccess, payload: response.data });
      dispatch({ type: apiCallSuccess.type, payload: response.data });
    } catch (error) {
      // implement sweet alert here for general error notification
      console.log("logging errors..");
      console.log(error.response);
      if (error.response && error.response.data && error.response.data.message) {
        //   alert response
        console.log(error.response.data.message);
      }
      if (onError) return dispatch({ type: onError, payload: error.response });

      dispatch({ type: apiCallFailed.type, payload: error.response });
    }
  };
