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
- Mais links sobre o tema.


## O que é Markdown? Quem Usa?

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/175px-Markdown-mark.svg.png" width="79" height="49" />Markdown é uma linguagem de marcação. Ela organiza a estrutura de um texto, definindo o que é título, parágrafo, etc. bem como alguns aspectos de apresentação _é o caso de pôr uma palavra em negrito ou itálico.  

Ainda temos *links*, recursos gráficos como imagens, tabelas etc_podemos até inserir uma linha bem fininha num texto ou site. E tudo de forma rápida, sutil.  

**Markdown é simples!**: Comparada a HTML _que tem muitos 'símbolos' (as chamadas *tags*, elementos)_ a linguagem Markdown é bem mais simples. Ela é muito mais objetiva e fácil de aprender. Tudo é praticamente intuitivo.

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


###### Markdown vs. HTML

HTML tamém é uma linguagem de marcação. HTML e Markdown lidam com estrutura e apresentação, mas o HTML oferece uma forma de marcação muito mais ampla e detalhada.  

Tal como a HTML, a *markdown* serve para criarmos texto formatado; podendo ser um  título, uma palavra em negrito, letras em itálico etc.

Nos exemplos abaixo, o título "Jesus de Nazaré" escrito nas linguagens markdown e HTML. Note que em markdown é bem mais simples.

<pre>
## Jesus de Nazaré
&lt;h2&gt;Jesus de Nazaré&lt;/h2&gt;
</pre>

**Marcação vs. instrução**:

|Marcação| Instrução|
|---|---|
|É classificar algo.| Representa uma ação a ser executada.|
|Markdown<br >HTML|Bash<br >JS|

👉️ O termo **comando** também indica uma ação a ser realizada.






## Markdown - Guia Rápido - Básico (CommonMark)

No caso do HTML, na UI temos cada etiqueta (tag): texto + grafica.
Aqui no markdown segue a mesma ideia.

#### Texto

###### Título e parágrafo | h1-h6 p

<pre>
## Título
### Título # título um tanto menor.
</pre>

**Parágrafo**: É simplesmente uma sequência de texto separada de outra por uma linha em branco.  
⚠️ No Wordpress crie usando uma linha em branco.

###### Negrito e itálico | strong b i em

<pre>
**Negrito** # Ou __Bold__
*Itálico*   # Ou _Itálico_
</pre>


###### Listas | ul ol li

**Lista não ordenada**:  

<pre>
* foo # # <ul><li>foo</li></ul>
- idem.
</pre>
⚠️ No Wordpress* ShiftEnter* cria um dentro do outro.  


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




###### Link (CommonMark) | a

Usa-se os colchetes e os parênteses. O texto do *link* fica dentro dos colchetes e logo em seguida dentro dos parêntesis temos a URL. Ou seja, a sintaxe é:

<pre>
[textoDoLink](URL)
</pre>

Exemplos:

<pre>
[NomeQualquer](http://a.com)
[Joe S](joesynth.wordpress.com)
</pre>


###### Texto pré-formatado e bloco de citação (ambas CommonMark) | pre blockquote

<pre>
     # 4 espaços vazios, tag *pre*
> # Tag *blockquote*, bloco de citação.
</pre>


#### Recursos gráficos


###### Imagem (CommonMark) | img

Se você praticou bem o link, imagem vai ser fácil. Basta pôr uma exclamação antes.  

Sintaxe:  
<pre>
![textoAlternativo](URL)
</pre>

Exemplo: 
<pre>
![Um Gato](http://url/gato.png)
</pre>


###### Tabela (GFM) | table tr td

É usado os símbolos hífen (sinal de menos) e barra vertical (ou pipe, como se fala entre programadores).

<pre>
| Fruta | Verdura |  # 'head' da tabela.
| --- | --- |
| uva | hortelã |
| morango | alface |
| acerola| salsa |
</pre>

Vide mais <a href="https://github.github.com/gfm/">GFM</a>.


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

###### Régua horizontal(CommonMark) | hr

<pre>
 --- # &lt;hr /&gt;
</pre>
👉️ horizontal rule, régua horizontal, linha horizontal, uma linha bem fina.  

Veja mais em <a href="https://commonmark.org/help/">help</a>.

#### id e class (identificação única ou genérica)

Use '#' ou '.' dentro de chaves, e ao final um nome.
<pre>MeuParágrafo {#identificador}
MeuParágrafo {.minhaClasse}</pre>

#### Emojis

Sintaxe: dois pontos, nome em inglês, dois pontos.


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




## 💾️ Arquivo Markdown
A extensão do nome do arquivo é .*md* ou .*markdown*, isso num editor.
Como esse arquivo é apenas texto simples, você pode abrir com qualquer editor de texto _incluso o WordPad no Windows.
<h6>Criando um arquivo Markdown</h6>
Fácil!

- Abra um editor (por ex. Bloco de Notas do Windows ou Gedit do Ubuntu).
- Crie um novo arquivo e nomeie ele com algo como *teste.md* _não esqueça de usar a extensão .*md*!

###### Arquivo .md do GitHub

Desenvolvedores e programadores costumam usar a extensão de arquivo .md para os arquivos README no formato de arquivo *Markdown Documentation* (ou seja, *readme.md*).
## Softwares e plug-ins
Basicamente temos softs editores e plug-ins de Markdown.

###### Software editor Markdown
  
Um editor de texto simples (como Bloco de Notas ou Gedit) é usado para lidarmos com a Markdown _embora haja programas mais avançados e que lidam também com ela.

<img class="alignleft" src="https://alternativebk.com/wp-content/uploads/2019/08/gedit.png" width="40" />**Gedit**.
🖥️ <a href="https://joesynth.wordpress.com/2021/12/12/linux/">Ubuntu</a>.
📜️ Software Livre.
Já faz parte do sistema Ubuntu, portanto não precisa instalar. Num arquivo .*md* do Gedit podemos ter tanto Markdown como HTML, e as duas linguagens tendo marcação colorida de ambas as sintaxes.

⚫️ **Editor**.
🖥️ Android ⬇️ ️<a href="https://joesynth.wordpress.com/2021/12/27/f-droid-o-que-e/">F-Droid</a>.
Simples e objetivo é uma bela opção para iniciantes em programação. Lida simultaneamente com Markdown e HTML, num mesmo arquivo. Possui destaque de cores para ambas linguagens.

<img class="alignleft" src="https://f-droid.org/repo/icons-640/com.farmerbb.notepad.112.png" width="40" height="40" />**Notepad**.
🖥️ Android ⬇️ ️<a href="https://joesynth.wordpress.com/2021/12/27/f-droid-o-que-e/">F-Droid</a>.
📜️ Software Livre.
Num mesmo arquivo do Notepad podemos escrever Markdown ou HTML; e ao final mostra-se tudo visualmente como fica, seja títulos, listas ou mesmo botões etc. Bem objetivo, é uma ótima opção para iniciarmos na Markdown.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Joplin-icon.svg/800px-Joplin-icon.svg.png" width="40" height="40" />**Joplin**.
🔗️joplinapp.org
🔗️github.com/laurent22/joplin
🖥️ Linux, macOS, Windows, Android, iOS.
📜️ AGPL License.
⬇️ ️<a href="https://joesynth.wordpress.com/2021/12/27/f-droid-o-que-e/">F-Droid</a>, <a href="https://joesynth.wordpress.com/2021/12/25/xx/">Ubuntu Software</a>.
Concorrente do Evernote, nos permite escrever Markdown e HTML, inclusive tabelas.

⚫️ **Dillinger**.
🔗️ https://dillinger.io/
🖥️ É um editor *online*.
Usado para escrever Markdown, bem como converter na visualisação HTML.

⚫️  **Nano** (Software CLI): famoso editor de linha de comando do Linux.  

Vide <a href="https://joesynth.wordpress.com/2021/12/07/software-de-linha-de-comando/">softwares de linha de comando</a>.


###### Plug-ins (renderização - visualização)

Um editor que escreva o código é uma coisa, renderizar é outra! Veja alguns casos:

||||
|:---:|:---:|:---:|
|escreve|escreve|aceita marcadores de Markdown|
|mas não renderiza seus documentos em Markdown|mas não renderiza, embora é possível (vide Markdown Plug-ins)| e também renderiza|
|Bloco de Notas|Gedit|Wordpress|
|Windows|Ubuntu|online|

###### plug-ins
<strong>Gedit</strong>: *plugin* *Markdown Preview*.
<strong>Firefox</strong>: Markdown Viewer Webext.

<strong>Chromium / Chrome: </strong>Markdown Preview Plus. Mistura *markdown* e HTML.
Instale e...
Clique em Extensions, menu superior direito, próximo menu principal.
Clique Manage Extensions; surge Markdown Preview Plus (uma caixa de alerta).
Nesta caixa clique details.
Allow access to file URLs; ligue o Toggle.

###### Outras aplicações Markdown

<img class="editor alignleft" title="CodeMirror" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Baboon.svg/330px-Baboon.svg.png" alt="Soft CodeMirror" width="40" /> CodeMirror.
✏️ M. Haverbeke.
🔗️ codemirror.net
📜️ MIT.
Componente que, além da Markdown, tem suporte para HTML, CSS, JavaScript, C++, etc.
<pre>⚫️ Acode ⬇️ ️<a href="https://joesynth.wordpress.com/2021/12/27/f-droid-o-que-e/">F-Droid</a>.
⚫️ StackEdit (online).
⚫️ markdown-it.
🔗️ https://github.com/markdown-it/markdown-it
Segue a especificação CommonMark.
⚫️ Ulysses.
Usado para escrever Markdown.
⚫️ Jekyll.
Gerador de site estático que pega arquivos Markdown e cria um site HTML.</pre>
Também há <a href="https://joesynth.wordpress.com/2021/12/07/software-de-linha-de-comando/">softwares de linha de comando</a>.

## Sabores!
Aplicativos Markdown implementam versões ligeiramente diferentes da Markdown; são os chamados 'sabores'. Esses 'sabores' são como dialetos de uma linguagem _algo como português carioca e de Lisboa, por ex.

###### CommonMark

É uma proposta de sintaxe padrão para a Markdown, inclusive usada pelo <a href="https://joesynth.wordpress.com/2021/11/27/o-que-e-github/">GitHub</a>, por ex.

CommonMark: sites e projetos que adotaram:
Discourse,
GitLab e GitHub,
Reddit,
Qt,
Stack Overflow / Stack Exchange
Swift.
Wordpress (via plugin)  

**GFM <sup>GitHub Flavored Markdown</sup>**: Na verdade, e exatamente, é uma especificação baseada na *CommonMark*.  
**GLFM <sup>GitLab Flavored Markdown</sup>**: um 'sabor' mais abrangente que o GFM.  






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


É isso!  
Grande abraço.  
\o/  

[oes: tit !]
