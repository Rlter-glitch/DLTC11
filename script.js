const questions = [
  {
    question: "Câu 1: Lãnh thổ Liên bang Nga không nằm trong vành đai khí hậu nào sau đây?",
    options: ["a) cận cực.", "b) cận nhiệt.", "c) ôn đới.", "d) cận xích đạo."],
    correct: "d"
  },
  {
    question: "Câu 2: Liên Bang Nga có chung biên giới với bao nhiêu quốc gia?",
    options: ["a) 11.", "b) 12.", "c) 13.", "d) 14."],
    correct: "d"
  },
  {
    question: "Câu 3: Ngành nào sau đây là công nghiệp truyền thống của Liên bang Nga?",
    options: ["a) Điện lực.", "b) Thực phẩm.", "c) Luyện kim.", "d) Điện tử."],
    correct: "c"
  },
  {
    question: "Câu 4: Liên bang Nga giáp với các đại dương nào sau đây?",
    options: ["a) Thái Bình Dương, Bắc Băng Dương.", "b) Bắc Băng Dương, Đại Tây Dương.", "c) Đại Tây Dương, Ấn Độ Dương.", "d) Ấn Độ Dương, Thái Bình Dương."],
    correct: "a"
  },
  {
    question: "Câu 5: Địa hình chủ yếu ở phía Bắc Đồng bằng Tây Xi-bia của Liên bang Nga là?",
    options: ["a) Đầm lầy.", "b) Núi cao.", "c) Thảo nguyên.", "d) Sơn nguyên."],
    correct: "a"
  },
  {
    question: "Câu 6: Vùng kinh tế phát triển nhất của Liên Bang Nga là?",
    options: ["a) Trung ương.", "b) U - ran.", "c) Viễn Đông.", "d) Trung tâm đất đen."],
    correct: "a"
  },
  {
    question: "Câu 7: Chiều dài của đường Xích đạo được ví xấp xỉ với chiều dài?",
    options: ["a) Chiều dài các sông ở Liên bang Nga.", "b) Biên giới Liên bang Nga với châu Á.", "c) Đường bờ biển của Liên bang Nga.", "d) Đường biên giới của Liên bang Nga."],
    correct: "d"
  },
  {
    question: "Câu 8: Dân tộc nào sau đây chiếm đa số ở Liên bang Nga?",
    options: ["a) Tác-ta.", "b) Chu-vát.", "c) Nga.", "d) Bát-xkia."],
    correct: "c"
  },
  {
    question: "Câu 9: Ngành nào sau đây không phải là công nghiệp truyền thống của Liên bang Nga?",
    options: ["a) Khai thác dầu khí.", "b) Luyện kim.", "c) Khai thác vàng.", "d) Hàng không vũ trụ."],
    correct: "d"
  },
  {
    question: "Câu 10: Liên bang Nga đứng đầu thế giới về sản lượng xuất khẩu nông sản nào sau đây?",
    options: ["a) Lúa mì.", "b) Ngô.", "c) Lúa gạo.", "d) Đỗ tương."],
    correct: "a"
  },
  {
    question: "Câu 11: Rừng của Liên bang Nga tập trung nhiều nhất ở?",
    options: ["a) Phần lãnh thổ phía Tây.", "b) Vùng núi U-ran.", "c) Phần lãnh thổ phía Đông.", "d) Đồng bằng Tây Xi-bia."],
    correct: "c"
  },
  {
    question: "Câu 12: Sản phẩm xuất khẩu quan trọng nhất của Liên bang Nga là?",
    options: ["a) Dầu thô và khí tự nhiên.", "b) Máy móc và dược phẩm.", "c) Sản phẩm điện, điện tử.", "d) Xe cộ, đá quý, chất dẻo."],
    correct: "a"
  },
  {
    question: "Câu 13: Vùng kinh tế lâu đời nhất của Liên bang Nga là?",
    options: ["a) Trung ương.", "b) Trung tâm đất đen.", "c) U-ran.", "d) Viễn Đông."],
    correct: "a"
  },
  {
    question: "Câu 14: Đặc điểm nào sau đây không thể hiện rõ Liên bang Nga là một đất nước rộng lớn?",
    options: ["A. Diện tích lớn nhất thế giới, nằm trên hai châu lục.", "B. Đất nước trải dài từ đông sang tây, trên 11 múi giờ.", "C. Đường bờ biển dài, giáp nhiều đại dương và biển.", "D. Có các đới khí hậu, nhiều kiểu khí hậu khác nhau."],
    correct: "D"
  },
  {
    question: "Câu 15: Đặc điểm tự nhiên của phần phía Đông Liên bang Nga là",
    options: ["A. phần lớn núi và cao nguyên.", "B. nhiều đồng bằng và vùng trũng.", "C. có dãy U-ran giàu khoáng sản.", "D. có nhiều đồi thấp và đầm lầy."],
    correct: "A"
  },
  {
    question: "Câu 16: Biển Ban-tích, Biển Đen và biển Ca-xpi tiếp giáp với phía nào của Liên Bang Nga?",
    options: ["A. Đông và đông nam.", "B. Bắc và đông bắc.", "C. Tây và tây nam.", "D. Nam và đông nam."],
    correct: "C"
  },
  {
    question: "Câu 17: Tài nguyên khoáng sản của Liên bang Nga thuận lợi để phát triển những ngành công nghiệp nào sau đây?",
    options: ["A. Năng lượng, luyện kim, hóa chất.", "B. Năng lượng, luyện kim, cơ khí.", "C. Năng lượng, luyện kim, xây dựng.", "D. Năng lượng, luyện kim, dệt may."],
    correct: "A"
  },
  {
    question: "Câu 18: Nơi có nhiều thuận lợi cho trồng cây lương thực ở Liên bang Nga là",
    options: ["A. đồng bằng Đông Âu.", "B. dãy U-ran.", "C. đông Xi-bia.", "D. trung Xi-bia."],
    correct: "A"
  },
  {
    question: "Câu 19: Dầu mỏ của Liên bang Nga tập trung nhiều nhất ở",
    options: ["A. đồng bằng Đông Âu.", "B. đồng bằng Tây Xi-bia.", "C. cao nguyên Trung Xi-bia.", "D. ven Bắc Băng Dương."],
    correct: "B"
  },
  {
    question: "Câu 20: Dãy núi U-ran là nơi tập trung nhiều những loại khoáng sản nào sau đây?",
    options: ["A. Dầu mỏ, Man-gan.", "B. Khí tự nhiên, đồng.", "C. Than đá, quặng sắt.", "D. Kim cương, thiếc."],
    correct: "C"
  },
  {
    question: "Câu 21: Vùng nào sau đây có mật độ dân số cao nhất ở Liên bang Nga?",
    options: ["A. Đồng bằng Đông Âu.", "B. Đồng bằng Tây Xi-bia.", "C. Cao nguyên Trung Xi-bia.", "D. Đông Xi-bia."],
    correct: "A"
  },
  {
    question: "Câu 22: Sự phân bố dân cư không đều theo lãnh thổ của Liên bang Nga đã gây khó khăn cho việc",
    options: ["A. sử dụng hợp lí lao động và tài nguyên thiên nhiên.", "B. sử dụng hợp lí lao động và bảo vệ các tài nguyên.", "C. bảo vệ tài nguyên thiên nhiên và phát triển đời sống.", "D. phát triển đời sống và bảo vệ môi trường tự nhiên."],
    correct: "A"
  },
  {
    question: "Câu 23: Phát biểu nào sau đây không đúng với tự nhiên phần phía Tây của Liên bang Nga?",
    options: ["A. Đại bộ phận là đồng bằng và vũng trũng.", "B. Phía bắc Tây Xi-bia chủ yếu là đầm lầy.", "C. Không thuận lợi cho phát triển nông nghiệp.", "D. Là nơi tập trung cây lương thực, thực phẩm."],
    correct: "C"
  },
  {
    question: "Câu 24: Phát biểu nào sau đây không đúng với những khó khăn chủ yếu về tự nhiên của Liên bang Nga đối với phát triển kinh tế - xã hội?",
    options: ["A. Địa hình núi và cao nguyên chiếm diện tích lớn.", "B. Nhiều vùng rộng, có khí hậu băng giá hoặc khô hạn.", "C. Phần lớn lãnh thổ nằm ở vành đai khí hậu ôn đới.", "D. Tài nguyên chủ yếu ở vùng núi hoặc vùng lạnh giá."],
    correct: "C"
  },
  {
    question: "Câu 25: Phát biểu nào sau đây không đúng về tự nhiên của Liên bang Nga?",
    options: ["A. Trữ lượng khoáng sản đứng vào hàng đầu thế giới.", "B. Có các con sông lớn và hàng nghìn con sông nhỏ.", "C. Diện tích rừng không lớn, rừng tai-ga là nhiều nhất.", "D. Cao nguyên, đầm lầy chiếm diện tích lớn, nhiều hồ."],
    correct: "C"
  },
  {
    question: "Câu 26: Đặc điểm nào sau đây không đúng với phần phía Đông của Liên bang Nga?",
    options: ["A. Phần lớn là núi và cao nguyên.", "B. Có nguồn khoáng sản và lâm sản lớn.", "C. Có nguồn trữ năng thủy điện lớn.", "D. Có đồng bằng Đông Âu tương đối cao."],
    correct: "D"
  },
  {
    question: "Câu 27: Vùng U-ran của Liên bang Nga thuận lợi để phát triển những ngành chủ yếu nào sau đây?",
    options: ["A. Khai thác khoáng sản.", "B. Chế biến thực phẩm.", "C. Đóng tàu.", "D. Chế tạo máy."],
    correct: "A"
  },
  {
    question: "Câu 28: Đặc điểm tự nhiên phần phía Tây của Liên bang Nga là",
    options: ["A. Đại bộ phận là đồng bằng và vùng trũng.", "B. Phần lớn là vùng núi và các cao nguyên.", "C. Có nguồn khoáng sản và lâm sản khá lớn.", "D. Có nguồn trữ năng thủy điện lớn ở sông."],
    correct: "A"
  },
  {
    question: "Câu 29: Dãy U-ran được xem là ranh giới tự nhiên của",
    options: ["A. Đồng bằng Đông Âu và cao nguyên Trung Xi-bia.", "B. Phần lãnh thổ phía Đông và phần lãnh thổ phía Tây.", "C. Hai châu lục Á-Âu trên lãnh thổ Liên bang Nga.", "D. Đồng bằng Tây Xi-bia và cao nguyên Trung Xi-bia."],
    correct: "C"
  },
  {
    question: "Câu 30: Phát biểu nào sau đây không đúng với kinh tế của Liên bang Nga?",
    options: ["A. Công nghiệp là ngành quan trọng trong nền kinh tế.", "B. Khai thác dầu khí là ngành mũi nhọn của nền kinh tế.", "C. Các ngành dịch vụ của đất nước đang phát triển mạnh.", "D. Quỹ đất nông nghiệp lớn và chỉ phát triển trồng trọt."],
    correct: "D"
  },
  {
    question: "Câu 31: Phát biểu nào sau đây không đúng với công nghiệp Liên bang Nga hiện nay?",
    options: ["A. Là một ngành xương sống của cả nền kinh tế.", "B. Cơ cấu đa dạng, có cả truyền thống và hiện đại.", "C. Tập trung ưu tiên phát triển ngành truyền thống.", "D. Công nghiệp khai thác dầu khí là ngành mũi nhọn."],
    correct: "C"
  },
  {
    question: "Câu 32: Công nghiệp của Liên bang Nga tập trung nhiều nhất ở vùng nào sau đây?",
    options: ["A. Đồng bằng Đông Âu.", "B. Đồng bằng Tây Xi-bia.", "C. Khu vực dãy U-ran.", "D. Khu vực Viễn Đông."],
    correct: "A"
  },
  {
    question: "Câu 33: Nông nghiệp Liên bang Nga phát triển mạnh từ năm 2000 đến nay không phải là do",
    options: ["A. Đầu tư nhiều vào khoa học kĩ thuật.", "B. Sử dụng rộng rãi máy móc hiện đại.", "C. Tăng cường hội nhập kinh tế quốc tế.", "D. Tích cực mở rộng diện tích trồng trọt."],
    correct: "D"
  },
  {
    question: "Câu 34: Lúa mì được trồng nhiều ở những vùng nào sau đây của Liên bang Nga?",
    options: ["A. Đồng bằng Đông Âu, đồng bằng Tây Xi-bia.", "B. Đồng bằng Tây Xi-bia, cao nguyên Trung Xi-bia.", "C. Cao nguyên Trung Xi-bia, đồng bằng Đông Âu.", "D. Vùng giáp với biển Ca-xpi, đồng bằng Đông Âu."],
    correct: "A"
  },
  {
    question: "Câu 35: Lợn được nuôi nhiều nhất ở nơi nào sau đây của Liên bang Nga?",
    options: ["A. Đồng bằng Đông Âu.", "B. Đồng bằng Tây Xi-bia.", "C. Trung Xi-bia.", "D. Dãy U-ran."],
    correct: "A"
  },
  {
    question: "Câu 36: Phát biểu nào sau đây không đúng với cơ sở hạ tầng giao thông vận tải của Liên bang Nga?",
    options: ["A. Có đủ các loại hình giao thông vận tải.", "B. Có hệ thống đường sắt xuyên Xi-bia.", "C. Giao thông đường biển còn hạn chế.", "D. Nhiều hệ thống đường được nâng cấp."],
    correct: "C"
  },
  {
    question: "Câu 37: Các trung tâm dịch vụ lớn nhất của Liên bang Nga là",
    options: ["A. Mát-xcơ-va và Vôn-ga-grát.", "B. Xanh Pê-téc-bua và Vôn-ga-grát.", "C. Vôn-ga-grát và Nô-vô-xi-biếc.", "D. Mát-xcơ-va và Xanh Pê-téc-bua."],
    correct: "D"
  }
];

// Hàm để chèn câu hỏi và các lựa chọn vào form quiz
function loadQuiz() {
  const form = document.getElementById('quizForm');
  questions.forEach((question, index) => {
    console.log(question); // In ra để kiểm tra
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    
    const questionText = document.createElement('p');
    questionText.innerText = question.question;
    questionDiv.appendChild(questionText);

    question.options.forEach((option, i) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'q' + (index + 1);
      input.value = String.fromCharCode(97 + i); // 'a', 'b', 'c', 'd'
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      questionDiv.appendChild(label);
      questionDiv.appendChild(document.createElement('br'));
    });

    form.appendChild(questionDiv);
  });
}

// Hàm tính điểm và hiển thị kết quả khi người dùng nộp bài
function submitQuiz() {
  const form = document.getElementById('quizForm');
  const questionsDivs = form.querySelectorAll('.question');
  let score = 0;

  questionsDivs.forEach((questionDiv, index) => {
    const selectedOption = questionDiv.querySelector('input[type="radio"]:checked');
    const correctAnswer = questions[index].correct;

    if (selectedOption && selectedOption.value === correctAnswer) {
      score++;
      questionDiv.classList.add('correct');
    } else {
      questionDiv.classList.add('incorrect');
    }
  });

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Bạn đã trả lời đúng ${score} trên ${questions.length} câu.`;
}

// Gọi hàm loadQuiz để tạo câu hỏi khi trang được tải
loadQuiz();
