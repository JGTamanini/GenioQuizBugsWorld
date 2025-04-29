# Gênio Quiz: Mundo dos Bugs

## Guia de Instalação
Baixe e execute o index.html salvo na pasta MainScreen

## 1. Escopo
O **Gênio Quiz: Mundo dos Bugs** é um quiz interativo com desafios lógicos e visuais que simulam comportamentos incomuns ou bugs.  
Ele visa testar a percepção, criatividade e atenção do jogador. Cada fase traz uma lógica distinta (ex: botões embaralhados, respostas escondidas, atraso proposital), promovendo uma experiência divertida e fora do convencional.

## 2. Documentação de Requisitos / Especificação Funcional

### Funcionalidades principais
- Página inicial com botões de **Início**, **Instruções** e **Créditos**.
- Sistema de navegação entre perguntas com diferentes lógicas.
- Detecção de interações específicas (ex: clique duplo, scroll, tecla Enter).
- Feedback visual para acertos e erros.
- Tela de **Game Over** e **próxima fase**.

### Requisitos Funcionais
- **RF01:** O jogo deve iniciar ao clicar no botão "Iniciar".
- **RF02:** O botão "Instruções" deve exibir um popup com orientações gerais.
- **RF03:** O botão "Créditos" deve exibir os responsáveis pelo projeto.
- **RF04:** Cada fase deve carregar uma nova lógica de desafio.
- **RF05:** O sistema deve validar respostas e redirecionar para a fase seguinte ou tela de erro.

### Requisitos Não Funcionais
- **RNF01:** O layout deve ser responsivo.
- **RNF02:** O sistema deve rodar em navegadores modernos (Chrome, Firefox, Edge).
- **RNF03:** Deve utilizar HTML, CSS e JavaScript puro.

## 3. Plano de Testes

| Caso  | Descrição            | Entrada                | Resultado Esperado                   |
|-------|----------------------|------------------------|--------------------------------------|
| CT01  | Iniciar o jogo       | Clicar em "Iniciar"    | Primeira fase do quiz é carregada    |
| CT02  | Resposta correta     | Clicar no botão certo  | Ir para a próxima fase               |
| CT03  | Resposta errada      | Clicar no botão errado | Exibir tela de "Game Over"           |

---

> Projeto desenvolvido para a disciplina de Qualidade de Software do quinto semestre de Eng. de Software
