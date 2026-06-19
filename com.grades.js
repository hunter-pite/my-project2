
function analyze() {

    const units = document.querySelectorAll('.units');
    const grades = document.querySelectorAll('.grades');
    const results = document.querySelectorAll('.result');

    let totalUnits = 0;
    let totalResult = 0;

    for (let i = 0; i < units.length; i++) {
        const unitValue = parseFloat(units[i].value);
        const gradeValue = parseFloat(grades[i].value);
        if (!isNaN(unitValue) && !isNaN(gradeValue)) {
            const rowResult = unitValue * gradeValue;
              results[i].textContent = rowResult.toFixed(2);
              totalUnits += unitValue;
              totalResult += rowResult;
        } else {
            results[i].textContent = "0";
        }
    }

    document.querySelector(".result_2").textContent =
        totalResult.toFixed(2);

    const weightedAverage = totalUnits === 0 ? 0 : totalResult / totalUnits;
    document.querySelector(".result_3").textContent =
        weightedAverage.toFixed(2);
}

 function savePage() {
    const inputs = document.querySelectorAll("#content input");
   
    inputs.forEach(input => {
        input.setAttribute("value", input.value);
    });

    const html = document.getElementById("content").innerHTML;
    localStorage.setItem("savePage", html);
    alert("Page saved!");
}

function loadPage() {
    const saved = localStorage.getItem("savePage");

    if(saved) {

        document.getElementById("content").innerHTML = saved;
        const inputs = document.querySelectorAll("#content input");

        inputs.forEach(input => {
            input.value = input.getAttribute("value") || "";
        });

        alert("Page loaded!");

    } 
    else {
        alert("No saved page found.");
    }

}