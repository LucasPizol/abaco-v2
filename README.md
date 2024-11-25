# Front-end abaco

## Iniciando o projeto
Clone o repositório
```bash
git clone https://github.com/AbacoSystem/front-abaco
cd front-abaco
```

Instale as dependências
```bash
npm install
```

Inicie o servidor
```bash
npm run start
```

## Realizando suas alterações
Prepare suas alterações
```bash
git add .
```

Crie um registro para sua mensagem
```bash
git commit -m "sua mensagem aqui"
```
**Utilize os padrões existentes, é uma boa prática**
1. "feat: " // Nova implementação
2. "fix: " // Correção de bug
3. "refactor: " // Alteração gigantesca no código sem alterar a lógica
4. "chore: " // Alguma alteração ou adição de dependência
- Exemplo de uso:
1. git commit -m "feat: criado a tela de login"
2. git commit -m "fix: corrigido bug de responsividade"
3. git commit -m "refactor: refatorando código para melhor legibilidade"
4. git commit -m "chore: adicionado bcrypt ao projeto"

## Suba as alterações para o repositório remoto (github)
```bash
git push
```
**ATENÇÂO**
Caso peça para utilizar o comando git push --force, jamais faça isso! Faça assim:
```bash
git pull
git push
```
O git pull puxa as alterações do repositório remoto para o repositório local.
