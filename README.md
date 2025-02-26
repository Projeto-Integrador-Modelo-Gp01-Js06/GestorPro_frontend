# 💻 GestorPro - Sistema Gestão de Funcionários (RH) 📝

<div align="center">
    <img src="https://ik.imagekit.io/a210gfzra/GestorPro/logo.png?updatedAt=1740589597782" title="Logo - GestorPro" width="80%"/>
</div>

## 1. Descrição 📜

A aplicação de gestão de funcionários oferece uma solução prática para o cadastro, consulta e manutenção de dados essenciais dos colaboradores. Desenvolvido com Vite, React, TypeScript, Node.js e NestJS, o sistema proporciona uma interface ágil e uma estrutura robusta para gerenciar informações como nome, e-mail, cargo, salário e foto, além de garantir fácil acesso e atualização constante dos registros.

------

## 2. Recursos 🚀

1. Cadastro de Funcionários – Interface intuitiva para adicionar novos colaboradores.
2. Consulta e Listagem – Exibição detalhada dos funcionários cadastrados.
3. Busca Inteligente – Filtragem rápida por nome, cargo ou e-mail.
4. Edição e Atualização – Possibilidade de modificar dados existentes.
5. Remoção Segura – Exclusão com confirmação para evitar erros acidentais.

### Features Especiais:
1. Interface Responsiva – Adaptável para diferentes dispositivos.
2. Upload de Imagem – Inclusão de foto para melhor identificação dos funcionários.
3. Notificações e Feedback – Alertas para ações como cadastro, edição e remoção.
4. Melhorias de UX/UI – Design moderno e experiência do usuário otimizada.

------

## 3. Protótipo e Capturas de Tela 🖼️

<div align="center">
    <img src="https://ik.imagekit.io/m1iwfxqae/ProjetoIntegrador-GestorPro.svg?updatedAt=1740587657143" title="Protótipo - Figma" width="50%"/>
</div>

------

## 4. Tecnologias 🛠️

| Item                         | Descrição  |
| ---------------------------- | ---------- |
| **Servidor**                 | Node JS    |
| **Linguagem de Programação** | TypeScript |
| **Biblioteca**               | React JS   |
| **Build**                    | Vite       |
| **Framework de Estilização** | Tailwind   |


------

## 5. Pré-requisitos 🧩

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v16+)
- [yarn](https://yarnpkg.com/)
- API NestJS API NestJS ([Repositório da API](https://github.com/Projeto-Integrador-Modelo-Gp01-Js06/rh-backend))

------

## 6. Configuração e Execução ⚙️

1. Clone o repositório do Projeto
2. Instale as dependências: `yarn`
3. Clone o repositório do Projeto Backend: (https://github.com/Projeto-Integrador-Modelo-Gp01-Js06/rh-backend)
4. Siga as instruções de **Configuração e Execução** descritas no README do Projeto Backend
5. Adicione o endereço de execução do projeto na variável de ambiente **VITE_API_URL**, no projeto React
6. Execute o Projeto React: `yarn dev`
7. A aplicação React estará disponível no endereço: `http://localhost:5173`

------

## 7. Estrutura do Projeto 📁

```plaintext
src/
│
├── components/       # Componentes reutilizáveis
├── models/           # Estrutura de dados da aplicação-
├── pages/            # Páginas da aplicação
├── services/         # Integração com a API (requisições HTTP)
└── App.tsx           # Componente principal da aplicação
```

------
## 8. Como Contribuir 🤝

1. Faça um fork do projeto
2. Crie uma branch com a sua feature (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça um push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request
