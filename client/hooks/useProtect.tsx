import React from "react";
import UserAuth from "./userAuth";
import { redirect } from "next/navigation";

const Protected = ({
  children,
  isUserAuth
}: {
  children: any,
  isUserAuth: boolean
}) => {
  const isAuth = UserAuth();
  console.log(isAuth)
  return isAuth === isUserAuth ? children : redirect('/')
}

export default Protected;