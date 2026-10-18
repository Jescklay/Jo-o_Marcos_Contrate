/* ==========================================================
   SECTION: EFEITO DE DIGITAÇÃO (HERO SECTION)
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const typedNameElement = document.getElementById("typed-name");
    const nameText = "João Marcos";
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function typeEffect() {
        if (!typedNameElement) return;

        if (!isDeleting && charIndex <= nameText.length) {
            typedNameElement.textContent = nameText.substring(0, charIndex);
            charIndex++;
            typingSpeed = 150;
        } else if (isDeleting && charIndex >= 0) {
            typedNameElement.textContent = nameText.substring(0, charIndex);
            charIndex--;
            typingSpeed = 100;
        }

        if (charIndex > nameText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pausa no fim
        } else if (charIndex < 0) {
            isDeleting = false;
            typingSpeed = 500; // Pausa antes de reescrever
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});

/* ==========================================================
   SECTION: MENU RESPONSIVO MOBILE
   ========================================================== */
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });
}

/* ==========================================================
   SECTION: LIGHTBOX DE FOTOS (MODAL)
   ========================================================== */
function openModal(element) {
    const img = element.querySelector('img');
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImage');

    if (modal && modalImg && img) {
        modalImg.src = img.src;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden'; // Impede o scroll da página ao abrir
    }
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Restaura o scroll
    }
}

/* ==========================================================
   SECTION: CALENDÁRIO EM TEMPO REAL E WHATSAPP
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Ativação do Flatpickr
    if (typeof flatpickr !== "undefined") {
        flatpickr("#event-date", {
            locale: "pt",
            minDate: "today",
            dateFormat: "d/m/Y",
            disableMobile: "true"
        });
    }

    // Envio dos dados para o WhatsApp do Músico
    const whatsappForm = document.getElementById("whatsapp-form");
    if (whatsappForm) {
        whatsappForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const contractorName = document.getElementById("contractor-name").value.trim();
            const eventDate = document.getElementById("event-date").value.trim();
            const eventDetails = document.getElementById("event-details").value.trim();

            // Insira o seu número de WhatsApp com DDI e DDD (Ex: 5588996977814)
            const whatsappNumber = "5588996977814";

            const message = `*Olá, João Marcos! Gostaria de solicitar um orçamento.*\n\n` +
                `👤 *Contratante:* ${contractorName}\n` +
                `📅 *Data Desejada:* ${eventDate}\n` +
                `📍 *Detalhes/Local:* ${eventDetails}`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            window.open(whatsappURL, "_blank");
        });
    }
});