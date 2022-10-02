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

    const foundBot = bots.find(bot => bot === armyBot)  //finds bot

    setBotArmy([...botArmy, foundBot])
  
}

function releaseBotFromArmy(armyBot){
  
  const remainedBotArmyList = botArmy.filter((bot)=> bot !== armyBot)
  setBotArmy(remainedBotArmyList)

}

function DeleteBot(armyBot){
  const filterBots = bots.filter(bot => bot !== armyBot.id)
  setBots(filterBots)
  const filterArmyBots = botArmy.filter(bot => bot !== armyBot.id)
  setBotArmy(filterArmyBots)

  fetch(`http://localhost:8002/bots/${armyBot.id}`,{
    method: 'DELETE'
  })
  
}

  return (
    <div>
           <YourBotArmy botArmy={botArmy} getAwayBot={releaseBotFromArmy} removeBot ={DeleteBot}/>
      <BotCollection bots={bots} addBot={addBotToArmy} removeBot ={DeleteBot}/>
    </div>
  )
}

export default BotsPage;
