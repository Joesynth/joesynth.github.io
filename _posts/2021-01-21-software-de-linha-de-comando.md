# 7 Softwares de linha de comando

7 aplicações que utilizam linha de comando, em vez do *mouse* e seus cliques.  

Nada de ícones!

Pois é! Esses programas não usam interface gráfica com ícones, botões e muito menos "toquinhos" na tela. Eles funcionam só com a gente o manipulando pelo teclado _ou seja, aqui o próprio *mouse* fica pra segundo plano!

Embora seja comum se pensar nesse tipo de aplicativo como algo típico de um usuário mais avançado ou, principalmente, um programador, aqui vamos passar por aplicações mais divertidas (como é o caso de música) e outras mais de praxe.

1. Lynx
2. FFmpeg
3. VLC
4. Nano
5. youtube-dl
6. Byobu
7. Bash
8. 🎉️ Bônus!



## Lynx (web browser)

⚠️ É comum um navegador tradicional do tipo texto não possuir suporte para JS ou HTML5.

Clássico, o Lynx existe desde anos 90. É a escolha "padrão".

    sudo apt install lynx
    foo.com # Pra começar

###### Web browser: outros

**w3m**: tem algum suporte para tabela ou imagem.  
**Links**: compatível com HTML 4, oferece suporte a CSS _também JS de forma limitada.
**eLinks**: melhoria do Links.  

**links2**: tem algum suporte para imagem.

    sudo apt install links2

**Browsh**: tem suporte a HTML5, CSS, JS, pois é apoiado por um navegador real, o Firefox _inclusive a maioria das teclas e gestos do mouse devem funcionar como esperado em um navegador de *desktop*. É preciso ter o Firefox instalado, v57 ou posterior.  
Usa um motor de renderização real (Firefox headless), processando até vídeos dentro do terminal. Porém, é mais "pesado" que os outros CLIs.


## FFmpeg

<img src="https://img.icons8.com/color/2x/ffmpeg.png" width="40" />🇫🇷 FFmpeg.  
Um *framework* multimedia.
Aqui no *blog* há o tutorial <a href="https://joesynth.wordpress.com/curso-ffmpeg/">FFmpeg em Português</a>. Confira!
🖥️ Linux, Windows...
📜️ GLP.





## VLC

<img src="https://gitlab.com/uploads/-/system/project/avatar/11639020/904px-VLC_Icon.svg.png" width="40" />🇫🇷 VLC.  
<span class="Y2IQFc" lang="pt">📜️</span> <a href="https://joesynth.wordpress.com/2021/11/28/licenca-de-software/">GPL</a> e outras semelhantes.
🔗️videolan.org/vlc/
⬇️ Ubuntu Software.

###### VLC Terminal: minitutorial


<pre>cvlc -h, --help # Ou vlc --help.
cvlc --version # Ou vlc --version.</pre>

**Tocar um arquivo**.

<pre>cvlc --no-video /my/video.mp4</pre>



<pre>~/pas$ cvlc --no-video e.webm # Toca só áudio do vídeo.
Note que estamos dentro de 'pas', a pasta que contém o arquivo.

~$ cvlc --no-video ~/pas/e.webm # Toca um arquivo que está dentro da pasta 'pas', que é filha de home (onde estamos de fato).
Ou seja, podemos especificar o caminho completo.</pre>

**Tocar playlist**.

-L, --loop, --no-loop # Repete tudo.
-Z, --random, --no-random # Tocar aleatoriamente os arquivos.

<pre>cvlc -L -Z pas # Toca as músicas da pasta 'pas'. Modo aleatório (opção Z).

vlc --LZ "Party Music" # Onde "Party Music" é a pasta.

cvlc -L -Z --no-video ~/tes3
cvlc -L -Z --no-video ~/tes3/

</pre>

Ainda, no que tange o YouTube e o típico VLC, podemos reproduzir vídeos, playlists e baixar vídeo. Veja o dicas <a href="https://uniconverter.wondershare.com.br/vlc/how-to-play-youtube-videos-in-vlc-media-player.html">VLC Media Player</a>.



## Nano (GNU)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gnu-nano.svg/250px-Gnu-nano.svg.png" width="120" />GNU Nano. Famoso editor de texto CLI, está presente não só no Ubuntu, mas praticamente todos os Linux. Vide [Nano](/nano-editor-de-codigos).  É capaz de lidar com arquivos *.md*, dentre uma infinidade.
🖥️ Cross-platform.
📜️ GPL.
🔗️ nano-editor.org/

## youtube-dl

É um gerenciador de *download*. No *blog Joe Synth* há um artigo sobre ele. Veja <a href="https://joesynth.wordpress.com/2021/12/27/youtube-dl/">youtube-dl</a>.
🖥️ Linux, macOS...
📜️ Sem licença.







## Byobu (Multiplexer)

É um multiplexador de janelas. Ele é responsável por navegar em diversas janelas. Cada janela pode ter um ou mais terminais (posicionados em diversos lugares da tela). Podemos ter, por ex., uma janela aberta com 3 terminais em execução.


###### Minitutorial

**Instalação**:  

    byobu --version # Verifica se instalado.
    Command 'byobu' not found, but can be installed with # Retorno sugerindo instalar.

    sudo apt install byobu  # Comando instalação.
    byobu --version # Verificar versão novamente.
    byobu version 5.125 # Retorna dizendo a versão.
    tmux 2.6

**Iniciando no Byobu - comandos básicos**:  

    byobu # A partir desse momento já estamos no Byobu.
    ⚠️ Rodapé: há informações como SO, versão do SO, nº de núcleos do processador, janelas etc.
    man byobu # Página manual da ferramenta, mais informações.


**Terminal: criando/apagando**:  

Um terminal pode ser criado na horizontal ou vertical.  

    Shift + F2, Ctrl + F2 # Split. Cria um terminal horizontal, ou vertical.

    Shift + setinhas # Cursor, movendo.

    Shift + F11 # Toggle. Foco de um terminal ocupando 100% do tamanho da janela (fullscreen).
    ⚠️ Observe a letra Z na janela (parte inferior) indicando que existe Zoom aplicado.
    ⚠️ Demais terminais não são fechados.

    Ctrl + D # Fecha o terminal.

**Janela: criando/apagando**:  

Até o momento, todos os terminais estão sendo executados na mesma janela.  
Pelas janelas podemos navegar entre vários contextos. Cada janela podemos utilizar um conjunto de terminais específicos para um determinado fim e isso facilita a organização das atividades.  

    F2 # Cria nova janela (lado direito).

    Alt + (←→) # Navegar entre janelas.

    Ctrl + D # Fecha uma janela (precisamos fechar todos os terminais abertos via este atalho).

    Ctrl + F6 # Idem.


###### Multiplexer - Outros

GNU Screen, Tmux.



## Bash


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/960px-Bash_Logo_Colored.svg.png" width="120" />É um dos softwares de CLI mais famosos, inclusive presente (por padrão) no Ubuntu e no Lubuntu, dentre tantas outras *distros*.





## Outros


###### Programação

🇺🇸 **Node.js**.  
No campo da programação, e lidando com linguagem JS, esse ambiente é voltado ao desenvolvimento. Veja <a href="https://joesynth.wordpress.com/2021/11/27/o-que-e-node-js/">Node.Js</a>.
🔗️nodejs.org.


🇺🇸 **NPM**: Software que é um gerenciador de pacotes para o Node.js.
✏️ Isaac Z. Schlueter
✏️ npm, Inc. (GitHub/Mcrosoft).
🔗️ http://www.npmjs.com/
💽️ http://www.npmjs.com/
🖥️ Cross-platform.
📜️ Artistic License 2.0.


###### Editores de texto

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/800px-Vimlogo.svg.png" alt="Editor de texto Vim" width="80" />🇳🇱 **Vim** (*Vi IMproved*  - VI Melhorado). Editor de texto que pode lidar com JS ou Pynthon, por exemplo.
✏️ Bram Moolenaar, Anos 90.
🔗️ vim.org
📜️ Vim.


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmacsIcon.svg/64px-EmacsIcon.svg.png" width="40" />🇺🇸 GNU **Emacs**.
🔗️gnu.org/software/emacs/
🖥️ Cross-platform.
📜️ Software livre.

Há outros, como por exemplo o Ed.

**Vim e Emacs**: artigo sobre eles:
-https://www.redhat.com/sysadmin/3-text-editors-compared


###### Rede

Vide software de rede.

###### Markdown

Glow (inclusive <a href="https://joesynth.wordpress.com/2023/11/06/termux/">Termux</a>), Inlyne, Frogmouth, Mdcat (<a href="https://joesynth.wordpress.com/2021/11/27/editor-de-markdown/">CommonMark</a>), Markdown-CLI.
Markdown-it (CommonMark; Node).

.md para .html



###### Conversor

pandoc: conversor de texto.

    pandoc ar.txt -o ar.pdf
    pandoc -f markdown -t html ar.md -o ar.html


###### Game

Vide Softwares Educativos Livres.

###### Email

Himalaya, NeoMutt, meli, aerc, Alpine.

## Firewall

Vide Ferramentas Firewall.

###### Ferramentas para sysadmin


    FileZilla Pro # Uma versão CLI do FileZilla.
    CloneZilla
    Wireshark
    p7zip # 7-zip.
    Netcat
    Mosh

⚠️

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1280px-Firefox_logo%2C_2019.svg.png" width="60" />🇺🇸 **Firefox**. Embora o famoso navegador Firefox não seja um software de linha de comando, ele tem o chamado **console do desenvolvedor**, que é bem familiar de programadores. Nesse console podemos escrever textos na linguagem JavaScript.
✏️ Mozilla Foundation.
🔗️ <a href="http://mozilla.org/en-US/firefox/new/">Firefox</a>.
💽️ https://hg.mozilla.org/mozilla-central/
🖥️ Linux, macOS...
📜️ MPL.



\o_  

<!--
https://www.tecmint.com/screen-command-examples-to-manage-linux-terminals/
Byobu
https://lets00.github.io/byobu-um-poderoso-multiplexador/
-->

[oes: tit !]
