import {useState, useEffect} from 'react'


export function RecipeCard(props) {
    return (
        <div className= "flex justify-center">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
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
            {recipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
        </div>
    );
}

export default RecipeList;
