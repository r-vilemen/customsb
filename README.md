# Projeto CustomSB

Bem-vindo ao projeto CustomSB! Este repositório contém uma biblioteca personalizada chamada CustomSB, que oferece recursos opção de custumização da barra de rolagem (scrollbar).

## Instalação

Para utilizar a biblioteca CustomSB em seu projeto, siga as etapas abaixo:

1. Instale a biblioteca

```shell
npm i customsb

```

## Uso

Após a instalação, você pode usar a biblioteca CustomSB em seu código da seguinte maneira:

```javascript
import customizeScrollbar from "customsb";

// Aplicando a personalização com opções diferentes
// Abaixo é somente um exemplo de personalização, adapte para o seu projeto
customizeScrollbar({
  scrollbarWidth: "8px",
  trackBackground: "#333",
  thumbBackground:
    "linear-gradient(178.8deg, #FF6347 47.41%, #FF4500 65.18%, #CD5C5C 90.84%)",
  thumbBorderRadius: "10px",
});

// Ou aplicando com as configurações padrão
customizeScrollbar();
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
