function cekJawaban() {
    let form = document.getElementById("quizForm");
    let hasil = document.getElementById("hasil");

    let score = 0;
    let totalSoal = 5;

    for (let i = 1; i <= totalSoal; i++) {
        let jawaban = form["q" + i];
        let terpilih = false;

        for (let j = 0; j < jawaban.length; j++) {
            if (jawaban[j].checked) {
                score += parseInt(jawaban[j].value);
                terpilih = true;
            }
        }

        if (!terpilih) {
            alert("Semua soal harus dijawab!");
            return;
        }
    }

    hasil.style.display = "block";

    if (score > 70) {
        hasil.className = "result lulus";
        hasil.innerHTML = "Skor kamu: " + score + "<br>✅ KAMU LULUS!";
    } else {
        hasil.className = "result tidak-lulus";
        hasil.innerHTML = "Skor kamu: " + score + "<br>❌ KAMU TIDAK LULUS!";
    }
}

function resetKuis() {
    document.getElementById("quizForm").reset();
    document.getElementById("hasil").style.display = "none";
}
