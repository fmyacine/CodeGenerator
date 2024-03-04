const x = document.getElementById("ran");
const y = document.getElementById("ranger");

let cpt = 12;

x.addEventListener("input", () => {
    
    cpt = parseInt(x.value);    
    y.textContent = cpt;

});

const generate = document.getElementById("generate");
const resultat = document.getElementById("res");

generate.addEventListener("click", () => {
    let cptt = parseInt(x.value);
    
    let char ='';
    let returnstring = '';
    
    const num = document.getElementById("num");
    const sym = document.getElementById("sym");
    const low = document.getElementById("lower");
    const upp = document.getElementById("upper");

    if( num.checked ){
        char += '123456789';
    }

    if( sym.checked ){
        char += '@#-()=+';
    }

    if( low.checked ){
        char += 'abcdefghijklmnopqrstuvwxyz';
    }

    if( upp.checked ){
        char += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if( !num.checked && !sym.checked && !low.checked && !upp.checked){
        alert("Please Choose an option!");
        return;
    }

    for(let i = 0; i < cptt ; i++){
        let randomChar = Math.floor(Math.random() * char.length);
        returnstring += char.charAt(randomChar);
    }

    document.getElementById("res").value=returnstring;
});

const copied = document.getElementById("copy");

copied.addEventListener("click", () => {
    
    const c = document.getElementById("res");
    c.select();

    document.execCommand("copy");
    alert("Copied!");
});