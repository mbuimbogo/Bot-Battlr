import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, addBot}) {
  // Your code here
 
  return (
    <div className="ui four column grid">
      <div className="row">
        {<ul>{bots.map((bot) => (
            <BotCard bot={bot} handleBot={addBot}></BotCard>
          ))}</ul>}
        
      </div>
    </div>
  );
}

export default BotCollection;
