# 7 Softwares de linha de comando

Nada de *mouse* e ícones!  

📚️ CLI: interface de linha de comando.  

Os programas aqui mostrados não usam interface gráfica. Portanto, em vez do *mouse* e cliques na tela do computador, a interação com o sistema é feita com a gente manipulando o teclado, assim, o próprio *mouse* fica pra segundo plano!  

Embora seja comum pensarmos nesse tipo de aplicativo como sendo algo típico de um usuário avançado, um programador, por ex., aqui vamos passar por 7 aplicações que utilizam linha de comando, incluindo algumas mais divertidas (como música).  


1. Lynx (web browser)
2. FFmpeg
3. VLC (reprodutor multimídia)
4. Nano
5. Ninvaders (jogo)
6. Byobu (Multiplexer)
7. Bash

E ainda..

- 🎉️ Bônus!
- Minitutorial - VLC e Byobu


## Lynx (web browser)

Clássico, o Lynx existe desde anos 90. É a escolha "padrão".  

    sudo apt install lynx
    lynx foo.com # Pra começar



⚠️ É comum um navegador tradicional do tipo texto não possuir suporte para JS ou HTML5.  

###### Web browser: outros

**w3m**: tem algum suporte para tabela ou imagem.  
**Links**: compatível com HTML 4, oferece suporte a CSS _também JS de forma limitada.  
**eLinks**: melhoria do Links.  

**links2**: tem algum suporte para imagem.  


    sudo apt install links2


**Browsh**: tem suporte a HTML5, CSS, JS, pois é apoiado por um navegador real, o Firefox _inclusive a maioria das teclas e gestos do mouse devem funcionar como esperado em um navegador de *desktop*. É preciso ter o Firefox instalado, v57 ou posterior.  
Usa um motor de renderização real (Firefox headless), processando até vídeos dentro do terminal. Porém, é mais "pesado" que os outros CLIs.  



## FFmpeg

<img src="https://img.icons8.com/color/2x/ffmpeg.png" width="40" />Um *framework* multimídia. No *blog* há o tutorial FFmpeg em Português. Confira!  
🇫🇷 Fabrice Bellard.  
🖥️ Linux, Windows...  
📜️ GPL.  




## 🇫🇷 VLC

<img src="https://gitlab.com/uploads/-/system/project/avatar/11639020/904px-VLC_Icon.svg.png" width="40" />Reprodutor multimídia capaz de lidar com áudio, vídeo e *streaming*.  
📜️ GPL e outras semelhantes.  
🔗️videolan.org/vlc/  
⬇️ Ubuntu Software.  

👉️ **youtube-dl**: uma outra experiência multimídia, diferente e mais avançada. O *youtube-dl* é um gerenciador de *download*.  
🖥️ Linux, macOS...  
📜️ *Unlicense* (Domínio Público).  




## Nano (GNU)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gnu-nano.svg/250px-Gnu-nano.svg.png" width="120" />GNU Nano. Famoso editor de texto CLI, está presente não só no Ubuntu, mas praticamente todos os Linux. Vide [Nano](/nano-editor-de-codigos). É capaz de lidar com arquivos *.md*, dentre uma infinidade.  
🖥️ Cross-platform.  
📜️ GPL.  
🔗️ nano-editor.org/  


## Ninvaders (jogo)

<img src="https://itsfoss.com/content/images/2023/07/ninvaders.png" width="120" />O clássico jogo do final dos anos 70 Space Invaders, mas aqui o temos na CLI.  

    sudo apt update
    sudo apt install ninvaders




## Byobu (Multiplexer)

É um multiplexador de janelas. Ele é responsável por navegar em diversas janelas. Cada janela pode ter um ou mais terminais (posicionados em diversos lugares da tela). Podemos ter, por ex., uma janela aberta com 3 terminais em execução.  


###### Multiplexer - Outros

GNU Screen, Tmux.  



## Bash


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/960px-Bash_Logo_Colored.svg.png" width="120" />É um dos softwares de CLI mais famosos do mundo, padrão de quase todas as distribuições Linux, inclusive presente no Ubuntu e no Lubuntu.  




## 🎉️ Bônus!

Outros softwares:

- Programação
- Editores de texto
- Rede
- Markdown
- Conversor
- Game
- Email
- Firewall
- Ferramentas para sysadmin

Minitutorial:  

- VLC
- Byobu




###### Programação

🇺🇸 **Node.js**.  
Lidando com linguagem JS, esse ambiente é voltado ao desenvolvimento. Veja Node.Js.  
🔗️nodejs.org.  



🇺🇸 **NPM**: Software que é um gerenciador de pacotes para o Node.js.  
✏️ Isaac Z. Schlueter.  
✏️ npm, Inc. (GitHub/Microsoft).  
🔗️ http://www.npmjs.com/  
💽️ http://www.npmjs.com/  
🖥️ Cross-platform.  
📜️ Artistic License 2.0.  



###### Editores de texto

**Vim** (*Vi IMproved*  - VI Melhorado). Pode lidar com JS ou Pynthon, por exemplo.  
🇳🇱 Bram Moolenaar, Anos 90.  
🔗️ vim.org  
📜️ Vim.  

🇺🇸 GNU **Emacs**.  
🔗️gnu.org/software/emacs/  
🖥️ Cross-platform.  
📜️ Software livre.  

Há outros, como por exemplo o Ed.  


**Vim e Emacs**: artigo sobre eles:  

https://www.redhat.com/sysadmin/3-text-editors-compared  


###### Rede

Vide [software de rede](/software-de-rede).  


###### Markdown

Glow (inclusive Termux), Inlyne, Frogmouth, Mdcat (CommonMark), Markdown-CLI.  
Markdown-it (CommonMark; Node).  

.md para .html  


###### Conversor

pandoc: conversor de texto.  

    pandoc ar.txt -o ar.pdf
    pandoc -f markdown -t html ar.md -o ar.html


###### Game

Vide [Softwares Educativos Livres](/softwares-educacionais-livres).  


###### Email

Himalaya, NeoMutt, meli, aerc, Alpine.  


###### Firewall

Vide [Ferramentas Firewall](/firewall-ferramentas).  


###### Ferramentas para sysadmin


    FileZilla Pro # Uma versão CLI do FileZilla.
    CloneZilla
    Wireshark
    p7zip # 7-zip.
    Netcat
    Mosh

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1280px-Firefox_logo%2C_2019.svg.png" width="60" />🇺🇸 **Firefox**. Embora o famoso navegador Firefox não seja um software de linha de comando, ele tem o chamado **console do desenvolvedor**, que é bem familiar de programadores. Nesse console podemos escrever textos na linguagem JavaScript.  
✏️ Mozilla Foundation.  
🔗️ Firefox.  
💽️ https://hg.mozilla.org/mozilla-central/  
🖥️ Linux, macOS...  
📜️ MPL.  



## Minitutorial - VLC e Byobu




###### VLC Terminal


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

Ainda, no que tange o YouTube e o típico VLC, podemos reproduzir vídeos, playlists e baixar vídeo. Veja o dicas VLC Media Player.  



###### Minitutorial - Byobu (Multiplexer)

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



{% include final.html %}

\o_  

<!--
https://www.tecmint.com/screen-command-examples-to-manage-linux-terminals/
Byobu
https://lets00.github.io/byobu-um-poderoso-multiplexador/
-->

