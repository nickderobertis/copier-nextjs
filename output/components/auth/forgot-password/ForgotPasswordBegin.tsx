import * as yup from "yup";
import TextInput from "../../forms/TextInput";
import ForgotPasswordForm, { TextInputCreator } from "./ForgotPasswordForm";

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

type ForgotPasswordBeginData = yup.TypeOf<typeof schema>;

const textInputCreator: TextInputCreator<ForgotPasswordBeginData> = ({
  register,
  errors,
}) => {
  return [
    <TextInput
      {...register("email", { required: true })}
      type="email"
      placeholder="Email address"
      error={errors.email}
    />,
  ];
};

export default function ForgotPasswordBegin(): JSX.Element {
  const onSubmit = (data: ForgotPasswordBeginData) =>
    console.log("forgot password with", data);

  return (
    <ForgotPasswordForm
      onSubmit={onSubmit}
      textInputCreator={textInputCreator}
      schema={schema}
      description="Enter your email address and we'll send you a link to reset your password."
      submitText="Send me a Link"
    />
  );
}
