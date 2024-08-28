import { FC } from 'react';
import { useDrag } from 'react-dnd';

const RecipeCard: FC<{ recipe: any, index: number }> = ({ recipe }) => {
    const [, ref] = useDrag({
        type: "RECIPE",
        item: { recipe },
    });

    return (
        <div ref={ref} className="bg-white p-4 border hover:shadow-md rounded shadow">
            <img
                src={recipe.image}
                alt={recipe.name}
                className="h-20 w-full object-cover rounded mb-2"
            />
            <h2 className="text-center text-sm font-semibold">{recipe.name}</h2>
        </div>
    );
};

export default RecipeCard;
