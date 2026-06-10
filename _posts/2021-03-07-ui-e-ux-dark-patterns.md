# UI e UX: Dark Patterns


<img src="https://gironajs.com/_next/image?url=%2Fassets%2Fblog%2Fque-son-els-dark-patterns%2Fcover-image.jpg&w=1920&q=75" width="120" />No contexto de plataformas ou corporações, como Uber ou Microsoft, o design de UI e UX não são feitos para "ajudar" o usuário no sentido tradicional, mas para maximizar a extração de valor e garantir a retenção. O design é uma ferramenta de engenharia comportamental.





- Introdução
- Técnicas de Dark Patterns
- Confronto assimétrico
- Dark Patterns: Por que é um Ataque Psicológico?
- Resumo do arsenal de UX "Black Hat"
- UX Agressiva: O Limite da Persuasão
- Um pouco de história




## Introdução


##### Dark Patterns (Padrões Obscuros)

Pense num hacker de computador, ao estilo [Black Hat](/white-hat-e-black-hat). Ou seja, o cara que *está de maldade* pensando em ataues financeiros ou em servidores.

O "hacker de interface" (ou "black hat UX" ou ainda "black hat UI") é semelhante, mas ataca o indivíduo (usuário ou nó).

Dark Patterns são técnicas desenhadas para enganar ou dificultar ações que não interessam ao Dono da Rede (uma plataforma, como Uber, por ex.).

###### Dark Patterns: hack psicológico

Enquanto um vírus ataca o SO do computador, o Dark Pattern ataca o nosso SO, que, obviamente, é nosso cérebro humano. Ele não quebra a segurança do seu computador; ele quebra a sua autonomia de decisão.

###### Os 3 Alvos da "Invasão" Psicológica





|Atenção|Emoção|Hábito|
| :---: | :---: | :---: |
|**como o ataque ocorre**<br />direciona o olhar para longe do que importa.|**como o ataque ocorre**<br />gera medo de perder algo (gatilho de escassez)|**como o ataque ocorre**<br />usa a memória muscular contra o usuário|
|**exemplo**<br />o "X" para fechar o anúncio é quase invisível|**exemplo**<br />"apenas 1 unidade restante!" (mesmo sendo mentira)|**exemplo**<br />inverter a posição dos botões "Sim" e "Não" num popup|





## Técnicas de Dark Patterns

###### Baixo Contraste </sup>Low Contrast</sup> ou Obscuridade Visual </sup>Visual Obscurity</sup>

Desenvolvedor reduz o contraste do botão de fechar para violar as regras de acessibilidade básicas.
Exemplo? Janela pop-up preta com o botão "X" em cinza-escuro, tornando-o quase invisível para quem olha rápido.


<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_4979137947282115610_y.jpg" width="120" >+Entregas, iFood.  
<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_4979137947282115609_y.jpg" width="120" >+Entregas 2, iFood.  
<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_4988109017271962709_y.jpg" width="120" />+Entregas 3, iFood.  


###### Confirmshaming

Para melhor usabilidade, garantir a clareza na comunicação da interface é vital, então rótulos de botões normalmente são curtos, com uma ou duas palavras, verbos no infinitivo ("salvar", por ex.) ou imperativo ("clique aqui", por ex.).  Mas no *confirmshaming* isso é diferente.

No botão que o usuário clica, há algo depreciativo ou de constrangimento para punir a escolha dele de não seguir o que a empresa quer.


| **Confirmshaming**  
| `Social Engineering  
📱 Mensagem de recusa tipo: "Não, eu não quero ser um motorista de elite".  
🚀 Usar a manipulação emocional para impedir que o usuário negue uma função.  

x

###### Humilhação/Punição Gamificada <sup>Gamified Shaming</sup>

Note que o texto abaixo funciona, exatamente, como a perda de moedas ou pontos em um jogo, gerando o sentimento de "derrota".

> "O pedido numero xyz foi cancelado. vc n vai ganhar por esse pedido, mas vamos tentar achar outro".

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_4979137947282115603_y.jpg" width="120" > Além, há um triangulo com o simbolo de uma interrogação.

O cancelamento foi gerado por terceiros ou pelo sistema, mas a interface comunica um impacto emocional diretamente para o trabalhador. A interface verbaliza a perda do dinheiro: **"você não vai ganhar"**.

Noutro lado, no banco de dados (onde a elite trabalha), certamente tem-se uma informação neutra, por ex. "*Status*: Cancelado".

O objetivo do **Punição Gamificada** é usar o constrangimento ou o saldo negativo, na interface, como combustível psicológico para manter o usuário engajado na mecânica do aplicativo.




      Legenda:
    Padrão Obscuro  
    Descrição Técnica  
    📱 Implementação na UI  
    🚀 Objetivo do Sistema  





| **Roach Motel**  
| `Entry: Low / Exit: High  
📱 Cadastro simplificado; botão de "Excluir Conta" oculto em submenus.  
🚀 Manter o nó (usuário) ativo na base de dados para inflar métricas.  


| **Misdirection**  
| `Visual Deception  
📱 Botão "Aceitar" em destaque (cor/tamanho); "Recusar" em cinza e sem contraste.  
🚀 Induzir o clique acidental ou forçado na opção que gera lucro para a rede.  


| **Nagging**  
| `Iterative Intrusion  
| Pop-ups constantes solicitando permissões ou aceites de missões.  
🚀 Vencer a resistência do usuário através do cansaço e interrupção da tarefa.  

**Isca e Troca** <sup>Bait and Switch</sup>  
| `Function Swapping  
📱 O botão "X" de fechar inicia uma ação de "Saiba Mais" ou aceita um termo. 
🚀 Transformar a intenção de saída em uma ação de engajamento forçado.  

No Windows tinha-se o botão "X", que em vez de fechar a tela (dispensando a atualização), instalava. Vide [Microsoft](/microsoft).  

Ou seja, **Bait and Switch**: O botão parece uma coisa (ex: fechar), mas executa outra (ex: aceitar termos).	Coerção via erro de clique.  

| **Hidden Costs**  
| `Value Masking  
| Taxas e descontos que só aparecem na última etapa da transação/corrida.  
🚀 Reduzir a taxa de abandono escondendo o custo real até o processamento final.  

| **Disguised Ads**  
| `Content Camouflage  
📱 Promoções que mimetizam notificações urgentes do sistema operacional.  
🚀 Enganar o usuário para que ele clique em algo que normalmente ignoraria.  

Técnica	Aplicação Prática	Objetivo no Sistema  

**Roach Motel**: Fácil de entrar (cadastro), quase impossível de sair (deletar conta/logoff). Manter na base de dados.  

**Confirmshaming**	Linguagem que faz o usuário se sentir culpado ao negar algo (ex: "Não, prefiro ganhar menos"). Manipulação emocional via micro-copy.  
**Disguised Ads**;Pedidos ou anúncios que se parecem com conteúdo orgânico ou notificações de sistema.	Aumentar a taxa de clique (CTR) enganando o olho.  

###### Design de Fricção Seletiva  

A UX é fluida para o que gera lucro e "travada" para o que gera custo ou saída.  

**Fricção Zero para Compra/Aceite**: O botão de "Aceitar Corrida" é enorme e ocupa metade da tela. Muitas vezes, um toque acidental em qualquer lugar da tela valida a ação.  
**Fricção Alta para Suporte/Cancelamento**: O fluxo de cancelamento ou suporte é escondido atrás vários submenus ("Labirinto de Cliques"). Isso desestimula o usuário a reclamar ou desistir.  

###### Gamificação e Design de Status

Um bom caso disso é um fóruns sw técnicos ou comunidades de software livre onde usuários ganham títulos (ex: "Colaborador Master") com base na qualidade das respostas dadas à comunidade. Mas no contexto aqui dos padrões obscuros...

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.Ty2lt2shr69JRD3EseS-FgHaEK%3Fr%3D0%26pid%3DApi&f=1&ipt=c3517be43876b3884c93c248634bd5ff02d3ce042352391838b2030fa3ea08ac&ipo=images" width="310" />Transformar o trabalho ou o consumo em um jogo para mascarar a exploração.  

|Barras de progresso (Progress Bar e Badges)| Leaderboards e Tiers|
|:---:|:---:|
|Utilizam o Efeito Zeigarnik (nosso cérebro detesta tarefas incompletas).| Níveis como "Diamante" ou "Nuvem Prioritária" criam uma hierarquia social artificial.|
|Faltam 2 entregas para bater a meta| Níveis como "Diamante" ou "Nuvem Prioritária" criam uma hierarquia social artificial.|


###### Arquitetura de Escolha (Nudging)

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fmulher-militar-armada-11353162.jpg&f=1&nofb=1&ipt=6202108ce70df585d24acfa1fb2934d2085bab3fa51b0c92addd61796ef0096f" width="120" />Aqui a arma é outra! O design não te obriga, mas lhe "empurra" para a escolha que o dono do sistema quer.  

|Opção Padrão (Default Option)| Ancoragem de Preços|
|:---:|:---:|
|Sistema deixa pré-selecionado a opção mais lucrativa para a rede.| Mostrar um valor alto primeiro para que o valor seguinte pareça "barato"|
|Ex.: a rota mais longa ou o seguro mais caro. | Ex.: Plano "Premium" R$ 150 ao lado do plano "Padrão" R$ 40. |
 

👉 Design de Fricção Seletiva, Gamificação e Design de Status e Arquitetura de Escolha (Nudging) são três temas prioritariamente do campo de UX. Podem ou não não serem considerados Dark Patterns, conforme uso. Independente disso, tratam da estratégia psicológica, do fluxo da jornada e da intenção de manipular ou guiar o comportamento do indivíduo.  



## Confronto assimétrico

📚 **Nó** (*node*): em [rede de computadores](/rede), é qualquer dispositivo físico capaz de enviar/receber informações (servidor, celular, modem etc).  

É um confronto assimétrico. O que parece uma conversa pessoal na tela, entre o usuário (ou nó) e o app (do uber, por ex.), é, na verdade, um cara simples numa ponta e noutra um coletivo multidisciplinar _UX designers, programadores (a "peça" central) etc.  

Esse grupo multidisciplinar utiliza todo o conhecimento acumulado (por décadas) sobre comportamento humano para desenhar a interface.  

A empresa num app, trocando em miúdos, é uma equipe multidisciplinar unida para que o usuário faça o que eles querem.  



|Ponta da Empresa|Ponta do Usuário ("Nó")|
|:--- |:--- |
|**o coletivo**<br />psicólogos comportamentais, engenheiros de dados, especialistas em marketing|**o indivíduo solitário**<br /> muitas vezes com pressa ou distraído, reagindo em tempo real a estímulos desenhados para explorar suas fraquezas cognitivas|






## Dark Patterns: Por que é um Ataque Psicológico?

Há dois pilares da psicologia:

|||
|:---:|:---:|
|Condicionamento|Exploração de Vieses Cognitivos|

Veja [Behaviorismo e Psicologia Cognitiva](/behaviorismo-e-psicologia-cognitiva).


###### Psicologia Cognitiva e Behaviorismo

O design é projetado para explorar gatilhos biológicos (dopamina).  



|Behaviorismo|P. Cognitiva|
| :---: | :---: |
|**foco principal**<br />ação e reação (comportamento)|**foco principal**<br />pensamento e memória (processamento)|
|**UX/UI (aplicação)**<br />botões, notificações e recompensas| **UX/UI (aplicação)**<br />hierarquia visual, clareza e navegação intuitiva|



Os casos, abaixo, podem pender mais para um ou outro pilar.

**Hook Model** (Modelo de Engajamento): Criação de hábitos através de Gatilho -> Ação -> Recompensa Variável -> Investimento.  
**Recompensa Variável**: O design de "puxar para atualizar" (como uma alavanca de cassino) e o som de notificação de pedido criam um ciclo de ansiedade e prazer.  
**Escassez e Urgência**: Timers regressivos ("Aceite em 15s") ou avisos de "alta demanda" que forçam o usuário a decidir sob estresse, anulando o pensamento crítico.  



## Resumo do arsenal de UX "Black Hat"

| Termo | O que ataca? | Tática |
| :---: | :---: | :---: |
| **FOMO** | Ansiedade / Medo | Urgência/Escassez falsa |
| **Confirm-<br />shaming**| Ego / Culpa | Frases humilhantes no "Não" |
| **Roach Motel** | Preguiça / Tempo | Dificultar o cancelamento |
| **Bait and Switch**| Atenção / Intenção | Enganar o clique |
| **Hidden Costs** | Comprometimento | Ocultar taxas até o final |



## UX Agressiva: O Limite da Persuasão

A UX agressiva utiliza técnicas intensas de persuasão e nudging (arquitetura de escolha) para conduzir o usuário a uma ação, mas não necessariamente mente ou engana. Em suma, ela força a barra, digamos.  




## Um pouco de história

<img src="https://cdn.prod.website-files.com/6412167c874d3b52f2a4d962/641491089ee65cd547abc674_hb-square-p-1600.jpg" width="100" /> 🇬🇧 Harry Brignull, designer de UX (User Experience) e consultor britânico, que também é PhD em Ciência Cognitiva.
É o criador do termo Dark Patterns, em 2010.

**Como surgiu?**: ele percebeu que o mercado de design estava ficando cheio de "truques" que não eram apenas erros de design, mas escolhas maliciosas feitas para enganar.  

🔗 darkpatterns.org (domínio criado em 2010 Brignull.
O objetivo era criar uma "biblioteca da vergonha" para catalogar, nomear e expor as empresas que usavam essas táticas.  

A Inspiração do Nome...  
O nome é uma brincadeira (e um alerta) com dois termos técnicos de programação e arquitetura de software:  

**Design Patterns**: Soluções padrões e boas para problemas comuns de design.  
**Anti-patterns**: Erros comuns que acontecem por falta de experiência ou descuido.  
**Dark Patterns**: O "lado sombrio" — quando o padrão não é um erro, mas uma arma contra o usuário.  

<pre>
[**UPDATE 2023**]
<img src="https://m.media-amazon.com/images/I/71QKpHCjeWL._UF1000,1000_QL80_.jpg" width="100" />
Deceptive Patterns (Padrões Enganosos).  
Livro de Brignull.  
O site mudou de nome para:  
🔗 deceptive.design
</pre>

| Motivo da Mudança | Explicação |
| :---| | :---| |
| **Inclusi-<br />vidade** | Evitar o uso da palavra "Dark" (Escuro) como sinônimo de "Mau", combatendo vieses linguísticos. |
| **Clareza Jurídica** | "Deceptive" (Enganoso) é um termo mais forte e direto para processos judiciais e leis de proteção ao consumidor. |

♥️ Hoje, Brignull é uma das maiores vozes mundiais contra essas práticas, ajudando governos (inclusive na UE e EUA) a criar leis para proibir esses abusos.  


###### Dark Patterns: os primórdios no mundo físico

A origem dos Dark Patterns são o varejo físico, com táticas que existem no mundo físico há décadas.

Dark Patterns não são um fenômeno exclusivo da computação. Eles são um fenômeno da psicologia aplicada ao Consumo. O que acontece é que a computação (UI/UX) escalou isso a um nível industrial e automatizado. 


###### Dark Patterns: o passado e hoje

**Na "época da vovó"**...

|labirintos|doces no *checkout*|
|:---:|:---:|
|leite e pão (itens básicos) ficam sempre no fundo da loja para te forçar a atravessar corredores cheios de tentações| colocar chocolates na altura dos olhos das crianças na fila do caixa é um "ataque psicológico" à resistência dos pais|



Além, há o Marketing de Resposta Direta:  
Cartas de vendas e anúncios de jornal antigos usavam letras miúdas para esconder taxas ou faziam o cupom de cancelamento ser quase impossível de ler.  
Isso é o tataravô do Roach Motel digital.


**A transposição para o digital**:


<img src="https://image.cdn2.seaart.ai/static/801a105c2fa58abe0f9208fa02043241/20230427/81ab61ab67df48f737d1720a3ad547c8_low.webp" width="100" />
Superpoderes! Foi o que a computação deu para essas táticas antigas.  


|escala|dados|velocidade|
|:---:|:---:|:---:|
|um Dark Pattern em um site atinge milhões de pessoas instantaneamente|o algoritmo sabe exatamente em que momento você está mais vulnerável (ex: cansaço à noite) para exibir um anúncio manipulador|no mundo físico, você tem tempo de pensar; no digital, o "clique" é impulsivo|

🤔️ Diferente dessa época, hoje há a vigilância.

**Mudanças na manipulação ao longo do tempo**:

Abaixo, épocas.

|Analógica|Transição|Digital|
| :---: | :---: | :--- |
|**ambiente**<br />supermer-<br />cado|**ambiente**<br />telemar-<br />keting|**ambiente**<br />apps / e-commerce|
|**Dark Pattern Exemplo**<br />itens essenciais no fundo da loja|**Dark Pattern Exemplo**<br />muita dificuldade em desligar ou cancelar|**Dark Pattern Exemplo**<br />assinatura em 1 clique, cancelar 10 telas|

🤔 É certo que uma prática de persuasão coercitiva, sendo que a computação deu o meio mais eficiente que a humanidade já inventou para aplicá-la. A questão é que, agora, essa eficiência se resume em subjugar: xeque-mate no usuário, no "nó".  

É certo também que temos escolhas em alguma medida, então fazer o bem é possível.

É isso!  
\o/

