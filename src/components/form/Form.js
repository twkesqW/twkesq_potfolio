import "./formStyles.css";

import React from "react";

const Form = () => {
  return <div className="form">
    <form>
      <label>Your name</label>
      <input type="text"></input>

      <label>Email</label>
      <input type="email"></input>

      <label>Subject</label>
      <input type="text"></input>

      <label>Message</label>
      <textarea type="text" rows={6} placeholder="Type your message Here..."></textarea>

      <button className="btn">Send</button>
    </form>
  </div>;
};

export default Form;
