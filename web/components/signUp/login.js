import React from 'react';
import {  TabPanel } from 'react-web-tabs';
import { Form, Field, reduxForm } from 'redux-form';
import { Input } from '../common/input';

const Login = props => {

  const { handleSubmit, onSubmit } = props;
  return (
    <div>
      <TabPanel tabId="login">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="input_wrapper email_wrapper">
            <Field
             name="email"
             label="Email ID"
             component={Input}
             />
          </div>
          <div className="input_wrapper">
            <Field 
             name="password"
             label="Password"
             type="password"
             component={Input}
             />
          </div>
          <div className="forgot_password">
          </div>
        </Form>
      </TabPanel>

    </div>
  )
}

export default reduxForm({ form: 'login' })(Login)
