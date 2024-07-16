import { Html } from "@react-email/components";
import * as React from "react";

type WelcomeProps = {
  name: string
  company?: string
  number: string
  message: string
  email: string
}

export default function Welcome({ name, company, number, message, email }: WelcomeProps) {
  return (
    <Html>
      <div>{`Hello my name is ${name}`}</div>
      {company ?? <div>My company is ${company}</div>}
      <div>{`My number is ${number}`}</div>
      <div>{`My email is ${email}`}</div>
      <div>{message}</div>
    </Html>
  );
}
