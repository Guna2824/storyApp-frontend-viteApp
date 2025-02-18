/*

import React, { useEffect, useState } from 'react'

function Game() {

    const [playerChoose, setPlayerChoose] = useState(null);
    const [computerChoose, setComputerChoose] = useState(null);
    const [round, setRound] = useState(1);
    const [result, setResult] = useState(null);
    const [timer, setTimer] = useState(10);
    const [restart, setRestart]= useState(false);
    const [output, setOutput] = useState([]);

    const choices = [
        "sponge",
        "paper",
        "air",
        "water",
        "dragon",
        "devil",
        "lightning",
        "gun",
        "rock",
        "fire",
        "scissors",
        "snake",
        "human",
        "tree",
        "wolf",
      ];

      const game =(player)=>{
        let playerChoice = player;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoose(computerChoice);
        // console.log(`Player chose => ${playerChoice}`);
        // console.log(`Computer chose => ${computerChoice}`);

        if (playerChoice === computerChoice) {
            // console.log("It's a tie!");
            setResult("It's a tie!");
        } else if (playerChoice === null ){
            // console.log('computer wins!');
            setResult("Computer wins!");
        }else if (playerChoice === playerChoose) {
            if (
            computerChoice === "paper" ||
            computerChoice === "air" ||
            computerChoice === "water" ||
            computerChoice === "dragon" ||
            computerChoice === "devil" ||
            computerChoice === "lightning"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "paper") {
            if (
            computerChoice === "air" ||
            computerChoice === "water" ||
            computerChoice === "dragon" ||
            computerChoice === "devil" ||
            computerChoice === "lightning" ||
            computerChoice === "gun"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "air") {
            if (
            computerChoice === "water" ||
            computerChoice === "dragon" ||
            computerChoice === "devil" ||
            computerChoice === "lightning" ||
            computerChoice === "gun" ||
            computerChoice === "rock"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "water") {
            if (
            computerChoice === "dragon" ||
            computerChoice === "devil" ||
            computerChoice === "lightning" ||
            computerChoice === "gun" ||
            computerChoice === "rock" ||
            computerChoice === "fire"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "dragon") {
            if (
            computerChoice === "devil" ||
            computerChoice === "lightning" ||
            computerChoice === "gun" ||
            computerChoice === "rock" ||
            computerChoice === "fire" ||
            computerChoice === "scissors"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "devil") {
            if (
            computerChoice === "lightning" ||
            computerChoice === "gun" ||
            computerChoice === "rock" ||
            computerChoice === "fire" ||
            computerChoice === "scissors" ||
            computerChoice === "snake"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "lightning") {
            if (
            computerChoice === "gun" ||
            computerChoice === "rock" ||
            computerChoice === "fire" ||
            computerChoice === "scissors" ||
            computerChoice === "snake" ||
            computerChoice === "human"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "gun") {
            if (
            computerChoice === "rock" ||
            computerChoice === "fire" ||
            computerChoice === "scissors" ||
            computerChoice === "snake" ||
            computerChoice === "human" ||
            computerChoice === "tree"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "rock") {
            if (
            computerChoice === "fire" ||
            computerChoice === "scissors" ||
            computerChoice === "snake" ||
            computerChoice === "human" ||
            computerChoice === "tree" ||
            computerChoice === "wolf"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "fire") {
            if (
            computerChoice === "scissors" ||
            computerChoice === "snake" ||
            computerChoice === "human" ||
            computerChoice === "tree" ||
            computerChoice === "wolf" ||
            computerChoice === "sponge"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "scissors") {
            if (
            computerChoice === "snake" ||
            computerChoice === "human" ||
            computerChoice === "tree" ||
            computerChoice === "wolf" ||
            computerChoice === "sponge" ||
            computerChoice === "paper"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "snake") {
            if (
            computerChoice === "human" ||
            computerChoice === "tree" ||
            computerChoice === "wolf" ||
            computerChoice === "sponge" ||
            computerChoice === "paper" ||
            computerChoice === "air"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "human") {
            if (
            computerChoice === "tree" ||
            computerChoice === "wolf" ||
            computerChoice === "sponge" ||
            computerChoice === "paper" ||
            computerChoice === "air" ||
            computerChoice === "water"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "tree") {
            if (
            computerChoice === "wolf" ||
            computerChoice === "sponge" ||
            computerChoice === "paper" ||
            computerChoice === "air" ||
            computerChoice === "water" ||
            computerChoice === "dragon"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        } else if (playerChoice === "wolf") {
            if (
            computerChoice === "sponge" ||
            computerChoice === "paper" ||
            computerChoice === "air" ||
            computerChoice === "water" ||
            computerChoice === "dragon" ||
            computerChoice === "devil"
            ) {
            // console.log("Player wins!");
            setResult("Player wins!");
            } else {
            // console.log("Computer wins!");
            setResult("Computer wins!");
            }
        }
        setOutput(prev=>[...prev, result])
      }

      const selectOption =(id)=>{
        setPlayerChoose(id);
        setRound(round+1);
        setTimer(10);
      }

      useEffect(()=>{
        if(playerChoose){
            game(playerChoose)
        }
      },[round])

    useEffect(() => {
      const intervalId = setInterval(() => {
        if(timer <= 0) return;
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      
      return () => clearInterval(intervalId);
    }, [timer]);

    useEffect(() => {
      setRound(1);
      setTimer(10);
      setRestart(false);
      setPlayerChoose(null);
      setComputerChoose(null);
      setResult(null);
      setOutput([]);
    }, [restart]);

    if (round > 9 || timer === 0)
      return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-5">
            <p>total rounds: {round-1}</p>
            <p>player points: {output.filter((item)=> item === "Player wins!").length} </p>
            <p>system ponts: {output.filter((item)=> item === "Computer wins!").length} </p>
            <p>tie points: {output.filter((item)=> item === "It's a tie!").length} </p>
            <p>{`${output.filter((item)=> item === "Player wins!").length === output.filter((item)=> item === "Computer wins!").length ? 'Match tie!' : output.filter((item)=> item === "Player wins!").length > output.filter((item)=> item === "Computer wins!").length ? 'Player wins!' : 'system wins!'}`}</p>
            <p>Game over!</p>
            <button className='cursor-pointer border font-semibold border-gray-300 p-2 rounded-md bg-gray-100' onClick={()=>setRestart(true)}>start</button>
        </div>
      );

  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-5'>
        <p>Timer: {timer}</p>
        {round && <div>
            <p>Round: {round}</p>
            <p>player choose: {playerChoose}</p>
            <p>Computer Choose: {computerChoose}</p>
            <p>Result: {result}</p>
        </div>}
        <div className='border w-[75%] p-5'>
            {choices.map((item)=><button key={item} className={`cursor-pointer border border-gray-300 p-2 rounded-md font-semibold m-2 bg-gray-100 ${playerChoose === item ? 'ring-2 ring-gray-600' : null} ${computerChoose === item ? 'ring-2 ring-red-600' : null }`} onClick={()=>selectOption(item)}>{item}</button>)}
        </div>
        
    </div>
  )
}

export default Game;

*/

import React, { useEffect, useState } from 'react';

function Game() {
    const [playerChoose, setPlayerChoose] = useState(null);
    const [computerChoose, setComputerChoose] = useState(null);
    const [round, setRound] = useState(1);
    const [result, setResult] = useState(null);
    const [timer, setTimer] = useState(10);
    const [output, setOutput] = useState([]);

    const choices = [
        "sponge", "paper", "air", "water", "dragon", "devil", "lightning", "gun", "rock", "fire",
        "scissors", "snake", "human", "tree", "wolf"
    ];

    const game = (playerChoice) => {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoose(computerChoice);

        let gameResult = "";
        if (playerChoice === computerChoice) {
            gameResult = "It's a tie!";
        } else if (!playerChoice) {
            gameResult = "Computer wins!";
        } else {
            const winningChoices = {
                sponge: ["paper", "air", "water", "dragon", "devil", "lightning"],
                paper: ["air", "water", "dragon", "devil", "lightning", "gun"],
                air: ["water", "dragon", "devil", "lightning", "gun", "rock"],
                water: ["dragon", "devil", "lightning", "gun", "rock", "fire"],
                dragon: ["devil", "lightning", "gun", "rock", "fire", "scissors"],
                devil: ["lightning", "gun", "rock", "fire", "scissors", "snake"],
                lightning: ["gun", "rock", "fire", "scissors", "snake", "human"],
                gun: ["rock", "fire", "scissors", "snake", "human", "tree"],
                rock: ["fire", "scissors", "snake", "human", "tree", "wolf"],
                fire: ["scissors", "snake", "human", "tree", "wolf", "sponge"],
                scissors: ["snake", "human", "tree", "wolf", "sponge", "paper"],
                snake: ["human", "tree", "wolf", "sponge", "paper", "air"],
                human: ["tree", "wolf", "sponge", "paper", "air", "water"],
                tree: ["wolf", "sponge", "paper", "air", "water", "dragon"],
                wolf: ["sponge", "paper", "air", "water", "dragon", "devil"]
            };
            gameResult = winningChoices[playerChoice]?.includes(computerChoice) ? "Player wins!" : "Computer wins!";
        }
        setResult(gameResult);
        setOutput((prev) => [...prev, gameResult]);
    };

    const selectOption = (id) => {
        setPlayerChoose(id);
        setRound((prevRound) => prevRound + 1);
        setTimer(10);
    };

    useEffect(() => {
        if (playerChoose) {
            game(playerChoose);
        }
    }, [playerChoose]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timer > 0) {
                setTimer((prevTimer) => prevTimer - 1);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timer]);

    if (round > 9 || timer === 0)
        return (
            <div className="min-h-screen flex flex-col justify-center items-center gap-5">
                <p>Total Rounds: {round - 1}</p>
                <p>Player Points: {output.filter((item) => item === "Player wins!").length}</p>
                <p>System Points: {output.filter((item) => item === "Computer wins!").length}</p>
                <p>Tie Points: {output.filter((item) => item === "It's a tie!").length}</p>
                <p>
                    {output.filter((item) => item === "Player wins!").length ===
                    output.filter((item) => item === "Computer wins!").length
                        ? "Match tie!"
                        : output.filter((item) => item === "Player wins!").length >
                          output.filter((item) => item === "Computer wins!").length
                        ? "Player wins!"
                        : "System wins!"}
                </p>
                <p>Game Over!</p>
                <button className='cursor-pointer border font-semibold border-gray-300 p-2 rounded-md bg-gray-100' onClick={() => window.location.reload()}>
                    Start Again
                </button>
            </div>
        );

    return (
        <div className='min-h-screen flex flex-col justify-center items-center gap-5'>
            <p>Timer: {timer}</p>
            <p>Round: {round}</p>
            <p>Player Choose: {playerChoose}</p>
            <p>Computer Choose: {computerChoose}</p>
            <p>Result: {result}</p>
            <div className='border w-[75%] p-5'>
                {choices.map((item) => (
                    <button
                        key={item}
                        className={`cursor-pointer border border-gray-300 p-2 rounded-md font-semibold m-2 bg-gray-100 ${
                            playerChoose === item ? 'ring-2 ring-gray-600' : ''
                        } ${computerChoose === item ? 'ring-2 ring-red-600' : ''}`}
                        onClick={() => selectOption(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Game;
