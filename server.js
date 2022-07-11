const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const route = express.Router();
const port = process.env.PORT || 5000;
app.use('/v1', route);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const transporter = nodemailer.createTransport({
  port: 465,               // true for 465, false for other ports
  host: "smtp.yahoo.com",
     auth: {
          user: 'ana.savostina@yahoo.com',
          pass: 'Asherbac1605!',
       },
  secure: true,
  });
  const mailData = {
    from: 'ana.savostina@yahoo.com',  // sender address
      to: 'ana.savostina@yahoo.com',   // list of receivers
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
      html: '<b>Hey there! </b>
             <br> This is our first message sent with Nodemailer<br/>',
    };
    // An array of attachments
        attachments: [
            {
                filename: 'text notes.txt',
                path: 'notes.txt
            },
         ]
         transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
{/* // const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({ */}
{/* //     service: 'yahoo',
//     auth: { */}
{/* //       user: "ana.savostina@yahoo.com",
//       pass: "Asherbac1605!",
//     },
//   });
  
//   contactEmail.verify((error) => { */}
{/* //     if (error) { */}
{/* //       console.log(error);
//     } else {
//       console.log("Ready to Send");
//     }
//   });
//   router.post("/contact", (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message; 
//     const mail = {
//       from: name,
//       to: "ana.savostina@yahoo.com",
//       subject: "Contact Form Submission",
//       html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Message: ${message}</p>`,
//     };
//     contactEmail.sendMail(mail, (error) => {
//       if (error) {
//         res.json({ status: "ERROR" });
//       } else {
//         res.json({ status: "Message Sent" });
//       }
//     });
//   }); */}