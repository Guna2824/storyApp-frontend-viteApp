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
