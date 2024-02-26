// JavaScript để lấy dữ liệu từ file data.json và hiển thị câu hỏi
var data1;
function startTest() {
    var fullname = document.getElementById('fullname').value;
    var dob = document.getElementById('dob').value;
    var studentId = document.getElementById('student-id').value;
    var studentClass = document.getElementById('class').value;

    if (fullname === '' || dob === '' || studentId === '' || studentClass === '') {
        alert('Vui lòng nhập đầy đủ thông tin');
        return;
    }
    // câu hỏi được lấy trong data1.json câu hỏi dạng radio
    
            fetch('data1.json')
                .then(response => response.json())
                .then(data => {
                    data1 = data;
                    // hiển thị câu hỏi
                    let test = document.getElementById('test');
                    test.style.display = 'block';
                    let questions = data.cau_hoi;
                    let html = '';
                    for (let i = 0; i < questions.length; i++) {
                        html += '<div>';
                        html += '<h3>Câu hỏi ' + (i + 1) + ': ' + questions[i].noi_dung + '</h3>';
                        html += '<input type="radio" name="question' + i + '" value="dung"> Đúng<br>';
                        html += '<input type="radio" name="question' + i + '" value="sai"> Sai<br>';
                        html += '</div>';
                    }
                    test.innerHTML = html;
                });
    // câu hỏi được lấy trong data2.json câu hỏi dạng radio
            fetch('data2.json')
            .then(response => response.json())
            .then(data => {
                
                let test = document.getElementById('test');
                test.style.display = 'block';
                let questions = data.cau_hoi;
                let html = '';
                for (let i = 0; i < questions.length; i++) {
                    html += '<div>';
                    html += '<h3>Câu hỏi ' + (i + 11) + ': ' + questions[i].noi_dung + '</h3>';
                    for (let j = 0; j < questions[i].dap_an.length; j++) {
                        html += '<input type="radio" name="question' + i + '" value="' + questions[i].dap_an[j] + '"> ' + questions[i].dap_an[j] + '<br>';
                    }
                    html += '</div>';
                }
                html += '';
                test.innerHTML += html; 
            });
            // câu hỏi được lấy trong data3.json câu hỏi dạng checkbox
            fetch('data3.json')
            .then(response => response.json())
            .then(data => {
                let test = document.getElementById('test');
                test.style.display = 'block';
                let questions = data.cau_hoi;
                let html = '';
                for (let i = 0; i < questions.length; i++) {
                    html += '<div>';
                    html += '<h3>Câu hỏi ' + (i + 21) + ': ' + questions[i].noi_dung + '</h3>';
                    for (let j = 0; j < questions[i].dap_an.length; j++) {
                        html += '<input type="checkbox" name="question' + i + '" value="' + questions[i].dap_an[j] + '"> ' + questions[i].dap_an[j] + '<br>';
                    }
                    html += '</div>';
                }
                html += '';
                test.innerHTML += html; 
            });
            fetch('data4.json')
            .then(response => response.json())
            .then(data => {
                let test = document.getElementById('test');
                test.style.display = 'block';
                let questions = data.cau_hoi;
                let html = '';
                for (let i = 0; i < questions.length; i++) {
                    html += '<div>';
                    html += '<h3>Câu hỏi ' + (i + 31) + ': ' + questions[i].noi_dung + '</h3>';
                    html += '<input type="text" name="question' + i + '"><br>';
                    html += '</div>';
                }
                html += '<button onclick="check_answer()">Nộp bài</button>';
                test.innerHTML += html; 
            });

            
    }

function check_answer() {
// log ra màn hình "hello"
    let score = 0; 
    calculateScoreData1();
}
function calculateScoreData1() {
    // Lấy danh sách các phần tử input radio
    var radioInputs = document.querySelectorAll('input[type="radio"]');
    
    var score = 0;

    // Lặp qua từng phần tử input radio
    radioInputs.forEach(function(input) {
        // Lấy tên của câu hỏi
        var questionName = input.getAttribute('name');
        
        // Lấy giá trị của input radio (dung hoặc sai)
        var answer = input.value;

        // Lấy index của câu hỏi trong data1
        var questionIndex = parseInt(questionName.replace('question', ''), 10);

        // Lấy đáp án đúng từ data1.json dựa trên index của câu hỏi
        var correctAnswer = data1.cau_hoi[questionIndex].dap_an;
        // in ra màn hình nội dung câu hỏi và đáp ánh đúng
        console.log('Câu hỏi: ' + data1.cau_hoi[questionIndex].noi_dung);
        console.log('Đáp án đúng: ' + correctAnswer);
        console.log('Đáp án của bạn: ' + answer);
        // So sánh câu trả lời với đáp án đúng và cộng điểm nếu đúng
        if (answer === correctAnswer) {
            score++;
        }
    });

    // Hiển thị điểm số
    alert('Điểm của bạn: ' + score);
}
