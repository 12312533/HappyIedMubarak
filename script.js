// 1. DAFTAR MINTA MAAF (EDIT DI SINI)
const apologies = [
    "Maaf ya Bebeee kalau aku sering nyebelin",
    "Maaf kalau aku suka telat bales chat kamu",
    "Maaf ya kalau aku kadang kurang peka",
    "Maaf kalau aku suka bikin kamu nunggu lama",
    "Maaf kalau aku ada salah kata yang nyakitin hati kamu",
    "Maaf belum bisa jadi pangeran yang sempurna buat kamu",
    "Maaf kalau aku suka lupa hal-hal kecil",
    "Maaf kalau aku terlalu sibuk sama urusanku sendiri",
    "Maaf ya kalau aku pernah bikin kamu sedih",
    "Maaf kalau aku suka keras kepala pas kita debat",
    "Maaf ya kalau aku belum bisa sering-sering ketemu",
    "Maaf kalau aku suka bikin kamu khawatir",
    "Maaf atas segala khilafku selama beberapa bulan ini",
    "Maaf kalau aku terasa membuat mu terasa seperti menunggu waktuku",
    "Maaf kalau janjiku ada yang belum keturutan",
    "Maaf ya kalau aku belum memenuhi ekspetasimu",
    "Maaf kalau aku kurang romantis akhir-akhir ini",
    "Maaf ya kalau aku pernah bikin kamu cemburu",
    "Maaf kalau aku pernah membuatmu merasa asing denganku krna rahasia2",
    "Pokoknya minal aidin wal faizin, maafin aku ya Sayang!"
];

const listContainer = document.getElementById('apologyList');

// Generate List secara otomatis
apologies.forEach((text, index) => {
    const card = document.createElement('div');
    card.className = 'apology-card';
    card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
    card.style.opacity = "0"; // Untuk animasi masuk
    card.innerHTML = `<strong>${index + 1}.</strong> ${text}`;
    listContainer.appendChild(card);
});

// 2. LOGIKA MUSIK
const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('playBtn');
const progressFill = document.getElementById('progressFill');

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = 'II';
    } else {
        audio.pause();
        playBtn.innerText = '▶';
    }
}

audio.ontimeupdate = () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = progress + "%";
};

// Menambahkan CSS animasi secara dinamis untuk list
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

playBtn.addEventListener('click', togglePlay);