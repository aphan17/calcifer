import {useState, useEffect} from 'react'

function RecipePage() {
    const [recipes, setRecipes] = useState([]);

    async function getRecipes () {
        const url = "http://localhost:8000/recipes";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            const recipes = data.recipes;
            setRecipes(recipes);
        } else {
            console.error("Error occured fetching data");
        }
    }
    useEffect(() => {
        getRecipes();
    }, [])

    return (
        <div>
            <p>picture of food</p>
            <div>Recipe Block ingredients and steps</div>
            <div>calculator for serving sizes</div>
        </div>

    )
}

export default RecipePage
