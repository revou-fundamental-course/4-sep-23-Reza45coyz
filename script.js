// Fungsi menghitung luas
function hitungLuas(sisi) {
    // parameter sisi dikali sisi
    return sisi * sisi;
}

// Fungsi menghitung keliling
function hitungKeliling(sisi) {
    // parameter 4 dikali sisi
    return 4 * sisi;
}

// Fungsi tombol hitung luas
document.getElementById('hitung-luas').addEventListener('click', function(event){
    event.preventDefault();
    // Mendapatkan input dari user
    var sisi = document.getElementById('sisi-luas').value;
    if(sisi <= 0){
        alert('Sisi harus lebih besar dari 0');
    } else {
        // Menghitung dan menampilkan luas
        var luas = hitungLuas(sisi);
        document.getElementById('output_luas').textContent = 'Luas: ' + luas;
    }
});

// Fungsi tombol hitung keliling
document.getElementById('hitung-keliling').addEventListener('click', function(event){
    event.preventDefault();
    // Mendapatkan input dari user
    var sisi = document.getElementById('sisi-keliling').value;
    if(sisi <= 0){
        alert('Sisi harus lebih besar dari 0');
    } else {
        // Menghitung dan menampilkan keliling
        var keliling = hitungKeliling(sisi);
        document.getElementById('output_keliling').textContent = 'Keliling: ' + keliling;
    }
});

// Fungsi untuk tombol reset luas
document.getElementById('clear-luas').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('sisi-luas').value = '';
    document.getElementById('output_luas').textContent = '';
});

// Fungsi untuk tombol reset keliling
document.getElementById('clear-keliling').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('sisi-keliling').value = '';
    document.getElementById('output_keliling').textContent = '';
});
