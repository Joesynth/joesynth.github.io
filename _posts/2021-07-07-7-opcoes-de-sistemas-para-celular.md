# 7 opções de sistemas para celular

Separamos aqui sete opções ao Android.  


- Replicant
- Ubuntu Touch
- GrapheneOS
- LineageOS
- /e/OS
- PureOS
- CalyxOS
- 🎉️ Bônus!

Legenda:

    🖤️ Tipo de núcleo (*kernel*), coração do sistema
    💽 Repositório
    📜️ Licença.

## Replicant


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Replicant_logo_alpha.svg/120px-Replicant_logo_alpha.svg.png" width="120" />Apoiado pela FSF, tem seu nome inspirado nos androides replicantes fictícios do filme Blade Runner.  
🖤️ Monolithic (Linux).  
💽 git.replicant.us  
📜️ GPL, Apache etc.  



## Ubuntu Touch

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Fairphone_2-lockscreen_%28cropped%29.png/250px-Fairphone_2-lockscreen_%28cropped%29.png" width="120" />Criado pela Canonical (do famoso Ubuntu Desktop) e que depois migrou para UBports, uma organização sem fins lucrativos que fica na Alemanha.  
🖤️ Linux.  
💽 GitLab.  
📜️ GPL, principalmente.  


## GrapheneOS

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/GrapheneOS_Logo.svg/120px-GrapheneOS_Logo.svg.png" width="120" />Indicado para Agências de Inteligência e jornalistas de investigação. É por natureza um sistema difícil de ser invadido por softwares de espionagem (como o Pegasus).  
🖤️ Monolithic (Linux/Android kernel).  
💽 GitHub.  
📜️ MIT, Apache.  


> "Se eu estivesse configurando um smartphone hoje, usaria o GrapheneOS de Daniel Micay como sistema operacional básico" [Edward Snowden, 2019]




## LineageOS

<img src="https://avatars.githubusercontent.com/u/24304779?s=200&v=4" width="120" />Podemos pensar nele como um Android limpo e puro.  

🖤️ Monolithic (Linux).  
📜️ Apache.  
💽 GitLab e outros.  




## /e/OS

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/E_Foundation_logo.svg/120px-E_Foundation_logo.svg.png" width="120" />Foi desenvolvido pelo francês Gaël Duval, o mesmo cara do Mandrake Linux ou Mandriva. Usa a loja App Lounge, basicamente, nos dando acesso a F-Droid (softwares livres) e Google Play (softwares proprietários).  
🖤️ Monolithic (Linux).  
📜️ Apache.  
💽 gitlab.e.foundation/e  



## PureOS

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2gNhqlMdg9ln_SBt2zT19cNzdFpQeDFKCA&s" width="120" />Tal como o Replicant, é recomendado pela FSF.  
🖤️ Linux.  
📜️ GPL, principalmente.  


## CalyxOS

<img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Icon_CalyxOS.png" width="120" />Parecido com o Graphene, porém mais indicado para quem ainda precisa de algumas funcionalidades do Google (via MicroG).  
🖤️ Monolithic (Linux).  
💽 GitLab.  




## 🎉️ Bônus


###### Outros OS

**Mobian**: Na linha purista (mainline), é baseado no Debian.  
**postmarketOS**: Baseado no Alpine Linux.  
**Sailfish OS**: Criado pela Jolla (ex-Nokia).  


###### A "Guerrazinha" Técnica:

📚️ *Malware*: Abreviação de “malicious software”, software malicioso, programa malicioso. <small>Programa malicioso, tal como o vírus, o worm, Cavalo de Troia, spyware...</small>

O Google argumentaria que não é um *malware* porque você "aceitou" os Termos de Uso ao ligar o celular. Mas, na vida real ninguém consegue usar um Android comum sem aceitar isso. A liberdade de escolha é ilusória.


**Comparação**: vendo o Google Play Services como um cavalo (de Troia), temos:


| Sistema Operacional | O que faz com o "Cavalo" (Google Play Services) | Tecnologia Utilizada |
| :--- | :--- | :--- |
| **/e/OS** | Substitui por um "dublê" de código aberto. | **microG** |
| **GrapheneOS** | Tranca o original em uma "cela" sem poderes. | **Sandbox (Núcleo)** |
| **Ubuntu Touch** | Ignora; o "cavalo" nem consegue entrar. | **Linux Puro** |
| **CalyxOS** | Usa o "dublê" para manter a compatibilidade. | **microG** |
| **LineageOS** | Vem vazio; você escolhe se quer o "cavalo". | **Opcional (GApps)** |

Militares usam ferramentas diferenciadas [rever_dados].
✔ Android Militar (ATAK): usado por militares (dos EUA), onde removem-se todos os serviços do Google (o "Cavalo de Troia").

✔ Nett Warrior (Exército dos EUA): Este sistema utiliza smartphones comerciais (como a linha Samsung Galaxy) que recebem uma ROM customizada e "endurecida" (hardened). Nessas versões, o sistema operacional Android é limpo de todos os serviços do Google (GApps), incluindo a Play Store, Google Maps e o Google Services Framework.

✔ Samsung Knox Tactical Edition: A Samsung fornece versões específicas de hardware (como o S23 Tactical Edition ou XCover6 Pro) que vêm preparadas para rodar essas ROMs militares. Elas utilizam a plataforma de segurança Knox para criar camadas de criptografia duplas (Dual Data-at-Rest) que atendem aos requisitos da NSA, operando de forma totalmente independente dos servidores comerciais da Google.

Por que remover os GApps? [rever_dados]
A remoção completa é a única forma de garantir a segurança operacional no campo de batalha por três motivos principais: 
✔ Eliminação da Telemetria (pois mesmo em "modo avião" pode ocorrer).
✔ Operação Off-Grid: O ATAK nessas ROMs é configurado para usar apenas mapas offline pré-carregados ou via servidores privados (como o TAK Server), eliminando a dependência do Google Maps comercial.
✔ Redução da Superfície de Ataque: Sem a Play Store ou serviços de sincronização, há menos "portas abertas" para vulnerabilidades de software que poderiam ser exploradas por adversários.
Para usuários civis ou entusiastas que buscam algo similar, projetos como o GrapheneOS ou LineageOS (sem a instalação do pacote GApps) são os exemplos mais próximos desse nível de "desgooglização" tática.

###### O Problema do "Rastro de Pão"

O maior medo dos militares não é apenas o software, mas o sinal:


**O caso Strava**: app para atletas.
    Em 2018, soldados usando o app Strava (que usa Google Play Services para GPS) revelaram acidentalmente a localização de bases secretas no deserto porque o app mapeou as rotas de corrida deles.

    Por isso, em operações reais, eles usam sistemas onde o GPS é estritamente passivo (só recebe sinal, nunca envia).

🤔️ Curiosidade: Muitos governos tentaram criar seus próprios sistemas (como o KOS da Coreia do Norte ou o Aurora OS da Rússia), mas no fim, quase todos acabam usando a base do Android (AOSP) porque é o núcleo mais testado do mundo contra ataques.


###### Privacidade

Existe abordagens para resolver o mesmo problema: rodar apps que dependem do Google sem entregar sua privacidade.
Isso inclui termos como:

**MicroG** (do alemão Marvin Wißfeld): Permite executar aplicativos dependentes do Google sem comprometer a privacidade do usuário. Ele substitui os componentes proprietários do Google, garantindo que apps funcionem enquanto reduz o consumo de bateria, memória e dados. Em suma é um "falsificador" que finge ser o Google Play Services.
Licença: Apache.
Repositório: GitLab.
Tipo de núcleo (*kernel*): monolítico.
**Sandbox**: Google original é instalado, mas o Sandbox retira todos os seus "superpoderes". Aqui o Google roda, mas sem acesso privilegiado aos seus dados.
Não é um app ou um"acessório", e sim uma característica estrutural do sistema operacional.


> "Vou permitir que o Google rode, mas vou retirar os privilégios de sistema dele e forçá-lo a obedecer ao Sandbox do Kernel como qualquer outro app".
[Daniel Micay (criador do Graphene)]

**O Motivo Nobre (Segurança)**: O Sandbox no Android é brilhante para impedir que um app de lanterna roube sua senha do banco. O Google forçou todos os desenvolvedores a entrarem na "caixa" para que o sistema não fosse um caos de vírus como o Windows antigo.

**O Motivo Comercial (Vigilância)**: O Google Play Services é o único que não obedece às regras da própria casa. Ele roda com privilégios de "System UID" (Identidade de Sistema). Isso permite que ele:
- Saiba quais apps você abre e por quanto tempo.
- Colete sua localização em segundo plano, mesmo se o GPS parecer "desligado" para outros apps.
- Escaneie redes Wi-Fi próximas para mapear onde você está.

Quando o Google diz que o Android é seguro, ele não está mentindo: ele é seguro contra hackers. Mas ele é propositalmente "aberto" para o Google. O GrapheneOS fecha essa última brecha.

**Android "puro" (AOSP**:


###### AOSP

📚️ *Android Open Source Project*: Projeto de Código Aberto do Android
Sistema operacional FOSS, licenciado principalmente sob a Licença Apache.

No entanto, a maioria dos dispositivos executa a versão proprietária do Android desenvolvida pelo Google, que vem com software proprietário adicional de código fechado pré-instalado, principalmente o Google Mobile Services (GMS), que inclui aplicativos essenciais como o Google Chrome, a plataforma de distribuição digital Google Play e a plataforma de desenvolvimento associada Google Play Services. Outros serviços do Google, incluindo o Firebase Cloud Messaging, usado para notificações push, são recomendados para aplicativos. [ft:wiki]

###### A casa

Imagine que o seu celular é uma casa e cada aplicativo é um convidado:

No Android comum: O Google Play Services entra na casa com a chave mestra; ele pode andar por todos os quartos e ver o que você faz.

No GrapheneOS (Sandbox): O Google Play Services fica trancado em um quarto de hóspedes. Ele pode funcionar, mas não tem a chave da casa. Ele não consegue acessar seus contatos, fotos ou localização a menos que você entregue isso "na mão" dele.

Seria o Google Play Services (do SO Android) é um cavalo de Troia, ou seja, um software bonito e que presta um serviço tal mas tem um malware?
É uma uma analogia perfeita e muito usada na comunidade de cibersegurança, embora com uma pequena nota de rodapé técnica.



Por que a analogia do Cavalo de Troia funciona:

- O "Serviço Bonito" (O Cavalo): Ele oferece notificações instantâneas, localização precisa para o Uber, backup de fotos, proteção contra vírus (Play Protect) e sincronização de contatos. É o que faz o celular ser "inteligente".
- O "Malware" (Os Soldados): Escondido atrás dessas facilidades, ele monitora cada rede Wi-Fi que você passa, faz uma lista de todos os apps que você abre, rastreia seus deslocamentos e envia telemetria constante para os servidores do Google.
    
xxx


O que a Xiaomi faz com o AOSP (O "Esqueleto"):

A Xiaomi pega o AOSP gratuito e "limpo" e adiciona três camadas de modificação:

    Interface Visual (A "Roupa"): Muda todos os ícones, menus, animações e o painel de controle para parecer mais com o iOS (iPhone) ou ter um estilo próprio.

    O "Cavalo de Troia" do Google: Como a Xiaomi quer vender celulares no Ocidente, ela é obrigada a embutir o Google Play Services dentro do AOSP.

    O "Cavalo de Troia" da Xiaomi (O Espião Extra): Além do rastreamento do Google, a Xiaomi adiciona os seus próprios serviços (Mi Cloud, Analytics, anúncios nos menus).

        Nota: É por isso que os celulares da Xiaomi costumam ser mais baratos; eles lucram exibindo anúncios dentro do próprio sistema e coletando seus dados de uso.


xxx
     
O Android (AOSP) é construído sobre o Kernel Linux, mas ele não é um "Linux comum" como o Ubuntu ou o Debian.

O Android usa o Kernel Linux porque ele é extremamente estável, seguro e suporta quase todo tipo de hardware no mundo.


A "Cozinha" (O que muda)

Um sistema Linux tradicional (como o que você instalaria num PC) usa um conjunto de ferramentas chamado GNU. Por isso, muitos puristas chamam o sistema de GNU/Linux.

    O Android descarta quase tudo do GNU.

    Em vez das ferramentas padrão do Linux, o Google criou as suas próprias (como a Bionic em vez da glibc).

    É por isso que você não consegue pegar um programa de computador (.deb ou .rpm) e instalar direto no Android. Eles falam "línguas" diferentes, apesar de usarem o mesmo "coração" (Kernel).


| Característica | Linux Tradicional (ex: Ubuntu) | Android (AOSP) |
| :--- | :--- | :--- |
| **Coração (Kernel)** | Linux Puro | Linux (Modificado pelo Google) |
| **Interface** | Desktop (GNOME, KDE, XFCE) | Interface Mobile (Launcher/SystemUI) |
| **Formato de Apps** | Binários Linux (`.deb`, `.rpm`) | Pacotes Android (`.apk`, `.aab`) |
| **Base de Código** | Ferramentas GNU | Ferramentas Google (Bionic/Toybox) |
| **Execução** | Nativa (Direto no sistema) | Máquina Virtual (ART/Dalvik) |
| **Acesso Root** | Nativo (O usuário manda em tudo) | Bloqueado (O Google/Fabricante manda) |
| **Filosofia** | Liberdade e Transparência | Sandbox Rígido e Controle Comercial |

| Característica | Linux Tradicional (Ubuntu/Debian) | Android (AOSP) |
| :--- | :--- | :--- |
| **Kernel** | Linux | Linux (modificado) |
| **Interface** | Desktop (GNOME, KDE, etc.) | Interface Android (Launcher) |
| **Apps** | Binários Linux / Flatpak | **APKs** (Roda numa máquina virtual Java) |
| **Filosofia** | Liberdade total do usuário | **Sandbox** rígido e controle do Google |
| **Acesso Root** | Padrão (você é o dono) | Bloqueado por padrão (o Google é o dono) |


J
"Bloqueado por padrão (o Google é o dono)" esse ponto é o que a estrudiosa Zuboff aponta como a vigilância? 

Na mosca. Você conectou os pontos exatamente onde a Shoshana Zuboff (autora de A Era do Capitalismo de Vigilância) ataca.

Para ela, esse bloqueio não é apenas uma "medida de segurança", mas uma ferramenta de expropriação de soberania.

Aqui está como o ponto "O Google é o dono" se encaixa na tese dela:


xxx

1. A Assimetria de Conhecimento

Zuboff argumenta que o Capitalismo de Vigilância vive da desigualdade de poder.

    O Bloqueio: Ao impedir o acesso Root (ou o controle total do AOSP), o Google garante que você não veja o que o sistema está fazendo "debaixo do capô".

    A Vigilância: O sistema sabe tudo sobre você, mas você não tem permissão para saber o que o sistema sabe (ou para onde ele envia esses dados).

2. O "Padrão" como Coerção

Zuboff explica que a vigilância não é um erro do sistema, mas o objetivo dele.

    Quando o Android vem "Bloqueado por padrão", o Google remove a sua agência. Você não "escolhe" ser vigiado; o sistema é desenhado de forma que, para usá-lo, a extração de dados seja obrigatória e automática.

    Se você não é o "Root", você não pode desinstalar o rastreador.

3. Modificação do Comportamento

O ponto mais sombrio da tese de Zuboff é que, ao ser o "dono" do sistema, o Google não apenas observa, mas direciona.

    Como o usuário não tem controle total (Root), o Google pode usar notificações, atualizações de sistema e permissões "escondidas" para moldar o comportamento do usuário em favor dos anunciantes.
    
    
| Elemento do Sistema | Visão Técnica | Visão de Shoshana Zuboff |
| :--- | :--- | :--- |
| **Acesso Root Bloqueado** | Proteção contra vírus. | Sequestro da soberania do usuário. |
| **Google Play Services** | Facilidades e APIs. | "Mão Invisível" que extrai excedente comportamental. |
| **Sandbox** | Isolamento de segurança. | Uma cela que impede o usuário de limpar o sistema. |


Para o Google, o discurso é sempre focado em Experiência do Usuário (UX), Segurança Camuflada e Conveniência. Eles nunca diriam "queremos seus dados", mas sim "queremos que tudo funcione sem você precisar pensar".


| Elemento do Sistema | Visão Técnica | Visão de Shoshana Zuboff | Visão da Google (Marketing) |
| :--- | :--- | :--- | :--- |
| **Acesso Root Bloqueado** | Proteção contra vírus e malware. | Sequestro da soberania e agência do usuário. | **Integridade:** Garante um sistema estável e "à prova de erros". |
| **Google Play Services** | Conjunto de APIs e facilidades de sistema. | "Mão Invisível" que extrai excedente comportamental. | **Experiência Mágica:** Recursos inteligentes que facilitam sua vida. |
| **Sandbox** | Isolamento de processos para segurança. | Uma cela que impede o usuário de limpar o sistema. | **Privacidade:** Protegemos seus apps uns dos outros em "caixas". |



Para o Capitalismo de Vigilância, a UX (Experiência do Usuário) não é o fim, é o meio de captura.

Como Shoshana Zuboff descreve, o objetivo não é apenas "facilitar sua vida", mas garantir que você permaneça no sistema o tempo suficiente para que seu comportamento seja extraído, previsto e, eventualmente, modificado.




xxx


| Ferramenta | O que é? | Por que é segura? |
| :--- | :--- | :--- |
| **EBChat** | "WhatsApp" do Exército | Baseado no Signal, mas usa servidores próprios do Exército. As mensagens somem do servidor após a entrega. |
| **UNA** | Mensageiro Estratégico | Criado pela empresa brasileira Dígitro. Pode rodar em servidores locais dentro de quartéis, sem usar a nuvem. |
| **msg gov** | App da ABIN | Lançado para substituir apps estrangeiros. Garante que informações de inteligência não passem por infraestrutura externa. |
| **EBNet** | Rede de Dados | Uma "internet privada" que interliga os quartéis, isolada da internet comum que usamos. |

Em suma, militares usam ferramentas dedicadas










{% include final.html %}
