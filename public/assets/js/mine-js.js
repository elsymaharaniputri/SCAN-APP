  function redirectToKelas() {
    window.location.href = "kelas.html";
  }
   function redirectToAbsensi() {
      window.location.href = "absensi.html";
    }
     function redirectToLogin() {
        window.location.href = "login.html";
      }

       function redirectToRekap() {
            window.location.href = "detail-kelas.html";
        }

         document.addEventListener("DOMContentLoaded", function () {
        const cols = document.querySelectorAll('.col-lg-4');

        cols.forEach((col, index) => {
            if (index % 2 === 0) { // Memeriksa apakah indeks kolom adalah ganjil
                // Ubah warna latar belakang row
                col.querySelector('.row.py-3').style.backgroundColor = 'var(--secondary-yellow)';
                // Ubah warna progress bar
                col.querySelectorAll('.progress-bar').forEach(progressBar => {
                    progressBar.style.backgroundColor = 'var(--primary-green)';
                });
            }
        });
    });
      function redirectToIndex2() {
        window.location.href = "index.html";
    }
      document.getElementById("togglePassword").addEventListener("click", function() {
        var passwordInput = document.getElementById("password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });