import React, { useState } from "react";
function Register() {
    const regx = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
    const usernameRegex = new RegExp('^[^\\s]+$');
    const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#])[A-Za-z\\d@*%$#]{8,}$');

    const [formValues, setformValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        username: ""
    });

    const [formErrors, setformErrors] = useState({
        nameError: null,
        emailError: null,
        passError: null,
        cpassError: null,
        usernameError: null
    })
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }
    const handleChange = (e) => {
        if (e.target.name === "name") {
            setformValues({
                ...formValues,
                name: e.target.value
            });
            setformErrors({
                ...formErrors,
                nameError: e.target.value.length === 0 ? "Required" : null,
            });

        }
        if (e.target.name === "email") {
            setformValues({
                ...formValues,
                email: e.target.value
            });
            setformErrors({
                ...formErrors,
                emailError: e.target.value.length === 0 ? "Required"
                    : !regx.test(e.target.value)
                        ? "must be in email format"
                        : null
            })
        }
        if (e.target.name === "username") {
            setformValues({
                ...formValues,
                username: e.target.value
            })
            setformErrors({
                ...formErrors,
                usernameError: e.target.value.length === 0 ? "Required" :
                    !usernameRegex.test(e.target.value) ?
                        "User Name must not contion spaces" : null
            })
        }
        if (e.target.name === "password") {
            setformValues({
                ...formValues,
                password: e.target.value
            });
            setformErrors({
                ...formErrors,
                passError: e.target.value.length === 0 ?
                    "Required" :
                    !passwordRegex.test(e.target.value)
                        ? "Password must be at least 8 characters long, include one lowercase, one uppercase, one digit, and one special character (@*%$#)"
                        : null
            })
        }
        if (e.target.name === "cpassword") {
            setformValues({
                ...formValues,
                confirmPassword:e.target.value
            });
            setformErrors({
                ...formErrors,
                cpassError: e.target.value.length === 0 ?
                    "Required" :
                    formValues.password !== e.target.value ?
                        "it Doest match the origin password" :
                        null

            })
        }

    }
    console.log(formValues);
    return (
        <>
            <div className="container">
                <form className="row g-3" onSubmit={handlesubmit}>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Name</label>
                        <input type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="Name"
                            value={formValues.name}
                            onChange={handleChange}
                            name="name"
                        />
                        {formErrors.nameError && (
                            <div id="emailHelp" className="form-text text-danger">
                                {formErrors.nameError}
                            </div>
                        )}
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email"
                            className="form-control"
                            id="inputEmail4"
                            value={formValues.email}
                            onChange={handleChange}
                            name="email"
                        />
                        {formErrors.emailError && (
                            <div id="emailHelp" className="form-text text-danger">
                                {formErrors.emailError}
                            </div>
                        )}
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
                            value={formValues.username}
                            onChange={handleChange}
                            name="username" />
                        {formErrors.usernameError && (
                            <div id="emailHelp" className="form-text text-danger">
                                {formErrors.usernameError}
                            </div>
                        )}
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"
                            value={formValues.password}
                            onChange={handleChange}
                            name="password" />
                        {formErrors.passError && (
                            <div id="emailHelp" className="form-text text-danger">
                                {formErrors.passError}
                            </div>
                        )}
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputPassword4" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="inputPassword4"
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                            name="cpassword" />
                        {formErrors.cpassError && (
                            <div id="emailHelp" className="form-text text-danger">
                                {formErrors.cpassError}
                            </div>
                        )}
                    </div>
                    <div className="col-6">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                </form>



            </div>


        </>
    )
}
export default Register;