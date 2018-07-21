export function log(msg) {
  let browserLog = document.getElementById('browserConsole');
  browserLog.innerHTML += `
    <hr/>
    <div>${msg}</div>
  `;
}

export function delay(miliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve() }, miliseconds);
  });
}