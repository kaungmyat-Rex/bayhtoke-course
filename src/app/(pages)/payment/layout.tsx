import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment",
  description:
    "Learn More, Pay Less – Affordable Online Courses form Udemy, Domestika and so on",
};

const PaymentLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

export default PaymentLayout;
