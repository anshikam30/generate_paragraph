
const input = document.getElementById("numofwords");
const textpara = document.querySelector(".con");

const generateword = (num) => {
    const alph = "abcdefghijklmnopqrstuvwxyz";
    let word = "";
    for(let i=0;i<num;++i){
        const ind = Math.floor(Math.random()*26);
        word+=alph[ind];
    }
    return word;
 };
 const generatePara = () => {
    const words = Number(input.value);
    const p = document.createElement("p");
    let par="";
    for(let i=0;i<words;++i){
        const word = generateword(Math.floor(Math.random()*15));
        par+=word;
        par+=" ";
    }
    p.innerText = par;
    p.setAttribute("class", "para");
    textpara.append(p);   
};
