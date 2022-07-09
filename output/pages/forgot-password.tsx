import { NextPage } from "next";
import ForgotPasswordBegin from "../components/auth/forgot-password/ForgotPasswordBegin";
import styles from "./forgot-password.module.css";

const ForgotPassword: NextPage = () => {
  const wrapperStyles = `${styles.vh} flex justify-center content-center items-center flex-wrap`;
  return (
    <div className={wrapperStyles}>
      <ForgotPasswordBegin />
    </div>
  );
};

export default ForgotPassword;
