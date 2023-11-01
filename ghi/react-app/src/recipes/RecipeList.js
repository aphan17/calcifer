import {useState, useEffect} from 'react'


const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        const url = "http://localhost:8000/recipes/"
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const recipes = data.recipes;
            setRecipes(recipes);
        }
    }
    useEffect(() => {
        getRecipes();
    }, [])


    return (
        <div>
            recipe listed here
        </div>
    );
}

export default RecipeList;
