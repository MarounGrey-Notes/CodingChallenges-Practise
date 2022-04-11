const arr = [1, 3, 7, 9, 2];
const target = 11;
let i = 0;

function foo() {

    for (n=1; n<arr.length; n++) {
        
        let P1 = arr[i];
        let P2 = arr[n];
        let NumToFind = P1+P2;
        
        if (NumToFind==target) {
            console.log("[" + P1 + "," + P2 + "]");
        }
    }
    
    i++
}

arr.forEach(foo);

