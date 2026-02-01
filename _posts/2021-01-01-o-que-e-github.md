# Github: o 'Facebook' de programadores

O que é o Github? Por que você deve estar nele?

Pra entender o <em>Github</em>, antes, é melhor vermos um <em>soft</em> chamado Git.
Então... vamos lá!?
<h3>Git</h3>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/150px-Git-logo.svg.png" width="88" /> 🇫🇮 Linus Torvalds, 2005; e mesmo 🇯🇵️Junio Hamano.
🔗️git-scm.com
🖥️ Linux, macOS, Windows...
📜️ <a href="https://joesynth.wordpress.com/2021/11/28/licenca-de-software/">GPL</a>. Escrito em <a href="https://joesynth.wordpress.com/2021/12/27/linguagens-resumo/">C</a>, etc.

Ao estilo <a href="https://joesynth.wordpress.com/2021/12/07/software-de-linha-de-comando/">CLI</a>, é um <a href="https://joesynth.wordpress.com/2021/11/28/software-livre/">software livre</a> (FOSS) bem conhecido de programadores. Ele rastreia alterações em qualquer conjunto de arquivos.
Geralmente, durante o desenvolvimento de um software, é usado para coordenar o trabalho em conjunto entre os programadores que criam o código-fonte.
<h3>GitHub</h3>
É um provedor de hospedagem na Internet, porém, voltado ao desenvolvimento de <em>software</em> e controle de versão.
Daí, para esse controle de versão (o <em>Github</em>) é usado o Git.

<img class="alignleft" src="https://p.kindpng.com/picc/s/128-1280192_github-logo-png-github-png-transparent-png.png" width="60" height="61" />

🇺🇲️ Tom Preston-Werner, Chris Wanstrath, P. J. Hyett e Scott Chacon, 2008.
🇺🇲️ Microsoft (a partir de 2018).
Escrito em <a href="https://joesynth.wordpress.com/2021/12/27/linguagens-resumo/">C</a>, <a href="https://joesynth.wordpress.com/2021/12/27/o-que-e-javascript/">JavaScript</a>...
🔗️ github.com
<h2>GitHub - Guia rápido</h2>
⛲️ YT: rbtech boson
<h3>Dicionário</h3>
<strong>branch</strong>: ramificação. # É uma cópia do master. Os <em>branchs</em> são cópias do projeto. Trabalha-se nos "<em>branchs</em>" (portanto sem alterar o <em>master</em>) podendo fazer o que quiser _e quando se tem algo definitivo faz-se o merge.
<strong>merge</strong>: unir, fundir.
<strong>master</strong>: início do projeto, arquivo inicial.
<strong>merge</strong>:

Untracked files: arquivos não rastreados.

No commits yet: ainda não há confirmações [GT]
<h3>Estados</h3>
<ul>
 	<li><strong>Modificado</strong>: está se escrevendo código no arquivo. Está se trabalhando com os arquivos agora, nesse momento.</li>
 	<li><strong>Preparado</strong>: relativo a staging area (palco).</li>
 	<li><strong>Consolidado:</strong></li>
</ul>
<h3>Comandos</h3>
O código-fonte vai se encontrar em um dos três estados.
<ul>
 	<li>git init: cria repositório, pasta "".git".</li>
 	<li>git status: saber o <em>status</em>, dizendo a situação de trabalho dum repositório _coisas como <em>commits</em>, etc. Entretanto, se abrirmos nosso editor, formos ao diretório (do repositório) e criarmos dois arquivos (por exemplo um MD e um HTML); e, dermos novamente <em>git status</em>, o Git nos dirá que há os tais arquivos novos e que devemos acampanhá-los, "<em>trackeá-los</em>" (<em>track</em>).</li>
 	<li>git add: começa a acompanhar arquivos pelo controle de versão. O <em>add</em> é dado logo após adicionarmos um arquivo. O <em>git add.</em> adiciona tudo enquanto *git add <em>.txt</em> adiciona todos somente do formato txt _a mesma ideia vale ora outros formatos. Feito isso, ao dar <em>git status</em> haverá referências ao <em>commit</em>: <em>"Changes to be commited"</em>. O <em>git add</em>, em suma, passa o arquivo para a 'sala de espera", <em>staging area</em>.</li>
 	<li>git commit: salvar as mudanças no seu projeto; é "comitar", salvar as alterações que a gente fez. Agora, ao dar <em>git status</em> surge <em>nothing to commit</em>.</li>
</ul>
xxx

xxx
<h3>Repositório</h3>
É um local de armazenamento, e, aī é mantido o projeto e suas alterações (onde tudo é gravado).

⛲️ boson
<h3>Staging Area, Snapshot e Commit</h3>
Somente os arquivos da <em>staging area</em> vão para um <em>snapshot</em>.
<ul>
 	<li><strong>.git</strong>: Subdiretório oculto que será guardado dados do seu projeto. Basicamente, o controle de versão é feito nesse diretório.</li>
 	<li><strong>Diretório de Trabalho</strong>: É a área fora do <em>.git</em>, e onde fica armazenado os arquivos que nós vamos trabalhar. É a área onde interagimos diretamente com o projeto, código-fonte.</li>
 	<li><strong>Commit</strong>: vai criar o snapshot do projeto. É registrado alterações, versões; também autor, data... Commits são ligados entre si por conexões pai-filho.</li>
 	<li><strong>Pai</strong>: O estado anterior do projeto , depois de ter feito um <em>commit</em> , é chamado de pai.</li>
 	<li><strong>Branch</strong> (ramo): o conjuto de <em>commits</em> relacionados entre si por paternidade.</li>
 	<li><strong>Merge</strong> (mescla): combinar <em>branchs</em>, onde um <em>commit</em> pode ter dois pais.</li>
</ul>
<h3>Git</h3>
Instalação. Site git-scm.com

Ele detecta seu sistema.
<h3>GitHub</h3>
O site... Video 4 de João Ribeiro.
<h5>Criar Repositório</h5>
Clique Start a project.

Clone - Já existindo repositório então fazer clonagem. Assim, seu editor de código e o repositório do GitHub poderão trocar informações.
<h3>Sequência de procedimentos</h3>
<h5>Sequência normal (no uso do Git)</h5>
<ul>
 	<li>Alteração de código - no editor, alteração de um ou mais arquivos.</li>
 	<li>(GIT) Stage - preparar os arquivos alterados pra serem enviados ao repositório. Ex.: seleciona-se os arquivos alterados que serão atualizados ou não no repositório.</li>
 	<li>(GIT) Commit - mensagem associada a atualização do repositório.</li>
 	<li>(GIT) Push - procedimento que vau enviar os arquivos pro repositório.</li>
</ul>
<h5>Equipe</h5>
Trabalhando em equipe pode ocorrer situação de ambiguidade. É o caso de alguém alterar um arquivo em que outra pessoa também estava a trabalhar nele.
<ul>
 	<li>Alteração de código.</li>
 	<li>...Push.</li>
 	<li>(GIT) Deteta alterações no repositório.</li>
 	<li>(GIT) Pull.</li>
</ul>
Ainda há o Merge, nesse contexto de mais de um desenvolvedor.

(<a href="https://youtu.be/uwLR56kozX4">https://youtu.be/uwLR56kozX4</a>)

Batatinha...

xx

\o/

<hr />

<img class="alignnone size-full wp-image-19277" src="https://joesynth.files.wordpress.com/2021/10/aprenda_programacao.png" alt="Aprenda Programação - HTML - JS - CSS" width="640" height="360" />

Veja também:
○ <a href="https://joesynth.wordpress.com/curso-sintese-sonora/">Curso Síntese Sonora Ilustrada</a>.
○ <a href="///home/joe/appjoB/profissionais-de-informatica.html">Profissionais de Informática</a>.
[oes: ]
