function soma(n1, n2)  {
    return n1 + n2
}

console.log(soma(3, 4))


/* Obs.: No caso de passar só um valor na chamada, ex: console.log(soma(3))
   O parâmetro lá em cima pode ficar como: function soma(n1=0, n2=0) para
   não ter como resultado NaN. */