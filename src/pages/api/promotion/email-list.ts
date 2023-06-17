/*var Mailchimp = require('mailchimp-api-v3')

const mailchimp = new Mailchimp( process.env.MAILCHIMP_API_KEY );

export default function handler(req, res) {
    const { method } = req; 

    const { email, firstName, lastName } = req.body
    
    switch ( method ) { 
        case "POST": 
            mailchimp.post(`/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`, {
                email_address: email,
                status: 'subscribed',
                "merge_fields": {
                    "FNAME": firstName,
                    "LNAME": lastName,
                }
            }).then( result => {
                res.status(200).json(result); 
            }).catch( err => {
                res.send(err)
            })
            break; 
        default: 
            res.setHeader("Allow", ["POST"]); 
            res.status(405).end(`Method ${method} Not Allowed`); 
            break; 
    }
}*/
  