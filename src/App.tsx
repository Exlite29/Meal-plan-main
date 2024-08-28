import './App.css';
import Home from './page/Home';
import Drop from './page/Drop';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { temporaryRecipes } from './services/foodsQuery';
import Weeks from './page/Weeks';

function App() {
  const [recipeList, setRecipeList] = useState(temporaryRecipes);
  const [draggedRecipes, setDraggedRecipes] = useState<any[]>([]);

  const moveRecipe = (fromIndex: number, toIndex: number) => {
    const updatedRecipes = [...recipeList];
    const [movedRecipe] = updatedRecipes.splice(fromIndex, 1);
    updatedRecipes.splice(toIndex, 0, movedRecipe);
    setRecipeList(updatedRecipes);
  };

  const handleDrop = (recipe: any) => {
    setDraggedRecipes((prev) => [...prev, recipe]);
    setRecipeList((prev) => prev.filter((r) => r.id !== recipe.id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        <Home recipeList={recipeList} moveRecipe={moveRecipe} onDrop={handleDrop} />
        <Weeks />
        <Drop draggedRecipes={draggedRecipes} />
      </div>
    </DndProvider>
  );
}

export default App;
