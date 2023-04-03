1º Crie um projeto Angular: ng new app;

<br>

2º Abra o Visual Studio Code e selecione a pasta do projeto (no meu caso é app);

<br>

3º Vamos criar nosso componente, responsável pela estrutura HTML, CSS e TS: <b>ng g c principal</b>;

<br>

4º Vamos criar nosso serviço, responsável pelas requisições HTTP: <b>ng g s requisicao</b>;

<br>

5º Finalizando essa parte de criação, vamos criar um PIPE, responsável por filtrar dados: <b>ng g p filtrar</b>;

<br>

6º app.component.html iremos referenciar nosso componente principal;

<br>

7º Crie uma pasta chamada modelo e crie um arquivo chamado Foto.ts (veja o exemplo os atributos dessa classe);

<br>

8º Implemente o serviço, veja o arquivo. Para o nosso exemplo, utilizaremos uma API de testes chamada JSONPlaceholder, iremos obter cinco mil registros;

<br>

9º Vá para o arquivo principal.component.ts e veja toda a estrutura (basicamente é o que utilizamos nas aulas);

<br>

10º Veja o arquivo principal.component.html, iremos criar um formulário com um elemento de texto (input text) e uma tabela, onde será utilizado o ngFor para listar todos os dados vindos da API, note que no laço de repetição é utilizada a seguinte estrutura: *ngFor="let v of vetor | filtrar : titulo", esse filtrar é responsável pela pesquisa através do título informado no input;

<br>

11º Agora vamos para o arquivo filtrar.pipe.ts, teremos a seguinte estrutura:
transform(vetor: Foto[], titulo:string): Foto[] {
    return vetor.filter(obj => {return obj.title.toLowerCase().indexOf(titulo.toLowerCase()) !== -1});
}

Basicamente ele pegar todo o vetor e retorna um novo vetor, onde o título possua o termo digitado, para isso utilizo a função nativa do JavaScript chamada filter.

<br>

Agora temos o projeto de filtragem funcionando, qualquer dúvida é só me chamar ;)
