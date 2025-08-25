// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = process.env.GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-pro-exp-02-05",
// });

// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "application/json",
// };

// console.log("-------",process.env.GEMINI_API_KEY);


//     export const chatSession = model.startChat({
//         generationConfig,
//         history: [
//         ],
//     });

//     // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//     // console.log(result.response.text());

// [
//     {
//         role: 'user',
//         parts: [
//             {
//                 text: `INSERT_INPUT_HERE`,
//             },
//         ],
//     },
// ];

 
// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
    GoogleGenAI,
} from '@google/genai';


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
const config = {
    thinkingConfig: {
        thinkingBudget: -1,
    },
    responseMimeType: 'application/json',
};
const model = 'gemini-2.5-flash';


//function to generate files
export const AiResponse=async (prompt)=>{

    console.log("My Gemini API Key is:", process.env.GEMINI_API_KEY);
console.log("Reached here in AI Model page------>");

const contents =prompt

console.log("P--R--O--M--P--T",contents);


    const response =await ai.models.generateContent({
    model,
    config,
    contents,
    
});

    console.log("----RESOPONSE----",response);
    console.log("---RESOPONSE----",response.candidates[0].content);
    
    console.log("----RESOPONSE----",response.candidates[0].content.parts[0].text);

    

    return response
    

}
// let fileIndex = 0;
// for await (const chunk of response) {
//     console.log(chunk.text);
// }


// import { GoogleGenerativeAI } from '@google/generative-ai';

// // Make sure your .env file has a GEMINI_API_KEY variable set.
// const apiKey = process.env.GEMINI_API_KEY;

// if (!apiKey) {
//     throw new Error("API key not found. Please set the GEMINI_API_KEY environment variable.");
// }

// const genAI = new GoogleGenerativeAI(apiKey);

// // Update the model name to 'gemini-2.5-pro'
// const model = genAI.getGenerativeModel({
//     model: 'gemini-2.5-pro', 
// });

// export const AiResponse = async (prompt) => {
//     try {
//         console.log("Generating content for prompt:", prompt);

//         const response = await model.generateContent(prompt);
//         const text = response.response.text();

//         console.log("Received response:", text);

//         return text;
//     } catch (error) {
//         console.error("Error during API call:", error);
//         throw error;
//     }
// };