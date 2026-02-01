# Software livre e software proprietário

Tutorial vital para alunos, concurseiros e todo cidadão. _Software_ quanto ao que de fato é livre; a aquisição, tipos de licença...  
  
  
Olá!  
<p>Este é um guia essencial para estudantes, concurseiros e demais pessoas. Esperamos que cumpra o seu papel sendo útil na prática.</p>
<p>Vamos passar pelos principais termos no que tange um soft quanto a sua aquisição e o seu código. E de cara já lembramos!</p>
<blockquote>
<p>Devemos ficar cientes da importância do <em>Software</em> Livre.</p>
</blockquote>
<ul>
<li><strong>Introdução</strong> <span class="Y2IQFc" lang="pt">◼</span> Como é feito um programa? <span class="Y2IQFc" lang="pt">◼</span> Software Livre &amp; Software Proprietário <span class="Y2IQFc" lang="pt">◼</span> Freeware <span class="Y2IQFc" lang="pt">◼</span> Free software (software livre)</li>
<li><strong>Software proprietário</strong>.</li>
<li><strong>Licença de software</strong>.</li>
<li><strong>Open Source e Closed Source</strong>.</li>
<li><strong>FOSS</strong>.</li>
<li><strong>FOSS vs CSPS</strong>.</li>
<li><strong>Resumo, comparações e afins</strong>.</li>
<li><strong>Licenças e afins</strong>...</li>
<li><strong>Organizações</strong>.</li>
<li><strong>Dicas e links</strong>.</li>
<li><strong>Um pouco de história</strong>.</li>
</ul>
<h3>Introdução</h3>
<pre><span class="Y2IQFc" lang="pt">  Legenda e Minidicionário
💰️ dinheiro, preço...
📜️ licença
🛠️ código, código-fonte.
🔗️ link.
⌛️ ano de criação, época.
💾️ exemplo de software.

</span></pre>
<h6>Como é feito um programa?</h6>
<p><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Illustrated_recipes%3B_%27Minted_Pineapple%27%2C_%27Quick_Tomato_Mold%27_Wellcome_L0072307.jpg" width="100" /><strong>✍️ A receita</strong>:<br />É uma série de passos para realizar uma tarefa. Uma receita de comida (foto) tem as instruções que formam a própria comida. Fazer uma receita para resolver um problema é outro exemplo.<br />Você mesmo pode criar uma tendo uma simples folha de papel e escrevendo os ingredientes, passos a seguir, comentários.</p>
<p><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/C_Hello_World_Program.png/402px-C_Hello_World_Program.png" width="140" /></p>
<p><span class="Y2IQFc" lang="pt"><strong>📝️ Código-fonte</strong>:<br />Instruções que formam o programa. Equivale a receita de comida, mas no lugar da folha de papel (para escrever) usa-se o <a href="https://joesynth.wordpress.com/2021/11/28/editor-de-codigo-fonte/">editor de textos</a> (foto). E enquanto uma receita de comida é escrita no nosso idioma, o português, o código-fonte é escrito em uma <a href="https://joesynth.wordpress.com/2021/12/27/linguagens-resumo/">linguagem de programação</a> (coisas como C, JavaScript....).</span></p>
<p><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Binary_executable_file2.png" width="120" /><strong>Programa Executável</strong>: código que pode ser executado pelo sistema operacional. Na prática, do código-fonte o <a href="https://joesynth.wordpress.com/2021/05/26/profissionais-de-informatica/">programador</a> cria o programa executável (.exe) _este sim, tem linguagem de máquina.</p>
<p><img class="alignleft" src="https://t1.uc.ltmcdn.com/pt/posts/6/8/2/como_fazer_limonada_286_600.jpg" width="80" height="88" /> <strong>Quem é o dono da receita da limonada?</strong> Ninguém! Afinal, qualquer pessoa pode pegar limões, misturar com água e açúcar. E churrasco? Não dá no pasto! É outro caso onde os ingredientes e a receita está acessível a todos.</p>
<p><strong>Posso ter minha versão de limonada?</strong> Óbvio! Qualquer um poderia, por exemplo, dar um toque pessoal com açúcar mascavo, bater no liquidificador etc.</p>
<p>Você já parou para pensar que a maioria absoluta do conhecimento humano é público? Ninguém tem a 'patente' da limoda, churrasco, pipa... ligação de fios etc. Isso é a evolução da sabedoria antiga que passa por mecânica, matemática, lógica... Porém, se uma empresa pode criar uma marca de 'suco de limão', também pode criar uma marca de <em>software</em>.</p>
<p><strong>Onde encontrar a receita?</strong> Fazer uma limonada, churrasco e mesmo ligar fios num interruptor ou plugue, são coisas que mesmo que não saibamos fazer, podemos aprender perguntando a um amigo, lendo num livro, vendo num <em>blog</em> etc; e assim saber a 'receita'. Com um <em>software</em> é semelhante, a 'receita' (o código-fonte) pode estar disponível, dependendo do tipo de software. Abaixo dois casos, ambos sistemas operacionais:</p>
<table>
<tbody>
<tr>
<td><strong><img class="alignleft" src="https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg" width="40" />Ubuntu</strong>:</td>
<td><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png" width="40" /><strong>Windows</strong></td>
</tr>
<tr>
<td><span class="Y2IQFc" lang="pt">◼</span> é um software do tipo Linux; público.<br /><span class="Y2IQFc" lang="pt">◼</span> é um <strong><em>software</em> livre</strong>; <br /><span class="Y2IQFc" lang="pt">◼</span> qualquer pessoa pode ter acesso ao seu código-fonte.<br /><span class="Y2IQFc" lang="pt">◼</span> a 'receita' está <span class="Y2IQFc" lang="pt">disponível</span> na Web.</td>
<td><span class="Y2IQFc" lang="pt">◼</span> é um produto da marca Microsoft.<br /><span class="Y2IQFc" lang="pt">◼</span> é um <strong>software proprietário</strong> _privado, particular.<br /><span class="Y2IQFc" lang="pt">◼ A 'receita', seu código-fonte, não está disponível.</span></td>
</tr>
</tbody>
</table>
<pre>A 'receita' inteira do sistema operacional Linux está acessível _ou seja, o seu código-fonte. Vide:<br /><span class="Y2IQFc" lang="pt">- <a href="https://joesynth.wordpress.com/2020/12/14/repositorio-o-que-e/">respositório</a>;</span><br />- kernel Linux: -<em>https://www.kernel.org/doc/html/next/process/programming-language.html</em><br /><br />🤔️ Devido a isso o sistema operacional Linux <span class="Y2IQFc" lang="pt">pode ser estudado, examinado, modificado por qualquer pessoa</span>; e por isso há várias <a href="https://joesynth.wordpress.com/2021/10/31/linux-ubuntu/">versões de Linux</a>.<em><span style="color: #808080"><br /></span></em></pre>
<h6>Software Livre &amp; Software Proprietário</h6>
<p><span style="color: #0000ff"><span class="Y2IQFc" lang="pt">◼</span> software livre ou <em>free software</em></span>.<br /><span style="color: #0000ff"><span class="Y2IQFc" lang="pt">◼</span> software proprietário (<em>proprietary software</em>) ou software privado; software privativo ou não livre</span>.</p>
<p><img class="size-medium wp-image-69488 alignleft" src="https://joesynth.wordpress.com/wp-content/uploads/2025/06/software_livre_proprietario_b.png?w=300" alt="Software Livre - Software Proprietário" width="300" height="169" /></p>
<p>[<span style="color: #808080"><em>Foto: softwares livre (à esquerda) e não livres (à direita)</em></span>]<br />Tal como o Ubuntu, o navegador Firefox é software livre. <br />Por outro lado, o Chrome é proprietário (da Google).</p>
<p><strong>Características do software livre e do software proprietário</strong>:</p>
<pre>🛡️ segurança<br />👥️ usuários</pre>
<p>.</p>
<table>
<tbody>
<tr>
<td><small><strong><em>software</em> livre</strong> 🎈️<br />💸️ Preço: Custo zero, via de regra. <br />🤔️ Pode haver custo de suporte técnico, caso de um software específico por exemplo. <br />🛡️ Segurança: se houver 'vírus' todos ficarão sabendo já que o código é público.<br />😎️ Marketing: são desconhecidos. Não há campanhas de <em>marketing</em> para fazer as pessoas usarem. <br />👥️ Usuários: Utilizado por <a href="https://joesynth.wordpress.com/2021/05/26/profissionais-de-informatica/">profissionais de informática</a> (programadores, técnicos de TI...); militares, governos; grandes corporações.</small></td>
<td><small><strong>software proprietário</strong> 🔒️<br />💸️ Preço: Pode ter custo zero para instalar.<br />🤔️ Custo zero pode ser uma estratégia do modelo de negócios da empresa.<br />✔️ Pode oferecer algo específico, por exemplo, uma grande variedade de <a href="https://joesynth.wordpress.com/2020/11/30/o-que-e-um-plugin-vst/">plugins</a> (caso do software de música Cubase).<br />😎️ Marketing: são famosos por criarem largas estratégias de distribuição, publicidade; em especial as grandes marcas.<br />👥️ Usuários: o indivíduo comum, a população em geral; pequenas empresas ou comuns.<br /></small></td>
</tr>
</tbody>
</table>
<p>📚️ Sugestão leitura: <a href="https://joesynth.wordpress.com/2021/11/28/software-servidor/">Software Servidor</a>.</p>
<h6><em>Freeware <span style="color: #0000ff">- software gratuito (soft grátis)</span></em></h6>
<p>Quer um docinho grátis?</p>
<blockquote>
<p>🤔️ Pense em freeware como doce grátis, amostra grátis. Você ganha o doce e pode comer à vontade; porém, não a receita de o fazer.</p>
</blockquote>
<p><span class="Y2IQFc" lang="pt">Disponível gratuitamente, mas é software proprietário (na maioria das vezes).</span></p>
<p>Veja mais em software proprietário.</p>
<h6><em>Free software</em> (software livre)</h6>
<p><span style="color: #0000ff"><em>free software (software libre): software livre</em></span>.</p>
<p>"livre como na liberdade de expressão".</p>
<blockquote>
<p>Um docinho grátis, inclusive com a receita!</p>
</blockquote>
<p>Conforme Richard Stallman é qualquer programa de computador que pode ser:</p>
<pre>✔️ Usado 
✔️ Copiado 
✔️ Estudado 
✔️ Modificado 
✔️ Redistribuído sem nenhuma restrição.</pre>
<p>Ou seja, o usuário tem a liberdade de executar, acessar e modificar o código-fonte, além de redistribuir cópias (com ou sem modificações)</p>
<p><span class="Y2IQFc" lang="pt">💰️</span> <strong>Venda é permitida</strong>! Entretanto as mesmas liberdades são válidas para o comprador.<br /><span class="Y2IQFc" lang="pt">🛠️</span> Código aberto (ou <em>open source</em>): quase todos os programas de código aberto são de fato livres.</p>
<p><a href="https://joesynth.wordpress.com/aprenda-programacao-e-ganhe-o-mundo/"><img class="alignnone size-medium wp-image-67413" src="https://joesynth.wordpress.com/wp-content/uploads/2025/05/joe_flyer_aprendapro_c.png?w=300" alt="" width="300" height="298" /></a></p>
<h3>🔒️ Software proprietário</h3>
<pre>⭐ nascimento<br />💰 uso, como ganha dinheiro o autor<br />🧠 ideia central</pre>
<p>.</p>
<table>
<tbody>
<tr>
<td style="text-align: center"><span style="color: #ff6600">Shareware</span><br />⭐ início anos 1980</td>
<td style="text-align: center"><span style="color: #ff6600">Freeware</span><br />⭐ meados anos 1980</td>
</tr>
<tr>
<td>💰 Grátis, parcialmente.<br />Pode testar antes de pagar, com tempo ou funções limitadas.<br />🧠 Incentivar o pagamento após experimentar o programa.</td>
<td>💰 Grátis.<br />Sem custo para o usuário final.<br />🧠 Popularizar o software mantendo direitos autorais</td>
</tr>
<tr>
<td style="text-align: center"><span style="color: #ff6600">Trialware</span><br />⭐ início anos 1990</td>
<td style="text-align: center"><span style="color: #ff6600">Adware</span><br />⭐ 2ª metade anos 1990</td>
</tr>
<tr>
<td>💰 Grátis, mas temporário.<br />Bloqueia após o prazo de teste.<br />🧠 Estimular a compra mostrando o valor antes da limitação.</td>
<td>💰 Grátis + — financiado por publicidade exibida no programa.<br />🧠 Gerar receita por anúncios em vez de venda direta.</td>
</tr>
<tr>
<td style="text-align: center">SaaS<br />⭐ final anos 1990</td>
<td style="text-align: center">Freemium<br />⭐ anos 2000</td>
</tr>
<tr>
<td>💰 Pago por assinatura — acesso via internet, sem instalação local.<br />🧠 Centralizar o software na nuvem e vender como serviço contínuo. Uso do software sem instalar, ele está na internet acessível via assinaura.<br />Salesforce (1999), NetSuite (1998)</td>
<td>💰 Grátis + opção paga.<br />Recursos básicos livres e extras mediante pagamento.<br />🧠 Atrair usuários com a versão grátis e converter parte deles em assinantes premium.</td>
</tr>
</tbody>
</table>
<p>.</p>
<p>É licenciado com direitos exclusivos para o produtor.</p>
<pre><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/MacOS_wordmark_%282017%29.svg/250px-MacOS_wordmark_%282017%29.svg.png" width="72" height="17" />  <img class="" src="https://upload.wikimedia.org/wikipedia/commons/d/d8/NI_Reaktor_Logo.svg" width="32" height="32" />  <img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" width="30" height="30" />  RealPlayer iTunes<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/120px-Adobe_Acrobat_DC_logo_2020.svg.png" width="29" height="29" /><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Microsoft_Office_%282003-2007%29.svg/1200px-Microsoft_Office_%282003-2007%29.svg.png" width="83" height="29" /></pre>
<p>Tipos e termos associados? Shareware, freeware, adware, freemium.</p>
<blockquote>
<p>Shareware, freeware, adware, freemium:  cada um é <span lang="pt">tipicamente</span> um software proprietário<span lang="pt">, <span class="Y2IQFc" lang="pt">produto comercial. O custo zero para o usuário obter é comum, por ser uma tática das empresas/MKT.</span></span></p>
</blockquote>
<p>.</p>
<h6>shareware vs freeware - modelo de negócio do software</h6>
<p>  <strong>código-fonte</strong>: fechado, tipicamente.</p>
<p>Quanto ao uso pelo usuário, o dono do software (o autor) determina...</p>
<pre><span class="Y2IQFc" lang="pt">legenda:<br />⚖️ direito </span>🚀️ distribuição <span class="Y2IQFc" lang="pt">💰️</span> custo<br />🕖️ tempo<br />📝️ <br />🤑️ autor: desenvolvedor, <span class="Y2IQFc" lang="pt">escritor</span> (do código)<br />😐️ usuário (do software).<br />📝️<br /><span class="Y2IQFc" lang="pt">📝️ código, código-fonte.</span></pre>
<p>.</p>
<table>
<tbody>
<tr>
<td style="text-align: center"><strong>shareware</strong></td>
<td style="text-align: center"><strong>freeware</strong><span class="Y2IQFc" lang="pt"><br /></span><span lang="pt" style="color: #0000ff">software gratuito (soft grátis)</span><span class="Y2IQFc" lang="pt"><br /></span></td>
</tr>
<tr>
<td style="text-align: left">
<p><span class="Y2IQFc" lang="pt"><span class="Y2IQFc" lang="pt"> 🕖️ Limitação de tempo, recursos<br />📝️ Via de regra programa é fornecido só na sua forma binária, ou seja, o programa executável.<br /></span></span><span class="Y2IQFc" lang="pt"><span class="Y2IQFc" lang="pt">⚖️ Protegido, geralmente; isto é, via de regra autor tem direitos autorais.<br />📝️ Pode não ter código aberto<br />🚀️ Distribuido de forma grátis pelo autor, mas autor exige pagamento após um período de teste.<br /></span></span></p>
<p><img class="alignleft" src="https://www.saashub.com/images/app/service_logos/51/50ac94366f5d/large.png" width="28" /><a href="https://joesynth.wordpress.com/2021/11/05/synthedit/">SynthEdit</a> .<br /><span class="Y2IQFc" lang="pt">◼ WinZip.</span></p>
</td>
<td style="text-align: left"><span class="Y2IQFc" lang="pt"><span class="Y2IQFc" lang="pt">◼ Sem limitações de tempo, recursos<br />◼ Via de regra proprietário, produto comercial; <br />⚖️ É do autor, geralmente; que renuncia os royalties de uso, mas não aos direitos autorais. <br />📝️ Pode não ter código aberto.<br />📝️ Usuário sem acesso ao código fonte.<br />😐️ Usuário só tem o direito de uso.<br />🚀️ Distribuido de forma grátis pelo autor.</span></span>
<p><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/120px-Adobe_Acrobat_DC_logo_2020.svg.png" width="28" />Acrobat Reader<br /><del>Internet Explorer</del><br /><del>MSN Messenger</del> <br /> <img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/220px-Spotify_logo_with_text.svg.png" width="90" /><br /><a href="https://joesynth.wordpress.com/2023/11/06/rede-social-open-source/">YouTube</a>.<br /><a href="https://joesynth.wordpress.com/2023/11/06/rede-social-open-source/">Instagram</a>.</p>
</td>
</tr>
</tbody>
</table>
<p>⚠️ modelo de negócio do software: empresa pode mudar no decorrer dos anos.</p>
<p><strong>Shareware</strong></p>
<p><span class="Y2IQFc" lang="pt">💰️ Autor deixa usuário testar antes de comprar. <br /></span></p>
<p><span class="Y2IQFc" lang="pt">◼ usuário é requisitado a pagar para acessar a funcionalidade completa do programa.<br />◼ pode, também, ocorrer um tempo de uso gratuito _ao acabar surge a comunição pedindo para pagar o programa (comunicação esta muitas vezes até chata). Ou seja, paga-se para continuar utilizando o programa.<br />😎️ É um <em>software</em> que visa divulgar o próprio <em>software</em>.</span></p>
<pre>🖐️ Uso pelo usuário</pre>
<p><strong>Shareware - tipos</strong>:<br />🖐️ Autor usa táticas para cobrar indiretamente pelo uso do <em>software</em>.</p>
<table>
<tbody>
<tr>
<td style="text-align: center"><strong>trialware / demoware</strong><br />versão teste ou demo (demonstração)<br /><span style="color: #ff6600">Photoshop</span><br /><span style="color: #ff6600">WinRar</span></td>
<td style="text-align: center"><strong>donationware</strong> <br />pede-se doações (por ex., para cobrir despesas de servidor) para uso completo do software.</td>
<td style="text-align: center"><strong>nagware</strong><br />usuário é persuadido com janelas irritantes, paga-se para se livrar desse 'problema' (e para uso completo do software).</td>
</tr>
</tbody>
</table>
<p>Shareware: veja mais em <strong>Um Pouco de História</strong>.</p>
<p><strong>Freeware</strong></p>
<p>Pode ter a intenção de beneficiar seu produtor; por ex., incentivar vendas de uma versão mais capaz, como nos modelos de negócios freemium e shareware.</p>
<pre><span class="Y2IQFc" lang="pt">- É adquirido sem limitações de tempo, funcionalidades.<br />- Embora </span>gratuito, não implica no pagamento de licenças nem <em>royalties</em>.<br />- Pode restringir o tipo de uso:<br />  |_ uso para fins não lucrativos, não comerciais.<br />  |_ uso acadêmico, entre outros.<br />Ou seja, a licença pode ser "gratuito para uso não comercial".<br />Há um conceito simples e direto. É um programa que se pode utilizar sem pagar. Um software gratuito pode ser distribuído gratuitamente, e copiado.<br />O programa só pode ser usado da forma como foi disponibilizado, e também podem existir limitações em sua distribuição.</pre>
<p><strong>freeware - tipos semelhantes</strong>: o autor...</p>
<table>
<tbody>
<tr>
<td style="text-align: center"><strong>registerware</strong><br />permite usuário baixar após um registro. <br /><span class="Y2IQFc" lang="pt">😎️</span> O endereço de e-mail fornecido é usado ​​para promover atualizações, versões do soft, enviar anúncios de terceiros.</td>
<td style="text-align: center"><strong>freeware para uso privado</strong>: oferece versões separadas:<br />◼ para usuário particular (software gratuito) _em geral também se pede registro.<br />◼ para uso comercial (software pago). Ex.: programas de <a href="https://joesynth.wordpress.com/2021/12/17/firewall-ferramentas/">firewall</a> e <a href="https://joesynth.wordpress.com/2021/12/12/antivirus-firewall/">antivírus</a>.</td>
</tr>
</tbody>
</table>
<p>.</p>
<h6>adware vs freemium</h6>
<p>São tipos de <em>shareware</em>.</p>
<table>
<tbody>
<tr>
<td style="text-align: center"><strong>adware</strong><em><span class="Y2IQFc" lang="pt"> 🛠️</span></em></td>
<td style="text-align: center"><strong>freemium</strong> -<br /><span style="color: #0000ff"><em>"Free" (grátis) + "Premium"</em></span></td>
</tr>
<tr>
<td><span class="Y2IQFc" lang="pt">🚀️ distribuido como freeware.</span></td>
<td>
<p><span class="Y2IQFc" lang="pt"> 🚀️💰️ "Free": onde no início do uso pelo usuário temos essa forma gratuita para distribuir a versão mais limitada do produto.<br />"Premium" (paga): aplicada num segundo momento dando mais funcionalidades. <br /><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/220px-Spotify_logo_with_text.svg.png" width="90" /><br /><a href="https://joesynth.wordpress.com/2023/10/16/opcoes-ao-google-drive-em-software-livre/">Dropbox</a>.<br /><a href="https://joesynth.wordpress.com/2023/10/16/opcoes-ao-google-drive-em-software-livre/">Google Drive</a>.</span></p>
</td>
</tr>
</tbody>
</table>
<p><strong>Freemium</strong>: Exemplos:<br />◼ Pode-se baixar um jogo e ir jogando, sem gastar nada. Na medida em que se desenvolve mais na brincadeira torna-se interessante a compra _exatamente para se obter mais algum poder no contexto do jogo em si. <br />◼ Tem-se recursos básicos, gratuitos com anúncios e controle limitado; enquanto recursos adicionais (sem comerciais) são oferecidos via assinatura paga. Caso do <span class="Y2IQFc" lang="pt"><span lang="pt">Spotify. </span></span></p>
<p>Fremium: veja mais em <strong>Um Pouco de História</strong>.</p>
<p><strong>Adware</strong></p>
<p><img class="alignleft" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFqVuv5NjDTxocsBH2TAJlbPJ11LrKizzkg&amp;usqp=CAU" width="80" />Adware <em>Advertisement software</em>, <em>soft</em> de propaganda, <em>software</em> de anúncio.</p>
<p>Aqui temos marketing, literalmente! O soft apresenta propagandas:</p>
<p><strong>Adware legítimo</strong>: <br />a) Propagandas de si mesmo.<br /><img class="alignleft" src="https://r1.community.samsung.com/t5/image/serverpage/image-id/3159432iF0308C0983544CE4/image-size/large?v=v2&amp;px=999" width="140" /></p>
<p>b) Propaganda no software gerando receita _algo cada vez mais comum entre empresas de TI.<br />Para a empresa há geração de receita...<br />◼ pela exibição de anúncio de terceiros.<br />◼ por clique do usuário.</p>
<p>[<span style="color: #808080"><em>foto: TIM, propaganda irritante</em></span>]<br /><strong>Excesso de anúncios</strong>: pode ocorrer de forma  irritante, mas também, pode ser uma estratégia proposital para clicarmos nele _daí até agir como <em><a href="https://joesynth.wordpress.com/2021/11/27/como-proteger-o-computador/">spyware</a></em> (coletando dados).</p>
<p>Há quem considere o <em>adware</em> como <em><a href="https://joesynth.wordpress.com/2021/11/27/como-proteger-o-computador/">malware</a></em>.</p>
<blockquote>
<p><img class="alignleft" src="https://gartic.com.br/imgs/mural/w4/w4ll_3/arapuca.png" width="120" />Software proprietário grátis: seria uma arapuca?</p>
</blockquote>
<p>Como vimos, o custo zero para o usuário pode resultar em certas práticas utilizadas pelo fornecedor do <em>software</em>:<br />◼ ser vigiado 👀️<br />◼ ser alvo de forte publicidade até adquirir a versão paga do <em>software</em> 🤑️<br />◼ sofrer propagandas abusivas 😡️</p>
<p>⚠️ <strong>Modelo de negócios</strong>: Software financiado por anúncios também é um modelo de negócios para software de código aberto.</p>
<p>⚠️ Nota!</p>
<p><strong>SaaS</strong> (Software as a service - Software como serviço): É acessível tomando como base o modelo cliente-servidor; é baseado em "nuvem".<br /><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" width="80" /> O cliente utiliza o <em>software</em> (via <em>internet</em>) e paga um valor pelo serviço. O termo SaaS está mais associado a forma como é entregue o software _assinatura do serviço_, sendo a licença uma consequência disso. Ex.:</p>
<pre>Netflix, Google Drive.</pre>
<h3>📄️ Licença de software</h3>
<p><span class="Y2IQFc" lang="pt"><strong>Licença Proprietária</strong>:</span> podemos ver relatos do software proprietário surgindo com licença dese tipo _é o caso do Spotify.</p>
<h6>EULA</h6>
<p><em>End-User License Agreement</em>, Acordo de licença do usuário final.<br /><em>🇺🇲️ EUA, déc. 80 [ft:cisa.gov]</em></p>
<p><img class="alignleft" src="https://www.enzuzo.com/hubfs/Screen%20Shot%202022-11-17%20at%2010-18%201-png.png" width="138" height="149" /></p>
<p>Contrato de licença de uso de <em>software</em> proprietário.<br />Um EULA diz detalhadamente os direitos e restrições que se aplicam ao uso do <em>software</em>.<br />O EULA, muitas vezes é referido como uma "licença de software", é semelhante ao contrato de locação. Regula o direito do comprador de utilizar o <em>software</em>.</p>
<blockquote>
<p>É definido entre o licenciante e o usuário. O usuário compromete-se a pagar pelo privilégio de usar o <em>software</em> dentro das condições impostas pelo autor.</p>
</blockquote>
<p>◼ licenciante, autor: desenvolvedor ou fornecedor.<br />◼ usuário (do <em>software</em>): comprador, utilizador.</p>
<p><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Ohhh%2C_Shockwave_%28117804940%29.jpg/220px-Ohhh%2C_Shockwave_%28117804940%29.jpg" width="120" /> <br />[<em><span style="color: #808080">Foto: EULA dos anos 90,</span> <span style="color: #808080">empresa Macromedia (<strong>🇺🇸</strong> Adobe)</span>].<br /></em>Nessa época era feito em papel.</p>
<p><img class="alignleft" src="https://tprojects.schneider-electric.com/GeoSCADAHelp/Geo%20SCADA%202020/Content/SystemInstallationGuide/Figures/enduserlicenseagreement_PROD.png" width="120" /></p>
<p>Hoje o EULA é o "simples"<br />clique de aceitação que o usuário<br />dá ao instalar um software.</p>
<p>🤔️ O EULA existe principalmente no <strong>software proprietário</strong>, e é menos comum em <strong>software livre</strong>.<br />No caso dos softwares proprietários, as empresas preferem vender mais as licenças do que as cópias do software (como era feito antigamente). Isso lhes permite mais vantagens frente ao usuário final, por ex.:<br /><small>◼ proibir a transferência de propriedade, <br />◼ determinar o uso do mesmo soft em vários computadores.</small></p>
<p><strong>Coleta de dados?</strong> Sim. É possível vista que muitos EULAs permitam que o fornecedor colete informações sobre o usuário e as use de maneira irrestrita.<br />Ou seja, quase todo...</p>
<blockquote>
<p><em>software</em> proprietário não é vendido para você como uma cópia, e sim como uma licença (com EULA associado).</p>
</blockquote>
<p><img class="alignleft" src="https://image.cdn2.seaart.ai/static/801a105c2fa58abe0f9208fa02043241/20230427/81ab61ab67df48f737d1720a3ad547c8_low.webp" width="120" /><strong><em>Superpoderes</em></strong>?<br />Aqui alguns casos do que um <em>Acordo de Licença do Usuário Final</em> pode ter especificado:<br /><small>◼ permitir a rescisão pelo fornecedor por qualquer razão. ◼ alterar os termos a qualquer momento _é dado ao cliente a escolha entre concordar ou cessar o uso do produto, sem obter reembolso. ◼ compras no aplicativo e microtransações. ◼ se isentar de qualquer responsabilidade por danos causados pelo produto.</small></p>
<pre>📈️ Uma empresa, a Gamestation, concluiu que 88% de seus usuários não leram o acordo.<br /><br />📚️ Sugestão leitura:<br />[-https://www.gnu.org/proprietary/proprietary.pt-br.html]</pre>
<p>.</p>
<h3><span class="Y2IQFc" lang="pt"><strong>📝️</strong></span> Open Source e Closed Source</h3>
<p>Termos associados aos softwares no que tange o código. Lembra a história da receita no início deste tutorial?</p>
<h6>Open Source - <span style="color: #0000ff">Código Aberto<br /></span></h6>
<p>Software grátis (a maioria). Modelo que permite que qualquer um consulte, examine ou modifique o produto. Ou seja, acesso ao código-fonte (com possibilidade de modificá-lo). Instale e copie o programa inúmeras vezes.</p>
<p>Não abrange as mesmas liberdades que o software livre, como definido pela OSI.</p>
<blockquote>
<p>Todo software livre é código aberto, mas nem todo código aberto é software livre.</p>
</blockquote>
<p>⚠️ Vide software comercial abaixo.</p>
<pre><strong><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" width="39" height="46" /><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/de/b/b5/Postgresql.png" width="60" height="45" /><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Apache_Server_2.jpg" width="80" />Área de desenvolvimento</strong>: 
◼ Vim (text editor). 
◼ fundanção <a href="https://joesynth.wordpress.com/2021/11/28/o-que-e-ide/">Eclipse</a> (soft Eclipse). 
◼ OW2 (comunidade europeia que desenvolve <em>middleware</em>). <strong>Outros</strong>: 
◼ Organização Apache Software Foundation (servidor Web Apache).</pre>
<h6>Closed Source <span style="color: #0000ff">- Código Fechado (ou proprietário)</span></h6>
<p>Oposto do código aberto, é o código fechado.</p>
<blockquote>
<p>Programa de computador que o código-fonte não é publicado. O modelo código-fechado é o preferido das empresas para vender seus softwares.</p>
</blockquote>
<p>Ou seja, o código (do <em>software</em>) não é compartilhado com o público _isso na intenção (de quem criou) de ninguém olhar ou alterar.</p>
<p>Mesmo uma empresa que oferece seu software de graça pode não mostrar o código. Alega-se que assim evita-se o plágio, afinal, alguém pode mudar o nome dos autores e pôr o seu.</p>
<h3>🎈️ FOSS</h3>
<p><span style="color: #0000ff"><em>Free and Open-Source Software</em>, Software de Código Livre e Aberto</span>.</p>
<p><img class="size-medium wp-image-68613 alignleft" src="https://joesynth.wordpress.com/wp-content/uploads/2025/05/software_livre.png?w=300" alt="" width="300" height="169" /></p>
<p>O <strong><em>software livre e de código aberto</em></strong> é uma aplicação que qualquer pessoa tem o direito de...<br />✔️ usar <br />✔️ cópiar<br />✔️ estudar <br />✔️ mudar e melhorar</p>
<p><strong>Por que código-fonte aberto?</strong> O próprio código-fonte, que é o <em>soft</em> em si, é compartilhado abertamente para as pessoas poderem voluntariamente melhorar a aplicação. Assim, se você é um <a href="https://joesynth.wordpress.com/2021/05/26/profissionais-de-informatica/">programador</a> pode ler (estudar) o código do <em>soft</em> e mesmo alterar se quiser. Portanto, no que tange 'estudo, mudança e melhoria' o código-fonte disponibilizado é vital.</p>
<p><img class="alignleft" src="https://cdn.geekboots.com/geek/linux-vs-windows-vs-mac-meta-1655409657451.jpg" width="150" />É comum que <strong><em>soft livre e de código aberto</em></strong> seja compatível com sistemas operacionais Linux, Mac e Windows, e mesmo Android ou outros.</p>
<p>Há diversos tipos de softwares FOSS, incluindo...<br />◼ sistema operacional para computador <em>desktop</em> ou <a href="https://joesynth.wordpress.com/2021/11/28/software-servidor/">servidor</a>,<br />◼ aplicações para empresa, escritório, multimídia/arte;<br />◼ <a href="https://joesynth.wordpress.com/2021/11/28/software-de-rede/">soft de rede</a> (como <a href="https://joesynth.wordpress.com/2021/12/17/firewall-ferramentas/">firewall</a>),<br />◼ <a href="https://joesynth.wordpress.com/2021/11/28/editor-de-codigo-fonte/">editor de código-fonte</a>,<br />◼ <a href="https://joesynth.wordpress.com/2021/12/07/software-de-linha-de-comando/">software de linha de comando</a>.</p>
<p>Clique no <em>link</em> para conhecer os <a href="https://joesynth.wordpress.com/2021/11/28/software-livre/">softwares livres e abertos mais famosos</a>, inclusive com detalhes sobre eles.</p>
<h3>FOSS vs CSPS</h3>
<p><span style="color: #0000ff"><em>CSPS (Closed Source Proprietary Software)</em></span>.</p>
<p>Comparação entre ambos. Abaixo, relações envolvendo código-fonte, execução, etc.</p>
<table>
<tbody>
<tr>
<td><strong>FOSS</strong></td>
<td><strong>CSPS</strong></td>
<td><strong>característica</strong></td>
</tr>
<tr>
<td>✔️</td>
<td>✔️</td>
<td>Usar. Usuário pode executar o soft.</td>
</tr>
<tr>
<td>✔️</td>
<td>✖️</td>
<td>Código é disponível ao usuário.</td>
</tr>
<tr>
<td>✔️</td>
<td>✖️</td>
<td>Mudar. Usuário pode modificar o código.</td>
</tr>
<tr>
<td>✔️</td>
<td>✖️</td>
<td>Usuário pode redistribuir o soft.</td>
</tr>
<tr>
<td>✔️</td>
<td>✖️</td>
<td>Permitido vários usuários em várias máquinas?</td>
</tr>
</tbody>
</table>
<p><strong>Exemplos:</strong></p>
<pre><strong><img class="size-medium wp-image-69488 alignleft" src="https://joesynth.wordpress.com/wp-content/uploads/2025/06/software_livre_proprietario_b.png?w=300" alt="Software Livre - Software Proprietário" width="300" height="169" />FOSS</strong>          <strong>CSPS</strong><br /><a href="https://joesynth.wordpress.com/2021/11/28/softwares-livres-mais-famosos/">Audacity</a>    | FL Studio<br /><a href="https://joesynth.wordpress.com/2021/11/28/softwares-livres-mais-famosos/">Ardour</a>      | Cubase<br /><a href="https://joesynth.wordpress.com/2021/11/28/softwares-livres-mais-famosos/">LibreOffice</a> | 365<br /><a href="https://joesynth.wordpress.com/2021/11/28/softwares-livres-mais-famosos/">Firefox</a>     | Chrome<br /><a href="https://joesynth.wordpress.com/2023/11/06/rede-social-open-source/">Mastodon</a>    | Instagram<br /><a href="https://joesynth.wordpress.com/2021/11/28/softwares-livres-mais-famosos/">GIMP</a>        | Photoshop<br /><a href="https://joesynth.wordpress.com/2021/11/28/softwares-livres-mais-famosos/">Telegram</a>    | Whatsapp<br />Ubuntu      | Windows<br />Mint        | MacOs</pre>
<p><em>*Telegram versão cliente</em>.</p>
<h3>Resumo, comparações e afins</h3>
<pre><em>Commercial</em><br />Proprietário<br />Misto<br />Software Livre e Freeware</pre>
<h6>commercial software <span style="color: #0000ff">software comercial</span></h6>
<p>Software feito para venda ou fins comerciais. Pode ser:</p>
<table>
<tbody>
<tr>
<td style="text-align: center"><strong>software proprietário</strong></td>
<td style="text-align: center"><strong>software livre comercial<br /></strong></td>
</tr>
<tr>
<td style="text-align: center"><span lang="pt">sem acesso ao código-fonte;<br />envolve custos;<br />direitos limitados de uso e cópia</span>. Ex.:<br /><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Microsoft_Office_%282003-2007%29.svg/1200px-Microsoft_Office_%282003-2007%29.svg.png" width="83" height="29" /><br /><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1280px-Oracle_logo.svg.png" width="77" height="10" /><br /><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/220px-SAP_2011_logo.svg.png" width="50" height="25" /></td>
<td style="text-align: center">tem código aberto mas não é software livre, e sim comercial;<br />pode oferecer, por ex., suporte, venda de plug-ins. Ex.:<br />◼ <a href="https://joesynth.wordpress.com/2021/11/28/software-servidor/">Red Hat</a> Hat Enterprise Linux, RHEL. <br />◼ <a href="https://joesynth.wordpress.com/2021/11/28/software-cms/">Joomla</a> (CMS).</td>
</tr>
</tbody>
</table>
<p><strong>proprietary software <span style="color: #0000ff">software proprietário</span></strong>: São os que abordamos no início deste tutorial.</p>
<h6>Misto</h6>
<p>As distribuições de <em>software</em> consideradas proprietárias podem de fato incorporar um modelo de "fonte mista", incluindo <em>software</em> livre e não livre na mesma distribuição.</p>
<p><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Simh-pdp11-unix-sysiii.png/300px-Simh-pdp11-unix-sysiii.png" width="150" /> <em>Foto: Unix</em>. 🔗️opengroup.org<br />A maioria, se não todos os sistemas UNIX, agrupan componentes de código aberto (como <a href="https://joesynth.wordpress.com/2021/11/28/software-de-rede/">BIND</a>, Sendmail, X Window System, DHCP etc) junto com um kernel e utilitários de sistema exclusivamente proprietários.</p>
<h6>Software Livre e Freeware</h6>
<p>⚠️ <strong>Free Software ≠ Freeware</strong>: a palavra <strong><em>free</em></strong> em português pode significar tanto <strong>livre</strong> como <strong>grátis</strong>.</p>
<h6>FOSS e Freeware</h6>
<p><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Open-source-vs-freeware.svg/800px-Open-source-vs-freeware.svg.png" alt="" width="140" height="175" /></p>
<p>Lembrando!<strong><br />FOSS</strong>: <br />Abrange tanto o software livre como o software de código aberto.<br /><strong>Freeware</strong>: <br />É distribuído livremente, mas não temos acesso ao código-fonte (que é fechado).</p>
<h6>FOSS e proprietário</h6>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Software_Categories_expanded.svg/640px-Software_Categories_expanded.svg.png" width="310" /> <em>ft: wikipedia</em>.</p>
<p><strong>Diagrama de Chao-Kuei</strong>:</p>
<p><img class="alignleft" src="https://www.researchgate.net/publication/43180999/figure/fig1/AS:203189006671879@1425455442282/Chao-Kueis-Diagram-different-categories-of-software-6.png" width="320" /> Note na coluna...<br /><strong>Free Software</strong> (Software Livre) domínio público, GPL, <em>open source</em>...<br /><strong>Proprietário</strong>: <em>closed</em>, <em>shareware</em>.</p>
<p>.</p>
<p><a href="https://joesynth.wordpress.com/aprenda-programacao-e-ganhe-o-mundo/"><img class="alignnone size-medium wp-image-67413" src="https://joesynth.wordpress.com/wp-content/uploads/2025/05/joe_flyer_aprendapro_c.png?w=300" alt="" width="300" height="298" /></a></p>
<h3>📄️ Licenças e afins...</h3>
<h3>Copyright e Public Domain (PD)</h3>
<p><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/220px-Copyright.svg.png" width="30" height="30" /></p>
<p><strong><em>Copyright</em></strong> é o direito legal exclusivo de usar, copiar e distribuir um trabalho criativo.</p>
<p><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Cc-public_domain_mark_white.svg/150px-Cc-public_domain_mark_white.svg.png" width="30" height="30" /> <strong>Public Domain</strong> (PD) é o termo em inglês que se refere a domínio público.</p>
<pre><strong>pd</strong>:
<img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/220px-SQLite370.svg.png" width="79" height="38" />SQLite (Banco de Dados) ◼ Youtube-dl ◼ SHA-3</pre>
<h6>software livre vs software público</h6>
<table>
<tbody>
<tr>
<td>software livre</td>
<td>software público</td>
</tr>
<tr>
<td>está associado a licenças como GPL e BSD</td>
<td>surge quando se passa vários anos e se torna um bem comum, conforme as leis de proteção de direitos do autor.</td>
</tr>
</tbody>
</table>
<p>Nessa situação o software de domínio público pode ser visto como <em>software livre</em>.</p>
<h3>Copyleft</h3>
<p>"<em>All rights reversed</em>", "Todos os direitos invertidos".</p>
<p><strong><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Copyleft.svg/800px-Copyleft.svg.png" alt="" width="30" height="30" /></strong>Um arranjo pelo qual um trabalho pode ser usado, modificado e distribuído gratuitamente; na condição de que qualquer coisa derivada dele é vinculada pela mesma condição. O autor continua sendo dono, mas sua obra pode ser utilizada/modificada/redistribuida por outras pessoas.<br />⌛️ Anos 70. Permitida a cópia, cópia autorizada, ou livre direito de cópia. Pode-se copiar e modificar, por exemplo. Está associada às liberdades para:</p>
<p>◼ utilizar o trabalho; <br />◼ realizar pesquisas a respeito, estudar o trabalho; <br />◼ compartilhar e copiar; <br />◼ fazer alterações e posterior distribuição.</p>
<p>Anos 80, Richard Stallman foi um dos responsáveis pela popularização inicial do termo <em>copyleft</em>.</p>
<p>💾️ Usada na Wikipedia (Fundação Wikimedia).</p>
<blockquote>
<p>"Muitas licenças de software livre não são copyleft"</p>
</blockquote>
<p>[ft:https://pt.wikipedia.org/wiki/Copyleft#Aplicando_o_copyleft]</p>
<h6>Copyleft: as licenças</h6>
<p>Há <em>copyleft</em> forte e fraca: Exemplos:</p>
<pre><strong>forte</strong>   | <strong>fraca</strong> <br />GNU GPL | LGPL<br />        | MPL<br />        | AGPL<br />        | EPL<br /><strong>outras</strong><br />EUPL</pre>
<p><img class="alignleft" src="https://www.whitesourcesoftware.com/wp-content/media/2021/04/GPL-e1435820834468.jpg" width="181" height="74" /></p>
<p>No caso específico da GNU GPL temos o <em>free software</em> associado à ‘Família GPL’. A GPL está baseada nas 4 liberdades, os comportamentos de:</p>
<pre>- <em>run</em> executar o software;<br />- <em>study</em> estudar;<br />- <em>share</em> compartilhar;<br />- <em>modify</em> modificar (o soft).</pre>
<p><strong><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/GPLv3_Logo.svg/1024px-GPLv3_Logo.svg.png" alt="" width="80" height="40" /> <span class="text-primary">GNU GPL </span></strong>(<em>GNU General Public License</em>) ou GPL: Licença Pública Geral GNU.<br />⌛️ 1989, Richard Stallman.<br />🔗️ gnu.org<br />Fora inicialmente criada para o Projeto GNU. É aprovada pela FSF e OSI.</p>
<pre><a href="https://joesynth.wordpress.com/2021/11/28/software-livre/">Audacity</a>, <a href="https://joesynth.wordpress.com/2021/11/28/editor-nano/">Nano</a>, <a href="https://joesynth.wordpress.com/2020/05/11/bash-shell/">Bash</a>, <a href="https://joesynth.wordpress.com/2023/11/06/termux/">Termux</a>, <a href="https://joesynth.wordpress.com/2021/10/31/bluefish-editor-de-codigo/">Bluefish</a>, <a href="https://joesynth.wordpress.com/2024/03/29/linguagem-c-um-tutorial-essencial/">GCC</a>, <a href="https://joesynth.wordpress.com/2021/11/27/notepad-plus-plus/">Notepad++</a>, <a href="https://joesynth.wordpress.com/2021/11/28/software-livre/">OpenShot</a>. Vide também FOSS.</pre>
<p>⚠<a href="https://joesynth.wordpress.com/2021/12/12/linux/">️Ubuntu</a>: licença GPL; embora há uma ou outra parte proprietária.<br />[<em>Para "GPL" neste caso vide wikipedia alemã e japonesa, e para "free software" wikipedia em inglê</em>s]</p>
<p><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/LGPLv3_Logo.svg/1280px-LGPLv3_Logo.svg.png" alt="" width="82" height="36" /></p>
<p><span class="text-primary"><strong>GNU LGPL</strong> (<em>GNU Lesser General Public License</em>).<br />🔗️gnu.org/copyleft/lesser.html<br /></span>⌛️ Anos 90. É aprovada pela FSF e OSI.<br />Usada em bibliotecas de <em>software</em>, mas também <em>softwares</em>.<br />💾️  <a href="https://joesynth.wordpress.com/2020/02/20/o-que-e-ffmpeg/">FFmpeg</a> , Qt (FOSS) e outros.</p>
<p><img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/GFDL_Logo.svg/1920px-GFDL_Logo.svg.png" alt="" width="82" height="28" /> <strong><span class="text-primary">GNU FDL</span></strong> (<em>GNU Free Documentation License</em>) - Licença GNU de Documentação Livre.<br />🔗️gnu.org/licenses/gfdl.html<br />É aprovada pela FSF. Licença para documentos e textos livres publicada pela FSF.<br />💾️  wikibooks.org</p>
<p><span class="text-primary"><strong>MPL</strong> (<em>Mozilla Public License</em>).<br />É <em>copyleft</em> (parcial); é aprovada pela FSF e OSI.</span><br />💾️ Maioria dos <em>softwares</em> Mozilla (que é o caso do <a href="https://joesynth.wordpress.com/2021/11/27/console-do-desenvolvedor/">Firefox</a>) e muitos outros.</p>
<p><strong>EPL</strong>.<br />Ex. de <em>software</em>: Eclipse.</p>
<h6>Permissive</h6>
<p>Ao invés de proteções <em>copyleft</em> tem-se restrições mínimas.</p>
<p><strong><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1024px-MIT_logo.svg.png" alt="" width="79" height="41" /> MIT License</strong>.<br /><span class="text-primary">Licença MIT </span> Ou licença X e ainda X11 fora criada pelo MIT.<br />É aprovado pela FSF e OSI.<br />💾️  <a href="https://joesynth.wordpress.com/2021/11/27/o-que-e-node-js/">Node.js</a>, App Inventor.</p>
<p><span class="text-primary"><strong>Licença BSD</strong>.<br /></span>💾️  Usada nos sistemas operacionais BSD.</p>
<p>Outros casos: X11 License e ISC.</p>
<h5><em>P</em><em>ermissive vs </em><em>Copyleft</em></h5>
<p><img class="alignnone" src="https://joesynth.files.wordpress.com/2021/11/65878-0nbx3uw8ugxqghyzi.png" width="441" height="289" /></p>
<h6><em>Copyleft</em> vs <em>Permissive</em>: ao longo do tempo</h6>
<p><img class="alignleft" src="http://www.vinayiyengar.com/wp-content/uploads/2020/09/itemeditorimage_5e287f7dbbf1c.jpg" width="400" height="225" /></p>
<p>Note no quadro que:<br /><strong>2012</strong>: havia 59% de uso de licença <em>copyleft</em>_quase dois terços.<br /><strong>2019</strong>: o número caiu para 33%, portanto 1/3 de copyleft.</p>
<h3>Creative Commons</h3>
<p><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cc.logo.circle.svg/800px-Cc.logo.circle.svg.png" alt="" width="32" height="32" /><strong>🇺🇸</strong> <strong>Creative Commons</strong><em> (</em>CC).<br />⌛️ Início ano 2000.<br />Organização sem fins lucrativos. É uma das várias licenças públicas de direitos autorais que permitem a distribuição gratuita de uma "obra" protegida por direitos autorais. Uma licença CC é usada quando um autor deseja conceder a outras pessoas o direito de compartilhar, usar e desenvolva uma obra que eles (o autor) criaram.<br />A <em>CC</em> fornece uma flexibilidade de autor  _por ex., ele pode optar por permitir apenas usos não comerciais de uma determinada obra. Além, protege a  pessoa que usa ou redistribui obra de um autor de preocupações com violação de direitos autorais, desde que respeitem as condições estabelecidas, especificado na licença pela qual o autor distribuiu o trabalho.</p>
<p><strong>Creative Commons: tipos de licenças</strong>.<br /><img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Cc-by_new.svg/75px-Cc-by_new.svg.png" width="29" height="29" /> <img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cc-sa.svg/75px-Cc-sa.svg.png" width="30" height="30" /> <img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Cc-nc.svg/75px-Cc-nc.svg.png" width="29" height="29" /> <img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cc-nd.svg/75px-Cc-nd.svg.png" width="29" height="29" /></p>
<pre><strong>Creative Commons: exemplos</strong>.<br /><a href="https://joesynth.wordpress.com/2021/11/28/software-livre/">Audacity</a>, sites (como Wikipedia‎, gnu.org, Mozilla website, RationalWiki.org, Stack Overflow), livros (vários de Eric S. Raymond).</pre>
<p>Mais sobre <em>Copyleft</em>: [<em>https://pt.wikipedia.org/wiki/Copyleft</em>]</p>
<h3>Comparações e estatísticas</h3>
<h5><em>Copyright</em> vs <em>Copyleft</em> vs <em>Permissive</em> vs <em>CC</em></h5>
<p><img class="" src="https://joesynth.files.wordpress.com/2021/11/d5f45-0pj3xhsctqeje4k03.png" width="439" height="287" /></p>
<h3>Organizações</h3>
<p>A FSF e a OSI são as principais organizações internacionais responsáveis pela proteção e promoção do software livre.</p>
<h6>FSF  <em>- Free Software Foundation</em></h6>
<blockquote>
<p>"<em> uma organização que defende o modelo de software livre, sugere que, para entender o conceito, é necessário "pensar em livre como em liberdade de expressão, não como cerveja grátis</em>". " (wikipedia, pt).</p>
</blockquote>
<p>Usa o termo "Software Livre" voltado à questões éticas, direitos, liberdade. Ela considera um software como livre quando atende as liberdades de...</p>
<pre><small>✔️ executar o programa sob qualquer propósito;
✔️ estudar o programa e adaptá-lo para as suas necessidades.
✔️ redistribuir cópias do soft de modo que se possa ajudar ao seu próximo;
✔️ modificar (aperfeiçoar) o soft e distribuir estas modificações, de modo que toda a comunidade se beneficie.</small></pre>
<p>Ex. de softwares.</p>
<p>"<em>a preferência da organização [é] por software sendo distribuído sob termos copyleft ("compartilhar da mesma forma"),[6] como com sua própria Licença Pública Geral GNU....</em>" [ft:https://en.wikipedia.org/wiki/Free_Software_Foundation]</p>
<pre><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Replicant_logo_alpha.svg/640px-Replicant_logo_alpha.svg.png" width="32" />  <a href="https://joesynth.wordpress.com/2021/11/27/sistemas-operacionais-mais-usados/">Replicant</a> (licença GPL).
◼ GNU/Linux (Licença GPLv2),
◼ GNOME (Licença GPL),
◼ Eclipse,
◼ Apache (Servidor; Licença Apache-2.0),</pre>
<p>Veja também: https://en.wikipedia.org/wiki/Free_Software_Foundation_Europe.</p>
<h6>OSI</h6>
<p>Organização criada para incentivar uma aproximação de entidades comerciais com o software livre.</p>
<blockquote>
<p>OSI usa o termo "código aberto" sob ótica puramente técnica, evitando (propositadamente) questões éticas.</p>
</blockquote>
<p>Há o argumento que soft é prioritariamente algo técnico. Organização que promove o software de código aberto ou software livre.</p>
<pre>◼ Apache Software Foundation     ◼ Linux Foundation
◼ Creative Commons               ◼ Mozilla Foundation
◼ Drupal                         ◼ Wikiotics
◼ Eclipse Foundation
</pre>
<pre><a href="https://joesynth.wordpress.com/2021/11/28/software-livre/">Audacity</a>, Firefox, <a href="https://joesynth.wordpress.com/2021/11/28/software-livre/">GIMP</a>, Thunderbird</pre>
<h3>Dicas e links</h3>
<p>Livro: <em>O Futuro dos Preços</em> (Chris Anderson, mesmo autor de “A Cauda Longa”).</p>
<p><em>Links</em> relacionados ao tema:<br />- <a href="https://joesynth.wordpress.com/2022/11/01/marketplace-20-sites/">Marketplace</a>.<br />- <a href="https://joesynth.wordpress.com/2021/11/27/o-que-e-github/">GitHub</a>.<br />- <a href="https://joesynth.wordpress.com/2021/11/28/software-livre/">Software livre: 21 softs</a> (que você deve conhecer).<br />- <a href="https://joesynth.wordpress.com/2021/12/27/saas-10-softwares-famosos/">SaaS</a>.</p>
<h3>📚️ Um pouco de história</h3>
<pre>- software livre, software proprietário, GPL<br />- shareware e freemium<br />- FSI vs OSI<br />- <em>Copyleft</em> vs <em>Permissive</em>: ao longo do tempo</pre>
<h6>software livre, software proprietário, GPL</h6>
<blockquote>
<p>No início o software era livre.</p>
</blockquote>
<p>Século passado o <em>software</em> era livre. Os computadores eram grandalhões, utilizados pelo governo (dos EUA) e grandes empresas. Nessa época o <em>software</em> não era visto como algo separado do <em>hardware</em> (como é nos dias atuais). O programa, o '<em>soft</em>,' era entregue junto com o código-fonte (e até mesmo só o código-fonte).</p>
<p><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Altair_8800_and_Model_33_ASR_Teletype.jpg/500px-Altair_8800_and_Model_33_ASR_Teletype.jpg" width="140" />Altair 8800 (<strong>🇺🇸 </strong>MITS, anos 70).<br />Computador pessoal ou desktop.<br />Foi um dos primeiros e utilizava processador Intel 8080.<br />Havia o Altair BASIC, um software interpretador (vendido separado).</p>
<p><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Richard_Stallman_at_LibrePlanet_2019.jpg/220px-Richard_Stallman_at_LibrePlanet_2019.jpg" width="80" height="104" />Foi nos anos 80 que Richard Stallman, funcionário do Laboratório de IA do MIT (EUA), viu numa impressora uma falha no <em>software</em> _<em>software</em> proprietário nesse caso. Tentou corrigir mas sem sucesso: a empresa não liberou o código-fonte. Stallman reagiu a isso criando uma forma legal de garantir que possamos desfrutar do direito de copiar, redistribuir e modificar <em>software</em>. É a licença GPL.</p>
<h6>shareware e freemium</h6>
<p>Anos 80 a indústria de <em>softs</em> criou o <strong><em>freemium</em></strong> como uma estratégia de tempo limitado (ou de recursos limitados). Conhecida como estratégia <strong><em>shareware</em></strong>, nesse modelo de negócios a versão gratuita (e limitada) do produto (o <em>soft</em> em si) era disponibilizada às pessoas na esperança que algumas fariam a atualização.</p>
<h6>FSF vs OSI</h6>
<table>
<tbody>
<tr>
<td><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Free_Software_Foundation_logo_and_wordmark.svg/1920px-Free_Software_Foundation_logo_and_wordmark.svg.png" alt="" width="150" /> <strong>FSF</strong><br /><em>Free Software Movement, </em><br />Movimento do Software Livre.<br />🇺🇲️ 83 | Richard Stallman.<br />🔗️ fsf.org<br />Free Software - Software Livre.</td>
<td><strong><img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Opensource.svg/800px-Opensource.svg.png" alt="" width="60" />OSI</strong><br /><em>Open Source Initiative, </em>iniciativa pelo código aberto.<br />🇺🇲️ 98 | Eric Raymond<br />🔗️ opensource.org.<br />Open Source - Código Aberto</td>
</tr>
<tr>
<td><em>Political Philosophy.</em><br /><em>Ethical Rights.</em><br /><em>Allows unconditional 'sharing' and collaboration.</em><br /><em>Only GNU/FSF meet standards.</em></td>
<td><em>Development Technique.</em><br /><em>Better Software.</em><br /><em>Allows software to 'evolve.</em><br /><em>Sun, Apple, Netscape.</em></td>
</tr>
<tr>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>
<p>FSF: "...<em>organização sem fins lucrativos [...] fundada por Richard Stallman em 4 de outubro de 1985, para apoiar o movimento do software livre, que promove a liberdade universal de estudar, distribuir, criar e modificar software de computador</em>"<br />[ft:https://en.wikipedia.org/wiki/Free_Software_Foundation]</p>
<p>Então é isso! Esperamos ter contribuído.<br />Grande abraço e sucesso.</p>


\o_  
  
<!-- 
freeware:
http://www.periodicos.letras.ufmg.br/index.php/ueadsl/article/viewFile/2879/2838

O Futuro dos preços (Chris Anderson, mesmo autor de “A cauda longa”).
https://cer.sebrae.com.br/wp-content/uploads/2015/12/GUIA-NOVOS-EMPREENDEDORES-VOL3_Digital-1.pdf

freemium
https://canaltech.com.br/software/O-que-e-Freemium/

open-source, repositório, Github
https://www.alura.com.br/artigos/open-source-uma-breve-introducao

https://www.ime.usp.br/~is/ddt/mac339/projetos/2001/demais/andrei/

https://www.kaspersky.com.br/resource-center/definitions/shareware
 -->
 
<p>Veja também:<br />○ <a href="https://joesynth.wordpress.com/curso-sintese-sonora/">Curso Síntese Sonora Ilustrada</a>.<br />[oes: tit !</p>
