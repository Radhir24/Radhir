// --- SYSTEM INTERFACE BOOTSTREAM ---
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
    }, 1200);
});

// --- DIGITAL ENVIRONMENT MATRIX LINER ---
function executeMatrixBackgroundSystem() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function matchWindowSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    matchWindowSize();
    window.addEventListener('resize', matchWindowSize);

    const binaryStream = "01";
    const streamsArray = binaryStream.split("");
    const fontSizeNode = 14;
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

            if (fallingDrops[i] * fontSizeNode > canvas.height && Math.random() > 0.975) {
                fallingDrops[i] = 0;
            }
            fallingDrops[i]++;
        }
    }
    setInterval(renderFrame, 35);
}

// --- AUTOMATED TYPING ENGINE ---
function initiateTypingMainframe() {
    const outputTarget = document.getElementById('typingEngine');
    if (!outputTarget) return;

    const datasetStrings = ["FRONTEND CORE ARCHITECT", "INTERFACE DEVELOPER", "LOGIC PIPELINE DESIGNER"];
    let phrasePtr = 0, charPtr = 0, removeState = false, intervalTimer = 90;

    function handleTypingLifecycle() {
        const fullString = datasetStrings[phrasePtr];

        if (removeState) {
            outputTarget.textContent = fullString.substring(0, charPtr - 1);
            charPtr--;
            intervalTimer = 30;
        } else {
            outputTarget.textContent = fullString.substring(0, charPtr + 1);
            charPtr++;
            intervalTimer = 100;
        }

        if (!removeState && charPtr === fullString.length) {
            intervalTimer = 2000;
            removeState = true;
        } else if (removeState && charPtr === 0) {
            removeState = false;
            phrasePtr = (phrasePtr + 1) % datasetStrings.length;
            intervalTimer = 300;
        }
        setTimeout(handleTypingLifecycle, intervalTimer);
    }
    handleTypingLifecycle();
}

// --- RESPONSIVE NAVIGATION CONTROL ---
const mobileToggle = document.getElementById('mobileToggle');
const navMenuElement = document.querySelector('.nav-menu');
if (mobileToggle && navMenuElement) {
    mobileToggle.addEventListener('click', () => navMenuElement.classList.toggle('visible'));
    document.querySelectorAll('.nav-menu a').forEach(node => {
        node.addEventListener('click', () => navMenuElement.classList.remove('visible'));
    });
}

// --- VIEWPORT SCROLL MONITOR ---
function engageViewportTracking() {
    const sectionsArray = document.querySelectorAll('section');
    const linksArray = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let selectedId = "";
        sectionsArray.forEach(section => {
            if (window.scrollY >= (section.offsetTop - 150)) {
                selectedId = section.getAttribute('id');
            }
        });
        linksArray.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${selectedId}`) link.classList.add('active');
        });
    });
}

// --- LAB CORE 1: CALCULATOR RUNTIME ---
const calcOutputField = document.getElementById('calcDisplayOutput');
function clearCalculator() { if (calcOutputField) calcOutputField.value = '0'; }
function appendCalcValue(val) {
    if (!calcOutputField) return;
    if (calcOutputField.value === '0' && !isNaN(val)) calcOutputField.value = val;
    else calcOutputField.value += val;
}
function processCalculatorOutput() {
    if (!calcOutputField) return;
    try {
        const syntaxStatement = calcOutputField.value;
        if (syntaxStatement) calcOutputField.value = Function(`"use strict"; return (${syntaxStatement})`)();
    } catch { calcOutputField.value = 'SYS_ERROR'; }
}

// --- LAB CORE 2: TO-DO MANAGER ---
const todoListElement = document.getElementById('todoListElement');
const todoInputField = document.getElementById('todoInputField');
function executeNewTodoItem() {
    if (!todoInputField || !todoListElement || todoInputField.value.trim() === '') return;
    const liNode = document.createElement('li');
    liNode.className = 'todo-node';
    liNode.innerHTML = `
        <span onclick="this.parentElement.classList.toggle('done')">${todoInputField.value}</span>
        <i class="fa-solid fa-circle-minus" onclick="this.parentElement.remove()"></i>
    `;
    todoListElement.appendChild(liNode);
    todoInputField.value = '';
}

// --- LAB CORE 3: TRANSACTION LEDGER ---
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

// --- LAB CORE 4: WEATHER DASHBOARD SIMULATION ---
function fetchSimulatedWeatherState() {
    const weatherTargetNode = document.getElementById('weatherTargetNode');
    const wCity = document.getElementById('wCity'), wTemp = document.getElementById('wTemp'), wDesc = document.getElementById('wDesc');
    const wWind = document.getElementById('wWind'), wHum = document.getElementById('wHum'), wConditionIcon = document.getElementById('wConditionIcon');

    if (!weatherTargetNode || weatherTargetNode.value.trim() === '') return;
    const structuralMockData = {
        chennai: { temp: '34°C', text: 'ATMOSPHERE: INTENSE CYCLONIC HUMIDITY', wind: '18 km/h', hum: '85%', icon: 'fa-cloud-bolt' },
        vijayawada: { temp: '38°C', text: 'ATMOSPHERE: THERMAL HEATWAVE OVERLOAD', wind: '11 km/h', hum: '42%', icon: 'fa-sun' }
    };

    const parsedKey = weatherTargetNode.value.toLowerCase().trim();
    const record = structuralMockData[parsedKey] || { temp: '28°C', text: 'ATMOSPHERE: REGIONAL AMBIENT LAYER', wind: '14 km/h', hum: '52%', icon: 'fa-cloud' };

    if (wCity) wCity.textContent = `${weatherTargetNode.value.toUpperCase()}, IN`;
    if (wTemp) wTemp.textContent = record.temp;
    if (wDesc) wDesc.textContent = record.text;
    if (wWind) wWind.textContent = record.wind;
    if (wHum) wHum.textContent = record.hum;
    if (wConditionIcon) wConditionIcon.className = `fa-solid ${record.icon}`;
}

// --- LAB CORE 5: TERMINAL CONVERSATION ROUTINE ---
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

    setTimeout(() => {
        let compiledOutput = "Query parsed against core frontend logs. Operation successfully mapped.";
        const clearTermQuery = userMessageString.toLowerCase();

        if (clearTermQuery.includes('skills')) compiledOutput = "Active skills loaded: HTML5, CSS3, JavaScript architecture, and Java systems logic parsing.";
        else if (clearTermQuery.includes('project')) compiledOutput = "Operational test scripts active: Embedded system calculation logs, ledger state trackers, atmospheric weather tools.";

        const systemBlock = document.createElement('div');
        systemBlock.className = 'msg-block system';
        systemBlock.innerHTML = `<span class="pfx">SYSTEM AI:</span> ${compiledOutput}`;
        aiLogsViewport.appendChild(systemBlock);
        aiLogsViewport.scrollTop = aiLogsViewport.scrollHeight;
    }, 600);
}

// --- DATA PAYLOAD SIMULATION DISPATCH ---
function dispatchContactPayload(e) {
    e.preventDefault();
    const statusLabel = document.getElementById('txStatusBox');
    if (statusLabel) {
        statusLabel.className = 'tx-status-monitor ok';
        statusLabel.textContent = "TRANSMISSION ESCALATED. SECURE FRONTEND DATA CHANNELS INITIATED.";
        document.getElementById('terminalSecureForm').reset();
    }
}

