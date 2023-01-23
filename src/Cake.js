const Cake =({cake}) =>{    
    return(        
        <div className="singleCake">           
        <h1>{cake.cakeName}</h1>            
        <h2>Ingredients:</h2>            
        <ul>                
            {cake.ingredients.map(ingredient =>{                    
                return(                        
                <li>{ingredient}</li>                    
            )})                
            }            
        </ul>                      
        <h3>Rating: {cake.rating}</h3>        
        </div>    
    );    
}
export default Cake;
  