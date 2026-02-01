# 14 Softwares de linha de comando

14 aplicações que utilizam linha de comando, em vez do <em>mouse</em> e seus cliques.  

Nada de ícones!

Pois é! Esses programas não usam interface gráfica com ícones, botões e muito menos "toquinhos" na tela. Eles funcionam só com a gente o manipulando pelo teclado _ou seja, aqui o próprio <em>mouse</em> fica pra segundo plano!

Embora seja comum se pensar nesse tipo de aplicativo como algo típico de um usuário mais avançado ou, principalmente, um programador, aqui vamos passar por aplicações mais divertidas (como é o caso de música) e outras mais de praxe.
<h2>Web browser</h2>
<h6>Firefox</h6>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/62px-Firefox_logo%2C_2019.svg.png" width="40" height="41" />🇺🇸  <strong>Firefox</strong>.
✏️ Mozilla Foundation.
🔗️ <a href="http://mozilla.org/en-US/firefox/new/">Firefox</a>.
💽️ https://hg.mozilla.org/mozilla-central/
🖥️ Linux, macOS...
📜️ MPL.
Embora o famoso navegador Firefox não seja um soft de linha de comando, ele tem o chamado <a href="https://joesynth.wordpress.com/2021/11/27/console-do-desenvolvedor/">console do desenvolvedor</a>, que é bem familiar de programadores. Nesse console podemos escrever textos na linguagem JavaScript.
<h6>Browsh</h6>
Navegador moderno e baseado em texto, linha de comando. É comum um navegador tradicional do tipo texto não possuir suporte para JS ou HTML5, diferente de Browsh. Browsh também suporta CSS3 e é apoiado por um navegador real, o Firefox _inclusive a maioria das teclas e gestos do mouse devem funcionar como esperado em um navegador de <em>desktop</em>. É preciso ter o Firefox instalado, v57 ou posterior.
<h6>Links</h6>
Compatível com HTML 4, oferece suporte pra CSS _também JS de forma limitada.
<h6>links2</h6>
<pre>sudo apt install links2</pre>
<h6>Lynx</h6>
<pre>sudo apt install lynx
lynx <a class="text-entity-link" dir="auto" title="https://foo.com/" href="https://foo.com" target="_blank" rel="noopener noreferrer">foo.com</a> # Pra começar.

</pre>
Outros: w3m, eLinks.
<h2>Música, áudio &amp; vídeo</h2>
<h6>FFmpeg</h6>
<img class="alignleft" src="https://img.icons8.com/color/2x/ffmpeg.png" width="40" />🇫🇷
🖥️ Linux, Windows...
📜️ GLP.
Um <a href="https://joesynth.wordpress.com/2021/11/27/frameworks/"><em>framework</em></a> multimedia.
Aqui no <em>blog</em> há o tutorial <a href="https://joesynth.wordpress.com/curso-ffmpeg/">FFmpeg em Português</a>. Confira!
<h6>youtube-dl</h6>
<img class="alignleft" style="width: 150px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Youtube-dl_downloading_Big_Buck_Bunny.png/300px-Youtube-dl_downloading_Big_Buck_Bunny.png" /> 🖥️ Linux, macOS...
📜️ Sem licença.
É um gerenciador de <em>download</em>. Aqui no <em>blog <a href="https://joesynth.wordpress.com/2017/08/11/joe-s-discografia/">Joe Synth</a></em> há um artigo sobre ele: veja <a href="https://joesynth.wordpress.com/2021/12/27/youtube-dl/">youtube-dl</a>.
<h6>VLC</h6>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/VLC_Icon.svg/100px-VLC_Icon.svg.png" width="40" height="45" />🇫🇷 VLC.
🔗️videolan.org/vlc/
<span class="Y2IQFc" lang="pt">📜️</span> <a href="https://joesynth.wordpress.com/2021/11/28/licenca-de-software/">GPL</a> e outras semelhantes.
⬇️ Ubuntu Software.

<strong>vlc terminal: mini tutorial</strong>
<pre>cvlc -h, --help # Ou vlc --help.
cvlc --version # Ou vlc --version.</pre>
<strong>Tocar um arquivo</strong>.
<pre>cvlc --no-video /my/video.mp4</pre>
.
<pre>~/pas$ cvlc --no-video e.webm # Toca só áudio do vídeo.
Note que estamos dentro de 'pas', a pasta que contém o arquivo.

~$ cvlc --no-video ~/pas/e.webm # Toca um arquivo que está dentro da pasta 'pas', que é filha de home (onde estamos de fato).
Ou seja, podemos especificar o caminho completo.</pre>
<strong>Tocar playlist</strong>.

-L, --loop, --no-loop # Repete tudo.
-Z, --random, --no-random # Tocar aleatoriamente os arquivos.
<pre>cvlc -L -Z pas # Toca as músicas da pasta 'pas'. Modo aleatório (opção Z).

vlc --LZ "Party Music" # Onde "Party Music" é a pasta.

cvlc -L -Z --no-video ~/tes3
cvlc -L -Z --no-video ~/tes3/

</pre>
Ainda, no que tange o YouTube e o típico VLC, podemos reproduzir vídeos, playlists e baixar vídeo. Veja o dicas <a href="https://uniconverter.wondershare.com.br/vlc/how-to-play-youtube-videos-in-vlc-media-player.html">VLC Media Player</a>.
<h2>Programação</h2>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png" width="60" height="37" />🇺🇸 <strong>Node.js</strong>.
🔗️nodejs.org.
Lidando com linguagem JS, esse ambiente é voltado ao desenvolvimento. Veja <a href="https://joesynth.wordpress.com/2021/11/27/o-que-e-node-js/">Node.Js</a>.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/220px-Npm-logo.svg.png" width="59" height="23" /> 🇺🇸 <strong>NPM</strong>.
✏️ Isaac Z. Schlueter
✏️ npm, Inc. (GitHub/Mcrosoft).
🔗️ http://www.npmjs.com/
💽️ http://www.npmjs.com/
🖥️ Cross-platform.
📜️ Artistic License 2.0.
Software que é um gerenciador de pacotes para o <a href="https://joesynth.wordpress.com/2021/11/27/o-que-e-node-js/">Node.js</a>.
<h2>Editores de texto</h2>
<img class="alignleft" style="width: 40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/800px-Vimlogo.svg.png" alt="Editor de texto Vim" width="80" />

🇳🇱 <strong>Vim</strong> (<em>Vi IMproved</em>  - VI Melhorado).
✏️ Bram Moolenaar, Anos 90.
🔗️ vim.org
📜️ Vim.
Editor de texto que pode lidar, por exemplo, com JS ou Pynthon. Vide <a href="https://joesynth.wordpress.com/2021/11/27/vim/">Vim</a>.

<img class="alignleft" style="width: 40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gnu-nano.svg/64px-Gnu-nano.svg.png" /> GNU <a href="https://joesynth.wordpress.com/2021/11/28/editor-nano/">Nano</a>.
🔗️ nano-editor.org/
🖥️ Cross-platform.
📜️ GPL.
Editor de texto.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmacsIcon.svg/64px-EmacsIcon.svg.png" width="40" height="40" />🇺🇸 GNU <strong>Emacs</strong>.
🔗️gnu.org/software/emacs/
🖥️ Cross-platform.
📜️ Software livre.

Há outros, como por exemplo o Ed.

<strong>Vim, Nano e Emacs</strong>: artigo sobre eles:
-https://www.redhat.com/sysadmin/3-text-editors-compared
<h2>Multiplexer</h2>
GNU Screen, Tmux, Byobu...
<h6>Byobu - minitutorial</h6>
É um multiplexador de janelas. Ele é responsável por navegar em diversas janelas. Cada janela pode ter um ou mais terminais (posicionados em diversos lugares da tela). Podemos ter, por ex., uma janela aberta com 3 terminais em execução.

<strong>Instalação</strong>:
<pre>byobu --version # Verifica se instalado. Se não exibir o número da versão atual, precisamos instalar o software.

Command 'byobu' not found, but can be installed with # Retorno, sugerindo instalar.

sudo apt install byobu  # Comando instalação.

byobu --version # Agora digitamos a versão novamente.

byobu version 5.125 # Retorna dizendo a versão.
tmux 2.6</pre>
<strong>Iniciando no Byobu - comandos básicos</strong>:
<pre>byobu # A partir desse momento já estamos no Byobu.
⚠️ Rodapé: há informações como SO, versão do SO, nº de núcleos do processador, janelas etc.

man byobu # Página manual da ferramenta, mais informações.</pre>
<strong>Terminal: criando/apagando</strong>:

Um terminal pode ser criado na horizontal ou vertical.
<pre>Shift + F2, Ctrl + F2 # Split. Cria um terminal horizontal, ou vertical.

Shift + setinhas # Cursor, movendo.

Shift + F11 # Toggle. Foco de um terminal ocupando 100% do tamanho da janela (fullscreen).
⚠️ Observe a letra Z na janela (parte inferior) indicando que existe Zoom aplicado.
⚠️ Demais terminais não são fechados.

Ctrl + D # Fecha o terminal.</pre>
<strong>Janela: criando/apagando</strong>:

Até o momento, todos os terminais estão sendo executados na mesma janela.
Pelas janelas podemos navegar entre vários contextos. Cada janela podemos utilizar um conjunto de terminais específicos para um determinado fim e isso facilita a organização das atividades que$
<pre>F2 # Cria nova janela (lado direito).

Alt + (←→) # Navegar entre janelas.

Ctrl + D # Fecha uma janela (precisamos fechar todos os terminais abertos via este atalho).

Ctrl + F6 # Idem.</pre>
<h2>Outros</h2>
<h6>Rede</h6>
Vide <a href="https://joesynth.wordpress.com/2021/11/28/software-de-rede/">software de rede</a>.
<h6>Markdown</h6>
Glow (inclusive <a href="https://joesynth.wordpress.com/2023/11/06/termux/">Termux</a>), Inlyne, Frogmouth, Mdcat (<a href="https://joesynth.wordpress.com/2021/11/27/editor-de-markdown/">CommonMark</a>), Markdown-CLI.
Markdown-it (CommonMark; Node).

.md para .html

⚠️ O <a href="https://joesynth.wordpress.com/2021/11/28/editor-nano/">Nano</a> é capaz de lidar com arquivos .md.
<h6>Conversor</h6>
pandoc: conversor de texto.
<pre>pandoc ar.txt -o ar.pdf
pandoc -f markdown -t html ar.md -o ar.html</pre>
<h6>Game</h6>
Vide <a href="https://joesynth.wordpress.com/2023/12/31/softwares-educacionais-livres/">Softwares Educativos Livres</a>.
<h6>Email</h6>
Himalaya, NeoMutt, meli, aerc, Alpine.
<h6>Firewall</h6>
Vide <a href="https://joesynth.wordpress.com/2021/12/17/firewall-ferramentas/">Ferramentas Firewall</a>.
<h6>Ferramentas para sysadmin</h6>
<pre>FileZilla Pro # Uma versão CLI do FileZilla.
CloneZilla
Wireshark
p7zip # 7-zip.
Netcat
Mosh</pre>
<em>E é isso! <a href="https://joesynth.wordpress.com/sobre/">Joe S</a> é músico/programador e fã de fotografia, bike..</em>.

\o_

<!--
https://www.tecmint.com/screen-command-examples-to-manage-linux-terminals/
Byobu
https://lets00.github.io/byobu-um-poderoso-multiplexador/
-->

<hr />

<img class="alignnone size-full wp-image-19277" src="https://joesynth.files.wordpress.com/2021/10/aprenda_programacao.png" alt="Aprenda Programação - HTML - JS - CSS" width="640" height="360" />

Veja também:
○ <a href="https://joesynth.wordpress.com/curso-sintese-sonora/">Curso Síntese Sonora Ilustrada</a>.
○ <a href="https://joesynth.wordpress.com/2021/11/27/o-que-e-cli/">O que é CLI</a>.
○ <a href="https://joesynth.wordpress.com/2021/12/27/cli-e-gui/">CLI e GUI</a>.
○ <a href="https://joesynth.wordpress.com/2021/12/07/ferramentas-para-rede/">Ferramentas de rede</a>.
[oes: tit !]
