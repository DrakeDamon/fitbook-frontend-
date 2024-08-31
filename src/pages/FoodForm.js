import { useState } from "react";
function FoodForm() {
const [food, setFood]= useState("")

function handleChange(e) {
  setFood(e.target.value);

}
  return (
    <div>
      <form>
      <label>
        Food: 
        <input value={food} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default FoodForm;


// In the Food Form component:
// Create a controlled component with:
// A field for a user to type the name of their favorite food
// Do not let a user enter more than ten characters for the food (Do not use the maxlength attribute for this)
// A field for a user to type the food’s country of origin
// A Submit button




// When a User submits the form:
// The form should clear
// If the country of origin is America, render a h1 with the text Delicious!
// If the country of origin is Italy, render a h1 with the text Delizioso!
// If the country of origin is Mexico or Spain, render a h1 with the text Delicioso!
// If the country of origin is not one of those countries, render a h1 with the text Yummy!
// This message should not be displayed before a user submits the form
// If the User fills out the form again, the text should update