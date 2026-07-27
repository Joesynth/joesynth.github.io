# Uberização - bikes

Tutorial.



## Componentes

⚠️ Para esta leitura é recomendado mínima noção de eletricidade. Os termos incluem:   

    Tensão (Voltagem), V.
    Corrente Contínua, CC (DC).
    Corrente Alternada, CA (AC).


Peças: tão importante quanto marca.

- Motor
- Bateria
- Controladora e *display*
- Quadro
- Roda
- Outros


#### Motor BLDC <sup>Corrente Contínua Sem Escovas</sup>

O motor *brushless* (sem escovas) é o mais comum em e-bikes.  

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkehu02.grofrom.com%2Fwww.newayselectricss.com%2F119c645cc8b9c934b39ad4155688c94b.jpg&f=1&nofb=1&ipt=02c1d60dd4b8d0f852ea6556f3405e5ee7f330ad39b18e9e2ffcda45f2966d39" width="120" />É o item principal numa bicicleta elétrica e trabalha diretamente com a controladora, outro componente central.  

          <---
    motor      controladora
          --->

**Energia bruta!**: O motor recebe pulsos elétricos brutos (energia trifásica), que vem da controladora. A tensão recebida não é fixa. Um sistema 48 V pode ir de 0 até 48 V entre fases.

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FEbike-hall-Electric-Scooter-Hall-Sensor-120-413F-PCB-Cable-for-3wheel-motor_3489a99a-cc8e-4e1c-8dd2-469e08dabecb.76859c9401138485f53992cf197c2d75.jpeg&f=1&nofb=1&ipt=2329fc0fc2a19dfb9fd7b3f397222078170408f3cb2cdc18db1f3cbc6f4d1693" width="120" />  **Sensor Hall**: Pequeno componente eletrônico dentro do motor, ou seja, faz parte do conjunto do motor. Em um motor BLDC normalmente existem 3, e ficam perto dos ímãs do rotor. Detectam a posição do campo magnético (posição do rotor) e geram pulsos elétricos digitais para a controladora.  

👉️ Sinais digitais: são enviados em CC _tensão de 5 V (ou mesmo 3,3 V).  


###### Potência

**350 W**: Aliado a uma marca de qualidade suporta o tranco do dia a dia, como ir e voltar do trabalho, horas na rua etc. Porém, muitas ebikes vendidas são motores de marcas secundárias ou até sem marca (OEM).

**750 W**: Mais potente, mesmo de marca desconhecida ou OEM, permite subir ruas bem inclinadas. Pode-se dizer que cumpre o mesmo papel de uma motocicleta simples, nesse sentido.

**1000 W**: Com esta potência o acelerador puxará mais energia, gastando mais bateria. É recomendável equilibrar com o pedal assistido.

###### Peso do motor

750 W é cerca de 1 kg a menos que o de 1000. 


###### Motor: marcas e peso

**Bafang** é o "queridinho" das bikes. Algumas bikes que usam ou já usaram:  
🇺🇸 Trek, 🇧🇷 Woie, 🇧🇷 Two Dogs, <del>🇧🇷</del>🇳🇱 Caloi, Bee.  
**MXUS** é outra marca de credibilidade.



#### Bateria


<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcitylion.pl%2Fwp-content%2Fuploads%2F2023%2F03%2Fcity-lion-e-bike-down-tube-5-1024x1024.jpg.webp&f=1&nofb=1&ipt=ff3172571a303e16583efa22c94610efb8bfd640a9777fc9a957f7e3774bb105" width="120" />Ela fornece 48 V CC.

**Capacidade, características técnicas**: Ex. 48V 20Ah.  

**Marcas: Relevância / qualidade**:  


**1**: 🇰🇷Samsung SDI, 🇰🇷 LG Energy Solution, 🇯🇵Panasonic.  
**2**: 🇯🇵 Murata (ex-Sony), 🇨🇳 CATL.  
**3**: 🇨🇳 EVE Energy, 🇨🇳 BYD, 🇨🇳 Lishen, 🇨🇳 BAK.  

👉️ Demais são as genéricas ou sem identificação.  

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.nexusapp.co%2Fassets%2Fd5%2Ffb%2Fe8%2F126382257.jpg&f=1&nofb=1&ipt=3120333622d7f459045016cf4f08e7774596c8c490b53b5cfb6d32d9cad1cb73" width="120" />**BMS** <sup>Battery Management System - Sistema de Gerenciamento da Bateria</sup>: É um *ckt* eletrônico de controle e proteção, fica ligado às células da bateria.  



#### Controladora, *display* etc

###### Controladora

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_650479-MLV77679714896_072024-O.webp&f=1&nofb=1&ipt=25cd58a59cbad652bde5be7b5c2fdd5e90430ab1bedfd98d529aced49871ae43" width="120" />Recebendo a energia da bateria, a **controladora** converte essa energia (que é do tipo de 48 V) em CA trifásica, isso para alimentar o motor (quando se trata de um motor brushless).  

Os componentes eletrônicos dela são responsáveis pelo controle e pela distribuição da energia para o motor, mas também farol, buzina etc.  


**Controladora universal**: É projetada para atuar com vários motores, configurações (tensão da bateria 36 a 60 V, potência/corrente 15 a 30 A, etc).  
👉️ Marca Ouxi, Inow, GTSM1, provavelmente, adotada essa; enquanto Oggi, talvez, use uma controladora própria.  
⚠️ Embora haja controladora universal pode haver questões de compatibilidade entre ela e o *display*, por exemplo.  



<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F51%2Ffa%2Fbd%2F51fabd848ea86dafda19e60d53aeab47.png&f=1&nofb=1&ipt=495a97211fca03d009fb914fe403643364070bb8801a2b47bb48976657f0b384" width="320" />

É composta por:  

**Conectores e fios**: note que há 5 fios mais grossos (2 da bateria, 3 do motor).  
**Dissipador de calor**  
**Microcontrolador**: um processador [MCU](nocoes-de-informatica), dedicado para esse tipo de aplicação. A função principal desse *chip* é decidir quanto de potência enviar ao motor em cada instante _o MCU usa informações que recebe dos sensores. Calcula a potência necessária com base no acelerador, sensor de pedal, velocidade etc.

As informações vêm dos *Sensores Hall* (motor), sensor PAS (pedivela) sensor freio (manetes) etc.


<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbatteryswapcabinet.com%2Fwp-content%2Fuploads%2F2023%2F12%2FCommon-faults-of-ebike-controller.webp&f=1&nofb=1&ipt=5092da6ee582abc9117f72500e02153beece6f39a0ce30fc07d3ad867e33da5f" width="320" />

**MOSFETs**: ligam e desligam a corrente milhares de vezes por segundo, produzindo uma CA trifásica com 𝑓 e V controladas. Essa corrente é enviada ao motor, fazendo o rotor girar.

**PWM** <sup>*Pulse Width Modulation* - Modulação por Largura de Pulso</sup>: A controladora converte a tensão recebida de CC para CA pela [PWM](https://joesynth.wordpress.com/2020/04/07/pwm/), a técnica mais usada. A PWM é um método há décadas conhecido na eletrônica _utilizada, por ex., na música para criação de sons.

|síntese sonora| e-bike|
|:---:|:---:|
|PWM| PWM|
|A técnica altera a largura dos pulsos de uma onda quadrada para mudar o timbre do som| Também altera a largura dos pulsos|
|Resultado| Objetivo|
|Cria-se diferentes características sonoras.| É controlar a quantidade de energia entregue ao motor.|



###### Marcas boas

|KT|Sabvoton|Votol|Bafang|
|:---:|:---:|:---:|:---:|
|🇨🇳|🇨🇳|🇨🇳|🇨🇳|

⚠️ Se o vendedor não especifica a marca, assume o risco de acharmos que é padrão genérico, OEM.  

Para garantir a compatibilidade em e-bikes 20x4.0 de 750W, note:

|bateria e motor|motor e controladora|motor e controladora|
|:---:|:---:|:---:|
|Tensão|Potência e Corrente| Tipo de Motor (Sensores Hall)|
|Se bateria e motor são 48 V, controladora precisa ser de 48V.|Se motor 750W, controladora deve suportar essa potência e fornecer a corrente correta (geralmente entre 20A e 25A).| Controladora precisa corresponder ao tipo de motor. Motores de 750W comuns usam 3 cabos de fase grossos e 5 fios finos dos sensores Hall. A controladora deve ter essas mesmas conexões.|


<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fv8fatbike.com%2Fwp-content%2Fuploads%2F2024%2F03%2Ftamobyke-electric-bike-display.jpg&f=1&nofb=1&ipt=1512c9636bd94603fb18952c923aa8afca527c1db6c05c476a84eec2a46e04c2" width="120" />**Protocolo de comunicação entre o Display (painel) e a Controladora**.


|Protocolo Ouxi|Protocolo GTSM1|
|:---:|:---:|
|UART digital codificado (exige display e controladora idênticos para evitar erro de sistema).| UART genérico ou fiação analógica simples.


      Bateria
         |
    Controladora  <--->  Display
         |
       Motor

#### Quadro

**Amortecimento**:  

|com | sem|
|:---:|:---:|
|Bike mais pesada, então gasta-se bateria a mais| Bicicleta mais leve|
|O peso da bicicleta pode chegar aos 38 kg em média.| Sem amortecimento (na frente e atrás) a bike pode ter 30 kg,|



|Aço carbono| Alumínio|
|:---:|:---:|
|👍️|👍️|
|barato, resistente a pancadas, fácil soldar.| Mais leve (2 ou 4 kg), não oxida.|
|👎| 👎|
| Pesado e enferruja se a pintura danificar.| Caro, vibra mais, reparação difícil.|

**Alumínio 6061**: tratamento que oferece melhor qualidade.
**Cromoly** (tipo de aço): leve, durável, absorve vibrações.  
👎 Caro, raro em bikes 20x4.0.  




#### Roda - Tamanho

**10 ou 12 pol** (Scooter): Fuja! É péssimo para buracos.  
**26**: É  a típica ebike do Itau. Em ebike tende a mais furos, devido maior carga sobre o pneu.   
**29**: roda nesse tamanho força o motor.  
**20x4.0**: usa pneu mais largo. Vem se tornando comum no sul do Brasil. Características? 

|👍️|👎️|
|:---:|:---:|
|Favorece estabilidade e absorção de buracos, controle durante o freiar.| Há um consumo um pouco mais elevado da bateria.|
|Mais imune a furo do tipo modida de cobra| Mais caro (que o 26)|




#### Pneu

###### Street vs. Cravo - pneu quanto ao tipo de solo

|Street| Cravo|
|:---:|:---:|
| Uso urbano (asfalto, concreto, ciclovias e pavimento). Ideal no dia a dia, ir e voltar do trabalho, ficar horas na rua. | Pneu mais voltado para terra.  |
| Menos vibração e ruído. Proporciona uma rodagem suave.| Vibração contínua no asfalto: gera desconforto ao piloto após horas de jornada, acelera o desgaste ou afrouxa componentes da bicicleta.|
|| No asfalto evite. Velocidade < 20 km/h: caso a considerar possível uso.|
|| Alta resistência ao rolamento (atrito desnecessário com o asfalto). Desgaste Uniforme: cravo sofre desgaste acelerado e irregular quando utilizado só no asfalto quente, reduzindo rápido sua vida útil.|



###### Pneu: o tipo de desenho

Aqui temos a relação com o desenho da banda de rodagem.

|Slick| Semi-slick|
|:---:|:---:|
| Banda de rodagem lisa, sem sulcos.| Há poucos sulcos, preservando grande área de contato com o solo.|
| Agua no canto da via: ele não "empurra" para fora. | Sulcos (frisos) no pneu agem como canais de escoamento.|
| Projetado para pistas perfeitas| Desliza bem mais fácil, reduzindo o esforço do motor e economizando bateria (permitindo "andar" horas e horas durante o dia).|
|| Contato mais contínuo com o asfalto, o que favore a aderência.|
|| Pneu liso tem uma área de contato mais contínua (sem os blocos dos cravos interrompendo o contato).|
|| Estabilidade em curvas, sendo mais previsível.|
|| Reduz a distância de frenagem, algo vital no Rio de Janeiro.|


###### Street e Semi-Slick - exemplos 20x4.0

Abaixo está, mais ou menos, numa lista de qualidade.  

 
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.9T0a1F6sK8_1__EJcE_ubAHaKN%3Fpid%3DApi&f=1&ipt=2e8ad8daf905ff3a926dbba67bcd4df19623593d6e38da7c5810aa116dc75ddd" width="120" />**Kenda Kraze**.  


|Street / Semi-Slick|Street|
|:---:|:---:|
|Maxxis MaxxVenture E50|Chaoyang Big Smoothyroad|
|Kenda Kraze (Foto)|Arisun Street-Go|
|Chaoyang Sand Storm||
|Arisun Big Smoothy||  

*CST e Maxxis são marcas da Cheng Shin Rubber.  


|Semi-slick / urbano-misto|
|:---:|
|Chaoyang Big Daddy|
|Innova Caracal|  


|Semi-Slick|
|:---:|
|Schwalbe Super Moto-X|
|CST Big Boat|
|Innova IA-3025|  

|misto (all-terrain)<br />cravo moderado|
|:---:|
|Pode ser indicado para quem fica horas na rua, quando o trabalho envolve pisos variados (paralelepípedos, buracos).|
|CST BFT** (Big Fat Tire)|  


Em suma...  


    Street / Slick
    ████████████

    All-terrain (misto)
    ▇▇▆▇▇▆▇▇▆▇
    (cravos baixos e próximos)

    Off-road / Cravo
    ▲   ▲   ▲
      ▲   ▲
    (cravos altos e espaçados)


👎️ **Marcas secundárias** (street, cravo etc): DSI, Hycline, Inowa, Movi, Gigas.  
Destas, algumas caem no genérico de plataformas de e-commerce (mais nylon do que borracha, ou, pneu fabricado por terceiro e a empresa põe a marca).  
❌ **Marcas que não fazem pneu 20x4.0**:  
Levorin, Pirelli, Continental, Dunlop, Michelin (faz só câmera).



###### Personaliização pneu moto em aro 20x4.0 (fat bike)

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdor03phawg286.cloudfront.net%2FCustom%2FContent%2FProducts%2F10%2F31%2F1031187_pneu-moto-michelin-city-grip-2-110-70-r16-52s-tl-aro-16-dianteiro_l1_637934721136512816.jpg&f=1&nofb=1&ipt=9ea5655a8f9b77f701d64c66054cdd3d70519a699c45a80c2636d78d365a38af" width="120" />**Michelin City Grip 2** (pneu de moto): medida 110/70-16. Indicado na roda de trás da bike. Pode durar 3x mais!  
**Equivalentes nacionais**: Vipal ST500 ou Maggion Sportissimo II na mesma medida.

⚠️ Nem todo pneu 16" de moto serve para adaptacão. Há detalhes!



#### Componentes / outros

**Freio hidráulico**: Melhor que mecânico. Vital em bike de +40 kg. Recomendando na velocidade acima de 20 km/h.  
**acabamento**.  
**Peso da bike - influenciará**: Material do quadro, se tem ou não amortecimento, motor, são alguns itens.  
**Peso suportado**: No geral, 120 kg é o que elas suportam, bikes comuns aro 29 também. Algumas vão além disso, o que é bom para levar comida de animais ou bebida.  






## As marcas

A importância delas está no pós- venda, garantia, peças reposição, seguro incluso, assistência do vendedor.  

Fique atento ao [modelo de negócio](/modelo-de-negocio) que elas usam _**isca e anzol**, **aprisionamento tecnológico** etc.  

|Sem aprisionamento|Com aprisionamento|
|:---:|:---:|
|Temos peças e eletrônica genéricas, baratas e universais| Sistemas que exigem peças originais e autorizadas, ou seja, exclusivas ou com dependência de autorizada.|

Exemplos de marcas relacionadas a modelos de negócios.  

|sem (ou baixo)| médio | alto|
|:---:|:---:|:---:|
|Ouxi Colorway Starmega | GTSM1 Sousa Bike Bikelete Bike Fast Bee iNow (ou alto) Konnan Giorrad Move Ways Two Dogs | StretGo Rava (TSW) Sense Duos Caloi Atrio (Multilaser)|


|Baixo temos...| Médio temos...|
|:---:|:---:|
|eletrônica simples, aceita controladoras e peças universais de internet.| formato de bateria e plugs específicos; peças só via importação direta/Aliexpress|

**Bom pós venda?** Pode ocorrer, inclusive manutenção, simplesmente porque a marca usa a ideia de *vendor lock-in*, que financia e centraliza a rede de atendimento.

**StreetGO (Oggi)**: A marca opera no modelo de distribuição, ou seja, vende seus produtos através de lojas de bicicletas e revendas autorizadas no Brasil (incluindo lojas parceiras físicas e virtuais como a Dataro Sports e a GTSM1). 

**Lock-in técnico**? É possível. Vide modelo de negócios.

###### Marcas - fábricas, distribuidores e afins

A maioria não fabrica todos componentes, nem monta uma bicicleta 100% nacional. Do CNPJ há atividades diferentes, onde umas lidam  com importação/distribuição, outras diretamente com o cliente, etc. Estrutura (ebike tipo "V8"). Ex.:  


|boa | média| baixa|
|:---:|:---:|:---:|
|🇧🇷 Bikelete 🇧🇷 GTSM1 🇧🇷 Starmega| 🇧🇷 Inow 🇨🇳 🇧🇷 Ouxi 🇧🇷 Move Ways| Bike Fast Colorway Giorrad|  

Konnan é um caso, típica importadora e distribuidora.  

🔗️ bikelete.com  

Mais marcas, independente de ser ou não V8, incluem...  
Woie, *<del>Dafra</del>, Bee.  

Starmega: Verificar se há falta de suporte e disponibilidade de peças.  
E ainda, verifique se tal marca não é uma loteria; visto que reposição de peças e garantia variam bastante. 


👉️ Mais importante que marca é peça fácil (controladora, bateria, motor), loja que resolve rápido, bike que aguenta tranco diário.  


#### OEM <sup>Fabricante Original de Equipamentos</sup>

A ideia? Uma empresa faz mil produtos, fulando compra 400, beltrano 600; cada um põe sua marca. Ou seja, a fabrica em si não se envolve com marca ou distribição.  

Ouxi, iNow, Colorway, Move Ways dependem muito do vendedor para garantia, por serem marcas ligadas a produtos OEM, 
Ouxi, porém, é bem mais difundida, daí com facilidade de encontrar peças.









## Bikes elétricas - 20x4.0


#### ➰ Suspensão - frente ou nenhuma  

Bikes com suspensão somente na frente tem menos custos de manutenção

    ⚡ motor 🔋 bateria
    🔲 quadro ➰ suspensão

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_738321-MLB93728633818_102025-O.webp&f=1&nofb=1&ipt=d9f6f9dabae8ced570ecb9d97552b7637ef19dd02ddfac0fef9f186cc79352cf" width="120" />**Rava E-Spirit**  
⚡ 750W 80Nm  
🔋 48V 15Ah remo?  
🔲 Aço carbono ➰ Sus. frente  

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5037569620134530000_x.jpg" width="120" />**GTSM1 V8 max**.  
🔋 750w  
➰ Suspensão - frente.  

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5037569620134529998_x.jpg" width="120" />**GTSM1 GTS V8D S7**.  
⚡ 750W 🔋 48V Lítio 15Ah remo.❤️  
VelMax 32 km/h  
Auto. 70 a 80 km ped. assis.  
Freio hid.  
🔲 Aço carbono  ➰ Sus. frente  
🛞 Chao Yang  
💰 5250 site Gtsm1 ❤️  
🔗 lojagtsm1.com.br/bicicletas/eletrica/bicicleta-eletrica-gts-v8d-750w-aro-20-bateria-de-litio-48v-s7  
Foco em Custo-Benefício.  



<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5033078660595911675_x.jpg" width="120" />**GTSM1 🇧🇷 V8S**.  
⚡ 750w 65Nm  
🔋 48v 15Ah  
VelMax 32  
🛞 CST  
Freio mec.  
🔲 Aço ➰ Sus. frente

**V8**  
Idem  
🔲 AçoCroCar. 👍  

**V8F, V8max**:  
Modelos diferentes.  
Confira especificações.  
Material quadro, altura banco, 1 ou 2 bat., cap. bat., suspensão.  



<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5035317820320844685_x.jpg" width="120" />**StreetGo S12** 🇧🇷 (Oggi).  
⚡ 750W 80Nm ❤️  
🔋 48V 15Ah remo.  
🔋 Marca Samsung ou LG ❤️   
VelMax 32  
Freio hid. ❤️  
🔲 Aluminio ➰ Sus. frente. 
Seguro grátis 12 meses. ❤️❤️  
💰7400 ML  
**Foco**: Custo-Benefício.  
Componentes mecânicos de marcas conhecidas (como Shimano), o que facilita manutenção no dia a dia.  
🔗 Gtsm1.com.br  


<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5033078660595912266_x.jpg" width="120" />**Ouxi 🇨🇳 V8S**.  
⚡ 1000w 🔋 48v  
➰ Sus. frente.   

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5033078660595911691_x.jpg" width="120" />**Two Dogs 🇧🇷 Bigfoot T1**.  
⚡ 750w 🔋 48V  
🔋 removível, proteção água.  
Alarme e dois lugares  
Freio mec.  
Peso 160kg ❤️  
Manopla parece baixa 😡  
➰ Suspensão: não.   


<img src="https://http2.mlstatic.com/D_Q_NP_2X_945467-MLA100055727613_122025-F.webp" width="120" />
**Starmega V8** 
⚡ 750w 🔋 48V  
➰ Sus. frente.   
Freio hidráulico.  
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
Freio hid.  

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5035317820320844689_x.jpg" width="120" />**Konnan 🇧🇷 Winner**.  
⚡ 750w 🔋 48V 18,2Ah remo.  
VelMax 32 peso 120  
Auto. 50 km com assis. pedal.  
Garantia fab. 12 meses.  

💰6500 ML  

**Konnan Thunder E-Titan G60**.  
⚡ 1000w 🔋 48v 15Ah  
Freio hidraulico  
Projetada para trabalho.  


<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5035330460409596920_x.jpg" width="120" />**Inow V20 Brake**  
⚡ 1000w 🔋 48v 15 mAh, removível.  
VelMax 45km/h 60km  
Alarme e chave  
Peso 200 kg  
Freio hid.  
💰 8900 ML  
👉️ Outro anuncio no ML tinha espececificações diferente, por ex, 750w e peso 150 kg.  
🔗️ 🇧🇷 inowbrasil.com.br

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5033078660595911672_x.jpg" width="120" />**Inow V20 Pro/Brake Pro**.  
⚡ 750w 🔋 48v 15Ah  
🔋 1000w modelo recente  
VelMax 32  

**Inow C20**:
⚡ 750w  



<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_827015-MLA97835223325_112025-O.webp&f=1&nofb=1&ipt=1fbc2783b3bc391d2ea2ab65955b4eb5e156ee29dc7097369c4aeba479756723" width="120" />**Duos E-vok**  1000W  

**Amyet S8-S** (Bike Gaucho)  
⚡ 2x1000 80Nm, motor marca generica.  
🔋 48V 25Ah lítio remo.  
Vedada, certificação IP54 contra poeira e respingos.  
Auto. Modo assiti. 65 a 85 km  
Peso supor. 150 kg




## Venda e manutenção

Abaixo há lojas que não são rede oficial Ouxi, Inow, por ex., mas trabalham com OEMs (controladora, motor, display, acelerador, b


###### eBike 20x4.0 - venda, manutenção e peças

    🛒 Venda 🔧 Manutenção ⚙️ Peças

<small>
**Eplay** 🛒 🔧 ⚙️ Jacaré.  
966451084  
Venda Duos E-vok.  
**DK Bicicleta Elétrica** 🛒 🔧 Bangu.
96472-4634
Rua Figueiredo Camargo, 1133  
Vende Duos E-vok
🔗️dkbicicletaeletrica.com.br  
**Mobe** 🛒 Anil  
96914-2237  
Vende Mobe B01  
@mobemobilidadeeletrica (Insta)  
**Morais Bike** 🛒 🔧 Centro.  
 97302-7143  
**Rezende Bike** 🛒 🔧 Centro.  
 Vende Ouxi. Atendimento diretamente no balcão da loja física.  
**Nossa Bike** 🛒 🔧  Rocha Miranda.  
98399-4723  
**Nossa Bike**🔧 Rocha Miranda  
98268-8386  
**Nossa Bike** Rocha Miranda.  
98015-4606  
**Mattos** Mobilidade Elétrica 🔧 Piedade  
96414-8812  
Cardoso Quintão, 636.  
Troca de baterias, diagnóstico eletrônico, revisão completa, instalação de peças.  
**RM Bike Motorizada** 🔧 ⚙️ Colégio (Estação Metro após Irajá).  
99809-0332 (Michele).  
Est. fo Colégio, 115.  
**RM Bike Motorizada**: Colégio (Estação Metro após Irajá).  
98531-5444  
**Bike Motor**: Irajá. 97033-6644  [PARECE Q N LIDA COM EBIKE, MUITO MENOS MANU]  
**Inovabike** 🔧 ⚙️ Irajá.  
986650076  
---  
---  
**Bee Elétricas** 🛒 🔧  Botafogo.  
97626-8617 (Unidade Botafogo) 4003-4131.  
**Rota E-Bike** 🛒 🔧  Copacabana.  
99776-1236  
**ConsertaBike** 🔧  Copacabana etc.  
97158-5627 3439-5005  
**Carioca Bikes Elétricas** 🛒 🔧 ⚙️ Copacabana.
96576-8965
Rua Santa Clara, 99 A.
**Bossa Liberdade Elétrica** 🛒 🔧 Copacabana.  
96736-9737  
Marca própria  
🔗️ bossaeletricas.com.br  
**Flex Mobi** 🛒  Ipanema / Niterói.  
97116-3388 99932-2598   
967820209  
---  
---  
**Din Bike Elétrica** 🛒 🔧 Recreio.  
99974-5876  
**Elétric Barra** 🛒 🔧 Barra da Tijuca.  
98481-0789  
2484-8489  
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
Vende Inow.  
🔗️ domusviridi.com.br  
**Nitros Bike** 🛒 🔧 ⚙️ S.J. de Meriti.  
96550 3759  
Av. Comendador Teles, 2 – Lote 02/Quadra 48, Vilar dos Teles.  
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

###### Manuteção somente mecânica - não parte elétrica

**Superbike** - Piedade - 2594-8255 / (21) 97204-6258  
**Biobike** (Engenho de Dentro e Barra)  - 96421-6334 2289-0332  
**Bike Lapa** (Centro) - 2224-0428  
**Parah Bike** - Cascadura
99022-7469 - Av. Dom Helder Câmara, 9648.



## Boas praticas

#### Acelerador de mão

Não use em em subidas. Ele injeta corrente máxima de forma instantânea; gera pico de calor. Use-o, por ex., em retas ou para arrancar do zero (até 5 km/h).

#### Motor sendo forçado - Como saber?

Ocorre quando a rotação (velocidade de giro) dele cai muito sob carga, fazendo com que a energia elétrica vire calor em vez de movimento. Verificar se há esforço pelo...
**Som do motor**: Som grave/ronco: Um ruído mais alto, grave ou um "zumbido sofrido" indica que o motor está trabalhando saturado (corrente alta, rotação baixa).
Som agudo/livre: O som ideal deve ser um silvo contínuo e suave.  
**Painel (*display*)**: Indicador de Corrente (Power/Current): Se o seu painel tiver a barra de consumo de energia (geralmente em Watts ou Amperes), ela nunca deve ficar travada no limite máximo durante toda a subida. Se estiver no topo da barra, o motor opera no limite térmico.  
**Pela marchas e pedalada**: Sinal de fadiga: Se você está em uma marcha pesada (catraca pequena), pedalando devagar e travado, o motor também está travado e superaquecendo.
Prática correta: Use a marcha mais leve (catraca grande). Suas pernas devem girar rápido e sem peso. Se a sua rotação de pedalada estiver alta e o motor acompanhar esse giro sem reduzir a velocidade abruptamente, ele não está sendo forçado  

#### Subidas íngremes

**Pedale rápido com catraca grande**: a alta cadência com a catraca maior mantém o motor com boa rotação, portanto, maior eficiência e menor aquecimento.  
**Arrancada em ladeira**: Sair do zero na subida exige pico máximo de torque e corrente elétrica.  
**Peso em excesso**: Aumenta a resistência inercial e força o sistema continuamente.  


#### Pastilhas de Freio - Economizar

Velocidade até 20 km/h economiza bastante.

#### Bateria

|Carregue quando chegar a 20%| Deixe esfriar| Acelerar gasta mais|
|:---:|:---:|:---:|
|Não deixe a bateria chegar a 0%. Coloque para carregar quando atingir cerca de 20%.| Não ligue a bateria no carregador logo após terminar as entregas. Aguarde 20 a 30 min para esfriar antes de colocar na tomada.| Acelerador consome bem mais bateria. Mesmo uma saída suave pelo acelerador consome mais energia do que iniciar o movimento pelo pedal.|





É isso.
\o/
