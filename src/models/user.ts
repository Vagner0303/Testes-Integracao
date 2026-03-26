export class user {

    id?: number | null
    nome: string 
    email: string

    constructor( id: number | null = null, nome: string, email: string) {
     this.id = id
     this.nome = nome
     this.email = email
    }

}
