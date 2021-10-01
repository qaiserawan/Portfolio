import React from "react";
import style from "./Contact.module.css"

const Contact = () => {
  return (
    <section className={style.contact}>
    <div className="container">
      <div className={style.contact_txt}>
        <div className={style.contact_line}></div>
        <h1>Let’s Make Something Great Together</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
          nostrud exercitation.
        </p>
      </div>
      <div className={style.contact_form}>
    <div>
      <form className={style.form_inline}>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="tel" name="phone" id="phone" placeholder="Phone" />
         <select id="Budget" name="Budget">
          <option value="budget">Budget</option>
          <option value="budget1">Budget1</option>
          <option value="budget2">Budget2</option>
        </select>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>
        
        
    </form>
        <div className={style.BtnHire}>
            <button className={style.HireBtn}>Hire Me</button>
        </div>
    </div>
    </div>
      </div>
    </section>
  );
};

export default Contact;
