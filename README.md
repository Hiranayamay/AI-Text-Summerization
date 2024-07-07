# AI-Text-Summerization
Overview
AI text summarization refers to the process of using artificial intelligence and natural language processing techniques to condense a piece of text while retaining its key information and meaning. Here's an overview of AI text summarization:

Types of AI Text Summarization
Extractive Summarization:

Definition: Extractive methods select important sentences, phrases, or paragraphs directly from the original text and arrange them to create a summary.
Process: These methods often involve ranking sentences based on criteria like relevance or importance and then assembling the top-ranked sentences into a coherent summary.
Abstractive Summarization:

Definition: Abstractive methods generate summaries that may contain new phrases, sentences, or rephrased content not present in the original text.
Process: These methods interpret and understand the text using natural language understanding techniques, then generate a concise summary that captures the main ideas.

Technologies Used

Hugging Face API

Postman

Replit

Javascript

HTML

CSS

Clone the repository:


Copy code
```git clone https://github.com/Hiranayamay/AI-Text-Summerization.git```
cd your-repo

Set up Hugging Face API:

Register and obtain API credentials from Hugging Face.
Insert your credentials in the appropriate files or environment variables.
For this project I used ```Facebook/bart-large-cnn``` API.
To get api access code go to hugging face > profile > settings > access token > new token >create with name and use ```read``` as type of token.
copy the access token value 


Import Postman Collection:

Fork and clone the Postman collection for frontend and backend APIs from Postman.
Import the collection into your Postman account.
In postman go to ai text summerization directory,click on it and go to variables section.there you'll find access token field,paste the access token value you got from api to the current value session.
Note:If you can't find the forked collection,you can create your own API end points by yourself on postman.
To Do so
Create workspace ai text summerization
under it create two folder:frontend and backend.
under front end folder, create POST request and copy the replit url into the frontend POST URL.
REMEMBER:after pasting the url select the whole url,click on it you'll find set as variable option.click on it and set your url as variable so that it cannot be accessed without any initial and current value.
end the url with ```\summarize``` as \summarize is the key for our endpoints.you can use any key point.just make sure to declare it in your javascript file.

under backend folder,Create post request and copy the API link in the url section.
Thus it will give you the end points for your website.

Integrate Frontend and Backend using Replit:

Set up a new project on Replit and paste this repository files as it is in your replit id or any other tool you would like to use for your website integration.Just make sure to use the correct platform url in your postman frontend and backend directory for your frontend and backend integration.
Configure environment variables for API keys and endpoints.

Output images:

<img width="1457" alt="Screenshot 2024-07-07 at 1 51 08 PM" src="https://github.com/Hiranayamay/AI-Text-Summerization/assets/107201577/73c59c8a-79d2-4036-bdd7-ab70ea9c4fd6">

<img width="1468" alt="Screenshot 2024-07-07 at 1 51 18 PM" src="https://github.com/Hiranayamay/AI-Text-Summerization/assets/107201577/00c23d91-6cd4-4a76-acdf-562657b0c117">

<img width="1408" alt="Screenshot 2024-07-07 at 1 51 25 PM" src="https://github.com/Hiranayamay/AI-Text-Summerization/assets/107201577/9de7067b-24b8-4a51-b4a7-b7be315eb65f">

<img width="1440" alt="Screenshot 2024-07-07 at 1 51 42 PM" src="https://github.com/Hiranayamay/AI-Text-Summerization/assets/107201577/f7df097d-99c0-4fb7-9cc7-8a9bc596f270">

<img width="1461" alt="Screenshot 2024-07-07 at 1 52 15 PM" src="https://github.com/Hiranayamay/AI-Text-Summerization/assets/107201577/f49282a3-7176-4e9d-91d1-9202329b9721">

<img width="1454" alt="Screenshot 2024-07-07 at 1 52 36 PM" src="https://github.com/Hiranayamay/AI-Text-Summerization/assets/107201577/5b02791b-1d92-408f-a74b-edcb9d50686b">




