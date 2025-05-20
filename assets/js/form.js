function sendToWhatsApp(event) {
  event.preventDefault();

  // Get form values
  const name = document.querySelector('[name="name"]').value.trim();
  const attendance = document.querySelector('[name="attendance"]').value;
  const message = document.querySelector('[name="message"]').value.trim();

  // Validation
  if (!name) {
    alert('Mohon masukkan nama Anda');
    document.querySelector('[name="name"]').focus();
    return;
  }

  if (!attendance || attendance === '0') {
    alert('Mohon pilih konfirmasi kehadiran');
    document.querySelector('[name="attendance"]').focus();
    return;
  }

  if (!message) {
    alert('Mohon tulis ucapan untuk mempelai');
    document.querySelector('[name="message"]').focus();
    return;
  }

  // Process attendance selection
  let attendanceText = '';
  switch (attendance) {
    case '1':
      attendanceText = 'Akan hadir';
      break;
    case '2':
      attendanceText = 'Berhalangan hadir';
      break;
    default:
      attendanceText = 'Belum memilih';
  }

  // Compose message
  const fullMessage = `*Konfirmasi Kehadiran Pernikahan*\n\nNama: ${name}\nKehadiran: ${attendanceText}\nUcapan: ${message}`;
  const phoneNumber = '6287729210814';
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

  // Open WhatsApp
  window.open(waLink, '_blank');
  
  // Optional: Reset form after submission
  event.target.reset();
}