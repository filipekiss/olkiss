# OLKiss

Eu e minha esposa estamos de mudança. Queriamos um jeito de agregar os produtos
que temos pra vender e eu queria aprender a usar o [parcel][parcel], então
montei esse projetinho.

## Ad

Se você quiser ver os produtos que temos a venda (ou o site funcionando), dá uma
olhada no [OLKiss][olkiss] :)

### Stack

Coisas que eu usei pra montar esse sitezinho:

-   [TypeScript ❤][typescript]
-   [Parcel][parcel]
-   [SASS][sass]
-   [PostHTML][posthtml]

### Arquitetura

Os produtos ficam na pasta `src/data/products`, cada um no seu próprio arquivo.
O script `scripts/generate-products-index.ts` lê esses arquivos e gera um
`src/data/products.json`. Eu poderia ter feito tudo num único JSON desde o
começo, mas eu queria uma forma fácil de adicionar arquivos sem precisar navegar
um único arquivo de 10 mil linhas.

Depois, o Parcel lê o arquivo `src/index.html` e faz todo o trabalho pesado:
compilar SASS, TypeScript, fazer os includes de HTML. Ele joga tudo isso numa
pasta `public` que eu copio pro meu servidor usando `rsync` (é um projeto
simples, afinal de contas);

Como é tudo estático, eu poderia usar o github pages pra isso, mas numa primeira
versão do projeto eu ia fazer um backend pra cadastrar os produtos usando o
[strapi][strapi] (por isso que alguns produtos tem um JSON mais "completo". Eles
foram exportados da versão que usava o strapi :P), ai acabei configurando tudo
na minha VPS da [digitalocean][digitalocean] mesmo. (Se vc se cadastrar na
digitalocean por esse link vc ganha até \$100 em créditos com eles)

### Hacking is

Se você quiser clonar esse projeto e fuçar (e entender como algumas coisas
funcionam), é só clonar o repositório e rodar o comando `npm run dev`. O Parcel
vai iniciar o servidor (normalmente [localhost:1234](http://localhost:1234))

**olkiss** © 2019+, Filipe Kiss Released under the [MIT] License.<br> Authored
and maintained by Filipe Kiss.

> GitHub [@filipekiss](https://github.com/filipekiss) &nbsp;&middot;&nbsp;
> Twitter [@filipekiss](https://twitter.com/filipekiss)

[mit]: http://mit-license.org/
[parcel]: http://parceljs.org/
[olkiss]: https://olkiss.shop
[typescript]: http://typescriptlang.org/
[sass]: https://sass-lang.com/
[posthtml]: https://github.com/posthtml/posthtml
[strapi]: http://strapi.io/
[digitalocean]: https://m.do.co/c/3ecb60bab056
