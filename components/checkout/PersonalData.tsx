"use client";
import { useForm } from "react-hook-form";
import InputComplex from "../general/InputComplex";
import Button from "../general/Button";

export default function PersonalData() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComplex 
            id={"name"}
            label={"First Name"}
            error={"First name is required"}
            registration={register("name", { required: true })}
            errorShown={!!errors.name}
        />
        <InputComplex 
            id={"lastName"}
            label={"Last Name"}
            error={"Last name is required"}
            registration={register("lastName", { required: true })}
            errorShown={!!errors.lastName}
        />
        <InputComplex 
            id={"email"}
            label={"Email"}
            registration={register("email", {
                required: "Email is required", 
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                }
            })}
            error={errors.email?.message as string}
            errorShown={!!errors.email}
        />
        <InputComplex 
            id={"phone"}
            label={"Phone"}
            registration={register("phone", { required: false, pattern: {
                value: /^\+?[1-9]\d{1,14}$/,
                message: "Invalid phone number"
            }})}
            error={errors.phone?.message as string}
            errorShown={!!errors.phone}
        />
        <InputComplex 
            id={"personalData"}
            label={"I have read and agree to the Terms and Conditions"}
            registration={register("personalData", { required: true })}
            error={"You must agree to the terms and conditions"}
            errorShown={!!errors.personalData}
            type={"checkbox"}
        />
        <InputComplex 
            id={"subscription"}
            label={"I want to receive the newsletter"}
            registration={register("subscription", { required: false })}
            type={"checkbox"}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
