const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent);

const phrases=["Software enginner...","Mentor...","Student..."];
let letterindex=0;
 let phrasesindex=0;
const typingSpeed=150;
const erasingSpeed=75;
function printletters(phrase)
{

      if(letterindex==phrase.length)
      {
            clearletters();
      }
if(letterindex < phrase.length)
{
dynamicContent.textContent += phrase.charAt(letterindex);
letterindex+=1;
setTimeout(function(){
printletters(phrase)},erasingSpeed)
}
}

//
function clearletters()
{
      if(letterindex == 1)
      {
            phrasesindex = (phrasesindex+1) % phrases.length;
            letterindex=0;
            printletters(phrases[phrasesindex]);
      }
if(letterindex > -1)
{
let updatephrase="";
for(let index=0;index < letterindex; index++)
{
      updatephrase += phrases[phrasesindex].charAt(index);}
}
console.log(updatephrase);
dynamicContent.textContent=updatephrase;
letterindex-=1;
setTimeout(clearletters,100);
}

printletters(phrases[phrasesindex]);