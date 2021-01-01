import React from "react";
var renderfield = (field) => {
  switch (field.Type) {
    case "TextBox":
      return <input type="text" size={field.Size} maxLength={field.Size} id={field.id}/>;
    case "SecretTextBox":
      return <input type="password" size={field.Size} maxLength={field.Size} id= {field.id} />;
    case "CheckBox":
      return (
        <div>
          {field.Options.map((value) => (
            <label>
              <input
                type="checkbox"
                name={value.DisplayValue}
                value={value.Value}
                id={value.Value}
              />
              <span> </span>
              {value.DisplayValue}
              <span>
                <br />
              </span>
            </label>
          ))}
        </div>
      );
    case "Dropdown":
      return (
        <select id= {field.id}>
          {field.DropdownValue.map((value) => (
            <option value={value.Value}>{value.DisplayValue}</option>
          ))}
        </select>
      );
    case "RadioButton":
      return (
        <div>
          {field.Options.map((value) => (
            <label>
              <input
                type="radio"
                name={value.DisplayValue}
                value={value.Value}
                id={value.Value}
              />
              <span> </span>
              {value.DisplayValue}
              <span>
                <br />
              </span>
            </label>
          ))}
        </div>
      );
    default:
      return <input type={field.Type} />;
  }
};
export default renderfield;
