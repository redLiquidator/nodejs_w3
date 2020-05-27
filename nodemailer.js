var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    // json in json
    service : 'gmail',
    auth: {
        user: 'inufuni1111@gmail.com',
        pass: 'Oimbird1!'
    }
});

/* sending an email to a single person
var mailOptions = {
    from: 'inufuni@gmail.com',
    to: 'forever.moanna@gmail.com',
    subject:'Sending Email using Node.js',
    text: 'That was easy!'
}; */

/** sending an email to people */
var mailOptions = {
    from: 'inufuni1111@gmail.com',
    to: 'forever.moanna@gmail.com, inufuni@naver.com',
    subject: 'Sending Email using Node.js',
    text: 'that was easy!'
};

transporter.sendMail(mailOptions,function(error,info){
    if (error){
        console.log(error);
    }else{
        console.log('Email sent: '+ info.response);
    }
});