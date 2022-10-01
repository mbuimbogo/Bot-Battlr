import {React, useState } from "react";
import { useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step 1

  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] =  useState([]);

 useEffect(()=> {
  fetch("http://localhost:8002/bots")
  .then((res)=> res.json())
  .then(bots=> setBots(bots))
 },[])

function addBotToArmy(armyBot){
  if(!botArmy.find(bot => bot!== armyBot)){
    const foundBot = bots.find(bot => bot === armyBot)  //finds bot

    setBotArmy([...botArmy, foundBot])
  }
}

function releaseBotFromArmy(armyBot){
  
  const remainedBotArmyList = botArmy.filter((bot)=> bot !== armyBot)
  setBotArmy(remainedBotArmyList)

}

  return (
    <div>
           <YourBotArmy botArmy={botArmy} getAwayBot={releaseBotFromArmy}/>
      <BotCollection bots={bots} addBot={addBotToArmy}/>
    </div>
  )
}

export default BotsPage;
