$("#calc").click(function () {
    // create check
    var valid = true;
    //Grab values from user input
    let assignmentGrd = $("#assignmentGrd").val();
    let groprojectGrd = $("#groprojectGrd").val();
    let quizGrd = $("#quizGrd").val();
    let midtermExGrd = $("#midtermExGrd").val();
    let finalExGrd = $("#finalExGrd").val();
    let intexGrd = $("#intexGrd").val();

    // Check for valid data
    if ((assignmentGrd < 0 | assignmentGrd > 100)
        | (groprojectGrd < 0 | groprojectGrd > 100)
        | (quizGrd < 0 | quizGrd > 100)
        | (midtermExGrd < 0 | midtermExGrd > 100)
        | (finalExGrd < 0 | finalExGrd > 100)
        | (intexGrd < 0 | intexGrd > 100))
    {
        valid = false;
    }

    if (valid) // if data is valid
    {
        // calculate final grade
        let finalGrd = (0.5 * assignmentGrd) + (0.1 * groprojectGrd) +
            (0.1 * quizGrd) + (0.1 * midtermExGrd) +
            (0.1 * finalExGrd) + (0.1 * intexGrd);
        finalGrd = Math.round(finalGrd * 100) / 100;

        var letterGrade = "";

        // Calculate letter grade based off number

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
        // Display the grade
        alert("Final grade is: " + letterGrade);
    }
    
})
