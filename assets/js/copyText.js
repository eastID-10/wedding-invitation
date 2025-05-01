document.getElementById('copyText').addEventListener('click', function() {
    const range = document.createRange();
    range.selectNode(this);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('0165 0106 8291 508');
    window.getSelection().removeAllRanges();
    
    // Optional feedback
    const originalText = this.textContent;
    this.textContent = '  ✔️';
    setTimeout(() => { this.textContent = originalText; }, 2000);
  });