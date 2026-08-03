# Ebikes - Tutorial

- Componentes - Parte elétrica
- Componentes - Parte mecânica
- Comprando uma ebike
- Bikes elétricas - exemplos 20x4.0
- Venda e manutenção
- Boas praticas



## Componentes - Parte elétrica


- Compontentes principais
- Motor BLDC
- Bateria
- Controladora, *display* etc
- Compatibilidade: bateria, controladora e motor


⚠️ Para esta leitura é recomendado noções de eletrônica _como:   

    Tensão (Voltagem), V.
    Corrente Contínua, CC (DC).
    Corrente Alternada, CA (AC).


#### Compontentes principais

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.solomotorcontrollers.com%2Fwp-content%2Fuploads%2F2024%2F08%2FE-Bike-with-schematics.png&f=1&nofb=1&ipt=2ad44f8b9646121f0d851019394471d6acfce3e68d09c4adaa2439bc9c92d47d" width="320" />Bateria, controlador(a) e motor são os 3 compontentes principais.  



         BATERIA
            │
            CC
            │
            ▼      
       CONTROLADOR 
            │     ┌───────────────────────┐
            ├ ──► │    display (UART)     │
            ├ ◄── │ acelerador (5V, anal.)│
            │     │ sensor (torque, anal.)│
            │     └───────────────────────┘ 
            CA
            │
            ▼
      ┌────────────────────────────────┐
      │      MOTOR                     │
      │                                │
      │ estator  ──►  campo  ──► rotor │
      │(bobinas)    magnético   (imãs) │
      └────────────────────────────────┘




#### Motor BLDC <sup>Corrente Contínua Sem Escovas</sup>

O motor *brushless* (sem escovas) é o mais comum em e-bikes.  

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkehu02.grofrom.com%2Fwww.newayselectricss.com%2F119c645cc8b9c934b39ad4155688c94b.jpg&f=1&nofb=1&ipt=02c1d60dd4b8d0f852ea6556f3405e5ee7f330ad39b18e9e2ffcda45f2966d39" width="120" />É o item principal numa bicicleta elétrica e trabalha diretamente com a controladora, outro componente central.  

          ◀───
    motor      controladora
          ───▶

**Energia bruta!**: O motor recebe pulsos elétricos brutos (energia trifásica), que vem da controladora. A tensão recebida não é fixa. Um sistema 48 V pode ir de 0 até 48 V entre fases.

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FEbike-hall-Electric-Scooter-Hall-Sensor-120-413F-PCB-Cable-for-3wheel-motor_3489a99a-cc8e-4e1c-8dd2-469e08dabecb.76859c9401138485f53992cf197c2d75.jpeg&f=1&nofb=1&ipt=2329fc0fc2a19dfb9fd7b3f397222078170408f3cb2cdc18db1f3cbc6f4d1693" width="120" />  **Sensor Hall**: Pequeno componente eletrônico dentro do motor, ou seja, faz parte do conjunto do motor. Em um motor BLDC normalmente existem 3, e ficam perto dos ímãs do rotor. Detectam a posição do campo magnético (posição do rotor) e geram pulsos elétricos digitais para a controladora.  

👉️ Sinais digitais: são enviados em CC _tensão de 5 V (ou mesmo 3,3 V).  


###### Motor: potência e peso

|350 W| 750 W| 1000 W|
|:---:|:---:|:---:|
|Suporta o tranco do dia a dia (ir e voltar do trabalho, horas na rua etc); isso, se for de marca de qualidade, porém muitas ebikes têm motores de marcas secundárias ou OEM.| Mais potente, mesmo de marca desconhecida ou OEM, permite subir ruas bem inclinadas. Pode-se dizer que cumpre o mesmo papel de uma motocicleta simples, nesse sentido.| Com esta potência o acelerador puxará mais energia, gastando mais bateria. É recomendável equilibrar com o pedal assistido.|

Quanto mais potente, mais pesado é o motor. 750 W é ±1 kg a menos que o de 1000. 



###### Motor: marcas

**Bafang** é o "queridinho" das bikes. Algumas bikes que usam ou já usaram:  
🇺🇸 Trek, 🇧🇷 Woie, 🇧🇷 Two Dogs, <del>🇧🇷</del>🇳🇱 Caloi, Bee.  
**MXUS** é outra marca de credibilidade.



#### Bateria


<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcitylion.pl%2Fwp-content%2Fuploads%2F2023%2F03%2Fcity-lion-e-bike-down-tube-5-1024x1024.jpg.webp&f=1&nofb=1&ipt=ff3172571a303e16583efa22c94610efb8bfd640a9777fc9a957f7e3774bb105" width="120" />Ela fornece 48 V CC.

**Capacidade, características técnicas**: Ex. 48V 20Ah.  

**Marcas: Relevância de qualidade**:  


|1|2|3|
|:---:|:---:|:---:|
|🇰🇷Samsung SDI 🇰🇷 LG Energy Solution 🇯🇵Panasonic| 🇯🇵 Murata (ex-Sony) 🇨🇳 CATL| 🇨🇳 EVE Energy 🇨🇳 BYD 🇨🇳 Lishen 🇨🇳 BAK|


👉️ Demais são as genéricas ou sem identificação.  

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.nexusapp.co%2Fassets%2Fd5%2Ffb%2Fe8%2F126382257.jpg&f=1&nofb=1&ipt=3120333622d7f459045016cf4f08e7774596c8c490b53b5cfb6d32d9cad1cb73" width="120" />**BMS** <sup>Battery Management System - Sistema de Gerenciamento da Bateria</sup>: É um *ckt* eletrônico de controle e proteção, fica ligado às células da bateria.  



#### Controladora, *display* etc

###### Controladora

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_650479-MLV77679714896_072024-O.webp&f=1&nofb=1&ipt=25cd58a59cbad652bde5be7b5c2fdd5e90430ab1bedfd98d529aced49871ae43" width="120" />A **controladora** recebe energia da bateria.  

    bateria ───▶ controladora

Essa energia, 48 V por ex., é convertida em CA trifásica, isso para alimentar o motor (quando se trata de um motor brushless).  

Os componentes eletrônicos da controladora são responsáveis pelo controle e pela distribuição da energia para o motor, mas também farol, buzina etc.  


**Controladora universal**: É projetada para atuar com vários motores, configurações (tensão da bateria 36 a 60 V, potência/corrente 15 a 30 A, etc).  
👉️ Marca Ouxi, Inow, GTSM1, provavelmente, adotada essa; enquanto Oggi, talvez, use uma controladora própria.  
⚠️ Embora haja controladora universal pode haver questões de compatibilidade entre ela e o *display*, por exemplo.  



**Conectores e fios da controladora**: note abaixo que há 5 fios mais grossos _2 da bateria, 3 do motor.  

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F51%2Ffa%2Fbd%2F51fabd848ea86dafda19e60d53aeab47.png&f=1&nofb=1&ipt=fd78fbae5af3565ae521f8099807087942bea953aef962ee8a9744bc8f53e4aa" width="320" />

**Dissipador de calor**: é uma peça interna ou até mesmo a própria carcaça da controladora.  
**Microcontrolador**: um processador [MCU](nocoes-de-informatica), dedicado para esse tipo de aplicação. A função principal desse [chip](/nocoes-de-informatica) é decidir quanto de potência enviar ao motor em cada instante _o MCU usa informações que recebe dos sensores. Calcula a potência necessária com base no acelerador, sensor de pedal, velocidade etc.

As informações vêm dos *Sensores Hall* (motor), sensor PAS (pedivela) sensor freio (manetes) etc.

###### Marcas boas

|KT|Sabvoton|Votol|Bafang|
|:---:|:---:|:---:|:---:|
|🇨🇳|🇨🇳|🇨🇳|🇨🇳|

⚠️ Se o vendedor não especifica a marca, assume o risco de acharmos que é padrão genérico, OEM.  

###### MOSFETs e PWM

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmacfoxbike.com%2Fcdn%2Fshop%2Farticles%2F6_d6943be9-da9a-4a85-8a3b-c5d7c0bf6fb4.png%3Fv%3D1759040258&f=1&nofb=1&ipt=21d38b930cd2d9870819e385cdacd3bd9db1d1e88c1d1da2fbb591c980ebdc44" width="120" />O **MOSFET** é "parente" do FET, um tipo de transistor. MOSFETs ligam e desligam a corrente milhares de vezes por segundo, produzindo uma CA trifásica com 𝑓 e V controladas. Essa CA é enviada ao motor, ou precisamente, ao estator que faz o rotor girar.  

|Inversor <br />*hardware*| PWM <sup>*Pulse Width Modulation* - Modulação por Largura de Pulso</sup>|
|:---:||:---:|
|*ckt* eletrônico| técnica usada dentro do inversor|
|Converte uma forma de energia elétrica em outra. O inversor transforma CC (vinda da bateria) em CA trifásica.| A controladora converte a tensão recebida de CC para CA pela [PWM](https://joesynth.wordpress.com/2020/04/07/pwm/), a técnica mais usada.|  

👉️ A PWM é um método há décadas conhecido na eletrônica _utilizada, por ex., na música para criação de sons.

|síntese sonora| e-bike|
|:---:|:---:|
|PWM| PWM|
|A técnica altera a largura dos pulsos de uma onda quadrada para mudar o timbre do som| Também altera a largura dos pulsos|
|Resultado| Objetivo|
|Cria-se diferentes características sonoras, sons.| É controlar a quantidade de energia entregue ao motor.|

Ou seja, a controladora envia energia em pulsos (PWM) para as bobinas do motor.



#### Compatibilidade: bateria, controladora e motor

Para garantir a compatibilidade em e-bikes 20x4.0 de 750W, note:

|bateria e motor|motor e controladora|motor e controladora|
|:---:|:---:|:---:|
|Tensão|Potência e Corrente| Tipo de Motor (Sensores Hall)|
|Se bateria e motor são 48 V, controladora precisa ser de 48V.|Se motor 750W, controladora deve suportar essa potência e fornecer a corrente correta (geralmente entre 20A e 25A).| Controladora precisa corresponder ao tipo de motor. Motores de 750W comuns usam 3 cabos de fase grossos e 5 fios finos dos sensores Hall. A controladora deve ter essas mesmas conexões.|


<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fv8fatbike.com%2Fwp-content%2Fuploads%2F2024%2F03%2Ftamobyke-electric-bike-display.jpg&f=1&nofb=1&ipt=1512c9636bd94603fb18952c923aa8afca527c1db6c05c476a84eec2a46e04c2" width="120" />**Protocolo de comunicação entre o Display (painel) e a Controladora**.


###### Controladora e display: protocolos


    Controladora  ◀───▶  Display

Como vemos no diagrama, controladora e o *display* "conversam" entre si, de forma bidirecional. Os protocolos dizem como é essa comunicação.  


|UART 🇺🇸 | CAN Bus 🇩🇪|
|:---:|:---:|
|Comum nas e-bikes de entrada.| E-bikes modernas (Bafang, Shimano, Bosh...).|
|Comunicação serial simples.| Mesmo padrão usado na indústria automotiva.|
|Barato, simples e fácil de encontrar peças de reposição.| Componentes travados por software (um display Bosch não vai funcionar noutra marca.)|
|É digital, embora fios possam parecer analógicos.| Digital, porém mais avançado, robusto. |
|Típico de produtos chineses, como modelos da Ouxi. | Surge mais em projetos premium ou plataformas específicas. |

Há também RS-485 🇺🇸 e proprietários.  
Não há um conector UART universal para mopeds.  

<img src="https://joesynth.wordpress.com/wp-content/uploads/2025/05/joe_flyer_servico_b2.png" width="320" />






## Componentes - Parte mecânica

- Quadro e suspensão
- Roda e pneu
- Componentes / outros

#### Quadro e suspensão

###### Quadro - material

|Aço carbono| Alumínio|
|:---:|:---:|
|👍️|👍️|
|barato, resistente a pancadas, fácil soldar.| Mais leve (2 ou 4 kg), não oxida.|
|👎| 👎|
| Pesado e enferruja se a pintura danificar.| Caro, vibra mais, reparação difícil.|

**Alumínio 6061**: tratamento que oferece melhor qualidade.  
**Cromoly** (tipo de aço): leve, durável, absorve vibrações.  
👎 Caro e raro em bikes 20x4.0.  

###### Suspensão

Há bicicletas com e sem amortecimento:  

|com | sem|
|:---:|:---:|
|Bike mais pesada.| Bicicleta mais leve.|
|Gasta-se bateria a mais.| Mais fácil pedalar, caso dẽ pane.|
|kg| kg|
|±35 kg (pode ultrapassar 40). | Pode ter 30 kg; ±10 kg a menos que uma com amortecimento.|

⚠️ A suspensão acarreta também mais custo de manutenção.  



#### Roda e pneu

###### Roda - Tamanho

**10 ou 12 pol** (Scooter): Fuja! É péssimo para buracos.  
**26**: É  a típica ebike do Itau. Aro 26 em elétricas tende a mais furos, devido maior carga sobre o pneu.   
**29**: roda nesse tamanho força o motor.  
**20x4.0**: usa pneu mais largo. Vem se tornando comum no sul do Brasil. Características? 

|👍️|👎️|
|:---:|:---:|
|Favorece estabilidade e absorção de buracos, controle durante o frear.| Há um consumo um pouco mais elevado da bateria.|
|Mais imune a furo do tipo modida de cobra| Mais caro (que o 26)|



###### Pneu Street <sup>Rua</sup>

Uso urbano _asfalto, concreto, ciclovias, pavimento. Ideal no dia a dia, ir e voltar do trabalho, ficar horas na rua.  
Menos vibração e ruído. Proporciona uma rodagem suave.  

**Desenho da banda de rodagem** (contato com o solo): Pode ser slick, semi-slick etc.

|Street|
|:---:|
|Chaoyang Big Smoothyroad|
|Arisun Street-Go|



###### Pneu: o tipo de desenho

Aqui temos a relação com o desenho da banda de rodagem.



###### Semi-Slick

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.9T0a1F6sK8_1__EJcE_ubAHaKN%3Fpid%3DApi&f=1&ipt=2e8ad8daf905ff3a926dbba67bcd4df19623593d6e38da7c5810aa116dc75ddd" width="120" />**Kenda Kraze** é um exemplo. Esse tipo de pneu tem como características:  


● Há poucos sulcos, preserva grande área de contato com o solo.  
● Sulcos (frisos) no pneu agem como canais de escoamento.  
● Desliza bem mais fácil, reduzindo o esforço do motor e economizando bateria (permitindo "andar" horas e horas durante o dia).  
● Contato mais contínuo com o asfalto, o que favore a aderência.  
● Pneu liso tem uma área de contato mais contínua (sem os blocos dos cravos interrompendo o contato).  
● Estabilidade em curvas, sendo mais previsível.  
● Reduz a distância (isso no asfalto, e comparado com cravo).    

|Semi-Slick|
|:---:|
|Schwalbe Super Moto-X|
|CST Big Boat|
|Innova IA-3025|

|Semi-Slick / Street|
|:---:|
|Maxxis MaxxVenture E50|
|Kenda Kraze (Foto)|
|Chaoyang Sand Storm|
|Arisun Big Smoothy|

|Semi-slick / urbano-misto|
|:---:|
|Chaoyang Big Daddy|
|Innova Caracal|  

*CST e Maxxis são marcas da Cheng Shin Rubber.  




###### Slick, misto e cravo

**Slick** e **cravo** podem não ser indicados para você; devido, por ex.:

|Slick|Cravo|
|:---:|:---:|
|Ideal para pistas perfeitas; banda de rodagem lisa, sem sulcos.| Mais voltado para terra (no asfalto gera vibração, resistência ao rolamento, desgaste mais rápido com chão quente).|

**Misto (all-terrain)**: Cravo moderado. Pode ser indicado para quem fica horas na rua, quando o trabalho envolve pisos variados (paralelepípedos, buracos).  

|Misto|
|:---:|
|CST BFT** (Big Fat Tire)|  

###### Marcas secundárias (street, cravo... )

DSI, Hycline, Inowa, Movi, Gigas.  
Algumas são "genéricas" de plataformas de e-commerce (mais nylon do que borracha).
Se tornou comum o pneu fábricado por terceiro e a que uma outra empresa põe a marca.  

❌ **Marcas que não fazem pneu 20x4.0**:  
<del>🇧🇷</del>🇫🇷 Levorin 🇮🇹 Pirelli 🇩🇪 Continental 🇬🇧 Dunlop, 🇫🇷 Michelin (faz só câmera).





###### Personaliização pneu moto em aro 20x4.0 (fat bike)

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdor03phawg286.cloudfront.net%2FCustom%2FContent%2FProducts%2F10%2F31%2F1031187_pneu-moto-michelin-city-grip-2-110-70-r16-52s-tl-aro-16-dianteiro_l1_637934721136512816.jpg&f=1&nofb=1&ipt=9ea5655a8f9b77f701d64c66054cdd3d70519a699c45a80c2636d78d365a38af" width="120" />**Michelin City Grip 2** (pneu de moto): medida 110/70-16. Indicado na roda de trás da bike. Pode durar 3x mais!  
**Equivalentes nacionais**: Vipal ST500 ou Maggion Sportissimo II na mesma medida.

⚠️ Nem todo pneu 16" de moto serve para adaptacão. Há detalhes!


#### Componentes / outros

**Freio hidráulico**: Vital em bike de +40 kg. Recomendando na velocidade acima de 20 km/h.  
**Peso suportado**: No geral, 120 kg é suportado, bikes comuns aro 29 também. Algumas vão além disso, o que é bom para levar objetos pesados.  

**Peso da bike - influenciará**: Alguns pontos a observar:

|Material do quadro| Potência do motor | Suspensão|
|:---:|:---:|:---:|
|Se aço, alumínio...|Se 350 W, 1000...| Se tem ou não. |

⚠️ Peso em excesso: Aumenta a resistência e força o sistema continuamente.




## Comprando uma ebike


sssxxxx




## Bikes elétricas - exemplos 20x4.0


#### ➰ Suspensão - frente ou nenhuma  



    ⚡ motor 🔋 bateria
    🏃 autonomia ⏱️ Velocidade máx.
    🤚️ freio (parar) 🛞 marca pneu
    🔲 quadro ➰ suspensão
    🏋️ peso suportado
    

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_738321-MLB93728633818_102025-O.webp&f=1&nofb=1&ipt=d9f6f9dabae8ced570ecb9d97552b7637ef19dd02ddfac0fef9f186cc79352cf" width="120" />**Rava E-Spirit**  
⚡ 750W 80 Nm  
🔋 48V 15 Ah remo.  
🔲 Aço carbono ➰ Sus. frente  

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5037569620134530000_x.jpg" width="120" />**GTSM1 V8 max**.  
🔋 750w  
➰ Suspensão - frente.  

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5037569620134529998_x.jpg" width="120" />**GTSM1 GTS V8D S7**.  
⚡ 750W  
🔋 48V Lítio 15Ah remo.❤️  
🏃 até 80 km (pedal assist.) ❤️
⏱️ 32 km/h  
🔲 Aço carbono  ➰ Sus. frente  
🤚️ Freio hid. 🛞 Chao Yang  
💰 5250 site Gtsm1 ❤️  
🔗 [lojagtsm1.com.br](lojagtsm1.com.br/bicicletas/eletrica/bicicleta-eletrica-gts-v8d-750w-aro-20-bateria-de-litio-48v-s7)  
Foco em Custo-Benefício.  



<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5033078660595911675_x.jpg" width="120" />**GTSM1 🇧🇷 V8S**.  
⚡ 750w 65 Nm  
🔋 48v 15 Ah  
⏱️ 32 km/h  
🔲 Aço ➰ Sus. frente  
🤚️ Freio mec. 🛞 CST  

**V8**  
Idem  
🔲 AçoCroCar. 👍  

**V8F, V8max**:  
Modelos diferentes.  
Confira especificações.  
Material quadro, altura banco, 1 ou 2 bat., cap. bat., suspensão.  



<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5035317820320844685_x.jpg" width="120" />**StreetGo S12** 🇧🇷 (Oggi).  
⚡ 750W 80 Nm ❤️  
🔋 48V 15Ah remo.  
🔋 Marca Samsung ou LG ❤️   
⏱️ 32 km/h  
🔲 Aluminio ➰ Sus. frente.  
🤚️ Freio hid. 🛞 CST ❤️  
Seguro grátis 12 meses. ❤️  
💰7400 ML  
**Foco**: Custo-Benefício.  
🔗 Gtsm1.com.br  


<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5033078660595912266_x.jpg" width="120" />**Ouxi 🇨🇳 V8S**.  
⚡ 1000w 🔋 48v  
➰ Sus. frente.   

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5033078660595911691_x.jpg" width="120" />**Two Dogs 🇧🇷 Bigfoot T1**.  
⚡ 750w 🔋 48V  
🔋 removível, proteção água.  
🤚️ Freio mec.  
🏋️ 160 kg ❤️  
Alarme e dois lugares  
Manopla parece baixa 😡  
➰ Suspensão: não.   


<img src="https://http2.mlstatic.com/D_Q_NP_2X_945467-MLA100055727613_122025-F.webp" width="120" />
**Starmega V8** 
⚡ 750w 🔋 48V  
➰ Sus. frente.   
🤚️ Freio hid.    
Bagageiro/suporte traseiro remo.


**Starmega V8 Pro** 750W
Pode ou não ter suspensão traseira, varia.



#### ➰ Suspensão dupla

Ou seja, na frente e atrás.

**GTSM1 V8X 2.0**  

**StreetGo S27 e S40**  

**Ouxi V8 Pro e Ouxi H9**  



<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.tcdn.com.br%2Fimg%2Fimg_prod%2F476585%2Fbicicleta_eltrica_rava_chopper_aro_20_freio_hidr_2_20260122180950_1cae0590cbbd.jpeg&f=1&nofb=1&ipt=0e4936299580dd11fd655c31e8c364dc8c4a16cf78dd3013fd0f4849d9d7ecd8" width="120" />**Rava (TSW) E-Chopper**.  
⚡ 750W 🔋 48V 15Ah remo.  
🔲 Alumínio 6061  
🤚️ Freio hid.  

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5035317820320844689_x.jpg" width="120" />**Konnan 🇧🇷 Winner**.  
⚡ 750w 🔋 48V 18,2Ah remo.  
🏃 50 km (pedal assist.)  
⏱️ 32 km/h; 🏋️ 120 kg  
Garantia fáb. 12 meses.  
💰6500 ML  

**Konnan Thunder E-Titan G60**.  
⚡ 1000 w 🔋 48v 15Ah  
🤚️ Freio hid.  
Projetada para trabalho.  


<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5035330460409596920_x.jpg" width="120" />**Inow V20 Brake**  
⚡ 1000 w  
🔋 48v 15 mAh, remo.❤️  
⏱️ 45 km/h 60km  
🤚️ Freio hid.  
Alarme e chave  
🏋️ 200 kg ❤️  
💰 8900 ML  
👉️ Outro anuncio no ML tinha especificações diferente, por ex, 750 w e 🏋️ 150 kg. ❤️  
🔗️ 🇧🇷 inowbrasil.com.br

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5033078660595911672_x.jpg" width="120" />**Inow V20 Pro/Brake Pro**.  
⚡ 750w 🔋 48v 15Ah  
🔋 1000 w modelo recente  
⏱️ 32 km/h  

**Inow C20**:
⚡ 750w  




<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_827015-MLA97835223325_112025-O.webp&f=1&nofb=1&ipt=1fbc2783b3bc391d2ea2ab65955b4eb5e156ee29dc7097369c4aeba479756723" width="120" />**Duos E-vok**  
⚡ 1000 W  

**Amyet S8-S** (Bike Gaucho)  
⚡ 2x1000 80 Nm, motor marca generica.  
🔋 48V 25 Ah lítio remo.  
🏃 até 85 km (pedal assist.) ❤️  
Vedada, certificação IP54 contra poeira e respingos. 
🏋️ 150 kg ❤️




## Venda e manutenção

Abaixo há lojas que não são rede oficial Ouxi, Inow, por ex., mas trabalham com OEMs (controladora, motor, display, acelerador, b


###### eBike 20x4.0 - venda, manutenção e peças

    🛒 Venda 🔧 Manutenção ⚙️ Peças

<small>
**Eplay** 🛒 🔧 ⚙️ Jacaré.  
966451084  
🚴 Duos E-vok.  
**DK Bicicleta Elétrica** 🛒 🔧 Bangu.  
96472-4634  
Rua Figueiredo Camargo, 1133  
🚴 Duos E-vok  
🔗️ dkbicicletaeletrica.com.br  
**Mobe** 🛒 Anil  
96914-2237  
🚴 Mobe B01  
@mobemobilidadeeletrica (Insta)  
**Morais Bike** 🛒 🔧 Centro.  
 97302-7143  
🚴 StreetGo.  
**Rezende Bike** 🛒 🔧 Centro.  
🚴 StreetGo, Ouxi.  
4101-9307  
**Nossa Bike** 🛒 🔧  Rocha Miranda.  
98399-4723  
🚴 V8 Max e V8 Pro.  
**Biobike** 🛒 🔧 ⚙️ Barra  
Shopping Città América - Av. das Américas, 700 – Bloco 8 – Loja 103 S/T.  
🔗️ biobike.com.br  
🚴 Two Dogs Bigfoot T1.  
**Biobike** 🔧 ⚙️ Engenho de Dentro  
2289-0332 (Eng. de Dentro)  
Rua Barbacena, 55.  
96421-6334  
**Nossa Bike**🔧 Rocha Miranda  
98268-8386  
**Nossa Bike** Rocha Miranda.  
98015-4606  
**Mattos** Mobilidade Elétrica 🔧 Piedade  
96414-8812  
Cardoso Quintão, 636.  
Troca de baterias, diagnóstico eletrônico, revisão completa, instalação de peças.  
**Bike Motor**: 🔧 Irajá.  
4109-0758  
97033-6644  
**Inovabike** 🔧 ⚙️ Irajá.  
986650076  
**RM Bike Motorizada** 🔧 ⚙️ Colégio  
99809-0332 (Michele).  
Est. do Colégio, 115.  
**RM Bike Motorizada**: Colégio  
98531-5444  

---  
---  
**Rota E-Bike** 🛒 🔧  Copacabana.  
99776-1236  
🚴 Inow.  
**Bossa Liberdade Elétrica** 🛒 🔧 Copacabana.  
96736-9737  
🚴 Moped marca própria  
**Carioca Bikes Elétricas** 🛒 🔧 ⚙️ Copacabana.  
96576-8965 [👎️ tel não atende]  
Rua Santa Clara, 99 A.  
🔗️ bossaeletricas.com.br  
**Flex Mobi** 🛒  Ipanema / Niterói.  
97116-3388 99932-2598 967820209  
[👎️ sem contato]  
**Bee Elétricas** 🛒 🔧  Botafogo.  
97626-8617 (Unidade Botafogo) 4003-4131.  
**ConsertaBike** 🔧  Copacabana etc.  
97158-5627 3439-5005  
---  
---  
**Din Bike Elétrica** 🛒 🔧 Recreio.  
99974-5876  
**Elétric Barra** 🛒 🔧 Barra da Tijuca.  
98481-0789 2484-8489  
Av. Ayrton 5500 Bloco 03 Loja 128 - Shopping Uptown Barra.  
**Wallace** 🔧 (Técnico ebike - indicação prof. Silas).  
982571610  
**Silas Ramalho (Tecle Motos)** 🔧 Recreio.  
Curso.  
---  
---  
 **Motorei**  
Curso  
**Tafarel Louzada**  
@tafarellouzada  
Curso de Scooter/Moto Elétrica  
---  
---  
**Domus Viridi** 🛒 Niterói.  
99191-0774  
🚴 Inow.  
🔗️ domusviridi.com.br  
**Fag Moto Peças** 🔧 S.J. de Meriti.  
988776811  
@fagmotopecassj (Insta)  
R. Gessy Gonçalves Fontes, 192  
**Salmo** (Doctor Bike) 🔧 S.J. de Meriti.  
Técnico ebike (indicação prof. Silas).  
99476 5084  
Av. Getulio de Moura, 386  
"A bateria não avisa. Ela simplesmente para."  
---  
---  
**AlugMotos Locadora** - Nova Iguaçu.  
97358-7703  
Cel. Francisco Soares, 667.  
🔗️ alugmotos.com  
</small>

###### manutenção somente mecânica - não parte elétrica


<small>
**Nitros Bike** S.J. de Meriti.  
96550 3759  
Av. Comendador Teles, 2 – Lote 02/Quadra 48, Vilar dos Teles.  
**Superbike** - Piedade - 2594-8255 / (21) 97204-6258  
**Bike Lapa** (Centro) - 2224-0428  
**Parah Bike** - Cascadura
99022-7469 - Av. Dom Helder Câmara, 9648.
</small>






## Boas praticas

#### Acelerador de mão

Não use em subidas. Ele injeta corrente máxima de forma instantânea; gera pico de calor. Use-o, por ex., em retas ou para arrancar do zero (até 5 km/h).

#### Motor sendo forçado

###### Como saber?

Ocorre quando a rotação (velocidade de giro) dele cai muito sob carga, fazendo com que a energia elétrica vire calor em vez de movimento. Verificar se há esforço pelo...  


|Som do motor| Painel (display) <br />Indicador de Corrente (Power/Current)|
|:---:|:---:|
|Deve ser um silvo contínuo e suave; um agudo livre| Barra de consumo de energia (em Watts ou Amperes). Não deve ficar travada no limite máximo durante toda a subida.|
|Um ruído mais alto, grave, ronco ou um “zumbido sofrido” indica que o motor está trabalhando mal (corrente alta, rotação baixa).| No topo da barra, o motor opera no limite térmico.|  

|Marcha e pedalada|Marcha e pedalada|
|:---:|:---:|
|Prática correta| Sinal de fadiga|
|Use a marcha mais leve| Marcha pesada|
|(catraca grande)| (catraca pequena)|
|As pernas devem girar rápido e sem peso. Se a sua pedalada estiver rápida e o motor acompanhar esse giro sem reduzir a velocidade abruptamente, ele não está sendo forçado | Se você está em uma marcha pesada, pedalando devagar e travado, o motor também está travado e superaquecendo.|


#### Subida íngreme

**Pedale rápido na catraca grande**: a alta cadência com a catraca maior mantém o motor com boa rotação, portanto, maior eficiência e menor aquecimento.  
**Arrancada em ladeira**: Sair do zero na subida exige pico máximo de torque e corrente elétrica.  
**Peso em excesso**: Aumenta a resistência inercial e força o sistema continuamente.  


#### Pastilhas de Freio - Economizar

Velocidade até 20 km/h economiza bastante.

#### Bateria

|Carregue quando chegar a 20%| Deixe esfriar| Acelere menos|
|:---:|:---:|:---:|
|Não deixe a bateria chegar a 0%. Coloque para carregar quando atingir cerca de 20%.| Não ligue a bateria no carregador logo após terminar as entregas. águarde 20 a 30 min para esfriar antes de colocar na tomada.| Acelerador consome bem mais bateria. Mesmo uma saída suave pelo acelerador consome mais energia do que iniciar o movimento pelo pedal.|





É isso.
\o/
