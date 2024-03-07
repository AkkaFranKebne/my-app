import express from 'express' 
import * as dotenv from 'dotenv' 
import cors from 'cors' 
import OpenAI from 'openai';



//call config function to give access to .env API KEY variable - do I really need it?
dotenv.config() 

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express()


// allow accepting and processing request from allowed domains
app.use(cors());
app.use(express.json())


// routes/endpoint to expose expressjs backend to frontend "GET" request
app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Ola!',
  })
})

//route/endpoint which allows Expressjs backend to recieve and process the request sent from SvelteKit frontend
app.post('/', async (req, res) => {
  
  try {
    const prompt = req.body.prompt; //access user question submited as prompt

    //Initiate an API call to Openai's API to recieve response for user questions 
    //from Openai's AI
    // But while making the call we bundle the user question/prompt and other
    // instructions to ensure we get the best response from the AI back to user
    const response = await openai.completions.create({
      model: "text-davinci-003", //most powerful openai large language Ai model for now
      prompt: `${prompt}`, //input text value of the form input box in sveltekit app ui
      temperature: 1, // Higher values means the model will take more risks and can change/modify response for same question when asked again.
      max_tokens: 3000, // If not specified, it auto limit reponses usually less than 50 character (thats about 50 words)The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support over 8,000).
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
      // user: "user123456", // optional but can be useful to detect user abusing your API request. You can use session ID or hash email/psw so each user is unique but still not individually identificable for openai
    });

    //Send the AI response back to user of 
    // our chatGPT Ai chatBot SvelteKit powered frontend 
    //in json format with a success status code of 200. 
    res.status(200).send({
      ai: response // is it ok?
    });


    // logs error to the console and sends it back to SvelteKit frontend
    //with a status of 500 if there is any error caught in try block.
  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})


// start the server on specified port on localhost
// this get overriden when deployed to web server by the server url
// "started on http://localhost:5001" makes the port link clickable from terminal
app.listen(5001, () => console.log('server started on http://localhost:5001'));