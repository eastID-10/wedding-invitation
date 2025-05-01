function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.querySelector('[name="name"]').value;
  const attendance = document.querySelector('[name="attendance"]').value;
  const message = document.querySelector('[name="message"]').value;

  let attendanceText = '';
  if (attendance === '1') attendanceText = 'Akan hadir';
  else if (attendance === '2') attendanceText = 'Berhalangan hadir';
  else attendanceText = 'Belum memilih';

  const fullMessage = `*Konfirmasi Kehadiran Pernikahan*\n\nNama: ${name}\nKehadiran: ${attendanceText}\nUcapan: ${message}`;
  const phoneNumber = '6283100254483';
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

  window.open(waLink, '_blank');
}