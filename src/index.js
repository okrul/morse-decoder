const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let arr = expr.match(/(.{1,10})/g);
    let decString = ''; 

    for (i=0; i < arr.length; i++){
        
        if (arr[i] == '**********') {
            decString += ' ';
        }
        else {

            let pos = arr[i].indexOf(1);
            
            let substr = arr[i].slice(pos);
            let arr2 = substr.match(/(.{1,2})/g);


            for (j = 0; j < arr2.length; j++) {
                if (arr2[j] == '10'){
                    arr2[j] = '.';
                }
                else {
                    arr2[j] = '-'; 
                }
            }

            
            decString += MORSE_TABLE[arr2.join('')]; 
        }  
    }

    return decString;
}

module.exports = {
    decode
}