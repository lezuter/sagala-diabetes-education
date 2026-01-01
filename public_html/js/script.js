function expandButton() {
    const btn = document.querySelector('.cpbtn1');
    const existingExtraText = btn.querySelector('.extra-text');

    if (btn.classList.contains('expanded')) {
        // Collapse the button if already expanded
        btn.classList.remove('expanded');
        if (existingExtraText) {
            existingExtraText.remove();
        }
    } else {
        // Expand the button
        btn.classList.add('expanded');

        // Add extra text if not already added
        if (!existingExtraText) {
            const extraText = document.createElement('div');
            extraText.classList.add('extra-text');
            btn.appendChild(extraText);

            // Full text content with plain text
            const fullText = `
Template by Lezuter
Illustration by Freepik

Powered by:
Alya Widya Septina
Amalia Kartika
Aprilianti Zulfi
Az Zahra Mustika
Dewi Kusuma Ningrum`;

            // Typing effect function
            let index = 0;
            function typeWriter() {
                if (index < fullText.length) {
                    extraText.textContent += fullText.charAt(index);
                    index++;
                    setTimeout(typeWriter, 0.5); // Slow down the typing speed
                } else {
                    // After typing is done, modify the names and other terms
                    let textContent = extraText.textContent;
                    // Ganti "Lezuter", "Freepik", dan nama-nama dengan <span> yang memiliki kelas khusus
                    textContent = textContent.replace(
                        /Lezuter|Freepik|Alya Widya Septina|Amalia Kartika|Aprilianti Zulfi|Az Zahra Mustika|Dewi Kusuma Ningrum/g,
                        function(match) {
                            return `<span class="powered-by">${match}</span>`;
                        });
                    extraText.innerHTML = textContent; // Set HTML content after typing
                }
            }
            typeWriter();
        }
    }
}
function expandButton2() {
    const btn = document.querySelector('.cpbtn2');
    const existingExtraText = btn.querySelector('.extra-text');

    if (btn.classList.contains('expanded')) {
        // Collapse the button if already expanded
        btn.classList.remove('expanded');
        if (existingExtraText) {
            existingExtraText.remove();
        }
    } else {
        // Expand the button
        btn.classList.add('expanded');

        // Add extra text if not already added
        if (!existingExtraText) {
            const extraText = document.createElement('div');
            extraText.classList.add('extra-text');
            btn.appendChild(extraText);

            // Full text content with plain text
            const fullText = `
Template by Lezuter
Illustration by Freepik

Powered by:
Alya Widya Septina
Amalia Kartika
Aprilianti Zulfi
Az Zahra Mustika
Dewi Kusuma Ningrum`;

            // Typing effect function
            let index = 0;
            function typeWriter() {
                if (index < fullText.length) {
                    extraText.textContent += fullText.charAt(index);
                    index++;
                    setTimeout(typeWriter, 0.5); // Slow down the typing speed
                } else {
                    // After typing is done, modify the names and other terms
                    let textContent = extraText.textContent;
                    // Ganti "Lezuter", "Freepik", dan nama-nama dengan <span> yang memiliki kelas khusus
                    textContent = textContent.replace(
                        /Lezuter|Freepik|Alya Widya Septina|Amalia Kartika|Aprilianti Zulfi|Az Zahra Mustika|Dewi Kusuma Ningrum/g,
                        function(match) {
                            return `<span class="powered-by">${match}</span>`;
                        });
                    extraText.innerHTML = textContent; // Set HTML content after typing
                }
            }
            typeWriter();
        }
    }
}
function expandButton3() {
    const btn = document.querySelector('.cpbtn4');
    const existingExtraText = btn.querySelector('.extra-text');

    if (btn.classList.contains('expanded')) {
        // Collapse the button if already expanded
        btn.classList.remove('expanded');
        if (existingExtraText) {
            existingExtraText.remove();
        }
    } else {
        // Expand the button
        btn.classList.add('expanded');

        // Add extra text if not already added
        if (!existingExtraText) {
            const extraText = document.createElement('div');
            extraText.classList.add('extra-text');
            btn.appendChild(extraText);

            // Full text content with plain text
            const fullText = `
Template by Lezuter
Illustration by Freepik

Powered by:
Alya Widya Septina
Amalia Kartika
Aprilianti Zulfi
Az Zahra Mustika
Dewi Kusuma Ningrum`;

            // Typing effect function
            let index = 0;
            function typeWriter() {
                if (index < fullText.length) {
                    extraText.textContent += fullText.charAt(index);
                    index++;
                    setTimeout(typeWriter, 0.5); // Slow down the typing speed
                } else {
                    // After typing is done, modify the names and other terms
                    let textContent = extraText.textContent;
                    // Ganti "Lezuter", "Freepik", dan nama-nama dengan <span> yang memiliki kelas khusus
                    textContent = textContent.replace(
                        /Lezuter|Freepik|Alya Widya Septina|Amalia Kartika|Aprilianti Zulfi|Az Zahra Mustika|Dewi Kusuma Ningrum/g,
                        function(match) {
                            return `<span class="powered-by">${match}</span>`;
                        });
                    extraText.innerHTML = textContent; // Set HTML content after typing
                }
            }
            typeWriter();
        }
    }
}

function goBack() {
    // Tambahkan kelas animasi ke body
    document.body.classList.add('body-exit');

    // Tunggu hingga animasi selesai sebelum kembali ke halaman sebelumnya
    setTimeout(() => {
        window.history.back(); // Kembali ke halaman sebelumnya
    }, 200); // Durasi sesuai dengan animasi CSS (0.5 detik)
}


function menu() {
    window.location.href = 'menu.html';
}

function index() {
    window.location.href = 'index.html';
}

function dm() {
    window.location.href = 'diabetesmelitus.html';
}

function faktorrisiko() {
    window.location.href = 'faktorrisiko.html';
}

function angkadm() {
    window.location.href = 'angkadm.html';
}

function pencegahan() {
    window.location.href = 'pencegahan.html';
}

function batasan() {
    window.location.href = 'batasan.html';
}

function animasi() {
    window.location.href = 'animasi.html';
}

function kandungangula() {
    window.location.href = 'kandungangula.html';
}

function resepmakanan() {
    window.location.href = 'resepmakanan.html';
}
