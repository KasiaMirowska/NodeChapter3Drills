
  
// let sentence = (text) => {
//     return text.split('').map(letter => {
        
//         const char = letter.charCodeAt();
      
//        return char;
        
//     })
// }

    //console.log(sentence('I love Jacob'));
// function coding(text) {
//         for(i = 0; i<text.length; i++) {
            
//             text.charCodeAt(i);
//         }
//         return i;
//     }
//     console.log(coding('I love Jacob'));
let numbers= [ 3,5,12,14,8,9]
let randomNumbers = [14,1,7,12,8,9]
let winningNumbers = randomNumbers.filter(num => {
    return numbers.find(value => value == num)
})
console.log(winningNumbers)

