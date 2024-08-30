import React from 'react';
import { useDrop } from 'react-dnd';

const WEEKS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MEALTIMES = ['Morning', 'Lunch', 'Dinner'];

const Weeks: React.FC<{ draggedRecipes: any, onDrop: any }> = ({ draggedRecipes, onDrop }) => {
    console.log('Dragged Recipes:', draggedRecipes);
    return (
        <div className='grid grid-cols-3 w-full gap-4 mt-5 m-5'>
            {WEEKS.map((day) => (
                <ul key={day} className='h-auto'>
                    <li className='font-bold text-sm text-white pl-2 pt-2 pb-1 bg-[#213a57] rounded-lg'>{day}</li>
                    {MEALTIMES.map((mealtime, i) => (
                        <MealTimeDropArea

                            key={`${day}-${mealtime} ${i}`}  // Make the key unique by combining day and mealtime
                            day={day}
                            mealtime={mealtime}
                            recipes={draggedRecipes?.[day]?.[mealtime] || []}
                            onDrop={onDrop}
                        />
                    ))}
                </ul>
            ))}
        </div>
    );
};

const MealTimeDropArea: React.FC<{ day: string, mealtime: string, recipes: any[], onDrop: any }> = ({ day, mealtime, recipes = [], onDrop }) => {
    console.log(recipes);

    const [, drop] = useDrop({
        accept: 'RECIPE',
        drop: (item: any) => onDrop(item, day, mealtime),
    });

    const baseClass = 'h-auto border mt-2 border-gray-300 rounded-md text-black';
    const filledClass = recipes.length > 0 ? 'bg-[#0b6477]' : 'bg-gray-100';
    const className = `${baseClass} ${filledClass}`;

    return (
        <div ref={drop} className={className}>
            <p className='ml-2 font-semibold text-black mb-2'>{mealtime}</p>
            {recipes.map((recipe, i) => (
                <div key={i} className='bg-white font-semibold text-black m-2 p-2 rounded shadow'>
                    <p className='text-black text-sm'>{recipe.name}</p>
                </div>
            ))}
        </div>
    );
};


export default Weeks;
