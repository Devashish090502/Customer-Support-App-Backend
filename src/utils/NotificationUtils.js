const nodemailer = require("nodemailer");


const sendEmail=async function(emailIds, subject,text,html){

    let emailString ="";

    emailIds.forEach((email,i)=>{
        if(i!=0){
            emailString+=", ";
        }
        emailString+=email;
    })

    console.log(emailString);


  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: "devashish090502@gmail.com",
      pass: "msmg numy tbke gjfg"
    },
  });

let info = await transporter.sendMail({
    from: "devashish090502@gmail.com",
    to: emailString,
    subject,
    text,
    html
  });


  console.log("Message sent sucessfully : %s", info.messageId);

}


module.exports={
    sendEmail
}