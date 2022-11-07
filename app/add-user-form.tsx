"use client";
// import CartSummary from "./cart-summary"

import { useForm, SubmitHandler } from "react-hook-form";

interface UserReq {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
}


// const resolver: Resolver<UserReq> = async (values) => {
//   return {
//     values: values.firstName ? values : {},
//     errors: !values.firstName ? {
//       firstName: {
//         type: 'required',
//         message: 'first name is required'
//       }
//     } : {},
//   }
// }

const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserReq>();

  const onSubmit: SubmitHandler<UserReq> = (data: UserReq) => {
    console.log(data);
  };
  return (
    <>
      <div className="text-center">
        {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        <img
          className="d-block mx-auto mb-4"
          src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h2>Register An Account</h2>
      </div>

      <div className="row py-4">
        {/* {<CartSummary />} */}
        <div className="col-md-7 col-lg-8">
          <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  {...register("firstName", { required: true })}
                />

                {errors.firstName && (
                  <div
                    className="invalid-feedback"
                    style={{ display: "inline" }}
                  >
                    Valid first name is required.
                  </div>
                )}
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <div
                    className="invalid-feedback"
                    style={{ display: "inline" }}
                  >
                    Valid last name is required.
                  </div>
                )}
              </div>

              <div className="col-12">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <div
                      className="invalid-feedback"
                      style={{ display: "inline" }}
                    >
                      Your Username is required.
                    </div>
                  )}
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  {...register("email", { required: true })}
                />

                {errors.email && (
                  <div
                    className="invalid-feedback"
                    style={{ display: "inline" }}
                  >
                    Please enter a valid email address for shipping updates.
                  </div>
                )}
              </div>
            </div>

            <hr className="my-4" />
            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddUserForm;
