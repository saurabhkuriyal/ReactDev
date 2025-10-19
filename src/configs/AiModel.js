

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
