import React, {FC} from 'react';

export interface IRecipeProps {
    id: number,
    name: string,
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    image: string,
    rating: number,
    reviewCount: number,
    mealType: string[]
}

type IRecipePropsWithChildren = IRecipeProps & { children?: React.ReactNode }
const Recipe: FC<IRecipePropsWithChildren> = ({
                                                  id,
                                                  name,
                                                  ingredients,
                                                  instructions,
                                                  prepTimeMinutes,
                                                  cookTimeMinutes,
                                                  servings,
                                                  difficulty,
                                                  cuisine,
                                                  caloriesPerServing,
                                                  tags,
                                                  image,
                                                  rating,
                                                  reviewCount,
                                                  mealType
                                              }) => {
    return (
        <div>
            <h2 >{id} - {name}</h2>
            <p>Cuisine: {cuisine},
                calories: {caloriesPerServing},
                rating: {rating},
                review count: {reviewCount}</p>
            <img src={image} alt={name}/>
            <ul>Ingredients: {
                ingredients.map((ingredient, index) =><li key={index}>{ingredient}</li> )
            }</ul>
            <ul>Instructions: {
                instructions.map((instruction,index) => <li key={index}>{instruction}</li>)
            }</ul>
            <p>Preparing time - {prepTimeMinutes},
                cooking time - {cookTimeMinutes},
                serving - {servings}
                difficulty - {difficulty}</p>
            <ul>Tags: {
                tags.map((tag,index) =><li key={index}>{tag}</li> )
            }</ul>
            <ul>Meal type: {
                mealType.map((type, index) => <li key={index}>{type}</li>)
            }</ul>

        </div>
    );
};

export default Recipe;