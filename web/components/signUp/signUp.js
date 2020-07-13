import React from 'react';
import { connect } from 'react-redux';
import { TabPanel } from 'react-web-tabs';
import { Form, Field, reduxForm } from 'redux-form';
import { Input } from '../common/input';
import { email, phoneNumber } from '../../util/validate';

const SignUp = props => {
  const { handleSubmit, onSubmit } = props;

  return (
    <div >
      <TabPanel tabId="signup" className="signup_scroll">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="input_wrapper">
            <Field
              type="text"
              name="name"
              label="Name"
              component={Input}
            />
          </div>
          <div className="input_wrapper  email_wrapper">
            <Field
              type="text"
              name="email"
              label="Email ID"
              autoComplete="new-password"
              component={Input}
              validate = {[email]}
            />
          </div>
          <div className="input_wrapper">
            <Field
              type="text"
              name="mobile"
              label="Mobile Number"
              component={Input}
              validate = {[phoneNumber]}
            />
          </div>
          <div className="input_wrapper">
            <Field
              autoComplete="new-password"
              type="password"
              name="password"
              label="Password"
              component={Input}
            />
          </div>
        </Form>
      </TabPanel>
    </div>
  )
}



export default connect(null, {})(
  reduxForm({
    form: 'signup',
  })(SignUp));
