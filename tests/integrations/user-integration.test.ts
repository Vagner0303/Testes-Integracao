import { conexao } from '../../src/config/database'
import { UserRepository } from '../../src/repositories/user_repo'

describe("Testes de integração de usuarios", () => {

    const repo = new UserRepository()

    beforeAll(async () => {
       await conexao.execute('CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(100) NOT NULL, email VARCHAR(100) NOT NULL UNIQUE)')
    })

    beforeEach(async () => {
       await conexao.execute('DELETE FROM users;')
    })

    it("Deve criar um usuario", async () => {
       const user = await repo.inserir("Daniel", "teste@teste.com")
       
       expect(user).not.toBeNull()
       expect(user.id).not.toBeNull()
       expect(user.nome).toBe("Daniel")
       expect(user.email).toBe("teste@teste.com")

    })

    it("Deve criar dois usuarios e exibir todos", async () => {
       const user1 = await repo.inserir("Rodorlfo", "rodarfo@norespira.com")
       const user2 = await repo.inserir("Jô Soares", "beijo@gordo.com")

       expect(user1).not.toBeNull()
       expect(user1.id).not.toBeNull()
       expect(user1.nome).toBe("Rodorlfo")
       expect(user1.email).toBe("rodarfo@norespira.com") 

       expect(user2).not.toBeNull()
       expect(user2.id).not.toBeNull()
       expect(user2.nome).toBe("Jô Soares")
       expect(user2.email).toBe("beijo@gordo.com") 

       expect((await repo.mostrarTodos()).length).toBe(2)

       const users = await repo.mostrarTodos()

       expect(users[0].nome).toBe("Rodorlfo")
       expect(users[1].nome).toBe("Jô Soares")

    })

    afterAll(async () => {
      await conexao.end()
    })
})
