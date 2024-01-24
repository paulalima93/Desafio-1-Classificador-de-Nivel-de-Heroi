let nome = "Link"
let XP = 1
let level = ""
if (XP < 1000) {
    level = "Ferro"
}
else if (XP > 1001 && XP < 2000){
    level = "Bronze"
}else if (XP > 2001 && XP < 5000){
    level = "Prata"
}else if (XP > 5001 && XP < 7000){
    level = "Ouro"
}else if (XP >7001 && XP <8000){
    level = "Platina"
}else if (XP >8001 && XP <9000){
    level = "Ascendente"
}else if (XP >9001 && XP <10000){
    level = "Imortal"
}else if (XP >= 10001){
    level = "Radiante"
}
console.log("O herói de nome " + nome + " está no nível de " + level)
