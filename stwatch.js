const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
console.log(seconds)
const strtbutn = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton=document.getElementById('reset')
let secount = 0;
let mincount = 0;
let intervalid;

strtbutn.onclick = function () {
    intervalid = setInterval(() => {
        secount += 1;
        if (secount < 6) {
            seconds.innerText = `0${secount}`;
        } else {
            secount = 0;
            mincount += 1;
            minutes.innerText = `0${mincount}`;
            seconds.innerText = `0${secount}`;
        }
    }, 1000);
};

stopButton.onclick = function () {
    if (intervalid) {
        clearInterval(intervalid);
        intervalid = null;
    }
};
resetButton.onclick=function(){
    secount=0;
    mincount=0;
    minutes.innerText = `0${mincount}`;
    seconds.innerText = `0${secount}`;
};




let number;
new Promise(resolve)=>{
    number=10;
    resolve();},1000);
}
const Promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },2000);
    });

    Promise1
    .then(num)=>{
        console.log(num);
        return num*2;
    })
async functionasyncFunc(){
    console.log
}