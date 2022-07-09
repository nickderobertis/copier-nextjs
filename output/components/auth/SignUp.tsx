import { ReactNode, useMemo } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../forms/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

type SignUpData = yup.TypeOf<typeof schema>;

function TextInputWrapper(props: { input: ReactNode }): JSX.Element {
  const { input } = props;
  return (
    <div className="md:gap-6">
      <div className="mb-6">{input}</div>
    </div>
  );
}

export default function SignUp(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({ resolver: yupResolver(schema) });
  const onSubmit = data => console.log(data);

  const textInputs: ReactNode[] = useMemo(() => {
    const baseInputs = [
      <TextInput
        {...register("name", { required: true })}
        type="text"
        placeholder="Name"
        error={errors.name}
      />,
      <TextInput
        {...register("email", { required: true })}
        type="email"
        placeholder="Email address"
        error={errors.email}
      />,
      <TextInput
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
        error={errors.password}
      />,
    ];
    return baseInputs.map((input, index) => (
      <TextInputWrapper key={index} input={input} />
    ));
  }, [errors.email, errors.name, errors.password]);

  return (
    <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        {textInputs}
        <div className="mt-9"></div>
        <input
          type="submit"
          value="Sign up"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 mb-6 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        />
      </form>
    </div>
  );
}
