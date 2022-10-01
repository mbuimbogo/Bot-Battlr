import React from "react";
import BotCard from "./BotCard"


function YourBotArmy({botArmy, getAwayBot}) {
  //your bot army code here...


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <h3>{botArmy.map((bot) => (
            <BotCard key= {bot.id} bot={bot} handleBot= {getAwayBot}></BotCard>
          ))}</h3>
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
