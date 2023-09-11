import express from 'express';
import cors from 'cors';
import ejs from 'ejs';
import contentRoute from './routes/contentRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/api/content', contentRoute);

// Initialize generatedContent as an empty object
let generatedContent = {
    nav: "Navbar"
};





app.post('/api/store-generated-data', (req, res) => {
    // Update generatedContent based on the data received in the request body
    generatedContent = JSON.parse(req.body.generatedText);
    res.status(200).json({ message: 'Data received and stored successfully.' });
});

    

app.get('/', (req, res) => {
    // Use generatedContent here, it will have been updated by the POST request
    const generatedData = {
        title: 'Gracix Cakes', // Provide a default title if not available
        description: 'Generated Description',
        // Add other generated data fields here
    };
    console.log("Title", generatedContent.nav?.brandName)
    console.log('generatedData:', generatedData);
    res.render('landingpage', generatedData);
});


const startServer = async () => {
    app.listen(8080, () => {
        console.log('Server is running on port 8080');
    });
}

startServer();

