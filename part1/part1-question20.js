

setInterval(() => timeLog(), 1000)

function timeLog(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}