import React from "react";
import "./React.css";
import {Data} from "./components/LeaguesData.js"
import {useState} from "react";

function Navbar() {
    return (
    <nav>
        <ul >
            <li><a href="https://www.nfl.com/"><b>NFL</b></a></li>
            <li><a href="https://www.nba.com/">NBA</a></li>
            <li><a href="https://www.mlb.com/">MLB</a></li>
            <li><a href="https://www.nhl.com/">NHL</a></li>

        </ul>
    </nav>
    )
}

function Slides({forward, backward, leagues, UnSet, hasPrev, hasNext}) {
   


    return (
        <div onClick={UnSet}className="slides">
        <button onClick={forward} disabled={!hasNext} >Next</button><button onClick={backward} disabled={!hasPrev}>Previous</button>
            <p>{leagues.name}</p>
            <img src={leagues.src} height={300}/>


        </div>

    )
}






  function MoreInfo({leagues, Set, info}) {
    
    

    if (info) {
        return <p><b>{leagues.info}</b></p>
    }
    return (
        <button onClick={Set}  className="moreInfo">More Info</button>
    )
    
  }


export default function Leagues() {
    const [info, addInfo] = useState(false);
    const [button, setButton] = useState(0);
    
    function set() {
        addInfo(true);
    }
    function unSet() {
        addInfo(false);
    }

    function forward() {
        if (button < 3) {
        setButton(button + 1);
        }
    }

    function backward() {
        if (button > 0) {
        setButton(button - 1);
        }
    }

   
    

    let leagues = Data[button];
    let hasPrev = button > 0;
    let hasNext = button < Data.length - 1;

        return (
            <div>
            
                <Navbar />
                
                <Slides  forward={forward} backward={backward} leagues={leagues} UnSet={unSet} hasPrev={hasPrev} hasNext={hasNext}  />
                <MoreInfo leagues={leagues} Set={set} info={info} />

                
            </div>
                
            
        )
        
      }

  