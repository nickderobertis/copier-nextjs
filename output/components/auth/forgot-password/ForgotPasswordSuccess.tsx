import { useRouter } from "next/router";
import { useCallback } from "react";
import Button from "../../core/buttons/Button";
import ForgotPasswordCard from "./ForgotPasswordCard";

export default function ForgotPasswordSuccess(): JSX.Element {
  const router = useRouter();
  const onClick = useCallback(
    () => router.push("/?login=true", "/login"),
    [router.push]
  );
  return (
    <ForgotPasswordCard>
      <p>Your password has been successfully reset.</p>
      <div className="mt-3"></div>
      <Button text="Sign In" onClick={onClick} />
    </ForgotPasswordCard>
  );
}
