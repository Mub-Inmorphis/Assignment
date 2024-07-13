//  Write a JavaScript program to rotate the string 'w3resource' in right direction 
// by periodically removing one letter from the end of the string and attaching it to 
// the front. 

function rotateRight(str) {
    let chars = str.split('');    
    for (let i = 0; i < str.length; i++) {
        let char = chars.pop();    
        chars.unshift(char);        
        console.log(chars.join(''));
    }
}

let initialString = 'w3resource';

rotateRight(initialString);
