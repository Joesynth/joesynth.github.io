# Software servidor: 7 casos

Um software servidor, como o Nginx, pode ser instalado tanto em um SO do tipo Desktop quanto em um sistema operacioanal próprio para servidor. Neste último caso, um sistema específico, não se espante em ver o servidor atuando em modo texto, ou seja, sem GUI (interface gráfica). Usar uma GUI consumiria recursos (RAM/CPU).  

Também, um SO assim não incluirá ferramentas de escritório, como o LibreOffice, vista que esse tipo de sóftware tem mais utilidade para o usuário comum

## 7 Servidores - Distribuições Linux


#### 🇺🇸 Red Hat

<img class="alignleft" src="https://pbs.twimg.com/media/EtpeLcRXAAMsdyk.jpg" width="99" />Red Hat Enterprise Linux (RHEL).  
Uma distro **open-source** amplamente utilizada, principalmente em servidores.  
🔗️  redhat.com
📜️ Várias livres, mas também proprietárias.  
💰 Anos 90, pago. Grátis por 30 dias.  

**Usuários**:  
🇺🇸 É o sistema que controla os submarinos do exército, e não à toa, devido ele ser extremamente confiável e estável.
🇸🇦 A página do Red Hat inclui a Arábia Saudita, como sendo uma área onde a empresa tem presença e oferece suporte.

#### CentOS

<img class="alignleft" src="https://seeklogo.com/images/C/centos-logo-494F57D973-seeklogo.com.png" width="58" height="58" />Equivale ao Red Hat, porém grátis. Aliás, é conhecido como ”a versão grátis do Red Hat”, é muito usado por serviços de Hospedagem.
🔗️ centos.org
📜️ GPL e outras.


#### 🇺🇸 Debian

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/0/04/Debian_logo.png" width="40" height="53" />Estável e robusta, é usada na estação espacial internacional, bem como outros ambientes críticos, como o militar. Além, a distro é utilizada por instituições educacionais e empresas comerciais.

> "Para os servidores o EB *[Exército Brasileiro]* adotou o Debian, dentre os principais motivos está a estabilidade do sistema, o fato de ser o maior projeto de código livre existente atualmente, possuir o idioma português brasileiro e etc." *[AMAN, 2018]

> "É uma distribuição madura, popular e serve de base para outras distribuições GNU/Linux." *[AMAN, 2018]*

🔗️ debian.org
👉️ Ian Murdock, anos 90.


#### 🇩🇪 SuSE Linux Enterprise Server (SLES)

Voltado a *server*, *mainframe*, supercomputadores, workstations; funções como servidor de uso geral, nuvem privada, *storage*, bigdata. Muito popular na Europa, a SUSE é uma das pioneiras em Linux e de software Open Source para infraestrutura.

🔗️ suse.com
📜️ GPL... e várias.
💰 Pago. Avaliação por 60 dias.


🇩🇪 OpenSUSE.
<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/OpenSUSE_Logo.svg/128px-OpenSUSE_Logo.svg.png" width="60" height="38" />Muito usado em servidor, workstations. Deriva do SuSe, sendo basicamente o mesmo.
🔗️ ⬇️ opensuse.org/pt-br/
📜️ GPL, em suma.
32 ou 64 bits.



#### Ubuntu Server

Sendo "filho do Debian”, é extremamente popular no mundo dos servidores; utilizado, por ex., em laboratórios de meteorologia.


#### 🇺🇸 Oracle Linux

Baseada em Red Hat Enterprise Linux (RHEL), é 100% compatível com ele. Uso em ambientes corporativos, principalmente.

🔗️ oracle.com
📜️ GPL e outras.



#### Slackware Linux

Poderosa e popular no mercado de servidores, essa *distro* visa ser “semelhante ao Unix” em termos de simplicidade de *design* e estabilidade, buscando também proficiência técnica.

Ele é muito estável, limpo e sem **bugs**.

> Foi uma das distros mencionadas pelo Departamento de Ciência e Tecnologia no Plano de Migração para Software Livre no Exército Brasileiro _plano este que visava regular a estratégia para a consolidação da implantação do software livre (SL) em todos os escalões do Exército Brasileiro.

Toda a configuração do Slackware é via edição de arquivos de texto e por isso há um ditado na comunidade Linux:  

> se você aprende a usar Red Hat, vai saber usar Red Hat, mas se você aprende a usar Slackware, vai saber usar Linux.

**pkgtool**: O padrão para o gerenciamento de pacotes.
**Bash**: O shell padrão no Slackware.

Distribuições semelhantes inclui o Arch Linux e a KateOS.

👉️ Criado por Patrick Volkerding, primeira metade déc. 90.



## Distros de servidores: outros exemplos

**🇺🇸 Fedora**:  

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Fedora_logo_%282021%29.svg/250px-Fedora_logo_%282021%29.svg.png" width="88" />Distribuição Linux baseada no Red Hat, que aliás funciona como uma espécie de “área de testes” para o RHEL. Há cinco tipos: <a href="https://joesynth.wordpress.com/2021/11/28/por-que-usar-linux/">computador pessoal</a>, servidor, computação em nuvem, *containerization* e IoT (*Internet of Things* - Internet das Coisas).  

📜️ GPL e outras.  
32 ou 64 bits.  

🇰🇵 Na Coreia do Norte usa-se o Red Star OS, um SO é inspirado no Fedora.  

**Alma Linux**  
**Alpine Linux**  
**Amazon Linux 2 / Amazon Linux 2 AMI**  
**Arch Linux**  
**Cloud Linux OS**: é uma distro Linux comercial, baseada no sistema operacional CentOS.
**ClearOS**  
**Flatcar Container Linux**  
**Gentoo Linux**  
**Mageia Linux (Um fork do Mandriva)**  
**Proxmox**  
**Photon OS**
**Rancher OS**  
**Rocky Linux**  
**VzLinux**  



## Softwares relacionados a servidores

<img class="alignleft" style="width: 121px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Windows_Server.png/250px-Windows_Server.png" height="17" />🇺🇸 Microsoft **Windows Server**.
Sistema operacional voltado para uso em servidores.

<img class="alignleft" style="width: 40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Microsoft_Exchange_%282019-present%29.svg/100px-Microsoft_Exchange_%282019-present%29.svg.png" height="35" />🇺🇸 Microsoft **Exchange Server**.
Anos 90. É um servidor de e-mail, sendo uma aplicação para ser instalada em plataformas da família Windows Server.
SO: Windows Server.
Licença: proprietária, soft comercial.

Abaixo um resumo de forma simples e objetiva quanto as principais ferramentas de servidor, mostrando marca, desenvolvedor, tecnologias usadas.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Apache_HTTP_server_logo_%282019-present%29.svg/220px-Apache_HTTP_server_logo_%282019-present%29.svg.png" width="88" />○ **Apache**.
<span class="text-primary">Apache Web Server </span>
Robert McCool.
🔗️ apache.org
anos 90
Multiplataforma
É o mais popular.
Servidor de páginas web.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Apache_Tomcat_logo.svg/91px-Apache_Tomcat_logo.svg.png" width="60" height="43" /><span class="text-primary">○ **Tomcat**.
</span>Apache; Servidor web.
Multiplataforma
Java, JSP

<img class="soft_servido alignleft" title="GlassFish" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/85/GlassFish_logo.svg/142px-GlassFish_logo.svg.png" alt="software GlassFish" width="79" height="35" /><span class="text-primary">○ **GlassFish**.</span>
Sun Microsystems; Oracle.
2005, multiplataforma.

<img class="soft_servido alignleft" title="Nginx" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nginx_logo.svg/330px-Nginx_logo.svg.png" alt="software Nginx" width="80" height="17" /><span class="text-primary">○ **🇷🇺️ Nginx**. </span>
Igor Sysoev.
±2005, multiplataforma.
Pode trabalhar em conjunto com o Apache.

📜️ BSD; servidor.  


<img class="alignleft" style="width: 100px" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/21/IIS_8.5.9431_management_console.png/300px-IIS_8.5.9431_management_console.png" height="86" /><span class="text-primary">○ **IIS** (*Internet Information Services*).
</span>Windows NT, outros Windows.
Anos 90.
Criado para os sistemas Windows NT (Microsoft).
Ele tem suporte: HTTP, HTTPS, FTP, SMTP, etc.

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png" width="60" height="37" />○ **Node**.**js**.
Do ano de 2009, é para Linux, Windows e outros <a href="https://joesynth.wordpress.com/2021/11/27/sistemas-operacionais-mais-usados/">SO</a>.
🔗️ nodejs.org
Servidor web local.
JavaScript, HTML.

É isso!  
Abç.  
\o_  

<!--
https://5cta.eb.mil.br/images/5cta/normasti/Port_n_007_DCT.pdf
https://bdex.eb.mil.br/jspui/bitstream/123456789/4573/1/TCC%20Cad%205056%20Trindade%20-%20CM3.pdf
https://www.vivaolinux.com.br/artigo/A-distribuicao-Slackware-Linux
-->

[oes: tit !]
