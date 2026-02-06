


Segurança da informação

Tutorial.

Olá!

Abaixo, um breve tutorial passando pelos seguintes temas:
<ul>
 	<li>O Que É Segurança da Informação?</li>
 	<li>Termos Comuns.</li>
 	<li>Ferramentas de Segurança da Informação.</li>
 	<li>Princípios da Segurança.</li>
 	<li>Privacidade e Legalidade.</li>
 	<li>Criptografia (codificação).</li>
 	<li>Assinatura Digital.</li>
 	<li>Certificação Digital.</li>
 	<li>Certificado Digital.</li>
 	<li>Características.</li>
 	<li>fingerprint.</li>
</ul>
<h3>O que é segurança da informação?</h3>
<blockquote>É a área do conhecimento que protege os ativos de informação contra acessos não autorizados, alterações indevidas ou, ainda, a sua indisponibilidade. (Sêmola)</blockquote>
<h3>Termos comuns</h3>
<strong>Ameaça</strong> Tudo aquilo que vai contra os princípios da segurança.
<strong>Hacker</strong> Pessoa que busca falhas de segurança e ajuda a empresa a resolvê-las.
<strong>Cracker</strong> Um "<em>hacker</em> do mal", portanto utiliza de seus conhecimentos para causar danos. Pode acessar nosso computador para furtar dados.

Outro termo é LGPD (Lei Geral de Proteção de Dados Pessoais).

Vide <a href="https://joesynth.wordpress.com/2021/12/27/js-y/"><em>hacker</em> e <em>cracker</em></a>.
<h3>Ferramentas de segurança da informação</h3>
- <a href="https://joesynth.wordpress.com/2021/12/17/firewall-ferramentas/">Firewall</a>.
- <a href="https://joesynth.wordpress.com/2021/11/28/software-antivirus/">Antivírus</a>.
- Softwares de monitoramento de rede.
- <em><a href="https://joesynth.wordpress.com/2021/12/12/backup/">Backup</a></em> inteligente (incluso nuvem).
- Controle de acesso.
- Criptografia e protocolos de segurança.
- Treinamentos de segurança (equipe, funcionários).
<h3>Princípios da segurança</h3>
Confidencialidade, integridade, disponibilidade, autenticidade.

Características, conceitos.
<h6>Confidencialidade /Sigilo</h6>
Garantia da informação ser lida ou acessada só por pessoas autorizadas, como por exemplo, num banco.
- Recurso: Criptografia.
<h6>Integridade / Íntegra</h6>
Informação sai da origem e chega no destino sem ser alterada.
- Recurso: Assinatura digital.
- Exemplo: texto enviado chega ao destino sem ser modificado.
<h6>Disponibilidade / Disponível</h6>
Garantia da informação estar sempre disponível para o usuário autorizado buscar quando necessitar.
- Exemplo: Banco faz <em>backup</em> sempre. A ideia da disponibilidade está sendo respeitada.
- Exemplo: Site fora do ar devido ataque. O princípio de disponibilidade foi afetado.
<h6>Autenticidade / Identidade</h6>
Garantia de que a informação seja autentica; documentos autênticos, verdadeiros. Ou seja, esse princípio garante que a informação provém de
quem realmente diz ser.
- Recurso: Login e senha, assinatura digital.
- Exemplo: pessoa se passa por outra; assim, a autenticidade foi ferida.
<h3>Privacidade e Legalidade</h3>
<h6>Privacidade</h6>
Controlar e restrigir acesso ao legítimo proprietário da informação. Algo relacionado a Confidencialidade.
<h6>Legalidade</h6>
Estar em harmonia com as normas e leis de um estado, país.
<h3>Criptografia (codificação)</h3>
<h6>Garante...</h6>
A confidencialidade (sigilo) na informação (dados).
<h6>Uso...</h6>
Usado para garantir a Confidencialidade.
<h6>Codifica...</h6>
Ela codifica ou embaralha os dados para, caso alguém vêr ou interceptar, não se entender. Depois há a decriptação.
<h6>Simétrica</h6>
Usa-se a mesma chave, tanto para criptografar como descriptografar.
- Chave Secreta: realiza a criptografia efetiva, daí o dado é enviado, e o destinatário usa a mesma chave secreta para decodificar.
- Algoritmo DES, 3DES, AES, RC, IDEA.
<h6>Assimétrica</h6>
Usa-se chaves diferentes, onde uma criptografa e outra decodifica, fazendo um par de chaves. São elas:
- Chave Pública: criptografa. Pode ser conhecida por diversas pessoas.
- Chave Privada: decodifica. Guardada daquela única pessoa.
- Exemplo: "A" tem um par de chaves. "B" envia mensagem pra "A", porém antes, ele usa a chave pública de "A", ou seja, ele usa a chave do destinatário para criptograr. "A" ao receber, usa a chave privada para decodificar.
- Algoritmo RSA, ECDSA.
<h6>Algoritmo de Hash</h6>
Resumo: MD5, SHA. Usados em métodos específicos.
<h3>Assinatura Digital</h3>
<h6>Garante...</h6>
- Autenticidade (a pessoa que assina é a própria, é quem diz ser).
- Integridade (a assinatura é referene a tal documento, mensagem, transação).
- Não repúdio (vide Não-repúdio).
<h6>O Processo</h6>
- "A" envia mensagem assinada digitalmente pra "B":
- Na unidade certificadora, "A" terá um certificado digital com nome dele.
- Surge duas chaves, ambas do remetente (no caso, "A").
- Chave privada (de "A"): é usada para assinar digitalmente.
- Chave publica (de "A"): verifica a integridade, se a mensagem é realmente de "A".
<h6>Não-repúdio (Irretratabilidade)</h6>
- Garante autenticidade e integridade.
- ICP Brasil: é oficial e dá validade jurídica. Assim, futuramente a pessoa que
assinou não tem como dizer que não foi ela, pois o meio jurídico não concordará. Ou seja, uma vez assinado, depois não poderá negar perante o meio jurídico.
- Irretratabilidade: pessoa (ou entidade) não pode negar a autoria da informação.
<h3>Certificação Digital</h3>
● Identidade no mundo virtual.
● Pode-se criptografar documentos, assinar digitalmente documentos.
● Permite a identificação segura do autor de uma mensagem ou transação feita em meios eletrônicos.
● CPF ou CNPJ digital (e-CPF, e-CNPJ).
● AC (Autoridade Certificadora): é gerado e assinado por uma terceira parte confiável.
● Associa uma entidade (pessoa, processo, servidor) a um par de chaves criptográficas.
<h3>Certificado Digital</h3>
- Permite desenvolver o processo de criptografia.
- Pode-se tanto criptografar como assinar digitalmente mensagens, documentos, transações.
<h6>Informações Principais</h6>
- Chave pública do titular: para as pessoas poderem verificar se a assinatura é de fulano.
- Dados do titular: nome, email...
- Período de validade.
- Nome da Autoridade Certificadora, assinatura desta AC.
- Número de série.
<h6>Tipos de certificados de assinatura digital</h6>
- A1, A2, A3, A4: nível de segurança. A4 é o maior.
- S1, S2, S3, S4 (certificados de sigilo): este padrão tem criptografia, sigilo.
- T3, T4 (certificados de carimbo do tempo).
<h6>Armazenamento, midia</h6>
A1, S1: arquivo;
A2, S2, A3, S3, A4, S4: <em>smart card</em> ou <em>token</em>.
<h6>Autoassinado</h6>
- Dono e emissor são os mesmos.
- CGI e IETF: organizações referentes ao tema.
<h6>EV SSL</h6>
- Certificado de validação avançada.
- Certificado de alta confiança.
- Procedimentos de validação mais rigorosos para as empresas.
- É necessário CNPJ, etc.
- Site com barra verde e HTTPS. Clicando aparece nome da empresa que emitiu.
<h6>ICP Brasil (Infraestrutura de Chaves Públicas)</h6>
- Processo oficial de certificação digital no Brasil.
- Usado pra assinar digitalmente documentos, mensagens, transações.
- ITI: Autoridade certificadora raiz. (iti.gov.com.br)
- AR (Autoridade de registro): verifica se tal pessoa é ela mesma.
- AC (Autoridade Certificadora): gera o certificado.
- ACT (Autoridade Certificadora do Tempo): diz que o documento fora gerado em tal data.
<h3>Características</h3>
(Conceitos)

Mecanismos de Autenticação.
<h6>Aquilo que Você É (Informações biométricas)</h6>
● Impressão digital. Quando num sistema você tem que colocar o dedo, por ex.
● Palma da sua mão, sua voz ou olho.
<h6>Aquilo que Você Possui</h6>
● Cartão, <em>token</em>.

⚠️ <em>Token</em>: recurso eletrônico gerador de senhas, temporária por exemplo.
Na análise léxica, em computação, na data 22/11/1977, por ex., as duas barras são <em>tokens</em>. Dividem a <a href="https://joesynth.wordpress.com/2021/11/27/nocoes-de-programacao/"><em>string</em></a> em três partes, que são analisadas separadamente.

<strong>Aquilo que Você Sabe</strong>
● Perguntas de segurança, senha.
<h3>fingerprint</h3>
Ou impressão digital. Quanto a essa parte deixamos abaixo alguns <em>links</em>.
<pre>https://en.wikipedia.org/wiki/Device_fingerprint
https://en.wikipedia.org/wiki/Digital_fingerprint
https://en.wikipedia.org/wiki/Category:Fingerprinting_algorithms
https://en.wikipedia.org/wiki/Public_key_fingerprint
https://en.wikipedia.org/wiki/Fingerprint_scanner
https://en.wikipedia.org/wiki/Digital_video_fingerprinting
https://en.wikipedia.org/wiki/Fingerprint_(computing)
https://blog.mozilla.org/firefox/how-to-block-fingerprinting-with-firefox/
</pre>
Então é isso!
Grande abraço.
\o_

<!-- 
https://bdex.eb.mil.br/jspui/bitstream/123456789/7110/3/TCC_CFO_Alegretti_textuais.pdf
https://bdex.eb.mil.br/jspui/bitstream/123456789/5382/1/Artigo%20Cienti%CC%81fico%20Bruno%20%C3%8Dgaro%20esao.pdf
 -->

<hr />

<img class="alignnone size-full wp-image-19277" src="https://joesynth.files.wordpress.com/2021/10/aprenda_programacao.png" alt="Aprenda Programação - HTML - JS - CSS" width="640" height="360" />

Veja também:
○ <a href="https://joesynth.wordpress.com/curso-sintese-sonora/">Curso Síntese Sonora Ilustrada</a>.
[oes: tit !]