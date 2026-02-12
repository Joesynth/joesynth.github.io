


Shell Scripting - Bash Scripting

Tutorial.


Olá!

xxx

Caso necessite copiar a saída do comando para uma variável em um script bash shell, basta fazer como segue.
variavel=$(wget -qO - icanhazip.com)
⛲ tecnobyte.com.br/124613666/Linux/Como-obter-o-endereco-IP-publico-no-terminal-do-Linux

xxx

boson

📜️🔗️

Para ler esse conteúdo é importante que você saiba antes:
ds
sdsd
sd

Algumas palavras e o seu significado:
kernel
<h6>O que é um shell?</h6>
Vide <a href="https://joesynth.wordpress.com/2021/12/12/linux/">Linux: um tutorial essencial</a>.

É um programa de usuário, para que este possa se comunicar com o <em>kernel</em> do seu sistema. É uma interface de texto, embora exista shells gráficos.

O shell é um ambiente de execução doutros programas, isto é, podemos executar programas dentro do shell. Os shells oferecem linguagens de programação, então, podemos escrever um programa usando as linguagens dos shells _e salvar na forma de scripts, por ex., daí o termo shell script.
<h6>Conceitos ou características</h6>
Os shells são personalizáveis.
Os shells são distintos do <em>kernel</em> _inclusive podemos ter vários shells no nosso sistema, bem como instalar um ou outro shell.
O usuário pode digitar um comando e o shell responde (com alguma informação, por ex.). O Linux em si também pode fazer uso do shell para fazer algo interno.
Os shells têm arquivos de configuração.
A partir de um shell é possível executar outro shell.
<h6>Tipos de shells (Linux)</h6>
sh (padrão Unix), bash (padrão Linux; Ubuntu, Debian, Fedora), ksh, zsh, csh, tcsh etc.

Para instalar shells extras:
<pre>sudo apt-get install nome_shell</pre>
<h6>Temas relevantes</h6>
Variáveis de ambiente e arrays de ambientes.
Alias ('nome alternativo', apelido) e funções.
Arquivos de configuração.
Scripts simples e comando echo.
Redirecionar saída de comandos a variáveis; crase (backtick).
Redirecionamento de entrada e saída.
Cálculos matemáticos.
Calculadora do Bash: bc.
Status de saída de comandos.
Comandos estruturados (if; lógica de programação).
O comando test.
Comparação de arquivos e diretórios.
Teste de condições compostas (AND, OR; &amp;&amp;, |)
Comando case.
Estrutura de repetição (for, while, until; lógica de programação).
Comando for no estilo Linguagem C.
Ler dados do teclado.
Comando read.

\o/
https://youtube.com/playlist?list=PL4i0dRYFvxd3DG2S4LeokAp8OUsNl_PjT&amp;si=76N0aQwmy2ZJgn5h
https://help.ubuntu.com/community/Beginners/BashScripting
xxx
xxx
xxx

--

Scripts Bash

O prompt do shell se parece com isto:
<pre>[username@host ~]$</pre>
Você pode inserir qualquer comando após o $sinal e ver a saída no terminal.

xxx
<h3>Script Bash: criar e executar</h3>
Um script bash termina com .sh, mas pode funcionar sem essa extensão.

<strong>Shebang</strong>: é um caminho absoluto para o intérprete bash. Ex. de da instrução shebang:
<pre>#!/bin/bash</pre>
Ou seja, o shebang ( #!/bin/bash) aponta para o caminho do shell bash.

xxx
xxx
xxx
<h3>Script bash: comentário</h3>
Um comentário começa com #. Então qualquer linha que inicie com # é um comentário e será ignorada pelo interpretador. Ex.:
<pre># Isto é um comentário.
# Ambas as linhas serão ignoradas pelo interpretador.</pre>
Comentários são muito úteis na documentação do código e é uma boa prática adicioná-los para ajudar outras pessoas a entender o código.

xxx
<h3>Variáveis</h3>
Permitem armazenar dados. Não há tipos de dados no Bash. No Bash, uma variável é capaz de armazenar valores numéricos, caracteres individuais ou sequências de caracteres.

Você pode usar variáveis ​​para ler, acessar e manipular dados em todo o seu script.

No Bash, você pode usar e definir os valores das variáveis ​​das seguintes maneiras:
<ol>
 	<li>Atribua o valor diretamente:</li>
</ol>
<pre>country=Pakistan</pre>
2.Atribua o valor com base na saída obtida de um programa ou comando, usando substituição de comando. Observe que $ é necessário para acessar o valor de uma variável existente.
<pre class="language-bash"><code class="language-bash"><span class="token assign-left variable">same_country</span><span class="token operator">=</span><span class="token variable">$country</span></code></pre>
Isso atribui o valor de país à nova variável mesmo_país

Para acessar o valor da variável, anexe $ ao nome da variável.
<pre>zaira@Zaira:~$ country=Pakistan
zaira@Zaira:~$ echo $country
Pakistan
zaira@Zaira:~$ new_country=$country
zaira@Zaira:~$ echo $new_country
Pakistan</pre>
Acima no ex.: Atribuindo e imprimindo valores de variáveis
<h3>Convenções de nomenclatura de variáveis</h3>
No script Bash, a seguir estão as convenções de nomenclatura de variáveis:

👍 devem começar com uma letra ou sublinhado (_).
👍 podem conter letras, números e sublinhados (_).
👍 diferenciam maiúsculas de minúsculas.
👍 não devem conter espaços ou caracteres especiais.
👍 Use nomes descritivos que reflitam a finalidade da variável.
👍 Evite usar palavras-chave reservadas, como if, then, else, fi e assim por diante como nomes de variáveis.

Ex. de nomes de variáveis no Bash.
<pre>name    👍
count   👍
_var    👍
myVar   👍
MY_VAR  👍
2ndvar  👎 variable name starts with a number
my var  👎 variable name contains a space
my-var  👎 variable name contains a hyphen</pre>
Seguir essas convenções de nomenclatura ajuda a tornar os scripts Bash mais legíveis e fáceis de manter.
<h3>Entrada e saída em scripts Bash</h3>
Coletando informações
Nesta seção, discutiremos alguns métodos para fornecer informações para nossos scripts.

Lendo a entrada do usuário e armazenando-a em uma variável
<h6>read</h6>
Podemos ler a entrada do usuário usando este comando.
<pre>#!/bin/bash
echo "Today is " `date`

echo -e "\nenter the path to directory"
read the_path

echo -e "\nyour path has the following files and folders: "
ls $the_path</pre>
[foto]
<h6>Lendo de um arquivo</h6>
Este código lê cada linha de um arquivo chamado input.txt e imprime no terminal. Estudaremos loops while posteriormente neste artigo.
<pre>while read line
do
echo $line
done &lt; input.txt</pre>
<h6>Argumentos de linha de comando</h6>
Argumentos de linha de comando

Em um script ou função bash, $1 denota o argumento inicial passado, $2 denota o segundo argumento passado e assim por diante.

Este script recebe um nome como argumento de linha de comando e imprime uma saudação personalizada.
<pre>echo "Hello, $1!"</pre>
Fornecemos Zaira como nosso argumento para o roteiro.
<pre>#!/bin/bash
echo "Hello, $1!"</pre>
Acima no ex.: o código do script: greeting.sh

[foto]
<h6>Exibindo saída</h6>
[ISSo AQUI É MUITO BOBO, SIMPLES. PODE IR PRO TUTORIAL LINUX, SUBTÍTULO TERMINAL.
AQUI, ENTRETANTO, PODE SER FEITO NO CONTEXTO DE UM "ALÔ" VIA ARQUIVO DE TEXTO SENDO EXECUTADO
]

Aqui discutiremos alguns métodos para receber saída dos scripts.
<ol>
 	<li>Imprimindo no terminal:</li>
</ol>
<pre>echo "Hello, World!"</pre>
Isso imprime o texto "Olá, mundo!" para o terminal.

2. Escrevendo em um arquivo:
<pre>echo "This is some text." &gt; output.txt</pre>
Isso escreve o texto "Este é algum texto". num arquivo chamado output.txt. ⚠️ O operador &gt; sobrescreve um arquivo se ele já tiver algum conteúdo.

3. Anexando a um arquivo:
<pre>echo "More text." &gt;&gt; output.txt</pre>
Isso anexa o texto "Mais texto". ao final do arquivo output.txt.

4. Redirecionando a saída:
<pre>ls &gt; files.txt</pre>
Isso lista os arquivos no diretório atual e grava a saída em um arquivo chamado files.txt. Você pode redirecionar a saída de qualquer comando para um arquivo desta forma.
<h3>Comandos básicos do Bash: echo, read...</h3>
Aqui está uma lista de alguns dos comandos bash mais comumente usados:
<pre>histórico: mostra uma lista de comandos executados anteriormente.
</pre>
<h3>Declarações condicionais (if/else)</h3>
Expressões que produzem um resultado booleano, verdadeiro ou falso, são chamadas de condições. Existem várias maneiras de avaliar condições, incluindo if, if-else, if-elif-else e condicionais aninhadas.

Sintaxe:
<pre>if [[ condition ]];
then
    statement
elif [[ condition ]]; then
    statement 
else
    do this by default
fi</pre>
Ex. acima sintaxe de instruções condicionais bash

Podemos usar operadores lógicos como AND -a e OR -o para fazer comparações mais significativas.
<pre>if [ $a -gt 60 -a $b -lt 100 ]</pre>
Acima no ex., esta instrução verifica se ambas as condições são verdadeiras: a é maior que 60 E b é menor que 100.

Vejamos um exemplo de script Bash que usa instruções if, if-else e if-elif-else para determinar se um número inserido pelo usuário é positivo, negativo ou zero:
<pre>#!/bin/bash

echo "Please enter a number: "
read num

if [ $num -gt 0 ]; then
    echo "$num is positive"
elif [ $num -lt 0 ]; then
    echo "$num is negative"
else
    echo "$num is zero"
fi</pre>
Acima no ex.: script diz se número é positivo, negativo ou zero
O script primeiro solicita que o usuário insira um número. Em seguida, ele usa uma instrução if para verificar se o número é maior que 0. Se for, o script exibe que o número é positivo. Se o número não for maior que 0, o script passa para a próxima instrução, que é uma instrução if-elif. Aqui, o script verifica se o número é menor que 0. Se for, o script exibe que o número é negativo. Finalmente, se o número não for maior que 0 nem menor que 0, o script usará uma instrução else para informar que o número é zero.
<h3>Loop e ramificação no Bash</h3>
[RAMIFICAÇÃO: O Q É ISSO? SERIA A TRADUÇÃO CERTA? É TERMO TÉCNICO?]
<h6>While loop</h6>
Os loops while verificam uma condição e fazem um loop até que a condição permaneça verdadeira. Precisamos fornecer uma instrução de contador que incremente o contador para controlar a execução do loop.

No exemplo abaixo, (( i += 1 )) é a instrução do contador que incrementa o valor de i. O loop será executado 10 vezes.
<pre>#!/bin/bash
i=1
while [[ $i -le 10 ]] ; do
echo "$i"
    (( i += 1 ))
done</pre>
Acima no ex.: while loop que itera 10 vezes.
<h6>For loop</h6>
O loop for, assim como o loop while, permite executar instruções um número específico de vezes. Cada loop difere em sua sintaxe e uso.

No exemplo abaixo, o loop irá iterar 5 vezes.
<pre>#!/bin/bash
for i in {1..5}
do
  echo $i
done</pre>
Ex.: For loop que itera 5 vezes.
<h6>Case statements</h6>
No Bash, as instruções case são usadas para comparar um determinado valor com uma lista de padrões e executar um bloco de código com base no primeiro padrão correspondente. A sintaxe para uma instrução case no Bash é a seguinte:

Sintaxe
<pre>case expression in
  pattern1)
  # code to execute if expression matches pattern1
  ;;
  pattern2)
  # code to execute if expression matches pattern2
  ;;
  pattern3)
  # code to execute if expression matches pattern3
  ;;
  *)
  # code to execute if none of the above patterns match expression
  ;;
esac</pre>
Aqui, "expressão" é o valor que queremos comparar, e "padrão1", "padrão2", "padrão3" e assim por diante são os padrões com os quais queremos comparar.

O ponto e vírgula duplo ";;" separa cada bloco de código a ser executado para cada padrão. O asterisco "*" representa o caso padrão, que é executado se nenhum dos padrões especificados corresponder à expressão.

Vejamos um exemplo.
<pre>fruit="apple"

case $fruit in
  "apple")
    echo "This is a red fruit."
    ;;
  "banana")
    echo "This is a yellow fruit."
    ;;
  "orange")
    echo "This is an orange fruit."
    ;;
  *)
    echo "Unknown fruit."
    ;;
esac</pre>
Neste exemplo, como o valor de “fruta” é “maçã”, o primeiro padrão corresponde e o bloco de código que ecoa “Esta é uma fruta vermelha”. É executado. Se o valor de "fruta" fosse "banana", o segundo padrão corresponderia e o bloco de código que ecoa "Esta é uma fruta amarela". executaria e assim por diante. Se o valor de "fruta" não corresponder a nenhum dos padrões especificados, o caso padrão será executado, que ecoará "Fruta desconhecida".
<h2>Schedule Scripts: cron</h2>
Cron é um utilitário poderoso para agendamento de tarefas que está disponível em sistemas operacionais do tipo Unix. Ao configurar o cron, você pode configurar trabalhos automatizados para serem executados diariamente, semanalmente, mensalmente ou em horários específicos. Os recursos de automação fornecidos pelo cron desempenham um papel crucial na administração do sistema Linux.

Abaixo está a sintaxe para agendar crons:
<pre># Cron job example
* * * * * sh /path/to/script.sh</pre>
Aqui, os *s representam minuto(s) hora(s) dia(s) mês(s) dia(s) da semana, respectivamente.
[SUPRIMIDO: EXEMPLOS PRÁTICOS, VÁRIOS]

O crontab é outro utilitário.
<h2>Debug</h2>
Como depurar e solucionar problemas de scripts Bash

Depuração e solução de problemas são habilidades essenciais para qualquer criador de scripts Bash. Embora os scripts Bash possam ser incrivelmente poderosos, eles também podem estar sujeitos a erros e comportamentos inesperados. Nesta seção, discutiremos algumas dicas e técnicas para depuração e solução de problemas de scripts Bash.
<h6>Defina a opção set -x</h6>
Uma das técnicas mais úteis para depurar scripts Bash é definir a opção set -x no início do script. Esta opção ativa o modo de depuração, o que faz com que o Bash imprima cada comando executado no terminal, precedido por um sinal +. Isso pode ser extremamente útil para identificar onde estão ocorrendo erros em seu script.
<pre>#!/bin/bash

set -x

# Your script goes here</pre>
<h6>Verifique o código de saída</h6>
Quando o Bash encontra um erro, ele define um código de saída que indica a natureza do erro. Você pode verificar o código de saída do comando mais recente usando o $? variável. Um valor 0 indica sucesso, enquanto qualquer outro valor indica um erro.
<pre>#!/bin/bash

# Your script goes here

if [ $? -ne 0 ]; then
echo "Error occurred."
fi</pre>
.
<h6>Use instruções echo</h6>
Outra técnica útil para depurar scripts Bash é inserir instruções echo em todo o seu código. Isso pode ajudá-lo a identificar onde os erros estão ocorrendo e quais valores estão sendo passados para as variáveis.
<pre>#!/bin/bash

# Your script goes here

echo "Value of variable x is: $x"

# More code goes here</pre>
.
<h6>Opção set -e</h6>
Se quiser que seu script saia imediatamente quando qualquer comando do script falhar, você pode usar a opção set -e. Esta opção fará com que o Bash saia com um erro se algum comando do script falhar, tornando mais fácil identificar e corrigir erros em seu script.
<pre>#!/bin/bash

set -e

# Your script goes here</pre>
<h3>Solução de problemas de crons</h3>
Podemos solucionar problemas de crons usando os arquivos de log. Os logs são mantidos para todos os trabalhos agendados. Você pode verificar e verificar nos logs se um trabalho específico foi executado conforme planejado ou não.

Para Ubuntu/Debian, você pode encontrar cronlogs em:
<pre>/var/log/syslog</pre>
A localização varia para outras distribuições.

Abaixo, Cron log:
<pre>2022-03-11 00:00:01 Task started
2022-03-11 00:00:02 Running script /path/to/script.sh
2022-03-11 00:00:03 Script completed successfully
2022-03-11 00:05:01 Task started
2022-03-11 00:05:02 Running script /path/to/script.sh
2022-03-11 00:05:03 Error: unable to connect to database
2022-03-11 00:05:03 Script exited with error code 1
2022-03-11 00:10:01 Task started
2022-03-11 00:10:02 Running script /path/to/script.sh
2022-03-11 00:10:03 Script completed successfully</pre>
.

xxx
xxx
xxx

Ubuntu.com

Você logo aprenderá que a maioria das coisas pode ser feita por meio de GUI (Graphical User Interface) e CLI (Command Line Interface), no entanto, algumas coisas são mais facilmente alcançadas com um ou outro. Por exemplo, alterar as permissões de arquivo de uma pasta e de todas as suas subpastas é mais facilmente alcançado usando cli em vez de gui.

[Isso deve estar em gui cli como pré-requisito, vise links antes de ler esse tutorial]

xxx

Ubuntu.com

Introdução
Aqui temos comandos úteis do dia a dia, bem como podemos nos aprofundar um pouco mais nos scripts e nos recursos semi-avançados do Bash.

Bash: a vida cotidiana no Ubuntu
Durante seu tempo como usuário do Ubuntu, você usará o terminal para realizar tarefas como
<ul>
 	<li>Criar pastas.</li>
 	<li>Excluir arquivos, pastas e suas subpastas.</li>
 	<li>Abrir aplicativos como <em>root</em>.</li>
 	<li>Fazer backup de seus arquivos, ou pastas.</li>
 	<li>Verificar o desempenho do sistema, verificar os dispositivos, verificar a conexão sem fio.</li>
</ul>
.

JoeNota: Comamdos para criar ou excluir arquivos. Verificar e atualizar se nexessario

JoeNota: Prrmissoes padrao e root - diferenvas
<h3>Scripting</h3>
NOTA : Os comandos fornecidos na seção de script devem ser colocados no editor de texto e não no terminal, a menos que seja instruído de outra forma.
Bash é principalmente uma linguagem de script, então seria um crime não falar sobre scripts.Vamos começar com um script bash. Mais precisamente, o famoso script “Hello World”.Você pode criar um script bash abrindo seu editor de texto favorito para editar seu script e salvá-lo (normalmente a extensão de arquivo .sh é usada para sua referência, mas não é necessária. Em nossos exemplos, usaremos a extensão .sh mas em vez disso, o Linux usa #!/path/to/runtime ou, neste caso, #!/bin/bash).
<pre>#!/bin/bash         
<span id="line-2-3" class="anchor"></span>
<span id="line-3-1" class="anchor"></span>echo "Hello, World"</pre>
A primeira linha do script apenas define qual interpretador usar. NOTA: Não há espaço em branco antes de #!/bin/bash.É isso, simples assim. Para executar um script bash, primeiro você precisa ter as permissões de arquivo corretas. Fazemos isso com o comando chmod no terminal (modo de mudança) da seguinte forma:
<pre>chmod a+x /where/i/saved/it/hello_world.sh   #Gives everyone execute permissions
<span id="line-2-4" class="anchor"></span># OR
<span id="line-3-2" class="anchor"></span>chmod 700 /where/i/saved/it/hello_world.sh   #Gives read,write,execute permissions to the Owner</pre>
Isso dará ao arquivo as permissões apropriadas para que possa ser executado.Agora abra um terminal e execute o script assim :
<pre>/where/i/saved/it/hello_world.sh</pre>
Esperamos que você tenha visto imprimir Hello, World em sua tela. Se estiver tão bem feito! Esse é o seu primeiro script Bash.
DICA Se você digitar:
<pre>pwd</pre>
Você verá o diretório no qual está trabalhando atualmente ( pwd significa 'imprimir diretório de trabalho'). Se o seu diretório de trabalho atual for /where/i/saved/it/, você poderá encurtar o comando acima para:
<pre>prompt$ pwd
<span id="line-2-5" class="anchor"></span>/where/i/saved/it
<span id="line-3-3" class="anchor"></span>prompt$ ./hello_world.sh</pre>
.
<h3>Variáveis</h3>
As variáveis ​​basicamente armazenam informações. Você define variáveis ​​como esta usando o editor de texto:
<pre>var="FOO"</pre>
'var' pode ser o que você quiser, desde que não comece com um número. "FOO" pode ser o que você quiser.

Para acessar as informações da variável você precisa colocar um ‘$’ na frente dela assim:
<pre>var="FOO"
<span id="line-2-6" class="anchor"></span>echo $var</pre>
Tente inserir essas linhas em um terminal, uma de cada vez; você verá que o primeiro apenas fornece outro prompt e o segundo imprime FOO.

Mas tudo isso é um pouco chato. Então, vamos fazer um script para pedir algumas informações ao usuário e depois repetir essas informações.
<pre> #!/bin/bash
<span id="line-2-7" class="anchor"></span>clear
<span id="line-3-4" class="anchor"></span>echo "Please enter your name"
<span id="line-4" class="anchor"></span>read name
<span id="line-5" class="anchor"></span>echo "Please enter your age"
<span id="line-6" class="anchor"></span>read age
<span id="line-7" class="anchor"></span>echo "Please enter your sex. Male/Female"
<span id="line-8" class="anchor"></span>read sex
<span id="line-9" class="anchor"></span>echo "So you're a $age year old $sex called $name"</pre>
read permite ao usuário inserir informações onde elas serão armazenadas na variável definida após a leitura. A variável de leitura pegaria qualquer entrada inserida pelo usuário e a armazenaria em $variável. Em seguida, acessamos isso com echo e configuramos uma frase elegante.Este script é razoavelmente confuso; read tem outra função que pode reduzir pela metade o tamanho deste script.

claro read -p "Por favor, digite seu nome:" nome leia -p "Por favor, insira sua idade:" idade leia -p "Por favor, insira seu sexo. Masculino/Feminino:" sexo echo "Então você tem $idade e $sexo chamado $name"

Esse é um código mais eficiente. No entanto, ainda é um pouco confuso quando executado. Uma solução? Os bons e velhos espaços em branco!
<pre>clear
<span id="line-2-9" class="anchor"></span>read -p "Please enter your name  : " name
<span id="line-3-6" class="anchor"></span>echo ""
<span id="line-4-2" class="anchor"></span>read -p "Please enter your age  : " age
<span id="line-5-2" class="anchor"></span>echo ""
<span id="line-6-1" class="anchor"></span>read -p "Please enter your sex. Male/Female  : " sex
<span id="line-7-1" class="anchor"></span>echo ""
<span id="line-8-1" class="anchor"></span>echo "So you're a $age year old $sex called $name"</pre>
Agora temos um script Bash eficiente e limpo.
<h3 id="If_Statements">If Statements</h3>
.
<h3 id="Storing_application_stdout_to_a_variable:">Storing application stdout to a variable:</h3>
.
<h3 id="FUNctions">FUNctions</h3>
.
<h3 id="Other_Scripting_Languages_related_to_Bash">Other Scripting Languages related to Bash</h3>
xxx
xxx
xxx

Bash Script

## Lögica de Programação

#! Mesmo conteudo JS

xxx
xxx
xxx

\o_
<!-- 
comentários.
 -->

<hr />

<img class="alignnone size-full wp-image-19277" src="https://joesynth.files.wordpress.com/2021/10/aprenda_programacao.png" alt="Aprenda Programação - HTML - JS - CSS" width="640" height="360" />

Veja também:
○ <a href="https://joesynth.wordpress.com/curso-sintese-sonora/">Curso Síntese Sonora Ilustrada</a>.
[oes: tit !]
