# Hardware de rede

Conheça os principais equipamentos, além de camadas.


Olá!
Indo direto ao assunto...
<h2>Router</h2>
<span style="color: #0000ff"> roteador</span>.

Camada 3 modelo OSI. Vide Gateway.
<h2>Switch</h2>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2550T-PWR-Front.jpg/370px-2550T-PWR-Front.jpg" width="150" />Nele conecta-se computadores, impressora.
Os computadores (estações) ficam ligados entre si.
● Camada 2 modegatlo OSI.
● Pode ter dezenas de portas.
<h2>Hub</h2>
<span style="color: #0000ff">concentrador</span>.

Camada 1 modelo OSI. Sendo assim, ele só repete o sinal elétrico e não lê as informações (dados, frames, pacotes...).
● O que entrada numa porta sai (é copiado) nas outras.
● É o centro da sua rede de topologia estrela sendo que todos equipamentos são ligados a essa central, concentrador, comutador.
Não é mais usado hoje em dia.
<h2>Gateway</h2>
<span style="color: #0000ff"><em>portão de entrada, porta de entrada</em></span>.

Máquina intermediária destinada, geralmente, a interligar redes, separar domínios de colisão, ou mesmo traduzir protocolos.
● Equivale ao caminho de saída para outro bairro. Numa rede interna (LAN) local e esta "não sai" pra internet, e quando precisa-se de algo da internet "pede-se" pro gateway. Assim, o gateway vai ligar a sua máquina a outra rede (por exemplo internet).
<h6>Exemplo de gateway</h6>
<ul>
 	<li><strong>router</strong> (roteador).</li>
 	<li><strong>firewall</strong>: vide <a href="https://joesynth.wordpress.com/2021/12/17/firewall-ferramentas/">Firewall: Ferramentas</a>.</li>
</ul>
Outro exemplo é o servidor proxy.
<pre>● Gateway Padrão (ipconfig - SO Windows)
- Nome do host.... DV7..	# Nome do computador.
- Descrição....... Rea..	# É a placa de rede.
- Endereço Físico. 2C...	# MAC Adress (endereço gravado fisicamente na placa de rede)
- DHCP Habilitado. Sim		# Sim, pega IP automaticamente.
- Endereço IPv4... 10...	# Enderereço pego na rede.
- Máscara de Sub-rede..	255..	# Máscara de sub-rede.
- Gateway Padrão.......10...	
- Servidor DHCP...	# 10...	# Máquina que distribui IP automaticamente na rede.
● Rastreamento: comando tracert www.seusite.com 
- Rastreando a rota pra...10...	#
- 1...10...			# É o seu gateway, do usuário.
- 4...20..     # IP quente na internet; o qual saímos pra ela.
- 21...	20..   # Máquina que tem o site
</pre>
.
<h2>Modem (caseiro) e roteador</h2>
<img class="alignleft" src="https://files.tecnoblog.net/wp-content/uploads/2018/10/3com-us-robotics-56k-fax-modem-700x346.jpg" width="100" />Modem.
Conforme o modelo pode ter recursos de switch, modem, roteador, hub...

<img class="alignleft" src="https://files.tecnoblog.net/wp-content/uploads/2019/03/router-700x343.jpg" width="100" />Router (roteador): roteador doméstico (roteador sem fio caseiro). Conecta redes diferentes, normalmente (e ao menos) duas.
Marcas: D-Link, Intelbras, Multilaser.
⚠️ É um exemplo de gateway. Vide gateway.

<img class="alignleft" src="https://files.tecnoblog.net/wp-content/uploads/2019/04/tp-link-ac-1200-700x467.jpg" width="100" /><span style="color: #999999"><em>TP-Link AC-1200</em></span>.
Modem com roteador
<h2>Computadores clientes</h2>
Estações de trabalho (workstations). Onde os usuários trabalham acessando a rede, impressora, internet. - Exemplo: computador com OS Windows ou Linux.
<h2>Interface de rede (placa de rede)</h2>
Dá acesso a rede via conector RJ-45, pro cabo de rede.
Notebook já vem embutida. Pra alto desempenho há conexão fibra ótica.
<h2>Cabos</h2>
Coaxial (usado antigamente), UTP e fibra ótica.
<h2>Proxy</h2>
<span style="color: #0000ff">procurador</span>.

Servidor (que pode ser sistema de computador ou uma aplicação) que funciona como um intermediário para requisições de clientes solicitando recursos de outros servidores.
Exemplo de hardware: Cisco.
Veja também <a href="https://joesynth.wordpress.com/2021/11/28/software-de-rede/">software de rede</a>.
<h2>Servidor</h2>
<span style="color: #0000ff"><em>server</em></span>.

Computador que fornece algum tipo de serviço aos usuários da rede. Ele recebe solicitações de uso de equipamentos periféricos e as gerencia de modo que sejam respondidas na ordem certa, sequencialmente. Vide estação de trabalho, servidor de arquivos, servidor de arquivos dedicado, servidor de impressão.

Em suma, computador que deixa algo disponível, compartilha alguma coisa.

Ex: servidor de impressão, servidor de dados (dados de cliente, etc).
Ex. de hardware: Xeon (processador Intel pra servidor), Dell, IBM, Lenovo...
<h2>Rede: produtos comuns</h2>
Exemplos de produtos populares, vendidos em lojas de informática comuns.

<img class="alignleft" src="https://m.media-amazon.com/images/I/61ldX0wdDVL.jpg" width="60" height="60" />Adaptador TP-Link.
AC600 USB Wireless Dual Band - Archer T2U

<img class="alignleft" src="https://m.media-amazon.com/images/I/51TbQlpSldL._AC_UF894,1000_QL80_.jpg" width="60" height="52" />Adaptador TP-Link.
AC1300 USB wireless dual band Archer T3U

<img class="alignleft" src="https://d2r9epyceweg5n.cloudfront.net/stores/836/742/products/708_7a866f3e-4f90-4299-9c7a-68b6c5252ca1_800x800-f897c15903a8860b2c16099433357436-640-0.jpg" width="60" height="60" />Adaptador TP-Link.
Ethernet Ue300 Usb 3.0 P/ Lan Rj45 Gigabit


\o/  

<!--
https://www.youtube.com/watch?v=wrHxvTcHE1k
https://www.youtube.com/watch?v=4LE-40SC6Rc
-->

[oes: tit !]
