import styles from './styles.module.css'
import sqlLogo from './assets/sql_logo.png'
import { useState } from 'react'

function App() {
  const [queryDescription,setQueryDescription] = useState('')
  const [sqlQuery, setSqlQuery] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const query = await generateQuery();
    setSqlQuery(query);
  }

  const generateQuery = async () => {
    const response = await fetch('http://localhost:3005/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({queryDescription: queryDescription}),
    });
    const data = await response.json();
    return data.response.trim().replace(/\s+/g, ' '); // This regex replaces all whitespace sequences with a single space
  };

  return (
    <main className={styles.main}>
      <img  src={sqlLogo} alt="" className={styles.icon}/>
      <h3>Generate SQL with AI</h3>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name='query-description'
          placeholder="Describe your query here..."
          onChange={(e)=> setQueryDescription(e.target.value)}
        />
        <input type="submit" value="Generate query" />
      </form>
      <pre>{sqlQuery}</pre>
    </main>
  )
}

export default App
