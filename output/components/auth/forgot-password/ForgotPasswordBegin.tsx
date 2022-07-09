import { ReactNode, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SubmitButton from "../../core/buttons/SubmitButton";
import TextInput from "../../forms/TextInput";

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

type ForgotPasswordBeginData = yup.TypeOf<typeof schema>;

function TextInputWrapper(props: { input: ReactNode }): JSX.Element {
  const { input } = props;
  return (
    <div className="md:gap-6">
      <div className="mb-6">{input}</div>
    </div>
  );
}

export default function LogIn(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordBeginData>({ resolver: yupResolver(schema) });
  const onSubmit = (data: ForgotPasswordBeginData) =>
    console.log("forgot password with", data);

  const textInputs: ReactNode[] = useMemo(() => {
    const baseInputs = [
      <TextInput
        {...register("email", { required: true })}
        type="email"
        placeholder="Email address"
        error={errors.email}
      />,
    ];
    return baseInputs.map((input, index) => (
      <TextInputWrapper key={index} input={input} />
    ));
  }, [errors.email]);

  return (
    <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <div className="mt-6"></div>
        {textInputs}
        <div className="mt-12"></div>
        <SubmitButton text="Send me a Link" />
      </form>
    </div>
  );
}
