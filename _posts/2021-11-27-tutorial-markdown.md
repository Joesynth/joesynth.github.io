# Markdown


Olá!
Vamos a um breve tutorial rápido sobre *markdown*? Então...


- O que é Markdown? Quem usa?
- Markdown - Guia Rápido.
- Arquivo Markdown.
- *Softwares* e plug-ins.
- Sabores!
- Analisador (parser).
- Um pouco de história.
- Markdown vs. HTML
- Marcação vs. instrução
- Mais links sobre o tema.



## O que é Markdown? Quem Usa?

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/175px-Markdown-mark.svg.png" width="79" height="49" />Markdown é uma linguagem de marcação. Mas...marcar o que?  
Simples! A gente escreve algo, uma palavra, por ex., e coloca alguma marca para dizer ao programa como aquele texto deve ser mostrado. Por exemplo:

<pre>*morango*</pre>

A coisa vai além de estética. Veja.

<pre># A Bíblia</pre>

O símbolo **#** marca 'A Bíblia' como título. Ou seja, temos uma marca relacionada com a **estrutura** do texto.

<pre>[Wikipedia](www.wikipedia.org)</pre>

Já aqui **[]** e **()** temos o significado de função específica: marcar um *link*.
Portanto, quando executao, o texto não só aparecerá bonito como um link, como de fato, levará o usuário para outro endereço.



Aqui, quando o código for executado, a palavra morango será exibida em itálico. E isso ocorre exatamente porque os dois asteríscos (que são as marcas) indicam como o texto deve aparecer após interpretado.  

Ela organiza a estrutura de um texto, definindo o que é título, parágrafo, etc. bem como alguns aspectos de apresentação _é o caso de pôr uma palavra em negrito ou itálico.  

Ainda temos *links*, recursos gráficos como imagens, tabelas etc_podemos até inserir uma linha bem fininha num texto ou site. E tudo de forma rápida, sutil.  

**Markdown é simples!**: no dia a dia com apenas **10 "comandinhos** conseguimos muitas construções. Essas dez marcas são muito simples, objetivas e fácil de aprender. Com tudo intuitivo, em poucas horas praticando, logo você grava o necessário para escrever textos comuns.


**Formatação de textos**: a Markdown utiliza um conjunto de códigos bem simples para a formatação de textos. Essa codificação em si se resume em símbolos como asterisco, cerquilha (que é sustenido na música, ou a famosa *hashtag*).  


###### Para que aprender *markdown** se meu editor de texto favorito faz isso com um clique de *mouse*?

● Simples! O legal da Markdown é que ela é bem atraente para nós leitores humanos, então qualquer um de nós pode entender facilmente seu formato de código-fonte. Com isso, ao criar um texto, utilizá-la ganha-se um bom tempo devido a cliques desnecessários do *mouse*.  
● Não precisa usar *mouse*, inclusive funciona com o editor Nano _que é um *software* de linha de comando.

###### Gostar de tecnologia e programação

Se você gosta desses assuntos a Markdown é a linguagem mais fácil, e até até divertida, de entrarmos nesse mundo.
Continue lendo esse tutorial e veja abaixo!


###### Quem usa Markdown?

A **linguagem markdown** é utilizada em...  
● mensagens instantâneas (Telegram, por ex.),  
● fóruns *online* (GitLab),  
● *software* colaborativo (caso do Collabora Online que permite importar),  
● páginas de documentação e arquivos 'leia-me' (README.md de projetos no GitLab e GitHub).  

👉️ Eu mesmo, ao escrever neste *blog*, uso Markdown.

###### Para que serve Markdown?

Markdown serve para criarmos texto formatado; podendo ser um  título, uma palavra em negrito, letras em itálico etc.
Temos a estrutura criarmos texto formatado.
Lida com estrutura e apresentação? o que é?


👉️ Conteúdo? No Markdown também temos símbolos (omo nos emojis), imagens etc.






## Markdown - Guia Rápido



#### Texto

###### Título e parágrafo

<pre>
# Título
## Título # título um tanto menor.
</pre>

👉️ O símnbolo do título pode ser **#** até **######**. Um sustenido criará uma letra bem grande enquanto 6 letra pequena, embora ainda título.

**Parágrafo**: É simplesmente uma sequência de texto separada de outra por uma linha em branco.  
⚠️ No Wordpress crie usando uma linha em branco.



Em lingua portuguesa temos a estrutura textual, onde título, introdução e desenvolvimento podem estar perfeitamente marcados com markdown

    # Meu Título.

    Parágrafo de introdução, bla bla blá...

    Parágrafo de desenvolvimento, bla bla bla...

Exemplo:  

<pre>
# A Bíblia 

No primeiro dia Deus criou...

E nasce Jesus em Nazaré...
</pre>

###### Efeitos visuais no texto - inline

Belos recursos de efeitos visuais para conteúdo de texto escrito.

**Negrito, itálico e código**:  Cada um desses efeitos é **inline**, isto é, permanece na própria linha. Podem aparecer dentro de um parágrafo, junto com o resto do texto. Ou seja, ficam dentro do fluxo do texto; dentro do fluxo da linha/parágrafo.

<pre>
**Negrito** # Ou __Bold__
*Itálico*   # Ou _Itálico_
`código`    # Marca é o símbolo de crase simples
</pre>

**Código** é para mostrar código de computador. A aparência é de letra de computador, um efeito mais 'robótico'.
um efeito de , algo . É  mesmo.

Você pode dar efeito para algo matemático, por exemplo, o "problema" é que semanticamente você está dizendo ao HTML/renderizador que isto é código.  
😄 É como se fosse um *hacking*!  
⚠️ Vide também markdown vs. HTML e analisador.  


###### Efeitos visuais no texto - bloco

Ao invés de efeito numa palavra, a ieia de bloco é ocupar uma região própria _como uma frase inteira, por exemplo.  
Ou seja, quebra o fluxo e ocupa seu próprio bloco.  


<pre>
>     # Bloco de citação.
      # 4 espaços vazios.
</pre>

👉️ Texto pré-formatado.  

4 espaços vazios geram um efeito parecido ou igual a crase (código). Porém aqui o texto não precisa ser exatamente código de computador, podendo ser uma simples frase.

<pre>
    Amai-vos uns aos outros...
</pre>

###### Listas

**Lista não ordenada**:  

<pre>
* foo # # <ul><li>foo</li></ul>
- idem.
</pre>
⚠️ No Wordpress <kbd>ShiftEnter</kbd> cria um dentro do outro.  


**Lista ordenada**:  

<pre>
1. Fruta # Lista ordenada.
</pre>

**Lista aninhada**:  

<pre>
- Item 1
  - Subitem 1
  - Subitem 2
- Item 2
</pre>




###### Link

Usa-se os colchetes e os parênteses. O texto do *link* fica dentro dos colchetes e logo em seguida dentro dos parêntesis temos a URL. Ou seja...  

Sintaxe '[textoDoLink](URL)'

Exemplos:

<pre>
[NomeQualquer](http://a.com)
[Joe S](joesynth.wordpress.com)
</pre>




#### Recursos gráficos

###### Imagem

Se você praticou bem o link, imagem vai ser fácil. Basta pôr uma exclamação antes.  

Sintaxe `![textoAlternativo](URL)`  

Exemplo: 
<pre>
![Um Gato](http://url/gato.png)
</pre>

###### Régua horizontal | hr

<pre>
 --- 
</pre>
👉️ horizontal rule, régua horizontal, linha horizontal, uma linha bem fina.  

Indica uma separeção de temática/estrutural. usamos quando damos o significado de um assunto tal que terminou, aí a linha, e após ela inicia outro assunto.



## Sabores!

Um aplicativo Markdown que implementa uma versão ligeiramente diferentes da Markdown. Um 'sabor' é como um dialeto de uma linguagem _algo como português do Rio de Janeiro e de Lisboa.



|CommonMark|GFM <sup>GitHub Flavored Markdown</sup>|GLFM <sup>GitLab Flavored Markdown</sup>|
|:---:|:---:|:---:|
|É uma proposta de sintaxe padrão para a Markdown.| Na verdade, e exatamente, é uma especificação baseada na *CommonMark*.| Um 'sabor' mais abrangente que o GFM.|

**CommonMark**: Exemplo de sites e projetos que adotam? GitLab, GitHub, Wordpress (via plugin), Discourse, Reddit, Qt, Stack Overflow / Stack Exchange, Swift.  

Veja mais em <a href="https://commonmark.org/help/">help</a>.

#### GFM

###### Tabela | table tr td

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

<pre>
| : - - - : |  # Centro.
| caju |

| - - - : |  # Direita.
| caju |

| : - - - |  # Esquerda (*default*, padrão).
| caju |

| :--- | :---: | ---: |  # Mesclar.
| uva | uva | uva |
</pre>

###### Checklists | input

<pre>
- [ ] Tarefa pendente
- [x] Tarefa concluída
- [ ] Outra tarefa
</pre>


###### Emojis

Sintaxe `:nomeEmInglês:' 

<pre>
:heart: # ❤️
:grin: # 😄️
:angry: # 😠️
:star: # ⭐️
:fire: # 🔥️
:point_right:  # 👉
:hand: # 🖐️
:clap: # 👏️
:walking: # 🚶‍♀️️
:running: # 🏃‍♂️️
:cat: # 😺️
:mouse: # 🐭️
</pre>

Outros inclui *shit*, *blush*, -1, *smiley*...
Lista com dezenas: https://gist.github.com/rxaviers/7360908


###### Texto riscado

<pre>~~texto riscado~~</pre>

👉️ Equivale em HTML à etiqueta <del>, texto excluído.



## 💾️ Arquivo Markdown
A extensão do nome do arquivo é .*md* ou .*markdown*, isso num editor.
Como esse arquivo é apenas texto simples, você pode abrir com qualquer editor de texto _incluso o WordPad no Windows.
<h6>Criando um arquivo Markdown</h6>
Fácil!

● Abra um editor (por ex. Bloco de Notas do Windows ou Gedit do Ubuntu).
● Crie um novo arquivo e nomeie ele com algo como *teste.md* _não esqueça de usar a extensão .*md*!

###### Arquivo .md do GitHub

Desenvolvedores e programadores costumam usar a extensão de arquivo .md para os arquivos README no formato de arquivo *Markdown Documentation* (ou seja, *readme.md*).




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
  
Um editor de texto simples, como Bloco de Notas ou Gedit, é usado para lidarmos com a Markdown _embora haja programas mais avançados.  


Um editor que escreva o código é uma coisa, renderizar é outra!  

Para os documentos em Markdown. quanto a escrevê-lo e renderizá-lo temos:

| **Escreve, não renderiza** | **Escreve e renderiza** |
|:---:|:---:|
| Bloco de Notas (Windows) 🔒️ | WordPress (online) |
| Nano 🎈 | Dillinger 🎈 (MIT) (online) |
| Editor (Android/F-Droid) 🎈 | Obsidian 🔒️ |
| Gedit (Ubuntu) 🔒️ | Joplin 🎈 Notepad (Android/F-Droid) 🎈 Acode (F-Droid) Editor de código 🎈 StackEdit Editor online 🎈 Ulysses  Editor de texto/escrita (Apple) 🔒️|

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










## Analisador (parser)

Aplicativos Markdown usam o chamado processador Markdown (“*parser*” ou “*implementation*”).

<img class="alignleft" src="https://mdg.imgix.net/assets/images/markdown-flowchart.png?auto=format&amp;fit=clip&amp;q=40&amp;w=1080" width="307" height="64" />

Ele é usado para 'pegar' o texto formatado em Markdown e enviá-lo para o formato HTML, então seu documento pode ser visualizado em um navegador da Web _ou combinado com uma folha de estilo e impresso. Em suma temos:

- Crie um arquivo Markdown (via o editor de texto ou um aplicativo Markdown dedicado). O arquivo deve ter uma extensão .md ou .markdown.
- Abra o arquivo Markdown em um aplicativo Markdown.
- Use o aplicativo Markdown para converter o arquivo Markdown num documento HTML (ou mesmo convertê-lo noutro formato de arquivo, como PDF.)
- Visualize o arquivo HTML em um navegador da Web.

Ou seja, você escreve usando essa linguagem e salva um arquivo formatado em Markdown (salvando na extensão .*md*), e, também precisamos de um aplicativo Markdown capaz de processar o arquivo Markdown.

Embora chamamos de "analisador" isso é um termo um tanto impróprio _pois além de "analisar" o Markdown ele também renderiza/compila o Markdown em outra coisa, normalmente HTML.
## Um pouco de história
<img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/John_Gruber%2C_2009_%28cropped%29.jpg/200px-John_Gruber%2C_2009_%28cropped%29.jpg" width="60" height="70" /> 🇺🇸 John Gruber.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Aaron_Swartz_profile.jpg/220px-Aaron_Swartz_profile.jpg" width="60" height="83" /> 🇺🇸 Aaron Swartz.
Swartz, além de Gruber, são os caras inventores da linguagem Markdown, que foi criada em 2004.





## Markdown vs. HTML


Ambas são...  

- [x] para apresentação.
- [x] estrutura do conteúdo textual
- [x] para criar texto formatado.
- [x] linguagens de marcação.

Enquanto Markdown é simples, com poucas marcas (os símbolos como asteríscos, colchetes, sustenido etc), a linguagem HTML usa as etiquetas (tags).


Nos exemplos abaixo, o título "O Pequeno Príncipe" escrito nas linguagens markdown e HTML. Note que em markdown é bem mais simples.

<pre>
## O Pequeno Príncipe
&lt;h2&gt;O Pequeno Príncipe&lt;/h2&gt;
</pre>

Porém, o HTML oferece uma forma de marcação muito mais ampla e detalhada. HTML temos estura com cabeçalho, painel lateral, rodapé etc.  

🎯️ O **foco** é o mesmo: marcar o conteúdo para informar ao interpretador qual é a sua estrutura (textual), função ou apresentação.
👉️ Markdown: estrutura textual; não UI propriamente dita. O termo 'conteúdo' fica melhor para Markdown, enquanto UI se adequa melhor a HTML/CSS/JS. 

#### Texto verbal vs. não verbal

###### Verbal - escrito - bloco

|.md||.html|
|---|---|---|
|#| título| h1-h6|
|| parágrafo| p|
|   | texto pré-formatado| pre|
|>| bloco de citação| blockquote|
|1.| lista ordenada| ol|
|-| lista não ord.| ul|

###### Verbal - escrito - inline

|.md||.html|
|---|---|---|
|**| negrito| strong|
|*| itálico| em|
|`| código| code|
|[]()| link| a|

👉️ A ideia de inline vs. bloco serve tanto para Markdown quanto para HTML.
🤔️ A linguagem CSS pode alterar esse comportamento do HTML.

###### Texto não verbal

|.md||.html|
|---|---|---|
|![]()| imagem| img|


#### Texto pré-formatado vs. bloco de código


|<pre>| <code>|
|:---:|:---:|
|Elemento que preserva a formatação| Dá o significado semântico de código|

IA
Não exatamente.

###### No HTML...

**Texto pré-formatado**: Use <pre>.  

🤔️ Texto pré-formatado = preservar a quebra de linha, espaços e recuos, exatamente, como foram digitados.  

No HTML, isso normalmente é feito com <pre>.

<pre>
    '<pre>Batatinha quando nasce...</pre>'
</pre>

**Código (numa linha)**: É o *inline*.

<pre>
    '<code>const x = 1;</code>'
</pre>

**Bloco de código**: Quando há várias linhas, e queremos preservar as quebras de linhas, recuo. 

<pre>
    '<pre><code>
    function soma(a, b) {
        return a + b;
    }
    </code></pre>'
</pre>

###### No Markdown...

**Texto pré-formatado**: Markdown não tem uma sintaxe específica equivalente a '<pre>' puro.  
⚠️ Na Markdown não há algo para o que não é código!

**Bloco de código**: 4 espaços (ou 3 crases) criam um bloco (*code block*) que corresponde, em HTML, a:

<pre>
    <pre><code>...</code></pre>
</pre>

**Código (numa linha)**: É o *inline*.

Uma única crase no início do conteúdo e outra no final. Equivale em HTML a...  

<pre>
    '<code>const x = 1;</code>'
</pre>










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

Markdown é ótimo para escrevermos nossas histórias, inclusive crianças e jovens deveriam aprender na escola, bem como criar sua comta no GitLab.

👉️ **Escape**: <code>\# \** \*</code>

Para **Marcação vs. instrução** veja [Linguagens Resumo](linguagens-resumo).



É isso!  
Grande abraço.  
\o/  

[oes: tit !]
