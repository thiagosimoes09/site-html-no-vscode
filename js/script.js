const hora = document.getElementById('hora');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    var dataatual = new Date();
     var hr = dataatual.getHours();
     var min = dataatual.getMinutes();
     var seg = dataatual.getSeconds();

        if (hr < 10) hr = '0' + hr;
        if (min < 10) min = '0' + min;
        if (seg < 10) seg = '0' + seg;

        if(minutos >=5){
            document.querySelector('body').style.backgroundImage = linear = 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)';
        } else{
            document.querySelector('body').style.backgroundImage = linear = 'linear-gradient( green, lightgreen)';
        }

     hora.innerHTML = hr - 3;
     minutos.innerHTML = min;
     segundos.innerHTML = seg;
},1000)