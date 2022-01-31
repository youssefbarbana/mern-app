import {
  GET_CONTACT_LOAD,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  GET_CONTACT,
  UPLOAD_CONTACT,
  ADD_CONTACT_LOAD,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
} from "../constant/Contact";
const initstate = {
  contacts: [],
  loadcontacts: false,
  errors: null,
  user: {},
};

export const contactreducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_CONTACT_LOAD:
      return { ...state, loadcontacts: true };
    case GET_CONTACT_SUCCESS:
      return { ...state, contacts: payload, loadcontacts: false };
    case GET_CONTACT_FAIL:
      return { ...state, loadcontacts: false, errors: payload };
    case ADD_CONTACT_LOAD:
      return { ...state, loadcontacts: true };
    case ADD_CONTACT_SUCCESS:
      return { ...state, contacts: payload, loadcontacts: false };
    case ADD_CONTACT_FAIL:
      return { ...state, loadcontacts: false, errors: payload };
    case GET_CONTACT:
      return { ...state, user: payload };
    case UPLOAD_CONTACT:
      return { ...state, user: payload };
    default:
      return state;
  }
};
