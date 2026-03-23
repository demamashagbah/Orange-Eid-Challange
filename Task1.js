let logs = [
  { event:"click", time:1 },
  { event:"click", time:2 },
  { event:"scroll", time:3 },
  { event:"scroll", time:4 },
  { event:"click", time:5 }
]
let Trans_info =[];
let currentEvent = logs[0].event;
let count = 1;

for (let i = 1; i < logs.length; i++){
    if(currentEvent == logs[i].event ){
        count++;
        
    }
    else{
        Trans_info.push({ event: currentEvent, count: count });
        currentEvent = logs[i].event;
        count = 1;
    }
}

Trans_info.push({ event: currentEvent, count: count });

console.log(Trans_info)