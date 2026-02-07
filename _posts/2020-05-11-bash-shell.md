

<h1>Bash shell</h1>



Olá!
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/216px-Gnu-bash-logo.svg.png" width="141" height="60" /> <span style="color: #999999"><em>The Bourne-Again Shell</em></span>.
Antes de passar por este tutorial é recomendável que leia:
🔗 <a href="https://joesynth.wordpress.com/2021/12/12/linux/">Linux: um tutorial essencial</a>.

Comandos:
<ul>
 	<li>Comandos básicos.</li>
 	<li>Diretório.</li>
 	<li>Arquivo.</li>
 	<li>Símbolos, caracteres e afins.</li>
 	<li>Sudo.</li>
 	<li>Rede.</li>
 	<li>Usuário (rede).</li>
 	<li>Transferência de dados.</li>
 	<li>Outros comandos.</li>
 	<li>Linux SO.</li>
 	<li>Hardware: memória, disco.</li>
 	<li>bc (basic calculator).</li>
 	<li>Instalação de pacotes.</li>
 	<li>Comandos informativos.</li>
 	<li>Inicialização e encerramento.</li>
 	<li>Comandos de comunicação.</li>
 	<li>Processos do Linux.</li>
 	<li>Portas e sockets.</li>
 	<li>Configuração Linux.</li>
</ul>
Adendo:
<ul>
 	<li>Apps CLIs: dicas de instalação.</li>
 	<li>Modo texto modo gráfico.</li>
 	<li>Dicionário de comandos.</li>
</ul>
<h2>⌨️ Comandos</h2>
Há centenas de comandos no Linux, e aqui vamos passar por muitos deles.
<pre>Legenda:
# comentário em um código.
🐧️ só funciona em Ubuntu, não Termux.
📱 Termux (vide capítulo).
⚠️ atenção
🚩 Flag (opção de um comando).
⚙️ Sintaxe.

</pre>
<h2>⌨️ Comandos básicos</h2>
<pre>date, #, echo, echo $SHELL, history.

exit # Terminar a sessão, ou seja, a shell.
clear (CtrlL) # Limpa o conteúdo atual na tela.
🐧️ firefox, 🐧️ gedit
🐧️ q, shutdown, bash --version, man, info
Vide <a href="https://joesynth.wordpress.com/2021/12/12/linux/">Linux - básicos</a>.
 
</pre>
.
<h3>Comandos de Gestão de Arquivos e Diretórios</h3>
quota: Mostra-nos o uso do disco e os limites.

Ubuntu pede pra instalar!
<h6>Arquivo - Outros</h6>
Vide Termux.
<h2>📘 Ajuda e documentação</h2>
info: Abre o explorador de informações.
<pre>info --help, version, man info</pre>
Vide Termux.

.
<h6>Comandos de informação de estado</h6>
date, history, pwd, whois.
<pre>history -c # Limpa o histórico corrente.</pre>
<h2>👧 Gerenciamento de pastas e arquivos</h2>
<h2>📂️ Diretório</h2>
<pre></pre>
<h6>🤩 Diretórios famosos</h6>
<pre>~ # é outro nome pra <em>home</em>. Representa seu diretório pessoal ou /home/user.

/ # é diretório raiz. Equivale ao "C:" do Win. Aí fica todas as pastas do sistema.

/home/joe # é o diretório padrão do meu usuário, é tipo "meus documentos".

Desktop # <span style="color: #0000ff">área de trabalho</span> é um diretório que fica dentro de /home/joe.</pre>
<h6>👁️ Exibir: ls</h6>
<strong>ls</strong> <em>list</em>; listar, lista. Lista conteúdo do diretório atual.

🚩
-d (--directory)
-a (--all)
-R (--recursive)
<pre>Vide Termux para básicos.

ls -l # lista arquivos e diretórios em colunas, mais informações.
ls -l *.md # Exibe todos os arquivos com extensão ‘md’.
ls -l | grep ^d # Exibe somente diretórios.
ls -la | grep ^d # Idem.</pre>
<pre>tree -a # Exibe todos os arquivos, inclusive ocultos.
tree -f # Exibe o caminho completo dos arquivos.
⚠️ Tree não vem instalado.</pre>
🎈 Opção ao ls: exa.
<h6>🚀️  Navegar: cd <span style="color: #0000ff"><em>Change Directory</em></span></h6>
<span style="color: #0000ff">mudar diretório</span> (atual de trabalho). (Filesystem)
<pre>🚩
-R, -r, --recursive
-a, --archive
-v, --verbose # explain what is being done

cd Desktop (maiúsculo) Vai ao Desktop.

Vide Termux para básicos.
</pre>
<strong>Filho, irmão; </strong><strong>/ ; cd e ls (semelhanças)</strong>

Vide Termux.
<h6>Diretório: criar, excluir</h6>
Vide Termux.
<h2>💾 Arquivo:</h2>
touch, rm; cp, mv.
<pre>mv foo.md NomePasta # No Desktop, por ex, move um arquivo para dentro de uma pasta, esta também no Desktop.

mv foo.md /tmp # Move o arquivo foo.md para /tmp.
⚠️ O arquivo de origem é apagado após ser movido.</pre>
<h6><em>pager</em> (ver conteúdo): cat, more, less...</h6>
Para  vide Termux.

Outros:
page: Age parecido ao more, mas exibe os ecrãs de forma invertida ao comando more.

🎈 Opção ao cat: bat, batcat.

Bat # Um cat melhorado; com destaque de sintaxe  e integração com Git.
<h6>Comparar (diff); Ferramentas (gestão)</h6>
Vide Termux.
<h6>Buscar: find</h6>
Outros:
Comando <em>locate</em>.
Para  <em>whereis</em> vide Termux.

🎈 Opção ao find: fdfind.
<pre>sudo apt install fd-find.</pre>
<h6>Achar palavras: grep</h6>
Vide Termux.

🎈 Opção ao grep: rg.
<h6>Compartilhar arquivo</h6>
Vide transferência de dados.
<h6>Arquivos | Outros</h6>
<pre>cryptdir # Criptografa todos os arquivos em um diretório.

type # Exibe a localização de um arquivo no sistema.
⚠️ Similar ao comando ‘whereis comando’.

cut # Remove para exibição seções de cada linha em arquivos.

</pre>
zcat: Mostra-nos um arquivo comprimido.
gv: Exibe arquivos pdf e ps. [deve instalar]
xpdf: Exibe arquivos pdf, usa o gv. [deve instalar]

sort: Ordena as linhas de arquivos textos.

file: Determina o tipo de arquivo.
<h6>Arquivo: agrupar/compactar</h6>
Vide Termux.
Outros: unzip, bzip2.
<h2>❓Símbolos, caracteres e afins</h2>
<h6>Caracteres (metacaracteres)</h6>
? substitui um único caractere, ou seja, substitui por um caracter qualquer.
* substitui um número tal de caracteres, ou seja, substitui todos os caracteres.
[] substitui um único caractere dentro de um certo limite de valor, ou seja, intervalo de caracteres.
<h6>Separador de comandos</h6>
Vide o <em>site</em> da <a href="https://guialinux.uniriotec.br/separador-de-comandos/">Unirio</a>.
<h6>&amp;&amp;</h6>
O &amp;&amp; (<em>and</em>) executa multiplos comandos.
<pre>comando1 &amp;&amp; comando2 &amp;&amp; comando3.</pre>
.
<h2>🖥️ Hardware e SO</h2>
<h6>Hardware</h6>
<pre>setterm # Altera as propriedades de um terminal (cor por ex.).

lshw # CPU, display, memória

lspci # Dispositivo de áudio, network, ethernet... Obtém informações sobre placas.
lspci -v # Idem, porém mais detalhes. Ou ainda, -vv e -vvv.

  ## Disco

df # Exibe os sistemas de arquivos.
df: exibe a quantidade de espaço em disco disponível.

df -m # Exibe o espaco usado em particoes em MB.

df -h # Exibe o espaço livre, o espaço ocupado em MB, KB, GB e exibe o uso e tamanho de todas as partições montadas no sistema.

fdisk # gerenciar partições.
fdisk -h, -v # informações sobre, versão do aplicativo.
fdisk -l # 
</pre>
Vide Termux.
<pre>🎈 Opção ao df para discos e partições:
duf.
ncdu # Sobre disco, mas numa interface mais bela (precisa instalar)</pre>
<h6>SO (sistema operacional)</h6>
Vide Termux.

.
<h2>🐧️ Sudo</h2>
Permite executar comandos com pivilégios elevados ou de administrador. Dá acesso a recursos do sistema que só o administrador pode ter. Pede senha. É a senha que vc digitou quando instalou o Ubuntu. Ou seja, sudo executa um comando com privilégios administrativos.
<pre>joe@joe-370E4J-370E4Q:~$
     
</pre>
Então, temos que:
<pre>joe@joe-370596-596E4Q  # Nome do computador.
~  # Diretório padrão (do usuário), diretório atual.
$  # Indica usuário comum.

Outros significados:
#  # Sustenido (jogo da velha). Significa que o usuario logado atualmente, o root, é o administrator do sistema.
root # Nome do usuário logado atualmente.</pre>
<strong>$</strong>
Exibe isso quando um <em>shell</em> é usado interativamente; isto é, aí está aguardando um comando do usuário.
<strong>#</strong>
Se o <em>shell</em> estiver sendo executado como <em>root</em> (um usuário com direitos administrativos), o <em>prompt</em> será alterado para #. O <em>prompt</em> do <em>shell</em> do superusuário é assim:
[root@host ~]#

Lembrando...
sudo: Permite executar comandos com pivilégios elevados ou de administrador; ou seja, sudo executa um comando com privilégios administrativos.
Dá acesso a recursos do sistema que só o administrador pode ter.
Pede senha _é a senha que digitamos ao instalar o Ubuntu.
<h2>🌐️ Rede</h2>
Comandos de rede vide <a href="https://joesynth.wordpress.com/2021/06/05/rede-comandos-no-bash/">Rede Comandos no Bash</a>.

xxx
<h2>👤 Usuário (rede)</h2>
Gerenciamento de usuário vide <a href="https://joesynth.wordpress.com/2021/06/05/rede-comandos-no-bash/">Rede Comandos no Bash</a>.

xxx

xxx
<h2>👤 Usuário (rede)</h2>
Gerenciamento de usuário vide <a href="https://joesynth.wordpress.com/2021/06/05/rede-comandos-no-bash/">Rede Comandos no Bash</a>.

xxx

xxx este trecho veio do artigo Termux

xxx
<pre>whoami # Comando informativo que mostra usuário logado. Exibe o usuário atual, ou seja, comando de informação que exibe o nome do usuário logado no computador, mostra quem é o dono da shell.</pre>
Vide Bash.

xxx

xxx
<pre>⚠️ foo é nome do usuário e bar é grupo.

  ## Usuário.
adduser # Adicionar usuário. Forneça nome, user ID, group, home directory (diretório padrão do usuário), shell, new password (senha) etc.
su foo # Para ver o usuário (fazer login no sistema), estar logado como usuário tal.

exit # Sai.
chfn foo # Trocar informações do usuário _por ex., corrigir o nome.
userdel foo # Exclui usuário, mas mantém diretório home (por ex.).
userdel -r foo # Remove usuário e informações.

  ## Senha
passwd foo # Alterar senha do usuário.
passwd -l foo # Lock. Desabilita um usuário; tranca, trava a conta, fica bloqueado. passwd -u foo # Desbloquear usuário.

  ## Grupo
groupadd bar # Cria grupo bar.
usermod -a -G bar foo # Adiciona usuário foo ao grupo bar.
groups foo # Diz todos os grupos que foo é membro.
groupdel bar # Excluir grupo do sistema.</pre>
Ainda há, por exemplo, permissões aos grupos, data de expiração (da conta), etc.

⛲ uniriotec.br, boson.
⛲ blog.wieczorek.com.br/index.php/2022/06/22/linux-comandos-basicos-para-gerenciamento-de-usuarios/
Vide Termux.
<h2>✏️ Edição de Texto</h2>
emacs: Editor de texto screen-oriented.
vi: Editor de texto full-screen.
vim: Editor de texto full-screen melhorado (vi improved).

🎈 Opção ao nano: micro.
Vide Termux.
<h2>Variável de ambiente</h2>
Vide Termux.
<h2>Comandos de Informação de Estado</h2>
clock: Define a hora do processador.
who: Mostra-nos quem está logado no sistema.
w: Mostra-nos quem está no sistema ou que comando cada job está a executar. Ou seja, o utilitário informa quais os usuários que estão conectados e o que eles estão executando.
whois: Serviço de diretório de domínios da Internet, permite-nos saber informações sobre determinados domínios na Internet, quando um domínio foi
registado, quando expira, etc.
<h2>Comandos de Controle e Acesso</h2>
passwd: Mudar a password do nosso utilizador (usuário logado).
rlogin: Logar de forma segura em outro sistema Unix/Linux.
ssh: Sessão segura, vem de secure shell, e permite-nos logar num servidor remoto através do protocolo ssh.
slogin: Versão segura do rlogin.
yppasswd: Mudar a password do nosso utilizador nas páginas amarelas (yellow pages).
<h2>🗣️ Comunicação</h2>
talk: Falar com outros utilizadores que estejam logados no momento.
write: Escrever para outros utilizadores que estejam logados no momento.
mail: Enviar e receber emails.
mesg: Permitir ou negar mensagens de terminal e pedidos de conversação (talk requests).
pine: Outra forma de enviar e receber emails, uma ferramenta rápida e prática.

⚠️Nenhum dos listados acima há no Termux.

Semehante: wall.

.
<h2>↕️ Transferência de dados</h2>
--

xxx

Existem várias opções de compartilhamento de arquivos, algumas LinuxLinux enquanto outras LinuxWindowsMacOS.
<pre>samba # compartilha entre LinuxWindowsMacOS.
É necessário fazer configuração.</pre>
Vide também SCP.

xxx

--

Comandos de transferência de arquivos.

Para transferir/copiar arquivos entre computadores são utilizados:
scp (mais rápido).
rsync (mais seguro e com mais utilidades).

wget # Baixar arquivos da Web. suporta protocolos HTTP, HTTPS, e FTP.

curl, ftp, telnet: vide <a href="https://joesynth.wordpress.com/2023/11/06/termux/">Termux</a>.

xxx

scp (OpenSSH)
Uma forma de transferir arquivos entre um computador local e um host remoto, ou entre dois hosts remotos.
É baseado no protocolo SSH.
O termo "SCP" normalmente se refere ao protocolo de segurança e ao próprio programa.
Conforme desenvolvedores do OpenSSH o SCP está desatualizado e recomenda-se o uso de SFTP e rsync para transmissão de arquivos.

SCP

Secure Copy Protocol. Protocolo para transferir arquivos.

rsync (W.Davison, anos 90)
Um utilitário para transferência de arquivos, embora vá além disso.
Em suma, copiar arquivos através da rede.

xxx
<h6>telnet</h6>
Utilitário Unix que permite fazer login noutro computador na Internet _desde que você tenha uma conta nesse computador. Útil se você está em casa, por ex., e deseja fazer login no computador da escola ou trabalho fora do expediente.
<pre><code>telnet machineName
ou...
telnet IP_address <span class="hljs-comment"># Onde IP_address é o número (de 4 partes) do computador no qual você deseja fazer login.</span>
Ainda: digitar quit para sair <span class="hljs-keyword">do</span> telnet ou <span class="hljs-built_in">help</span> para ver os comandos que você tem à sua disposição.
</code></pre>
👎 Qualquer informação digitada é enviada sem criptografia pela rede. Eexistem pessoas que podem usar software facilmente disponível para espionar o tráfego da rede e selecionar o texto à medida que ele "passa". Em particular, suas senhas e nome de login são suscetíveis a esse tipo de espionagem.
<h6>ssh</h6>
Podemos pensar no ssh como uma versão segura do telnet. No ssh criptografa-se toda a comunicação entre os dois computadores, o que torna quase impossível que alguém roube seu nome de login e senha (isso exigiria recursos de computador geralmente disponíveis só pelo governo federal, EUA no caso).
<pre><code>ssh user<span class="hljs-meta">@cs02</span>.cs.sjsu.edu
ou<span class="hljs-punctuation">...</span>
ssh user<span class="hljs-meta">@machineName</span> <span class="hljs-comment"># Isso deve permitir que você faça login em qualquer uma das outras máquinas do seu laboratório.</span>
Você será solicitado a digitar sua senha e, em seguida, estará usando a outra máquina para executar quaisquer comandos digitados.
</code></pre>
ssh é usado da mesma forma que telnet: o computador que você deseja é identificado pelo nome do computador _ou seu endereço IP. Depois de acessar o sistema desejado, será apresentado um prompt de login, como no caso do telnet.

Ou seja..

ssh: é um programa para acessar uma máquina remota e para executar comandos nela. O SSH é também um protocolo e possui as mesmas funcionalidades que o TELNET, mas com a vantagem de prover criptografia na conexão.
<pre><code>ssh -<span class="hljs-selector-tag">p</span> <span class="hljs-number">22</span> root<span class="hljs-keyword">@10</span>.1.2.3 # solicita uma conexão como o usuário root na porta <span class="hljs-number">22</span> da máquina <span class="hljs-number">10.1</span>.<span class="hljs-number">2.3</span>.
</code></pre>
<h6>ftp</h6>
Protocolo de transferência de arquivos.

O ftp é um protocolo que especifica um método para transferência de arquivos entre computadores.

🤔 Um protocolo é um conjunto de acordos entre pessoas ou governos (ou neste caso, computadores) que regem o modo como as comunicações ocorrerão.

Além de protocolo, ftp também é o nome de um utilitário Unix que permite copiar arquivos entre dois computadores. Os dois computadores podem ser o computador que você está conectado no momento e um computador distante na Internet; por ex., o computador pessoal de sua casa e o computador da escola. O utilitário ftp vai requerer que você tenha uma conta em cada máquina.

Alguns sites de computador possuem contas especiais apenas para acessar seus arquivos por pessoas de outros sites.

Nome de login da conta: é anônimo. Senha: geralmente é seu endereço de e-mail.

Pode-se, por ex., copiar um arquivo.
<pre><code>ftp mirrors<span class="hljs-selector-class">.aol</span><span class="hljs-selector-class">.com</span> # O ftp (esperançosamente) localizará o site e conectará você <span class="hljs-selector-tag">a</span> ele. <span class="hljs-selector-tag">Em</span> seguida, ele solicitará seu nome de login. 
anonymous # Como este é um site que suporta acesso FTP anônimo, no prompt digite anonymous.
<span class="hljs-selector-tag">Em</span> seguida, você será solicitado <span class="hljs-selector-tag">a</span> fornecer seu endereço de e-mail para obter uma senha.
babuddy2<span class="hljs-keyword">@student</span>.cs.sjsu.edu
</code></pre>
<strong>Comandos</strong>: alguns possíveis de se usar são <em>cd foo</em>, <em>pwd</em>; mas há outros:
<pre><code><span class="hljs-string">put</span> <span class="hljs-string">file1</span> <span class="hljs-string">file2</span> <span class="hljs-comment"># Recupere o arquivo1 e nomeie-o como arquivo2 no sistema a partir do qual você iniciou o FTP.</span>
<span class="hljs-string">mget</span> <span class="hljs-string">*.txt</span> <span class="hljs-comment"># Transfira todos os arquivos deste diretório que terminam em “.txt”; solicitar antes de transferir cada arquivo.</span>
<span class="hljs-string">quit</span> <span class="hljs-comment"># Saia do utilitário FTP. Você estará de volta ao nível da linha de comando no Unix.</span>

<span class="hljs-attr">ftp:</span> <span class="hljs-string">put</span> <span class="hljs-comment"># Copiar um arquivo do nosso computador para outro.</span>
<span class="hljs-string">quit</span>  <span class="hljs-comment"># Quando terminar.</span>
</code></pre>
👎 Como o telnet, a comunicação entre os dois computadores não é criptografada e as pessoas podem espionar o tráfego da rede para capturar senhas.
<h6>scp</h6>
<em>secure copy</em>, cópia segura

Forma criptografada do comando cp. Este comando permite copiar arquivos de um computador para outro (não apenas de uma pasta para outra em um único computador).

Permite mover arquivos entre computadores em uma rede.

Digamos que há um arquivo chamado myProg.java. No diretório que contém myProg.java digite o seguinte:
<pre><code>scp myProg<span class="hljs-selector-class">.java</span> zx5555<span class="hljs-keyword">@cs</span>05.cs.sjsu.<span class="hljs-attribute">edu</span>:transfer
</code></pre>
Agora, na primeira janela, procure no diretório de transferência para ter certeza de que seu arquivo foi copiado de sua conta DH para sua conta WSQ.

Você também pode copiar na outra direção: da sua conta WSQ para sua conta DH.

No laboratório (por exemplo, DH 450) use o comando ssh para fazer login em sua conta WSQ (ou se você já tiver uma janela aberta para essa conta, prossiga para a próxima fase). Assumiremos que (como no exercício anterior) você agora tem uma "transferência" de nomes de diretório em sua conta WSQ. Coloque um arquivo em seu diretório de “transferência” em sua conta WSQ que você deseja copiar para sua conta DH. (Vamos supor que o arquivo se chame classNotes.txt)

Embora não seja estritamente necessário, se criarmos uma pasta em nossa conta DH também com o nome de "transferência", poderemos ter um lugar em ambas as contas que usamos para transferir arquivos. Portanto, se você ainda não possui um, crie um diretório chamado “transfer” em seu diretório inicial.

Agora digite o seguinte (no seu diretório inicial):
<pre><code>scp zx5555<span class="hljs-keyword">@cs</span>05.cs.sjsu.<span class="hljs-attribute">edu</span>:transfer/classNotes.txt transferência
</code></pre>
O comando scp solicitará sua senha na conta WSQ e, em seguida, copiará o arquivo classNotes.txt em sua pasta de transferência para a pasta de transferência em sua conta DH.

Experimente ver se você pode copiar o arquivo classNotes.txt da conta WSQ e dar a ele um novo nome (por exemplo, notas) na pasta de transferência da sua conta DH.

Use o comando man para ver como você copiaria uma pasta inteira de arquivos e pastas com o comando scp. A opção que você deseja examinar é a opção -r.
<pre>⛲ cs.sjsu.edu/web_mater/cs46b/cs46blab/telnetFtpSshScp.html
⛲ guialinux.uniriotec.br/ssh/ 
Nota:uniriotec 
telnet: nc 
scp: nc</pre>
<h6>Resumo</h6>
<table>
<thead>
<tr>
<th style="text-align: center" align="center">utilitário</th>
<th style="text-align: center" align="center">criptografia</th>
<th style="text-align: center" align="center">protocolo</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">telnet</td>
<td align="center">👎</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">ssh</td>
<td align="center">👍</td>
<td align="center"></td>
</tr>
<tr>
<td align="center">ftp</td>
<td align="center">👎</td>
<td align="center">FTP</td>
</tr>
<tr>
<td align="center">scp</td>
<td align="center">👍</td>
<td align="center"></td>
</tr>
</tbody>
</table>
.
<h2>Pacotes</h2>
<h6>apt</h6>
Utilitário que é uma versão aprimorada doutro utilitário: o apt-get. Sendo mais recente, o apt faz tudo que o apt-get faz, então podemos utilizar um ou outro.
<pre>apt search foo
apt show foo
⚠️ Onde foo é nomePacote.
sudo apt install foo

apt help
apt list --installed # Os instalados.
sudo apt remove foo
sudo apt purge foo # Caso queira apagar todas as configurações.
sudo apt autoremove

sudo apt upgrade foo
</pre>
Vide Termux.
<h6>Utilitário apt-get</h6>
Gerenciamento de pacotes (Debian e derivados como Linux Ubuntu, Linux Mint). Instalação, atualização e remoção de pacotes do sistema.
<pre>apt-get

sudo apt-get -u dist-upgrade # Atualiza a distribuição, migrar.

sudo apt-get update # Atualiza a lista de pacotes.
sudo apt-get upgrade # Atualiza os pacotes do sistema, ou seja, os já instalados no computador.

apt-get remove foo # Foo é o pacote a ser removido.
Mantém arquivos de configuração do pacote que está sendo removido. 
⚠️ Usando o purge vc remove, também, todos os arquivos de configuração do pacote.
</pre>
Ainda há o apt-cache.

🎈 apt-get VS apt: no apt há apt search, show.
<h2>👁️ Comandos informativos</h2>
<pre>arch # exibe a arquitetura de hardware do pc atual.

who # Exibe os usuários que estão logados no computador.

who -q # Exibe os logins e a quantidade total de usuários logados no sistema.
who -w # Exibe se o usuario pode receber msg’s via talk.

whois # exibe informações sobre usuarios e dominios remotos.

</pre>
Vide Termux.
<h2>Processos</h2>
Vide Termux.

🎈 Opções de comandos para para visualisar processos: top, htop e btop e bashtop.

kill: Gerencia processos. Ex.: encerra processo travado.
<pre>kill # Finaliza um ou mais processos em execução.
Tenta finalizar o programa com o número do processo (PID).
kill numero_do_pid

kill -9 numero_do_pid # Finaliza o programa com o número do processo (PID).

killall -9 programa # Finaliza todos os processos envolvendo tal programa.

kill: Gerencia processos. Ex.: encerra processo travado.

jobs # Exibe a lista de processos em execução pelo shell.

jobs # Lista os processos inicializados a partir do terminal.

fg # Permite que um programa rodando em segundo plano (background) rode em primeiro plano (foreground).
Você deve usar o comando ‘jobs’ para pegar o número do processo rodando em segundo plano ou interrompida, este número será passado ao comando ‘fg’ para ativa-lo em primeiro plano.
fg número</pre>
Outros: bg, ^y, ^z.
<h2>Inicialização e encerramento</h2>
shutdown: Reinicia ou desliga o sistema de forma segura.
<pre>shutdown -c # Cancela a execução do comando shutdown.

reboot: vamos omitir devido precisar CUIDADO!!!

sync # Salva as informações em cache de disco. Isso força todas as informações alteradas a serem salvas no disco.
O comando faz o sistema copiar buffers para o disco.
Use o comando sync antes de desligar o sistema, ou seja, antes do comando ‘shutdown’.

– Sequência para desligamento do computador:
sync
sync
shutdown -h now
ou
sync; sync; shutdown -h now

Sequencia para reiniciar o computador:
sync
sync
shutdown -r now
ou
sync; sync; shutdown -r now
</pre>
<h3>Comandos de comunicação</h3>
mail, mesg, pine, talk, write.
<h3>Portas e sockets</h3>
<pre>socklist # Mostra uma lista dos sockets abertos.
Para se ter idéia, toda comunicação é feita através de sockets.

lsof -i # Exibe todas as portas que estao sendo usadas.</pre>
.
<h2>⚙️ Configuração Linux</h2>
<pre>kbdconfig # Configurar teclado.

mouseconfig

sndconfig # Configura placa de som.
sndconfig –noprobe # Idem.
sndconfig –noautoconfig # Idem.

modemconf # Configurar uma placa de fax-modem.

netconfig # Configura rede.
netconf # Idem.

Esetroot /nome-da-imagem.jpg # Para configurar um wallpaper (papel de parede) digite.
wmsetbg /nome-da-imagem.jpg # Idem.

ifconfig # Status da placa de dispositivos (eth0, eth1, ppp, lo).

ifdown eth0 # Desligar/parar a primeira placa de rede.

ifup eth0 # Ligar/iniciar a primeira placa de rede.</pre>
.

dd (data duplicator): copia um arquivo, discos e partições para um arquivo, disco e dispositivos de bloco.
Pode-se criar um pen drive bootável com uma distribuição Linux.
<pre>dd if=/dev/cdrom of=/imagemCD.iso # Copiar CDs de dados, pois faz uma cópia exata do mesmo.
⚠️ Não serve para para ser realizado em um CD musical, onde não existem os códigos de correção de erro necessários.</pre>
Vide Termux.
<h2>💽 Backup ☁️</h2>
.
<h2>🔢️ bc (basic calculator)</h2>
Vide Termux.
<h2>🤔 Considerações finais</h2>
<h6>Bash: outros comandos</h6>
<pre>git
busybox
</pre>
Vide Termux.
<pre> Letras L a Z
⛲ uniriotec.br
⚠️ Outros de L a Z vide Termux.

lsusb
make
mandb
mkswap
modinfo
modprob
mount
newgrp
oclock
pwconv
pwunconv
quotaoff
quotaon
rmmod
setcap
slabtop
smartcti
snap
swapoff
swapon
umount
updatedb
users
vigr
vipw
visudo
xman
yum
zip</pre>
.
<h6>Apps CLIs: dicas de instalação</h6>
Vide <a href="https://joesynth.wordpress.com/2021/12/07/software-de-linha-de-comando/">software de linha de comando</a>.
<h6>Modo texto modo gráfico</h6>
ALT+Fn # Permite a navegação no modo texto entre as consoles virtuais da máquina.
⚠️Fn é uma tecla de função. Por ex., ALT+F1 mostra a console virtual 1, ALT+F3 mostra a console virtual 3.
<pre>CTRL+ALT+Fn # Permite a navegação no modo gráfico entre as consoles virtuais da máquina.

Por ex.:
CTRL+ALT+F1 # Mostra a console virtual 1,
CTRL+ALT+F3 # Mostra a console virtual 3.</pre>
[ft: uniriotec.br]

.
<h6>Dicionário de comandos</h6>
🔗️ guialinux.uniriotec.br
🔗️ <a href="https://blogdoatila.wordpress.com/2013/05/15/lista-bem-completa-de-comandos-linux/">Lista bem completa de comandos Linux</a>.
🔗️ <a href="https://infoxzone.wordpress.com/2021/03/09/os-50-principais-comandos-do-linux-que-voce-deve-conhecer/">50 principais comandos do Linux</a>.
🔗️https://milq.github.io/useful-terminal-commands-ubuntu-debian/
🔗️https://help.ubuntu.com/community/UsingTheTerminal?action=show&amp;redirect=BasicCommands
🔗️https://en.wikipedia.org/wiki/List_of_Unix_commands
<h6>Comandos... ou programas?</h6>
Estamos a todo momento dando comandos no Terminal. Na verdade, eles são programas _e eis que são escritos em <a href="https://joesynth.wordpress.com/2021/12/27/linguagens-resumo/">linguagens</a>, têm <a href="https://joesynth.wordpress.com/2021/11/28/software-livre-e-software-proprietario/">licenças</a>, versões etc.

Assim, podem ficar até defasados ou ter algum outro que faça a mesma coisa dum outro mas de forma que lhe agrade mais.

Por exemplo: cat e bat, ls e exa.

Veja também <a href="https://joesynth.wordpress.com/2023/11/06/termux/">Tutorial Termux</a>.

https://youtu.be/amMfrS52WjE?si=l6pEf0pQIHk5T8Bk

.

https://youtu.be/Vk_0MGk1XoY?si=rK-pCtBzRDUtQnLv

.
<h2>Outros</h2>
Identificar o SO utilizado.
Para descobrir qual So está sendo utilizado vamos usar o TTL (Time to Live).
Cada SO trabalha com um TTL padrão e desta forma podemos identificar o tipo de sistema. Valor padrão do TTL para um ou outro SO: 255 Unix, 64 Linux, 128 Windows
<pre>ping 127.0.0.1 # No retorno leia o TTL.</pre>
⛲ dicas-l.com.br/arquivo/identificar_o_sistema_operacional_usando_ping.php
⛲ cooperati.com.br/2010/05/identificar-o-sistema-operacional-usando-ping/

\o_
<!-- 
Bash: Lista comandos, atalhos                                                                   │
https://linuxrede.wordpress.com/tag/teclas-de-atalhos-shell/                                    │
https://help.gnome.org/users/gnome-terminal/stable/adv-keyboard-shortcuts.html.pt_BR            │
https://www.inf.ufpr.br/cursos/ci055/artigos_linux_veteranos/rpd17.pdf                          │
https://www.ppgia.pucpr.br/pt/arquivos/techdocs/linux/foca-iniciante/ch-redir.html              │
https://www.uniaogeek.com.br/guia-de-comandos-shell-terminal-gnulinux/                          │
https://www.inf.ufpr.br/cursos/ci055/artigos_linux_veteranos/rpd17.pdf                          │
https://www.linuxpro.com.br/dl/guia_500_comandos_Linux.pdf  
 -->

<hr />

<img class="alignnone size-full wp-image-19277" src="https://joesynth.files.wordpress.com/2021/10/aprenda_programacao.png" alt="Aprenda Programação - HTML - JS - CSS" width="640" height="360" />

Veja também:
○ <a href="https://joesynth.wordpress.com/curso-sintese-sonora/">Curso Síntese Sonora Ilustrada</a>.
⛲ devmedia.com.br/comandos-importantes-linux/23893
[oes: tit !]
