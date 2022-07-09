import LogIn from "../LogIn";

export default {
  title: "Components/Auth/LogIn",
  component: LogIn,
};

export const LogInBlank = () => (
  <div className="w-full flex justify-center">
    <LogIn />
  </div>
);
