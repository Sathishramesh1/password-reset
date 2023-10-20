import nodemailer from "nodemailer";


const sendMail=async(email,subject,text)=>{

     try {
        //create transporter 
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: "sathishrameshkec@gmail.com",
              pass: process.env.PASSWORD,
            },
          });

          await transporter.sendMail({
            from:"sathishrameshkec@gmail.com",
			to: email,
			subject: subject,
            text:text
			

          });
          console.log("Password reset Email sent successfully");


        
     } catch (error) {
        console.log("Email not sent",error);
		return error;
        
     }


}
export {sendMail}