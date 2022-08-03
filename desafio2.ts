/*let pessoa1 = {};
pessoa1.nome = "thais";
pessoa1.idade = 28;
pessoa1.profissao = "Administradora"

let pessoa2 = {}
pessoa2.nome = "wanessa";
pessoa2.idade = 30;
pessoa2.profissao = "Jornalista";

let pessoa3 = {
    nome: "caio",
    idade: "26",
    profissao: "Matematico"
};

let pessoa4 = {
    nome = "lucas",
    idade = 28,
    profissao = "Vendedor"
}*/

enum Trabalho {
    Administradora,
    Jornalista,
    Matematico,
    Vendedor
    
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'thais',
    idade: 28,
    profissao: Trabalho.Administradora
};

let pessoa2: Humano = {
    nome: 'wanessa',
    idade: 30,
    profissao: Trabalho.Jornalista
};

let pessoa3: Humano = {
    nome: 'caio',
    idade: 26,
    profissao: Trabalho.Matematico
};

let pessoa4: Humano = {
    nome: "lucas",
    idade: 28,
    profissao: Trabalho.Vendedor
}