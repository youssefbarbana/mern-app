import {
  GET_CONTACT_LOAD,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  ADD_CONTACT_LOAD,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  DELETE_CONTACT,
  GET_CONTACT,
  UPLOAD_CONTACT,
} from "../constant/Contact";
import axios from "axios";
export const getcontact = () => async (dispatch) => {
  dispatch({ type: GET_CONTACT_LOAD });
  try {
    let result = await axios.get("/api/contact/");
    dispatch({ type: GET_CONTACT_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error });
    console.log(error);
  }
};

export const deletecontact = (id) => (dispatch) => {
  axios
    .delete(`/api/contact/${id}`)
    .then((res) => dispatch(getcontact()))
    .catch((err) => console.log(err));
};

export const addContact = (user) => async (dispatch) => {
  dispatch({ type: ADD_CONTACT_LOAD });
  try {
    let result = await axios.post("/api/contact/", user);
    dispatch({ type: ADD_CONTACT_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: ADD_CONTACT_FAIL, payload: error });
    console.log(error);
  }
};
export const getonecontact = (id) => (dispatch) => {
  axios
    .get(`/api/contact/${id}`)
    .then((res) => dispatch({ type: GET_CONTACT, payload: res.data.response }))
    .catch((err) => console.log(err));
};

export const uploadcontact = (id) => (dispatch) => {
  axios
    .put(`/api/contact/${id}`)
    .then((req) => dispatch({ type: UPLOAD_CONTACT, payload: req.body }))
    .catch((err) => console.log(err));
};
