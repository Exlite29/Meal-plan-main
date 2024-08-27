import './App.css';
import Home from './page/Home';
import Drag from './page/Drag';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { temporaryRecipes } from './services/foodsQuery';

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
        {/* Pass handleDrop to Home component */}
        <Home recipeList={recipeList} moveRecipe={moveRecipe} onDrop={handleDrop} />
        <Drag draggedRecipes={draggedRecipes} />
      </div>
    </DndProvider>
  );
}

export default App;
