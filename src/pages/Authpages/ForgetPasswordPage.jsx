import { ErrorMessage, Field, Form, Formik } from "formik";

export default function ForgetPasswordPage() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Forget Password</h2>
                        <p>Enter your email address and we'll send you a link to reset your password.</p>
                        <Formik initialValues={{ email: "" }} onSubmit={(values) => console.log(values)}>
                            <Form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <Field type="email" name="email" placeholder="email" className="input input-bordered" />
                                    <ErrorMessage name="email" className="text-red-500" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Send Reset Link</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}