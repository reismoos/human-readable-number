module.exports = function toReadable (number) {
  let oneNineteen = ['zero', 'one', 'two', 'three','four','five','six', 'seven','eight','nine','ten',
  'eleven','twelve','thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen']
  let twentyNinety = ['twenty', 'thirty', 'forty', 'fifty','sixty','seventy','eighty', 'ninety']
 
  let howMuchHundred = (n) => {
    for (let i = 1; i<= Math.floor(n / 100); i++){
        if (i === Math.floor(n / 100)){
            return `${oneNineteen[i]} hundred `
        }
    } return ''
}   

  let howMuchTens = (n) =>{
    for (let i = 2; i <= Math.floor(n % 100 / 10); i++) {
        if (i === Math.floor(n % 100 / 10)){
            return `${twentyNinety[i-2]} `
        }
    }return ''
  } 

  let ones = (n) => {
    for (let i = 0; i <= 10; i++){
        if (i===Math.floor(n % 10)) {
            return `${oneNineteen[i]}`
        }
    }
  }

  let result

  if (number < 20) {
    return oneNineteen[number]
  } else if (number % 100 === 0){
    return (howMuchHundred(number)).trim();
  } else if (number % 100 > 1 && !howMuchTens(number)){
    return (howMuchHundred(number) + oneNineteen[number % 20]).trim();
  } else if (number % 10 === 0){
    return (howMuchHundred(number) + howMuchTens(number)).trim();
  } else {
    return howMuchHundred(number) + howMuchTens(number) + ones(number);
  }

}
