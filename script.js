function clock(){
    const areaDoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();//date é referente ao tempo
    const horas = horaAgora.getHours ();
    const minutos = horaAgora.getMinutes();
    const segundos = horaAgora.getSeconds();//consts que nao estao sendo usada ficam em segudo plano e ficam com uma cor cinza
    const formatoHoras =horas.toString().padStart(2, "0");//padStart define qual string vem primeiro e a quantia de caracteres.
    const formatoMinutos = minutos.toString ().padStart (2, "0")
    const formatoSegundos = segundos.toString ().padStart (2, "0")

    areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos} `   
}

setInterval(clock, 1000)