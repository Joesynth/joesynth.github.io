# Banco de dados - Minidicionário


<pre>ft: antigo site <del>estudio596.com</del>.
</pre>

<pre class="small">Aggregate Function Função agregada
	● Função que executa operações aritméticas sobre todos os valores de um campo, em todos
	os registros de um BD ou de uma visão do BD. O dBASE possui as aggregate functions: média, soma
	(sum), mínimo (menor valor), máximo (maior valor), count (contagem). 
Aggregate Operator
	● Vide operator (prog). 
Append Acrescentar
	● Incluir dados no final de um arquivo ou de um BD. 
Backwards Search Pesquisa para trás
	● Pesquisa que começa na posição do cursor e prossegue para o início do BD, e não para o final
	como de praxe. 
BD Banco de Dados
	● Database em inglês.
Binary Search Pesquisa Binária
	● Algoritmo de pesquisa que evita a forma sequencial (muito lenta). 
Boolean Operator
	● Vide operator (prog). 
Browse Mode Modo Browse
	● Modo operacional no qualos registros de dados são apresentados em formato de linhas e colunas. 
	Vide modo de edição. Em alguns programas são usados os termos visão de lista ou visão de tabela. 
Calculated Field Campo Calculado
	● Sinônimo de campo derivado (derived field).. Campo com resultado de cálculos realizados sobre
	outros campos. 
Chave primária (Access)
	● Identifica de forma exclusiva cada registro da tabela, do mesmo modo que, uma placa de carro
	identiica um carro. Num exemplo, duas tabelas precisam estar coordenados de forma que mostrem
	informações do mesmo pedido. Essa coordenação é feita por relacionamentos entre as tabelas. Já
	um relacionamento funciona pela coincidência de dados em campos chave (geralmente um campo com
	o mesmo nome em ambas as tabelas). Esses campos coincidentes são a chave primária e, uma chave
	externa da outra tabela. É possível, por exemplo, associar funcionários aos pedidos pelos quais
	são responsáveis criando-se um relacionamento entre os campos CódigoDoFuncionário.
Chave externa (Access)
	● Vide chave primaria.
Collate
	● Vide Sort. 
Coluna
	● (Access)
Consulta
	● (Access) 
Comparison Operator
	● Vide operador (prog). 
Database
	● Banco de dados, BD.
Database Management Program Gerenciador de bancos de dados
	● Soft com recursos para a recuperação, modificação, eliminação e inclusão de dados. Há do tipo
	'gerenciadores de arquivos' (também chamado de gerenciador de banco de dados não-relacionais), 
	'gerenciador de banco de dados relacionais', gerenciadores de banco de dados de texto". O banco
	de dados classifica registros de forma que, uma locadora por exemplo, pode o fazer por título, 
	categoria, disponibilidade, etc. Vide DBMS. 
Database Design Projeto de BD
	● A escolha e organização dos campos de um BD. Erros como redundância e campos repetidos devem
	ser evitados ou minimizados. 
Database Structure Estrutura do BD
	● A definição dos registros nos quais as informações são armazenadas, incluindo: o número do
	campo; o nome do campo; e um conjunto de definições para cada campo, como o tipo de informações
	que ele contém, seu tamanho e outras características. Abaixo um exemplo:
	TÍTULO The Blue Fountain 
	CATEGORIA Infantil
	CLASSIFICAÇÂO G
	PREÇO VAREJO $24.95
	ALUGADO PARA 2596-7777
	DEVOLUÇÂO 12/31/90 
	Primeiro campo é alfanumérico, de 60 carateres.
	Último, é campo de data, no formato mm/dd/aa.
	Vide Data type (tipo de dados). 
Data Deletion Eliminação de dados
	● Operação que elimina registros mediante critérios específicos. 
Data Dictionary
	● Dicionário de Dados.
Data Field Campo de Dados
	● Espaço dentro de um registro destinado a uma informação específica. Assim, os campos de dados 
	correspondem a colunas. 
Data Independence Independência de dados
	● Uso de técnicas de armazenamento que permitem aos usuários acessar os dados sem que seja 
	preciso saber onde estão localizados fisicamente.
Data Integrity Integridade de dados
	● A exatidão e a consistência interna das informações armazenadas num BD. Os bons BDs asseguram
	a integridade dos dados dificultando ou impedindo que sejam apagados ou alterados acidentalmente,
	bem como eliminando a redundância de dados (vide data redundancy)
Data Mask Máscara de Dados
	● (vide Field Mask).
Data Manipulation Manipulação de dados
	● As quatro operações básicas de manipulação de dados: recuperação, alteração, eliminação e
	inclusão de dados. 
Data Modification modificação de dados
	● Operação que atualiza registros conforme critérios, estes definidos pelos usuários através da 
	query language. Query ex.:
	UPDATE estoque
	SET preço-preço *1.15
	WHERE fornecedor - "CC" 
	Acima, temos:
	"estoque" é o BD.
	"fornecedor" é o campo Fornecedor.
Data Record Registro de dados
	● O mesmo que linha (em BD relacionais). Esta linha contém todas informações referentes a um 
	elemento do BD. Ex: Numa locadora de filme, há o título (do vídeo), categoria (terror, 
	aventura...), telefone do cliente, data devolução, etc. 
Data Retrieval
	● Recuperação de Dados.
Data Redundancy Redundância de Dados
	● Repetição dos dados em dois ou mais registros. 
Data Record Registro de Dados
	● Nos gerenciadores de BD, um conjunto completo de elementos relacionados entre si. Em bancos
	de dados relacionais, registro de dados é sinônimo de linha (line).
Data Table
	● Tabela de dados. 
Data Type Tipo de dados
	● Define o tipo de dado pode ser armazenado em cada campo (da coluna, tabela). Cada campo só 
	armazena um tipo de dado.
	Ex. no Access:
	_ Texto (255 caracteres) ou memorando (65535 caracteres) 
	_ lógico, data, moeda, hiperlink 
	_ Número ou núemero sequencial.
	_ Objeto OLE (elementos gráficos, sons...) 
	Vide field mask (máscara de campo). 

DBMS Database Management System Sistema de Gerenciamento de Banco de Dados (SGBD)
	● Gerenciador de banco de dados. O Sistema de Banco de Dados permite armazenar, organizar e
	recuperar dados. 
Softs DBMS (SGDB) 
	dBASE [Jet Propulsion Laoratory, 81]
	dBASE II [] (relacional)
	dBASE III [84] 
	dBASE IV [88] (com SQL) 
	Access [] 
	SQL Server [Microsoft, Sybase, 88] (relacional)
	Oracle [Oracle Corporation] (relacional)
	MySQL [D.Axmark, A.Larsson, M.Widenius, déc 80] 
Derived Field Campo Derivado
	● Vide Calculated Field. 
Descriptor
	● Parâmetro usado para categorizar os records de modo que todos os registros referentes a um
	mesmo assunto possam ser recuperados em conjunto. Ex: Numa locadora, o descriptor Aventura
	apareceria nos records de todos os filmes do gênero (categoria) ação. 
DIF Data Interchange Format [Software Arts]
	● Formato de arquivo padronizado que permite a troca de dados entre marcas ou versões diferentes
	de programas. 
DML Data Modification Language
	● Um subconjunto da SQL, envolvendo SELECT, UPDATE, INSERT, DELETE.
Edit Mask Máscara de Edição
	● Vide field mask (máscara de campo). 
Field Campo
	● No Microsoft Access é sinônimo de coluna. 
Field Definition Definição do campo
	● Atributos que definem o tipo de informações que o usuário pode digitar em um campo de dados.
	Também define a forma como o seu conteúdo aparece na tela. No dBase há:
	Nome do campo
	Tipo de dados (que o campo aceitará) 
	Largura do campo (número máximo de caracteres) 
	Número de casas decimais (caso campo numérico) 
	Atributo de índice
	Máscara de campo 
Field Mask Máscara de Campo
	● Igual field template, data mask, edit mask. Define no campo os tipos de dados aceitos. Se o
	usuário digitar dados diferentes da máscara do campo, ocorrerá msg de erro. Vide data type 
	(tipo de dados). 
Field Name Nome do Campo
	● Nome atribuido a um campo de dados, facilitando assim a identificação do seu conteúdo. 
File Privilege Privilégio do Arquivo
	● Nos gerenciadores de BD em rede, determina o que os usuários podem fazer com um BD protegido.
	No dBase por exemplo, as opções são DELETE, EXTEND, READ e UPDATE. Veja privilégio do campo. 
Field Definition Definição do Campo
	● Os atributos que definemo tipo de informação que o usuário pode digitar num campo de dados,
	também a forma como o seu conteúdo aparece na tela. No dBase a field definition inclui nome do
	campo, tipo de dados, largura do campo, número de casas decimais, atributo de índice, máscara
	de campo (vide máscara de campo e tipo de dados) 
Field Privilege Privilégio do Campo
	● Determina o que os usuários podem fazer com o conteúdo de um campo de dados em um BD protegido. 
Function Função
	● Em BD e linguagens, uma rotina especial que sempre produz resultado (lógico, numérico ou
	alfanumérico), ao contrário dos comandos, que produzem operações. 
Gerenciamento de banco de dados relacionais
	● Trabalha com tabelas, sendo, por exemplo, uma locadora, uma armazena números telefone e nomes
	de clientes, e, outra os títulos alugados. Através duma Query resultaria na recuperação dos dados.
Identifier Identificador
	● Valor (numérico ou alfanumérico) que identifica claramente as informações contidas num registro
	de dados.
Index Índice
	● Um arquivo compacto que contém informações (chamadas ponteiros) sobre a localização física dos
	records dum arquivo de BD. Quando o BD é pesquisado ou classificado, o programa usa apenas o index
	ao invés de todo o arquivo, assim, as operações se tornam mais rápidas. Há o Active Index (índice 
	ativo), o qual é o arquivo utilizado, no momento, para determinar a ordem na qual os records serão
	apresentados na tela ou impressos. 
Join Junção, ligação
	● Em BD relacionais, uma operação de recuperação de dados na qual uma nova tabela é construída 
	a partir dos dados de duas ou mais tabelas já existentes.
Line Linha
	● Sinônimo de registro, regisro de dados. 
List Lista, lista encadeada
	● Uma estrutura de dados que relaciona os elementos de dados a um ponteiro que indica a sua 
	localização física dentro do BD. Ex: um BD pode ser mostrado na tela em ordem alfabética, embora
	os registros físicos ainda estejam armazenados na ordem em que foram cadastrados. 
Logical Operator
	● Vide operator (prog). 
Mask
	● Máscara.
mdb 
	● Formato de arquivo do Acess. 
MMC
	● Microsoft® Management Console SQL Server 
Multilevel Sort Classificação em vários níveis
	● Operação de classificação que usa dois ou mais fields para determinar a ordem na qual os
	records serão organizados. Ex: Num BD bibliográfico a primeira chave (chamada chave principal
	ou chave primária) é SOBRENOME, assim, todos records são classificados pelo último nome do autor,
	e a segunda chave é NOME, usada só quando o sobrenome for igual.
ODBC Open Database Connectivity Conectividade Aberta de BD [Microsoft 92]
	● Padrão para acesso a SGDB. Em outras palavras, os dados são compartilhados entre bancos de 
	dados e programas. Os drivers ODBC usam a linguagem de consulta estruturada (SQL). Tem uma 
	implementação da SQL. O Access instala automaticamente o driver ODBC do Microsoft SQL Server 
	(Sqlsrv32.dll) e outros.\\ API de acesso de dados o qual suporta acesso para qualquer fonte de
	dado para o qualo driver ODBC está disponível. Está alinhado com a ANSI (confirmar na web). 
QBE Query by Example [IBM]
	● Técnica de pesquisa e programa (soft). 
Query Pesquisa, consulta.
	● No (gerenciador de BDé a nstrução pela qual o usuário especifica os dados que devem ser 
	recuperados. Isso se deve pq, o principal objetivo do gerenciador de banco de dados é, mostrar 
	as informações que o usuário requer naquele momento e não, todos os dados. As queries especificam
	os critérios de extração das informações. Orientam o computador na obtenção das informações 
	desejadas, bem como na supressão das indesejadas. Tabela: independência de dados, linguagem de 
	query, SQL. 
Query Language Linguagem de Consulta.
	● Query Languages, Linguagens de Consulta. Referente a gerenciador de BD. Uma linguagem de 
	recuperação e edição de dados que permite ao usuário especificar apenas os critérios que o 
	programa utilizará para acessar e apresentar as informações armazenadas no BD. Ex: dBase, SQL.
	Vide gerenciador de BD, QBE, query, SQL. 
Record Registro
	● Vide registro de dados. 
Registro (de dados, em BD relacional) Linha.
	● É linha horizontal da tabela a qual contém todas as informações relativas a um elemento do BD.
Relational database management gerenciamento de BD relacionais [Codd, 70]
	● O termo Relational refere-se ao armazenamento e recuperação de dados na forma de tabelas.
	O programa pode trabalhar com duas tabelas ao mesmo tempo, relacionando as informações através
	de ligações baseadas em colunas ou campos comuns. Todos os dados devem ser tratados como tabelas,
	e o resultado de qualquer query será uma nova tabela. 
Relational Model Modelo Realacional.
	● Vide gerenciamento de BD relacionais. 
Relational Operator
	● Vide operator (prog) 
Repeating Field
	● Campo Repetido.
Report Relatório.
	● Veja campo calculado.
Selection Seleção
	● A recuperação de registros usando uma query. 
SGBD Sistema de Gerenciamento (ou Sistema Gerenciador) de Banco de Dados
	● Vide DBMS.
Sort Classificar, classificação, Collate.
	● Ordenar os registros por critério específico.
Sort Key
	● Chave de classificação.
Source-code
	● Código-fonte.
SQL Structured Query Language [IBM, anos 70] Linguagem de Consulta Estruturada.
	● Início dos anos 90 já se tornava comum em redes do tipo cliente/servidor, como forma de 
	permitir que microcomputadores acessem informações armazenadas em BDs corporativos. Abaixo 
	algumas características da linguagem:
	_ Ela é independente dos dados (o usuário não precisa indicar de que maneira os dados devem
	ser acessados). 
	_ SQL usa 'linguagem declarativa'. 
	_ É baseada em tabelas, onde o resultado das queries são também tabelas de dados. 
	_ Quanto a tabela, Coluna é campo de dados e linha é registro de dados.
	_ É uma linguagem simples (com 30 comandos), onde funções básicas são Select, Update, Insert,
	Delete (recuperação,atualização, inclusão, exclusão). 

	Básicos (ou Essências de Manipulação de Dados)
	Select (Recuperação)
	Update (Atualização)
	Insert (Inserção, inclusão de dados) 
	Delete (Exclusão de dados)

	SQL, Exemplo:
	SELECT título, classificação
	FROM estoque
	WHERE categoria - "infantil"
	ORDER BY título
	Acima equivale a "Mostre-me o TÍTULO e a CLASSIFICAÇÂO das fitas de vídeo do banco de dados de
	Estoque cujo campo CATEGORIA contenha 'infantil', e ordene o resultado por TÍTULO". Conforme já
	dito, SELECT é recuperação.

Table Tabela
	● Em gerenciadores de bancos de dados relacionais, a estrutura básica de armazenamento e 
	apresentação dos dados. Cada linha é um registro e cada coluna um campo. 
Update
	● Atualização. 
View Visão
	● Apresentação parcial do BD na tela.
</pre>

É isso.  
\o/

[oes: tit !]
