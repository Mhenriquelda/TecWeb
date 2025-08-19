import app from './src/app.js'

import conexao from './infra/conexao.js'

const port = 3000

// Estabelecer a conexão
 conexao.connect((error) => {
      if (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    } else {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    }
 }) 

// Listening (Escutando)
app.listen(port, () => {
    console.log(`Servidor rodando \
    em http://localhost:${port}`)
})