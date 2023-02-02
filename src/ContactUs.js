import React, { useRef, useState } from "react";
import "./Pages_css/ContactUs.css";
import "./Pages_css/Home.css";
import image1 from "./Images/i1.PNG";
import image2 from "./Images/i2.PNG";
import image4 from "./Images/contactUS.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const err = useRef("");

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    contact: "",
    msg: "",
  });

  const UpdateData = (e) => {
    const { name, value } = e.target;

    setContactData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const validate = () => {
    if (contactData.name) {
      if (
        contactData.email &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactData.email)
      ) {
        if (contactData.contact && /\d{10,12}/.test(contactData.contact)) {
          if (contactData.msg) {
            err.current.innerText = "";
            return true;
          } else {
            err.current.innerText = "Please enter your message!";
            err.current.style.color = "red";
            return false;
          }
        } else {
          err.current.innerText = "Please enter valid contact number!";
          err.current.style.color = "red";
          return false;
        }
      } else {
        err.current.innerText = "Please enter valid email!";
        err.current.style.color = "red";
        return false;
      }
    } else {
      err.current.innerText = "Please enter your name!";
      err.current.style.color = "red";
      return false;
    }
  };

  const SubmitData = () => {
    if (validate()) {
      try {
        axios
          .post("http://localhost:7007/contact", contactData)
          .then((res) => {
            if (res.data.success === true) {
              err.current.innerText = "Successfully sent your details!";
              err.current.style.color = "green";
            } else {
              err.current.innerText = res.data.msg;
              err.current.style.color = "red";
            }
          })
          .catch((err) => {
            err.current.innerText = "Internal Error Occurred!";
            err.current.style.color = "red";
          });
      } catch (err) {
        err.current.innerText = "Internal Server Error Occurred!";
      }
    }
  };

  return (
    <div>
      <div className="contact">

        <div className="head img-div">
          <div>
            <div className="col1">
              <h1>Send us a message</h1>
              <p>
                Speak to us to see the magical transformation of your ideas into
                stunningly incredible solutions
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
              <div className="form">
                <form method="post">
                  <p
                    ref={err}
                    style={{ textAlign: "center", color: "red" }}>
                  </p>
                  <br/>

                  <label htmlFor="fname">Name *</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={contactData.name}
                    onChange={UpdateData}
                  />
                  <br />
                  <label htmlFor="lname">Email *</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Email Id"
                    name="email"
                    value={contactData.email}
                    onChange={UpdateData}
                  />
                  <br />
                  <label htmlFor="fname">Contact *</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Contact Number"
                    name="contact"
                    value={contactData.contact}
                    onChange={UpdateData}
                  />
                  <br />
                  <label htmlFor="lname">Message *</label>
                  <br />
                  <textarea
                    placeholder="Please share your requirements/queries here"
                    rows="4"
                    cols="50"
                    name="msg"
                    value={contactData.msg}
                    onChange={UpdateData}
                  />
                  <br />
                  <br />
                  <input
                    type="button"
                    className="btn btn-primary"
                    value="Submit"
                    onClick={SubmitData}
                  ></input>
                </form>
              </div>
          </div>

        {/* <div className="bg-danger mt-5">
          <div className="images">
            <img src={image1} alt="img1" />
            <img src={image2} alt="img2" />
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Contact;
