import { FC } from 'react';

const Drop: FC<{ draggedRecipes: any[] }> = ({ draggedRecipes }) => {
    return (
        <div className="p-4 border-l border-gray-200 w-1/3">
            <h2 className="text-sm font-bold mt-1 mb-4">Dragged Recipes</h2>
            {draggedRecipes.map((recipe) => (
                <div key={recipe.id} className="mb-4">
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-32 w-1/2 object-cover rounded mb-2"
                    />
                    <h3 className="text-lg font-bold">{recipe.name}</h3>
                    <h4 className="font-semibold mt-2">Ingredients:</h4>
                    <ul className="list-disc list-inside">
                        {recipe.ingredients.map((ingredient: string, index: number) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h4 className="font-semibold mt-2">Instructions:</h4>
                    <ol className="list-decimal list-inside">
                        {recipe.instructions.map((instruction: any, index: number) => (
                            <li key={index}>{instruction.action}</li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
    );
};

export default Drop;
