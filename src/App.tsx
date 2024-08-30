import './App.css';
import Home from './page/Home';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { temporaryRecipes } from './services/foodsQuery';
import Weeks from './page/Weeks';

function App() {
  const [recipeList, setRecipeList] = useState(temporaryRecipes);
  const [draggedRecipes, setDraggedRecipes] = useState<any>({
    Mon: { Morning: [], Lunch: [], Dinner: [] },
    Tue: { Morning: [], Lunch: [], Dinner: [] },
    Wed: { Morning: [], Lunch: [], Dinner: [] },
    Thu: { Morning: [], Lunch: [], Dinner: [] },
    Fri: { Morning: [], Lunch: [], Dinner: [] },
    Sat: { Morning: [], Lunch: [], Dinner: [] },
    Sun: { Morning: [], Lunch: [], Dinner: [] },
  });

  const moveRecipe = (fromIndex: number, toIndex: number) => {
    const updatedRecipes = [...recipeList];
    const [movedRecipe] = updatedRecipes.splice(fromIndex, 1);
    updatedRecipes.splice(toIndex, 0, movedRecipe);
    setRecipeList(updatedRecipes);
  };

  // const handleDrop = (recipe: any, day: string, mealtime: string) => {
  //   setDraggedRecipes((prev: any) => ({
  //     ...prev,
  //     [day]: {
  //       ...prev[day],
  //       [mealtime]: [...prev[day][mealtime], recipe],
  //     },
  //   }));
  //   setRecipeList((prev) => prev.filter((r) => r.id !== recipe.id));
  // };

  const handleDrop = (item: any, day: string, mealtime: string) => {
    const { recipe } = item;  // Extract the full recipe object from the item

    console.log('Dropped Recipe:', recipe); // This should show the entire recipe object

    setDraggedRecipes((prev: any) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealtime]: [...prev[day][mealtime], recipe], // Add the full recipe object
      },
    }));

    setRecipeList((prev) => prev.filter((r) => r.id !== recipe.id)); // Remove the recipe from the main list
  };



  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        <Home recipeList={recipeList} moveRecipe={moveRecipe} />
        <Weeks draggedRecipes={draggedRecipes} onDrop={handleDrop} />
      </div>
    </DndProvider>
  );
}

export default App;
