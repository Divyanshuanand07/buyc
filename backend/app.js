const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/api/car-details', (req, res) => {
    const { image, title, description } = req.body;
    console.log('Car Details Submitted:');
    console.log('Image:', image);
    console.log('Title:', title);
    console.log('Description:', description);
    res.json({ message: 'Car details submitted successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
