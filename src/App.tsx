import React, {FC} from 'react';
import './App.css';
import Character from "./components/character/Character";
import Characters from "./components/characters/Characters";
import Recipes from "./components/recipes/Recipes";
import Products from "./components/products/Products";

const App:FC = () =>  {
  return (
      <>
          {/*<Characters></Characters>*/}
          {/*<Recipes></Recipes>*/}
          <Products></Products>

      </>
  );
}

export default App;
