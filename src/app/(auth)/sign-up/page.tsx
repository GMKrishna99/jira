"use client";
import { SignUpCard } from "@/features/auth/components/sign-up-card";
import { useEffect } from "react";

const SignUpPage = () => {
  useEffect(() => {
    document.title = "Jira | Sign-Up";
  }, []);
  return <SignUpCard />;
};

export default SignUpPage;
