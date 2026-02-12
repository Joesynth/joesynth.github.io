# Nano - Editor de códigos

📑️ Antes de continuar essa leitura é recomendado ver Atalhos do Teclado e mesmo [Profissionais de Informática](/profissionais-de-informatica).

Aqui passaremos pelos seguintes temas:
<ul>
 	<li>Nano.</li>
 	<li>Primeiras noções.</li>
 	<li>Primeiros comandos.</li>
 	<li>Comandos.</li>
 	<li>Vários arquivos e <em>buffer</em>.</li>
 	<li>Alguns termos.</li>
 	<li>Configuração.</li>
 	<li>Exercícios.</li>
</ul>


## Nano

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gnu-nano.svg/64px-Gnu-nano.svg.png" width="40" height="40" /> **Nano** (GNU).  
O editor de códigos Nano é muito simples de usar, e há quem o prefira do que o famoso (e poderoso) vi ou o Emacs. Ele se destaca por ser bem prático quando se quer editar um único arquivo de forma rápida e objetiva. O Nano está presente no Termux e em distribuições como Ubuntu ou Slackware, por ex. 

🔗️ nano-editor.org  
✏️ Chris Allegretta ☆ 1999.  
🖥️ <em>Cross-platform</em>.  
📜 GPL.  


Das várias características destacamos:


<ul>
 	<li>Sintaxe para <a href="https://joesynth.wordpress.com/2021/11/27/html-css-e-js/">CSS</a>, <a href="https://joesynth.wordpress.com/2021/12/27/o-que-e-javascript/">JS</a>, <a href="https://joesynth.wordpress.com/2021/11/27/shell-scripting-bash-scripting/">Bash Scripting</a>, <a href="https://joesynth.wordpress.com/2021/11/27/editor-de-markdown/">markdown</a>...</li>
 	<li>Pesquisa de palavras.</li>
 	<li>Substituição de palavras.</li>
 	<li>Recuar automaticamente.</li>
 	<li>Aceita colar emoji nele.</li>
 	<li>É capaz de lidar com arquivos .md (<a href="https://joesynth.wordpress.com/2021/11/27/tutorial-de-markdown/">Markdown</a>).</li>
</ul>


## Primeiras noções
 
Ao abrir o programa surge...  

<img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Nano_2.1.2-svn.png" alt="" width="310" />
<em><strong>Top</strong></em>: cabeçalho e escrito "GNU nano e versão", "Novo Buffer" e "Modificado" (este devido já entrarmos algum texto).
<em><strong>Centro</strong></em>: a área de texto, sendo a maior bem no meio.
<em><strong>Rodapé</strong></em>: é uma 'cola', uma ajuda, <em>help</em>. Há algumas opções de teclas que podemos usar.  Logo acima desse rodapé surge, por vezes, algumas mensagens (coisas como número de linhas, colunas etc).

## Primeiros comandos

Sintaxe do quadro abaixo:
<pre>a     # Um comando.
a b   # Dois comandos com certa relação.
a ()  # Comando e atalho.</pre>
⚠️ Conforme o manual do Nano:
Tecla Alt = Tecla Meta = letra M.
Ctrl = ^ .
<pre>nano --version # Versão, site...
nano --help # Mostra teclas que podemos usar.
nano # Abre o programa.
CtrlG (F1) # Já dentro do Nano, exibe o help.
Alt3    # Toggle comenta/'descomenta' linha/região.
nano -h    # help. Lista de opções.

    ## Terminal

CtrlZ      # Suspende (voltando ao terminal), e retorna ao Nano.
F11      # Toggle, Zoom.
Ctrl-, Ctrl0 # Zoom e zoom volta ao normal.
</pre>
.
## Comandos

<h6>Abrir</h6>

Há várias formas de abrir o Nano, onde podemos utilizar as *flags*.
<pre>nano   # Abre o Nano.
nano -$ || --softwrap # Abre nano com softwrap.
nano -l # line numbers. Números de linha.
nano -i # autoindent. Abre nano com "auto recuar" ligado.
nano -$ -l -i # Abre com softwrap, linenumbers, autoindent.

nano -S || --smooth (suave) # Abre no modo suave. Texto rola linha por linha, em vez de bloco, quando usamos as setinhas.

nano -x  # nohelp. Modo especialista (não mostra as duas linhas da parte inferior).

nano -c foo.md # constantshow. Mostrar constantemente a posição do cursor. Posição é exibida no rodapé.

nano -v foo.md # View, ver. Modo leitura.
nano arq1 arq2 # Dois arquivos.
nano -c -l -i arq.htm # Abre com "constantshow", "line numbers", "autoindent", sintaxe HTML.

  ## Realce de sintaxe especifique o arquivo
foo.css # Para linguagem.
foo.js # Para linguagem JS.
foo.sh # Para Bash Scripting.
foo.md # Para markdown.

nano +4,8 arq # Abre com cursor na linha4, coluna8 (opcional). Útil para arquivos grandes. nano /var/log/auth.log 

CtrlR, F5 # <strong>R</strong>ead File. Insere outro arquivo no atual.
</pre>
<strong>.</strong>
<h6>Fechar, sair</h6>
.
<pre>CtrlX (F2)  # E<strong>x</strong>it, sair. Fecha atual buffer de arquivo.
         Você pode ser perguntado quanto a salvar o buffer modificado. Pode-se renomear.
CtrlO (F3) Enter # Save.
            Escreve atual arquivo no disco.

CtrlO (F3)  # Write <strong>O</strong>ut. Save As.
         Dado o CtrlO, então escreva um nome (ou renomeie) e extensão, e Enter no final.

???       Sai sem salvar.
</pre>
.
<h6>Edição de texto: copia, deleção e undo</h6>
<pre>   ## Edição de texto - Linha ou palavra

CtrlK    # ex<strong>C</strong>lui linha, 'deleta' linha.
CtrlK    # <strong>C</strong>orta para o buffer.


⚠️ CtrlK, notas:
- cursor pode estar em qualquer lugar da linha ao dar o comando.
- corta atual linha e armazena no "cutbuffer".
- não precisa selecionar antes.
- se selecionar palavra, exclui (ou corta) só a palavra pro buffer.
- com CtrlU duplica linha.

CtrlK CtrlU # Cut text, <strong>U</strong>ncut Text. Estilo CtrlX/CtrlV; corta e cola.

AltU   # Undo

F9      # idem CtrlK

Alt6       # Copia linha para o buffer; copia linha/região.
 
Alt6 CtrlU # CtrlC CtrlV, copia e cola.
           ⚠️ Duplica linha.



Ctrl6 AltA # Mark, marcar. Estilo Shift+Setinhas: seleção.

</pre>
🖱️ <em>Copy/Paste</em> via mouse:
Selecione uma palavra com as teclas e, em cima dessa seleção, clique com direito do <em>mouse</em>.
<h6>Pesquisa e substituição</h6>
<pre>CtrlW (F6) # <strong>W</strong>here is, search. Pesquisa.
Ctrl\      # Replace. Pesquisa para substituir; e substituir em si.

AltR       # <strong>R</strong>eplace, substituir.
           Substituir uma palavra ou expressão regular.</pre>
.
<h6>Navegação (cursor/tela)</h6>
<pre>CtrlY, V  (PageUp, Dn) Rola página (tela) pra trás,frente; vai tela acima/abaixo. 

CtrlI (Tab)   # O mesmo que Tab.

    ## Cursor
CtrlC   # Exibe a posição do cursor no rodapé; linha, coluna...
AltG [Ctrl_]  # Põe o cursor em tal linha.

M-]  # Vai para o colchete correspondente.

∇ ∆ Ctrl # Move cursor linha a linha ou parágrafo a parágrafo.

Pg Up, Pg Dn # Move cursor para cima ou para baixo.
</pre>
.
<h6>Embelezamento</h6>
Alguns comandos relacionados à estética de texto.
<pre>CtrlJ (F4) # Justify, justificar (o atual parágrafo).</pre>
<h6>Outros recursos</h6>
<pre>CtrlT (F12) # Spell checking. Invocar o verfificador ortográfico.

Ctrl+]  # Completa atual palavra.

Alt]     # Bracket, correlaciona.</pre>
Mais atalhos:
🔗️ https://www.nano-editor.org/dist/latest/cheatsheet.html
<h6>Interface</h6>
<pre>Alt+X  # Help (toggle).
Ctrl+G # Help (toggle).
Alt+P  # Whites<strong>P</strong>pace (toggle).

Ctrl-  # Zoom. Diminui o tamanho da fonte).
Ctrl0  # Zoom (Normal Size).
⚠️ Ambos os 'zoom', na verdade, são atalhos do Terminal em si.
</pre>
.
<h6>Marcador (âncora)</h6>
update

## Vários arquivos e buffer
 
<strong>buffer</strong> Ao abrir o editor Nano (comando nano no terminal do Linux), é aberto um novo <em>buffer</em>, que é a área da memória que contém o que vamos digitar. Depois poderemos salvar num arquivo.

Surge '<em>File to insert into new buffer</em>'
Dê um nome, por ex.: teste.md.
<pre>nano -F /etc/fstab # O Nano possui o recurso de trabalhar com vários arquivos na memória.


Alt&lt; Alt&gt; # Switch, mudar, trocar. Alterna entre 2 arquivos abertos.
</pre>
.
## Configuração

<h6>Configuração via arquivo</h6>

É feita via arquivo, que aceita uma série de comandos <em>set</em> e <em>unset</em> , que podem ser usados ​​para configurar o nano na inicialização sem usar opções de linha de comando. Além disso, existem alguns comandos para definir o <em>realce</em> de sintaxe e para religar chaves - veja as duas seções separadas sobre eles. nano lê um comando por linha.

###### Arquivo de configuração

Há dois:
<strong>etc/nanorc</strong>: configurações de todo o sistema.
⚠️ O caminho pode ser diferente conforme seu sistema.

<strong>~/.nanorc</strong>: configurações específicas do usuário.
⚠️ Ou...
<strong>$XDG_CONFIG_HOME /nano /nanorc</strong> ou de <strong>~/.config/nano/nanorc</strong>, o que for encontrado primeiro.
<h6>Roteiro de configuração</h6>
<pre>touch ~/.nanorc # Crie o arquivo.

nano ~/.nanorc # Abra-o no Nano.

Escreva dentro do arquivo:

set linenumbers
set autoindent
set softwrap

Salve o arquivo, saia do programa.

cat .nanorc # Veremos o trabalho feito.

nano # Abre o nano já com a nova configuração.

</pre>
⚠️
<em>"Já em sistemas Linux e Unix-like em geral, o ponto não é, necessariamente, parte do nome do arquivo. Mas se o nome começar com um ponto, como em .htaccess, isso denota que aquele arquivo é oculto." [<a class="text-entity-link" dir="auto" title="https://hardware.com.br" href="https://hardware.com.br" target="_blank" rel="noopener noreferrer">hardware.com.br</a>]</em>
<em>"No Linux, tudo o que começa com um . é considerado um arquivo oculto"</em>
<em>[</em><a class="text-entity-link" dir="auto" title="https://freecodecamp.org" href="https://freecodecamp.org" target="_blank" rel="noopener noreferrer"><em>freecodecamp.org</em></a>]

## Exercícios

<h6>Exercício 1.</h6>
A partir de um arquivo com vários emojis misturados, organize-os.
Use extensão .md no seu arquivo final.
Coloque os comentários.
<pre>Ex:
# Bichos.
aqui emojis de bichos
# Frutas.
aqui emojis de fruta
# Bandeiras.
aqui emojis de bandeiras</pre>
<h6>Exercício 2.</h6>
A partir de um texto qualquer com dois assuntos, separe cada um num arquivo próprio.
Use extensão .md no seu arquivo final, por ex., tema1.md e tema2.md.
Coloque os comentários.

👉 Brinque e pratique bastante com o Nano, pois ele é simples, poderoso e presente nos Linux.

É isso! Grande abraço.
🔗️ Ouça Joe S no Bandcamp: <a href="http://www.joesynth.bandcamp.com">JoeSynth.bandcamp.com</a>.
🔗️ Siga no Instagram: @joe_synth

\o_
<!--
-https://ubunlog.com/pt/nanorc-configurar-editor-de-texto/
-https://www.nano-editor.org/dist/v2.9/nanorc.5.html
-https://www.nano-editor.org/dist/v2.9/nanorc.5.html
YT
-https://youtu.be/wgpKy7oT-MI
-https://youtu.be/Gw_MHy6_0UU
-https://youtu.be/HukESMnY4GM
-https://youtu.be/5mEkoRo4tyQ
-https://youtu.be/x_vdS0cFqJw
-->

<img src="https://joesynth.files.wordpress.com/2021/10/aprenda_programacao.png" alt="Aprenda Programação - HTML - JS - CSS" width="410" />
