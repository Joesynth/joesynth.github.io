# SEO On Page: o que é exatamente?

O SEO melhora o posicionamento natural no Google, isto é, marca aparece nas pesquisas do Google sem ser propaganda paga. Tráfego orgânico, otimização. SEO On Page faz parte disso e é o que falamos aqui.


Tutorial:  

<ul>
<li>SEO &amp; Link.</li>
<li>&lt;head&gt;</li>
<li>&lt;body&gt; (conteúdo).</li>
</ul>

<h2>Otimização On Page</h2>

<p>Toda parte estrutural do site, estratégia (de SEO) dentro da programação do site. Essa arquitetura da informação junto com o conteúdo são partes importantes do SEO On Page.</p>

<h6 id="title">SEO On Page está relacionado a que?</h6>

<p>Escrita correta do código HTML. Ex:<br />- escolha de bom título da página,<br />- conteúdo com as principais palavras-chave, <br />- descrição resumida sobre o que cada página traz de conteúdo, <br />- descrição textual de cada imagem, <br />- url com o mesmo nome do título da página (heading tags...)</p>
<p>Embora não seja um especialista na criação de site, usa conhecimentos básicos de programação. Ex: verifica as URLs, sitemap, tempo de carregamento do site (incluindo imagens), possíveis conteúdos duplicados, títulos repetidos, escaneabilidade dos textos...</p>

<h2>SEO - Exemplo de artigo</h2>

<pre>*<strong>como rankear um conteúdo </strong>*</pre>

<h3>&lt;head&gt;</h3>


<h6> Título, Descrição, URL, meta <strong>keywords</strong></h6>

<pre>&lt;title&gt;&lt;/title&gt;
&lt;meta name="description" content=""&gt;
&lt;meta name="keywords" content=""&gt;
</pre>

<h6>Title &amp; Meta description</h6>

<pre>&lt;title&gt;<br />&lt;meta name="" content=""&gt;</pre>
<p><span style="color: #0000ff">Título &amp; Meta-descrição</span>.</p>
<pre>&lt;title&gt;*<strong>Como rankear um conteúdo</strong>* para várias palavras?&lt;/title&gt;
&lt;meta name="description" content="Você sabe <strong>*como rankear um conteúdo*</strong> para várias palavras-chave diferentes ao mesmo tempo? Sim, meu caro, é possível. Clique aqui e saiba como fazer!"&gt;</pre>
<p>São as tags mais importantes do head, e devem ser usadas juntamente.</p>
<table width="100%">
<tbody>
<tr valign="top">
<td width="50%">
<div align="center"><strong>&lt;title&gt;</strong><br />Título da página (artigo, post). O mais importante dos elementos para o algoritmo do Google. <br /><strong>Local na SERP</strong> Surge na 1ª linha, sendo clicável. <br /><strong>Quantidade de caracteres</strong> &lt; 60 caracteres; <br /><strong>Palavras-chave</strong> Aplique. <br /><strong>Foco</strong> Uma única palavra-chave ou frase; <br /><strong>Keyword stuffing</strong> Não faça no title;</div>
</td>
<td width="50%">
<div align="center"><strong>&lt;meta name="description" content=""&gt;</strong><br />Meta-Descrição é uma breve descrição rápida do que se vai encontrar na página. Ela não é critério de posicionamento (para o Google), mas ajuda a aumentar o CTR (taxa de cliques).<br /><strong>Local na SERP</strong> 2ª linha, sendo a descrição. <br /><strong>Quantidade de caracteres</strong> &lt; 170 caracteres; <br /><strong>Palavras-chave</strong> Aplique.</div>
</td>
</tr>
</tbody>
</table>

<h6>URL Amigável</h6>

<pre>/como-rankear-um-conteúdo        Note que é a palavra-chave</pre>
<p>Uma página é um arquivo. Como aparece para o usuário em seu navegador, pode interferir direta ou indiretamente no posicionamento de *seusite*, inclusive o impacto em social media que ela pode ter.<br /><strong>Separação de palavras</strong> Use *dash* se preciso.<br /><strong>Cedilha, acento...</strong> Não use.<br /><strong>URL Amigável</strong> URL cheia de números (como aqueles de banco de dados) também não são amigáveis ao usuário e podem gerar dúvida na hora de compartilhar. Servidores Apache podem transformar esses números e letras estranhas em algo amigável.</p>
<p>Conheça cada termo duma URL:</p>
<p><strong>Palavra-chave</strong> (uso resumido)</p>
<table width="100%">
<tbody>
<tr valign="top">
<td width="25%">
<div align="center"><strong>title</strong><br />Deve surgir no *title* e *description*, e se possível aplique na URL também.</div>
</td>
<td width="24%">
<div align="center"><strong>meta description</strong><br />Ela deve aparecer preferencialmente mais para a esquerda.</div>
</td>
<td width="25%">
<div align="center"><strong>URL</strong><br />É importante no title, description, URL.<br />Pode-se variar com sinônimos ou parecidos. Semântica!</div>
</td>
<td width="26%">
<div align="center">
<p><strong>meta keywords</strong><br />Google ignora para posicionar site, enquanto o Bing as considera. <br />⚠️ Colocando-as o seu concorrente pode ter ciência.</p>
</div>
</td>
</tr>
</tbody>
</table>
<p>⚠️  Caso mais de uma palavra-chave, elenque a mais importante e ponha na esquerda.</p>

<h3>&lt;body&gt; (Conteúdo)</h3>


<h6>Hierarquia</h6>

<table width="100%">
<tbody>
<tr>
<td bgcolor="#FFFFCC">
<div align="center">Title (na verdade fica em head, mas há o atributo também) <br />h1 h2 h3<br />Conteúdo (que é o principal) <br />Imagens, vídeo... ou mesmo links para outros sites</div>
</td>
</tr>
</tbody>
</table>

<h6>&lt;h1&gt; ... &lt;h6&gt;</h6>

<p>Heading é título e tem relevância em mecanismos de busca.</p>
<p><strong>h1 e h2</strong> Indicado pra título e subtítulo. <br />😁️ O h1 deve surgir apenas uma vez, afinal uma página não pode ter o título principal duas vezes.</p>
<p>Aqui vamos nos referir a um subtítulo para o nosso exemplo:</p>
<pre>Como rankear um conteúdo para múltiplas palavras?</pre>
<p><strong>h3 e h4</strong> É bem utilizada para criar menus. Menu para SEO com h3 ou h4:</p>
<pre>&lt;ul&gt;
  &lt;li&gt;
   &lt;li&gt;&lt;h3&gt;Nome Menu&lt;/h3&gt;
     &lt;li&gt;&lt;a href="page.html"&gt;Nome Página&lt;/a&gt;&lt;/li&gt;
     &lt;li&gt;&lt;a href="contato.html"&gt;Contato&lt;/a&gt;&lt;/li&gt;
   &lt;/li&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</pre>

<h3>Conteúdo: o texto</h3>

<p>Conteúdo é o “elemento” mais importante do *seusite*. Faz *marketing* por si só; com texto, imagem, vídeo que todo mundo quer compartilhar e que traz muita informação.</p>
<p>No texto e conforme esse contexto, pode aparecer termos *como rankear uma página*, *termo-chave*, *rankear* (aparecendo sozinha).</p>
<pre><span class="style5">&lt;p&gt;Exemplo.      👎️<br />&lt;p&gt;Exemplo.&lt;/p&gt;  👍️<br /></span></pre>
<p><span class="style5">A *tag* parágrafo deve ser fechada para o Google entender que o texto acabou. Use não só em artigo mas também em texto de *e-commerce*, por ex.</span></p>
<pre>&lt;div&gt; </pre>
<p>Use a *tag* *div* para separar página em blocos, mas evite excesso. Evite *style* dentro delas e prefira class ou id, deixando seusite mais ágil.<br />&lt;span&gt; Usada com style para outras marcações.</p>
<pre>&lt;b&gt; ou &lt;strong&gt; (negrito) </pre>
<p>Fortalece a palavra-chave no texto, além da sensação visual para o leitor, muito usada em jornais.</p>

<h3>Conteúdo: &lt;img&gt;</h3>

<pre>&lt;img src="" alt="" title="" /&gt;</pre>
<p>O <a href="https://joesynth.wordpress.com/2019/02/11/o-robo-nosso-de-cada-dia/">*googlebot*</a> não lê a imagem em si, daí a referência é o nome do arquivo de imagem. Ela deve estar dentro do contexto específico do texto. Isso fará com que ela tenha relevância.</p>
<pre><strong>src=""</strong></pre>
<p>Escreva minúsculo, sem acentos, com keywords. <br />Separação de palavras: não há regra; use *underline* ou *dash*, este é o mais comum.</p>
<pre><strong>alt=""</strong></pre>
<p>Útil ao Google, deficientes visuais. Descreva a imagem no alt. Evite repetir o mesmo da img.</p>
<pre><strong>title=""</strong></pre>
<p>É texto de usuário (ao passar o mouse sobre). Use palavras-chave relacionada, pode ser título do post.</p>
<p><strong>Contexto</strong> O Google deve saber do que se trata uma imagem, então nomes e textos influenciarão _por ex.: se uma foto de "serra" é referente a uma serra de cortar ou um tipo montanha, se um "banco" é de dinheiro ou um banquinho de se sentar.</p>
<pre><del>imagem.jpg</del>        👎️ Não use nome genérico
<del>DSC001</del>            👎️ Não use nome padrão de máquina
<del>IMAGE001</del>          👎️ Não use  nome padrão de máquina
<del>gdf47565.jpg</del>      👎️ Não recomendado
desconto-tv.jpg   👍️ Nome recomendado, por ser amigável. Palavra-chave: use.<br />alt="Como rankear um conteúdo para várias palavras,"  Note que aqui é igual ao título
alt="Descontos em televisores,"  
title=""
</pre>

<h6>Imagem - Exercício</h6>

<p>Crie imagens e salve-as usando boas práticas. Teste palavras com acento, etc; (ou simplesmente escreva num leitor de texto).</p>
<p>Outros conteúdos multimídia no *seuartigo*, como vídeo, é bom ter em seu artigo.</p>
<hr />

<h2>SEO e Link</h2>


<h3>Atributos href e title + âncora</h3>

<pre>&lt;a href="" title=""&gt;Âncora&lt;/a&gt;        </pre>
<p>Title não é tão relevante (para mecanismo de busca, mas pro usuário pode ser). Use para dar mais informações (dicas) sobre o link (daí, não use em link que não precisa para não causar otimização demais. Não deve-se fornecer informações repetidas portanto). Não encha com palavras-chave, não duplique o título do tópico. Podemos pensar que o title cobre informações que estão faltando no texto âncora. ACESSIBILIDADE xxxx tags?<br />Âncora (texto sublinhado, parte azulada) é de importância.</p>
<pre>&lt;a href="https://www.joesynth.wordpress.com" title="Este é um link para o blog joeSynth"&gt;JoeSynth&lt;/a&gt;</pre>
<blockquote>
<p>⚠️ "*Otimize para seus usuários, em vez de mecanismos de busca*" [searchenginejournal.com].</p>
</blockquote>
<p><strong>href</strong> Com nomes chave (use dash se preciso) e nome cópia do href.</p>
<pre>Ex:<br />&lt;a href="http://www.gcar.com/busca" title="Encontre seu carro em Goiânia"&gt;Comprar Carros em Goiânia&lt;/a&gt;  </pre>
<p>Palavras-chave: prefira usar na âncora, e que sejam relevantes para o usuário e o Google. Tente indicar o conteúdo do link.</p>
<p class="style5">"Boas âncoras geram bons resultados".</p>
<p>Links internos: devem ter palavras relevantes.<br />Links externos: embora o usuário possa sair do seusite, há um lado bom, pois ⚠️ ⚠️O Google é o site que mais saímos dele a partir de links.</p>
<p>👍️ Sua reputação também é definida por quem você linka, daí, ligue para quem tem a ver com você, ou que você confie. <br />👎️ Não ter ligação para ninguém não é bom _equivaleria a estar isolado, sem ninguém que seusite indique.</p>
<hr />

<h2>Linkagem interna</h2>

<p>[Vide comentário]</p>

<h6>Ciclo infinito</h6>

<p>artigo A =&gt; artigo B artigo B =&gt; artigo C artigo C =&gt; artigo...</p>
<p>Links que apontam um para o outro. Página A linka para B, B para C...<br />Interligar todos os posts é importantíssimo para passar relevância por todo seusite.</p>

<h6>Artigo importante</h6>

<p>página principal =&gt; artigo importante<br />artigo A =&gt; artigo importante<br />artigo B =&gt; artigo importante</p>
<p>Vários links apontando para um artigo. Ou seja, o artigo importante recebe link logo na página principal do seusite, e irá ter mais links noutras áreas do site. É melhor ter vários.<br />Caso use um "Clique Aqui" associe-o no texto com palavra-chave.</p>

<h6>Internal Link</h6>

<p><span style="color: #0000ff">Link Interno</span>.</p>
<p>seusite =&gt; seusite</p>
<p>página principal =&gt; artigo A<br />página principal =&gt; artigo B<br />página principal =&gt; artigo C</p>
<p>Seusite aponta para seusite. A maioria é de navegação, e é bom ter. Pagina inicial do seusite é a mais relevante, e passa relevância pra outras páginas do seusite. Assim, link de post na inicial passa relevância dela para o post.</p>

<h6>Outbound Link</h6>

<p><span style="color: #0000ff">Link de Saída</span>.</p>
<p>seusite =&gt; outrosite</p>
<p>Link do seusite apontando pra outrosite.</p>

<h6>External Link</h6>

<p><span style="color: #0000ff">Link Externo</span>.</p>
<p>seusite =&gt; outrosite (ou outrosite =&gt; seusite)</p>
<p>Link do seusite para outrosite, e vice-versa.<br />Normalmente quem trabalha com SEO considera como Backlinks.</p>
<p>Link para site de "peso", como Wikipedia, Globo...</p>

<h6>Inbound Link</h6>

<p>Link de Entrada.</p>
<p>outrosite =&gt; seusite</p>
<p>Link doutrosite apontando para o seusite. Alguns chamam de “link externo”.</p>

<h6>Backlink</h6>

<p>seusite =&gt; página de seusite<br />ou<br />outrosite =&gt; página de seusite</p>
<p>Link que aponta para uma página do seusite. Pode vir do seusite ou doutrosite.</p>
<p>Qualquer ligação recebida de uma fonte na web (página web, diretório, site ou domínio de nível superior) para outra fonte na web.<br />O número de backlinks indica popularidade ou importância de seusite ou página. É um dos fatores considerados pelo Google para determinar o PR de uma página Web. Além de SEO, os backlinks de uma página podem ser de interesse pessoal, cultural ou semântica significativa: eles indicam que alguém está prestando atenção nessa página.</p>

<h3>Outros Termos</h3>

<p>*Outrosite* linka para o *seusite*; link *doutrosite* que aponta para o *seusite*; links recebidos por um site ou página da web. É um dos fatores que os mecanismos de busca consideram para posicionar uma página. Eles bem rankeados é melhor. Relacionados ao seu conteúdo é melhor.</p>
<p>x</p>

<h3>No follow</h3>

<p>Esses links são "cegos" para o robô do Google, ou seja, ele ignora o *link*, não transmite PageRank ou Autoridade de Página.</p>
<p>Use em comentário ou *link* para site em que não confia.<br />Youtube por exemplo usa *nofollow* para sites externos.</p>
<p><strong>Link outrosite</strong> É bom fazer ligação para *outrosite*, desde que: <br />- Tenha relevância.<br />- Tenha conteúdo relacionado ao *seusite*.</p>
<pre><u>Planejador do Google</u>                Isso porque nosso artigo de exemplo é sobre palavras-chave</pre>
<p>x</p>

<h3>Nofollow</h3>

<p><strong>link juice</strong> parcela de PR transmitida de uma página para outra através de um *link*.</p>
<pre>rel=”nofollow” </pre>
<p>Controla a distribuição do *link juice*. Usado nos links em que não se quer passar PR.</p>
<p>Recurso (atributo) para o webmasters dizer aos mecanismos de pesquisa: "não siga este link". Ou seja, o atributo indica ao robô para ignorar o link, na hora de analisá-lo. Use num link pra *outrosite* quando este não for confiável ou não ter relação com o assunto da *suapágina*.</p>
<table width="100%">
<tbody>
<tr valign="top">
<td width="50%">
<div align="center"><strong>Nofollow Links</strong> <br />Link "cego" para o Google. É obtido com * rel = “nofollow”*</div>
</td>
<td width="50%">
<div align="center"><strong>Dofollow Links</strong> <br />Link comum e que é visto pelo robô do Google. Não usa atributo nofollow, seja consciente ou inconscientemente.</div>
</td>
</tr>
</tbody>
</table>
<pre>&lt;a href="signin.php" rel="nofollow"&gt;sign in&lt;/a&gt;
</pre>
<pre><u>Clique aqui</u> para saber mais sobre nossos <u>vídeo-games</u>.      Deixe nofollow no “clique aqui”</pre>
<p>Ou exemplo é um anúncio com três links: título, preço e imagem. Aqui somente o nome do produto deve estar sem nofollow.</p>
<p><strong>Ex.:</strong> página possui 10 links, seja externos ou internos. Desses, 8 possuem ”nofollow”, ou seja, não passam link juice. Assim, todo o PR da *suapágina* será direcionado para as páginas referenciadas pelos 2 links que sobram.</p>
<table width="100%">
<tbody>
<tr valign="top">
<td width="50%">
<div align="center">Indicado o uso de nofollow <br /><span class="style1">para evitar perda desnecessária de link juice</span>
<table width="100%">
<tbody>
<tr valign="top">
<td width="50%">
<div align="center">Login<br />cadastro/ registro<br />logo<br />contato</div>
</td>
<td width="50%">
<div align="center">política de privacidade<br />termos de uso<br />comentários...</div>
</td>
</tr>
</tbody>
</table>
</div>
</td>
<td width="50%">
<div align="center">Não deve usar nofollow<br /><span class="style1">permitindo a passagem de link juice</span>
<table width="100%">
<tbody>
<tr valign="top">
<td width="50%">
<div align="center">Produtos e serviços<br />cursos<br />tutoriais</div>
</td>
<td width="50%">
<div align="center">artigos<br />blog<br />ferramentas...</div>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
</tbody>
</table>
<p>"<br />Prefira passar link juice para os links que possuam palavras-chave em seu texto (anchor text). Por exemplo, links do tipo “Leia Mais”, “Clique aqui” e “Leia o Artigo Completo”, não deveriam, à princípio, passar link juice, sendo assim nofollow. Nesse último caso, deixe o link juice fluir apenas através do link que contém o título do artigo/post.<br />"</p>
<p>"<br />Muitas pessoas usam o link “Home” no menu do site. Recomenda-se usar nofollow nesse link. Sendo assim, insira um link com as palavras-chave da página principal no rodapé do site, sem o atributo nofollow. Você pode observar essa técnica no próprio site da SEO Master.<br />"</p>
<p>Priorize as páginas mais importantes de seusite, utilizando corretamente o atributo rel=”nofollow” de forma a direcionar o link juice de seusite.</p>
<p>Privilegie a passagem de link juice através de links com as principais palavras-chave em seu texto, pois isso ajudará no processo de otimização de sites.</p>



## Bônus

Abaixo, juntamos exemplos de SEO e de MKT de conteúdo.
● Ghost — plataforma de blogs e newsletters otimizada para SEO.
● Plume — plataforma federada de publicação (ActivityPub).
● Hugo — gerador de sites estáticos otimizados para SEO.



É isso!  
Grande abraço.  
\o_  

<!--
https://moz.com/learn/seo/title-tag https://moz.com/learn/seo/meta-description https://youtu.be/alAiVKAD-VQ

support.google.com/webmasters/answer/79812?hl=pt-BR [26:00min] https://youtu.be/KrZy6U4h_JY https://www.youtube.com/watch?v=tD9L5amsrHM&amp;list=PL0E0B79132BAD78C8&amp;index=5


[47:00min] https://youtu.be/ucYqRlc5fpw][SOBRE h3 E h4]

SEO &amp; Link:<br />youtu.be/JOnSOoSE1Ns?list=PL5KE4trgsCLrrEVmekQo7x0G2_uBX3cdR [Linkagem interna]
-->
