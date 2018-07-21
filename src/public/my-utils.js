function log(msg) {
  let browserLog = document.getElementById('browserConsole');
  browserLog.innerHTML += `
    <hr/>
    <div>${msg}</div>
  `;
}

function delay(miliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve() }, miliseconds);
  });
}

export { log, delay };