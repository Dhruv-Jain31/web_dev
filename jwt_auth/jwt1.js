/*- 1.Write a function that takes in a username and password and returns a JWT token with the username and password encoded.
 Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here


 - 2.Write a function that takes a jwt as input and returns decoded msg if the jwt can be DECODED (not verified). 
 Return false otherwise


 - 3.Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise. */

 const jwt = require('jsonwebtoken');
 const jwtPassword = 'secret';
 const zod = require("zod");
 
 
 /**
  * Generates a JWT for a given username and password.
  *
  * @param {string} username - The username to be included in the JWT payload.
  *                            Must be a valid email address.
  * @param {string} password - The password to be included in the JWT payload.
  *                            Should meet the defined length requirement (e.g., 6 characters).
  * @returns {string|null} A JWT string if the username and password are valid.
  *                        Returns null if the username is not a valid email or
  *                        the password does not meet the length requirement.
  */

 const emailSchema = zod.string().email();
 const passwordSchema = zod.string().min(6);

 function signJwt(username, password) {
     // Your code here

     const username_response = emailSchema.safeParse(username);
     const password_response = passwordSchema.safeParse(password);

     if (!username_response.success || !password_response.success) {
        return null;
     }

     else{

        const signature = jwt.sign(
            {username, password},
            jwtPassword
        );
        return signature
     }
 }
 
 /**
  * Verifies a JWT using a secret key.
  *
  * @param {string} token - The JWT string to verify.
  * @returns {boolean} Returns decoded message if the token is valid and verified using the secret key.
  *                    Returns false if the token is invalid, expired, or not verified
  *                    using the secret key.
  */
 function verifyJwt(token) {
     // Your code here
     const decoded = jwt.decode(token);  //decoded doesn't returns error it simply returns null if fails.
     if (decoded) {
        return decoded;
     }

     else{
        return false;
     }
 }
 
 /**
  * Decodes a JWT to reveal its payload without verifying its authenticity.
  *
  * @param {string} token - The JWT string to decode.
  * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
  *                         Returns false if the token is not a valid JWT format.
  */
 function decodeJwt(token) {
     // Your code here
     let answer = true;
     try{
        jwt.verify(token,jwtPassword); // it throws error so we wrap it in try-catch block.
     }
     catch (err) {
        answer = false;
     }
     return answer;
 }
 
 
 const token = signJwt('dhruv@gmail.com', '123456');
console.log('Generated Token:', token);

const decodedPayload = decodeJwt(token);
console.log('Decoded Payload:', decodedPayload);

const isVerified = verifyJwt(token);
console.log('Is Token Verified:', isVerified);