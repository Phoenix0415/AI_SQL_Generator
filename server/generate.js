import openaiClient from "./api.js";

const MODEL = "gpt-4";
const generate = async (queryDescription) => {
    const response = await openaiClient.chat.completions.create({
        model: MODEL,
        messages: [{
            role: 'system',
            content: 'You are a helpful assistant.'
        }, {
            role: 'user',
            content: `Convert the following natural language description into a SQL query:\n\n${queryDescription}.`
        }],
        max_tokens: 100,
        temperature: 0
    });
    return response.choices[0].message.content;
};

export default generate;
