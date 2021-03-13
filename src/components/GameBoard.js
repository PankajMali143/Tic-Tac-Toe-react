import {useState} from 'react';
import Square from './Square';
//import index from './Square';

const GameBoard =() =>
    {
    const [currentPlayer,setCurrentPlayer] = useState("X");
    const [moves,setmoves]=useState(0);  
  
    const emptyGame=[
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null}
    ]
    const [gameState,setGameState]=useState(emptyGame);

    const executeMove =index=>{

        let newGameState=gameState;
        if( newGameState[index].value===null)
        {
            newGameState[index].value=currentPlayer;
            setGameState(newGameState); 
        }
        let nextPlayer= currentPlayer==="X" ? "O" : "X";
        setCurrentPlayer(nextPlayer);
        let result=checkWinOrDraw();
        if(result!==false)
        {
            alert(`player ${result} wins`);
        }
        let moveNumber=moves+1;
        setmoves(moveNumber);
        if(moveNumber===9)
        {
            alert('game is draw....');
        }
    }
    const checkWinOrDraw=()=>{
        let win=false;
        if(gameState[0].value===gameState[1].value && gameState[1].value===gameState[2].value) {
                win=gameState[0].value;
            }
          console.log("result is "+win);   
            return win;
    }
    return(
        <>  
            <div className="col-md-12 col-12 text-center">
                    <h2>Current Player: {currentPlayer}</h2>
                  
                </div>

                <div className='bg-white col-md-6 offset-md-3 
                gameBoard shadow-sm row p-4'>
                    {
                        gameState.map((square,key) =>(
                        <Square key={key} gameState={gameState} index={key} executor={executeMove}/>
                    ))}   
                </div>
                <div className="text-center p-4">
                 <button onClick={e =>setGameState(emptyGame)} type="button" className="btn btn-primary ">Reset Game</button>
                </div>
        </>
    );
}

export default GameBoard;
