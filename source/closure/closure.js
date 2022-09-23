
function greeting(){
    let  userName = 'Cris';
    function displayUserName(){  //función anidada
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());