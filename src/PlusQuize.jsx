import React, { useEffect, useState } from 'react'


function PlusQuize() {
    
    const [x, setX] = useState(10);
    const [y, setY] = useState(5);
    const [ans, setAns] = useState(50);
    const [wans, setWans] = useState(5);
    const [score, setScore] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);
    const [clr, setClr] = useState('yellow');

    const arr = ['red', 'yellow', 'green', 'cyan', 'blue', 'violet'];

    useEffect(()=>{
        const randomColor = arr[Math.floor(Math.random() * arr.length)];
        setClr(randomColor)
    },[score, wrong])
  
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if(timer <= 0) return;
        setTimer((prevTimer) => prevTimer - 1); // Increment timer by 1 every second
      }, 1000); // 1000ms = 1 second
  
      // Cleanup the interval when the component unmounts
      
      return () => clearInterval(intervalId);
    }, [timer]); // Empty dependency array means it runs only once when the component mounts
  
    useEffect(()=>{
      let a = Math.floor(Math.random()*99);
      let b = Math.floor(Math.random()*99);
      let c = a+b;
      let reversedC = parseInt(c.toString().split('').reverse().join(''));
      setX(a);
      setY(b);
      setAns(c);
      setWans(reversedC);
    },[score, wrong])
  
    let check = score%2===1 ? wans : ans;
  
    const yes =()=>{
      if(ans === check){
        setScore(score+1)
      }else{
        setWrong(wrong+1)
      }
      setCount(count+1);
    }
  
    const no =()=>{
      if(wans === check){
        setScore(score+1)
      }else{
        setWrong(wrong+1)
      }
      setCount(count+1);
    }
  
    const start = ()=>{
      setTimer(60);
      setScore(0);
      setCount(0);
    }
  
  
    return (
      <div className={`text-center font-semibold border `} style={{background : clr}}>
        {timer <= 0 ?
          (<div>
            <button className='px-2 py-1 border m-5' onClick={start}>START</button>
            <span>{count >= 1 ? `${score}/${count}` : null}</span>
          </div>)
          :
          (<div>
            <p>Timer : {timer}</p>
            <p>score : {score}</p>
            <p>Wrong score : {wrong}</p>
            <span>{x}</span>+<span>{y}</span>=<span>{check}</span>
  
            <div>
              <button className='border px-2 py-1 m-5' onClick={yes}>YES</button>
              <button className='border px-2 py-1 m-5' onClick={no}>NO</button>
            </div>
            
          </div>)
        }
      </div>
    )
  }

export default PlusQuize