const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help: 'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about: "Hello 👋,<br>I'm Idan Hajbeko, also known as idancode, and I love hacking and programming.<br>Most of the stuff I create has errors, but who doesn't?",
  skills: '<span class="code">Languages:</span> Python, C++, C, HTML, CSS, JavaScript, batch, PHP<br>\
    <span class="code">Technologies:</span> SQL, MySQL,Kali Linux, Metasploit, IDA, Apache, Burp Suite, Docker<br>\
    <span class="code">Frameworks:</span> Bootstrap, Flask, Node.js(a little), TensorFlow<br>\
    <span class="code">Subjects:</span> Cybersecurity, cryptography, Hacking, OSINT, malware analysis, malware development Machine Learning, Data Science, Data Structures and Algorithms (DSA), Artificial Intelligence, Arduino ',
  education: "Just finished middle school.<br>But I did learn cybersecurity at university in the Israel Cyber Campus course for two years",
  experience: "No Experience 😥, I just make things I enjoy!",
  contact: "You can contact me on any of the following links:<br><a href='mailto:idancode.hajbeko@gmail.com' class='success link'>Email</a>, <a onclick=\"alert('Discord Username: 1idan1'); return false;\" class='success link'>Discord</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);