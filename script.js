// Dados dos Cursos (Exemplo)
const cursos = [
{
nome: 'Contabilidade',
dur: '170 horas',
inv:["(Presencial) KZ 135 000,00 ","(Híbrido) KZ 162 000,00","(Online) KZ 81 000,00 "],
invHTML: `
<ul>
<li>135 000,00 Kz</li>
<li>162 000,00 Kz</li>
<li>81 000,00 Kz</li>
</ul>
`,
hr: `<div style="text-align:center">
<div>Segunda a Sábado</div>
<div style="margin-top:5px">das 8h às 18h</div>
</div>`,
mod: `<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Capacitar profissionais em técnicas modernas de gestão corporativa',
destinatarios: 'Aos profissionais, gestores, empreendedores e administradores',
regime: 'Laboral, Pós-laboral, intensivo ou modular, à distância (online) e híbrido',
material: 'Apostilas digitais, casos práticos e certificado',
},
{
nome: 'Fiscalidade',
dur: '80 horas',
inv:["Presencial 115 000,00 Kz","Híbrido 138 000,00 Kz","Online 69 000,00 Kz"],
invHTML: `
<ul>
<li>115 000,00 Kz</li>
<li>138 000,00 Kz</li>
<li>69 000,00 Kz</li>
</ul>
`,
hr: `<div style="text-align:center">
<div>Segunda a Sábado</div>
<div style="margin-top:5px">das 8h às 18h</div>
</div>`,
mod: `<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Dominar a legislação tributária angolana',
destinatarios: 'Aos profissionais, advogados, contadores e gestores financeiros',
regime: 'Laboral, Pós-laboral, intensivo ou modular, à distância (online) e híbrido',
material: 'Videoaulas, material PDF e suporte online',
},
{
nome: 'Gestão de Portais',
dur: '30 horas',
inv: ["Presencial 70 000,00 Kz","Híbrido 84 000,00 Kz","Online 42 000,00 Kz"],
invHTML: `
<ul>
<li>70 000,00 Kz</li>
<li>84 000,00 Kz</li>
<li>42 000,00 Kz</li>
</ul>
`,
hr: `<div style="text-align:center">
<div>Segunda a Sábado</div>
<div style="margin-top:5px">das 8h às 18h</div>
</div>`,
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Dominar estratégias digitais para negócios',
destinatarios: 'Aos profissionais, empreendedores e profissionais de marketing',
regime: 'Laboral, Pós-laboral, intensivo ou modular, à distância (online) e híbrido',
material: 'Kit de ferramentas e certificado'
},
{
nome: 'Gestão Financeira',
dur: '30 horas',
inv:["Presencial 110 000,00 Kz","Híbrido 132 000,00 Kz","Online 66 000,00 Kz",],
invHTML: `
<ul>
<li>110 000,00 Kz</li>
<li>132 000,00 Kz</li>
<li>66 000,00 Kz</li>
</ul>
`,
hr: `<div style="text-align:center">
<div>Segunda a Sábado</div>
<div style="margin-top:5px">das 8h às 18h</div>
</div>`,
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Formar especialistas em gestão de pessoas',
destinatarios: 'Aos profissionais de RH e gestores',
regime: 'Laboral, Pós-laboral, intensivo ou modular, à distância (online) e híbrido',
material: 'Casos práticos e simuladores'
},
{
nome: 'Garantia, Exigências Legais e Processos Executivos',
dur: '30 horas',
inv:[ "Presencial 350 000,00 Kz","Híbrido 420 000,00 Kz","Online 210 000,00 Kz" ],
invHTML: `
<ul>
<li>350 000,00 Kz</li>
<li>420 000,00 Kz</li>
<li>210 000,00 Kz</li>
</ul>
`,
hr: `<div style="text-align:center">
<div>Segunda a Sábado</div>
<div style="margin-top:5px">das 8h às 18h</div>
</div>`,
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Formar especialistas em gestão de pessoas',
destinatarios: 'Aos profissionais de RH e gestores',
regime: 'Laboral, Pós-laboral, intensivo ou modular, à distância (online) e híbrido',
material: 'Casos práticos e simuladores'
},
{
nome: 'Legislação Laboral e Instrução de Processos',
dur: '50 horas',
inv:[ "Presencial 90 000,00 Kz","Híbrido 108 000,00 Kz","Online 54 000,00 Kz" ],
invHTML: `
<ul>
<li>90 000,00 Kz</li>
<li>108 000,00 Kz</li>
<li>54 000,00 Kz</li>
</ul>
`,
hr: `<div style="text-align:center">
<div>Segunda a Sábado</div>
<div style="margin-top:5px">das 8h às 18h</div>
</div>`,
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Prática contábil conforme normas internacionais',
destinatarios: 'Aos profissionais, contabilistas e gestores financeiros',
regime:'Laboral, Pós-laboral, intensivo ou modular, à distância (online) e híbrido',
material: 'Planilhas modelo e videoaulas'
},
{
nome: 'Mercado Financeiro',
dur: '40 horas',
inv:[ "Presencial 120 000,00 Kz","Online 144 000,00 Kz" ],
invHTML: `
<ul>
<li>120 000,00 Kz</li>
<li>144 000,00 Kz</li>
</ul>
`,
hr: `<div style="text-align:center">
<div>Segunda a Sábado</div>
<div style="margin-top:5px">das 8h às 18h</div>
</div>`,
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
</ul>
`,
objetivos: 'Metodologias ágeis e tradicionais',
destinatarios: 'Aos profissionais, gestores e coordenadores de projetos',
regime: 'Laboral, Pós-laboral, intensivo ou modular, à distância (online) e híbrido',
material: 'Certificação PMP preparatória'
},
{
nome: 'Procedimentos do Código do Imposto sobre o Rendimento do Trabalho',
dur: '30 horas',
inv: [ "Presencial 90 000,00 Kz","Híbrido 108 000,00 Kz","Online 54 000,00 Kz" ],
invHTML: `
<ul>
<li>90 000,00 Kz</li>
<li>108 000,00 Kz</li>
<li>54 000,00 Kz</li>
</ul>
`,
hr: `<div style="text-align:center">
<div>Segunda a Sábado</div>
<div style="margin-top:5px">das 8h às 18h</div>
</div>`,
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Legislação trabalhista angolana',
destinatarios: 'Aos Profissionais de RH e advogados',
regime: 'Laboral, Pós-laboral, intensivo ou modular, à distância (online) e híbrido',
material: 'Código do trabalho atualizado'
},
{
nome: 'Procedimentos sobre Insolvência, recuperação de Crédito e Doação em Pagamento',
dur: '20 horas',
inv:[ "Presencial 350 000,00 Kz","Híbrido 420 000,00 Kz","Online 210 000,00 Kz" ],
invHTML: `
<ul>
<li>350 000,00 Kz</li>
<li>420 000,00 Kz</li>
<li>210 000,00 Kz</li>
</ul>
`,
hr: `<div style="text-align:center">
<div>Segunda a Sábado</div>
<div style="margin-top:5px">das 8h às 18h</div>
</div>`,
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Estratégias de tráfego pago e SEO',
destinatarios: 'Aos Profissionais de marketing digital',
regime: 'Laboral, Pós-laboral, intensivo ou modular, à distância (online) e híbrido',
material: 'Ferramentas premium de análise'
},
{
nome: 'Recursos Humanos',
dur: '60 horas',
inv:[ "Presencial 100 000,00 Kz","Híbrido 120 000,00 Kz","Online 60 000,00 Kz" ],
invHTML: `
<ul>
<li>100 000,00 Kz</li>
<li>120 000,00 Kz</li>
<li>60 000,00 Kz</li>
</ul>
`,
hr: `<div style="text-align:center">
<div>Segunda a Sábado</div>
<div style="margin-top:5px">das 8h às 18h</div>
</div>`,
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Estratégias de tráfego pago e SEO',
destinatarios: 'Aos profissionais de marketing digital',
regime: 'Laboral, Pós-laboral, intensivo ou modular, à distância (online) e híbrido',
material: 'Ferramentas premium de análise'
},
{
nome: 'Sistema Tributário',
dur: '60 horas',
inv: [ "Presencial 100 000,00 Kz","Híbrido 120 000,00 Kz","Online 60 000,00 Kz" ],
invHTML: `
<ul>
<li>100 000,00 Kz</li>
<li>120 000,00 Kz</li>
<li>60 000,00 Kz</li>
</ul>
`,
hr: `<div style="text-align:center">
<div>Segunda a Sábado</div>
<div style="margin-top:5px">das 8h às 18h</div>
</div>`,
mod: `
<ul>
<li>Presencial</li>
<li>Híbrido</li>
<li>Online</li>
</ul>
`,
objetivos: 'Criação de conteúdo viral',
destinatarios: 'Aos profissionais social media managers',
regime: 'Laboral, Pós-laboral, intensivo ou modular, à distância (online) e híbrido',
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
document.getElementById('detalhe-horario').innerHTML= curso.hr;
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

const investimentoSelecionado = document.querySelector('input[name="investimento"]:checked')?.value || '';
const modalidadeExtraida = investimentoSelecionado.split(' ')[0]; // Pega a primeira palavra

const dados = {
nome: document.getElementById('nome').value,
email: document.getElementById('email').value,
telefone: document.getElementById('telefone').value,
bi: document.getElementById('bi').value,
genero: document.querySelector('input[name="genero"]:checked')?.value,
escolaridade: document.querySelector('input[name="escolaridade"]:checked')?.value,
curso: document.getElementById('nome-curso').textContent,
investimento: investimentoSelecionado,
modalidade: modalidadeExtraida,
pagamento: document.querySelector('input[name="pagamento"]:checked')?.value || '-',

// Extras
nacionalidade: '',
cidade: '',
provincia: '',
areaFormacao: '',
profissao: '',
atuacao: '',
empresa: '',
cargo: '',
tempo: ''
};

gerarFichaPDF(dados);
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

// LIMPAR CAMPOS DO FORMULÁRIO
document.getElementById('nome').value = '';
document.getElementById('email').value = '';
document.getElementById('telefone').value = '';
document.getElementById('bi').value = '';

// Limpar campos do tipo rádio (gênero e escolaridade)
document.querySelectorAll('input[name="genero"]').forEach(input => input.checked = false);
document.querySelectorAll('input[name="escolaridade"]').forEach(input => input.checked = false);
  
// Encontrar o curso pelo nome
const curso = cursos.find(c => c.nome === cursoNome);
const container = document.getElementById('investimento-opcoes');
container.innerHTML = '';
  
if (curso && curso.inv) {
curso.inv.forEach((opcao, index) => {
const label = document.createElement('label');
label.className = 'investimento-option';
label.innerHTML = `
<input type="radio" name="investimento" value="${opcao}" ${index === 0 ? 'checked' : ''} required>
<span>${opcao}</span>
`;
container.appendChild(label);
});
}

document.getElementById('inscricaoModal').style.display = 'flex';
  
// Foco automático e scroll para o topo
setTimeout(() => {
document.getElementById('nome').focus();
document.querySelector('.modal .box').scrollTop = 0;
}, 100);
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


// ============== APRESENTAÇÕES INTERATIVAS PARA O FOOTER ==============
document.addEventListener('DOMContentLoaded', () => {

// 1. Serviços - Showcase Interativo
const servicosLinks = document.querySelectorAll('.footer-links:nth-child(2) a');
servicosLinks.forEach(link => {
link.addEventListener('click', (e) => {
e.preventDefault();
const servico = link.textContent.trim();
            
// Criar apresentação visual
const showcase = document.createElement('div');
showcase.className = 'service-showcase';
showcase.innerHTML = `
<div class="showcase-content">
<div class="service-icon">${getServiceIcon(servico)}</div>
<h3>${servico}</h3>
<p>${getServiceDescription(servico)}</p>
<div class="stats">
<div class="stat">
<span>${getRandomNumber(85, 99)}%</span>
<small>Satisfação</small>
</div>
<div class="stat">
<span>${getRandomNumber(50, 200)}+</span>
<small>Clientes</small>
</div>
</div>
<button class="close-showcase">✕</button>
</div>
`;
            
document.body.appendChild(showcase);
showcase.style.display = 'flex';
            
// Animação de entrada
setTimeout(() => {
showcase.querySelector('.showcase-content').style.transform = 'translateY(0)';
showcase.querySelector('.showcase-content').style.opacity = '1';
}, 10);
            
// Fechar apresentação
showcase.querySelector('.close-showcase').addEventListener('click', () => {
showcase.querySelector('.showcase-content').style.transform = 'translateY(100px)';
showcase.querySelector('.showcase-content').style.opacity = '0';
setTimeout(() => {
document.body.removeChild(showcase);
}, 300);
});
});
});

// 2. Empresa - Linha do Tempo Interativa
const empresaLinks = document.querySelectorAll('.footer-links:nth-child(3) a');
empresaLinks.forEach(link => {
link.addEventListener('click', (e) => {
e.preventDefault();
const pagina = link.textContent.trim();
            
if(pagina === "Sobre Nós") {

// Criar linha do tempo da empresa
createCompanyTimeline();
} else {

// Criar card informativo
createInfoCard(pagina);
}
});
});

// 3. Contato - Efeito de Onda
const contactInfo = document.querySelector('.footer-links:nth-child(4)');
contactInfo.addEventListener('click', () => {

// Criar efeito de onda
createRippleEffect();
        
// Abrir modal após pequeno delay
setTimeout(() => {
document.getElementById('contactModal').style.display = 'flex';
}, 800);
});

// 4. Redes Sociais - Animação de Conexões
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
link.addEventListener('click', (e) => {
e.preventDefault();
const platform = link.querySelector('i').className.split('-')[1];
            
// Criar animação de conexões
createConnectionAnimation(link, platform);
            
// Abrir link após animação
setTimeout(() => {
window.open(link.href, '_blank');
}, 1500);
});
});

// 5. Copyright - Revelação de Segredo
const copyright = document.querySelector('.copyright');
copyright.addEventListener('click', () => {

// Revelar mensagem secreta
revealSecretMessage();
});
});

// ============== FUNÇÕES AUXILIARES ==============

// Ícones para serviços
function getServiceIcon(service) {
const icons = {
'Formação Profissional': '📚',
'Consultoria': '💼',
'Assessoria Jurídica': '⚖️',
'Cursos Personalizados': '🎓'
};
return icons[service] || '🌟';
}

// Descrições para serviços
function getServiceDescription(service) {
const descriptions = {
'Formação Profissional': 'Programas de formação técnica com foco em habilidades práticas para o mercado de trabalho atual.',
'Consultoria': 'Soluções empresariais personalizadas para otimizar processos e aumentar a produtividade.',
'Assessoria Jurídica': 'Apoio jurídico especializado para empresas e profissionais com foco em direito corporativo.',
'Cursos Personalizados': 'Formações sob medida desenvolvidas para atender necessidades específicas da sua equipe.'
};
return descriptions[service] || 'Serviço de excelência com foco em resultados tangíveis.';
}

// Número aleatório
function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Criar linha do tempo da empresa
function createCompanyTimeline() {
const timeline = document.createElement('div');
timeline.className = 'company-timeline';
timeline.innerHTML = `
<div class="timeline-content">
<h3>Nossa Jornada</h3>
<div class="timeline">
<div class="event">
<div class="year">2023</div>
<div class="details">Fundação da iAKUTA com foco em formação profissional</div>
</div>
<div class="event">
<div class="year">2024</div>
<div class="details">Expansão para consultoria empresarial e serviços jurídicos</div>
</div>
<div class="event">
<div class="year">2025</div>
<div class="details">Lançamento da plataforma online e cursos personalizados</div>
</div>
<div class="event future">
<div class="year">2026+</div>
<div class="details">Plano de expansão internacional e novos mercados</div>
</div>
</div>
<button class="close-timeline">✕</button>
</div>
`;
    
document.body.appendChild(timeline);
    
// Animação de entrada
setTimeout(() => {
timeline.querySelector('.timeline-content').style.transform = 'translateX(0)';
}, 10);
    
// Fechar linha do tempo
timeline.querySelector('.close-timeline').addEventListener('click', () => {
timeline.querySelector('.timeline-content').style.transform = 'translateX(100%)';
setTimeout(() => {
document.body.removeChild(timeline);
}, 300);
});
}

// Criar card informativo
function createInfoCard(title) {
const card = document.createElement('div');
card.className = 'info-card';
    
// Conteúdo diferente para cada tipo
let content = '';
if(title === "Equipe") {
content = `
<h3>Nossa Equipe</h3>
<p>Profissionais qualificados com experiência de mercado:</p>
<ul>
<li>15 Especialistas em Gestão</li>
<li>10 Consultores Jurídicos</li>
<li>8 Instrutores Certificados</li>
</ul>
<div class="team-avatars">
<div class="avatar">👩‍💼</div>
<div class="avatar">👨‍🏫</div>
<div class="avatar">👩‍⚖️</div>
<div class="avatar">👨‍💻</div>
</div>
`;
} 
else if(title === "Parceiros") {
content = `
<h3>Nossos Parceiros</h3>
<p>Colaboramos com organizações que compartilham nossa visão:</p>
<div class="partners-logos">
<div class="logo">🏢</div>
<div class="logo">🏛️</div>
<div class="logo">🏦</div>
</div>
<p class="partner-cta">Deseja se tornar nosso parceiro? <a href="#contact">Fale conosco</a></p>
`;
}
else if(title === "Trabalhe Conosco") {
content = `
<h3>Junte-se à Nossa Equipe</h3>
<p>Estamos sempre em busca de talentos:</p>
<ul>
<li>Ambiente dinâmico e inovador</li>
<li>Oportunidades de crescimento</li>
<li>Projetos desafiadores</li>
</ul>
<p>Envie seu CV para: <strong>iakuta.informacoes@gmail.com</strong></p>
<button class="send-cv">Enviar Currículo</button>
`;
}
else {
content = `<h3>${title}</h3><p>Conteúdo em desenvolvimento. Em breve novidades!</p>`;
}
    
card.innerHTML = `
<div class="card-content">
${content}
<button class="close-card">✕</button>
</div>
`;
    
document.body.appendChild(card);
    
// Fechar card
card.querySelector('.close-card').addEventListener('click', () => {
card.style.opacity = '0';
setTimeout(() => {
document.body.removeChild(card);
}, 300);
});
    
// Botão de enviar CV
if(title === "Trabalhe Conosco") {
card.querySelector('.send-cv')?.addEventListener('click', () => {
alert('Redirecionando para envio de currículo...');
window.location.href = 'mailto:iakuta.informacoes@gmail.com?subject=Candidatura';
});
}
}

// Criar efeito de onda
function createRippleEffect() {
const ripple = document.createElement('div');
ripple.className = 'ripple-effect';
document.body.appendChild(ripple);
    
// Posicionar no local do clique
const footerLinks = document.querySelector('.footer-links:nth-child(4)');
const rect = footerLinks.getBoundingClientRect();
ripple.style.left = `${rect.left + rect.width/2}px`;
ripple.style.top = `${rect.top + rect.height/2}px`;
    
// Animação
ripple.style.width = '0';
ripple.style.height = '0';
ripple.style.opacity = '0.7';
    
setTimeout(() => {
ripple.style.width = '2000px';
ripple.style.height = '2000px';
ripple.style.opacity = '0';
        
// Remover após animação
setTimeout(() => {
document.body.removeChild(ripple);
}, 1000);
}, 10);
}

// Criar animação de conexões
function createConnectionAnimation(element, platform) {
const connections = document.createElement('div');
connections.className = 'connections-animation';
    
// Criar múltiplos elementos de conexão
for(let i = 0; i < 12; i++) {
const connection = document.createElement('div');
connection.className = 'connection';
connections.appendChild(connection);
}
    
document.body.appendChild(connections);
    
// Posicionar na origem
const rect = element.getBoundingClientRect();
connections.style.left = `${rect.left + rect.width/2}px`;
connections.style.top = `${rect.top + rect.height/2}px`;
    
// Iniciar animação
setTimeout(() => {
connections.classList.add('active');
        
// Adicionar mensagem
const message = document.createElement('div');
message.className = 'connection-message';
message.textContent = `Conectando ao ${platform}...`;
document.body.appendChild(message);
        
// Remover após animação
setTimeout(() => {
document.body.removeChild(connections);
document.body.removeChild(message);
}, 1400);
}, 10);
}

// Revelar mensagem secreta
function revealSecretMessage() {
const secret = document.createElement('div');
secret.className = 'secret-message';
secret.innerHTML = `
<div class="secret-content">
<h3>🌟 Segredo da iAKUTA 🌟</h3>
<p>Nosso verdadeiro poder está na comunidade de mais de ${getRandomNumber(500, 1000)} profissionais que já transformaram suas carreiras conosco!</p>
<div class="secret-code">Código promocional: AKUTA${new Date().getFullYear()}</div>
<small>(Válido por 7 dias para novos inscritos)</small>
<button class="close-secret">Usar Código</button>
</div>
`;
    
document.body.appendChild(secret);
    
// Animação de entrada
setTimeout(() => {
secret.style.opacity = '1';
secret.querySelector('.secret-content').style.transform = 'scale(1)';
}, 10);
    
// Fechar e aplicar código
secret.querySelector('.close-secret').addEventListener('click', () => {
localStorage.setItem('iakuta_promo', `AKUTA${new Date().getFullYear()}`);
secret.style.opacity = '0';
setTimeout(() => {
document.body.removeChild(secret);
alert(`Código AKUTA${new Date().getFullYear()} aplicado!`);
}, 300);
});
}

//Função de gerar o pdf
async function gerarPDF(dados) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(12);
  doc.text("IAKUTA KNOWLEDGE - ACADEMIA DE GESTÃO E DIREITO, LDA.", 10, 10);
  doc.text("FICHA DE INSCRIÇÃO PARA FORMANDOS", 10, 20);

  doc.setFontSize(10);
  let y = 30;

  doc.text("DADOS PESSOAIS", 10, y); y += 6;
  doc.text(`Nome Completo: ${dados.nome}`, 10, y); y += 6;
  doc.text(`Sexo: ${dados.genero || '-'}`, 10, y); y += 6;
  doc.text(`BI/NIF: ${dados.bi}`, 10, y); y += 6;
  doc.text(`Telefone (Móvel): ${dados.telefone}`, 10, y); y += 6;
  doc.text(`E-mail: ${dados.email}`, 10, y); y += 6;
 

  doc.text("INFORMAÇÕES ACADÊMICAS", 10, y); y += 6;
  doc.text(`Nível de Escolaridade: ${dados.escolaridade}`, 10, y); y += 6;
  doc.text(`Área de Formação: ${dados.areaFormacao || '-'}`, 10, y); y += 10;

  doc.text("DADOS PROFISSIONAIS (se aplicável)", 10, y); y += 6;
  doc.text(`Profissão: ${dados.profissao || '-'}`, 10, y); y += 6;
  doc.text(`Área de Actuação: ${dados.atuacao || '-'}`, 10, y); y += 6;
  doc.text(`Função: ${dados.cargo || '-'}`, 10, y); y += 6;
  doc.text(`Experiência: ${dados.tempo || '-'}`, 10, y); y += 10;

  doc.text("CURSO(S) DE INTERESSE", 10, y); y += 6;
  doc.text(`Curso: ${dados.curso}`, 10, y); y += 6;
  doc.text(`Investimento escolhido: ${dados.investimento}`, 10, y); y += 6;
  doc.text(`Modalidade: ${dados.modalidade || '-'}`, 10, y); y += 10;

  doc.text("MÉTODO DE PAGAMENTO", 10, y); y += 6;
  doc.text(`Escolhido: ${dados.pagamento || '-'}`, 10, y); y += 10;

  doc.text("DADOS DO PAGAMENTO", 10, y); y += 6;
  doc.text("Nome do Titular: IAKUTA Knowledge – Academia de Gestão e Direito", 10, y); y += 6;
  doc.text("Nº de Conta: 270.595.024.10001", 10, y); y += 6;
  doc.text("IBAN: AO06.0040.0000.7059.5024.1014.7", 10, y); y += 10;

  doc.text("AUTORIZAÇÃO E DECLARAÇÃO", 10, y); y += 6;
  doc.text("Declaro que as informações fornecidas são verdadeiras e completas.", 10, y); y += 6;
  doc.text("Autorizo o uso dos meus dados para fins administrativos e acadêmicos.", 10, y); y += 6;
  doc.text("Comprometo-me a cumprir as normas da instituição.", 10, y); y += 10;
  doc.text("Assinatura do Formando: ____________________________", 10, y); y += 6;
  doc.text(`Data: ${new Date().toLocaleDateString()}`, 10, y);

  doc.save(`Ficha_Inscricao_${dados.nome.replace(/\s/g, '_')}.pdf`);
}

// Supondo que jsPDF e autoTable estão incluídos:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js"></script>

async function gerarFichaPDF(dados) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const logoImg = await carregarLogo(); // Função que carrega o logo base64
  if (logoImg) {
    doc.addImage(logoImg, 'PNG', 10, 10, 30, 30);
  }

  doc.setFontSize(14);
  doc.text("IAKUTA KNOWLEDGE - ACADEMIA DE GESTÃO E DIREITO, LDA.", 45, 20);
  doc.setFontSize(12);
  doc.text("FICHA DE INSCRIÇÃO PARA FORMANDOS", 60, 28);

  let y = 45;
  
  // Dados Pessoais
  doc.setFontSize(11);
  doc.text("DADOS PESSOAIS", 10, y);
  y += 5;
  doc.autoTable({
    startY: y,
    theme: 'grid',
    styles: { fontSize: 9 },
    margin: { left: 10 },
    body: [
      ["Nome Completo", dados.nome],
      ["Sexo", dados.genero],
      ["BI/NIF", dados.bi],
      ["Telefone (Móvel)", dados.telefone],
      ["E-mail", dados.email],
    ],
    columns: [{}, {}]
  });

  y = doc.lastAutoTable.finalY + 10;
  doc.text("INFORMAÇÕES ACADÊMICAS", 10, y);
  y += 5;
  doc.autoTable({
    startY: y,
    theme: 'grid',
    styles: { fontSize: 9 },
    margin: { left: 10 },
    body: [
      ["Nível de Escolaridade", dados.escolaridade],
      ["Área de Formação", dados.areaFormacao || '-']
    ],
    columns: [{}, {}]
  });

  y = doc.lastAutoTable.finalY + 10;
  doc.text("DADOS PROFISSIONAIS (se aplicável)", 10, y);
  y += 5;
  doc.autoTable({
    startY: y,
    theme: 'grid',
    styles: { fontSize: 9 },
    margin: { left: 10 },
    body: [
      ["Profissão", dados.profissao || '-'],
      ["Área de Atuação", dados.atuacao || '-'],
      ["Tempo de Experiência", dados.tempo || '-']
    ],
    columns: [{}, {}]
  });

  y = doc.lastAutoTable.finalY + 10;
  doc.text("CURSO(S) DE INTERESSE", 10, y);
  y += 5;
  doc.autoTable({
    startY: y,
    theme: 'grid',
    styles: { fontSize: 9 },
    margin: { left: 10 },
    body: [
      ["Curso", dados.curso],
      ["Horário", dados.horario || '-'],
    //  ["Período", dados.periodo || '-'],
      ["Modalidade", dados.modalidade || '-']
    ],
    columns: [{}, {}]
  });

  y = doc.lastAutoTable.finalY + 10;
  doc.text("MÉTODO DE PAGAMENTO", 10, y);
  y += 5;
  doc.text(`Escolhido: ${dados.pagamento || '-'}`, 10, y);
  y += 10;
  doc.text("DADOS DO PAGAMENTO", 10, y);
  y += 5;
  doc.setFontSize(10);
  doc.text("Nome do Titular da Conta: Centro de Formação Profissional IAKUTA", 10, y); y += 5;
  doc.text("Nº de Conta: 270.595.024.10001", 10, y); y += 5;
  doc.text("IBAN: AO06.0040.0000.7059.5024.1014.7", 10, y); y += 10;

  doc.setFontSize(11);
  doc.text("AUTORIZAÇÃO E DECLARAÇÃO", 10, y);
  y += 5;
  doc.setFontSize(9);
  doc.text("Declaro que as informações fornecidas nesta ficha de inscrição são verdadeiras.", 10, y); y += 4;
  doc.text("Autorizo o uso dos meus dados pessoais pela IAKUTA para fins administrativos.", 10, y); y += 4;
  doc.text("Comprometo-me a cumprir as normas da instituição durante o processo de formação.", 10, y); y += 10;
  doc.text("Assinatura do Formando: ______________________________", 10, y); y += 6;
  doc.text(`Data do compromisso: ${new Date().toLocaleDateString()}`, 10, y);

  doc.save(`Ficha_Inscricao_${dados.nome.replace(/\s/g, '_')}.pdf`);
}

// Função auxiliar para carregar o logo em base64
async function carregarLogo() {
  const imgPath = 'imagens/iAKUTA_logo NOVO.png';
  const response = await fetch(imgPath);
  const blob = await response.blob();
  return await new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

reader.onloadend = () => {
  console.log('Logo carregado com sucesso!');
  resolve(reader.result);
};
