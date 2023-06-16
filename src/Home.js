import { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import useFetch from "./useFetch";

const Home = () => {
    const {data, isLoading, error} = useFetch('http://localhost:8000/recipes');

    return (
        <div className="home">
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
            {data && <RecipeList recipes={data} title={'Recipe list'} />}
        </div>
    );
}

export default Home;