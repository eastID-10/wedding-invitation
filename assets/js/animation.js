 
  function toggleOpen() { 

    // Show your content
    document.getElementById('navbar')?.classList.remove('hidden');
    document.getElementById('main-body')?.classList.remove('overflow-hidden');
    document.getElementById('overlay')?.classList.add('hidden');
  }