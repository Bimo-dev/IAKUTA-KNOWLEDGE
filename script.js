// Dados dos Cursos (Exemplo)
const cursos = [
{
nome: 'Contabilidade',
dur: '170 horas',
inv:["135 000,00 Kz","162 000,00 Kz","81 000,00 Kz"],
invHTML: `
<ul>
<li>135 000,00 Kz</li>
<li>162 000,00 Kz</li>
<li>81 000,00 Kz</li>
</ul>
`,

hr: 'Segunda a Sábado  das 8h as 18h',
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Capacitar profissionais em técnicas modernas de gestão corporativa',
destinatarios: 'Gestores, empreendedores e administradores',
regime: 'Pós-Laboral',
material: 'Apostilas digitais, casos práticos e certificado',
},
{
nome: 'Fiscalidade',
dur: '80 horas',
inv:["115 000,00 Kz","138 000,00 Kz","69 000,00 Kz"],
invHTML: `
<ul>
<li>115 000,00 Kz</li>
<li>138 000,00 Kz</li>
<li>69 000,00 Kz</li>
</ul>
`,
hr: 'Sexta e Sábado às 18h',
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Dominar a legislação tributária angolana',
destinatarios: 'Advogados, contadores e gestores financeiros',
regime: 'Flexível',
material: 'Videoaulas, material PDF e suporte online',
},
{
nome: 'Gestão de Portais',
dur: '30 horas',
inv: ["70 000,00 Kz","84 000,00 Kz","42 000,00 Kz"],
invHTML: `
<ul>
<li>70 000,00 Kz</li>
<li>84 000,00 Kz</li>
<li>42 000,00 Kz</li>
</ul>
`,
hr: 'Sexta e Sábado às 18h',
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Dominar estratégias digitais para negócios',
destinatarios: 'Empreendedores e profissionais de marketing',
regime: 'Intensivo',
material: 'Kit de ferramentas e certificado'
},
{
nome: 'Gestão Financeira',
dur: '30 horas',
inv:["110 000,00 Kz","132 000,00 Kz","66 000,00 Kz",],
invHTML: `
<ul>
<li>110 000,00 Kz</li>
<li>132 000,00 Kz</li>
<li>66 000,00 Kz</li>
</ul>
`,
hr: 'Sexta e Sábado às 18h',
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Formar especialistas em gestão de pessoas',
destinatarios: 'Profissionais de RH e gestores',
regime: 'Pós-Laboral',
material: 'Casos práticos e simuladores'
},
{
nome: 'Garantia, Exigências Legais e Processos Executivos',
dur: '30 horas',
inv:[ "350 000,00 Kz","420 000,00 Kz","210 000,00 Kz" ],
invHTML: `
<ul>
<li>350 000,00 Kz</li>
<li>420 000,00 Kz</li>
<li>210 000,00 Kz</li>
</ul>
`,
hr: 'Sexta e Sábado às 18h',
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Formar especialistas em gestão de pessoas',
destinatarios: 'Profissionais de RH e gestores',
regime: 'Pós-Laboral',
material: 'Casos práticos e simuladores'
},
{
nome: 'Legislação Laboral e Instrução de Processos',
dur: '50 horas',
inv:[ "90 000,00 Kz","108 000,00 Kz","54 000,00 Kz" ],
invHTML: `
<ul>
<li>90 000,00 Kz</li>
<li>108 000,00 Kz</li>
<li>54 000,00 Kz</li>
</ul>
`,
hr: 'Sexta e Sábado às 18h',
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Prática contábil conforme normas internacionais',
destinatarios: 'Contabilistas e gestores financeiros',
regime:'Não confirmado',
material: 'Planilhas modelo e videoaulas'
},
{
nome: 'Mercado Financeiro',
dur: '40 horas',
inv:[ "120 000,00 Kz","144 000,00 Kz" ],
invHTML: `
<ul>
<li>120 000,00 Kz</li>
<li>144 000,00 Kz</li>
</ul>
`,
hr: 'Sexta e Sábado às 18h',
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
</ul>
`,
objetivos: 'Metodologias ágeis e tradicionais',
destinatarios: 'Gestores e coordenadores de projetos',
regime:'Não informado',
material: 'Certificação PMP preparatória'
},
{
nome: 'Procedimentos do Código do Imposto sobre o Rendimento do Trabalho',
dur: '30 horas',
inv: [ "90 000,00 Kz","108 000,00 Kz","54 000,00 Kz" ],
invHTML: `
<ul>
<li>90 000,00 Kz</li>
<li>108 000,00 Kz</li>
<li>54 000,00 Kz</li>
</ul>
`,
hr: 'Sexta e Sábado às 18h',
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Legislação trabalhista angolana',
destinatarios: 'Profissionais de RH e advogados',
regime:'Não informado',
material: 'Código do trabalho atualizado'
},
{
nome: 'Procedimentos sobre Insolvência, recuperação de Crédito e Doação em Pagamento',
dur: '20 horas',
inv:[ "350 000,00 Kz","420 000,00 Kz","210 000,00 Kz" ],
invHTML: `
<ul>
<li>350 000,00 Kz</li>
<li>420 000,00 Kz</li>
<li>210 000,00 Kz</li>
</ul>
`,
hr: 'Sexta e Sábado às 18h',
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Estratégias de tráfego pago e SEO',
destinatarios: 'Profissionais de marketing digital',
regime:'Não informado',
material: 'Ferramentas premium de análise'
},
{
nome: 'Recursos Humanos',
dur: '60 horas',
inv:[ "100 000,00 Kz","120 000,00 Kz","60 000,00 Kz" ],
invHTML: `
<ul>
<li>100 000,00 Kz</li>
<li>120 000,00 Kz</li>
<li>60 000,00 Kz</li>
</ul>
`,
hr: 'Sexta e Sábado às 18h',
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Estratégias de tráfego pago e SEO',
destinatarios: 'Profissionais de marketing digital',
regime:'Não informado',
material: 'Ferramentas premium de análise'
},
{
nome: 'Sistema Tributário',
dur: '60 horas',
inv: [ "100 000,00 Kz","120 000,00 Kz","60 000,00 Kz" ],
invHTML: `
<ul>
<li>100 000,00 Kz</li>
<li>120 000,00 Kz</li>
<li>60 000,00 Kz</li>
</ul>
`,
hr: 'Sexta e Sábado às 18h',
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Criação de conteúdo viral',
destinatarios: 'Social media managers',
regime:'Não informado',
material: 'Kit de templates editáveis'
}
];

// Preencher Tabela
const tbody = document.getElementById('cursos-body');
cursos.forEach((curso, index) => {
const tr = document.createElement('tr');
tr.innerHTML = `
<td>${curso.nome}</td>
<td>${curso.dur}</td>
<td>${curso.hr}</td>
<td><button class="table-cta" onclick="showDetails(${index})">Detalhes</button></td>
`;
tbody.appendChild(tr);
});

// Mostrar Detalhes
function showDetails(index) {
const curso = cursos[index];
document.getElementById('courses').classList.add('hidden');
document.getElementById('curso-detalhes').classList.add('visible'); 
document.getElementById('detalhe-titulo').textContent = curso.nome;
document.getElementById('detalhe-objetivos').textContent = curso.objetivos;
document.getElementById('detalhe-duracao').textContent = curso.dur;
document.getElementById('detalhe-horario').textContent = curso.hr;
document.getElementById("detalhe-modalidade").innerHTML = curso.mod;
document.getElementById('detalhe-investimento').innerHTML = curso.invHTML;
document.getElementById('detalhe-destinatarios').textContent = curso.destinatarios;
document.getElementById('detalhe-material').textContent = curso.material;
document.getElementById('detalhe-regime').textContent = curso.regime; 
history.pushState({ cursoIndex: index }, '', `#curso-${index}`);
}

// Voltar para Cursos
function voltarParaCursos() {
document.getElementById('courses').classList.remove('hidden');
document.getElementById('curso-detalhes').classList.remove('visible');
window.scrollTo({ top: document.getElementById('courses').offsetTop - 70, behavior: 'smooth'});
}

// Gerenciar Histórico
window.addEventListener('popstate', (event) => {
if (event.state?.cursoIndex !== undefined) {
showDetails(event.state.cursoIndex);
} else {
voltarParaCursos();
}
});

// Formulário
function fecharModal() {
document.getElementById('inscricaoModal').style.display = 'none';
}
document.getElementById('form-inscricao').addEventListener('submit', (e) => {
e.preventDefault();
const curso = document.getElementById('nome-curso').textContent;
alert(`Inscrição em "${curso}" confirmada!\nDados enviados com sucesso.`);
fecharModal();
});

// Menu Mobile 
document.querySelector('.mobile-menu').addEventListener('click', () => {
const menu = document.querySelector('nav ul');
menu.classList.toggle('active');

// Fechar ao clicar em qualquer item
document.querySelectorAll('nav ul li a').forEach(item => {
item.addEventListener('click', () => {
menu.classList.remove('active');
});
});
});

// Controle do Modal de Contato
const contactModal = document.getElementById('contactModal');
const closeModalBtn = document.querySelector('.close-modal');

// Abrir modal do CTA "Fale Conosco"
document.querySelector('a[href="#contact"]').addEventListener('click', (e) => {
e.preventDefault();
contactModal.style.display = 'flex';
});

// Fechar modal
closeModalBtn.addEventListener('click', () => {
contactModal.style.display = 'none';
});

// Fechar ao clicar fora
window.addEventListener('click', (e) => {
if (e.target === contactModal) {
contactModal.style.display = 'none';
}
});
//Função Toggle (controla a Historia se esta visivel ou oculta)
function toggleHistoria() {
const historia = document.querySelector('.nossa-historia-container');
  
// Alternar classe 'visible'
historia.classList.toggle('visible');
  
// Rolagem suave para a seção
if (historia.classList.contains('visible')) {
historia.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
}

// Fechar ao clicar fora
document.addEventListener('click', (e) => {
const historia = document.querySelector('.nossa-historia-container');
const botao = document.querySelector('#about .cta-button');  

if (!historia.contains(e.target) && e.target !== botao) {
historia.classList.remove('visible');
}
});

const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('keydown', function (e) {
// Permite só números, backspace, setas e tab
if (
!/[0-9]/.test(e.key) &&
e.key !== 'Backspace' &&
e.key !== 'ArrowLeft' &&
e.key !== 'ArrowRight' &&
e.key !== 'Tab'
) {
e.preventDefault();
}
});

telefoneInput.addEventListener('input', function (e) {
// Remove tudo que não for número, e o prefixo +244
let numero = e.target.value.replace(/\D/g, '').replace(/^244/, '');

// Limita a 9 dígitos
numero = numero.substring(0, 9);

// Formata com prefixo +244 e espaços a cada 3 dígitos
let formatado = '+244 ';
for (let i = 0; i < numero.length; i++) {
if (i === 3 || i === 6) formatado += ' ';
formatado += numero.charAt(i);
}

e.target.value = formatado.trim();
});


// Inicializar ao abrir o modal
function openInscricao() {
const cursoNome = document.getElementById('detalhe-titulo').textContent;
document.getElementById('nome-curso').textContent = cursoNome;

// Encontrar o curso pelo nome
const curso = cursos.find(c => c.nome === cursoNome);
const container = document.getElementById('investimento-opcoes');
container.innerHTML = '';
  
if (curso && curso.inv) {
curso.inv.forEach((opcao, index) => {
const label = document.createElement('label');
label.innerHTML = `
<input type="radio" name="investimento" value="${opcao}" ${index === 0 ? 'checked' : ''} required>
${opcao}
`;
container.appendChild(label);
});
}

// Mostrar modal
document.getElementById('inscricaoModal').style.display = 'flex';
}

// Impedir zoom em inputs
document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('input, select').forEach(element => {
element.addEventListener('focus', () => {
document.querySelector('meta[name="viewport"]').content = 'width=device-width, initial-scale=1.0';
});
    
element.addEventListener('blur', () => {
document.querySelector('meta[name="viewport"]').content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0';
});
});
});

// Fechar teclado virtual ao rolar
window.addEventListener('scroll', function() {
document.activeElement.blur();
});

// Substituir o ano estático no rodapé para o ano atual
document.querySelector('.copyright p').innerHTML = 
`&copy; ${new Date().getFullYear()} iAKUTA Knowledge Academia. Todos os direitos reservados.`;

