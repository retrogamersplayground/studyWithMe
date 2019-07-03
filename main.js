// Study with me live stream 07/01/2019
/*
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
*/


//Study with me live stream 07/03/2019
//Correcting the code from the stream on 07/01/2019

function largest(arr) {
    let newArr = [];
    for(let x = 0; x < arr.length; x++) {
        newArr.push(arr[x][1]);
    }
    //console.log(newArr);
    
    newArr.sort(function(a,b) {
        return a - b;
    });

    console.log(newArr);
    let largestNum = newArr[newArr.length - 1];
    console.log(largestNum);

    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][1] === largestNum) {
            result.push(arr[i]);
        }
    }

    console.log(result);
}


largest([["won",5],["Coderunner",3],["Subi",5]]);
largest([["won",5],["Coderunner",3],["Subi",55],["ksee", 5]]);