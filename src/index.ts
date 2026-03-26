import { UserRepository } from "./repositories/user_repo";

async function main() {
const userRepo = new UserRepository()

console.log(userRepo.inserir("Daniel", "teste@teste.com"))
console.log(userRepo.inserir("Rodolfo", "norespira@respira.com"))
console.log("----------------------------------------------")
console.log(userRepo.mostrarTodos())
}

main()
