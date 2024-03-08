# 39_challenge-facilita-_react-node
Sistema de Gerenciamento de Clientes

Este projeto é uma solução para o desafio proposto no processo seletivo para a vaga de Desenvolvedor na Facilita Jurídico. A proposta envolve o desenvolvimento de um Sistema de Gerenciamento de Clientes com backend em Node.js e frontend em React, utilizando PostgreSQL como banco de dados.

Requisitos

Parte 1

Listar e filtrar clientes com base nas informações cadastradas.
Cadastrar novos clientes.

Parte 2

Otimizar as rotas de atendimento para maximizar a eficiência na visitação dos clientes.
Calcular a rota partindo da empresa (0,0) e passando por todas as localizações dos clientes, retornando à empresa.
Implementar um botão na tela de clientes que, ao ser clicado, mostra a ordem de visitação dos clientes na rota calculada.

<h2>Como Rodar o Projeto Localmente</h2>

- Clone o repositório: git clone https://github.com/josevflores911/39_challenge-facilita-_react-node.git
- Instale as dependências do backend: cd backend && npm install
- Instale as dependências do frontend: cd frontend && npm install
- Configure o banco de dados PostgreSQL e atualize as informações de conexão no arquivo .env dentro da pasta backend.
- Rode o backend: npm run dev
- Rode o frontend: npm run dev
- Certifique-se de ter o Node.js e o PostgreSQL instalados localmente.

Ferramentas Utilizadas
Node.js v14.17.3
MySQL v13.3
React v17.0.2

<h1>DDL da Tabela do Banco de Dados</h1>

sql

CREATE SCHEMA `facilita` ;


CREATE TABLE `facilita`.`clients` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telephone` INT NOT NULL,
  `date` DATETIME NULL,
  `latitude` INT NOT NULL,
  `longitud` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);


INSERT INTO `facilita`.`clients` (`name`, `email`, `telephone`, `date`, `latitude`, `longitud`) VALUES ('jose', 'jose@mail.com', '123456789', '21/1/20', '-1', '-10');
INSERT INTO `facilita`.`clients` (`name`, `email`, `telephone`, `latitude`, `longitud`) VALUES ('vladi', 'vladi@mail.com', '23445643', '2', '2');
INSERT INTO `facilita`.`clients` (`name`, `email`, `telephone`, `latitude`, `longitud`) VALUES ('robert', 'ro@mail.com', '23435633', '3', '3');
INSERT INTO `facilita`.`clients` (`name`, `email`, `telephone`, `latitude`, `longitud`) VALUES ('mirian', 'miri@mail.com', '11234555', '4', '4');
INSERT INTO `facilita`.`clients` (`name`, `email`, `telephone`, `latitude`, `longitud`) VALUES ('sofi', 'sof@mail.com', '33322456', '5', '5');

Vídeo Explicativo
Link para o Vídeo

Considerações
O desafio foi desenvolvido conforme os requisitos propostos, seguindo as melhores práticas de programação e documentação. Para qualquer dúvida ou esclarecimento, estou à disposição.

Desenvolvedor: jose viera
Contato: Josevflores911@gmail.com
