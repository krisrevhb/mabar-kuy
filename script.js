function showPopup(title, ip, port) {
    // Cek apakah sudah ada popup yang ditampilkan
    var existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        // Jika ada, jangan tampilkan popup baru
        return;
    }

    var popup = document.createElement('div');
    popup.className = 'popup';
    
    var closeButton = document.createElement('span');
    closeButton.className = 'popup-close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
        document.body.removeChild(popup);
    };
    
    var titleElement = document.createElement('h2');
    titleElement.className = 'popup-title';
    titleElement.textContent = title;

    var contentElement = document.createElement('div');
    contentElement.className = 'popup-content';
    
    // Format teks sesuai dengan urutan yang diinginkan
    var contentHTML = `<p>IP: ${ip}</p>`;
    if (port) {
        contentHTML += `<p>Port: ${port}</p>`;
    }
    
    contentElement.innerHTML = contentHTML;
    
    popup.appendChild(closeButton);
    popup.appendChild(titleElement);
    popup.appendChild(contentElement);
    
    document.body.appendChild(popup);
}
