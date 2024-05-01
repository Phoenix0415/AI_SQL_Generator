import openaiClient from "./api.js";

const generate = async (queryDescription) => {

  const chatGPT = async (queryDescription) => {
    const message = [
      { role: "system", content: `You are a translator from plain English to SQL.` },
      { role: "user", content: `Convert the following natural language description into a SQL query:\n\nShow all all the elements in the table users` },
      { role: "assistant", content: "SELECT * FROM users;" },
      { role: "user", content: `Convert the following natural language description into a SQL query:\n\n${queryDescription}` },
    ];
    const response = await openaiClient.chat.completions.create({
      model: "gpt-4",
      messages: message,
    });

    return response.choices[0].message.content;
  }

  const sqlQuery = await chatGPT(queryDescription);
  return sqlQuery;

};

export default generate;
