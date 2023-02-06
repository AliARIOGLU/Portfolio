import axios from "axios";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessages] = useState(false);

  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };

  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!emailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!messages) {
      setErrMessages(true);
    }
    if (clientName && email && emailValidation(email) && messages) {
      axios.post("https://getform.io/f/1eaa783c-2f47-4a11-9eb3-409797d386ea", {
        name: clientName,
        email: email,
        message: messages,
      });
      setSuccessMsg(
        `Hello dear ${clientName}, Your messages has been sent successfully. Thank you for your time!`
      );
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };

  return (
    <div>
      <Title title="Get" subTitle="in Touch" />
      <div className="p-6 flex justify-between gap-20">
        <div className="w-1/2">
          <p
            className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px]
          border-b-zinc-800"
          >
            <span
              className="bg-designColor text-gray-700 text-sm font-titleFont font-medium
            px-2 rounded-md flex items-center justify-center"
            >
              Address:
            </span>
            Ankara, Turkey
          </p>
          <p
            className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px]
          border-b-zinc-800"
          >
            <span
              className="bg-designColor text-gray-700 text-sm font-titleFont font-medium
            px-2 rounded-md flex items-center justify-center"
            >
              Phone:
            </span>
            +05532201199
          </p>
        </div>
        <div className="w-1/2">
          <p
            className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px]
          border-b-zinc-800"
          >
            <span
              className="bg-designColor text-gray-700 text-sm font-titleFont font-medium
            px-2 rounded-md flex items-center justify-center"
            >
              Email:
            </span>
            ali.arioglu06@gmail.com
          </p>
          <p
            className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px]
          border-b-zinc-800"
          >
            <span
              className="bg-designColor text-gray-700 text-sm font-titleFont font-medium
            px-2 rounded-md flex items-center justify-center"
            >
              Freelance:
            </span>
            Available
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages" />

        {/* ================ Form start here ================== */}

        {successMsg ? (
          <p className="text-center text-base font-titleFont p-20 text-designColor">
            {successMsg}
          </p>
        ) : (
          <form
            id="form"
            action="https://getform.io/f/1eaa783c-2f47-4a11-9eb3-409797d386ea"
            method="POST"
            className="p-6 flex flex-col gap-6"
          >
            <div className="w-full flex gap-10 justify-between">
              <input
                onChange={handleName}
                value={clientName}
                className={`${
                  errClientName
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base
              text-gray-200 outline-none
              duration-300`}
                type="text"
                placeholder="Full Name"
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`${
                  errEmail
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base
              text-gray-200 outline-none
              duration-300`}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <textarea
              onChange={handleMessages}
              value={messages}
              className={`${
                errMessages
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } w-full bg-transparent border-2 px-4 py-2 text-base
            text-gray-200 outline-none
            duration-300 resize-none`}
              cols="30"
              rows="4"
              placeholder="Your Message"
            ></textarea>
            <button
              onClick={handleSend}
              className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200"
            >
              Send Message
              <span className="mt-1 text-designColor">{<FiSend />}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
