import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function SignUp(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = data => console.log(data);

  console.log("errors", errors);

  return (
    <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:gap-6">
          <div className="mb-6">
            <input
              {...register("name", { required: true })}
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Name"
            />
          </div>
        </div>
        <input
          {...register("email", { required: true })}
          type="email"
          className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Email address"
        />
        <input
          {...register("password", { required: true })}
          type="password"
          className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Password"
        />
        {errors.email && <span>This field is required</span>}
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
