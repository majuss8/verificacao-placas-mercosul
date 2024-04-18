// Objeto onde guarda as arrays com as sequências das letras iniciais da placa
const sequencias = {
    // Array das iniciais de Minas Gerais
    'minasGerais': [
        'GKJ', 'HOK', 'NXX', 'NYG', 
        'OLO', 'OMH', 'OOV', 'ORC', 
        'OWH', 'OXK', 'PUA', 'PZZ', 
        'QMQ', 'QQZ', 'QUA', 'QUZ', 
        'QWR', 'QXZ', 'RFA', 'RGD', 
        'RMD', 'RNZ', 'RTA', 'RVZ'
    ],
    // Array das iniciais de Goiás
    'goias': [
        'SBW', 'SDS', 'RBK', 'RCN', 
        'QTN', 'QTS', 'PQA', 'PRZ', 
        'OMI', 'OOF', 'OGH', 'OHA', 
        'NVO', 'NWR', 'NJX', 'NLU', 
        'NFC', 'NGZ', 'KAV', 'KFC'
    ],
    // Array das iniciais do Distrito Federal
    'distritoFederal': [
        'JDP', 'JKR', 'OVM', 'OVV', 
        'OZW', 'PBZ', 'REC', 'REV'
    ]
};

// Função que é chamada quando o botão é clicado, na qual irá verificar a placa informada pelo usuário
function verificaEstado() {
    // Puxa o input com o id 'placa' do arquivo html (DOM - Document Object Model), usando query selector, armazenando em uma constante 'placa'
    // E o valor do input será formatado para maiúsculo e é retirado os espaços do início e do fim da string
    const placa = window.document.querySelector('input#placa').value.toUpperCase().trim();
    // Puxa usando query selector, a div com o id 'placaDigitada', no qual será exibido o resultado
    let placaDigitada = window.document.querySelector('div#placaDigitada');
    // 'regex' é uma constante onde armazena uma expressão regular com o formato da placa mercosul ( LLLNLNN ) -> L = Letra e N = Número
    const regex = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/
    // Realiza o teste do regex na placa informada
    if (!regex.test(placa)) {
        // Se der um valor falso
        // Exibe na div 'placaDigitada' um texto 
        placaDigitada.textContent = 'A placa informada é inválida';
        return
    };

    // Verifica os 3 primeiros caracteres da placa
    const prefixo = placa.substring(0, 3);

    const minasGerais =  sequencias.minasGerais;
    // verifica se na placa digitada pelo usuário está inclusa (includes) no array de Minas Gerais.
    if (minasGerais.includes(prefixo)) {
        const placaDigitada = window.document.querySelector('div#placaDigitada');
        placaDigitada.textContent = 'Sua placa é de Minas Gerais';
        return
    }

    const goias = sequencias.goias;
    if (goias.includes(prefixo)) {
        const placaDigitada = window.document.querySelector('div#placaDigitada');
        placaDigitada.textContent = 'Sua placa é de Goiás';
        return
    }

    const distritoFederal = sequencias.distritoFederal
    if (distritoFederal.includes(prefixo)) {
        const placaDigitada = window.document.querySelector('div#placaDigitada');
        placaDigitada.textContent = 'Sua placa é do Distrito Federal';
        return
    }

    // Se não pertencer a nenhuma das regiões
    placaDigitada.textContent = 'Placa não pertence ao Sudeste ou Centro-Oeste';
};
