function getUniqueEmail() {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 15); 
  return `validuser${timestamp}${randomString}@example.com`;
}

const credentials = {
  valid: {
    email: getUniqueEmail(),
    password: 'validpassword123',
    firstName: 'Valid',
    lastName: 'User',
    telephone: '1234567890'
  },
  invalid: {
    email: 'invaliduser@example.com',
    password: ' ',
    firstName: 'Invalid',
    lastName: 'User',
    telephone: '123'
  },
  basic: {
    email: "validuser@example.com",
    password: 'validpassword123',
    firstName: 'Valid',
    lastName: 'User',
    telephone: '1234567890',
    address: {
      address1: '123 Main St',
      city: 'New York',
      postcode: '10001',
      country: 'United States',
      zone: 'New York'
    }
  },
};

export default credentials;

