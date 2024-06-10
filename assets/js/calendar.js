document.addEventListener("DOMContentLoaded", function() {
  const monthElement = document.getElementById("monthYear");
  const datesElement = document.getElementById("dates");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
  // holidays オブジェクトを定義して、祝日の日付を格納します。キーは "月-日" 形式
  const holidays = {
    "1-1": "元日",
    "2-11": "建国記念の日",
    "4-29": "昭和の日",
    "5-3": "憲法記念日",
    "5-4": "みどりの日",
    "5-5": "こどもの日",
    "11-3": "文化の日",
    "11-23": "勤労感謝の日",
    "12-23": "天皇誕生日"
  };

  let currentDate = new Date();

  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // 月名と年を表示
    monthElement.textContent = `${year}年 ${monthNames[month]}`;

    // 月の最初の日の曜日を取得
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    // 月の日数を取得
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // 日付セルをクリア
    datesElement.innerHTML = "";

    // 空のセルを追加
    for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyCell = document.createElement("div");
      datesElement.appendChild(emptyCell);
    }

    // 日付セルを追加・土日や祝日を判定
    for (let i = 1; i <= daysInMonth; i++) {
      const dateCell = document.createElement("div");
      dateCell.textContent = i;

      const dayOfWeek = new Date(year, month, i).getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
          dateCell.classList.add("weekend");
      }

      const holidayKey = `${month + 1}-${i}`;
      if (holidays[holidayKey]) {
          dateCell.classList.add("holiday");
      }

      datesElement.appendChild(dateCell);
    }
  }

  // 前月ボタンのイベントリスナー
  prevButton.addEventListener("click", function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  // 次月ボタンのイベントリスナー
  nextButton.addEventListener("click", function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  // 初回のカレンダー描画
  renderCalendar();
});

