const insert = document.querySelector('#insert');

window.addEventListener('keydown', (event) => {
    const key = event.key === " " ? "Space" : event.key;
    const keyCode = event.keyCode || event.which || key.charCodeAt(0);
    const code = event.code || "N/A";

    insert.innerHTML = `
        <table border="1" cellpadding="10">
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${key}</td>
                <td>${keyCode}</td>
                <td>${code}</td>
            </tr>
        </table>
    `;
});
