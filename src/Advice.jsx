import React, { useState, useEffect } from "react";



export default function Advice(){
    const [adviceID, setAdviceID] = useState()
    const [adviceContent, setAdviceContent] = useState()
    useEffect (() => {
        fetch( `https://api.adviceslip.com/advice`)
           .then(res => res.json())
           .then (data => {
             setAdviceID(data.slip.id);
             setAdviceContent(data.slip.advice)
           });
       }, []);
      function newAdvice(){
        fetch( `https://api.adviceslip.com/advice`)
        .then(res => res.json())
        .then (data => {
          setAdviceID(data.slip.id);
          setAdviceContent(data.slip.advice)
        });
    }
   
       
    return(
        <div className="advice">
            <div className="advice-title">ADVICE #{adviceID}</div>
            <div className="advice-content">{adviceContent}</div>       
            <div className="advice-hr"></div>
            <div className="dice-advice" onClick={newAdvice}>
                <img src="icon-dice.svg" alt=""/>
            </div>
            
        </div>
    );
}
