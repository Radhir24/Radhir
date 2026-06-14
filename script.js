// --- SYSTEM INTERFACE STANDBY DISPATCH ---
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }
        executeMatrixBackgroundSystem();
        initiateTypingMainframe();
        engageViewportTracking();
    }, 1800);
});

// --- DIGITAL ENVIRONMENT CANVAS GRAPHICS ---
function executeMatrixBackgroundSystem() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let resizeDebounce;
    function matchWindowSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    matchWindowSize();

    window.addEventListener('resize', () => {
        clearTimeout(resizeDebounce);
        resizeDebounce = setTimeout(matchWindowSize, 100);
    });

    const binaryStream = "01";
    const streamsArray = binaryStream.split("");
    const fontSizeNode = 13;
    const verticalColumns = canvas.width / fontSizeNode;
    const fallingDrops = Array(Math.floor(verticalColumns)).fill(1);

    function renderFrame() {
        ctx.fillStyle = "rgba(5, 5, 8, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00f2fe";
        ctx.font = fontSizeNode + "px 'Orbitron'";

        for (let i = 0; i < fallingDrops.length; i++) {
            const outputChar = streamsArray[Math.floor(Math.random() * streamsArray.length)];
            ctx.fillText(outputChar, i * fontSizeNode, fallingDrops[i] * fontSizeNode);

            if (fallingDrops[i] * fontSizeNode > canvas.height && Math.random() > 0.98) {
                fallingDrops[i] = 0;
            }
            fallingDrops[i]++;
        }
    }
    setInterval(renderFrame, 35);
}

// --- AUTONOMOUS TERMINAL TYPING LOGIC ---
function initiateTypingMainframe() {
    const outputTarget = document.getElementById('typingEngine');
    if (!outputTarget) return;

    const datasetStrings = ["FRONTEND CORE ARCHITECT", "INTERFACE DEVELOPER", "LOGIC PIPELINE DESIGNER"];
    let phrasePtr = 0;
    let charPtr = 0;
    let removeState = false;
    let intervalTimer = 90;

    function handleTypingLifecycle() {
        const fullString = datasetStrings[phrasePtr];

        if (removeState) {
            outputTarget.textContent = fullString.substring(0, charPtr - 1);
            charPtr--;
            intervalTimer = 35;
        } else {
            outputTarget.textContent = fullString.substring(0, charPtr + 1);
            charPtr++;
            intervalTimer = 110;
        }

        if (!removeState && charPtr === fullString.length) {
            intervalTimer = 2200; 
            removeState = true;
        } else if (removeState && charPtr === 0) {
            removeState = false;
            phrasePtr = (phrasePtr + 1) % datasetStrings.length;
            intervalTimer = 350;
        }
        setTimeout(handleTypingLifecycle, intervalTimer);
    }
    handleTypingLifecycle();
}

// --- MOBILE INTERACTION BAR TOGGLE ---
const mobileToggle = document.getElementById('mobileToggle');
const navMenuElement = document.querySelector('.nav-menu');
if (mobileToggle && navMenuElement) {
    mobileToggle.addEventListener('click', () => {
        navMenuElement.classList.toggle('visible');
    });
    document.querySelectorAll('.nav-menu a').forEach(node => {
        node.addEventListener('click', () => {
            navMenuElement.classList.remove('visible');
        });
    });
}

// --- VIEWPORT SCROLL DETECTION PIPELINE ---
function engageViewportTracking() {
    const sectionsArray = document.querySelectorAll('section');
    const linksArray = document.querySelectorAll('.nav-menu a');
    const revealTargets = document.querySelectorAll('.viewport-reveal');

    const viewObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('triggered');
            }
        });
    }, { threshold: 0.12 });

    revealTargets.forEach(target => viewObserver.observe(target));

    window.addEventListener('scroll', () => {
        let selectedId = "";
        sectionsArray.forEach(section => {
            const topOffset = section.offsetTop;
            if (window.scrollY >= topOffset - 140) {
                selectedId = section.getAttribute('id');
            }
        });
        linksArray.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${selectedId}`) {
                link.classList.add('active');
            }
        });
    });
}

// --- COMPULSORY LIVE MODULE 1: CALCULATOR EXECUTION ---
const calcOutputField = document.getElementById('calcDisplayOutput');
function clearCalculator() {
    if (calcOutputField) calcOutputField.value = '0';
}
function appendCalcValue(val) {
    if (!calcOutputField) return;
    if (calcOutputField.value === '0' && !isNaN(val)) {
        calcOutputField.value = val;
    } else {
        calcOutputField.value += val;
    }
}
function processCalculatorOutput() {
    if (!calcOutputField) return;
    try {
        const syntaxStatement = calcOutputField.value;
        if (syntaxStatement) {
            calcOutputField.value = Function(`"use strict"; return (${syntaxStatement})`)();
        }
    } catch (err) {
        calcOutputField.value = 'SYS_ERROR';
    }
}

// --- COMPULSORY LIVE MODULE 2: TO-DO TASK DESK ---
const todoListElement = document.getElementById('todoListElement');
const todoInputField = document.getElementById('todoInputField');
function executeNewTodoItem() {
    if (!todoInputField || !todoListElement || todoInputField.value.trim() === '') return;

    const liNode = document.createElement('li');
    liNode.className = 'todo-node';
    liNode.innerHTML = `
        <span onclick="this.parentElement.classList.toggle('done')">${todoInputField.value}</span>
        <i class="fa-solid fa-square-minus" onclick="this.parentElement.remove()"></i>
    `;
    todoListElement.appendChild(liNode);
    todoInputField.value = '';
}

// --- COMPULSORY LIVE MODULE 3: BALANCED EXPENSE LEDGER ---
let internalSystemBalance = 0;
const netBalanceValDisplay = document.getElementById('netBalanceVal');
const expenseLabelInput = document.getElementById('expenseLabel');
const expenseValueInput = document.getElementById('expenseValue');
const ledgerLogElement = document.getElementById('ledgerLogElement');

function commitTransactionItem() {
    if (!expenseLabelInput || !expenseValueInput || !netBalanceValDisplay || !ledgerLogElement) return;

    const textLabel = expenseLabelInput.value.trim();
    const numericAmount = parseFloat(expenseValueInput.value);

    if (textLabel === '' || isNaN(numericAmount)) return;

    internalSystemBalance += numericAmount;
    netBalanceValDisplay.textContent = `₹${internalSystemBalance.toFixed(2)}`;

    const rowNode = document.createElement('li');
    rowNode.className = `ledger-row ${numericAmount >= 0 ? 'positive' : 'negative'}`;
    rowNode.innerHTML = `<span>${textLabel}</span> <span>${numericAmount >= 0 ? '+' : ''}₹${numericAmount.toFixed(2)}</span>`;

    ledgerLogElement.insertBefore(rowNode, ledgerLogElement.firstChild);
    expenseLabelInput.value = '';
    expenseValueInput.value = '';
}

// --- COMPULSORY LIVE MODULE 4: RADAR WEATHER SIMULATOR ---
function fetchSimulatedWeatherState() {
    const weatherTargetNode = document.getElementById('weatherTargetNode');
    const wCity = document.getElementById('wCity');
    const wTemp = document.getElementById('wTemp');
    const wDesc = document.getElementById('wDesc');
    const wWind = document.getElementById('wWind');
    const wHum = document.getElementById('wHum');
    const wConditionIcon = document.getElementById('wConditionIcon');

    if (!weatherTargetNode || weatherTargetNode.value.trim() === '') return;

    const structuralMockData = {
        chennai: { temp: '34°C', text: 'ATMOSPHERE: INTENSE CYCLONIC HUMIDITY', wind: '18 km/h', hum: '85%', icon: 'fa-cloud-bolt' },
        vijayawada: { temp: '38°C', text: 'ATMOSPHERE: THERMAL HEATWAVE OVERLOAD', wind: '11 km/h', hum: '42%', icon: 'fa-sun' },
        hyderabad: { temp: '30°C', text: 'ATMOSPHERE: STABLE GRADIENT PRESSURE', wind: '13 km/h', hum: '48%', icon: 'fa-cloud-sun' },
        bangalore: { temp: '23°C', text: 'ATMOSPHERE: HIGH SHOWERS RADIAL LAYER', wind: '20 km/h', hum: '75%', icon: 'fa-cloud-showers-heavy' }
    };

    const parsedKey = weatherTargetNode.value.toLowerCase().trim();
    const record = structuralMockData[parsedKey] || { temp: '28°C', text: 'ATMOSPHERE: ISOLATED AMBIENT LAYER REGION', wind: '14 km/h', hum: '55%', icon: 'fa-cloud' };

    if (wCity) wCity.textContent = `${weatherTargetNode.value.toUpperCase()}, IN`;
    if (wTemp) wTemp.textContent = record.temp;
    if (wDesc) wDesc.textContent = record.text;
    if (wWind) wWind.textContent = record.wind;
    if (wHum) wHum.textContent = record.hum;
    if (wConditionIcon) wConditionIcon.className = `fa-solid ${record.icon}`;
}

// --- COMPULSORY LIVE MODULE 5: MAINFRAME GENERATIVE TELEMETRY CHAT ---
function processAiTerminalMessage() {
    const aiMainframeInput = document.getElementById('aiMainframeInput');
    const aiLogsViewport = document.getElementById('aiLogsViewport');
    if (!aiMainframeInput || !aiLogsViewport || aiMainframeInput.value.trim() === '') return;

    const userMessageString = aiMainframeInput.value.trim();

    const clientBlock = document.createElement('div');
    clientBlock.className = 'msg-block client';
    clientBlock.innerHTML = `<span class="pfx">CLIENT:</span> ${userMessageString}`;
    aiLogsViewport.appendChild(clientBlock);

    aiMainframeInput.value = '';
    aiLogsViewport.scrollTop = aiLogsViewport.scrollHeight;

    setTimeout(() => {
        let compiledOutput = "Query analyzed against localized environment logs. Operation success.";
        const clearTermQuery = userMessageString.toLowerCase();

        if (clearTermQuery.includes('skills') || clearTermQuery.includes('stack')) {
            compiledOutput = "Radhir's technical stack verification: HTML5, CSS3, JavaScript (ES6+), Java, Python, and Viewport Optimization Layouts.";
        } else if (clearTermQuery.includes('projects') || clearTermQuery.includes('live')) {
            compiledOutput = "Mainframe live validation confirmed. Open functional sub-modules available: Calculator, Tracker, Weather console, Task layout deck inside section 03.";
        } else if (clearTermQuery.includes('contact') || clearTermQuery.includes('mail')) {
            compiledOutput = "Direct messaging channels established at: radhirkamala@gmail.com / secure cell uplink +91 89850 54595.";
        }

        const systemBlock = document.createElement('div');
        systemBlock.className = 'msg-block system';
        systemBlock.innerHTML = `<span class="pfx">SYSTEM AI:</span> ${compiledOutput}`;
        aiLogsViewport.appendChild(systemBlock);
        aiLogsViewport.scrollTop = aiLogsViewport.scrollHeight;
    }, 750);
}

// --- FORM PAYLOAD TRANSMISSION SIMULATOR ---
function dispatchContactPayload(e) {
    e.preventDefault();
    const statusLabel = document.getElementById('txStatusBox');
    if (!statusLabel) return;

    statusLabel.className = 'tx-status-monitor ok';
    statusLabel.textContent = "TRANSMISSION COMPLETE. RADHIR.EXE ENCRYPTED CHANNELS OPENED SUCCESFULLY.";
    document.getElementById('terminalSecureForm').reset();
}

