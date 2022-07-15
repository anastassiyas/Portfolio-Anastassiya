const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const port = 5000;
const app = express();

app.use(cors({origin: "*",}))
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  secure: false,
  service: 'hotmail',
  secure: false,
    auth: {
      user: "ana.savostina@outlook.com",
      pass: "Nikamaxik1605!"
      
    },
    tls:{
      rejectUnauthorized:false
    }
  });

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});
app.get("/", (req, res) => {
  res.render('Contact.js');
});

router.post("/send", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "ana.savostina@outlook.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

 

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
      res.render('contact', {msg:'Email has been sent'});  
  };
});
})

