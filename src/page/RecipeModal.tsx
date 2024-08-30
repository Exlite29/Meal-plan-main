import React from 'react';

const RecipeModal: React.FC<{ recipe: any, onClose: () => void }> = ({ recipe, onClose }) => {


    return (
        <div className='fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-75'>
            <div className='bg-white p-4 rounded-lg shadow-lg max-w-lg w-full'>
                <div className='flex justify-between'>
                    <h2 className='text-xl font-bold mb-2'>{recipe.name}</h2>
                    <button onClick={onClose} className='top right-2 text-xl pb-4'>&times;</button>
                </div>
                <img src={recipe.image} alt={recipe.name} className='w-full h-48 object-cover mb-2 rounded' />
                <h3 className='text-lg font-semibold mb-2'>Ingredients</h3>
                <ul className='list-disc list-inside mb-2'>
                    {recipe.ingredients.map((ingredient: string, index: number) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3 className='text-lg font-semibold mb-2'>Instructions</h3>
                <ul className='list-disc list-inside'>
                    {recipe.instructions.map((instruction: { action: string }, index: number) => (
                        <li key={index}>{instruction.action}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecipeModal;
