import { useState } from "react";

const CakeForm = (addNewCake) => {


    const[cakeName,setCakeName] = useState("");
    const[ingredients,setIngredients] = useState("");
    const[rating,setRating] = useState("");


    const handleSubmit = (event) => {

        event.preventDefault();
        
    
        const newCake ={
          cakeName: cakeName,
          ingredients:ingredients,
          rating: rating
        } 
        addNewCake(newCake);
      }



    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Cake Name:</label>
            <input type="text" id="name" 
            onChange={(event) => setCakeName(event.target.value)} 
            value={cakeName} />

            <label htmlFor="ingredients">Ingredients:</label>
            <input cols="30" rows="1" id="ingredients"
            onChange={(event) => setIngredients(event.target.value)} 
            value={ingredients}/>

            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" min={1} max={5}
            onChange={(event) => setRating(event.target.value)} 
            value={rating} />
            
            <input type="submit"/>
        </form>
    )

}

export default CakeForm;