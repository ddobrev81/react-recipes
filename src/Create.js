import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Dodo');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = { title, body, author};
    fetch('http://localhost:8000/recipes', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(recipe)
    }).then(() => {
      setIsPending(false);
      navigate('/');
    })
  }

  return (
    <div className="create">
      <h2>Create new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        >
        </textarea>
        <label>Author</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Dodo">Dodo</option>
        </select>
        { !isPending && <button>Add recipe</button>}
        { isPending && <button>loading...</button>}
      </form>
    </div>
  );
}

export default Create;