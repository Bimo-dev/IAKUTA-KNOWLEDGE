// ========== FUNÇÕES DE NAVEGAÇÃO ========== //
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    setTimeout(() => {
        document.getElementById(pageId).classList.add('active');
    }, 50);
}

// ========== GERENCIAMENTO DE MODAL ========== //
function openModal() {
    document.getElementById("contactModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("contactModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// ========== FUNÇÕES DO MENU ========== //
function toggleMenu() {
    const menu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.menu-overlay');
    
    menu.classList.toggle('active');
    overlay.style.display = menu.classList.contains('active') ? 'block' : 'none';
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
}

// ========== LISTENERS GLOBAIS ========== //
document.addEventListener('DOMContentLoaded', function() {
    // Fechar modal ao clicar fora
    window.onclick = function(event) {
        const modal = document.getElementById('contactModal');
        if (event.target == modal) {
            closeModal();
        }
    };

    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            document.querySelector('.side-menu').classList.remove('active');
            document.querySelector('.menu-overlay').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Navegação entre páginas
    document.querySelectorAll('.nav-buttons button:not(.contact-header-btn)').forEach(button => {
        button.addEventListener('click', function() {
            const targetPage = this.getAttribute('onclick').replace("showPage('", "").replace("')", "");
            showPage(targetPage);
        });
    });

    // Navegação no menu lateral
    document.querySelectorAll('.side-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('onclick').split("'")[1];
            showPage(targetPage);
            toggleMenu(); // Fecha o menu após seleção
        });
    });
});

// ========== GERADOR DE FICHA DE INSCRIÇÃO ========== //
function gerarFichaInscricao() {
    const form = document.forms['formulario-inscricao'];
    
    // Verificação básica de campos obrigatórios
    if (!form.nomeCompleto.value || !form.email.value || !form.telefoneMovel.value) {
        alert('Por favor, preencha os campos obrigatórios (Nome, Email e Telefone Móvel)');
        return;
    }

    const escapeHtml = (unsafe) => {
        return unsafe ? unsafe.toString().replace(/[&<"'>]/g, (m) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[m]) : '';
    };

    const formatField = (value) => value ? escapeHtml(value) : 'Não informado';

    document.getElementById('pdf-content-inscricao').innerHTML = `
        <div style="padding: 2cm; font-family: Arial, sans-serif;">
            <div style="text-align: center;">
                <img src="https://via.placeholder.com/150x50?text=IAKUTA+LOGO" style="width: 150px; margin-bottom: 10px;">
                <h1 style="color: orange; font-size: 24px;">IAKUTA KNOWLEDGE - Academia de Gestão & Direito</h1>
                <p style="font-size: 12px;">Rua Paiva Couceiro, n.º 81, Bairro Cruzeiro, Luanda</p>
                <p style="font-size: 12px;">Email: iakuta.informacoes@gmail.com | Telefones: 959 407 323 / 932 682 027</p>
                <hr style="margin: 20px 0;">
                <h2 style="color: orange;">Ficha de Inscrição para Formandos</h2>
            </div>

            <div style="font-size: 14px; line-height: 1.6;">
                <h3 style="color: orange;">Dados Pessoais</h3>
                <p><strong>Nome:</strong> ${formatField(form.nomeCompleto.value)}</p>
                <p><strong>Sexo:</strong> ${formatField(form.sexo.value)}</p>
                <p><strong>Nacionalidade:</strong> ${formatField(form.nacionalidade.value)}</p>
                <p><strong>BI/NIF:</strong> ${formatField(form.biNif.value)}</p>
                <p><strong>Telefone (Móvel):</strong> ${formatField(form.telefoneMovel.value)}</p>
                <p><strong>Telefone (Fixo):</strong> ${formatField(form.telefoneFixo.value)}</p>
                <p><strong>Email:</strong> ${formatField(form.email.value)}</p>
                <p><strong>Cidade:</strong> ${formatField(form.cidade.value)}</p>
                <p><strong>Província:</strong> ${formatField(form.provincia.value)}</p>

                <hr style="margin: 20px 0;">

                <h3 style="color: orange;">Informações Acadêmicas</h3>
                <p><strong>Escolaridade:</strong> ${formatField(form.escolaridade.value)}</p>
                <p><strong>Área de Formação:</strong> ${formatField(form.areaFormacao.value)}</p>

                <hr style="margin: 20px 0;">

                <h3 style="color: orange;">Cursos de Interesse</h3>
                <p>${[
                    form.curso1.value,
                    form.curso2.value,
                    form.curso3.value,
                    form.curso5.value,
                    form.curso6.value,
                    form.curso7.value
                ].filter(c => c).join(', ')}</p>

                <p><strong>Horário:</strong> ${formatField(form.horario.value)}</p>
                <p><strong>Período:</strong> ${formatField(form.periodo.value)}</p>
                <p><strong>Horas por Dia:</strong> ${formatField(form.horasDia.value)}</p>
                <p><strong>Modalidade:</strong> ${formatField(form.modalidade.value)}</p>

                <hr style="margin: 20px 0;">

                <h3 style="color: orange;">Método de Pagamento</h3>
                <p>${formatField(form.metodoPagamento.value)}</p>

                <hr style="margin: 20px 0;">

                <h3 style="color: orange;">Autorização</h3>
                <p>Declaro que todas as informações acima são verdadeiras e autorizo o uso dos meus dados para fins administrativos e acadêmicos.</p>
                
                <div style="margin-top: 50px; text-align: right;">
                    <p>_________________________________</p>
                    <p>Assinatura do Formando</p>
                </div>
            </div>
        </div>
    `;

    // Mostra o preview do PDF
    showPage('pdf-preview-page');
}

// ========== GERADOR DE PDF ========== //
function gerarPDF() {
    const element = document.getElementById('pdf-content-inscricao');
    
    const opt = {
        margin:       10,
        filename:     'ficha_inscricao_iakuta.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
}

// ========== ENVIO DO FORMULÁRIO DE CONTATO ========== //
document.getElementById("iakuta-form-modal").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const form = e.target;
    const button = form.querySelector("button[type=submit]");
    
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    const formData = {
        nome: form.nome.value,
        email: form.email.value,
        mensagem: form.mensagem.value
    };

    const API_URL = "https://script.google.com/macros/s/AKfycbznh5NK4VZ2QzClmqkNJQ1pYX12rHY0609KXhjsyezrHUdJn2KLgnypennIjpecIRNxwQ/exec";
    
    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => {
        if (!response.ok) throw new Error("Erro na rede");
        return response.text();
    })
    .then(result => {
        alert("✔ Mensagem enviada com sucesso!");
        form.reset();
        closeModal();
    })
    .catch(error => {
        alert("✖ Erro ao enviar. Tente novamente ou contate-nos pelas redes sociais.");
        console.error("Erro:", error);
    })
    .finally(() => {
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensagem';
    });
});
// Adicione este código ao seu script existente
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});