const CakeForm = () => {

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Cake Name:</label>
            <input type="text" id="name" 
            onChange={(event) => setCakeName(event.target.value)} 
            value={cakeName} />

            <label htmlFor="ingredients">Ingredients:</label>
            <textarea cols="30" rows="1" id="ingredients">
            onChange={(event) => setIngredient(event.target.value)} 
            value={ingredient} </textarea>

            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" min={1} max={5}
            onChange={(event) => setRating(event.target.value)} 
            value={rating} />
            
            <input type="submit"/>
        </form>
    )

}

export default CakeForm;