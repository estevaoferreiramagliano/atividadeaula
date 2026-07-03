const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu nome: ", (nome) => {

    rl.question("Digite a primeira nota: ", (nota1) => {

        rl.question("Digite a segunda nota: ", (nota2) => {

            rl.question("Digite a terceira nota: ", (nota3) => {

                nota1 = Number(nota1);
                nota2 = Number(nota2);
                nota3 = Number(nota3);

                try {

                    if (
                        nota1 < 0 || nota1 > 10 ||
                        nota2 < 0 || nota2 > 10 ||
                        nota3 < 0 || nota3 > 10
                    ) {
                        throw new Error("Uma ou mais notas são inválidas.");
                    }

                    let notas = [nota1, nota2, nota3];

                    let soma = nota1 + nota2 + nota3;
                    let media = soma / notas.length;

                    let maiorNota = Math.max(...notas);
                    let menorNota = Math.min(...notas);

                    console.log("\nNome:", nome);
                    console.log("Maior nota:", maiorNota);
                    console.log("Menor nota:", menorNota);
                    console.log("Média:", media);

                } catch (erro) {
                    console.log(erro.message);
                }

                rl.close();
            });

        });

    });

});