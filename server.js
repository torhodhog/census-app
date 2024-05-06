const express = require('express');
const app = express();

app.use(express.json()); // for å tolke JSON-body fra forespørsler

app.get('/', (req, res) => {
  res.send('Census Application is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
