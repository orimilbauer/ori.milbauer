let txt="acgregdf";
console.log(txt.length);

let txt1= "Please visit microtoft";
let txt2=txt1.replace("microtoft","mac");
console.log(txt2);

let txt3=txt1.concat(" and ",txt2);
console.log(txt3);

// var- globaly, var or const- only on the block {}
// the current datetime
const d=new Date();
console.log(d);
var h=d.getHours();

///have to define function 
function greet(){
        const d=new Date();
        console.log(d);
        var h=d.getHours();
        
        if(h<18){
        let greeting= "Good Morning !";
        document.getElementById("greetingP").innerHTML=greeting;
        }
        else{
            let greeting= "Good Evening !";
        document.getElementById("greetingP").innerHTML=greeting;
        }
}

let cars= ['Toyota','Mazda','Honda'];
console.log(cars);
text="";
// text+=cars[0];
// console.log(text);

var i;
for(i=0;i<cars.length;i++){

    text+=cars[i];
}
console.log(text);

var movie=['img/400px-Muammar_al-Gaddafi_at_the_AU_summit.jpeg','img/wix-logo.png'];
function stopMotion(){

    //ste timeout is hard with loop
    setTimeout(()=>{ document.getElementById("img1").src=movie[i];
    i++;
    if(i<movie.length){
        stopMotion();
    }
    else{
        i=0;
        stopMotion();
    }
    },500);
   
}


