const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));



const PORT = 3300;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/', (req, res) => {
    const username = req.body.First_name;
    const email = req.body.email;

    // Here, you can process the form data (e.g., save to a database)
    console.log(`Received registration: Username: ${username}, Email: ${email}`);
    
    res.send('Registration successful!');
});
