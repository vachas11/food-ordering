import React from "react";
import Card from "../UI/Card";
import "./AvailableMeal.css";
import MealItem from "./mealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvalilableMeals = () => {
  return (
    <section className="meals">
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return (
              <div>
                <MealItem
                  id={meal.id}
                  name={meal.name}
                  price={meal.price}
                  description={meal.description}
                />
                {/* <li>{meal.name}</li>; */}
              </div>
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvalilableMeals;
