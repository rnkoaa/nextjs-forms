// import CartSummary from "./cart-summary"
const AddUserForm = () => {
  const 
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
        { /* {<CartSummary />} */}
        <div className="col-md-7 col-lg-8">
          <form className="needs-validation">
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
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
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
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
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
                    required
                  />
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
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
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
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
