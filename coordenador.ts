import { sortAndDeduplicateDiagnostics } from "typescript"

export class Coordenador {

    constructor(
        public nome: string,
        public idade: number,
        public cpf: string) { }


        public validar_dados_obrigatorios(): void {

            if (!this.nome){
                throw new Error (`O nome do coordenador é obrigatório`)
            }
            if (!this.cpf){
                throw new Error (`O cpf do coordenador é obrigatório`)
            }
        }

        public dados_coordenador(): string {
            
            this.validar_dados_obrigatorios();

            let idadeCoord : string = this.idade ? `\n${this.idade} anos` : ""

            let cpfCoord : string = this.cpf ? `CPF: ${this.cpf}` : ""
            
            return (
`${this.nome}${idadeCoord}
${cpfCoord}
`
            )}      

}