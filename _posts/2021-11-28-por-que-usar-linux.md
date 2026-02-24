# Por que usar linux?

Conheça o Linux: o sistema mais robusto do mercado, usado até pelo Exército.

- Linux vs. Windows
- Governo e Exército Brasileiro: caso de exemplo
- Segurança
- Quem controla o sistema? O desenvolvedor ou o usuário?
- Estabilidade
- Softwares: a variedade
- Mais pontos a considerar
- Conhecendo o Linux
- Quem usa o Linux?


Olá!

Seja Linux ou Windows... Que fatores são levados em consideração na hora de escolher um sistema operacional (SO) para <em>desktop</em>?
Custo? Desempenho? A segurança? A estabilidade? Facilidade de uso?
Neste artigo passaremos por interface gráfica, compatibilidade; bem como esses outros termos citados.

Neste tutorial buscamos deixar claro o quanto o Linux é importante para o cidadão comum. No que tange uma instituição ou empresa, considerando ser de grande porte, ele é até vital. 


## O exemplo do Exército Brasileiro

> "A adoção do sistema livre GNU/Linux está ocorrendo de forma gradual [...no Exército Brasileiro]" [AMAN, 2018]

###### Fatores considerados

São eles:

    - "reduzir despesas com aquisições de licenças,
    - depender menos de um só fornecedor,
    - restringir o crescimento do legado baseado em tecnologia proprietária,
    - possuir maior segurança, estabilidade e disponibilidade proporcionada pelo software livre,
    - desenvolvimento de conhecimento local,
    - independência tecnológica,
    - possibilidade de auditabilidade dos sistemas,
    - eliminação das mudanças periódicas que os modelos fechados impõem com a descontinuidade." [AMAN, 2018]

E motivos que levaram o governo a adotar o software livre estão no fato de se reduzir os custos com renovação de software, gerar o desenvolvimento do conhecimento na área, além de ampliar a concorrência.

> "Para o Exército Brasileiro e para o governo brasileiro, o parque computacional deveria respeitar a questão da segurança, principalmente levar em consideração os princípios básicos da segurança, que consiste na confidencialidade, integridade e disponibilidade. A confidencialidade consiste em garantir que somente pessoas autorizadas tenham acesso aqueles documentos ou informações segundo o Diretor de TI da SAEB e fundador do portal GSTI, Fernando Palma. Isso pode ser feito através de controle de acesso, autenticações e etc. Para isso, o sistema operacional utilizado não pode conter backdoor." [AMAN, 2018]


> "O Exército adotou o plano de migração para software livre e dentre as inúmeras recomendações uma delas é a utilização do Ubuntu para os desktops, pois é desenvolvido com base no Debian [uma versão de Linux mais antiga], já alcançou certo grau de maturidade e é de fácil utilização." [AMAN, 2018]

###### Linux vs. Windows: como escolher?

Linux e Windows são os principais sistemas operacionais para <em>desktops</em> e <em>notebooks</em>.
Cita-se como fatores relevantes para se escolher entre um e outro a...

> "segurança, desempenho e custo". [AMAN, 2018]

🤔 Liberdade: as referências precedem a escola.


## Empresa vs. comunidade

Linux não é empresa, é comunidade.

###### Software livre (e não proprietário)

Linux é um sistema livre, de fato, não se precisa pagar pela licença.

> "o GNU/Linux não é uma empresa, não existe uma empresa responsável ou uma estrutura física. O que existe é uma comunidade, na qual os conhecimentos são compartilhados para quem quiser." [AMAN, 2018]

Portanto, o próprio SO foi (e é) criado por diversas pessoas de forma comunitária.

Quanto ao Windows...

> "de propriedade privada, sua licença possui um valor [financeiro]". [AMAN, 2018]


###### Foco nº1: venda ou segurança?

> "[...] dentro de uma empresa, o software pode ser a única forma de entrada de capital, dessa maneira há uma pressão sobre os programadores. O software precisa ser vendido e para isso nem sempre a segurança desse software é a preocupação principal da empresa" [AMAN, 2018]



###### Windows: falta de controle do usuário

> "No Windows 10 a Microsoft, por padrão, colocou no sistema a obrigatoriedade das atualizações, porém o usuário não tem mais o poder de decidir quando vai atualizar, qual a melhor hora para atualizar, o sistema por si só atualiza e o usuário nem é consultado. O apoderamento de suas informações é feito de maneira automática, sem ao menos consultá-lo. Após coletadas, essas informações são enviadas à Microsoft e ficam armazenadas nos servidores. Observa-se a total falta de controle do usuário sobre o sistema. Não existe mais privacidade, controle sobre o sistema e segurança das informações." [AMAN, 2018]

Ou seja, o sistema operacional <Windows é um *software* com único dono: a Microsoft. Sendo ela a proprietária do sistema, só ela pode atualizá-lo.










## Segurança

###### código-fonte - segurança

Um sistema operacional, em si, é um software de computador, portanto tem um código.

✔️ Linux código-fonte-aberto  
❎ Windows código-fonte fechado  

código-fonte-aberto é algo imprescindível. Isso porque uma das formas de medir a segurança de um software é, exatamente, analisar o código-fonte _para descobrir possíveis falhas, até *backdoors* (um tipo de *malware*).

> “O código-fonte-aberto pode realmente ser analisado por qualquer programador e este é o ponto forte do ponto de vista da segurança. Se muitos programadores têm acesso ao mesmo código, a probabilidade de se ter problemas de segurança deve ser menor.” [Jansen Sena, 2009, p. 336]

Com relação à segurança do software proprietário pode-se dizer que o fato da não disponibilização do código-fonte do software, faz com que, o software seja uma caixa preta. Ou seja, não dá para averiguar se é, ou não, realmente confiável [...]. Uma das premissas da segurança diz que...

> "[a segurança] nunca deve ser baseada na obscuridade." [SENA, 2009, pag 337]

O fato de possuir código-fonte-aberto, permite que programadores do mundo todo olhem e procure por erros ou falhas e permite corrigi-las em curto espaço de tempo em relação ao sistema operacional Windows, para <em>desktops</em> e <em>notebook</em>. As chances de apresentar algum erro caem drasticamente, tornando o sistema mais seguro.

O exemplo do Debian.

> "Outro ponto que vale ressaltar é o fato do código-fonte do Debian estar disponibilizado gratuitamente para quem quiser, dessa maneira fica praticamente impossível a comunidade inserir alguma backdoor ou software malicioso no sistema, porque inúmeros programadores analisarão o código-fonte e certamente o descobrirão, se ele existir. O sistema não é uma caixa-preta, não fere os princípios da segurança e nem faz uso da segurança baseada na obscuridade." [AMAN, 2018]


###### Quantidade de malware

O Linux é responsável por uma pequena parcela dos SOs utilizados pelo usuário, a quantidade de vírus existente é pequena quando comparado ao Windows, uma vez que os cibercriminosos escolherão fazer um vírus para um sistema operacional de maior uso pelos usuários domésticos. O GNU/Linux como SO para <em>desktops</em> e <em>notebooks</em> possui vírus, no entanto, em proporção bem menor que o Windows.

**Crakers preferem fazer vírus para o Windows**:
A quantidade de usuários que utilizam o Windows é muito maior que as pessoas que adotam o sistema Linux.

Sem dúvida, os programas maliciosos são uma questão de segurança para estarmos atentos.

Debian: por se tratar de um SO livre para desktops e notebooks, podemos considerar o Debian menos vulnerável do que o sistema da Microsoft. Ele leva vantagem sobre o Windows, uma vez que este último possui grande quantidade de vírus _devido diariamente surgir novos programas maliciosos. 

###### O foco do autor: vender ou manter a segurança?

Quanto ao desenvolvedor...

> "Vale ressaltar ainda que dentro de uma empresa, o software pode ser a única forma de entrada de capital, dessa maneira há uma pressão sobre os programadores. O software precisa ser </em><em>vendido e para isso nem sempre a segurança desse software é a preocupação principal da empresa." [AMAN, 2018]

## Quem controla o sistema? Autor ou o usuário?

No Debian, assim como em outras distribuições, o usuário tem controle do sistema. O sistema está subordinado ao usuário, qualquer ação que o sistema executará, seja para instalar algum software ou atualizar o próprio Debian, o usuário deve conceder uma autorização. Já no Windows isso não ocorre.

## Estabilidade

Por ex., "<em>o [Linux] Debian está no mercado há 25 anos, logo nota-se que não é uma distribuição nova, pode-se dizer que alcançou certo nível de maturidade. Esse sistema operacional apresenta quatro versões, que são chamados de “releases”</em>."

> "Outro problema que era muito comum há 15 anos, era o fato de que o usuário tinha que procurar os drivers e instalá-lo manualmente, o sistema não reconhecia vários hardwares, era um processo complicado, apenas quem tinha um conhecimento mais avançado sabia instalar os drivers e ainda assim não era fácil. Atualmente não é mais assim, o sistema já reconhece todo o hardware do computador e os drivers já vem embutidos no sistema, de maneira que o usuário final não precisa se preocupar com isso, apenas instala o sistema e começa a usar."[AMAN, 2018]

## Softwares: a variedade

> "existem sim alguns programas que ainda não possuem uma versão alternativa para os usuários das distribuições livres, nesses casos não tem muito que fazer. Com relação aos jogos, o GNU/Linux não tem uma biblioteca variada como a do sistema Windows, mas possui sim alguns grandes nomes. Em se tratando de suítes de escritório, o GNU/Linux conta com o LibreOffice, uma alternativa frente ao MS Office, da Microsoft. O LibreOffice está em sua sexta versão e é uma excelente alternativa, compatível com todos os documentos originados do MS Office e possui todos os recursos que um usuário precisa ter. Quando falamos de editor de imagens, temos como alternativa o Gimp frente o Adobe Photoshop. O Gimp é um bom editor de imagens, tem bastante recursos, atende às necessidades de usuário normal, porém não é muito indicado para um usuário profissional. Se for analisar a parte multimídia, reprodução de áudio, vídeo, foto, gravação de disco e outras tarefas, o GNU/Linux faz o que qualquer outro sistema operacional faria, sem complicação." [AMAN, 2018]

## Mais pontos a considerar

###### Licença: grátis ou paga?

> "O GNU/Linux é disponibilizado gratuitamente. O usuário não precisa pagar por uma licença para poder usar o sistema Debian GNU/Linux. A grande diferença desse sistema é que parte dos programadores que participam do projeto são voluntários. Esses programadores fazem isso porque gostam, não há uma motivação financeira, não é uma empresa que contrata funcionários, programadores, para que esses trabalhem em cima de um sistema operacional." [AMAN, 2018]

###### Marketing

Diferente do software livre _como o Linux, onde o trabalho dos programadores é voluntário_, o software proprietário está intimamente ligado à empresa, que por natureza lida com venda e publicidade.  

> "Há a questão do marketing, se gasta com propagandas a fim de despertar o interesse do usuário." [AMAN, 2018]

###### Lentidão

> "O sistema não fica lento com o passar do tempo, tem uma rápida inicialização, bom tempo de resposta e fluidez." [AMAN, 2018]


> "De acordo com o portal Software Livre mantido pelo Governo Federal (2012), a Procuradoria-Geral do Estado da Paraíba migrou todo seu parque computacional para o software livre. Segundo o gerente Guido Giuseppe, da Sub Gerência de Tecnologia da Informação, que foi emprestado à Procuradoria-Geral do Estado da Paraíba, afirmou que “[...] alguns usuários perceberam que computadores antigos acionados pelo sistema livre funcionava mais rápido do que os que eram acionados pelo sistema não-livre, com a mesma configuração de hardware, [...]”. Mais um aspecto positivo desse sistema</em>."<em>[AMAN, 2018]


## Linux vs. Windows: resumo

<table>
<tbody>
<tr>
<td></td>
<td>GNU/Linux</td>
<td>Windows</td>
</tr>
<tr>
<td>Licença</td>
<td>👍 Não se precisa pagar pela licença.</td>
<td>👎  possui um valor</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

## Conhecendo o Linux

Para saber sobre sistemas operacionais Linux, versões Linux, estrutura do Linux, veja Linux.

## Quem usa o Linux?

Os que detém conhecimento humano usam Linux _em suma, militares, Estados, corporações, universidades. No geral, mais de 95% das pessoas não utilizam Linux.
Curiosamente, embora o Ubuntu (que é uma versão de Linux) seja utilizado até em robôs no espaço, ele foi criado para uso doméstico, para o usuário comum.
Veja [Quem usa o Linux](/quem-usa-linux).

É isso!  
Grande abraço.  
\o/  

<!-- 
	pt.wikipedia.org/wiki/Red_Hat_Enterprise_Linux
	pt.wikipedia.org/wiki/Fedora_Linux
	en.wikipedia.org/wiki/Comparison_of_Linux_distributions
	en.wikipedia.org/wiki/List_of_Linux_distributions
	pt.wikipedia.org/wiki/Debian
	www.diolinux.com.br/2015/10/30-grandes-empresas-que-usam-linux.html
	youtu.be/j04fxjx-WCI?list=PLucm8g_ezqNoG9vpzNAw4BMtOpx7zxUMD
	youtu.be/b2V-c1HD7wA?list=PLucm8g_ezqNoG9vpzNAw4BMtOpx7zxUMD
	youtu.be/8T4kg00jxEE?list=PLucm8g_ezqNoG9vpzNAw4BMtOpx7zxUMD
	youtu.be/4aNrIdE-Svw?list=PLucm8g_ezqNoG9vpzNAw4BMtOpx7zxUMD
	youtu.be/7LH5bsL9_Fo?list=PLucm8g_ezqNoG9vpzNAw4BMtOpx7zxUMD
	youtu.be/LmUO75d9xLI?list=PLucm8g_ezqNpuiqiZx6jC5KkEzq44SM-P
	youtu.be/-y-hvELIY8I?list=PLucm8g_ezqNoG9vpzNAw4BMtOpx7zxUMD
	youtu.be/9bI0GWuUFhw?list=PLucm8g_ezqNoG9vpzNAw4BMtOpx7zxUMD
	youtu.be/2hhrHcgvUq4?list=PLucm8g_ezqNoG9vpzNAw4BMtOpx7zxUMD
	youtu.be/EV1If-0PW9g?list=PLucm8g_ezqNoG9vpzNAw4BMtOpx7zxUMD
	youtu.be/D1cZrPU0DRg?list=PLucm8g_ezqNoG9vpzNAw4BMtOpx7zxUMD
	youtu.be/w2wt_37tHCI?list=PLucm8g_ezqNoG9vpzNAw4BMtOpx7zxUMD
	youtu.be/08uzcYiGPaI?list=PLucm8g_ezqNo4XvlwUTIJf7c4EbaNPiWE
http://www.educadores.diaadia.pr.gov.br/arquivos/File/2010/artigos_teses/Pedagogia/migracao_do_software_proprietario.pdf
AMAN, 2018:
https://bdex.eb.mil.br/jspui/bitstream/123456789/4569/1/TCC%20Cad%205271%20Castro%20-%20CM%203.pdf
 -->

[oes: tit !]
