function submitQuiz() {
    const form = document.getElementById('form');
    const resultDiv = document.getElementById('result');

    let score = 0;
    const totalQuestions = 5;

    // Check answers
    if (form.q1.value === "Scripting") score++;
    if (form.q2.value === "Mark Myers") score++;
    if (form.q3.value === "Paris") score++;
    if (form.q4.value === "Cascading styling sheet") score++;
    if (form.q5.value === "Pop-up message") score++;

    // Display result
    resultDiv.textContent = `You scored ${score} out of ${totalQuestions}.`;
}
console.log();