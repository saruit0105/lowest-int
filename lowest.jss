function sumTwoSmallestNumbers(numbers) {  
  let newArr = numbers.sort()
  newArr.sort((a,b) => a > b )
  let newSums = newArr[0]+newArr[1]
  return newSums
}
