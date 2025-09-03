const terminal = document.getElementById("terminal");

const lines = [
  "Initializing hack.exe ...",
  "Bypassing firewall ...",
  "Accessing secure server ...",
  "Downloading secret files ...",
  "Process complete ✅"
];

let i = 0;

function typeLine(line, cb) {
  let idx = 0;
  const interval = setInterval(() => {
    terminal.innerHTML += line[idx];
    idx++;
    if (idx >= line.length) {
      clearInterval(interval);
      terminal.innerHTML += "\n";
      if (cb) cb();
    }
  }, 50);
}

function loopLines() {
  if (i < lines.length) {
    typeLine(lines[i], () => {
      i++;
      loopLines();
    });
  } else {
    terminal.innerHTML += "\nAll systems breached.\n";
    terminal.innerHTML += "<span class='cursor'></span>";
  }
}

loopLines();
