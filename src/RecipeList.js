import { useNavigate } from "react-router-dom";

const RecipeList = ({ recipes, title }) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        fetch('http://localhost:8000/recipes/' + id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="recipe-list">
            <h2>{title}</h2>
            {
                recipes.map((recipe) => (
                    <div className="recipe-preview" key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <p>Authored by {recipe.author}</p>
                        <button onClick={handleClick}>delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default RecipeList;