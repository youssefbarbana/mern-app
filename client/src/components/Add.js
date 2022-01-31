import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../js/actions/Contact";

const Add = () => {
  const [user, setuser] = useState({ name: "", email: "", phone: "" });
  const userReducer = useSelector((state) => state.contactreducer.user);

  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();
  useEffect(() => {
    edit ? setuser(userReducer) : setuser({ name: "", email: "", phone: "" });
  }, [edit, userReducer]);

  return (
    <div>
      <h2>name</h2>
      <input
        placeholder={user.name}
        onChange={(e) => setuser({ ...user, name: e.target.value })}
      />
      <h2>email</h2>
      <input
        placeholder={user.email}
        onChange={(e) => setuser({ ...user, email: e.target.value })}
      />
      <h2>phone</h2>
      <input
        placeholder={user.phone}
        onChange={(e) => setuser({ ...user, phone: e.target.value })}
      />
      <button onClick={!edit ? () => dispatch(addContact(user)) : null}>
        {edit ? "save" : "add"}
      </button>
    </div>
  );
};

export default Add;
