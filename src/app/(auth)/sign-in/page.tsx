"use client";
import { SignInCard } from "@/features/auth/components/sign-in-card";
import { useEffect } from "react";

const SignInPage = () => {
  useEffect(() => {
    document.title = "Jira | Sign-In";
  }, []);
  return <SignInCard />;
};

export default SignInPage;
