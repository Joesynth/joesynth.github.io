# Markdown

Olá!
Vamos a um breve tutorial rápido sobre <em>markdown</em>? Então...
<ul>
 	<li>O que é Markdown? Quem usa?</li>
 	<li>Arquivo Markdown.</li>
 	<li><em>Softwares</em> e plug-ins.</li>
 	<li>Sabores!</li>
 	<li>Markdown - Guia Rápido.</li>
 	<li>Analisador (parser).</li>
 	<li>Um pouco de história.</li>
 	<li>Mais links sobre o tema.</li>
</ul>

<h2>O que é Markdown? Quem Usa?</h2>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/175px-Markdown-mark.svg.png" width="79" height="49" />

Markdown é uma <a href="https://joesynth.wordpress.com/2021/12/27/linguagens-resumo/">linguagem de marcação</a>. Comparada a <a href="https://joesynth.wordpress.com/2021/11/27/html-css-e-js/">HTML</a> _que tem muitos 'símbolos' (as chamadas <em>tags</em>, elementos)_ a linguagem <em>markdown</em> é bem simples, sendo bem mais objetiva e fácil de aprender. É tudo praticamente intuitivo.

Ela utiliza um conjunto de códigos para a formatação de textos. E essa codificação em si se resume em símbolos como asterisco, cerquilha (que é sustenido na música, ou a famosa <em>hashtag</em>).

Tal como a HTML, a <em>markdown</em> serve para criarmos texto formatado; podendo ser um  título, uma palavra em negrito, letras em itálico etc.
Abaixo, um título em HTML e em markdown, e note como neste último caso é mais simples.
<pre>&lt;h2&gt;Título&lt;/h2&gt;
## Título</pre>
Ainda temos <em>links</em>, recursos gráficos como imagens, tabelas etc_podemos até inserir uma linha bem fininha num texto ou site. E tudo de forma rápida, sutil.

Bom, você pode estar se perguntando: pra que aprender isso se meu editor de texto favorito faz isso com um clique de <em>mouse</em>? Simples! O legal da Markdown é que ela é bem atraente para nós leitores humanos, então qualquer um de nós pode entender facilmente seu formato de código-fonte. Com isso, ao criar um texto, utilizá-la ganha-se um bom tempo devido a cliques desnecessários do <em>mouse</em>.

E se você gosta de tecnologia, ou principalmente programação, a Markdown pode ser uma forma até divertida de entrarmos nesse mundo.
Continue lendo esse tutorial e veja abaixo!
<h6>Quem usa Markdown?</h6>
A linguagem markdown é utilizada em mensagens instantâneas, fóruns <em>online</em>, <em>software</em> colaborativo, páginas de documentação e arquivos 'leia-me'. Eu mesmo, ao escrever neste <em>blog</em>, uso Markdown.

<h2>💾️ Arquivo Markdown</h2>
A extensão do nome do arquivo é .<em>md</em> ou .<em>markdown</em>, isso num editor.
Como esse arquivo é apenas texto simples, você pode abrir com qualquer editor de texto _incluso o WordPad no Windows.
<h6>Criando um arquivo Markdown</h6>
Fácil!
<ul>
 	<li>Abra um editor (por ex. Bloco de Notas do Windows ou Gedit do Ubuntu).</li>
 	<li>Crie um novo arquivo e nomeie ele com algo como <em>teste.md</em> _não esqueça de usar a extensão .<em>md</em>!</li>
</ul>
<h6>Arquivo .md do GitHub</h6>
Desenvolvedores e programadores costumam usar a extensão de arquivo .md para os arquivos README no formato de arquivo <em>Markdown Documentation</em> (ou seja, <em>readme.md</em>).
<h2>Softwares e plug-ins</h2>
Basicamente temos softs editores e plug-ins de Markdown.

<h6>Software editor Markdown</h6>
Como dito, um editor de texto bem simples (como Bloco de Notas ou Gedit) é usado para lidarmos com a Markdown _embora haja programas mais avançados e que lidam também com ela.

<img class="alignleft" src="https://alternativebk.com/wp-content/uploads/2019/08/gedit.png" width="40" /> Gedit.
🖥️ <a href="https://joesynth.wordpress.com/2021/12/12/linux/">Ubuntu</a>.
📜️ Software Livre.
Já faz parte do sistema Ubuntu, portanto não precisa instalar. Num arquivo .<em>md</em> do Gedit podemos ter tanto Markdown como HTML, e as duas linguagens tendo marcação colorida de ambas as sintaxes.

⚫️ Editor.
🖥️ Android ⬇️ ️<a href="https://joesynth.wordpress.com/2021/12/27/f-droid-o-que-e/">F-Droid</a>.
Simples e objetivo é uma bela opção para iniciantes em programação. Lida simultaneamente com Markdown e HTML, num mesmo arquivo. Possui destaque de cores para ambas linguagens.

<img class="alignleft" src="https://f-droid.org/repo/icons-640/com.farmerbb.notepad.112.png" width="40" height="40" />Notepad.
🖥️ Android ⬇️ ️<a href="https://joesynth.wordpress.com/2021/12/27/f-droid-o-que-e/">F-Droid</a>.
📜️ Software Livre.
Num mesmo arquivo do Notepad podemos escrever Markdown ou HTML; e ao final mostra-se tudo visualmente como fica, seja títulos, listas ou mesmo botões etc. Bem objetivo, é uma ótima opção para iniciarmos na Markdown.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Joplin-icon.svg/800px-Joplin-icon.svg.png" width="40" height="40" />Joplin.
🔗️joplinapp.org
🔗️github.com/laurent22/joplin
🖥️ Linux, macOS, Windows, Android, iOS.
📜️ AGPL License.
⬇️ ️<a href="https://joesynth.wordpress.com/2021/12/27/f-droid-o-que-e/">F-Droid</a>, <a href="https://joesynth.wordpress.com/2021/12/25/xx/">Ubuntu Software</a>.
Concorrente do Evernote, nos permite escrever Markdown e HTML, inclusive tabelas.

⚫️ Dillinger.
🔗️ https://dillinger.io/
🖥️ É um editor <em>online</em>.
Usado para escrever Markdown, bem como converter na visualisação HTML.
<h6>Soft CLI</h6>
Vide <a href="https://joesynth.wordpress.com/2021/12/07/software-de-linha-de-comando/">softwares de linha de comando</a>.

<h6>Plug-ins (renderização - visualização)</h6>
Um editor que escreva o código é uma coisa, renderizar é outra! Veja alguns casos:

<strong>Bloco de Notas</strong> (Windows): escreve mas não renderiza seus documentos em Markdown.
<strong>Gedit</strong> (Ubuntu): escreve mas não renderiza, embora é possível (vide Markdown Plug-ins).
<strong>Wordpress</strong> (online): aceita marcadores de Markdown, e também renderiza.
<h6>plug-ins</h6>
<strong>Gedit</strong>: <em>plugin</em> <em>Markdown Preview</em>.
<strong>Firefox</strong>: Markdown Viewer Webext.

<strong>Chromium / Chrome: </strong>Markdown Preview Plus. Mistura <em>markdown</em> e HTML.
Instale e...
Clique em Extensions, menu superior direito, próximo menu principal.
Clique Manage Extensions; surge Markdown Preview Plus (uma caixa de alerta).
Nesta caixa clique details.
Allow access to file URLs; ligue o Toggle.
<h6>Outras aplicações Markdown</h6>
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

<h2>Sabores!</h2>
Aplicativos Markdown implementam versões ligeiramente diferentes da Markdown; são os chamados 'sabores'. Esses 'sabores' são como dialetos de uma linguagem _algo como português carioca e de Lisboa, por ex.
<h6>CommonMark</h6>
É uma proposta de sintaxe padrão para a Markdown, inclusive usada pelo <a href="https://joesynth.wordpress.com/2021/11/27/o-que-e-github/">GitHub</a>, por ex.

CommonMark: sites e projetos que adotaram:
Discourse,
GitHub,
GitLab,
Reddit,
Qt,
Stack Overflow / Stack Exchange
Swift.
<h6><em>GFM (GitHub Flavored Markdown)</em></h6>
Na verdade, e exatamente, é uma especificação baseada na <em>CommonMark</em>.


<h2>Markdown - Guia Rápido</h2>
<h6>Básico (CommonMark, Wordpress)</h6>
<pre>Parágrafo
⚠️ No Wordpress crie usando uma linha em branco.
## Título
### Título 3 # título um tanto menor.

* foo # &lt;ul&gt;&lt;li&gt;foo&lt;/li&gt;&lt;/ul&gt; (Lista não ordenada).
- idem.
⚠️ No Wordpress<em> ShiftEnter</em> cria um dentro do outro.
1. Fruta # Lista ordenada.

--- # &lt;hr /&gt;, horizontal rule, régua horizontal, linha horizontal, uma linha bem fina.

&gt; # Tag &lt;blockquote&gt;, bloco de citação.
</pre>
.
<h6>Outras (CommonMark)</h6>
<pre>*Itálico*   # Ou _Itálico_
**Negrito** # Ou __Bold__

            # 4 espaços vazios, tag &lt;pre&gt;
</pre>
Veja mais em <a href="https://commonmark.org/help/">help</a>.
<h6>Link e imagem (CommonMark)</h6>
É simples um <em>link</em>, sendo usado os colchetes e os parênteses. O texto do <em>link</em> fica dentro dos colchetes e logo em seguida dentro dos parêntesis temos a URL.

Imagem? Basta pôr uma exclamação antes.
<pre>[textoDoLink](URL) # Sintaxe Link.
[Link](http://a.com) # Sintaxe Link.
[Joe S](joesynth.wordpress.com) # Exemplo.

![textoAlternativo](URL) # Sintaxe.
![Image](http://url/a.png) # Imagem.</pre>
<h6>Tabela (GFM)</h6>
É usado os símbolos hífen (sinal de menos) e barra vertical (ou pipe, como se fala entre programadores).
<pre>
 | Fruta | Verdura |  # 'head' da tabela.
| --- | --- |
| uva | hortelã |
</pre>
Vide mais <a href="https://github.github.com/gfm/">GFM</a>.

Alinhar conteúdo da tabela.
<pre>Esquerda.
| : - - - |
| caju |
Direita.
| - - - : |
| caju |
Centro.
| : - - - : |
| caju |
Mesclar.
| :--- | :---: | ---: |
| uva | uva | uva |

</pre>

<h6>id e class (identificação única ou genérica)</h6>
Use '#' ou '.' dentro de chaves, e ao final um nome.
<pre>MeuParágrafo {#identificador}
MeuParágrafo {.minhaClasse}</pre>

<h6>Emojis</h6>
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

Outros inclui <em>shit</em>, <em>blush</em>, -1, <em>smiley</em>...
Lista com dezenas: https://gist.github.com/rxaviers/7360908
<h2>Analisador (parser)</h2>
Aplicativos Markdown usam o chamado processador Markdown (“<em>parser</em>” ou “<em>implementation</em>”).

<img class="alignleft" src="https://mdg.imgix.net/assets/images/markdown-flowchart.png?auto=format&amp;fit=clip&amp;q=40&amp;w=1080" width="307" height="64" />

Ele é usado para 'pegar' o texto formatado em Markdown e enviá-lo para o formato HTML, então seu documento pode ser visualizado em um navegador da Web _ou combinado com uma folha de estilo e impresso. Em suma temos:
<ul>
 	<li>Crie um arquivo Markdown (via o editor de texto ou um aplicativo Markdown dedicado). O arquivo deve ter uma extensão .md ou .markdown.</li>
 	<li>Abra o arquivo Markdown em um aplicativo Markdown.</li>
 	<li>Use o aplicativo Markdown para converter o arquivo Markdown num documento HTML (ou mesmo convertê-lo noutro formato de arquivo, como PDF.)</li>
 	<li>Visualize o arquivo HTML em um navegador da Web.</li>
</ul>
Ou seja, você escreve usando essa linguagem e salva um arquivo formatado em Markdown (salvando na extensão .<em>md</em>), e, também precisamos de um aplicativo Markdown capaz de processar o arquivo Markdown.

Embora chamamos de "analisador" isso é um termo um tanto impróprio _pois além de "analisar" o Markdown ele também renderiza/compila o Markdown em outra coisa, normalmente HTML.
<h2>Um pouco de história</h2>
<img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/John_Gruber%2C_2009_%28cropped%29.jpg/200px-John_Gruber%2C_2009_%28cropped%29.jpg" width="60" height="70" /> 🇺🇸 John Gruber.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Aaron_Swartz_profile.jpg/220px-Aaron_Swartz_profile.jpg" width="60" height="83" /> 🇺🇸 Aaron Swartz.
Swartz, além de Gruber, são os caras inventores da linguagem Markdown, que foi criada em 2004.
<h2>Mais links sobre o tema</h2>
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
