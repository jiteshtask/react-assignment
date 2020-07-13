

  export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address'
      : undefined;
  export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value) && value[0]!==0
      ? 'Please provide valid 10 digits mobile number'
      : undefined;
      

     
  