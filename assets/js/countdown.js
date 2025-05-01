 // Set tanggal target: 13 Juni 2025 jam 14:00
 const targetDate = new Date(2025, 5, 13, 14, 0, 0).getTime();
        
 // Update countdown setiap 1 detik
 const countdown = setInterval(function() {
     // Dapatkan tanggal dan waktu sekarang
     const now = new Date().getTime();
     
     // Hitung selisih antara sekarang dan tanggal target
     const distance = targetDate - now;
     
     // Hitung hari, jam, menit, detik
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
     // Tampilkan hasil
     document.getElementById("days").textContent = days.toString().padStart(2, '0');
     document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
     document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
     document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
     
     // Jika countdown selesai
     if (distance < 0) {
         clearInterval(countdown);
         document.getElementById("days").textContent = "00";
         document.getElementById("hours").textContent = "00";
         document.getElementById("minutes").textContent = "00";
         document.getElementById("seconds").textContent = "00";
         document.getElementById("message").textContent = "Waktu telah tiba! 13 Juni 2025 jam 14:00";
     }
 }, 1000);