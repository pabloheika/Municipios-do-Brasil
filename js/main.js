

const ESTADOS_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';
const municipiosContainer = document.getElementById('municipios');


function clearMunicipios() {
    municipiosContainer.innerHTML = '';
}

function showMunicipios(msg) {
    municipiosContainer.innerHTML = `<div class="col-12"><div class="p-3 text-danger">${msg}</div></div>`;
}

function renderMunicipios(lista) {
    clearMunicipios();
    if (!Array.isArray(lista) || lista.length === 0) {
        showMunicipios('Nenhum município encontrado.');
        return;
    }

    const fragment = document.createDocumentFragment();
    lista.forEach((m) => {
        const col = document.createElement('div');
        col.className = 'col';

        const box = document.createElement('div');
        box.className = 'p-3 municipio-box';
        box.textContent = m.nome;

        col.appendChild(box);
        fragment.appendChild(col);
    });

    municipiosContainer.appendChild(fragment);
}

function popularEstados(estados) {
    const estadosSelect = document.getElementById('estados');
    estadosSelect.innerHTML = '';

    const placeholder = document.createElement('option');
    placeholder.textContent = 'Selecione uma UF';
    placeholder.selected = true;
    placeholder.disabled = true;
    placeholder.value = '';
    estadosSelect.appendChild(placeholder);

    estados.forEach((est) => {
        //console.log('Adicionando estado:', est);
        const opt = document.createElement('option');
        opt.value = est.id;
        opt.textContent = est.nome;
        estadosSelect.appendChild(opt);
    });
}

async function fetchEstados() {
    try {
        const res = await axios.get(ESTADOS_URL);
        console.log('Estados fetched:', res.data);
        popularEstados(res.data);
    } catch (err) {
        console.error('Erro ao buscar estados:', err);
        document.getElementById('estados').innerHTML = '';
        const opt = document.createElement('option');
        opt.textContent = 'Erro ao carregar estados';
        opt.disabled = true;
        document.getElementById('estados').appendChild(opt);
    }
}

async function fetchMunicipios(ufId) {
    if (!ufId) {
        clearMunicipios();
        return;
    }
    const url = `${ESTADOS_URL}${encodeURIComponent(ufId)}/municipios`;
    try {
        const res = await axios.get(url);
        renderMunicipios(res.data);
    } catch (err) {
        console.error('Erro ao buscar municípios:', err);
        showMunicipiosErro('Erro ao carregar municípios. Veja o console para detalhes.');
    }
}

function attachListeners() {
    document.getElementById('estados').addEventListener('change', (e) => {
        const ufId = e.target.value;
        fetchMunicipios(ufId);
    });
}
clearMunicipios();

fetchEstados();

attachListeners();
