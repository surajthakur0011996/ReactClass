import React from "react";
import { Formik } from 'formik';

const Formik1 = ({ change }) => {
  return (
    <>
      <Formik

        initialValues={{ email: '', password: '', farstname: '', }}

        validate={values => {

          const errors = {};

          if (!values.email) {

            errors.email = 'Required';

          } else if (

            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)

          ) {

            errors.email = 'Invalid email address';

          }

          return errors;

        }}

        onSubmit={(values, { setSubmitting }) => {

          setTimeout(() => {

            //alert(JSON.stringify(values, null, 2));
            console.log(JSON.stringify(values, null, 2));

            setSubmitting(false);

          }, 400);

        }}

      >

        {({

          values,

          errors,

          touched,

          handleChange,

          handleBlur,

          handleSubmit,

          isSubmitting,

          /* and other goodies */

        }) => (

          <form onSubmit={handleSubmit}>
          <div className="container pt-5">
          <div className="row">  
          <div className="col-sm-6 ">
          <div className="form-group mb-2">
            <input className="form-control" type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />

            {errors.email && touched.email && errors.email}
            </div> 
            <div className="form-group mb-2">
            <input className="form-control" 

              type="password"

              name="password"

              onChange={handleChange}

              onBlur={handleBlur}

              value={values.password}

            />

            {errors.password && touched.password && errors.password}
            </div>
            <div className="form-group mb-2">
            <input className="form-control" 

              type="test"

              name="farstname"

              onChange={handleChange}

              onBlur={handleBlur}

              value={values.farstname}

            />

            {errors.farstname && touched.farstname && errors.farstname}
            </div>
            </div>
            </div>

            <button type="submit" className="btn btn-danger" disabled={isSubmitting}>

              Submit

            </button>
            </div> 
          </form>

        )}

      </Formik>

    </>
  )
}
export default Formik1;