export const checkValidData= (email, password)=>{
const isEamilValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const ispasswordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

if(!isEamilValid) return "Email Id is not vaild";
if(!ispasswordValid) return "password is not vaild";

return null;

};