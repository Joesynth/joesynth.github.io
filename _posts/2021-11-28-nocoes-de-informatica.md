# Noções de Informática

Uum breve resumo dos temas <strong>software</strong>, <strong>hardware</strong> e <strong>informática</strong>.

Note que equipamento digital entende-se por computador, ou mesmo algo dedicado como um teclado sintetizador. Mas isso é vago, sendo que o ideal é sabermos de fato o que é <a href="https://joesynth.wordpress.com/2020/12/15/audio-analogico-e-digital/">análogo e digital</a>; então, veja o <em>link</em>.
<ul>
 	<li>Introdução.</li>
 	<li>Software.</li>
 	<li>Hardware.</li>
 	<li>Processo de boot.</li>
 	<li>Info - Exercícios.</li>
 	<li>Um pouco de história.</li>
  <li>Boas Práticas!</li>
</ul>
<pre>CI: circuito integrado.</pre>
<h2>🤔️ Introdução</h2>
<h6>Tipos de computadores</h6>
<img class="alignleft" src="https://www.w3scoop.com/wp-content/uploads/2023/11/Computer-Types.png" width="310" />

◾ notebook, netbook, laptop
◾ tablet
◾ smartphone
◾ tower computer, desktop computer.
◾ all-in-one computer
◾ supercomputer
◾ server (<a href="https://joesynth.wordpress.com/2021/11/28/software-servidor/">servidor</a>).
◾ nanocomputer
◾ smartwatch
<h6>Hardware e software</h6>
<table>
<tbody>
<tr>
<td style="text-align: left"><strong>Hardware</strong>
<img class="alignleft" src="https://joesynth.wordpress.com/wp-content/uploads/2017/09/ibm.jpg" width="120" /></td>
<td><strong>Software</strong>
<img class="alignleft" src="https://ic.unicamp.br/wp-content/uploads/2020/06/software-engineering-skills_resize_md.jpg" width="120" /></td>
</tr>
<tr>
<td>É a parte física de um equipamento digital. Ex.: o processador, peças (como <em>chips</em>, teclas, fios, encaixes).</td>
<td>São instruções e que dizem ao computador o que fazer.
É criado via <a href="https://joesynth.wordpress.com/2021/12/27/linguagens-resumo/">linguagens</a> de computador (<a href="https://joesynth.wordpress.com/2021/12/27/o-que-e-javascript/">JavaScript</a>, por ex.).</td>
</tr>
</tbody>
</table>

<strong>Exemplos de <em>software</em></strong>:

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/62px-Firefox_logo%2C_2019.svg.png" width="40" />Firefox:
Um <a href="https://joesynth.wordpress.com/2021/11/28/navegadores-para-internet/">navegador</a>, o qual utilizamos para acessar sites, por exemplo.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/2346px-Android_logo_2019_%28stacked%29.svg.png" width="40" />Android:
Um <strong>sistema operacional</strong> (SO) utilizado em celulares. O SO é o principal <em>software</em> de um computador.

O <em>software</em> é criado por <a href="https://joesynth.wordpress.com/2021/05/26/profissionais-de-informatica/">profissionais de programação</a>.
<h6>O usuário</h6>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Operating_system_placement.svg/960px-Operating_system_placement.svg.png" width="120" />

Note que do topo para a base nós temos:
1 - Usuário.
2 - <em>Software</em>. Ex.: <a href="https://joesynth.wordpress.com/2021/11/28/navegadores-para-internet/">navegador</a> Firefox.
3 - Software Básico (sistema operacional). Ex.: <a href="https://joesynth.wordpress.com/2021/11/28/por-que-usar-linux/">Linux</a> Ubuntu.
4 - Hardware.
<h6>Outros termos</h6>
<img class="alignleft" src="http://kids.pplware.sapo.pt/wp-content/uploads/2013/06/imagem_bytesvsbits01_small.jpg" width="120" /><strong>Medida - Byte</strong> (Byte com b maiúsculo):
● Igual a 8 bit. Octeto, sendo que a metade de um byte é o nibble (semioctecto)
● Converter <em>bytes</em> em <em>bit</em>, multiple por 8. Ex:
<pre>2Bytes x 8bits = 16 bit</pre>
<strong>Consumo de memória de uma simples letra </strong>: Escreva "oi" no bloco de notas e salve. Localize o arquivo salvo, veja propriedades e constate que ele tem 2bytes.
Sim! Cada letra consome 1byte.

<strong>Internet</strong>: Vide <a href="https://joesynth.wordpress.com/2021/11/28/rede/">Rede</a>.

<strong>Números Hexadecimais</strong>: Os <a href="https://joesynth.wordpress.com/2021/11/27/numeros-hexadecimais/">números hexadecimais</a> são usados, por ex.:
● música eletrônica (caso do <a href="https://joesynth.wordpress.com/2020/02/10/o-que-e-midi/">MIDI</a>),
● cores (tal como ocorre na linguagem de computador <a href="https://joesynth.wordpress.com/2021/11/27/html-css-e-js/">CSS</a>),
● linguagem <em>assembly</em>.

<strong>Latência</strong>: Na música, por exemplo:
Tempo gasto de processamento do áudio pelo computador (ou outro equipamento), resultando em atraso entre o momento que é dado o <em>play</em> e o som efetivamente seja tocado. A melhor latência para um sistema de gravação (ou qualquer equipamento de áudio digital) é zero, ou seja, todo processamento em tempo-real.

<h2>✍️ Software</h2>
<h5>Sistema Operacional e Kernel</h5>
<h6>OS (Operacional System) <span style="color: #0000ff">Sistema Operacional (SO)</span></h6>
Principal <em>software</em> do computador, sem ele o computador é incapaz de funcionar, inciar.

<img class="alignleft" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCEoB_qUqahA3WBNjoKc6pfmtqQr1AtZrCT5AHB9heiloB6ztLYyeYg2pA0ok68DNTZxbKpnbrlkDYE8tcqybh3ayKSD2IbKCDULE5MDsS2LVmUYQ6djnQszb-4QKhR4RTIOCq5bYBANY/s1600/er_photo_150727_52.png" width="120" /><em>Ubuntu (Linux), Windows e MacOS</em>.
O sistema operacional (SO) gere o <em>hardware</em> e o <em>software</em>. Na verdade, um SO é um conjunto de programas, incluindo agregados como <a href="https://joesynth.wordpress.com/2021/12/17/firewall-ferramentas/"><em>firewall</em></a> ou navegador, e que são instalados juntos com o próprio SO.
<h6>Kernel <span style="color: #0000ff">núcleo</span></h6>
Núcleo do SO; programa de computador no núcleo do SO. Componente central do SO, ele fornece uma plataforma para programas e diversos serviços 'rodarem' sobre ele. Tem controle sobre tudo _controla recursos de <em>hardware</em> (como a <a href="https://joesynth.wordpress.com/2021/11/28/memorias-de-computador/">memória do computador</a> ou <a href="https://joesynth.wordpress.com/2021/11/27/dispositivos-de-entrada-e-saida/">dispositivos de entrada/saída</a>) via <em>drivers</em> de dispositivo.

● é parte do código do SO,
● é um dos primeiros programas carregados ao ligarmos o computador.
● está sempre residente na memória.
● é o único programa que roda o tempo todo no computador.

<em><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kernel_Layout.svg/200px-Kernel_Layout.svg.png" width="150" /></em>

◾ <em>hardware</em>: o <em>kernel</em> tem acesso total...
● gerencia memória, disco rígido.
É quem gere o acesso à memória para programas na RAM, organiza dados para armazenamento, etc.
◾Gerencia arquivos.

O <em>kernel</em> dá o nível mais básico de controle sobre todos os dispositivos de <em>hardware</em> do computador. Para isso o <em>kernel</em> também conta com a ajuda do <em>firmware</em> e de drivers de dispositivo.
<h6>Software básico, de sistema, utilitário e aplicativo</h6>
<img class="alignleft" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCEoB_qUqahA3WBNjoKc6pfmtqQr1AtZrCT5AHB9heiloB6ztLYyeYg2pA0ok68DNTZxbKpnbrlkDYE8tcqybh3ayKSD2IbKCDULE5MDsS2LVmUYQ6djnQszb-4QKhR4RTIOCq5bYBANY/s1600/er_photo_150727_52.png" width="120" /><em>◾ <strong>Software Básico</strong> (sistema operacional): Vital, dá vida ao computador, e sem ele o PC não funciona. Gere todo hard e outros softs; portanto é básico, gerente. Ex.:
Ubuntu (</em><em><a href="https://joesynth.wordpress.com/2021/11/28/por-que-usar-linux/">Linux</a>), Windows, macOS</em>.

◾ <strong>Software de Sistema</strong>: Age no computador em baixo nível, num nível muito básico, diretamente com o <em>hardware</em>.
Ex.: SO <em>firmware</em>, <em>driver</em> de dispositivo, interface gráfica.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Television_remote_control.jpg" width="60" height="79" />
<pre><strong>Firmware</strong>: <em>soft</em> que fornece funções básicas de um dispositivo. Fica armazenado no próprio <em>chip</em>; em memória ROM, por exemplo (o que é feito na fabricação do componente).
Ex. de <em>firmware</em>: controle remoto, BIOS <span class="" dir="ltr" role="presentation"> (responsável por "dar a partida" no micro</span>).</pre>
◾<strong>Software Utilitário</strong>: Não é vital para funcionar o computador; muito útil, supri o OS.
<pre><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpTQVN0tqVJkZ5PEdjCy4vqET9A0tS7Rhjg&s" width="60" /> compressão de dados (7-zip, rar...),
anti-vírus <a href="https://joesynth.wordpress.com/2021/11/28/software-antivirus/">Kaspersky</a>,
<em>backup</em> (<em>online</em> por ex.),
gerenciamento de arquivos (<a href="https://joesynth.wordpress.com/2021/11/27/o-que-e-cli/">CLI</a>).

</pre>
◾<strong>Software Aplicativo</strong>: Dispensável para o computador, oferece praticidade ou ajuda ao usuário. Ex:

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/62px-Firefox_logo%2C_2019.svg.png" width="40" />
<pre>navegadores (<a href="https://joesynth.wordpress.com/2021/11/28/navegadores-para-internet/">Firefox</a>, Chrome...),
<em>softs</em> de escritório (<a href="https://joesynth.wordpress.com/2021/11/28/softwares-livres-mais-famosos/">LibreOffice</a>, Microsoft Office).</pre>
<em>Leitura complementar:</em>
<em>pt.wikipedia.org/wiki/Software_aplicativo.</em>

<strong>Plug-in (ou Add-in, Add-on)</strong>: Módulo de extensão; <em>snap-ins</em>... Equivale a módulos que aumentam os recursos doutro programa maior. Um <em>plugin</em> é um programa de computador e que traz uma função específica para o programa principal. Exemplos de programas que aceitam <em>plug-ins</em>:
<pre>● Navegador Firefox ● Software musical Cubase ● Audacity</pre>
<h6>Software: aquisição e código</h6>
<strong>Aquisição</strong>: Embora instalamos e usamos muitos <em>softwares</em> "de graça", a maioria absoluta é software privado, ou seja, proprietário.

<img class="size-medium wp-image-69488 alignleft" src="https://joesynth.wordpress.com/wp-content/uploads/2025/06/software_livre_proprietario_b.png?w=300" alt="Software Livre - Software Proprietário" width="300" height="169" />

O <strong>software proprietário</strong> é o modelo de negócios adotado por corporações. Ex.:
<pre>Windows (Microsoft), Chrome, Uber</pre>
Já o <strong>Software Livre</strong> podemos utilizar, de fato, livre.
<pre>Ubuntu (Linux), Firefox, <a href="https://joesynth.wordpress.com/2021/11/28/softwares-livres-mais-famosos/">Audacity</a></pre>
🤔️ Originalmente os softwares nasceram livres, e não proprietários. Inclusive, o Software Livre é a base da própria Internet, mesmo nos dias atuais e em todo mundo, ou seja, Ocidente e Oriente.
⚠️ O tema é amplo e envolve-se questões como licenças, código fechado ou aberto, anúncios, organizações etc. Leia o tutorial __Software Livre e Software Proprietário__.
<h6>Formatos de arquivos</h6>
Existe arquivos de texto, imagem, áudio e vídeo.

Cada formato de arquivo tem uma extensão, e esta é aquele nome no final de cada arquivo, tal como...
<pre>meuSom.<strong>mp3</strong> 
minhaFoto.<strong>jpg</strong></pre>
Leia o artigo "<a href="///home/joe/appjoB/o-que-e-extensao-de-arquivo.html">o que é extensão de arquivo</a>" e conheça as principais extensões de formatos de arquivos de texto, imagem, áudio e vídeo.
<h2>💽️ Hardware</h2>

<h4>CPU</h4>
<span style="color: #0000ff"><em>Central Processing Unit</em>, <span id="page3R_mcid5"><span dir="ltr" role="presentation">Unidade Central de Processamento;</span></span></span>
<span style="color: #0000ff"><em>μP, microprocessor</em>, microprocessador;</span>
<span style="color: #0000ff"><em>central processor, main processor</em>; processador</span><em>.
</em>

O <strong>processador</strong>, de todos os componentes, é o mais importante; é o principal ator (e mais famoso).

<img class="alignleft" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywapkh9HP_8UAu7RODG-ufrVDQ1Coqy_f-g&amp;s" width="120" />

<em>Um CI que faz cálculo e tomada de decisão de um computador</em>. [<em>ft:wiki</em>]
É o "cérebro" do computador; componente (em <em>hardware</em>) realmente ativo e que executa as instruções determinadas pelo <em>software</em> do computador.

<img class="alignleft" src="https://i.postimg.cc/76Fy9MQ8/Capture.jpg" width="310" />

<strong>CPU -Componentes básicos internos</strong>:

◾<strong>ULA</strong>
(Unidade Lógica e Aritmética).
◾<strong>UC</strong>
(Unidade de Controle): gere as operações do processador.
◾ <strong>Registradores</strong>: armazenam valores; sendo um tipo de memória de altíssima velocidade e volátil.

<strong>Arquitetura</strong>: Anos atrás os processadores manipulavam de uma vez só 32 bits, ou seja, 32 bits num único ciclo de <em>clock</em>.
<table>
<tbody>
<tr>
<td><strong>Arquitetura 32-bit (X86)</strong></td>
<td><strong>Arquitetura 64-bit (amd64)
</strong></td>
</tr>
<tr>
<td>Se baseia na arquitetura da família (de processadores) Intel 8086.</td>
<td>Processadores hoje são projetados para lidar com SO e aplicativos de 64-bit.</td>
</tr>
<tr>
<td></td>
<td>Athlon 64 foi o 1º para computador pessoal.</td>
</tr>
</tbody>
</table>
⚠️ SO (Sistema Operacional) é escrito pra 64-bit, bem como <em>driver</em>, etc.

⚠️ SO - Baixando o Programa:
a) Deve-se identificar quando o soft é escrito para 32-bit ou 64-bit.
b) SO 32-bit: vem escrito Intel 8086 ou 64-bit AMD 64X.

⚠️ SO - Atenção!
a) SO 64-bit: não deve ser instalado em micro 32-bit, dá erro!
b) Micro 64 com SO 32: funciona, mas não "enxerga" mais de 4 de RAM, ou seja, o sistema está subutilizado.

🤔️ Confirme se seu computador é 64 bits ou 32 bits! uname -m # x86_64 é sistema 64 bits; i386 ou i686 é 32 bits.
<pre><strong>Marcas microprocessadores (MPUs)</strong>: 
🇺🇸 Intel | Amd | Nvidia (Tegra), Qualcomm... 
🇯🇵️ Fujitsu (SPARC) |Renesas (Hitachi, Mitsubishi, NEC). 
🇹🇼 VIA | TSMC: fabrica sob encomenda para Apple, AMD, Nvidia, e Qualcomm. 
🇰🇷️ Samsung. 
🇷🇺️ Mikron. 
🇬🇧 ARM (projeta [<em>design</em>] para Apple, Samsung, Qualcomm...) 
🇮🇳️ IIT Madras/SCL.</pre>

<h4>MPU</h4>
<span style="color: #0000ff">Microprocessor Unit; microprocessador</span>.

"<em>a central processing unit when referring to digital signal processors</em>". [ft:en.wiki]

<img class="size-full wp-image-70961 alignleft" src="https://joesynth.wordpress.com/wp-content/uploads/2025/06/cpu_mpu.png" alt="cpu, mpu" width="149" height="214" />◾CPU =&gt; stand-alone, RAM, ROM, I/O, timers são separados.

◾Projetista pode decidir a quantidade de RAM, ROM, e ports de I/O.

◾Uso geral; expansível, versatilidade.
<h4>Coprocessor <span style="color: #0000ff">coprocessador</span></h4>
DSP e GPU são tipos de processador. Podem ser vistos como um extra para o processamento principal do computador, caso o usuário precise.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ic-photo-Motorola--DSP56001AFC27--%2856000-DSP%29.JPG/800px-Ic-photo-Motorola--DSP56001AFC27--%2856000-DSP%29.JPG" width="60" height="60" />

<strong>DSP</strong> (Processamento de Sinal Digital): famoso em estúdios musicais, vide <a href="https://joesynth.wordpress.com/2020/05/13/o-que-e-dsp/">O Que é DSP</a>.
<pre>🇺🇸 Motorola DSP 56001 [<em>foto</em>]</pre>
<strong>GPU</strong> (<em>Graphics Processing Unit</em>): Tipo de processador dedicado a gráficos.
<pre>🇺🇸 Intel | Amd | Nvidia (GeForce2 MX-400)</pre>
<strong>iGPU</strong>: processador gráfico integrado ao processador principal (a CPU).
<pre>🇺🇸 Intel | Amd | Nvidia</pre>

<h4>Placa-mãe</h4>
<em><span style="color: #0000ff">motherboard, mobo, main circuit board, mainboard</span></em>.

<img class="alignleft" src="https://images.saymedia-content.com/.image/t_share/MTc0MDY1NDE4ODEyNTMyMTY5/the-motherboard-components.jpg" width="300" />
Na placa-mãe encontramos conexões internas e inúmeras partes (<em>chipset</em>, entrada para pôr o processador etc) . Ex. de marcas:
<pre>🇹🇼 Gigabyte | <del>Abit</del> | Asus | Biostar | Via</pre>
⚠️ A placa-mãe pode ser de uma marca (Abit, por ex.), o processador de outra empresa (AMD) e o <em>chipset</em> doutro fabricante (por ex. VIA).

◾<strong>placa-mãe -</strong> <em><strong>processor socket</strong>,</em> <span style="color: #0000ff">soquete do processador</span>: componente na placa onde se encaixa o processador.
🤔️ Ligar placa-mãe sem processador? Varia! Umas ligam, outras não, outras bipam.

<img class="alignleft" src="https://ars.els-cdn.com/content/image/3-s2.0-B9780080969114100011-f01-04-9780080969114.jpg" width="300" />

◾<strong>placa-mãe -</strong> <strong><em>chipset</em></strong>: É um dos principais componentes lógicos de uma placa-mãe.
● Distribui e gerencia informações e funções do PC para o processador, RAM, HD, placa de áudio, etc.
● Normalmente lida com um tipo específico de microprocessador.
<pre><strong><em>mobo</em>, exemplos</strong>:
🇺🇸 Intel | Amd | Nvidia | <del>VLSI</del> 
🇹🇼 VIA 
🇨🇳️ Zhaoxin</pre>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chipset_schematic.svg/1200px-Chipset_schematic.svg.png" width="300" />

◾<strong>chipset</strong> (<em>north bridge</em> e <em>south bridge</em>). Gere os dados entre processador, memória, periféficos.
● Ponte norte (<em>northbridge</em>): Faz a comunicação do processador com itens de alta velocidade (RAM, barramentos como AGP e PCI Express).
●  Ponte sul (<em>southbridge</em>): está associada a periféricos baixa velocidade _controladores de HDs (ATA/IDE e SATA), portas USB, paralela, PS/2, serial, os barramentos PCI e ISA.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/IBM_ThinkPad_T42_Motherboard.jpg/500px-IBM_ThinkPad_T42_Motherboard.jpg" width="310" />◾ <strong>Placa, componentes (Resumo)</strong>:
● NB, northbridge, esquerda superior;
● CPU, esquerda inferior;
● GPU, centro superior;
● SB southbridge, direita superior.

⚠️ As duas pontes (bridges) podem surgir num único chip, reduzindo custos da fabricação.

◾<strong>placa-mãe - memória</strong>:

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kinds-of-RAM.JPG/220px-Kinds-of-RAM.JPG" width="120" />

É um dispositivo que permite ao computador guardar dados temporariamente ou permanentemente.
Há memória RAM, ROM, HD etc. O tema é amplo, então leia "<a href="https://joesynth.wordpress.com/2021/11/28/memorias-de-computador/">memórias de computador</a>".

◾ <strong>placa mãe - conectores</strong>:

<span style="color: #0000ff"><em>motherboard ports</em>, portas da placa-mãe</span>.

<img class="alignleft" src="https://csdits.com/wp-content/uploads/2019/07/MotherboardPorts.jpg" width="300" /> Esses conectores permitem ligarmos o <em>mouse</em>, o teclado e o monitor, mas também vários outros dispositivos (como microfone, fone de ouvido...).
Dependendo do modelo da placa pode haver algum conector diferenciado, é o caso do Firewire (que tem finalidade semelhante ao USB).

◾<strong>placa-mãe - dispositivo de entrada/ saída</strong>:
<table>
<tbody>
<tr>
<td style="text-align: center">dispositivos de entrada</td>
<td style="text-align: center">saída de informação</td>
</tr>
<tr>
<td style="text-align: center">🎤 microfone
🖱️mouse
⌨️ teclado</td>
<td style="text-align: center">🎧 fone de ouvido
🖥️ monitor</td>
</tr>
<tr>
<td>Com eles nós entramos com alguma informação dentro do computador; no caso, sons, cliques e letras.</td>
<td>Através do fone o computador nos entrega música, enquanto pelo monitor o PC nos mostra imagens em geral (textos, vídeos...).</td>
</tr>
</tbody>
</table>
Você pode ver mais detalhes sobre isso em "<a href="https://joesynth.wordpress.com/2021/11/27/dispositivos-de-entrada-e-saida/">dispositivos de entrada e saída</a>".

◾<strong>placa-mãe - bateria, relógio</strong>:

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Battery-lithium-cr2032.jpg/330px-Battery-lithium-cr2032.jpg" width="40" />Bateria CMOS (CR2032; bateria Lithium 3V): bateria que alimenta dois componentes do computador:
● Relógio.
● CMOS (pequena memória RAM que salva configurações do Setup _prioridade de boot, quantidade de unidades de armazenamento...).

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/AMI_486DX_EISA_BIOS_20051109.jpg/250px-AMI_486DX_EISA_BIOS_20051109.jpg" width="120" /> BIOS (tipo de firmware)

<strong>Firmware</strong> (software):
É software, mas armazenado em memória não volátil, no caso:
- ROM (memória somente leitura)
- memória programável (EPROM, EEPROM ou flash).
Alterar o firmware de um dispositivo armazenado na ROM requer a substituição física do chip de memória – embora um chip possa ser projetado para não ser removido após a fabricação.

<h4>Placa de vídeo ou áudio</h4>
Conectam-se à placa-mãe.

<strong>placa de vídeo</strong>:
● Processa as imagens vistas no monitor. Tem um o GPU e a VRAM (memória RAM da placa de vídeo).
● Ela deve ser auto-suficiente, não usando recursos do sistema (placa-mãe). Uma AGP 32Mb DDR satisfaz.
<pre>🇺🇸 Amd 🇺🇸 Nvidia
🇹🇼 Gigabyte 🇹🇼 Asus 🇹🇼 MSI</pre>
<strong>placa de áudio</strong>:
Antigamente era necessário uma placa, mesmo para um som a nível doméstico. Hoje os PCs já possuem algo, mas no caso de áudio dedicado (estúdio) veja <a href="https://joesynth.wordpress.com/2019/06/02/melhor-interface-de-audio/">Melhor Interface de Áudio</a>.

⚠️ On-board: refere-se a placa de vídeo (ou de som) embutida na própria placa-mãe.
<h4>SoC</h4>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Geode_GXLV233.jpg/500px-Geode_GXLV233.jpg" width="120" /><span style="color: #0000ff">System on a Chip - sistema em um chip</span>.
O dispositivo SoC quase sempre inclui...
● CPU, a unidade de processamento central,
● memória,
● armazenamento secundário,
● portas de entrada / saída.
<blockquote>Um smartphone ou um tablet são, em essência, computadores do tipo SoC.</blockquote>
Mais sofisticado que um sistema em um microcontrolador, pode incluir um microcontrolador como um de seus componentes.

Ele pode conter funções de processamento de sinal digital, analógico, de sinal misto e freqüentemente de radiofrequência; caso contrário, ele será considerado apenas um processador de aplicativo.
<pre>🇺🇸 Analog Devices, AMD, Apple, Broadcom.
🇯🇵️ Toshiba
🇨🇳️ Huawei, Espressif Systems (Arduino ESP32), Xiaomi Xring 01 (3nm).</pre>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Front_of_Raspberry_Pi.jpg/330px-Front_of_Raspberry_Pi.jpg" width="120" /> 🇬🇧 Raspberry Pi (modelo B, 2012).
Usa Broadcom BCM2835 (que integra CPU, GPU, SDRAM).
◾CPU 700 MHz◾ GPU: 250 MHz.
◾2 USB◾ Video input◾HDMI◾Audio outputs◾Ethernet (RJ45).
Memory (SDRAM): 256 ou 512 MiB.
É programado em linguagens como Python ou C++.

<strong>SoC: outros termos</strong>:
● PSoC (<em>Programmable</em> SoC): tipo de SoC programável, semelhante ao FPGA.
● Processador multi-core: um único <em>chip</em> ou "soquete" contendo duas ou mais CPUs chamadas "núcleos".
<pre>-https://en.wikipedia.org/wiki/PIC_microcontrollers
-https://en.wikipedia.org/wiki/Microcontroller
-https://en.wikipedia.org/wiki/System_on_a_chip
-https://en.wikipedia.org/wiki/Central_processing_unit</pre>

<h4>MCU</h4>
<span style="color: #0000ff">Microcontroller Unit - μC microcontrolador</span>.

<img class="alignleft" src="https://joesynth.wordpress.com/wp-content/uploads/2025/06/cpu_mcu.png" alt="cpu, mcu" width="149" height="137" /> Um CI que é um pequeno computador. É menos soffisticado que um SoC.
◾CPU, RAM, ROM, I/O e timer estão integrados em um chip.
◾Quantidade fixa de elementos on-chip (RAM, ROM, I/O ports).
◾Uso específico _aplicações onde custo, potência, espaço são fatores críticos.
<pre><strong>Microcontrolador - marcas, exemplos</strong>:
🇺🇸 Intel, Qualcomm, <del>Atmel</del>/Microchip.
🇩🇪️ Bosh, Siemens.
🇯🇵️ Fujitsu, Renesas (Mitsubishi, NEC, Hitachi).
🇹🇼 TSMC.
🇰🇷️ Samsung.
🇷🇺️ Mikron.
</pre>
<img class="alignleft" src="https://robonation.org/app/uploads/sites/5/2020/09/HowThingsWork-Microcontrollers-Figure1.svg" width="310" />

Possui:
● CPU (pode até ter mais de uma CPU (núcleos de processador).
● pode conter memória.
● periféricos de entrada / saída.

<strong>Aplicação</strong>? Sistema embarcados. Ex.: brinquedo, eletrodoméstico, controle de motor, ferramenta elétrica.

<strong><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino_Uno_-_R3.jpg/500px-Arduino_Uno_-_R3.jpg" width="120" /> Arduino</strong>: É um microcontrolador <em>single-board;</em> ou melhor, uma placa com microcontrolador ATmega328P.
Na verdade, o Arduino é uma plataforma eletrônica com <em>hardware</em> e <em>software</em> de código aberto (<a href="https://joesynth.wordpress.com/2021/11/28/software-livre-e-software-proprietario/"><em>open source</em></a>), compatível com Ubuntu, Lubuntu, Mac etc. É destinado a áreas do conhecimento ou aplicações como:
<pre>● computação ● eletrônica ● mecatrônica ● robótica ● Internet das Coisas (<em>IoT – Internet of Things</em>) ● impressão 3D ● ambientes automatizados.</pre>
<img class="alignleft" src="https://sites.usp.br/ltsi/wp-content/uploads/sites/248/2020/07/1.jpg" width="120" />Estudantes e pessoas com pouco conhecimento nessas áreas podem se desenvolver de uma forma mais simples, aprendendo eletrônica básica e programação via Arduino.
Atualmente há diversas placas de Arduino [<em>foto: 🇮🇹️ Arduino Uno</em>].

O Arduino pode ler variáveis físicas, como entrada de luz em um sensor, o toque de um dedo em um botão, etc. Sua programação permite o envio de linhas de comando para o microcontrolador (que está na placa), dizendo o que (e como) fazer. Basicamente, usa linguagem <a href="https://joesynth.wordpress.com/2021/12/27/linguagens-resumo/">C++</a> (ou mesmo tecnologias como a <a href="https://joesynth.wordpress.com/2021/11/23/linguagem-de-programacao-visual/">VPL</a> <em>open-source</em> NodeRed ou <a href="https://joesynth.wordpress.com/2021/11/27/o-que-e-node-js/">Node.Js</a>).

<strong>Componentes básicos</strong>: a plataforma tem dois componentes:
<pre><small><strong>Arduino IDE</strong>: é o software que operacionaliza o <em>hardware</em>, como um computador. É o ambiente de desenvolvimento que permite escrever, compilar e enviar o código para a placa Arduino.
<strong>Placa</strong>: pode ser entendida como o hardware do sistema que será estruturada para receber os projetos ou sistemas implementados. Possui:
◾Microcontrolador (cérebro do sistema): responsável por processar o software e manipular as portas de entrada e saída. Funciona como um computador dentro de um chip;
◾Pino de Entrada e Saída de dados: responsável por fazer com que a placa possa se comunicar com o ambiente externo. Há 14 portas digitais, 6 pinos de entrada analógica e 6 pinos de saída analógica (PWM – Pulse Width Modulation);
◾Pinos de alimentação: é responsável por fornecer diversos valores de tensão e são responsáveis por energizarem os componentes do projeto;
◾Conector USB: conecta a placa ao computador, é por onde ocorre a transferência do programa implementado para dentro da placa (do circuito);
◾Botão Reset: reinicia ou 'reseta' a placa;
◾Conversor Serial-USB e LED TX/RX: é responsável pela comunicação entre o computador e o microcontrolador, sendo necessário um chip que faça a tradução de comunicação de um para o outro. O LED Tx/Rx acende quando alguma transmissão ou recepção está sendo realizada pela porta serial;
◾Conector de Alimentação: é responsável por receber a fonte de alimentação externa e que pode ter uma tensão que varia de 7 a 20 volts e uma corrente mínima de 300 mA. Recomenda-se uma voltagem de 9 V;
◾LED de Alimentação: indica se a placa está energizada e LED Interno: LED conectado ao pino digital (Vidadesilicio, 2020).</small></pre>
<strong>Arduino - semelhantes:</strong> Há utros microcontroladores e plataformas de microcontroladores.  Mais casos para o aprendizado e para a construção de projetos práticos e didáticos são:
<pre>- Parallax Basic Stamp,
- BX-24 da Netmedia,
- Phidgets,
- Handyboard (MIT).</pre>
<strong>Microcontrolador para projetos mais avançados</strong>: pode ser utilizado um microcontrolador como o STM32, que tem maior poder de processamento e recursos.
<strong>Softwares de programação</strong>? ROS (Robot Operating System) e VEXcode são plataformas de programação muito utilizadas na robótica.

<h4>FPGA</h4>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Xerox_ColorQube_8570_-_Main_controller_-_Xilinx_Spartan_XC3S400A-0205.jpg/330px-Xerox_ColorQube_8570_-_Main_controller_-_Xilinx_Spartan_XC3S400A-0205.jpg" width="120" />

Circuitos integrados, porém não fixos; no sentido de serem específicos para aplicações (ASICs), mas sim podem ser programados para realizar diferentes funções lógicas. São programados em linguagens como HDL, por exemplo. Podem ter microprocessador. Marcas conhecidas:
<pre>🇺🇸 <del>Altera</del> (atual Intel), <del>Xilinx</del> (atual AMD)</pre>
.

<a href="https://joesynth.wordpress.com/aprenda-programacao-e-ganhe-o-mundo/"><img class="alignnone size-medium wp-image-67413" src="https://joesynth.wordpress.com/wp-content/uploads/2025/05/joe_flyer_aprendapro_c.png?w=300" alt="" width="300" height="298" /></a>
<h2>🚀️ Processo de boot</h2>
<h4>BIOS vs UEFI</h4>
<span style="color: #0000ff"><strong>B</strong>asic <strong>I</strong>nput/<strong>O</strong>utput <strong>S</strong>ystem</span>. Sistema Básico de Entrada/Saída: Micros utilizam memória para armazenar a BIOS.

ROM: memória não-volátil
- utilizada durante o processo de boot (processo de iniciação do sistema).
- armazena as instruções que devem ser executadas quando o computador é ligado.
<pre>🇺🇸 AwardBIOS (<del>Award Software</del>) | AMI (American Megatrends)
🇹🇼 Insyde Software 
SeaBIOS (LGPL)</pre>
<span style="color: #0000ff"><strong>U</strong>nified <strong>E</strong>xtensible <strong>F</strong>irmware <strong>I</strong>nterface</span>.

BIOS e UEFI são tipos de firmware; tamém são <em>softwares</em> de baixo nível responsáveis por...
● início dos testes em periféricos.
● localização do SO nos discos instalados.

A UEFI é a sucessora pro BIOS e faz o mesmo trabalho que ele, mas de forma um tanto diferente.
<table>
<tbody>
<tr>
<td><img class="aligncenter" src="https://blog.bbbaterias.com.br/wp-content/uploads/2024/01/bios.jpg" width="120" /></td>
<td><img class="aligncenter" src="https://blog.bbbaterias.com.br/wp-content/uploads/2024/01/uefi-768x484.jpg" width="120" /></td>
</tr>
<tr>
<td style="text-align: center"><strong>BIOS</strong> (tipo de firmware)
● usa ROM, principalmente.
● é memória não-volátil
● usada em micros mais antigos
● roda em modo de 16 bits _só permite a navegação com o teclado.
● Pode acessar o BIOS durante as fases iniciais do procedimento de inicialização.
● armazena todos os dados sobre inicialização e início no firmware.</td>
<td style="text-align: center"><strong>UEFI</strong>
● usa memória flash
● é memória não-volátil
● usada em micros mais recentes
● roda em modo de 32 ou de 64 bits _por isso ela consegue fornecer uma GUI com navegação com o mouse.
● UEFI: faz o mesmo trabalho que o BIOS.
● armazena todos os dados sobre inicialização e início em um arquivo .efi, em vez de armazená-las no firmware.
● arquivo .efi:
-armazenado no disco rígido.
-armazenado numa partição especial chamada ESP (EFI System Partition).
-Partição ESP também contém o carregador de boot.</td>
</tr>
</tbody>
</table>
⚠️ Teclas Del, F2, F10 (ou outra talvez): acessa a BIOS/UEFI durante a fase inicial do procedimento de <em>boot</em>, pressionando a tecla.
<h6>POST</h6>
<span style="color: #0000ff">power-on self-test, autoteste de inicialização</span>.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/POST_of_ASUS_P5KPL_on_SyncMaster_740N_20081006.jpg/250px-POST_of_ASUS_P5KPL_on_SyncMaster_740N_20081006.jpg" width="120" />

É um processo. Na prática um conjunto de rotinas feitas pelo <em>firmware</em> (BIOS/UEFI) do computador, assim que a máquina é ligada. É uma pré-inicialização do computador, antes mesmo do SO carregar. Ou seja, o processo de POST é gerenciado pelo BIOS, independente de SO.

Diz se o <em>hardware</em> está funcionando bem. Se o <em>hardware</em> funciona corretamente (ou não) sabe-se pelo BIOS que dá mensagens de erro. A mensagem de erro pode ser em formato texto (no console), LED ou áudio (bipe). Ex.:
● Nenhuma RAM instalada/detectada.
● O processador não está utilizável.

Finalizado o POST, e concluído com sucesso, será carregado o SO.
<h4>Bootloader</h4>
<span style="color: #0000ff"><em> boot loader, bootstrap loader</em></span>.
<span style="color: #0000ff">carregador de boot, carregador de inicialização</span>.

Programa responsável por inicializar um computador e um SO.
O <em>bootloader</em>, o <em>software</em> em si, fica guardado no MBR.

<strong>MBR</strong> (<span style="color: #0000ff"><em>Master Boot Record</em>, Registro Mestre de Inicialização</span>): Um tipo especial de setor de inicialização no início do dispositivo de armazenamento em massa (HD, por ex). Guarda informações sobre partições lógicas, contendo sistemas de arquivos.

Além, contém código executável que funciona como um carregador para o SO instalado. Esse código MBR é geralmente chamado de carregador de inicialização (boot loader).

<img class="alignleft" src="https://files.codingninjas.in/article_images/master-boot-record-1-1679260560.webp" width="310" />

O MBR contém de informação da estrutura organizacional do disco.
● Uma parte é reservada para o setor de boot (boot loader),
● outra parte guarda a tabela de partição,
● parte relacionada a assinatura (Número Mágico).

Semelhante ao MBR é o esquema de tabela de partição GUID (GPT) de novos computadores. Um GPT pode coexistir com um MBR para fornecer compatibilidade com sistemas mais antigos.

🤔️ <em>boot manager</em> (gerenciador de boot): gere a escolha de vários SOs. Caso a máquina possua mais de um SO o gerenciador apresentará um menu, aí o usuário pode escolher qual sistema usar.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/GRUB_v2.12_screenshot%2C_Fedora_41.png/500px-GRUB_v2.12_screenshot%2C_Fedora_41.png" width="120" /> ● <strong>GRUB</strong> (GNU GRand Unified Bootloader), anos 90.
Escrito em Assembly, C; licença GPL.
<span class="HwtZe" lang="pt"><span class="jCAhz ChMk0b"><span class="ryNqvb">Um pacote de <em>bootloader</em> do Projeto GNU; uma implementação de referência da Especificação Multiboot (da <a href="https://joesynth.wordpress.com/2021/11/28/software-livre-e-software-proprietario/">FSF</a>). Dá ao usuário a opção de inicializar um dos vários SOs num computador configurado para <em>multiboot</em> ou selecionar uma configuração de kernel específica disponível nas partições de um SO específico.
🤔️ Lilo: é outro gerenciador usado no Linux
</span></span></span>
<h4>Computador: ligando...o boot</h4>
<pre><strong>Nota!</strong>
● Memória principal: ao ligar o computador ela está vazia.</pre>
<strong>Procedimento de boot: a parte do firmware/BIOS</strong>.
<pre>1. <strong>Usuário</strong> pressiona o botão ligar.
2. CPU inicia e precisa de instruções para funcionar. Com a memória principal vazia, a CPU se volta ao carregamento do chip do <strong>firmware</strong> da placa-mãe. Começa a execução dessas instruções.
3. Código do firmware faz o <strong>POST</strong>. Detecta-se periféricos conectados (mouse, teclado...). Há um 'bipe' se houver êxito no POST.
4. Código do firmware procura pelo <strong>bootloader</strong>; e ao encontrá-lo, o firmware entrega a ele o controle do computador.
</pre>
<strong>Procedimento de boot: fase do carregador de boot</strong> (<em>bootloader</em>).
<pre><strong>Nota!</strong>
● GUI (Interface Gráfica de Usuário).</pre>
Agora que o <strong>bootloader</strong> está carregado, sua tarefa é carregar o resto do SO.

Carregador de boot:
● está disponível somente no 1º setor de uma unidade de disco, que tem 512 bytes.
● SOs modernos: devido a complexidade deles, alguns carregadores de boot tendem a fazer carregamento em diversos estágios, onde o carregador de boot principal carrega o carregador de boot do 2º estágio em um ambiente no qual ele não está restrito aos 512 bytes.

Carregador de boot: em seguida carrega o <strong>kernel</strong> na memória. Sistemas operacionais do tipo UNIX, então, rodam o processo <strong>init</strong> (o processo principal, a partir do qual os outros processos são derivados/executados) e finalmente inicializa os níveis de execução.

Depois de tudo isso e alguns outros drivers serem inicializados, a <strong>GUI</strong> é carregada e você verá a tela de login.

Essa foi uma visão bem geral do processo de boot.

<img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Legacy_BIOS_boot_process_fixed.png/960px-Legacy_BIOS_boot_process_fixed.png" width="480" height="113" />
<pre>-https://blog.bbbaterias.com.br/bios-e-uefi-na-placa-mae-o-que-sao-e-como-funcionam/
-https://www.freecodecamp.org/portuguese/news/uefi-x-bios-qual-e-a-diferenca/</pre>

<h4>Ligando- resumo</h4>
<img class="alignleft" src="https://s3.amazonaws.com/iphonecde/BIOSUEFI.JPG" width="310" />Usuário: liga o botão do PC.
● BIOS: Inicialização do hardware, feita pelo firmware do sistema.
● Programa que é responsável pela escolha do SO a ser carregado.
● Etapa onde o Kernel do SO é carregado e assume o controle da máquina.
● Primeiro programa a ser carregado, responsável pela inicialização e carregamento dos outros programas.
● Scripts são responsáveis pela inicialização de serviços e configurações iniciais.

<img src="https://www.baeldung.com/wp-content/uploads/sites/2/2022/10/boot-process-662x1024.png" width="310" />

<img src="https://vulnerablelife.wordpress.com/wp-content/uploads/2016/01/bios_vs_uefi.png?w=736" width="480" />
<h2>📑️ Info - Exercícios</h2>
<pre><strong>1</strong>.
O sistema de arquivos mais comum de um CD-ROM é o:
a) CDR. b) CDRW. c) FAT.  d) NTFS.  e) CDFS 

<strong>2</strong>.
Analise as seguintes afirmações relativas a componentes básicos de um computador.
I. A memória RAM pode ser lida ou gravada pelo computador e outros dispositivos.
II. A memória virtual é utilizada para armazenamento temporário, visando à execução de programas que precisam de mais memória, além da principal.
III. Paginar significa mover as partes da memória ROM usadas com pouca frequência como memória de trabalho para outra mídia armazenável, geralmente o CD-ROM.
IV. As memórias ROM e Cache têm a mesma velocidade de acesso em computadores mais modernos, desde que o processador tenha sido configurado para utilizar a memória virtual como intermediária entre a memória RAM e o HD. 

Indique a opção que contenha todas as afirmações verdadeiras.
a) I e II  b) II e III.  c) III e IV.  d) I e III.  e) II e IV.

<strong>3</strong>.
Um usuário tinha uma impressora instalada e funcionando corretamente em um velho computador.
Comprou um novo computador e resolveu transferir para ele a impressora. Após concluir a instalação da impressora, observou que, ao enviar um documento para impressão, este era impresso de uma forma incompreensível, isto é, o texto ou imagem enviados para impressão eram substituídos por uma série de caracteres completamente diferentes do original.

A causa provável do problema é:
a) a inversão dos conectores do cabo da impressora.
b) a instalação de um driver incorreto 
c) a utilização de um cabo USB usado pelo computador novo no lugar de um cabo paralelo usado pela impressora -------------antiga. 
d) utilização de alimentação 220Volts na impressora quando deveria ser 110Volts.
e) a existência de um outro equipamento em conflito com a impressora. 

<strong>4</strong>.
A parte da CPU responsável pelo processamento propriamente dito é a unidade:
a) de controle.	
b) aritmética e lógica 
c) gerenciadora de processos.
d) processadora de gerenciamento.
e) de memória cache.

<strong>5</strong>.
O processo que prepara o disco rígido para gravação, dividindo-o em trilhas e setores é denominado:
a) formatação 
b) FAT - file allocation table.
c) VFAT - virtual FAT.
d) blocagem de disco.
e) pastas ou diretórios.
</pre>

<h2>📜️ Um pouco de história</h2>
<h6>Microprocessor</h6>
🇺🇸 <b>Intel 4004</b>, 71
Max. CPU clock rate: 740 kHz, Data width: 4 bits,
🇯🇵 <b>Busicom </b>Calculadora.

●μP Z80.
<h6>Microcontrolador</h6>
<pre>🇺🇸 TI (Texas Instruments) TMS1000, 74
CPU 4 bit,
read-only memory (ROM),
read/write memory (RAM),
input/output (I/O) [entrada/saída; E/S)

🇺🇸 Intel 8742 [8 bits]
- CPU rodando a 12 MHz,
- RAM de 128 bytes, EPROM de 2048 bytes,
- E/S no mesmo chip.
🇺🇸 Intel 8048 e 8051.
🇺🇸 Microchip Technology PIC.
Ou pick, é uma família de <em>microcontrollers</em>.</pre>
<h6>DSP</h6>
Vide <a href="https://joesynth.wordpress.com/2020/05/13/o-que-e-dsp/">O Que É DSP</a>?
<h4>Fontes</h4>
<img class="" src="https://i1.wp.com/joesynth.files.wordpress.com/2017/09/dic_b1.jpg" width="400" height="433" />

<img class="alignleft" src="https://i0.wp.com/joesynth.files.wordpress.com/2017/09/dic_a.jpg" width="400" height="546" />

Livro Dic. dos Usuários de Micro Computadores, 1990/92, Editora Campos.

● *ft:wiki. ● ¨ft:morimoto, Apple I, 6502 da motorola, 4K RAM, 1Mhz ; no wiki é MOS tec mesmo a fab. ● °MR.Sawaya ● **ft:site steinberg.



É isso!  
\o_
<!-- youtube.com/watch?v=28UDvdex_bU -->
