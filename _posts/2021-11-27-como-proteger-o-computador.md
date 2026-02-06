


Como proteger o computador?

... E a sí mesmo? Veja um tutorial completo sobre <em>bots</em>, <em>hoax</em>...


Hum... <a href="https://joesynth.wordpress.com/2021/11/27/seguranca-da-informacao/">segurança da informação</a>? Como proteger o computador?
Nesse tutorial passaremos pelos seguintes temas:
<ul>
 	<li><em>Malware</em>.</li>
 	<li><em>Spam</em>.</li>
 	<li>Ataques.</li>
 	<li>Golpes.</li>
</ul>
<h2>Malware</h2>
<span style="color: #0000ff">Abreviação de "malicious <em>software</em>", <em>software</em> malicioso, programa malicioso</span>.

Programa malicioso, tal como o vírus, o <em>worm</em>, Cavalo de Troia, <em>spyware</em>...
<pre>Veja um resumo. Legenda:
⚙️ Funcionamento.
👹 O mal.
🛡️ A defesa.</pre>
<h6>Vírus</h6>
<img class="alignleft wp-image-839" src="https://joesynth.files.wordpress.com/2017/09/virus2.jpg?w=300" alt="" width="150" height="84" />

Programa (ou parte).
O vírus usa um arquivo hospedeiro pra funcionar, ou seja, não age de forma independente.  Se multiplica utilizando-se doutros arquivos/programas. Se multiplicam, podem replicar-se, se propagam infectando.
Embuti cópias em outros programas, ou seja, fica dentro de arquivos/programas. Ou seja, é capaz de se replicar, criar cópias de si mesmo em outros hospedeiros e assim se tornando parte de outros programas e arquivos.
Ele depende da execução do programa hospedeiro, algo feito pelo usuário que sem saber, executa o arquivo infectado. Ao fazê-lo o vírus chega a sua finalidade, perpetuando-se.

⚙️ O arquivo "A" tem o vírus que faz uma cópia de si (de seu próprio código) para o arquivo "B", que até então estava saudável.
👹 Infecta arquivos/programas; pode apagar arquivos inteiros, inutilizar HDs, desconfigurar SO, acessar lista de <em>emails</em> enviando cópias de si mesmo.
🛡️ Antivírus/Malware.
Atenção com mídia removível, email, páginas na Web.

<strong>Vírus: alguns vírus</strong>:
- vírus de <strong>script</strong> (pode executar script via páginas Web).
- vírus via <strong>email</strong>.
- vírus de <strong>macro</strong> (infecta arquivos do Office como o Word).
- vírus de <strong>celular</strong> (inclusive mensagens).
- vírus de <strong>programas</strong> (focado na extensão .exe).
<h6>Worm</h6>
<span style="color: #0000ff">verme</span>.

<img class="alignleft" src="https://images.freeimages.com/images/premium/previews/1688/16885332-computer-worm.jpg" width="80" height="92" />É diferente do vírus. Não precisa de um hospedeiro pra funcionar, não precisa estar dentro de um arquivo/programa. Não embuti cópias em outros programas. Não fica dentro de arquivos/programas.  O worm é o próprio arquivo/programa. Pode-se replicar, e se multiplica de computador para computador fazendo cópias de si mesmo para outros computadores. Se multiplica através das redes de computadores, ou seja, automaticamente vai criando cópias de si mesmo de computador em computador da rede (principalmente internet).
⚙️ O computador "A" tem o <em>worm</em> que faz uma cópia de si (de seu próprio código) para o computador "B" que estava na rede, até então saudável.
👹 Infecta a rede de computadores (inclusive internet).
Pode tornar o computador vulnerável a ataques, apagar arquivos, enviar documentos por email, deixar o computador e rede lentos.
🛡️ Antivírus/Malware.
<h6>Bot</h6>
<span style="color: #0000ff">abreviação de "robot"</span>.

Programa instalado no computador do usuário (por um <a href="https://joesynth.wordpress.com/2021/11/27/seguranca-da-informacao/"><em>cracker</em></a>). Se propaga usando a mesma ideia do <em>worm</em>, ou seja, propagação automática explorando vulnerabilidades de segurança do sistema.
- Zumbi é o computador quem tem um <em>bot</em> instalado e controlado pelo invasor. O dono do fica alheio.
- Botnet é uma rede de <em>bots</em>, rede de computadores zumbis criados pelo invasor. Se comunica remotamente com o invasor que controla as ações do bot, dizendo o que ele vai executar.
👹 Ataque DoS (vide <strong>Ataques</strong>).
Ataque DDos (vide <strong>Ataques</strong>). Também furto de dados, envio de spam (emails em quantidade).
<h6>Trojan Horse</h6>
<span style="color: #0000ff">cavalo de Troia</span>.

Programa que parece inofensivo ou até um presente (cartão virtual, álbuns de foto, protetor de tela, jogo) e daí o instalamos. Um jogo além de jogo executará outras funções sem a ciência do dono.
👹 Instalação doutros malwares (como backdoor), abrir portas. Ou seja, controle geral do invasor.
🛡️ Antivírus/Malware.
<h6>Spyware</h6>
<span style="color: #0000ff"><em>software</em> espião</span>; <span style="color: #0000ff"><em>spy:</em> espião</span>.

Espião que monitora o sistema/computador. Pode ser usado por pais ou empresas para monitorar seus filhos ou funcionários.
<table width="100%">
<tbody>
<tr valign="top" bgcolor="#CCFFFF">
<td style="text-align: center" width="33%"><strong>Keylogger</strong>
Registra o que digitamos no teclado, podendo nos monitorar quando estamos num site de banco ou ecommerce e, envia os dados pro espião. Para se defender os bancos criaram o teclado virtual o qual o cliente digita com <em>mouse</em>.</td>
<td style="text-align: center" width="34%"><strong>Screenlogger</strong>
Registra a imagem donde clicamos com o <em>mouse</em>.</td>
<td style="text-align: center" width="33%"><a href="https://joesynth.wordpress.com/2021/11/28/software-livre-e-software-proprietario/"><strong>Adware</strong></a>
Programa para apresentar propagandas; pode espiar seus hábitos de consumo para gerar propagandas personalizadas.</td>
</tr>
</tbody>
</table>
👹 Envia informações (como senha) a terceiros. Propaganda muito perfeita pra você, mas oriunda de espionagem prévia.
🛡️ Antivírus/Malware. O Windows Deffender é um anti-spyware.
<h6>Backdoor</h6>
<span style="color: #0000ff">porta dos fundos</span>.

Recurso (de programa) que abre portas do computador, dando acesso remoto para retorno do invasor. Pode ser adquirido inocentemente executando Cavalo de Troia.
👹 Deixa portas vulneráveis no sistema.
Permite possíveis ataques, retorno de um invasor
🛡️ Antivírus/Malware. Outros.
<h6>Rootkit</h6>
Kit de programas instalados no computador do usuário, um conjunto de programas. Se esconde dos programas de segurança.
👹 Assegura que o invasor possa realizar diversas invasões novamente.
<h6>Sniffer</h6>
<span style="color: #0000ff"><em>farejador</em></span>.

Farejador de pacote, captura pacotes dentro de uma rede.
- Uso ético: monitora e analisa o tráfego de rede para detectar problemas e manter um fluxo eficiente.
- Uso malicioso: Pode ser instalado no computador do atacante, que vai monitorar
um computador de usuário na rede.
👹 O espião vê, e monitora a informação.
🛡️ Em redes locais, o uso de <em>hub</em> em vez de <em>switch</em> facilita a ação do <em>sniffer</em>.
<h6>Ransomware</h6>
"Sequestra" arquivos para serem devolvidos mediante pagamento.
👹 Você pode ter que pagar algo para reavêr seus arquivos.

<hr />

<h2>Spam</h2>
<em>Spam</em> é mensagem eletrônica não solicitada, normalmente enviada a muitas pessoas.
👹 Disseminam propaganda; mitos, lendas, correntes, boatos, pornografia, programas maliciosos, golpes.
🛡️ Deve-se ter atenção.
<h6>Spit</h6>
<em>Spam</em> via telefonia IP.
<h6>Spim</h6>
<em>Spam</em> via aplicativos de trocas de mensagens instântânesas (icq, msn).
<h6>Spam Zombie</h6>
<img class="alignleft" src="https://antispam.br/images/ilust-zombie.png" width="120" />Computadores infectados por <em>worms</em> ou <em>bots</em>, daí controlados por <em>spammers</em>.
👹 Spammers transformam os computadores zumbis em servidores de email para envio de spams.
🛡️ Atenção na lentidão da máquina, pois pode indicar um computador zumbi.
<h2>Ataques</h2>
<h6>Scan</h6>
<img class="alignleft" src="https://image.freepik.com/vetores-gratis/internet-scam_21565-3.jpg" width="80" height="80" />Efetua buscas em redes.
Verifica os computadores ativos e coleta informações sobre eles.
👹 Visa descobrir as vulnerabilidades para posterior ataque.
<h6>Sniffing</h6>
Fareja a rede e intercepta dados relevantes. Usa programa <em>sniffer</em>.
<h6>Spoofing</h6>
Mascara algo.
E-mail spoofing, email;
IP spoofing, IP.
👹 Vemos email ou IP diferente do real.
<h6>Força Bruta</h6>
<img class="alignleft" src="https://www.kaspersky.com.br/content/pt-br/images/repository/isc/44-BruteForce.jpg" width="120" />Atacante visa descobrir usuário e senha via tentativo/erro, programas automáticos.
🛡️ Devemos evitar senhas fracas.
<h6>Defacement</h6>
<span style="color: #0000ff">desfiguração, deformação</span>.

<img class="alignleft" src="https://documents.trendmicro.com/images/tex/articles/Defacement-03.png" width="120" />Alterar, desconfigurar ou pixar o conteúdo.
Defacer é o atacante, quem realiza.
<h6>DoS</h6>
<span style="color: #0000ff">Ataque de Negação de Serviço</span>.

Visa o servidor deixar de oferecer o serviço.
👹 Acessamos uma página do site e ela está fora do ar.
<h6>DDos</h6>
<span style="color: #0000ff"><em>Distributed Denial of Service</em> - Ataque Distribuído de Negação de Serviço</span>.

Ataque semelhante ao DoS; ataque em sistema servidor para parar de funcionar (negar
seu serviço).
👹 Ataque simultâneo devido uso de <em>botnet</em>, pela sobre carga o servidor para.

<hr />

<h2>Golpes</h2>
Temos: <em>phishing</em>, <em>pharming</em> e <em>hoax</em>.
<h6>Phishing</h6>
<img class="alignleft" src="https://docs.saninternet.com/wp-content/uploads/2020/01/phishing.png" width="150" />Site falso.
⚙️ Usuário é induzido a ir para ele e passar dados pessoais.
👹 Estelionatário visa vantagens financeiras com os dados obtidos nas páginas falsas.
🛡️ Atenção em <em>link</em> de <em>email</em>, banner; atenção a URL do site que está.
<h6>Pharming</h6>
Site falso, porém devido o servidor <a href="https://joesynth.wordpress.com/2021/12/27/web-servidores-brasileiros/">DNS</a> ter sido atacado _e consequentemente nos levando ao site falso. Neste caso, mesmo se pesquisarmos na internet o site correto, seremos levados ao falso.
👹 Idem.
🛡️ Idem.
<h6>Hoax</h6>
<span style="color: #0000ff">boato</span>.

<img class="alignleft" style="width: 120px" src="https://pplware.sapo.pt/wp-content/uploads/2019/02/Momo-Challenge-YouTube-WhatsApp.jpg" height="67" />

(foto: <em>Momo Challenge</em>).
Denigre imagem de pessoa ou empresa, onde autor aparentemente tem fidelidade, credibilidade.
👹 Criar polêmicas, etc.
🛡️ Verifique a fonte _seja texto, imagem, vídeo. Atenção em <em>emails</em> e sites de relacionamentos.

Leia também sobre <a href="https://joesynth.wordpress.com/2021/12/12/antivirus-firewall/">defesa</a> e <a href="///home/joe/appjoB/permissoes_em_apps.html">permissões em apps</a>.

É isso! Grande abraço.
🔗️ Ouça Joe S no Bandcamp: <a href="http://www.joesynth.bandcamp.com">JoeSynth.bandcamp.com</a>.
🔗️ Siga no Instagram: @joe_synth

\o/
<!-- 
-youtube.com/watch?v=jgZQcsn2FYA&amp;index=32&amp;list=PLjwdid56Jc_BL0jb8be0Zr_4uZ-uWKJ5g
-youtube.com/watch?v=JxN8aK10q48&amp;index=22&amp;list=PLjwdid56Jc_BL0jb8be0Zr_4uZ-uWKJ5g
-youtube.com/watch?v=w5MbpWv7Zs4&amp;index=2&amp;list=PLKaxXxugagVs-r531AbIPB5Gw83AKbHj6
-https://www.avast.com/pt-br/c-sniffer#academy Backdoor....pt.wikipedia.org/wiki/Backdoor#Prote.C3.A7.C3.A3o IDS.........pt.wikipedia.org/wiki/Sistema_de_detec%C3%A7%C3%A3o_de_intrusos
-https://www.youtube.com/watch?v=tjJ-Qh4N9Uw
-https://www.youtube.com/watch?v=Qg7mhOXH7QY Firewall youtube.com/watch?v=QzAqcbJ5Zxo&amp;index=3&amp;list=PL4i0dRYFvxd0fEJIkzTB_PNMcPCgUHLtQ
-https://www.youtube.com/watch?v=cWld3rMD7Wk&amp;list=PLucm8g_ezqNred_fII4GzZxMi91PKbney
-->

<hr />

<img class="alignnone size-full wp-image-19277" src="https://joesynth.files.wordpress.com/2021/10/aprenda_programacao.png" alt="Aprenda Programação - HTML - JS - CSS" width="640" height="360" />

Veja também:
○ <a href="https://joesynth.wordpress.com/curso-sintese-sonora/">Curso Síntese Sonora Ilustrada</a>.
[oes: tit !]