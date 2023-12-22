function isprime(){
    let num =document.querySelector("input").value;
    let t=true;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            t=false;
            break;
        }
    }
    if(num>=2 && t){
        document.querySelector("input").value="tub";
    }
    else{
        document.querySelector("input").value="tub emas";
    }
}

function myFunction(event) {
    if (
      event.key == "0" ||
      event.key == "1" ||
      event.key == "2" ||
      event.key == "3" ||
      event.key == "4" ||
      event.key == "5" ||
      event.key == "6" ||
      event.key == "7" ||
      event.key == "8" ||
      event.key == "9" ||
      event.key == "+" ||
      event.key == "-" ||
      event.key == "*" ||
      event.key == "/" ||
      event.key == "%" ||
      event.key == "."
    ) {
      document.querySelector("input").value += event.key;
    } else if (event.key == "Backspace" || event.key == "Delete") {
      back();
    } else if (event.key == "Enter") {
     solve();
    }else if (event.key == "c") {
      clr();
     }
     else if (event.key == "d") {
      dark();
     }
  
  }

  function solve(){
    let m = document.querySelector("input").value;
    let mm = eval(m);

    if(mm != "Infinity"){
        document.querySelector("input").value=mm.toFixed(3);
    }
    else{
        document.querySelector("input").value="Xato";
    }
  }

  function clr(){
    document.querySelector("input").value="";
  }
  function backs(){
    let l = document.querySelector("input").value;
    document.querySelector("input").value=l.slice(0,-1);
  }

  function wr(val) {
    document.querySelector("input").value += val;
  }