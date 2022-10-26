// Union Types, narrowing
function printNum(x : string| number){
    if(typeof x === 'string'){
        console.log(x.toUpperCase());
    }else{
        console.log(x + 2);
    }


}


printNum('a');
printNum(4)
