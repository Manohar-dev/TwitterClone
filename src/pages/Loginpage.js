import React from "react";
import { Form, FloatingLabel, Button, FormControl } from "react-bootstrap";
import twitter from "../assets/Twitter X.png";
import { useForm, Controller } from "react-hook-form";

const Loginpage = () => {
  const { handleSubmit, control } = useForm();
  console.log("started loginpage")
  return (
    <div>
      <div className="loginpage">
        <div className="loginpage_logo">
          <img src={twitter} alt="" />
        </div>
        <div className="loginpage_content">
          <h1>Happening now</h1>
          <h3>Join Today.</h3>

          <Form className="loginpage_form" onSubmit={handleSubmit()}>
            <FloatingLabel
              className=" floatinglabel mt-3 mb-3"
              label="Email Adress"
            >
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <FormControl {...field} type="email" placeholder="Email" />
                )}
              />
            </FloatingLabel>


            <FloatingLabel className="mb-3" label="Password">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <FormControl
                    {...field}
                    type="password"
                    placeholder="Password"
                  />
                )}
              />
            </FloatingLabel>

            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Loginpage;
