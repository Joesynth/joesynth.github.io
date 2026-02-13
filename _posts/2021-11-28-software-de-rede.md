# Software de rede

Estuda redes, segurança? Conheça <em>softs</em> e ferramentas dedicadas para ampliar seus conhecimentos.



Olá!
Vamos aqui passar por uma breve lista de programas de rede, o que inclui segurança cibernética. Veja:
<ul>
 	<li>Proxy e DNS.</li>
 	<li>Ferramentas (cibersegurança).</li>
 	<li>Outras ferramentas (rede/Web).</li>
 	<li>Sistema Operacional.</li>
 	<li>Outros softs.</li>
</ul>
Então, indo direto ao assunto...
<h2>Proxy e DNS</h2>
<h6>BIND</h6>
<span style="color: #0000ff"><em>(Berkeley Internet Name Domain - Berkeley Internet Name Daemon)</em></span>.

✏️ 🇺🇸 ISC, déc.80.
🖥️ Unix, Linux Ubuntu, macOS, Windows...
📜️ MPL.
É o <em>software</em> servidor para o protocolo DNS mais utilizado na Internet.
É o principal <em>soft</em> usado pelos <a href="https://joesynth.wordpress.com/2021/10/31/internet-tem-dono/">13 servidores</a> raiz.
<h6>Squid</h6>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Squid_Now.png/200px-Squid_Now.png" width="140" height="77" />

✏️ 🇺🇲️ Desenvolvido por universidades.
🖥️ multiplataforma (Linux, Windows...).
📜️ GNU GPL.
Tipo: servidor proxy.
Vide Proxy (Procurador) <a href="https://wordpress.com/post/joesynth.wordpress.com/23796">Rede</a>.
Suporte a HTTP, FTP...
Escrito em C++.
<h2>Ferramentas (cibersegurança)</h2>
Aos que cursam segurança cibernética...
<h6>Wireshark</h6>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Wireshark_Logo.svg/232px-Wireshark_Logo.svg.png" width="80" />

🔗️ ⬇️ ️wireshark.org;
🖥️ Cross-platform (multiplataforma); <span class="small"> Win XP em diante, Linux, FreeBSD</span>.
📜️ <a href="https://joesynth.wordpress.com/2021/11/28/licenca-de-software/">GPL</a>, totalmente gratuito.
Repositório: <a href="https://joesynth.wordpress.com/2021/11/28/software-livre-e-software-proprietario/">gitlab</a>.com/wireshark/wireshark.git
Escrito em <a href="https://joesynth.wordpress.com/2021/12/27/linguagens-resumo/">C</a>, <a href="https://joesynth.wordpress.com/2021/12/27/linguagens-resumo/">C++</a> e Lua.
Ferramenta <em>open source</em> de linha de comando de Gerald Combs, anos 90; é uma ferramenta <em>open source</em>, sendo é um analisador de rede (<em>sniffer</em>), <em>network monitor</em>.

Analisador de protocolos (ou analisador de redes). Verifica o que trafega na rede. Identificar (saber de onde vem) a fonte de ataque de negação de serviço (DoS). Encontrar programas mal intencionados na rede.
<h6>tcpdump</h6>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tcpdump%26libpcap.svg/300px-Tcpdump%26libpcap.svg.png" width="80" />

🔗️ tcpdump.org;
🖥️ Linux, Windows...
📜️ BSD License; completamente gratuita.
Categoria: <em>sniffer</em>;
Criado anos 80, é um <em>sniffer</em> (<em>packet analyzer</em>) de rede utilizado pela <a href="https://joesynth.wordpress.com/2021/11/27/o-que-e-cli/">linha de comando</a>.
Escrito em <a href="https://joesynth.wordpress.com/2021/12/27/linguagens-resumo/">C</a>. Seu “concorrente” gráfico é o Wireshark.
<h6>OpenVAS</h6>
Um <em>framework</em> para detecção de vulnerabilidades de sistemas computacionais. 🔗️openvas.org;
📜️ GPL.
Disponibilidade: completamente gratuita;
Categoria: scanner.
Escrito em <a href="https://joesynth.wordpress.com/2021/12/27/linguagens-resumo/">C</a>.
<h6>Nikto</h6>
<strong><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Nikto2.png/300px-Nikto2.png" width="150" /></strong>🔗️cirt.net/nikto2
📜️ GNU GPL; completamente gratuita.
Categoria: <em>sniffer wireless</em>;
Escrito em Perl, <a href="https://joesynth.wordpress.com/2021/12/12/html-o-que-e-exatamente/">HTML</a> e outras. Ferramenta <em>open-source</em> que verifica vulnerabilidades em um servidor e web.
<h2>Outras ferramentas (rede/Web)</h2>
<h6>Aircrack-ng</h6>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Aircrack-ng-new-logo.jpg/220px-Aircrack-ng-new-logo.jpg" width="80" />

🔗️ aircrack-ng.org;
🖥️ Cross-platform;
📜️ GPL; gratuito.
Categoria: cracking wireless.
Suíte de ferramentas para quebrar senhas.
<h6>Kismet</h6>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kismet_Web_UI.png/300px-Kismet_Web_UI.png" width="150" />

🔗️ kismetwireless.net;
🖥️ Cross-platform;
📜️ GPL, completamente gratuita.
Categoria: <em>sniffer wireless</em>;
Ferramenta de detecção de redes e intrusos, <em>sniffer</em> e analisador de banda para redes Wi-Fi.
Categoria: <em>sniffer wireless</em>.
<h6>FileZilla</h6>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/FileZilla_logo.svg/64px-FileZilla_logo.svg.png" width="60" height="60" /> FTP
Trata-se de um FTP;
🖥️ multiplataforma.
📜️ <a href="https://joesynth.wordpress.com/2021/11/28/software-livre/">FOSS</a> (<a href="https://joesynth.wordpress.com/2021/11/28/licenca-de-software/">GPL</a>).
<h6>Outras ferramentas de análise de rede</h6>
<strong>Angry IP </strong> <span class="small"> Cross-platform; versões 32 e 64-bit; ↓ angryip.org </span>
Scanner de Rede. Scanea IPs e portas.
<span class="small">youtu.be/08k6aSQWYTU?list=PLucm8g_ezqNrwYnPPY02hsKC-dSoO6QWe </span>

<strong>Xirrus Wi Fi Inspector </strong><span class="small"> ↓ www.xirrus.com </span>
Monitoramento de Redes sem fio (Wireless). Mostra redes de sua região e dados.
<span class="small">youtu.be/1B59Gc7u8ik?list=PLucm8g_ezqNrwYnPPY02hsKC-dSoO6QWe </span>
<h2>Sistema Operacional</h2>
Aqui refere-se a <a href="https://joesynth.wordpress.com/2021/11/28/por-que-usar-linux/">distros</a>.
<h6>🇺🇸 Kali (Linux)</h6>
🔗️ kali.org
📜️ GPL, portanto completamente gratuita.
Apt do Debian é o gerenciador de pacotes.
Categoria: Distro Linux segurança.
Muito conhecida nesse contexto, é de <span class="HwtZe" lang="pt"><span class="jCAhz ChMk0b C1N51c"><span class="ryNqvb">análise forense digital</span></span></span>.
A distro Kali Linux 2020.4 foi lançada com kernel 5.9 e ZSH como shell padrão.

🇺🇸 Kali 🔗️kali.org; Completamente gratuita; Categoria: Distro Linux segurança, <span class="HwtZe" lang="pt"><span class="jCAhz ChMk0b C1N51c"><span class="ryNqvb">análise forense digital</span></span></span>.
<h6>Qubes OS</h6>
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Qubes_OS_Logo.svg/120px-Qubes_OS_Logo.svg.png" width="59" height="63" />🔗️qubes-os.org
📜️ GPL, principalmente, dentre várias livres.
Focado em segurança.
<h6>Tails</h6>
🔗️ <span class="url">tails.net</span>
Repositório: gitlab.tails.boum.org/tails/tails
📜️ GPL.
<h6>Whonix</h6>
🔗️ whonix.org
📜️ GPL, principalmente.
<h6>BlackArch</h6>
🔗️ blackarch.org
📜️ Várias.
<pre>Outras:
Parrot OS 🔗️ parrotsec.org
CAINE 🔗️ caine-live.net
OpenBSD 🔗️ openbsd.org
BackBox 🔗️ backbox.org
Pentoo 🔗️ pentoo.ch
Alpine Linux 🔗️ alpinelinux.org
NST (Network Security Toolkit) 🔗️ networksecuritytoolkit.org</pre>
<h2>Outros softs</h2>
😀️ Note que aqui nem todos são <em>softwares</em> livres.
<pre>METASPLOIT
🔗️metasploit.com.
categoria: sploit
Plataforma de código aberto para desenvolver, testar e usar o código de exploração (exploit). É livre e open source, também com versão paga.

NESSUS
🔗️tenable.com
categoria: scanner
Scanner de rede. Há a versão Nessus Home (gratuita).

SNORT
🔗️snort.org.
versão completa paga; recursos limitados na versão gratuita.
Categoria: IDS.
Sistema de detecção e prevenção de intrusão (IDS) de rede.


JOHN THE RIPPER
🔗️openwall.com/john.
Disponibilidade: versão completa paga. Recursos limitados na versão gratuita.
Categoria: cracking password.
Cracker de senha rápido para UNIX/Linux e Mac OS X. 
</pre>
.
<h2>Servidor: ferramentas de teste</h2>
<h6>DNS Benchmark</h6>
🇺🇸 GRC.
🔗️ G↓ grc.com/dns/benchmark.htm
Teste de Performance de Servidores DNS da Web.
youtu.be/wYK-N-XuLU0?list=PLucm8g_ezqNrwYnPPY02hsKC-dSoO6QWe
<h6>Namebench</h6>
🇺🇸 Google.
🔗️ code.google.com/archive/p/namebench
Unix, OS X, Windows.
Licença: Apache.
<h2>Mais...?</h2>
Outros (rede e cibersegurança): ethtool, nmap, whois (ex.: whois foo.com).

É isso!  
Grande abraço.  
\o_

<!-- 
ft: https://www.linuxdescomplicado.com.br/2015/06/11-ferramentas-de-seguranca-de-redes-para-linux.html

youtu.be/BgOYSMHHNfE?list=PLucm8g_ezqNoBnWA9vtlqQeY7Es9Hv3FY
 -->

[oes: tit !]
