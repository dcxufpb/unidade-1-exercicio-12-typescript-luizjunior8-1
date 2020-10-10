import { Coordenador } from "./coordenador";

export class Departamento {

    constructor(
        public nome: string,
        public sigla: string,
        public localizacao: string,
        public coordenador: Coordenador) { }


    public valida_dados_obrigatorios(): void {
    
        if (!this.nome){
            throw new Error (`O campo nome do departamento é obrigatório`)
        }
        if (!this.localizacao){
        throw new Error (`O campo localização do departamento é obrigatório`)
        }
    }

    public dados_departamento(): string {

        this.valida_dados_obrigatorios()

        let nomeDepto = this.sigla ? this.nome + ", " : this.nome;

        let siglaDepto = this.sigla ? this.sigla : ""

        let localDepto = "End: " + this.localizacao

        return (
`${nomeDepto}${siglaDepto}
${localDepto}
${this.coordenador.dados_coordenador()}`
        )
    }

}