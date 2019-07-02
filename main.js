//live stream 07/01/2019

function largest(arr) {
    let str = arr.toString();
    //console.log(str);
    let newArr = str.split(',');
    //console.log(newArr);
    let sorted = newArr.sort();
    //console.log(sorted);
    let numArr = [];
    for(let i = 0; i < sorted.length / 2; i++) {
        numArr.push(sorted[i]);
    }
    let largestNum = numArr[numArr.length - 1];
    let newLargestNum = parseInt(largestNum);
    //console.log(typeof newLargestNum);
    
    let result = [];
    for(let y = 0; y < arr.length; y++) {
            if(arr[y][1] == newLargestNum) {
                result.push(arr[y]);
            }
        }
        console.log(result);
        return result;
    }
    



largest([["won",5],["Coderunner",3],["Subi",5]]);
largest([["won",5],["Coderunner",3],["Subi",5],["ksee", 5]]);