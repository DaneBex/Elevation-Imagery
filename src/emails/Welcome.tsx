import { Button, Html } from "@react-email/components";
import * as React from "react";

type WelcomeProps = {
  name: string
  company?: string
  number: string
  message: string
}

export default function Welcome({ name, company, number, message }: WelcomeProps) {
  return (
    <Html>
      <div>{`Hello my name is ${name}`}</div>
      {company ?? <div>My company is ${company}</div>}
      <div>{`My number is ${number}`}</div>
      <div>{message}</div>
    </Html>
  );
}
