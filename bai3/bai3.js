// let string = document.getElementById("string").value;
// let arr = ['a', 'o', 'u','i','e','A','O','U','I','E'];

function checkGenerator(string,arr){
    let count=0;
    for (let i=0; i<string.length;i++){
        for (let j=0;j<arr.length;j++){
            if (string[i]===arr[j]){
                count++;
            }
        }
    }
    return count;
}
// function check

