// Function to show specific section
function showSection(sectionId) {
    const sections = document.getElementsByClassName('section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}

// Event listeners for sidebar links
document.getElementById('link-limit').addEventListener('click', () => showSection('limit-fungsi'));
document.getElementById('link-kekontinuan').addEventListener('click', () => showSection('kekontinuan'));
document.getElementById('link-kalkulator').addEventListener('click', () => showSection('kalkulator'));
document.getElementById('link-disusun-oleh').addEventListener('click', () => showSection('disusun-oleh'));


// Set default section
showSection('limit-fungsi');

// Calculate limit function
function calculateLimit() {
    const func = document.getElementById('function').value;
    const variable = document.getElementById('variable').value;
    const approach = document.getElementById('approach').value;

    try {
        const expression = math.parse(func);
        const compiledExpr = expression.compile();

        let limitValue;
        if (approach === 'Infinity') {
            limitValue = math.evaluate(`limit(${func}, ${variable}, Infinity)`);
        } else if (approach === '-Infinity') {
            limitValue = math.evaluate(`limit(${func}, ${variable}, -Infinity)`);
        } else {
            const numericApproach = parseFloat(approach);
            limitValue = compiledExpr.evaluate({ [variable]: numericApproach });
        }

        document.getElementById('result').innerText = `Limit dari ${func} saat ${variable} mendekati ${approach} adalah ${limitValue}`;
    } catch (error) {
        document.getElementById('result').innerText = "Kesalahan dalam perhitungan limit. Silakan periksa fungsi Anda.";
    }
}
