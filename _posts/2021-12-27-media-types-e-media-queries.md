# Media Types e Media Queries

- Media Types
- Media Queries

Olá!

<h3>Media Types</h3>
Direcionam um bloco css pra um determinado tipo de meio de acesso. Abaixo os mais comuns:
<table width="100%" border="1">
<tbody>
<tr valign="top">
<td width="50%">
<div align="center"><strong>Screen</strong>
Para monitores ou dispositivos com telas coloridas e resolução adequada.</div></td>
<td width="50%">
<div align="center"><strong>Print</strong>
Para impressoras, dando uma versão de impressão do site.</div></td>
</tr>
</tbody>
</table>
<h5>Sintaxe</h5>
<pre>@media tipodemidia {
  bloco para o tipodemidia 
} 
</pre>
<strong>@media</strong> é uma regra
<h5>Exemplo 1</h5>
<pre>@media screen {
  .title h2 {font-size: 2.5em; color: red; font-weight: 700;} 
} 
</pre>
<h5>Exemplo 2</h5>
<pre>/* Destop */
@media screen{
    html,body{
	   background:000;
    }
} 
/* Celulares */
@media handheld{
    html,body{
	   background:000;
    }
} 
</pre>
<h3>Media Queries</h3>
Uso de Media Type (por exemplo screen) e ao menos uma expressão, esta entre parênteses, e determinando em qual situação o bloco será utilizado.
<pre>@media screen and (min-width: 320px) {
  .title h2 {
    font-size: 2.5em;
    color: red;
    font-weight: 700;
  } 
} 
</pre>
<h5>Breakpoints</h5>
São pontos de ajustes. Ou seja, utilização de diferentes estilos, e conforme é detectado um tipo de dispositivo, o CSS ideal era selecionado automaticamente e aplicado. Assim tinha-se uma folha de estilo para monitores alta definição, impressão, etc.

Faça comentários no css, iniciando com "mobile first" bem como outros tipos de dispositivos.
<pre>			
/* ========= MOBILE FIRST ========= */
Criação começa nos dispositivos de telas menores e conforme a tela aumenta reajusta-se a tela.
			
/* SMALL DEVICES - SMARTPHONES */
@media screen and (min-width: 480px) {
  .title h2 {color: green;}   <span class="style1">esta é a característica que será mudada</span>
}
			
/* SMALL DEVICES - TABLETS */
@media screen and (min-width: 768px) {
  .title h2 {color: yellow;}  <span class="style1">esta é a característica que será mudada</span>
}

/* SMALL DEVICES - TABLETS &amp; DESKTOPS*/
@media screen and (min-width: 960px) {
  .title h2 {color: yellow;}  <span class="style1">esta é a característica que será mudada</span>
}
			
/* LARGE DEVICES - WIDE SCREENS: Aqui o menu do tipo botão de celular pode sair e surgir o menu horizontal (ou vertical)*/
@media screen and (min-width: 1280px) {
  .title h2 {color: pink;}    <span class="style1">esta é a característica que será mudada</span>
  .btn-menu {display: none;}
  .menu {width: auto; float: left; display: block !important;}
}
</pre>
<pre>oragmid: como utilizar Media Queries para site...
@media (max-width: 600px) {
    div {
        background: blue;    
    }
}
</pre>  


Alguns exemplos (Todos CSS2).
<em>media="all" /&gt; </em> é para todos os dispositivos.
<em>media="print" /&gt; </em> é para criar um CSS para impressão.
<em>media="tv" /&gt; </em> é para dispositivos TV.



É isso! Grande abraço.  
\o/
