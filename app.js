
// FUNCTION 


// Passes three parameters into the function 
function calculateAverage(score1, score2, score3) { 
    
    let average = (score1 + score2 + score3) / 3; 
    
    // Passes the average out 
    return average; 
    } 

    // ========================= 
    // FUNCTION FOR BOTH STUDENTS 
    // ========================= 
    
    function createStudents() { 
    
        // ========================= 
        // STUDENT 1 
        // ========================= 

        let name1 = document.getElementById("studentName1").value;
        
        let score1_1 = Number(document.getElementById("score1_1").value);
        let score2_1 = Number(document.getElementById("score2_1").value);
        let score3_1 = Number(document.getElementById("score3_1").value); 
        
        // Invoke the function 
        let average1 = calculateAverage(score1_1, score2_1, score3_1);
        
        // Student 1 object 
        let student1 = { 
            name: name1,
             test1: score1_1, 
             test2: score2_1, 
             test3: score3_1, 
             average: average1.toFixed(2) 
            }; 
            
            // ========================= 
            // STUDENT 2 
            // ========================= 
            
            let name2 = document.getElementById("studentName2").value;
            
            let score1_2 = Number(document.getElementById("score1_2").value);
            let score2_2 = Number(document.getElementById("score2_2").value); 
            let score3_2 = Number(document.getElementById("score3_2").value); 
            
            // Invoke the function 
            
        let average2 = calculateAverage(score1_2, score2_2, score3_2); 
            
            // Student 2 object 
            
            let student2 = { 
                name: name2, 
                test1: score1_2, 
                test2: score2_2, 
                test3: score3_2, 
                average: average2.toFixed(2) 
            }; 
            
            // =========================
            // REPORT 
            // ========================= 
            
            let report = `
                <div class="student-report">
                    <div class="student">
                        <h2>${student1.name}</h2>
                        <p>Test 1: ${student1.test1}</p>
                        <p>Test 2: ${student1.test2}</p>
                        <p>Test 3: ${student1.test3}</p>
                        <p>Average: ${student1.average}</p>
                    </div>

                    <div class="student">
                        <h2>${student2.name}</h2>
                        <p>Test 1: ${student2.test1}</p>
                        <p>Test 2: ${student2.test2}</p>
                        <p>Test 3: ${student2.test3}</p>
                        <p>Average: ${student2.average}</p>
                    </div>
                </div>`;
                
                // Output to the page 
                document.getElementById("output").innerHTML = report; 
                
                // Output to the console 
                console.log(report); 
            }