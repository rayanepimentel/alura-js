//lista de todos os campos da minha pag

var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

console.log(campos)

// quando clicar no botão incluir e submit o meu form.

document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault(); //vai evitar que a página recarrege e perca meus dados

    //vou varrer cada idem do meu array e prgar o valor dele e criar uma tr dinamicamente
    //var tr = document.createElement('tr'); // criar elemento do dom que não faz dele - ainda.
    //agora preciso criar varias td da minha tr
    //pego meu array de campos e uso o forEach() 
    //e para cada item que ele varrer do meu array ele vai chamar a minha function(campo)
    // ou seja, primeiro passada do meu forEach, ele vai no meu primeiro elemento: document.querySelector('#data')
    //ela passa pro todos os meus elementos do campos[]
    //dentro da minha function, crio uma td dinamicamente 
    //e digo que o td, o conteudo dela, vai ser o campo.value que equivale a data
    //e na minha tr chamou a appendchild para add a td

    var tr = document.createElement('tr');

    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })

    // no final eu preciso incluir a tr na minha tabela.
    //eu tenho uma coluna que não faz parte do meu array de campo, o volume = quantidade x valor
    //vou criar a td do volume dinamicamente
    //qual será o valor dessa td(o conteudo dentro dessa td)
    // vou dizer que o campo quantidade x campo volume é o valor da minha tdvolume


    var tdVolume = document.createElement('td')
    tdVolume.textContent = campos[1].value * campo[2].value;

    tr.appendChild(tdVolume)

    //eu preciso incluir td como filha de tbody

    var tbody = document.querySelector('table tbody')

    tbody.appendChild('tr')

    //quero limpar os campos, para inserir novos valores
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 2;

    campos[0].focus();


})