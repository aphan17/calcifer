import {useState, useEffect} from 'react'
import "./recipe.css";

export function RecipeCard(props) {
    return (
        <div className="flex-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.recipe.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.recipe.description}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    );
}

function RecipeList() {
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
            <div className="introheader">
                <h1 className="text-left px-4 py-2 text-2xl font-bold">Recipe Index</h1>
                <p className="text-left px-4">
                Here is the recipe index, browse by category or course.
                </p>
            </div>

            <div>
                <nav className="recipeNav">
                    <ul className="recipeCategories">
                        <li className="recipeList">
                            <button>Category</button>
                        </li>
                        <li className="recipeList">
                            <button>Collection</button>
                        </li>
                        <li className="recipeList">
                            <button>Course</button>
                        </li>
                    </ul>
                </nav>

            </div>

            <div className="recipes flex flex-wrap justify-center space-x-4 px-4 py-3">
            {recipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
            </div>

        </div>
    );
}

export default RecipeList;
