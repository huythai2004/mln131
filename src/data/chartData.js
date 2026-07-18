export const chartData = [
  {
    id: "nhan-luc",
    title: "Quy mô nhân lực CNTT Việt Nam",
    description: "Số lượng kỹ sư CNTT qua các năm (ngàn người)",
    type: "bar",
    data: [
      { name: "2018", value: 350 },
      { name: "2019", value: 400 },
      { name: "2020", value: 450 },
      { name: "2021", value: 530 },
      { name: "2022", value: 620 },
      { name: "2023", value: 700 },
      { name: "2024", value: 780 },
      { name: "2025", value: 860 },
      { name: "2026", value: 950 },
    ],
    color: "#C8102E",
    prefix: "",
    suffix: "k"
  },
  {
    id: "tang-truong",
    title: "Tốc độ tăng trưởng nhân lực ngành bán dẫn",
    description: "Tỷ lệ tăng trưởng nguồn nhân lực bán dẫn so với năm trước (%)",
    type: "line",
    data: [
      { name: "2019", value: 12 },
      { name: "2020", value: 8 },
      { name: "2021", value: 15 },
      { name: "2022", value: 20 },
      { name: "2023", value: 25 },
      { name: "2024", value: 28 },
      { name: "2025", value: 32 },
      { name: "2026", value: 35 },
    ],
    color: "#FFD700",
    prefix: "",
    suffix: "%"
  },
  {
    id: "cung-cau",
    title: "Tương quan cung - cầu nhân lực công nghệ cao",
    description: "Nhu cầu tuyển dụng vs. Số lượng đáp ứng được (ngàn người)",
    type: "bar",
    data: [
      { name: "Cung 2022", value: 300 },
      { name: "Cầu 2022", value: 500 },
      { name: "Cung 2023", value: 380 },
      { name: "Cầu 2023", value: 580 },
      { name: "Cung 2024", value: 450 },
      { name: "Cầu 2024", value: 650 },
      { name: "Cung 2025", value: 520 },
      { name: "Cầu 2025", value: 720 },
      { name: "Cung 2026", value: 590 },
      { name: "Cầu 2026", value: 790 },
    ],
    color: "#0EA5A0",
    prefix: "",
    suffix: "k"
  },
  {
    id: "dao-tao",
    title: "Tỷ lệ lao động CNTT qua đào tạo chính quy",
    description: "Tỷ lệ lao động có bằng cấp chính quy ngành CNTT (%)",
    type: "pie",
    data: [
      { name: "Đại học trở lên", value: 45 },
      { name: "Cao đẳng", value: 25 },
      { name: "Chứng chỉ ngắn hạn", value: 20 },
      { name: "Tự học/thực hành", value: 10 },
    ],
    color: "#C8102E",
    prefix: "",
    suffix: "%"
  }
];
