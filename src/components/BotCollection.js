import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, addBot, removeBot}) {
  // Your code here
 
  return (
    <div className="ui four column grid">
      <div className="row">
        {<ul>{bots.map((bot) => (
            <BotCard key={bot.id} bot={bot} handleBot={addBot} deleteCompletely={removeBot}></BotCard>
          ))}</ul>}
        
      </div>
    </div>
  );
}

export default BotCollection;
