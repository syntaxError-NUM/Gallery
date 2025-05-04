document.querySelectorAll('.album-header').forEach(header => {
    header.addEventListener('click', function() {
        const album = this.parentElement;
        const isActive = album.classList.contains('active');
        
        document.querySelectorAll('.album').forEach(a => a.classList.remove('active'));
        
        if (!isActive) {
            album.classList.add('active');
        }
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.album')) {
        document.querySelectorAll('.album').forEach(a => a.classList.remove('active'));
    }
});