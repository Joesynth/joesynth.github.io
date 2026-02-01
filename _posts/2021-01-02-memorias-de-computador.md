# Memórias de computador

O que é memória? RAM, ROM, <em>cache</em>, primária, secundária...  

A memória é um dispositivo que permite ao computador guardar dados, temporariamente ou permanentemente.
A unidade básica de memória é o <em>bit</em>, digito binário.
<p class="firstHeading"><span style="color: #0000ff"><em>computer memory</em>: m</span><span class="Y2IQFc" lang="pt"><span style="color: #0000ff">emória do computador</span>.</span></p>
Vamos aqui conheçer os principais tipos de memória de computador, além de algumas ideias.
<h3>Memória volátil &amp; não-volátil</h3>
●  <strong>Volátil</strong>: pode armazenar informações somente quando energizadas, portanto se a energia some as informações da memória são perdidas.
Ex.: a memória principal, memória <em>cache</em> e os chamados registradores.

<strong><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/D23128C_PROM.jpg/250px-D23128C_PROM.jpg" width="80" />● Não-volatil</strong>: guarda a informação mesmo que não haja alimentação, ou seja, <span id="page105R_mcid10" class="markedContent"><span dir="ltr" role="presentation">energia elétrica está desligada</span></span>. Ex.:
<pre>memória ROM (incluso PROM, EPROM, EEPROM); BIOS.
memória flash (pen drive, BIOS)
discos rígidos, CDs, disquete.</pre>
<h3></h3>
<h3>Memória Principal - RAM</h3>
<span style="color: #0000ff"><i>main memory, primary storage, </i><i>internal memory</i>, <i>prime memory</i></span>.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kinds-of-RAM.JPG/220px-Kinds-of-RAM.JPG" width="120" />

● Memória de trabalho.
Guarda dados e programas enquanto estão sendo processados.
● RAM acima de 4GB: É imperativo o uso de arquitetura X64. Num computador de 4 de RAM para arquitetura 32-bit (processador), ao colocarmos mais 4, ele não vai "enxergar".
<h3>Memória secundária e terciária</h3>
Elas são parecidas, veja:

<strong><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/35-Desktop-Hard-Drive.jpg/220px-35-Desktop-Hard-Drive.jpg" width="120" />Secundária</strong>:
● Memórias externas inclui HD, CD...
● É a memória de armazenamento em massa, para armazenamento permanente; não volátil. Não pode ser endereçada diretamente, tratada pelo processador; assim, a informação precisa ser carregada na memória principal antes.
● Exemplo de dados armazenados: <a href="https://joesynth.wordpress.com/2021/11/28/nocoes-de-informatica/">SO</a> (sistema operacional), <em>softs</em>, músicas, textos, etc.

<span class="HwtZe" lang="pt"><span class="jCAhz ChMk0b"><span class="ryNqvb">🤔️</span></span></span> Swap: Uma área auxiliar que socorre sua RAM em certos momentos.
É uma partição nos dispositivos de memória persistente (HD, SSD).

<strong>Terciária</strong>:
● Secundária mas que depende de montagem, é o caso de fitas magnéticas, discos ópticos.
<h3>Armazenamento Temporário</h3>
<img class="alignleft" src="https://images.easytechjunkie.com/black-microprocessors.jpg" width="120" />

● Memória <em>Cache</em>: Memória do microprocessador. Trabalha numa velocidade tão alta quanto ele consegue, ou seja, está interligada diretamente nos processadores.
● <em>Cache</em>: Memória. Dispositivo de acesso rápido, interno num sistema. Usado como intermediário entre um operador de um processo e o dispositivo de armazenamento.
<table>
<tbody>
<tr>
<td style="text-align: center">Cache L1</td>
<td style="text-align: center">Cache L2</td>
<td style="text-align: center">Cache L3</td>
</tr>
<tr>
<td style="text-align: center">Está presente dentro do processador.</td>
<td style="text-align: center">É um adicional ao L1 e que favorece até o rendimento do processador (mesmo de <em>clock</em> baixo).</td>
<td style="text-align: center">É adicional ao L2, utilizando <em>cache</em> externo presente na placa-mãe.</td>
</tr>
</tbody>
</table>
● Cache de disco. Memória incluída na placa lógica do HD, que armazena as últimas trilhas lidas.
● Memória física.
● Memória virtual: técnica que usa a memória secundária como uma <em>cache</em> para armazenamento secundário. Consiste em recursos de hardware e software.
<h3>Endereço de memória</h3>
● Identificador único para um local de memória no qual um processador (ou outro dispositivo) pode armazenar pedaços de dados. Usa-se na memória física e na memória virtual.
<h3><span dir="ltr" role="presentation">Hierarquia de Memória</span></h3>
<img src="https://files.passeidireto.com/778dfe07-756e-4471-9709-d2a5c864da76/bg3.png" width="320" />
😃 Note que na base da pirâmide nós temos os <a href="https://joesynth.wordpress.com/2021/11/27/dispositivos-de-entrada-e-saida/">dispositivos de entrada/saída</a>; coisas como teclado, <em>mouse</em>...

<img src="https://arquivos.infra-questoes.grancursosonline.com.br/imagem/prova/51084/questao/1542291-20210216163522000000-0.jpeg" width="320" />
Note também algo relacionado à velocidade, das memórias.

É isso, grande abraço!
\o/

<hr />

<img class="alignnone size-full wp-image-19277" src="https://joesynth.files.wordpress.com/2021/10/aprenda_programacao.png" alt="Aprenda Programação - HTML - JS - CSS" width="640" height="360" />

Veja também:
○ <a href="https://joesynth.wordpress.com/curso-sintese-sonora/">Curso Síntese Sonora Ilustrada</a>.
[oes: tit !]
