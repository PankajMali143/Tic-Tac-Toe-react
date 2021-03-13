const Square=({index,gameState,executor})=>{

    console.log(gameState[index].value);
    function drawGrid(index) {
        let borderString = "";
             if(index === 1 || index === 4 || index === 7) {
               return borderString += "bsb";
             }
             if(index <= 2) {
               return borderString += " bb";
             }
             if (index >= 6){
                 return borderString += "bt";
             }
           
        
       return borderString;
    }

    return (
        <div className={`x10 text-center game-Square ${drawGrid(index)}
        `} onClick={e => executor(index)}>   
        {gameState[index].value}
        </div>
    )
}

export default Square;