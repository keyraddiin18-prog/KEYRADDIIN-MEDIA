const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalIcon = document.getElementById("modalIcon");
const modalOptions = document.getElementById("modalOptions");

function openModal(type) {
    let title = "";
    let description = "";
    let icon = "";
    let options = "";

    if (type === "registration") {
        title = "Student Registration";
        description = "Student tajaajila barbaaddu filadhu.";
        icon = "📝";

        options = `
            <!-- LINKII HAARAA: STUDENT REGISTRATION -->
            <a class="option" href="https://keyraddiin18-prog.github.io/KEYRADDIIN-STUDENT-ID/index.html" target="_blank">
                <div class="option-icon">📝</div>
                <div class="option-text">
                    <strong>Student Registration</strong>
                    <span>Galmee barataa fi exam registration</span>
                </div>
                <div>›</div>
            </a>

            <a class="option" href="https://keyraddiin18-prog.github.io/KEYRADDIIN-STUDENT-ID/student-dashboard.html" target="_blank">
                <div class="option-icon">🪪</div>
                <div class="option-text">
                    <strong>Student Dashboard</strong>
                    <span>Student ID fi dashboard kee ilaali</span>
                </div>
                <div>›</div>
            </a>
        `;
    }

    if (type === "exam") {
        title = "Exam Center";
        description = "Qormaataaf tajaajila barbaaddu filadhu.";
        icon = "🎓";

        options = `
            <a class="option" href="https://keyraddiin18-prog.github.io/KEYRADDIIN-registration.et/" target="_blank">
                <div class="option-icon">ℹ️</div>
                <div class="option-text">
                    <strong>Exam Information</strong>
                    <span>Odeeffannoo fi qormaatawwan ilaali</span>
                </div>
                <div>›</div>
            </a>

            <a class="option" href="https://keyraddiin18-prog.github.io/KEYRADDIIN-EXAM-CENTER-SECOND-BRANCH/" target="_blank">
                <div class="option-icon">📝</div>
                <div class="option-text">
                    <strong>Start Exam</strong>
                    <span>Qormaata kallattiin seeni</span>
                </div>
                <div>›</div>
            </a>
        `;
    }

    if (type === "resources") {
        title = "Educational Resources";
        description = "Qabeenya barnootaa barbaaddu filadhu.";
        icon = "📚";

        options = `
            <a class="option" href="https://t.me/Grade10StudentsTutorialBot" target="_blank">
                <div class="option-icon">🎓</div>
                <div class="option-text">
                    <strong>Grade 10 Students Tutorial</strong>
                    <span>Video lessons, notes fi barnoota</span>
                </div>
                <div>›</div>
            </a>

            <a class="option" href="https://t.me/Keyraddiinmedia" target="_blank">
                <div class="option-icon">📢</div>
                <div class="option-text">
                    <strong>KEYRADDIIN MEDIA Telegram</strong>
                    <span>Beeksisa fi odeeffannoo barnootaa</span>
                </div>
                <div>›</div>
            </a>
        `;
    }

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalIcon.textContent = icon;
    modalOptions.innerHTML = options;

    modal.classList.add("show");
}

function closeModal() {
    modal.classList.remove("show");
}

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});
