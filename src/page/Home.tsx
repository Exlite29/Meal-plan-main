import { FC, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const RecipeCard: FC<{ recipe: any, index: number, moveRecipe: any }> = ({ recipe, index, moveRecipe }) => {
    const [, ref] = useDrag({
        type: "RECIPE",
        item: { recipe, index },
    });

    const [, drop] = useDrop({
        accept: "RECIPE",
        hover: (draggedItem: any) => {
            if (draggedItem.index !== index) {
                moveRecipe(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <div ref={(node) => ref(drop(node))} className="bg-white p-4 border hover:shadow-md rounded shadow">
            <img
                src={recipe.image}
                alt={recipe.name}
                className="h-16 w-full object-cover rounded mb-2"
            />
            <h2 className="text-center text-sm font-semibold">{recipe.name}</h2>
        </div>
    );
};

const Home: FC<{ recipeList: any[], moveRecipe: any }> = ({ recipeList, moveRecipe }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredRecipes = recipeList.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center gap-4 h-screen p-4">
            <h1 className="text-sm font-bold mb-4">Recipes</h1>
            <input
                type="text"
                placeholder="Search food..."
                className="p-2 border border-gray-300 rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {filteredRecipes.map((recipe, index) => (
                    <RecipeCard key={recipe.id} index={index} recipe={recipe} moveRecipe={moveRecipe} />
                ))}
            </div>
        </div>
    );
};

export default Home;
