var isPopupDisplayed = false;

function showPopup(title, ip, port) {
    if (isPopupDisplayed) {
        return; // Jika popup sudah ditampilkan, hentikan fungsi
    }

    isPopupDisplayed = true; // Setel status popup menjadi ditampilkan

    var popup = document.createElement('div');
    popup.className = 'popup';

    var closeButton = document.createElement('span');
    closeButton.className = 'popup-close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
        document.body.removeChild(popup);
        isPopupDisplayed = false; // Setel status popup menjadi tidak ditampilkan
    };

    var titleElement = document.createElement('h2');
    titleElement.className = 'popup-title';
    titleElement.textContent = title;

    var contentElement = document.createElement('div');
    contentElement.className = 'popup-content';

    // Format text
    var contentHTML = '';
    if (ip) {
        contentHTML += `<p>IP: <span class="ip-text">${ip}</span> <button class="copy-btn" onclick="copyToClipboard('${ip}')"><i class="fas fa-copy"></i></button></p>`;
    }
    if (port) {
        contentHTML += `<p>Port: <span class="port-text">${port}</span> <button class="copy-btn" onclick="copyToClipboard('${port}')"><i class="fas fa-copy"></i></button></p>`;
    }

    contentElement.innerHTML = contentHTML;

    popup.appendChild(closeButton);
    popup.appendChild(titleElement);
    popup.appendChild(contentElement);

    document.body.appendChild(popup);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Text copied to clipboard');

        // Menambahkan kelas animasi
        var ipText = document.querySelector('.ip-text');
        var portText = document.querySelector('.port-text');

        if (ipText && ipText.innerText === text) {
            ipText.classList.add('copied-animation');
            setTimeout(function() {
                ipText.classList.remove('copied-animation');
            }, 1000);
        } else if (portText && portText.innerText === text) {
            portText.classList.add('copied-animation');
            setTimeout(function() {
                portText.classList.remove('copied-animation');
            }, 1000);
        }
    }, function(err) {
        console.error('Unable to copy text to clipboard', err);
    });
}
