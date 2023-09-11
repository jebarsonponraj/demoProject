import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(req.body);
});

let generatedContent = {};
router.post('/', (req, res) => {
  const generatedText = JSON.parse(req.body.generatedText);

  generatedContent = generatedText;
  // Handle the generatedText on the server as needed
  console.log('Received generatedText:', generatedContent.nav);
    
  // Respond to the client if necessary
  res.status(200).json({ message: generatedText});
});

// router.get('/', (req, res) => {
//   // Assuming you have the generated content as variables
//   const generatedData = {
//       title: 'Generated Title',
//       description: 'Generated Description',
//       // Add other generated data fields here
//   };

//   // Render the EJS template with the generated data
//   res.render('landingPage', generatedData);
// });

export default router;
