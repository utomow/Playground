function getIndexToIns(arr, num) {
  let tempArray = arr.sort(function(a, b) {
    return b - a;
  })
  console.log(tempArray)
  // console.log(arr)
  // arr.sort()
  // console.log(arr)
  let i = 0
  for (; tempArray[i] <= num; i++) {

  }
  return i;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
console.log(getIndexToIns([5, 3, 20, 3], 5))
