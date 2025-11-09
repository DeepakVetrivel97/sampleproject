function callBackend() {
    fetch('http://localhost:8080/hello')
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerText = data;
        });
}
