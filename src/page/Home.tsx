// import { useGetAllRecipes } from "../services/foodsQuery";


// export default function Home() {
//     const { data: recipes, isLoading, error } = useGetAllRecipes();

//     if (isLoading) {
//         return (
//             <div className="flex justify-center h-screen items-center">
//                 Loading...
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="flex justify-center h-screen items-center">
//                 Error loading recipes.
//             </div>
//         );
//     }

//     return (
//         <div className="flex flex-col items-center gap-4 h-screen p-4">
//             <h1 className="text-2xl mb-4">Recipes</h1>
//             {recipes?.map((recipe, i) => (
//                 <div key={i} className="grid grid-cols-3 md:grid-cols-3 gap-4">
//                     <div className="bg-white p-4 border hover:shadow-md rounded shadow">
//                         <img
//                             src={recipe.image}
//                             alt={recipe.name}
//                             className="h-32 w-full object-cover rounded mb-2"
//                         />
//                         <h2 className="text-center text-lg font-semibold">{recipe.name}</h2>
//                     </div>
//                     {/* <div className="col-span-2 p-4">
//                         <h3 className="text-xl mb-2">Ingredients</h3>
//                         <ul className="list-disc list-inside">
//                             {recipe.ingredients.map((ingredient, index) => (
//                                 <li key={index}>{ingredient}</li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="col-span-2 p-4">
//                         <h3 className="text-xl mb-2">Ingredients</h3>
//                         <ul className="list-disc list-inside">
//                             {recipe.instructions.map((items, index) => (
//                                 <li key={index}>{items.action}</li>
//                             ))}
//                         </ul>
//                     </div> */}
//                 </div>
//             ))}
//         </div>
//     )
// }
import { FC, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const RecipeCard: FC<{ recipe: any, index: number, moveRecipe: any, onDrop: any }> = ({ recipe, index, moveRecipe, onDrop }) => {
    const [, ref] = useDrag({
        type: "RECIPE",
        item: { index },
    });

    const [, drop] = useDrop({
        accept: "RECIPE",
        hover: (draggedItem: any) => {
            if (draggedItem.index !== index) {
                moveRecipe(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
        drop: () => onDrop(recipe), // Call onDrop when recipe is dropped
    });

    return (
        <div ref={(node) => ref(drop(node))} className="bg-white p-4 border hover:shadow-md rounded shadow">
            <img
                src={recipe.image}
                alt={recipe.name}
                className="h-16 w-full object-cover rounded mb-2"
            />
            <h2 className="text-center text-lg font-semibold">{recipe.name}</h2>
        </div>
    );
};

const Home: FC<{ recipeList: any[], moveRecipe: any, onDrop: any }> = ({ recipeList, moveRecipe, onDrop }) => {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter recipes based on the search query
    const filteredRecipes = recipeList.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center gap-4 h-screen p-4">
            <h1 className="text-2xl mb-4">Recipes</h1>
            <input
                type="text"
                placeholder="Search recipes..."
                className="p-2 border border-gray-300 rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {filteredRecipes.map((recipe, index) => (
                    <RecipeCard key={recipe.id} index={index} recipe={recipe} moveRecipe={moveRecipe} onDrop={onDrop} />
                ))}
            </div>
        </div>
    );
};

export default Home;
