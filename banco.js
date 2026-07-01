let saldo = 100
let saque = 120

try{
    if (saque > saldo){
        throw new Error("Erro: saldo insuficiente")}
}
catch (erro) {
    console.log(erro.message);
}
    saldo = saldo - saque;
    console.log("Saque realizado!");
    console.log("Saldo restante: R$ " + saldo);

