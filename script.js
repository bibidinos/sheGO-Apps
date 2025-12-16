document.addEventListener('DOMContentLoaded', function() {
    
    // Cari semua ikon mata (icon-right)
    const togglePasswordIcons = document.querySelectorAll('.icon-right');

    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // Cari input yang berada dalam baris (parent) yang sama dengan ikon ni
            const input = this.parentElement.querySelector('input');

            // Semak jika input sekarang adalah password atau text
            if (input.type === 'password') {
                // Tukar jadi text (nampak password)
                input.type = 'text';
                
                // Tukar ikon mata (jadi mata terbuka)
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            } else {
                // Tukar balik jadi password (bintang-bintang)
                input.type = 'password';
                
                // Tukar ikon mata (jadi mata potong/tutup)
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            }
        });
    });

});