// This file contains all the helper functions which do not involve React props, state and events


function genTicket (n) {
    let arr = new Array(3);
    for (let i=0; i<n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}


function sum(arr) {
    arr.reduce((sum, curr) => sum + curr, 0);
}

export {genTicket, sum};
