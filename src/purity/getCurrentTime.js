/*

The function IMPURE :

Because it depends on the current time , so it wll always return a different output as a given output

*/

export function getCurrentTime(){
    return new Date().toLocaleDateString();
}

console.log("\x1b[32m IMPURE function \x1b[0m");
