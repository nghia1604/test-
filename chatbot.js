function handleUserInput() {
  const input = document.getElementById("userInput");
  const chatlog = document.getElementById("chatlog");
  const userText = input.value.trim();

  if (!userText) return;

  const userMessage = `<p class="user">🧑‍💬 ${userText}</p>`;
  chatlog.innerHTML += userMessage;

  // Giả lập phản hồi bot
  const botReply = generateReply(userText);
  const botMessage = `<p class="bot">🤖 ${botReply}</p>`;
  chatlog.innerHTML += botMessage;

  chatlog.scrollTop = chatlog.scrollHeight;
  input.value = "";
}

function generateReply(text) {
  text = text.toLowerCase();
  if (text.includes("giá") || text.includes("bao nhiêu"))
    return "Vui lòng vào mục Sản phẩm để xem chi tiết giá nhé!";
  if (text.includes("giao hàng"))
    return "Shop giao hàng toàn quốc trong vòng 2–4 ngày làm việc.";
  if (text.includes("liên hệ"))
    return "Bạn có thể liên hệ qua Zalo, Facebook hoặc hotline 0961116924.";
  return "Xin lỗi, tôi chưa hiểu ý bạn. Vui lòng hỏi lại hoặc vào mục Liên hệ.";
}
