{% for item in site.data.termos %}
  <em>{{ item.ingles }}</em> &gt; <strong>{{ item.portugues }}</strong> 
  <br /> 
  <p>{{ item.descricao }}</p>
  <hr />
{% endfor %}
