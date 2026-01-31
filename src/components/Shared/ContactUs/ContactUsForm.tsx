import Button from "@/components/Reusable/Button/Button";
import Textarea from "@/components/Reusable/TextArea/TextArea";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import React from "react";
import { useForm } from "react-hook-form";

const ContactUsForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <form className="flex flex-col gap-6">
      <TextInput
        label="Full Name"
        placeholder="Enter your full name"
        type="text"
        error={errors.name}
        {...register("name", {
          required: "Full Name is required",
        })}
      />

      <TextInput
        label="Phone Number"
        placeholder="Enter your phone number"
        type="text"
        error={errors.name}
        {...register("name", {
          required: "Full Name is required",
        })}
      />

      <TextInput
        label="Email"
        placeholder="Enter your email"
        type="email"
        error={errors.email}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />

      <Textarea
        label="Message (Optional)"
        placeholder="Briefly describe your concern"
        error={errors.description}
        {...register("description", {
          required: "This field is required",
        })}
      />
      <p className="text-sm text-neutral-10 font-medium font-work-sans text-center">
        Your information is confidential and protected.
      </p>
      <Button label="Submit" classNames="max-w-[402px] w-full mx-auto" />
    </form>
  );
};

export default ContactUsForm;
