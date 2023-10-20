import {User} from '../model/User.js';



const reset=async(req,res)=>{
  try {
     const { token } = req.params;
     const { newPassword } = req.body;
     
 // Finding the user  token
  const user = await User.findOne({ token: token });

  if (!user) {
    return res.status(400).json({ message: "Invalid token" });
  }

  // Update the user's password and delete token
  user.token = undefined;
  user.password = newPassword;
  await user.save();

  return res.status(200).json({ message: "Password reset successfully" });
    
  } catch (error) {
    
  }



}


export {reset}