require('dotenv').config();  

const auth = require('./middleware/auth');  


const express = require('express');
const app = express();

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Census Application is running');
});

app.get('/protected', auth, (req, res) => {
   res.send('This is a protected route, access granted.');
 });

 app.get('/participants', auth, (req, res) => {
   res.json(participants);
});

app.get('/participants/details/:email', auth, (req, res) => {
   const { email } = req.params;
   const participant = participants.find(p => p.email === email);
   if (!participant) {
       return res.status(404).json({ message: "Participant not found." });
   }
   res.json(participant);
});

app.put('/participants/:email', auth, (req, res) => {
   const { email } = req.params;
   const { firstname, lastname, dob, work, home } = req.body;
   const participant = participants.find(p => p.email === email);
   if (!participant) {
       return res.status(404).json({ message: "Participant not found." });
   }
   // Update participant
   participant.firstname = firstname;
   participant.lastname = lastname;
   participant.dob = dob;
   participant.work = work;
   participant.home = home;
   res.json(participant);
});


app.delete('/participants/:email', auth, (req, res) => {
   const { email } = req.params;
   const index = participants.findIndex(p => p.email === email);
   if (index === -1) {
       return res.status(404).json({ message: "Participant not found." });
   }
   participants.splice(index, 1);
   res.status(204).send();
});



app.post('/participants/add', auth, (req, res) => {
   const { email, firstname, lastname, dob, work, home } = req.body;
   
   // Validate request body
   if (!email || !firstname || !lastname || !dob || !work || !home ||
       !work.companyname || work.salary === undefined || !work.currency ||
       !home.country || !home.city) {
       return res.status(400).json({ message: "Missing or incomplete fields in the request body." });
   }

   // Check if participant with this email already exists
   const existingParticipant = participants.find(p => p.email === email);
   if (existingParticipant) {
       return res.status(409).json({ message: "Participant with this email already exists." });
   }

   // Add new participant
   const newParticipant = { email, firstname, lastname, dob, work, home };
   participants.push(newParticipant);
   res.status(201).json(newParticipant);
});


 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


let participants = [
   {
      email: "example@example.com",
      firstname: "John",
      lastname: "Doe",
      dob: "1990-01-01",
      work: {
        companyname: "Company Inc.",
        salary: 50000,
        currency: "USD"
      },
      home: {
        country: "USA",
        city: "New York"
      }
    }
    
];
