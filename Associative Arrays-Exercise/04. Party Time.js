function  partyTime(input) {
   let guestlist ={
    vip: [],
    regular: []
   } 
   let guest = input.shift();
   
   while(guest !== "PARTY"){
    let index = guest[0];

    if (isNaN(index)) {
        guestlist.regular.push(guest);
    }else {
        guestlist.vip.push(guest);
    }
    guest = input.shift();
   }
   for(let guest of input){
    if (guestlist.vip.includes(guest)) {
        let index = guestlist.vip.indexOf(guest);
        guestlist.vip.splice(index,1)

    } else if (guestlist.regular.includes(guest)) {
        let index = guestlist.regular.indexOf(guest);
        guestlist.regular.splice(index,1)
        }
   }
   let vipL = guestlist.vip.length;
   let regularL = guestlist.regular.length;
   let guestNum = vipL + regularL;

   console.log(guestNum);
   console.log(guestlist.vip.join('\n'));
   console.log(guestlist.regular.join('\n'));
    
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])