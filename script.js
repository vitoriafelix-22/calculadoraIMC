setTimeout(criarHtml, 100)

function criarHtml() {
    criarHead();
    criarBody();
    
}

function criarHead() {
    const html = document.getElementsByTagName('html')[0];

    const head = document.getElementsByTagName('head')[0];

    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    document.head.appendChild(metaCharset);

    const metaCompatible = document.createElement('meta');
    metaCompatible.setAttribute('http-equiv', 'X-UA-Compatible');
    metaCompatible.setAttribute('content', 'IE=edge');
    head.appendChild(metaCompatible);

    const metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    head.appendChild(metaViewport);

    const title = document.createElement('title');
    title.textContent = 'Atividade';
    head.appendChild(title);

    html.appendChild(head);
}

function criarBody() {
    const html = document.getElementsByTagName('html')[0];
    const body = document.getElementsByTagName('body')[0];

    const h1 = document.createElement('h1');
    h1.textContent = 'Calculadora de IMC';
    h1.style.textAlign = 'center';
    body.appendChild(h1);

    const form = document.createElement('form');
    form.setAttribute('id', 'formulario')
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
  
    const labelNome = document.createElement('label');
    labelNome.setAttribute('for', 'nome');
    labelNome.textContent = 'Nome:';
    labelNome.style.marginTop = '10px'; // Adicionando margem ao label
    form.appendChild(labelNome);

    const inputNome = document.createElement('input');
    inputNome.setAttribute('type', 'text');
    inputNome.setAttribute('id', 'nome');
    inputNome.setAttribute('name', 'nome');
    inputNome.setAttribute('required', 'true');
    inputNome.style.marginBottom = '10px'; // Adicionando margem ao input
    inputNome.style.borderRadius = '5px'; // Adicionando borda ao input
    form.appendChild(inputNome);

    const labelIdade = document.createElement('label');
    labelIdade.setAttribute('for', 'idade');
    labelIdade.textContent = 'Idade:';
    labelIdade.style.marginTop = '10px'; // Adicionando margem ao label
    form.appendChild(labelIdade);

    const inputIdade = document.createElement('input');
    inputIdade.setAttribute('type', 'text');
    inputIdade.setAttribute('id', 'idade');
    inputIdade.setAttribute('name', 'idade');
    inputIdade.setAttribute('required', 'true');
    inputIdade.style.marginBottom = '10px'; // Adicionando margem ao input
    inputIdade.style.borderRadius = '5px'; // Adicionando borda ao input
    form.appendChild(inputIdade);

    const labelPeso = document.createElement('label');
    labelPeso.setAttribute('for', 'peso');
    labelPeso.textContent = 'Peso (kg):';
    labelPeso.style.marginTop = '10px'; // Adicionando margem ao label
    form.appendChild(labelPeso);

    const inputPeso = document.createElement('input');
    inputPeso.setAttribute('type', 'number');
    inputPeso.setAttribute('id', 'peso');
    inputPeso.setAttribute('name', 'peso');
    inputPeso.setAttribute('required', 'true');
    inputPeso.style.marginBottom = '10px'; // Adicionando margem ao input
    inputPeso.style.borderRadius = '5px'; // Adicionando borda ao input
    form.appendChild(inputPeso);

    const labelAltura = document.createElement('label');
    labelAltura.setAttribute('for', 'altura');
    labelAltura.textContent = 'Altura (m):';
    labelAltura.style.marginTop = '10px'; // Adicionando margem ao label
    form.appendChild(labelAltura);

    const inputAltura = document.createElement('input');
    inputAltura.setAttribute('type', 'number');
    inputAltura.setAttribute('id', 'altura');
    inputAltura.setAttribute('name', 'altura');
    inputAltura.style.marginBottom = '10px'; // Adicionando margem ao input
    inputAltura.style.borderRadius = '5px'; // Adicionando borda ao input
    form.appendChild(inputAltura);

    const botao = document.createElement('button');
    botao.setAttribute('type', 'button');
    botao.addEventListener('click', function calcularIMC(evento) {
        const form = document.getElementById('formulario');

        if (!form.checkValidity()) {
            evento.preventDefault();
            alert('Preencha os campos obrigatórios!');
        } else {
            const nome = document.getElementById("nome").value;
            const idade = parseInt(document.getElementById("idade").value);
            const altura = parseInt(document.getElementById("altura").value);
            const peso = parseInt(document.getElementById("peso").value);

            let alturaMetros = altura / 100;
            let imc = peso / (alturaMetros * alturaMetros);
            imc = imc.toFixed(2);

            const obj = {
                idade: idade,
                nome: nome,
                imc: imc,
            };

            addElementoNaLista(obj);
        }

    });
    botao.innerHTML = 'Calcular'
    form.appendChild(botao);

    body.appendChild(form);

    const divReferencia = document.createElement('div');
    divReferencia.setAttribute('id', 'referenciaLegenda')
    body.appendChild(divReferencia);

    criarLegenda();

    html.appendChild(body);
}

function addElementoNaLista(obj) {
    obj.idade = obj.idade.toString().substring(0, 3)

    const body = document.getElementById('referenciaLegenda');

    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.paddingBottom = '10px';

    const divCorImc = document.createElement('div');

    let resultado = '';
    if (obj.imc < 18.5) {
        resultado = " Você está abaixo do peso ideal.";
        divCorImc.style.backgroundColor = "blue";
    } else if (obj.imc < 25) {
        divCorImc.style.backgroundColor = "green";
        resultado = " Seu peso está dentro do normal.";
    } else if (obj.imc < 30) {
        divCorImc.style.backgroundColor = "orange";
        resultado = " Você está com sobrepeso.";
    } else {
        divCorImc.style.backgroundColor = "red";
        resultado = " Você está obeso.";
    }
    divCorImc.textContent = obj.idade;
    divCorImc.style.padding = '10px';
    divCorImc.style.maxWidth = '31px';
    divCorImc.style.minWidth = '31px';
    divCorImc.style.borderRadius = '10px';

    div.appendChild(divCorImc);

    const span = document.createElement('span');
    span.textContent = ' Olá, ' + obj.nome + ' Seu IMC é ' + obj.imc + '. ' + resultado;
    div.appendChild(span);

    body.appendChild(div);
}

function criarLegenda() {
    const body = document.getElementsByTagName('body')[0];
    const div = document.createElement('div');
    div.style.display = 'flex';

    const divCorAcimaPeso = document.createElement('div');
    divCorAcimaPeso.textContent = 'Obeso';
    divCorAcimaPeso.style.padding = '10px';
    divCorAcimaPeso.style.maxWidth = '100px';
    divCorAcimaPeso.style.borderRadius = '10px';
    divCorAcimaPeso.style.backgroundColor = 'red';
    div.append(divCorAcimaPeso);

    const divCorSobrepeso = document.createElement('div');
    divCorSobrepeso.textContent = 'Sobrepeso';
    divCorSobrepeso.style.padding = '10px';
    divCorSobrepeso.style.maxWidth = '100px';
    divCorSobrepeso.style.borderRadius = '10px';
    divCorSobrepeso.style.backgroundColor = 'orange';
    div.append(divCorSobrepeso);

    const divCorPesoIdeal = document.createElement('div');
    divCorPesoIdeal.textContent = 'Peso ideal';
    divCorPesoIdeal.style.padding = '10px';
    divCorPesoIdeal.style.maxWidth = '100px';
    divCorPesoIdeal.style.borderRadius = '10px';
    divCorPesoIdeal.style.backgroundColor = 'green';
    div.append(divCorPesoIdeal);

    const divCorAbaixoPeso = document.createElement('div');
    divCorAbaixoPeso.textContent = 'Abaixo do peso';
    divCorAbaixoPeso.style.padding = '10px';
    divCorAbaixoPeso.style.maxWidth = '65px';
    divCorAbaixoPeso.style.borderRadius = '10px';
    divCorAbaixoPeso.style.backgroundColor = 'blue';
    div.append(divCorAbaixoPeso);

    body.append(div);
}