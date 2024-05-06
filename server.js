require('dotenv').config();  // Dette vil lese .env-filen og gjøre variablene tilgjengelig
const auth = require('./middleware/auth');  // Angi riktig sti til din auth.js-fil


const express = require('express');
const app = express();

app.use(express.json()); // for å tolke JSON-body fra forespørsler

app.get('/', (req, res) => {
  res.send('Census Application is running');
});

app.get('/protected', auth, (req, res) => {
   res.send('This is a protected route, access granted.');
 });

 app.post('/participants/add', auth, (req, res) => {
   console.log("Recived request to add participant")
   const { email, firstname, lastname, dob, work, home } = req.body;
   // Valider inputdata her

   // Sjekk om deltaker allerede eksisterer
   const existingParticipant = participants.find(p => p.email === email);
   if (existingParticipant) {
       return res.status(409).json({ message: "Participant with this email already exists." });
   }

   // Legg til ny deltaker
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
