$("#calc").click(function () {
    let assignmentGrd = $("#assignmentGrd").val();
    let groprojectGrd = $("#groprojectGrd").val();
    let quizGrd = $("#quizGrd").val();
    let midtermExGrd = $("#midtermExGrd").val();
    let finalExGrd = $("#finalExGrd").val();
    let intexGrd = $("#intexGrd").val();

    let finalGrd = (0.5 * assignmentGrd) + (0.1 * groprojectGrd) +
        (0.1 * quizGrd) + (0.1 * midtermExGrd) +
        (0.1 * finalExGrd) + (0.1 * intexGrd);
    finalGrd = Math.round(finalGrd * 100) / 100;
    var letterGrade = "";
    if (finalGrd >= 94) {
        letterGrade = "A";
    } else if (finalGrd >= 90) {
        letterGrade = "A-";
    } else if (finalGrd >= 87) {
        letterGrade = "B+";
    } else if (finalGrd >= 84) {
        letterGrade = "B";
    } else if (finalGrd >= 80) {
        letterGrade = "B-";
    } else if (finalGrd >= 77) {
        letterGrade = "C+";
    } else if (finalGrd >= 74) {
        letterGrade = "C";
    } else if (finalGrd >= 70) {
        letterGrade = "C-";
    } else if (finalGrd >= 67) {
        letterGrade = "D+";
    } else if (finalGrd >= 64) {
        letterGrade = "D";
    } else if (finalGrd >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }
    $("#calcGrd").text("Final grade is: " + letterGrade);
})
