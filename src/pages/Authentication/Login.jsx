import { useForm } from "react-hook-form";

import login from "../../assets/Authentication/login.jpg";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-10">
      <div>
        <img src={login} alt="" />
      </div>
      <div>
        <h1 className="text-center text-2xl font-bold text-sky-400">
          Login Now
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className="input input-bordered"
            />
            <p className="mt-2">
              {errors.name && (
                <span className="text-red-400">Name field is required</span>
              )}
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-400">Email field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Contact Number</span>
            </label>
            <input
              type="number"
              placeholder="Contact Number"
              {...register("contact", { required: true })}
              className="input input-bordered"
            />
            {errors.contact && (
              <span className="text-red-400">Contact field is required</span>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <select {...register("gender")} className="select select-bordered w-full">
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </div>
          <input className="mt-5 p-2" type="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
