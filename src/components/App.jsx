import React, { useEffect, useState } from "react";
import renderfield from "./Validation";
const SERVER_URL ="https://my-json-server.typicode.com/Charanselvam/json/db/form/form";


function usePosts() {
  const [form, setForm] = useState([]);

  useEffect(() => {
    fetch(SERVER_URL)
      .then((res) => res.json())
      .then((data) => {
        setForm(data);
        console.log(data);
      });
  }, []);
  console.log(form);

  return form;
}

export default function App() {
  const form = usePosts(); // new
  if (Object.keys(form).length < 1) {
    return "Loading...";
  }

  return (
    <li>
      <div className="container">
        <form id="contact" action="">
          <h1>{form.form_heading}</h1>
          {form.Attributes.map((field) => (
            <div className="input-group">
              <label htmlFor={field.Name}>{field.Name}</label>
              <fieldset>
                {/* {console.log(field.DropdownValue)} */}
                {renderfield(field)}
                {/* <label htmlFor={field.input.name}>{field.label.text}</label> */}
              </fieldset>
            </div>
          ))}

          <button type="submit">{form.ActionDisplayName}</button>
        </form>
      </div>
    </li>
  );
}
