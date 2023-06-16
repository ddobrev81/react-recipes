const RecipeList = ({ recipes, title}) => {


    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {
                recipes.map((recipe) => (
                    <div className="recipe-preview" key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <p>Authored by {recipe.author}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default RecipeList;