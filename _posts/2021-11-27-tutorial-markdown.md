# Markdown


[JoeSynth](http://joesynth.wordpress.com)
com http://
[GitLab](http://gitlab.com)
[Wikipedia](http://wikipedia.org)

A **linguagem Markdown** é ótima para escrevermos nossas histórias, inclusive crianças e jovens desenvolverem textos nas escolas com títulos, parágrafos eaté fotos e links.

Olá!
Vamos a um breve tutorial rápido sobre *markdown*? Então...




Parte 1.

- O que é Markdown? Quem usa?
- Markdown - Guia Rápido.
- Arquivo Markdown.
- *Softwares* e plug-ins.
- Sabores!
- Analisador (parser).
- Marcação vs. instrução


Parte 2

- Markdown para programadores
- Markdown vs. HTML - Semelhanças
- Markdown vs. HTML - Diferenças

Parte 3

- Um pouco de história.
- Mais links sobre o tema.


Parte 1

## Introdução

#### O que é Markdown?

🤔️ Podemos pensar que...

> Markdown é uma forma de escrever e descrever texto formatado por meio de marcações simples.

Essas marcações funcionam como *"atalhos no teclado"*. 😄️

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/175px-Markdown-mark.svg.png" width="79" height="49" />Mas...marcar o que?

Simples! A gente escreve algo, uma palavra, por ex., e coloca alguma marca para dizer ao programa como aquele texto deve ser mostrado. Por exemplo:  

`*morango*`

O resultado é...  

*morango*  

Surge um texto em itálico.  

Aqui, quando o código for executado, a palavra morango será exibida em itálico. E isso ocorre exatamente porque os dois asteríscos (que são as marcas) indicam como o texto deve aparecer após interpretado.  

O que aconteceu? O símbolo de asterísco **()** marcou a palavra 'morango' para aparecer desse jeito, inclinada.
Também podemos ter palavras em negrito, títulos bem grandes, e até links.  

Também temos um marca relacionada com a **estrutura** do texto, é o caso de um título.

Além, temos o significado de função específica. Exemplo: marcar um *link*.
Portanto, quando executao, o texto não só aparecerá bonito como um link, como de fato, levará o usuário para outro endereço.

Então...

**Poucos comandos**: Fácil de aprender em poucas horas.\
**Mais agilidade!**: Dispensa até o uso de *mouse*, de tão simples que é.\
**Código fácil de entender**: são simples "atalhos" ou "comandinhos" _com asteríscos, sustenidos.\
**Conteúdo?** Também há algo mais gŕafico, como emojis ou imagens; além do texto escrito, claro!

#### Quem Usa?



#### Por quê aprender Markdown?

Simples! O legal da Markdown é que ela é...

**Muito simples!** Sabendo apenas dez marcas, dez **"comandinhos"** conseguimos muitas construções. Essas dez marcas são muito simples, objetivas e fácil de aprender. Com tudo intuitivo, em poucas horas praticando, logo você grava o necessário para escrever textos comuns.

● Bem **atraente** para nós leitores humanos, então qualquer um de nós pode entender facilmente seu formato de código-fonte.  
● **Tempo**: Ganha-se um bom tempo devido a cliques desnecessários do *mouse*, isso ao criar um texto. Ou seja, embora meu editor de texto favorito faz o trabalho com um clique de *mouse*, você não precisará mais de mouse.

⚠️ Gosta de assuntos como tecnologia ou programação?  


Veja Markdown para Programadores.  



#### Quem usa Markdown? 

MD atende **autores** e **escritores** que querem criar escrever texto sem precisar dominar HTML _uma linguagem que também permite isso, mas não é tão simples quanto Markdown.

👉️ Eu mesmo, ao escrever neste *blog*, uso Markdown.


#### Onde usa?

**Software**? A Markdown é utilizada em...  
● mensagens instantâneas (Telegram, por ex.),\
● *software* colaborativo (caso do Collabora Online que permite importar),\
● Wordpress.


#### Para que serve Markdown?

MD é uma **linguagem de marcação** para **conteúdo textual** (texto formatado).  

Na formatação damos forma ao conteúdo, o que envolve tanto a organização quanto a aparência.\
● inserir símbolos (como nos emojis) ou imagens e mesmo links.


**Resumindo Markdown**:

|MD|
|:---:|
|**estrutura**|
| Organiza a estrutura do conteúdo textual, definindo o que é título, parágrafo etc.|
|**apresentação**|
|Cuida de alguns aspctos da apresentação, como pôr uma palavra em itálico ou negrito.|

Tudo de forma rápida, sutil.  

👉️ Ainda temos *links*.



<img src="https://joesynth.wordpress.com/wp-content/uploads/2025/05/joe_flyer_servico_b2.png" width="320" />






## Markdown - Guia Rápido



#### Texto

###### Título e subtítulo

| Marca | Estrutura | Sentido | Estética
|---|---|---|---|
| `#` | Título 1 | Título principal |Texto grande, destacado|
|---|---|---|---|
| `##` | Título nível 2 | Subtítulo |Texto um pouco menor que #|



O sustenido é usado para título.

<pre>
# O Pica Pau
</pre>

**Marca ##**:  Pense subtítulo! Isso gera uma letra de tamanho de título menor que o marcador.

<pre>
# Título
## O Pica Pau
</pre>

<small>
`######` até 6 níveis de sustenidos podem ser usados. Bom para organizar seu texto.
</small>

###### Parágrafo e quebra de linha

**Parágrafo**:

| Marca | Estrutura | Sentido | Estética
|---|---|---|---|
||  |  ||  

Mão há marca! É só pular uma linha.

O parágrafo é simplesmente uma sequência de texto separada de outra por uma linha em branco.  




Em lingua portuguesa temos a estrutura textual, onde título, introdução e desenvolvimento podem estar perfeitamente marcados com markdown.

```
# Meu Título.

Parágrafo de introdução, bla blá...

Parágrafo de desenvolvimento, bla...
```
Exemplo:  

<pre>
# A Bíblia 

No primeiro dia Deus criou...

E nasce Jesus em Nazaré...
</pre>

**Quebra de linha**:

| Marca | Estrutura | Sentido | Estética
|---|---|---|---|
|`\Enter`||||


A \ precisa ser o último caractere da linha, não podendo haver espaço depois da barra.

👉️ ou DoisEspaçosEnter no lugar de `\Enter`.


#### Efeitos visuais no texto - inline

Belos recursos para a apresentação do conteúdo de texto escrito.  
Pense estilo de letra! 😄️

Ou seja, é um efeito visual do "desenho" da letra. Questão de estética, beleza... Mas há sentido também.

Cada um desses "efeitos" é *inline*, ou seja, fica dentro do fluxo do texto; dentro da mesma linha/parágrafo.
Logo, use dentro de uma frase ou parágrafo. 

**Negrito e Itálico**:

| Marca | Estrutura | Sentido | Estética
|---|---|---|---|
| `**` | Marcação inline | Ênfase forte; forte destaque|Negrito; letra mais espessa|
| `*` | Marcação inline | Ênfase |letra inclinada para a direita|



<pre>
**negrito** # Ou __bold__
*itálico*   # Ou _itálico_
</pre>


**Código**:

| Marca | Estrutura | Sentido | Estética
|---|---|---|---|
| 1 crase| Marcação inline | Código |Fonte mono-<br>espaçada|

📚️ Fonte: desenho da letra (caractere).

<pre>
`código`
</pre>

É para mostrar **código de computador**. 

<pre>
`poweroff`
</pre>

A aparência é de letra de computador, um efeito mais 'robótico'.  

`poweroff`  

<small>
🤔️ *poweroff*: "comando" que é dado no Terminal _a "telinha preta" do computador.
</small>


Aqui um exemplo de trecho de código JS:  

<pre>
`const x = 1;`  
</pre>

Você pode usar isso com criatividade. Por exemplo, dar um efeito a letra para algo matemático:  

`2 + 2 = 4`  

Ou usar esse mesmo tipo de letra para mostrar uma tecla de computador. Exemplo: "clique na tecla..."   

`Shift`  

⚠️ Provavelmente, e pelo lado do sentido, Markdown interpretará isso como código. Ele "pensará" que é código de computador.  
É como se fosse um *hacking*! 🤔️  


###### Link

| Marca | Estrutura | Sentido | Estética
|---|---|---|---|
| `[link](URL)` ||||

Tal como negrito, itálico e código, *link* é um "efeito" é *inline*.

**[]**: O texto do *link* fica aqui dentro .\
**()**: aqui escrevemos a URL.  

Sintaxe `[textoDoLink](URL)`  

Ou seja...  

`[NomeQualquer](http://a.com)`  

Exemplo 1:  

`[Joe S](joesynth.wordpress.com)`  

Exemplo 2:  

`[Wikipedia](www.wikipedia.org)`  



#### Efeitos visuais no texto - bloco

###### Bloco de citação

| Marca | Estrutura | Sentido | Estética
|---|---|---|---|
| `>` | Bloco de citação | Significa conteúdo citado | Via de regra, texto recuado e destacado|

Ex. de código:

```html
> Tudo que tu sabe, alguém lhe contou.
```
O resultado desse código é o seguinte efeito visual...  

> Tudo que tu sabe, alguém lhe contou.


###### Bloco de código <sup>*code block*</sup>

| Marca | Estrutura | Sentido | Estética
|---|---|---|---|
|3 crases | Bloco | Código |Fonte mono-<br>espaçada|

Exemplo.\

<pre>
```
cd Documentos
ls
```
</pre>

Resulta no efeito visual...  

`cd Documentos`  
`ls` 

Portanto, equivale ao de 1 crase (código), que vimos acima _ou seja, serve para escrevermos código de computador.  
A diferença? Uma crase, como já vimos, é *inline*, e aqui nas 3 crases podemos ter linhas e mais linhas de **texto pré-formatado** _portanto bem útil para escrevermos código de computador.

<small>
🤔️ **Texto pré-formatado**:  Significa preservar a quebra de linha, espaços e recuos, exatamente, como foram digitados.
</small>

👉️ 4 espaços também pode ser usado no lugar das 3 crases.  

**Criatividade!** Use sua imaginação. O texto não precisa ser exatamente código de computador, podendo ser uma simples frase.

<pre>
Comia carne crua
e bebia sangue,
um monstro!
</pre>

E que tal um repente?

<pre>
Você pode ser o A
E pode ser o leão
E pode ser o dragão
Que brigou com o Juvenal
</pre>

👉️ Você pode usar o bloco de código como uma opção (estética) ao bloco de citação.

<small>
⚠️ Como dito antes, com *bloco de código*, quanto ao significado, você está dizendo ao computador que isso é código.

😄 É como se fosse um *hacking*!  
</small>

🤔️ No geral, código _seja inline (1 crase) ou bloco de código (3 crases)_ é um recurso bem mais característico de documentação técnica, programação e TI do que outros tipos de textos, artigos.



###### Listas

| Marca | Estrutura | Sentido | Estética
|---|---|---|---|
| `-` | Lista não ordenada | Conjunto de itens sem ordem | Itens com marcador visual (bolinha)|
| `1.` | Lista ordenada | Conjunto de itens em sequência | Itens numerados|


Na sintaxe do Markdown, lista é uma estrutura de bloco, tal como bloco de citação (>) e bloco de código (3 crases)

**Lista ordenada**:  

<pre>
1. Fruta
</pre>


**Lista não ordenada**:  

<pre>
* foo # # <ul><li>foo</li></ul>
- idem.
</pre>
 

**Lista aninhada**:  

<pre>
- Item 1
  - Subitem 1
  - Subitem 2
- Item 2
</pre>



#### Recursos gráficos, diagramação

###### Imagem - inline

| Marca | Estrutura | Sentido | Estética
|---|---|---|---|
|`![]()`||||

Se você praticou bem o link, imagem vai ser fácil: basta pôr uma ❗️ antes.  

Sintaxe `![textoAlternativo](URL)`  

Exemplo:  

`![Um Gato](http://url/gato.png)`  


###### Linha horizontal

| Marca | Estrutura | Sentido | Estética
|---|---|---|---|
| `---` | Separador temático | Mudança de assunto | Linha horizontal|


*Horizontal rule*: Régua horizontal no literal. Uma linha bem fina, sendo um separador horizontal.  

`--- `

Indica uma separação temática/estrutural. usamos quando damos o significado de um assunto tal que terminou, aí a linha, e após ela inicia outro assunto.




## 💾️ Arquivo Markdown

Considere um editor de editor de texto comum _por ex. Gedit do Ubuntu, Bloco de Notas do Windows...  

Um editor de texto simples, como os citados, é usado para lidarmos com a Markdown _embora haja programas mais avançados.  

A extensão do nome do arquivo é .*md* ou .*markdown*.  

Como esse arquivo é apenas texto simples, você pode abrir com qualquer editor.  

###### Criando um arquivo Markdown

Fácil!

● Abra um editor.  
● Crie um novo arquivo e nomeie ele com algo como *teste.md*.  
⚠️ Não esqueça de usar a extensão .*md*!



<img src="https://joesynth.wordpress.com/wp-content/uploads/2025/05/joe_flyer_servico_b2.png" width="320" />




## Markdown para programadores

Se você gosta de assuntos como **tecnologia e programação**, MD é a linguagem mais fácil ou simples, e até divertida, de entrarmos nesse mundo.

Como vimos, Markdown é ótimo para escrevermos nossas histórias; mas, para quem gosta de tecnologia ou programação, vai além disso.



<small>
A partir desse momento, pense seriamente em criar sua conta no GitLab!

A princípio, o GitLab pode ser usado para escrever suas histórias em Markdown, e mesmo ter alguma experiência colaborativamente em grupo.
</small>
gens etc.





## Markdown: alguns conceitos

MD dá uma base para conceitos que aparecerão na HTML e mesmo na CSS ou no desenvolvimento web.

- Linguagem de marcação
- Estrutura, beleza e sentido
- Estrutura de bloco e inline
- Design Gráfico

⚠️ Todas essas ideias **não são exclusivas** de Markdown ⚠️

Outros conceitos...  

**Estrutura do conteúdo**: um texto tem título, parágrafo...
**Hierarquia**: organização do conteúdo em níveis (título, subtítulo).
**Elementos e marcação**: símbolos para marcar o significado num trecho de texto (**, por ex.), que no HTML será <strong>.
**Link**: um conteúdo pode referenciar outro recurso. 
**Código dentro de conteúdo**:  comum em documentação de programação, ajuda a entender que podemos ter diferentes tipos de conteúdo dentro de um documento.


#### Linguagem de marcação

Markdown é uma **linguagem de marcação**.

As marcas...  


**Uma marca no incio**: um símbolo (caractere) indicará algo.

Sintaxe `CaractereEspaçoConteúdo`  
ou... `# espaço conteúdo`  


```# A Bíblia```

Para o conteúdo 'A Bíblia', antes há o caractere de marcação (ou símbolo) **#**, significando título.  

**Duas marcas**: uma no incio e no final do conteudo _que no ex. abaixo é a palavra 'uva'  

Sintaxe `marca de abertura + conteúdo + marca de fechamento`  

`*uva*`

Aqui temos a marcação de um asterísco, indicando itálico.


🤔️ Além de uma ou duas marcas, há casos específicos, por ex. *link*.  
Independente disso, Markdown é muito simples. 😄️  


👉️ Quando a marca tem uma função mais específica, pode receber outro nome, como delimitador (delimiter)

#### Estrutura, beleza e sentido

Markdown lida como o conteúdo aparece, bem como o que representa. Veja.

<pre>
> Tudo passa, nada permanece.
</pre>

Neste código, a **marca >** representa um conteúdo citado (no caso "tudo passa...") e resulta no efeito visual:  

> Tudo passa, nada permanece.

Isso .
Cada marca da Markdown produz uma aparência específica no texto e comunica um significado específico para quem lê.

**Markdown atua em 3 dimensões**:  

|Estrutura| Beleza<br>estilo| Sentido<br>significado|
|:---:|:---:|:---:|
|Organização do conteúdo. Ou seja, organização dos elementos do conteúdo, inclusive a ordem, hierarquia e aninhamento.| Como determinado conteúdo deve ser apresentado visualmente. Inclui tipo de letra, tamanho, peso (negrito) e espaçamento. Tecnicamente, é chamada de **apresentação**.| Natureza ou função do conteúdo. Tecnicamente, é chamada de **semântica**.|

👉️ Aninhamento - Algo que está dentro do outro. Ex. lista.

**Estrutura**:  

|||
|---|---|
|quais elementos de conteúdo existem|ordem em que aparecem|
|**Ex.**|**Ex.**|
|subtítulo, parágrafo, lista... |título → parágrafo → lista|

|||
|---|---|
|hierarquia entre eles|o agrupamento|
|**Ex.**|**Ex.**|
|# está acima de ##; itens pertencem à lista|itens estão dentro de uma lista|

###### estrutura de bloco - ex.

| Marca | Estrutura | Sentido | Estética
|---|---|---|---|
| `#` | Título 1 | Título principal |Texto grande, destacado|

Outras marcas:

|||||
|---|---|---|---|
| `##` | `-` | `1.` | `>` | `---` |

###### estrutura inline - ex.

| Marca | Estrutura | Sentido | Estética
|---|---|---|---|
| `**` | Marcação inline | Ênfase forte; destaque|Negrito|

Outras marcas:

|||
|---|---|
| `*` | `` ` `` |  

Ex.:  

<pre>
Não pise no **vermelho**.
</pre>


#### Estrutura de bloco e inline

No que tange a estrutura, temos a questão de organização espacial; disposição do conteúdo.

|estrutura de bloco| estrutura inline|
|---|---|
|estrutura maior| subestrutura dentro do bloco|
|**Ideia**|**Ideia**|
|Ocupar uma região própria _como uma frase inteira, por exemplo.| Significa permanecer na própria linha.|
|**Ex.**|**Ex.**|
|Um título que ocupa uma linha inteira|Um efeito de negrito numa única palavra.|

**Estrutura inline e de bloco - resumo**  

|bloco|inline|
|:---:|:---:|
|título, parágrafo, bloco de citação, bloco de código, lista, linha horizontal| negrito, itálico, código inline, link, imagem|


#### Design Gráfico

**Formatação** é um termo de uso cotidiano e amplo. Vasto, no dia a dia está associado a aparência (caso de uma palavra negrito, tamanho da letra...) bem como a questão de disposição espacial (se tá alinhado na esquerda ou direita, se há recuo da margem etc).\
Portanto abrange tanto características de aparência quanto aspectos de disposição e organização espacial.

No vocabulário técnico, em vez de ver a formatação de forma abrangente, se decompôe em operações e conceitos mais específicos.
Então o *design gráfico* faz abstrações, como layout, diagramação, hierarquia etc) pq é essencial para o seu trabalho.

###### Composição visual

📚️ Layout = Diagramação.  

No dia a dia ambas palavras se equivalem, uma é tradução da outra _mas tecnicamente há nuances.

**Layout**: disposição visual de elementos em uma página, organização visual. É uma área de atividade humana, mas que tem um conceito por trás: projetar/ organizar elementos gráficos para comunicar algo visualmente.
 
|Diagramação| Layout|
|---|---|
|Causa; ação/processo de organizar os elementos.| Efeito; disposição visual resultante, isto é, ao arranjo que foi produzido.|
|**composição visual**|**composição visual**|
|Utiliza princípios como hierarquia visual, alinhamento, espaçamento, margens, colunas e tipografia.| Disposição visual dos elementos nessa composição.|

⚠️ Causa e efeito aqui não é absoluto! É somente uma ideia, não rígida.  
Layout pode atuar mesmo como o projeto/plano da disposição visual antes da execução, e diagramação se referir ao resultado do trabalho.  

 

Ainda temos a hierarquia visual, a tipografia etc.

👉️ **Diagramação**: imagem (que é recurso gráfico) ou mesmo inserir uma linha bem fininha num texto ou site (o que é um recurso gráfico, porém muito simples). E ainda quebra de linha.


###### MD e Design Gráfico

MD lida com alguns aspectos que pertencem ao campo do Design Gráfico, mas de maneira extremamente básica.

| Hierarquia visual | Tipografia | Diagramação |
|---|---|---|
| `# Título` | `**negrito**` | `---` |
| `## Subtítulo` | `*itálico*` | `- item` |
| `### Seção` | `` `código` `` | `> citação` |
| `**destaque**` | `[link](URL)` | `![imagem](URL)` |
| `- item` | `# Título` | `\| Coluna \|` |

MD não uma ferramenta de Design Gráfico, mas um "jardim da infância" para quem começa.
Esses conceitos básicos usados no contexto de MD são úteis posteriormente para quem estuda HTML e, principalmente, CSS.


**Layout**:

Antes da informática/ desenvolvimento web, na prática em jornais, revistas e publicidade, layout podia se referir a coisas (artes gráficas, publicidade e diagramação) como:

<pre>
onde ficariam os textos;
posição e tamanho das imagens;
títulos e subtítulos;
colunas;
margens e espaços;
anúncios e outros elementos gráficos.
</pre>

Layout é um dos conceitos fundamentais de UI Design. O estudante aprende, por exemplo, sobre:

    disposição e posicionamento de elementos;
    alinhamento;
    espaçamento;
    grids;
    hierarquia visual;
    composição de telas;
    organização de conteúdo.



#### Markdown vs. HTML - Semelhanças


O que há de igual ou semelhante em ambas linguagens?  

###### Espaço/ disposição

Como o conteúdo se organiza no espaço.

###### Aparência

Como o conteúdo se apresenta.


🎯️ Em suma **o foco é o mesmo**: marcar o conteúdo para informar ao interpretador qual é a sua **estrutura (textual)**, função ou **apresentação**.


#### Texto verbal vs. não verbal

**Verbal - escrito** - bloco

||MD|HTML|
|---|---|---|
|título| #| h1-h6|
|parágrafo| | p|
|bloco de citação| >| blockquote|
|bloco de código| 3 crases| `<pre><code>`|
|lista ordenada| 1.| ol|
|lista não ord.| -| ul|

**Verbal - escrito** - inline

||MD|HTML|
|---|---|---|
|negrito| **| strong|
|itálico| *| em|
|código| 1 crase| code|
|link| `[]()`| a|


**Texto não verbal**:

||MD|HTML|
|---|---|---|
|imagem| `![]()`| img|

**Formatação / diagramação**:

No que tange à organização espacial do conteúdo, os recursos abaixo são de formatação/diagramação.\
Ou seja, recursos de formatação/diagramação espacial do conteúdo, em um nível extremamente básico.

||MD|HTML|
|---|---|---|
|Quebra de linha|`\Enter`|`<br>`|
|Regra horizontal|`---`|`<hr>`|





#### Markdown vs. HTML - Diferenças


###### Marcação, regras de escrita e recursos

Marcações:  

|Markdown|HTML|
|---|---|



|Markdown| HTML|
|:--:|:--:|
|**Marcações**|**Marcações**|
|marcador (marker)|etiqueta (tag)|
|**marcação**|**marcação**|
|poucas marcas| muitas etiquetas|
|**Ex.**|**Ex.**|
| * # |p a|


👉️ Tecnicamente, diz-se que # é um *heading marker* (marcador de título), *marker* . Já # Título é **estrutura de cabeçalho** (heading structure).\
👉️ Delimitador também é um termo técnico, caso de enfase, por exemplo.\
Se de uma lado há as marcas (marcadores) e doutro há as etiquetas. Ambas ideias cumprem o papel de marcação para as respectivas linguagens.\



**Regras de escrita**: dizem como devemos escrever, e os **recursos** em si o que a linguagem é capaz de fazer.

|Markdown| HTML|
|:--:|:--:|
|**regras de escrita** | **regras de escrita** |
|mais simples| mais completas |
|**recursos**|**recursos**|
|mais limitados| mais possibilidades; controle bem maior sobre estrutura, significado e apresentação.|

Abaixo, o título "O Pequeno Príncipe" escrito na linguagen Markdown.  

```markdown
## O Pequeno Príncipe
```
E escrito em HTML...  

```html
<h2>O Pequeno Príncipe</h2>
```

Note que o código em markdown é bem mais fácil de escrever! 😄️  

Porém, o HTML oferece uma forma de marcação muito mais ampla e detalhada. HTML temos estura com cabeçalho, painel lateral, rodapé etc.  

⚠️ Tecnicamente, o que chamamos aqui de "regras de escrita" é o que se fala como **sintaxe**.

###### Sintaxe

|Markdown|HTML|
|:---:|:---:|
|**Sintaxe**|**Sintaxe**|
|Muito simples; curta, objetiva. | Cada elemento, via de regra, é delimitado por etiquetas de abertura e fechamento.|
|**Ex. de título**|**Ex. de título**|
|`# A Bíblia`| `<h1>A Bíblia</h1>`|
|**Ex. de negrito**|**Ex. de negrito**|
|`**morango**`| `<strong>morango</strong>`|

Um texto com título e parágrafos em Markdown:  

<pre>
# Meu título

Este é o primeiro parágrafo.

Este é o segundo parágrafo.
</pre>

O título, como já falamos nesse tutorial, é indicado por # e os parágrafos são simplesmente separados por uma linha em branco.

Em HTML esse mesmo texto terá as etiquetas de abertura `h1` e `p` e de fechamento  `/h1` e `/p`.

```
<h1>Meu título</h1>

<p>Este é o primeiro parágrafo do documento.</p>

<p>Este é o segundo parágrafo do documento.</p>
```

😄️ É só ler o que está a escrito em Markdown e em HTML para ver que Markdown é bem mais simples!\
🤔️ HTML ainda possui atributo e valor.\


***Marker* e *delimiter* vs. *tag***:

|MD| HTML|
|:---:|:---:|
|*marker* e *delimiter*||
|Termos técnicos para nomear boa parte dos símbolos que constituem a sintaxe Markdown, mas não são o nome genérico de todas as marcações. Há outros.||

###### Layout

MD e HTML lidam com isso, mas HTML tem muito mais poderes, indo bem além.


|Markdown|HTML|
|:---:|:---:|
|**Organiza a estrutura de conteúdo**| **Organiza a estrutura de conteúdo**|
|...de forma básica| ...de forma muito mais ampla e detalhada|
|títulos, parágrafos, citações...| Por exemplo agrupamento _colocar vários elementos dentro de uma seção `<section>`|

###### Construção vs. elemento | Bloco e inline

|Markdown|HTML|
|---|---|
|Construções são formas de marcar/estruturar o conteúdo.| As "construções ou estruturações", são os **elementos**. Não são a mesma coisa que no MD, mas há semelhanças.
|
|conteúdo| conteúdo|
|Usa construções/sintaxe de marcação para estruturar o conteúdo.| Usa elementos (p h1 a div...`) para estruturar o conteúdo.|
|construção/sintaxe| elemento|

**Bloco e inline**: Ideia que serve tanto para Markdown quanto para HTML.  

|Markdown|HTML|
|---|---|
|bloco e inline|bloco e inline|
||Há mais poder (o recurso de atributo `style` pode alterar o comportamento de um para o outro).|





######  Bloco de código vs. texto pré-formatado

Observe essas duas etiquetas HTML.

|`<code>`| `<pre>`|
|:---:|:---:|
|Dá o significado semântico de código| Elemento que preserva a formatação|

Observe:

|MD|
|---|
|marca equivalente a `<code> é 1 crase.|
|arca equivalente a `<pre>` não há.|

No HTML para **texto pré-formatado** use `<pre>`.  

No HTML, isso normalmente é feito com <pre>.  

`<pre>Batatinha quando nasce...</pre>`  

**Código (numa linha)**: É o *inline*.  

`<code>const x = 1;</code>`  


**Bloco de código**: Quando há várias linhas, e queremos preservar as quebras de linhas, recuo. 

```html
<pre><code>
    function soma(a, b) {
        return a + b;
    }
</code></pre>
```
###### Markdown: escrever código sim, texto pré-formatado não

**Código (numa linha)**: É o *inline*.

No Markdown uma única crase no início do conteúdo e outra no final equivale em HTML a...  

`<code>const x = 1;</code>`

**Bloco de código** (*code block*): 4 espaços (ou 3 crases) criam um bloco que corresponde, em HTML, a:

`<pre><code>...</code></pre>`

⚠️ **Texto pré-formatado**: Portanto...\

|MD|HTML|
|**não tem** uma sintaxe específica equivalente a etiqueta HTML `<pre>` pura.| possui a etiqueta HTML `<pre>`.|

 👉️ Ou seja, em MD não há algo para o que não é código!


###### Finalidade, vocabulário e UI

Markdown, bem como HTML, também descreve elementos semânticos e de apresentação

Podemos pensar da seguinte forma...  

|MD|HTML|
|:---:|:---:|
|É estrutura textual, não UI propriamente dita.||



**Conteúdo vs. UI**:  


|MD| HTML|
|:---:|:---:|
|**O termo ‘conteúdo’**|**O termo ‘UI’**||
|Fica melhor para Markdown; cabe para Markdown.| Se ajusta melhor a HTML; se adequa melhor a HTML/CSS/JS.|

Portanto, o termo 'conteúdo' cabe bem para Markdown, enquanto 'UI' se ajusta melhor a HTML.




#### Estrutura, beleza, sentido

A diferença entre MD e HTML é, principalmente, de amplitude e expressividade.

HTML simplesmente possui um vocabulário muito mais rico para fazê-las.

|MD|HTML|
|:---:|:---:|
|**Estrutura**|**Estrutura**|
| # 1. - --- etc. |Além de marcação da MD, há outros (como elementos de interface, button, form, select...). Isto é, tem uma quanidade maior de marcações (no que tange estrutura)|
|**Beleza**|**Beleza**|
| negrito, itálico etc. | Além de equivalentes da MD, há atributos, etc. Ou seja, mais possibilidades de efeitos estéticos (como o atributo style) |
|**Sentido**|**Sentido**|
| >, links, imagens etc. | Além do que a MD faz; há div, nav, artigo, etc. Ou seja, mais variedade de significados|


⚠️ A verdadeira responsável pela apresentação é a CSS, que interaje com a HTML.

|Markdown|HTML|
|:---:|:---:|
|As três dimensões de maneira mais simples e voltada à produção de conteúdo.| As três dimensões com um vocabulário muito mais amplo, permitindo descrever elementos de UI.|

#### O termo "elemento"

De forma abrangente ambas linguagens usam, e tecnicamente HTML.

|Markdown| HTML|
|---|---|
|Normalmente, as marcas estruturam e apresentam visualmente o conteúdo.| Uma marca não significa, necessariamente, um elemento de conteúdo visível.|
|**Ex.**|**Ex.**|
|título, parágrafo, lista, link...| meta (metadados), div (estrutura/contêiner), nav (sentido de navegação), footer (estrutura semântica de rodapé)|

Portanto no HTML, elemento é um conceito mais abrangente: há elementos que representam conteúdo e .



#### Estruturas de marcação

|Markdown| HTML|
|---|---|
|Conjunto menor de elementos/estruturas de marcação| Conjunto bem mais amplo. Contém os elementos correspondentes aos recursos de marcação da MD e muitos elementos adicionais|

🤔️ HTML? Exemplos?

```
button select form
```

Isso está diretamente relacionado à estrutura, porque os elementos são os componentes por meio dos quais a estrutura do conteúdo é organizada.


#### Conteúdo vs. UI

Finalidade?

|Markdown|HTML|
|:---:|:---:|
|Mais voltado a conteúdo| mais adequado para UI|
|**o termo “conteúdo”**|**o termo “UI”**|
|Cabe bem em Markdown| Se ajusta melhor, embora HTML também lide com conteúdo |

👉️ HTML ainda permite “superpoderes” com CSS.

**Um exemplo de UI?**  Criarmos um botão com menu.

|Markdown|HTML|
|:---:|:---:|
|Impossível.| Possível, exatamente por ela ser própria para isso.|

#### Desenvolvimento web

A ideia de estrutura/ beleza/ sentido está presene na MD e na HTML, esta de forma muito mais abrangente.

Inicia-se percebendo que MD lida com estrutura e significado do conteúdo. Logo logo decobriremos que a ideia se aplica também a HTML.

Markdown cria uma familiaridade com a ideia de linguagens de marcação e documentos estruturados, o que pode tornar a chegada ao HTML mais intuitiva.

**Comportamento**: é a lógica "do négócio", uma outra etapa que se descobrirá, essa por conta da JS.  


Vide [HTML, CSS, JS](html-css-e-js).


#### Markdown misturado com HTML

A maioria dos softwares Markdown permite misturar Markdown com HTML no mesmo documento.  
Ou seja, um arquivo `.md` pode conter, ao mesmo tempo, Markdown e HTML.  
Então, além das marcas Markdown que vimos, temos etiquetas (*tags*) HTML possíveis de usar. Etiquetas HTML que podmos misturar:  

|inline| bloco|
|---|---|
|small cite abbr sup sub span del ins b i mark kbd samp var tt (obsoleta) output| pre address|




#### Tag <pre> vs. 3 crases

Considere um software que funciona ao mesmo tempo com ambas linguagens.

Coloque o código Markdown dentro de <pre> se você quer que não seja interpretado.

A etiqueta HTML `<pre>` faz com que o conteúdo seja apresentado literalmente. Neste contexto `<pre>` age como 3 crase (que é markdown).

**Não são exatamente a mesma coisa!**:  

|`<pre>...</pre>`| 3 crases|
|:---:|:---:|
|HTML| Markdown|
|elemento para texto pré-formatado|Sintaxe para bloco de código|
|Texto pré-formatado. Pode conter código, mas não necessariamente.| Projetado especificamente para representar código.|

###### CLI

MD pode ser sua primeira experiência com software de linha de comando. Ou seja, não precisa usar *mouse*, de fato. Markdown funciona com o Nano, o editor em CLI padrão no Linux. 

😄️ Uma boa "brincadeira" para quem gosta de tecnologia é exatamente escrever Markdown no Nano.

###### Conceitos - resumo

||MD|HTML|
|---|:---:|:---:|
|ideia de linguagem de marcação|✔|✔|
|estrutura/ beleza/ sentido|✔|✔|
|bloco e inline|✔|✔|
|ideia de regras de escrita, sintaxe|✔|✔|
|conteúdo textual|✔|✔|

||MD|HTML|CSS
|---|:---:|:---:|:---:|
|Hierarquia visual, tipografia, formatação/diagramação|✔|✔|✔|



<img src="https://joesynth.wordpress.com/wp-content/uploads/2025/05/joe_flyer_servico_b2.png" width="320" />






## Markdown e programação - Na Prática!

Além do alicerce teórico, para um programador, Markdown logo logo será útil para...\
✔ Uso do terminal para escrevermos código, em vez de *mouse*.\
✔ páginas de documentação e arquivos ‘leia-me’ (README.md de projetos no GitLab e GitHub).




## CommonMark e sabores!

Um **sabor** é um aplicativo Markdown que implementa uma versão ligeiramente diferentes da Markdown. Um 'sabor' é como um dialeto de uma linguagem _algo como português do Rio de Janeiro e de Lisboa.

|CommonMark|GFM|GLFM|
|:---:|:---:|:---:|
|É uma proposta de sintaxe padrão para a Markdown.| Na verdade, e exatamente, é uma especificação baseada na *CommonMark*.| Um 'sabor' mais abrangente que o GFM.|  

📚️ GFM: GitHub Flavored Markdown.  
GLFM: GitLab Flavored Markdown.  


**CommonMark**: Exemplo de sites e projetos que adotam? GitLab, GitHub, Wordpress (via plugin), Discourse, Reddit, Qt, Stack Overflow / Stack Exchange, Swift.  

Veja mais em <a href="https://commonmark.org/help/">help</a>.



#### GFM

###### Tabela

É usado os símbolos hífen (sinal de menos) e barra vertical (ou pipe, como se fala entre programadores).

<pre>
| Fruta | Verdura |  # 'head' da tabela.
| --- | --- |
| uva | hortelã |
| morango | alface |
| acerola| salsa |
</pre>

👉️ Esta tabela está em GFM. Vide "Sabores!" abaixo.  

**Alinhar conteúdo da tabela**

Centro.

<pre>
| : - - - : |
| caju |
</pre>

Direita.
<pre>
| - - - : |
| caju |
</pre>

Esquerda (*default*, padrão).

<pre>
| : - - - |
| caju |
</pre>

Mesclar.

<pre>
| :--- | :---: | ---: |
| uva | uva | uva |
</pre>

###### Checklists | input

<pre>
- [ ] Tarefa pendente
- [x] Tarefa concluída
- [ ] Outra tarefa
</pre>


###### Emojis

Sintaxe `:nomeEmInglês:` 

<pre>
:grin: 😄️    :heart:❤️
:angry: 😠️   :fire: 🔥️
:star: ⭐️    :walking: 🚶‍♀️️
:cat: 😺️    :running: 🏃‍♂️️
:hand: 🖐️    :clap: 👏️
:mouse: 🐭️  :point_right:  👉
</pre>

Outros inclui *shit*, *blush*, -1, *smiley*...
Lista com dezenas: https://gist.github.com/rxaviers/7360908


###### Texto riscado

`~~texto riscado~~`

👉️ Equivale em HTML à etiqueta `<del>`, texto excluído.






## Mais links sobre o tema

<pre>Editores para Linux.
-https://sourceforge.net/software/markdown-editors/linux/
Visualizar Markdown no Gedit (via plugin).
-https://terminalroot.com.br/2020/03/como-visualizar-markdown-no-gedit.html
YT
-https://www.youtube.com/watch?v=NR44PLPHu2w -https://www.youtube.com/watch?v=mRIIPO7qfkE -https://www.youtube.com/watch?v=_MZKngDkcbs -https://www.youtube.com/watch?v=1xcRU2LqSNs</pre>
<pre>Wordpress
https://wordpress.com/support/wordpress-editor/blocks/markdown-block/

  
CommonMark
https://spec.commonmark.org/0.30/

-https://wordpress.com/support/wordpress-editor/blocks/markdown-block/
-https://wordpress.com/support/markdown-quick-reference/
-https://wordpress.com/pt-br/support/markdown-quick-reference/
-https://wordpress.com/pt-br/support/markdown-quick-reference/#privacy
-https://wordpress.com/support/wordpress-editor/blocks/markdown-block/#writing-with-markdown
</pre>


👉️ **Escape**: <code>\# \** \*</code>

Para **Marcação vs. instrução** veja [Linguagens Resumo](linguagens-resumo).


## Profissões que usam e softwares



| Área | Software | Finalidade |
|---|---|---|
| **Produção de conteúdo** (jornalista, produtor de conteúdo, redator) | Obsidian, Zettlr 🎈, Joplin 🎈, Typora, MarkText 🎈, VSCodium 🎈 | Escrita e organização |
| **TI** (programador, desenvolvedor, DevOps) | Nano (CLI) 🎈, Gedit 🎈, GitLab 🎈, GitHub, VSCodium 🎈 | Código e documentação |
| **Dados** (cientista de dados, analista) | Jupyter 🎈, GitLab 🎈, Quarto 🎈, VSCodium 🎈 | Análise e relatórios |
| **Segurança** (pentester, analista SOC) | Nano 🎈, Gedit 🎈, GitLab 🎈, GitHub, Vim 🎈, VSCodium 🎈 | Relatórios e documentação |
| **Produto** (Product Manager) | Notion, GitHub, Obsidian, Zettlr 🎈, VSCodium 🎈 | Requisitos e especificações |
| **Design UX** (UX Designer) | Notion, Obsidian, Zettlr 🎈, GitLab 🎈, VSCodium 🎈 | Pesquisa e documentação |




###### Software editor Markdown e renderização (visualização)
  

Um editor que escreva o código é uma coisa, renderizar é outra!  

Para os documentos em Markdown. quanto a escrevê-lo e renderizá-lo temos:

| **Escreve, não renderiza** | **Escreve e renderiza** |
|:---:|:---:|
| Bloco de Notas (Windows) 🔒️ | WordPress (online) |
| Nano 🎈 | Dillinger 🎈 (MIT) (online) |
| Editor (Android/F-Droid) 🎈 | Obsidian 🔒️ |
| Gedit (Ubuntu) 🎈 | Joplin 🎈 Notepad (Android/F-Droid) 🎈 Acode (F-Droid) Editor de código 🎈 StackEdit Editor online 🎈 Ulysses  Editor de texto/escrita (Apple) 🔒️|

👉️ Dillinger pode ter telemetria, enquanto StackEdit não.

👉️ Gedit (Ubuntu): renderiza via plugin.  
👉️ O ponto importante é que Markdown permite HTML embutido. Editores mais completos conseguem aplicar cores às duas sintaxes no mesmo documento.  
👉️ Nano: Não faz destaque simultâneo e contextual de Markdown + HTML no mesmo arquivo como esses editores.



###### Markdown: outras aplicações

**CodeMirror** ✏️ M. Haverbeke 📜️ MIT: Componente (biblioteca JS/TypeScript) que, além da Markdown, tem suporte para HTML, CSS, JavaScript, C++, etc.  
🔗️ codemirror.net  
**markdown-it**: Biblioteca JS, segue a especificação CommonMark.  
🔗️ https://github.com/markdown-it/markdown-it   
**Jekyll**: Gerador de site estático que pega arquivos Markdown e cria um site HTML.


###### Plug-ins
Além do Gedit *plugin* *Markdown Preview*, temos:  

<strong>Firefox</strong>: Markdown Viewer Webext.  
<strong>Chromium / Chrome: </strong>Markdown Preview Plus. Mistura *markdown* e HTML.  
Instale e...  
Clique em Extensions, menu superior direito, próximo menu principal.  
Clique Manage Extensions; surge Markdown Preview Plus (uma caixa de alerta).  
Nesta caixa clique details.  
Allow access to file URLs; ligue o Toggle.  






## Analisador <sup>parser</sup> e renderizador

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftiiny.host%2Fblog%2Fassets%2Fimages%2Ffrom-code-file-to-rendered-output-in-markdown.png&f=1&nofb=1&ipt=27ce30f912777764f2381bd30f9c0d0c23d6341aa9686c12d647863836f778a6" width="320" />


Aplicativos Markdown usam o chamado processador Markdown (“*parser*” ou “*implementation*”).

<img class="alignleft" src="https://mdg.imgix.net/assets/images/markdown-flowchart.png?auto=format&amp;fit=clip&amp;q=40&amp;w=1080" width="307" height="64" />

Ele é usado para 'pegar' o texto formatado em Markdown e enviá-lo para o formato HTML, então seu documento pode ser visualizado em um navegador da Web _ou combinado com uma folha de estilo e impresso. Em suma temos:

● Crie um arquivo Markdown (via o editor de texto ou um aplicativo Markdown dedicado). O arquivo deve ter uma extensão .md ou .markdown.  
● Abra o arquivo Markdown em um aplicativo Markdown.  
● Use o aplicativo Markdown para converter o arquivo Markdown num documento HTML (ou mesmo convertê-lo noutro formato de arquivo, como PDF).  
● Visualize o arquivo HTML em um navegador da Web.

Ou seja, você escreve usando essa linguagem e salva um arquivo formatado em Markdown (salvando na extensão .*md*), e, também precisamos de um aplicativo Markdown capaz de processar o arquivo Markdown.

Embora chamamos de "analisador" isso é um termo um tanto impróprio _pois além de "analisar" o Markdown ele também renderiza/compila o Markdown em outra coisa, normalmente HTML.




## Um pouco de história

Markdown foi criada principalmente para escritores e autores de conteúdo na web.  
Uma das ideias centrais era ser uma alternativa mais simples ao HTML, para escrever conteúdo web.

O foco original, em 2004, era:

● Criar uma forma simples de escrever texto formatado;\
🤔️ HTML, que também tem esse fim, é mais trabalhoso.\
● Fácil de ler, fácil de escrever _mesmo sem renderização;\
● Evitar que o autor precisasse escrever HTML diretamente.\
🤔️ HTML é menos natural para quem só quer escrever textos, histórias.\
● Permitir conversão para HTML;


<img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/John_Gruber%2C_2009_%28cropped%29.jpg/200px-John_Gruber%2C_2009_%28cropped%29.jpg" width="60" height="70" /> 🇺🇸 John Gruber.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Aaron_Swartz_profile.jpg/220px-Aaron_Swartz_profile.jpg" width="60" height="83" /> 🇺🇸 Aaron Swartz.
Swartz, além de Gruber, são os caras inventores da linguagem Markdown, que foi criada em 2004.


Como vimos neste tutorial a MD funciona super bem para produção de conteúdo textual. Mas, comparada à linguagem HTML, a Markdown é limitada, sendo equivalente ao "jardim da infância" da programação.

Ainda sim Markdown é conhecimento essencial devido aos conceitos que estão por trás dela. Esses saberes são um belo pilar para a vida de um programador que se inicia.

É isso!  
Grande abraço.  
\o/  

[oes: tit !]
