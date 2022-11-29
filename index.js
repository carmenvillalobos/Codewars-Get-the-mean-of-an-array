function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let sum = 0
    
    for (let i=0; i<marks.length; i++){
      sum = marks[i] + sum
    }
    
    let average = sum/marks.length
    return Math.floor(average)
  }
  

  //Pseudocode
  //e.g., marks = [91, 81, 67, 51]
  //want to do (91+81+67+51)/4
  //return Math.floor(marks[0]+marks[1]+marks[2]+marks[3]/marks.length)
  //Math.floor rounds down to the nearest whole number