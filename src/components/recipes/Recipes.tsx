import React, {FC, useEffect, useState} from 'react';
import Recipe, {IRecipeProps} from "../recipe/Recipe";

const Recipes:FC = () => {
    const [recipes, setRecipes] = useState<IRecipeProps[]>([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(({recipes}) =>{
                setRecipes(recipes)
            });
    }, []);

    return (
        <div>
            {
                recipes.map(value => (<Recipe id={value.id}
                                              name={value.name}
                                              ingredients={value.ingredients}
                                              instructions={value.instructions}
                                              prepTimeMinutes={value.prepTimeMinutes}
                                              cookTimeMinutes={value.cookTimeMinutes}
                                              servings={value.servings}
                                              difficulty={value.difficulty}
                                              cuisine={value.cuisine}
                                              caloriesPerServing={value.caloriesPerServing}
                                              tags={value.tags}
                                              image={value.image}
                                              rating={value.rating}
                                              reviewCount={value.reviewCount}
                                              mealType={value.mealType}/>
                ))
            }
        </div>
    );
};

export default Recipes;