"use client";

import axios from "axios";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useInView } from "react-intersection-observer";

const ContactMe = (): React.ReactNode => {
  const { ref: p1Ref, inView: p1View, entry: p1Style } = useInView();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const inquiryRef = useRef<HTMLTextAreaElement | null>(null);

  const postInquiry = async (formData: FormData) => {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const message = formData.get("message");
    const { data } = await axios.post("/api/postInquiry", {
      firstName,
      lastName,
      message,
    });
    console.log(data.success);
  };

  return (
    <>
      <div
        className={`w-full flex justify-center absolute top-0 ${
          p1View ? "translate-x-[0px] blur-0" : "translate-x-[-16px] blur-lg"
        } duration-500`}
        ref={p1Ref}
      >
        <p className=" text-white text-5xl">
          <strong>Contact Me</strong>
        </p>
      </div>
      <form
        className=" h-[80vh] max-h-[760px] w-[700px] bg-white flex flex-col gap-6 p-12 mt-[-24px]"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          if (nameRef.current && lastNameRef.current && inquiryRef.current) {
            nameRef.current.value = "";
            lastNameRef.current.value = "";
            inquiryRef.current.value = "";
          }
          await toast.promise(postInquiry(formData), {
            success: "Inquiry sent",
            loading: "Sending inquiry",
            error: "Inquiry failed",
          });
        }}
      >
        <div className=" w-full flex justify-between">
          <div className=" flex flex-col gap-2">
            <p className=" font-bold">First Name</p>
            <input
              name="firstName"
              placeholder="First Name"
              className="border-slate-400 border-[1px] p-2 rounded-sm"
              ref={nameRef}
              required
            ></input>
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" font-bold">Last Name</p>
            <input
              name="lastName"
              placeholder="Last Name"
              className="border-slate-400 border-[1px] p-2 rounded-sm"
              ref={lastNameRef}
              required
            ></input>
          </div>
        </div>
        <div className="grow flex flex-col gap-2">
          <p className=" font-bold">Inquiry</p>
          <textarea
            name="message"
            className="border-slate-400 border-[1px] p-2 rounded-sm h-full resize-none"
            ref={inquiryRef}
            required
          ></textarea>
        </div>
        <button className=" p-2 bg-[#4cc9f0] text-white" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default ContactMe;
