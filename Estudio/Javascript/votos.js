var votos = []

function votar(candidato){
    votos.push(candidato)
}

function contarVotos{
    let conteo = {}

    for (let i = 0; i < votos.length; i++){
        let voto = votos[1];
        if (conteo == undefined){
            conteo[voto]=1;
        }else{
            conteo[voto] ++;
        }
    }
    return conteo;
}

