import NavBar from "./NavBar";
import Title from "./Title";
// import RecipeList from "./RecipeList";
import Search from "./Search";
import CakeForm from "./CakeForm";
import Cake from "./Cake";
import {useState} from "react";

 function App() {

  const [cakes, setCakes] = useState([
      {
          cakeName: "Lemon Drizzle",
          ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
          rating: 5
      },
      {
          cakeName: "Tea Loaf",
          ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
          rating: 3
      },
      {
          cakeName: "Brownie",
          ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
          rating: 4
      },
      {
          cakeName: "Carrot Cake",
          ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
          rating: 5
      }
  ]);

  const addNewCake = (newCake) => {
    setCakes([...cakes, newCake]);
  }


  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <Cake cakes={cakes} />
        <Search />
        <CakeForm addNewCake={addNewCake} />
      </main>
    </>
  );
}

export default App;
