class FuncionariosDoHospital{
    constructor(nome, numeroRestanteDeFerias){
        this._nome = nome;
        this._numeroRestanteDeFerias = numeroRestanteDeFerias;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get numeroRestanteDeFerias(){
        return this._numeroRestanteDeFerias;
    }

    set numeroRestanteDeFerias(numeroRestanteDeFerias){
        this._numeroRestanteDeFerias = numeroRestanteDeFerias;
    }

    tirarFerias(num_dias){
        this.numeroRestanteDeFerias -= num_dias;
    }
}

class Medico extends FuncionariosDoHospital{
    constructor(nome, numeroRestanteDeFerias, cpf){
        super(nome, numeroRestanteDeFerias = 20);
        this._cpf = cpf;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }
}

class Enfermeira extends FuncionariosDoHospital{
    constructor(nome, numeroRestanteDeFerias, certificados){
        super(nome, numeroRestanteDeFerias = 20);
        this._certificados = certificados;
    }

    get certificados(){
        return this._certificados;
    }

    set certificados(certificados){
        this._certificados = certificados;
    }

    adicionarCertificados(certificado){
        this._certificados += certificado;
    }
}

let medico = new Medico('milena', null, 43235984836);
console.log(medico);
let enfermeira = new Enfermeira('milena', null, 5);
console.log(enfermeira);