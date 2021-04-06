//#region Class Table Scripts
let tableGenerated = false;

// Selection Change event causes different tables to be presented.
function DisplayClasses(value)
{
    if (value == 'freshman')
    {   
        fillClassTable('Biology I', 'Statistics I', 'Intro to Programming', 'Calculus I');
    }
    else if (value == 'sophomore')
    {
        fillClassTable('Biology II', 'Intro to Databases', 'Calculus II', 'Physics I');
    }
    else if (value == 'junior')
    {
        fillClassTable('Programming II', 'Physics II', 'Discrete Mathematics', 'Technical Communication');
    }
    else
    {
        fillClassTable('Advanced Web Development', 'Mobile Development', 'Project Management', 'Cyber Security');
    }
}

// Fills class table using parameters attached to student status.
function fillClassTable(className1, className2, className3, className4){

    // If table has already been populated, reset table contents.
    if (tableGenerated == true){
    document.getElementsByTagName('tbody')[0].innerHTML = "";
    }

    // Get table from HTML.
    let classTable = document.getElementById('classtable');

    let headerRow = classTable.insertRow(0);
    headerRow.setAttribute('class', 'header_row');

    // Generate Course Title th
    let courseTitleHeader = document.createElement('th');
    courseTitleHeader.innerText = 'Course Title';
    headerRow.appendChild(courseTitleHeader);
    // Generate Grade th
    let gradeTitleHeader = document.createElement('th');
    gradeTitleHeader.innerText = 'Grade';
    headerRow.appendChild(gradeTitleHeader);

    // Create a new row in our table.
    let row1 = classTable.insertRow(1);
    // Insert cell into row for course title.
    let courseNameCell1 = row1.insertCell(0);
    courseNameCell1.innerHTML = className1;
    // Insert cell for Grade select dropdown.
    let courseGradeCell1 = row1.insertCell(1);
    courseGradeCell1.setAttribute('id', 'course1GradeValue');
    // Fill our new select element into our Grade Select cell.
    courseGradeCell1.appendChild(fillGradeSelect());

    let row2 = classTable.insertRow(2);
    let courseNameCell2 = row2.insertCell(0);
    courseNameCell2.innerHTML = className2;
    let courseGradeCell2 = row2.insertCell(1);
    courseGradeCell2.setAttribute('id', 'course2GradeValue');
    courseGradeCell2.appendChild(fillGradeSelect());
    
    let row3 = classTable.insertRow(3);
    let courseNameCell3 = row3.insertCell(0);
    courseNameCell3.innerHTML = className3;
    let courseGradeCell3 = row3.insertCell(1);
    courseGradeCell3.setAttribute('id', 'course3GradeValue');
    courseGradeCell3.appendChild(fillGradeSelect());
    
    let row4 = classTable.insertRow(4);
    let courseNameCell4 = row4.insertCell(0);
    courseNameCell4.innerHTML = className4;
    let courseGradeCell4 = row4.insertCell(1);
    courseGradeCell4.setAttribute('id', 'course4GradeValue');
    courseGradeCell4.appendChild(fillGradeSelect());

    // Notify us that table has been generated.
    tableGenerated = true;
}

// Creation of dropdown selectors for user to select grade.
function fillGradeSelect(){
    // Create gradeSelect element.
    let gradeSelect = document.createElement('select');
    gradeSelect.setAttribute('id', 'gradeSelect');
    gradeSelect.setAttribute('class', 'grade_select_dropdown');
    // Set options for gradeSelect.
    let option1 = document.createElement('option');
    option1.setAttribute('value', 4);
    option1.innerHTML = 'A';
    let option2 = document.createElement('option');
    option2.setAttribute('value', 3);
    option2.innerHTML = 'B';
    let option3 = document.createElement('option');
    option3.setAttribute('value', 2);
    option3.innerHTML = 'C';
    let option4 = document.createElement('option');
    option4.setAttribute('value', 1);
    option4.innerHTML = 'D';
    let option5 = document.createElement('option');
    option5.setAttribute('value', 0);
    option5.innerHTML = 'F';
    // Add options to gradeSelect.
    gradeSelect.appendChild(option1);
    gradeSelect.appendChild(option2);
    gradeSelect.appendChild(option3);
    gradeSelect.appendChild(option4);
    gradeSelect.appendChild(option5);
    // Return the completed select element.
    return gradeSelect;
    }
//#endregion

//#region EligibilityButton Scripts

// Enables button by ID.
function enableButton(buttonID){
        var targetButton = document.getElementById(buttonID);
        targetButton.disabled = false;
    }

// Disables button by ID.
function disableButton(buttonID){
    var targetButton = document.getElementById(buttonID);
    targetButton.disabled = true;
}

// Calculate GPA from selected values in class table.
function calculateGPA(){

    // Find the target selector and get selected values.
    let course1GradeValueCell = document.getElementById('course1GradeValue');
    let course2GradeValueCell = document.getElementById('course2GradeValue');
    let course3GradeValueCell = document.getElementById('course3GradeValue');
    let course4GradeValueCell = document.getElementById('course4GradeValue');

    // Instantiate the values for GPA processing.
    let grade1 = parseInt(course1GradeValueCell.firstChild.value);
    let grade2 = parseInt(course2GradeValueCell.firstChild.value);
    let grade3 = parseInt(course3GradeValueCell.firstChild.value);
    let grade4 = parseInt(course4GradeValueCell.firstChild.value);

    // Final GPA Calculation.
    let finalGPA = (grade1 + grade2 + grade3 + grade4) / 4;

    // Display this value in the browser.
    displayGPA(finalGPA);
}

// Displaying the value in the browser to the user.
function displayGPA(finalGPA){
    // Get element that will display the GPA.
    let gpaDisplayBlock = document.getElementById('gpadisplayer');
    // Set gpaDisplayBlock to our finalGPA value.
    gpaDisplayBlock.innerHTML = finalGPA;
    deliverEvalResult(finalGPA);
}

// Displaying a message to the browser notifying the user of acception or rejection.
function deliverEvalResult(finalGPA)
{
    let evalResultDisplayer = document.getElementById('evalresults');
    if (finalGPA > 3.0)
    {
        evalResultDisplayer.innerText = "Congratulations! You meet the set requirements " +
        "necessary to apply for a position within the CARIT.";
        enableButton('applybutton');
    }
    else
    {
        evalResultDisplayer.innerText = "We're sorry, you do not meet the set requirements " +
        "necessary to apply for a position within the CARIT.";
        disableButton('applybutton');
    }
}


//#endregion