import { Coordenador } from './coordenador';
import { Departamento } from './departamento';
import { Endereco } from './endereco';


function verificaCampoObrigatorio(mensagemEsperada: string, departamento: Departamento) {
  try {
    departamento.dados_departamento();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}

let NOME_DEPARTAMENTO = "Depto. test."
let SIGLA = "D1"
let LOCALIZACAO = "Local 1"
let NOME_COORDENADOR = "Coord. 1"
let IDADE = 40
let CPF = "111.222.333-44"

let TEXTO_ESPERADO_DEPARTAMENTO_COMPLETO: string = `Depto. test., D1
End: Local 1
Coord. 1
40 anos
CPF: 111.222.333-44
`;

test('Departamento Completo', () => {
    let departamentoCompleto: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, LOCALIZACAO,
         new Coordenador(NOME_COORDENADOR, IDADE, CPF));
    expect(departamentoCompleto.dados_departamento()).toBe(TEXTO_ESPERADO_DEPARTAMENTO_COMPLETO);
});

test ('Nome Departamento Vazio', () => {
    let nomeDepartamentoVazio: Departamento = new Departamento("", SIGLA, LOCALIZACAO,
        new Coordenador(NOME_COORDENADOR, IDADE, CPF));
    verificaCampoObrigatorio(`O campo nome do departamento é obrigatório`, nomeDepartamentoVazio);
});

let TEXTO_ESPERADO_SEM_SIGLA: string = `Depto. test.
End: Local 1
Coord. 1
40 anos
CPF: 111.222.333-44
`;

test('Departamento sem sigla', () => {
    let departamentoSemSigla: Departamento = new Departamento(NOME_DEPARTAMENTO, "", LOCALIZACAO,
         new Coordenador(NOME_COORDENADOR, IDADE, CPF));
    expect(departamentoSemSigla.dados_departamento()).toBe(TEXTO_ESPERADO_SEM_SIGLA);
});

test ('Localização Departamento Vazia', () => {
    let localizacaoDepartamentoVazia: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, "",
        new Coordenador(NOME_COORDENADOR, IDADE, CPF));
    verificaCampoObrigatorio(`O campo localização do departamento é obrigatório`, localizacaoDepartamentoVazia);
});

test ('Nome Coordenador Vazio', () => {
    let nomeCoordenadorVazio: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, LOCALIZACAO,
        new Coordenador("", IDADE, CPF));
    verificaCampoObrigatorio(`O nome do coordenador é obrigatório`, nomeCoordenadorVazio);
});

let TEXTO_ESPERADO_SEM_IDADE: string = `Depto. test., D1
End: Local 1
Coord. 1
CPF: 111.222.333-44
`;

test('Coordenador sem idade', () => {
    let coordenadorSemIdade: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, LOCALIZACAO,
         new Coordenador(NOME_COORDENADOR, 0, CPF));
    expect(coordenadorSemIdade.dados_departamento()).toBe(TEXTO_ESPERADO_SEM_IDADE);
});

test ('Cpf Coordenador Vazio', () => {
    let cpfCoordenadorVazio: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, LOCALIZACAO,
        new Coordenador(NOME_COORDENADOR, IDADE, ""));
    verificaCampoObrigatorio(`O cpf do coordenador é obrigatório`, cpfCoordenadorVazio);
});

let TEXTO_ESPERADO_SEM_SIGLA_SEM_IDADE: string = `Depto. test.
End: Local 1
Coord. 1
CPF: 111.222.333-44
`;

test('Departamento sem sigla sem idade', () => {
    let departamentoSemSiglaSemIdade: Departamento = new Departamento(NOME_DEPARTAMENTO, "", LOCALIZACAO,
         new Coordenador(NOME_COORDENADOR, 0, CPF));
    expect(departamentoSemSiglaSemIdade.dados_departamento()).toBe(TEXTO_ESPERADO_SEM_SIGLA_SEM_IDADE);
});