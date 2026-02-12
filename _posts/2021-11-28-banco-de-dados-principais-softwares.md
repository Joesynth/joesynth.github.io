# Banco de dados: principais softwares

Olá!

Apresentamos um conjunto de ferramentas de bancos de dados, seja você programador, MEI ou meramente usuário comum de computador.

Embora nosso foco seja a linguagem JavaScript, aqui temos um repertório de banco de dados que vai das excelências aos mais simples. Fique atento aos nomes!

<pre>Legenda:
✏️ • soft, autor/desenvolvedor.
★ ano.
🖥️ plataforma (OS Linux, Mac etc).
🔥️ tecnologia
👥️ usuário
🔗️ site, <em>lnk</em>. 
💽️ repositório. 
📜️ licença.
</pre>

## Banco de dados
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/330px-SQLite370.svg.png" alt="banco de dados SQLite" width="120" /> <span class="text-primary"><strong>SQLite</strong>.</span>  
D. Richard Hipp.  
★ 1995.  
🖥️  Cross-platform.  
🔥️ SGBD; SQL, servidor, Node.js.  
📜️ Domínio Público 🎈.  
🔗️ sqlite.org

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/100px-MySQL_logo.svg.png" width="80" /><strong>🇸🇪 MySQL</strong>.  
Pode ser instalado localmente (no seu sistema ou servidor).  
✏️ Oracle Corporation ★ 1995.  
🖥️ Multiplataforma.  
🔥️ SQL, Node.js; SGBD.  
👥️ NASA, US Army, US Federal Reserv Bank, Cisco Systems, Facebook, Bradesco, Dataprev...  
📜️ GPL 🎈.  
🔗️ MySQL.com  


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/250px-MongoDB_Logo.svg.png" width="120" />• <span class="text-primary"><strong>MongoDB</strong>.  
Não relacional, é uma aplicação de alta performance, orientado a documentos. Armazena grandes arquivos, bem como uma quantidade imensa.  
🖥️ Multiplataforma.  
🔥️ NoSQL, json, Node.js, PHP, C#, Java, Perl...  
👥️  globo.com, Facebook, source forge.  
📜️ Softwarw Livre 🎈.
🔗️ mongodb.com

<img class="alignleft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/220px-Firebase_Logo.svg.png" width="120" />• <span class="text-primary"><strong>Firebase</strong>.</span>
J. Tamplin, A. Lee, 2011 / Google.
🔥️ NoSQL, Java, JavaScript, Node.js, Android, iOS...
🔗️firebase.google.com

• <strong>PostgreSQL</strong>.
✏️ Uni. de Berkeley ★ Anos 80.  
🖥️ Multiplataforma.  
🔥️ Node.js, SGBD (Característica).  
👥️  GitLab.  
📜️ Softwarw Livre 🎈.  
🔗️ postgresql.org; postgresql.org.br  

• <strong>Supabase</strong>.  
Um Firebase, mas de código aberto. Popular, usa PostgreSQL.  

• <strong>Oracle</strong>.  
✏️ Oracle ★ Anos 70.  
🔥️ SGBD (Característica).  
🔗️ oracle.com  


• <strong>SQL Server</strong>.  
✏️ Microsoft, anos 80.  
🖥️ Windows, Linux.  
🔥️ SGBD (Característica).  
🔗️ microsoft.com/sqlserver  


• <strong>dBASE</strong>[Borland].  
★ Anos 70.  
🔥️ SGBD (Característica).  
👥️ Apple II, Apple Macintosh, PC's IBM.  


• <strong>Firebird</strong>.  
✏️ Fundação FirebirdSQL ★ 2000.  
🖥️ Multiplataforma.  
🔥️ SGBD (Característica).  
🔗️ firebirdsql.org  


• <strong>🇫🇮 MariaDB</strong>.  
Pode ser instalado localmente (no seu sistema ou servidor), ou utilizado como um serviço em nuvem.  
✏️ MariaDB Foundation/2009.  
🖥️ Linux, OS X etc.  
📜️ GPL 🎈.  
🔗️ mariadb.com  


## Banco de dados online
Note que podem ser pagos ou gratuitos.  

    • Google Cloud.
    • AWS (Amazon Web Service).
    • Temo IO (baseado em PostgreSQL).
    • SQL dbm (para modelagem de dados, compatível com MySQL, PostgreSQL etc).


## Softwares e ferramentas de danco de dados

**🇩🇪 Base** (LibreOffice): Software de banco de dados que internamente é SQL _diferente do Excel.
🤔 Note que a linguagem SQL é a excelência de banco de dados, usada por militares, instituições financeiras e mega corporações.  
O Base é um dos melhores programas para substituir planilhas do tipo Excel, devido as limitações delas.

**Json**: é um formato de arquivo, na verdade; porém para estruturar dados.  
👥️ Usado pelo Banco Central, Exército Brasileiro, Magazine Luiza.  
😄 Nós aqui no blog também usamos .json!  
Vide [formato de arquivo de json](/json).  

**🇨🇭 phpMyAdmin**: Interface gráfica para MySQL; gerenciador de BD para administração do MySQL pela Internet.
✏️ Projecto phpMyAdmin,.
★ Anos 90.
Administração do MySQL e MariaDB pela Internet.
🖥️ Multiplataforma. SQl.
🔥️ Permite exportar dados (CSV, XML, JSON, YAML etc)
📜️Softwarw Livre 🎈.
Nota: JSON e YAML permitem algo mais complexo que CSV.

**HeidiSql**: Opção ao phpAdmin. Desktop, não é instalado no servidor. É para quem prefere um app instalado no computador, e parecido ao phpAdmin (gerenciar tabelas e banco de dados).
🖥️ Linux, Win, Mac.
🔗️ heidisql.com

**Workbench**: Ferramenta gráfica para MySQL.
✏️ Oracle Corporation/2003
🖥️ Windows, OS X, Linux
🔥️ Permite exportar para Excel.
🔗️ mysql.com/products/workbench/

**Sequelize**.
🔥️ ORM MySQL, MariaDB, SQLite, PostgreSQL, Node
🔗️ sequelizejs.com

**Navicat**.
🔗️ navicat.com

**Sequel Pro**.
🔥️ Node.js
🔗️ sequelpro.com

## Node - módulos
Módulos possíveis de se instalar em ambiente Node.js.
<pre>npm install mysql
npm install mongodb
npm install mongoose 'mongoose' 	# Faz todo processo de conexão com banco de dados MongoDB.
npm install pg
npm install sqlite3
npm install firebase --save (firebase)
</pre>
\o/

<!--
-https://www.devmedia.com.br/conceitos-fundamentais-de-banco-de-dados/1649
-https://pt.wikipedia.org/wiki/Banco_de_dados
-https://en.wikipedia.org/wiki/Database_design#See_also

- Estrutura de banco de dados
- GDBS distribuídos
- Integridade referencial
- Álgebra relacional
- Cálculo relacional
- Mapeamento objeto-relacional
- Modelo relacional
- Banco de dados objeto-relacional
- Processamento de transação

// Conceitos · Null · Chave candidata · · Superkey · Surrogate key · Axiomas de Armstrong · NoSQL

// Objetos Relação (Tabela) · Vista · Trigger · · Cursor · Log de transação · Transação · Índice · Procedimento armazenado · Partição

//Componentes Controle de concorrência · Dicionário de dados · JDBC · ODBC · Linguagem de consulta · Query optimizer · Query plan

//Funções Gestão e automatização · Otimização de consulta · Replicação

// Produtos disponíveis no mercado: Orientados a objeto (Comparativo) · Relacionais (Comparativo) · Orientados a documento · NoSQL · NewSQL

-->

<hr />

<img src="https://joesynth.files.wordpress.com/2021/10/aprenda_programacao.png" alt="Aprenda Programação - HTML - JS - CSS" width="310" />
