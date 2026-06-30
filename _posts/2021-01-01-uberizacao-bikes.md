# Uberização - bikes

Tutorial.





## As marcas

A importância deles reside no pós- venda, garantia, peças reposição, seg incluso, assistência do vendedor.  

**Aprisionamento tecnológico** <sup>vendor lock-in</sup>: termo da economia ou MKT.  

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fomeudiadia.com.br%2Fwp-content%2Fuploads%2F2022%2F04%2FChico-Bento-1.png%3Fresize%3D760%252C995%26ssl%3D1&f=1&nofb=1&ipt=453184629033604bf771302b523be674b95f2eddbe27340d1aa202579e9d03d9" width="120" />É a estratégia em que o preço é uma isca, e uma vez "pescado", o cliente dá lucro pela dependência de ter o produto funcionando perfeitamente.  

Sem aprisionamento temos peças e eletrônica genéricas, baratas e universais; e com aprisionamento sistemas que exigem peças originais e autorizadas, ou seja, exclusivas ou com dependência de autorizada.

|||
|:---:|:---:|
|**Sem lock-in**| **Baixo lock-in**|
|Sousa Bike e Duos|Caloi|
||GTSM1, Bikelete, Bike Fast|
|**Médio lock-in**| **Alto lock-in**|
|Atrio (Multilaser) | Sense Bee|
|Ouxi, iNow, Konnan, Giorrad, Colorway, Move Ways, Starmega| Two Dogs, StreetGo, Rava (TSW)|

Médio temos formato de bateria e plugs específicos; peças só via importação direta/Aliexpress
Baixo temos eletrônica simples, aceita controladores e peças universais de internet.

Assim, marcas com um bom pos venda, inclusive manutencao, pode ocorrer simplesmente porque *vendor lock-in* financia e centraliza a rede de atendimento.


***Woie**.  
*<del>**Dafra**</del>.  
***Bee**: Cara, custa acima de 10 mil, mas usa Bafang em alguns modelos.  

 



#### Exemplo - 20x4.0

**Hierarquia de marcas** (por Gemini):  

**1**: StreetGo (Oggi) > Two Dogs > GTSM1 e Bikelete.  
**2**: Konnan / Inow / Move Ways / Starmega / Bike Fast (Empate Técnico).  
**3**: Ouxi: Ponto fraco? Falta uma marca nacional que responda legalmente pela garantia e estoque de componentes no Brasil.  

🇧🇷 Move Ways (750W e 1000W). Escritório com CNPJ, que importa e não fabrica nada.
🇧🇷 Starmega (750W). Idem.

Outras marcas medianas: Giorrad, Colorway e Bikelete.  

**Hierarquia de marcas** (segundo GPT):  

**1**: Rava (TSW) > GTSM1 > Two Dogs > StreetGo.  
**2**: Ouxi / iNow > Konnan / Giorrad.  
**3**: Bikelete, Colorway, Move Ways: Mais loteria; reposição e garantia variam bastante.  
**4**: Starmega / Bike Fast: Evitar para uso profissional; falta de suporte e disponibilidade de peças.  


👉️ bikelete.com  


⚠️ Ouxi e Inow são as mais difundidas no Brasil.  
👉️ O que domina não é marca e sim peça fácil (controladora, bateria, motor), loja que resolve rápido, bike que aguenta tranco diário.  


#### OEM - Fabricante Original de Equipamentos

Uma empresa "x" fabrica mil produtos. Fulando compra 400, Beltrano 600; cada um põe sua marca. Ou seja, a fabrica em si não se envolve com marca ou distribição.  

Ouxi, iNow, Colorway, Move Ways dependem muito do vendedor para garantia, por serem marcas ligadas a produtos OEM, 
Ouxi, porém, é bem mais difundida, daí com facilidade de encontrar peças.





## Componentes

Peças: tão importante quanto marca.

- Motor
- Controladora e *display*
- Bateria
- Quadro
- Roda
- Outros


#### Motor

Bafang é o "queridinho" das bikes.  

**Woie** 🇧🇷: Bafang (tanto cubo traseiro de 750W quanto motores centrais Mid-Drive sob encomenda).  
**Two Dogs** 🇧🇷: chegou a usar.  
**Trek** 🇺🇸: Modelos premium utilitam Bafang.  
**Caloi** <del>🇧🇷</del>🇳🇱(Bafang)  

MXUS é outra marca de credibilidade.

#### Controladora e *display*

**Marcas boas**:  

|||||
|:---:|:---:|:---:|:---:|
|KT|Sabvoton|Votol|Bafang|

⚠️ Se vendedor não especifica, assume o risco de acharmos que é padrão genérico.  

Para garantir a compatibilidade em e-bikes 20x4.0 de 750W, note:

|Tensão (Voltagem)|Potência e Corrente| Tipo de Motor (Sensores Hall)|
|:---:|:---:|:---:|
|Se bateria e motor são 48V, controladora precisa ser de 48V.|Se motor 750W, controladora deve suportar essa potência e fornecer a corrente correta (geralmente entre 20A e 25A).| Controladora precisa corresponder ao tipo de motor. Motores de 750W comuns usam 3 cabos de fase grossos e 5 fios finos dos sensores Hall. A controladora deve ter essas mesmas conexões.|


**Protocolo de comunicação**: funciona entre o Display (painel) e a Controladora — não entre a controladora e o motor _este recebe apenas energia bruta, pulsos elétricos brutos (energia trifásica) e envia sinais analógicos de rotação (sensores Hall).


|Protocolo Ouxi|Protocolo GTSM1|
|:---:|:---:|
|UART digital codificado (exige display e controladora idênticos para evitar erro de sistema).| UART genérico ou fiação analógica simples.



#### Bateria
Capacidade, características técnicas, ex. 48V 20Ah.  

**Relevância / qualidade**  
**1**: Samsung SDI, LG Energy Solution, Panasonic.  
**2**: Murata (ex-Sony), CATL.  
**3**: EVE Energy, BYD, Lishen, BAK.  
Demais são as genéricas ou sem identificação.  


#### Quadro
**Amortecimento**: Se tem, bike mais pesada, então gasta-se bateria a mais.  
**Aço carbono**: barato, resistente a pancadas, fácil soldar. 👎 Pesado e enferruja se a pintura danificar.  
**Alumínio** 2 ou 4 kg mais leve, não oxida. 👎 Caro, vibra mais, reparação difícil.  
**Alumínio 6061**: tratamento que oferece melhor qualidade.
**Cromoly** (tipo de aço): leve, durável, absorve vibrações.👎 Caro, raro em bikes 20x4.0.  

#### Roda

**Tamanhos**...  


**10 ou 12 pol** (Scooter): Fuja! É péssimo para buracos.  
**26**: 26 é a típica do Itau. Motor tem potência 350W e de ótima qualidade, suporta o tranco do dia a dia. Porém, para as bikes comuns vendidas em loja são motores de marcas secundárias, ou ate sem marca em boa medida.  
**29**: roda nesse tamanho força o motor.  
**20x4.0**: Pneu mais largo semelhante a moto, favorece estabilidade e absorção de buracos. Há um consumo um pouco mais elevado da bateria. Se tornando comuns no sul do Brasil, destacam-se por ter motor mais potente permitindo subir ruas bem inclinadas.  
Bike assim compete diretamente com as motocicletas nas entregas.

**20x4.0: Hierarquia da qualidade**:  
**1**: Pirelli (Angel DT Urban) > Kenda (Kraze, Flame, Gigas) e CST (Big Boat, BFT Urban).  
**2**: Chao Yang (Sand Storm Urban, Big Daddy Street) e Innova (Caracal, Street)  
*CST: Fabricado pela Cheng Shin Tire (Maxxis).  
**3**: DSI, Inow, Movi, genéricos de plataformas de e-commerce - Mais nylon do que borracha.  


**Street / Semi-Slick, Slick, Cravo**: No trabalho opte pelo tipo de pneu Street / Semi-Slick.  

|Slick| Street / Semi-Slick|
|:---:|:---:|
|projetado para pistas perfeitas| economiza a bateria da sua e-bike|
|água no canto da via: ele não "empurra" para fora| sulcos (frisos) no pneu agem como canais de escoamento.|

⚠️ Pneu: no trabalho, asfalto, evite cravos. Velocidade < 20 km/h: caso a considerar possível uso. 



#### Componentes / outros

**Freio hidráulico**: Melhor que mecânico. Vital em bike de +40 kg. Recomendando na velocidade acima de 20 km/h.  
**acabamento**.  
**Peso da bike - influenciará**: Material do quadro. Sem amortecimento (na frente e atrás) a bike pode ter 30 kg, e com chegar aos 38 kg em média. Peso do motor (750 é cerca de 1 kg a menos que o 1000).  
**Peso suportado**: No geral, 120 kg é o que elas suportam, bikes comuns aro 29 também. Algumas vão além disso, o que é bom para levar comida de animais ou bebida.  






## Bikes elétricas - 20x4.0


#### ➰ Suspensão dupla


<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.tcdn.com.br%2Fimg%2Fimg_prod%2F476585%2Fbicicleta_eltrica_rava_chopper_aro_20_freio_hidr_2_20260122180950_1cae0590cbbd.jpeg&f=1&nofb=1&ipt=0e4936299580dd11fd655c31e8c364dc8c4a16cf78dd3013fd0f4849d9d7ecd8" width="120" />Rava (TSW) E-Chopper.  
🔋 750W 48V 15Ah remo.  
🔲 Alumínio 6061  
Freio hid.  




<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5035317820320844689_x.jpg" width="120" />Konnan 🇧🇷 Winner.  
Típica importadora e distribuidora.  
🔋 750w 48V 18,2Ah remo.  
VelMax 32 peso 120  
Auto. 50 km com assis. pedal.  
Garantia fab. 12 meses.  

💰6500 ML  

Konnan Thunder E-Titan G60.  
🔋 1000w 48v 15Ah  
Freio hidraulico  
Projetada para trab  


<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5035330460409596920_x.jpg" width="120" />Inow V20 Brake  
🔋 1000w 48v 15 mAh, removível.  
VelMax 45km/h 60km  
Alarme e chave  
Peso 200 kg  
Freio hid.  
💰 8900 ML  
👉️ Outro anuncio no ML tinha espececificações diferente, por ex, 750w e peso 150 kg.  

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5033078660595911672_x.jpg" width="120" />Inow 🇧🇷 V20 Pro/Brake Pro.  
🔋 750w 48v 15Ah  
🔋 1000w modelo recente  
VelMax 32  


GTSM1 V8X 2.0


#### ➰ Suspensão - frente ou nenhuma  


<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_738321-MLB93728633818_102025-O.webp&f=1&nofb=1&ipt=d9f6f9dabae8ced570ecb9d97552b7637ef19dd02ddfac0fef9f186cc79352cf" width="120" />Rava E-Spirit
🔋 750W 48V 15Ah remo? 80Nm
🔲 Aço carbono
➰ Suspensão: Dianteira

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5037569620134530000_x.jpg" width="120" />GTSM1 V8 max.  
🔋 750w  
➰ Suspensão - frente.  

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5037569620134529998_x.jpg" width="120" />GTSM1 GTS V8D S7.  
🔋 750W 48V Lítio 15Ah remo.❤️  
VelMax 32 km/h  
Auto. 70 a 80 km ped. assis.  
Freio hid.  
🔲 Aço carbono  
➰ Suspensão - frente.  
🛞 Chao Yang  
💰 5250 site Gtsm1 ❤️  
🔗 lojagtsm1.com.br/bicicletas/eletrica/bicicleta-eletrica-gts-v8d-750w-aro-20-bateria-de-litio-48v-s7  


<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5035317820320844685_x.jpg" width="120" />StreetGo S12 🇧🇷 (Oggi).  
A marca opera no modelo de distribuição, ou seja, vende seus produtos através de lojas de bicicletas e revendas autorizadas no Brasil (incluindo lojas parceiras físicas e virtuais como a Dataro Sports e a GTSM1).  
🔋 750W 48V 15Ah remo.  
🔋 Marca Samsung ou LG ❤️   
80Nm ❤️  
VelMax 32  
Freio hid. ❤️  
🔲 Aluminio (mais leve)  
➰ Suspensão - frente.   
Seguro grátis 12 meses. ❤️❤️  
💰7400 ML  
**Foco**: Custo-Benefício.  
Componentes mecânicos de marcas conhecidas (como Shimano), o que facilita manutenção no dia a dia.  
**Outros Modelos**:  
S14, S17: mais caro.  
🏆 Modelos Premium - Bafang  
StreetGo S17 / S27 / S40  
🔗 Gtsm1.com.br  


<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5033078660595912266_x.jpg" width="120" />Ouxi 🇨🇳 V8S.  
🔋 1000w 48v  
➰ Suspensão - frente (V8 Pro ou H9 dupla).   

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5033078660595911691_x.jpg" width="120" />Two Dogs 🇧🇷 Bigfoot T1.  
🔋 750w 48V  
🔋 removível, proteção água.  
Alarme e dois lugares  
Freio mec.  
Peso 160kg ❤️  
Manopla parece baixa 😡  
➰ Suspensão: não.   

<img src="https://joesynth.wordpress.com/wp-content/uploads/2026/06/photo_5033078660595911675_x.jpg" width="120" />GTSM1 🇧🇷 V8S.  
🔋 750w 48v 15Ah  
65Nm VelMax 32  
🛞 CST  
Freio mec.  
🔲 Aço  
➰ Suspensão frente (V8 e V8S 2.0 idem).   

**V8**  
Idem  
🔲 AçoCroCar. 👍  

**V8, V8S, V8F, V8max**:  
Modelos diferentes.  
Confira especificações.  
Material quadro, altura banco, 1 ou 2 bat., cap. bat., suspensão.  

GTS V8D S7 (750w)  
Cuidado ⚠️ Banco baixo jovens  
🔲 Aço carbono  
Freio mecánico  
➰ Suspensão - frente.   
🔗 lojagtsm1.com.br  


**GTSM1**:   
Foco em Custo-Benefício (tipo StreetGo S12).  

**Amyet S8-S** (Bike Gaucho)  
2x1000 48V 25Ah lítio remo.  
80Nm, motor marca generica.  
Vedada, certificação IP54 contra poeira e respingos.  
Auto. Modo assiti. 65 a 85 km  
Peso supor. 150 kg




## Venda Lojas 20x4.0

Lojas especializadas em e-bike 20x4.0 (mais seguro)

Não são “rede oficial Ouxi, Inow”, mas trabalham com OEMs (controladora, motor, display, acelerador, bateria etc).
🛒 Loja que vende, Ouxi por exemplo.  

**(Centro)**:  
Rezende Bike – muito forte em e-bike genérica e OUXI. 🛒 Vende Ouxi. Atendimento diretamente no balcão da loja física.  
**Copacabana etc**:  
Bee Elétricas – peças, bateria, manutenção de fat bikes. 🛒 4003-4131 / (21) 97626-8617 (Unidade Botafogo).  
**Outras regiões**:  
Din Bike Elétrica - Recreio – fat bike e manutenção OEM. 🛒 99974-5876  

Nossa Bike: Rocha Miranda - 98015-4606  
Bike Motor: Irajá. 97033-6644  
RM Bike Motorizada: Colégio - 98531-5444  
Superbike - Piedade - 2594-8255 / (21) 97204-6258  


## Manutenção - peças

**(Centro)**:  
Morais Bike – atende bastante bike elétrica de entrega. 🛒 97302-7143  

**Copacabana etc**:  
Rota E-Bike  
ConsertaBike  
Flex Mobi (Ipanema / Niterói)  
Rota E-Bike (Copacabana) - 99776-1236  
ConsertaBike (Copacabana) - 97158-5627 3439-5005  
Flex Mobi (Ipanema / Niterói) - 97116-3388 99932-2598  

**Outras regiões**:  
Inovabike (Irajá) - 986650076  

**Manuteção somente mecânica**: não parte elétrica.  
Biobike (Engenho de Dentro e Barra)  - 96421-6334 2289-0332  
Bike Lapa (Centro) - 2224-0428  



## Boas praticas

👉️ **Acelerador de mão** - Nunca use em em subidas: Ele injeta corrente máxima instantânea, gera pico de calor. Use-o, por ex., em retas ou para arrancar do zero (até 5 km/h).
👉️ **Motor sendo forçado - Como saber?** Ocorre quando a rotação (velocidade de giro) dele cai muito sob carga, fazendo com que a energia elétrica vire calor em vez de movimento. Verificar se há esforço?
- Pelas Marchas e Pedalada. Sinal de fadiga: Se você está em uma marcha pesada (catraca pequena), pedalando devagar e travado, o motor também está travado e superaquecendo.
Prática correta: Use a marcha mais leve (catraca grande). Suas pernas devem girar rápido e sem peso. Se a sua rotação de pedalada estiver alta e o motor acompanhar esse giro sem reduzir a velocidade abruptamente, ele não está sendo forçado.
- Pelo Som do Motor
Som grave/ronco: Um ruído mais alto, grave ou um "zumbido sofrido" indica que o motor está trabalhando saturado (corrente alta, rotação baixa).
Som agudo/livre: O som ideal deve ser um silvo contínuo e suave.
- Pelo Painel (Display)
Indicador de Corrente (Power/Current): Se o seu painel tiver a barra de consumo de energia (geralmente em Watts ou Amperes), ela nunca deve ficar travada no limite máximo durante toda a subida. Se estiver no topo da barra, o motor opera no limite térmico.

Pastilhas de Freio - manter uma velocidade moderada de 20 km/h economiza bastante.

#### Bateria

**Acelerador**: consome bem mais a bateria. Mesmo uma saída suave pelo acelerador consome mais energia do que iniciar o movimento pelo pedal.  
**Evite Zerar**: Não deixe a bateria chegar a 0%. Coloque para carregar quando atingir cerca de 20%.  
**Esfriamento**: Não ligue a bateria no carregador logo após terminar as entregas. Aguarde 20 a 30 min para esfriar antes de colocar na tomada.  

#### Subidas íngremes

Pedalar rápido (Catraca grande): Pedalar rápido (alta cadência) usando a catraca maior mantém o motor em alta rotação, que é a faixa de maior eficiência e menor aquecimento.  
Arrancada em ladeiras: Sair do zero na subida exige pico máximo de torque e corrente elétrica.  
Excesso de peso total: Aumenta a resistência inercial e força o sistema continuamente.  


É isso.
\o/
