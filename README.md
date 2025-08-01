# Projeto CustomSB

Bem-vindo ao projeto CustomSB! Este repositório contém uma biblioteca personalizada chamada CustomSB, que oferece recursos opção de custumização da barra de rolagem (scrollbar).

## Instalação

Para instalar a biblioteca CustomSB em seu projeto, utilize:

```shell
npm i customsb

```

ou

```shell
yarn add customsb

```

## Uso

Após a instalação, você pode usar a biblioteca CustomSB em seu código da seguinte maneira:

```javascript
import { useEffect } from "react";
import customizeScrollbar from "customsb";

// Aplicando a personalização com opções diferentes
// Abaixo é somente um exemplo de personalização, adapte para o seu projeto
useEffect(() => {
  // O uso do useEffect garante que a função seja chamada apenas no lado do cliente
  customizeScrollbar({
    scrollbarWidth: "10px",
    trackBackground: "#333",
    thumbBackground:
      "linear-gradient(178.8deg, #ffa066 47.41%, #ff9666 65.18%, #ff783a 90.84%)",
    thumbBorderRadius: "10px",
  });
}, []);

// Ou aplicando com as configurações padrão
useEffect(() => {
  // O uso do useEffect garante que a função seja chamada apenas no lado do cliente
  customizeScrollbar();
}, []);
```

## Configuração padrão

Aqui está as configurações padrões

```javascript
    scrollbarWidth: "5px",
    trackBackground: "#1d1e1f",
    thumbBackground: "linear-gradient(178.8deg, #393939 47.41%, #7b7b7b 65.18%, #a1a1a1 90.84%)",
    thumbBorderRadius: "20px"
```

## Recursos

A biblioteca CustomSB oferece o seguinte recurso:

- Personaliza a barra de rolagem (scrollbar).

## Contribuição

Se você deseja contribuir para o projeto CustomSB, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch com sua contribuição: `git checkout -b minha-contribuicao`.
3. Faça as alterações desejadas.
4. Faça o commit das alterações: `git commit -m 'Minha contribuição'`.
5. Faça o push para o repositório remoto: `git push origin minha-contribuicao`.
6. Abra um pull request neste repositório.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
