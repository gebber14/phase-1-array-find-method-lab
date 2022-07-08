// code your solution here
function superbowlWin(record) {
    const isWin = record.find(record => record.result ==="W"); 
    console.log(isWin);
     if (isWin === undefined) {
       console.log(undefined);
       return undefined;
     } else if (isWin.result === "W") {
       console.log(isWin.year);
       return isWin.year;
     }
   }