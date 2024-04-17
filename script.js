const sequencias = {
    'minasGerais': [
        'GKJ', 'HOK', 'NXX', 'NYG', 
        'OLO', 'OMH', 'OOV', 'ORC', 
        'OWH', 'OXK', 'PUA', 'PZZ', 
        'QMQ', 'QQZ', 'QUA', 'QUZ', 
        'QWR', 'QXZ', 'RFA', 'RGD', 
        'RMD', 'RNZ', 'RTA', 'RVZ'
    ],
    'goias': [
        'SBW', 'SDS', 'RBK', 'RCN', 
        'QTN', 'QTS', 'PQA', 'PRZ', 
        'OMI', 'OOF', 'OGH', 'OHA', 
        'NVO', 'NWR', 'NJX', 'NLU', 
        'NFC', 'NGZ', 'KAV', 'KFC'
    ],
    'distritoFederal': [
        'JDP', 'JKR', 'OVM', 'OVV', 
        'OZW', 'PBZ', 'REC', 'REV'
    ]
};

function verificaEstado() {
    const placa = window.document.querySelector('input#placa').value.toUpperCase().trim();
    let placaDigitada = window.document.querySelector('div#placaDigitada');

    const regex = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/
    if (!regex.test(placa)) {
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
