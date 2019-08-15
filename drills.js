const express = require('express');
const drills = express();

drills.listen(7000, () => {
    console.log('Express server is listening on port 7000!');
  });

drills.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log(typeof a, typeof b, a,b, );
    let c = a + b;
    res.send(`The sum of ${a} and ${b} is ${c}`);
})

drills.get('/cipher', (req, res) => {
    const text = req.query.text.replace(/\s+/g, '');
    const shiftNum = parseInt(req.query.num);
    console.log(text, shiftNum);
    
    let codedText = (text) => {
        return text.split('').map(letter => {
            const char = letter.charCodeAt();
            console.log('original char', char)
            console.log('new char',char-shiftNum)
            let newChar = String.fromCharCode(char-shiftNum); 
            return newChar;
        })
    }
    console.log(codedText(text));
    let cipheredText = codedText(text).join('');
    
    res.send(`Your ciphered message is : ${cipheredText}! `)

})

drills.get('/lotto', (req, res) => {
   const numbers = req.query.num;
   console.log(numbers)
   const randomNumbers = [];
   let i = 0;
   while(i < 7) {
       let num = Math.floor(Math.random() * Math.floor(20));
       console.log('here', i, num)
       randomNumbers.push(num);
       i++;
   }
   console.log(randomNumbers)

   let winningNumbers = randomNumbers.filter(num => {
       return numbers.find(value => value == num)
   })
   console.log(winningNumbers, winningNumbers.length)

   if(winningNumbers.length === 6) {
       res.send('Congratulations! You win $100!') ;
   } else if(winningNumbers.length ===5) {
       res.send('Congratulations, you win a free ticket');
   } else {
       res.send('Sorry, you lose')
   }
   
   
})