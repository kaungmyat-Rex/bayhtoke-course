import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Learn More, Pay Less – Affordable Online Courses form Udemy, Domestika and so on",
};

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

export default ContactLayout;
