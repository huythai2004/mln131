// src/data/workerGroupsData.js
export const workerGroups = [
  {
    id: "ai-engineer",
    label: "Kỹ sư AI / Machine Learning",
    color: "#C8102E",
    gradient: "from-red-600 to-rose-800",
    icon: "BrainCircuit",
    emoji: "robot",
    tagline: "Lập trình trí tuệ tương lai",
    description:
      "Xây dựng các mô hình học máy, xử lý ngôn ngữ tự nhiên, thị giác máy tính. Họ là những người đang định hình cách máy móc 'tư duy' và ra quyết định trong kỷ nguyên số.",
    skills: ["Python", "TensorFlow / PyTorch", "LLM Fine-tuning", "MLOps", "Data Pipeline"],
    companies: ["VinAI Research", "BKAI-HUST", "Zalo AI", "FPT AI", "VNG AI Lab"],
    roles: ["ML Engineer", "Research Scientist", "AI Product Engineer", "NLP Engineer"],
    marketSize: "12.000+",
    marketUnit: "kỹ sư AI tại VN (2024)",
    growth: "+35%/năm",
    connection:
      "Công nhân tri thức đỉnh cao của thời đại 4.0 — họ không dùng sức cơ bắp mà dùng trí tuệ để tạo ra giá trị thặng dư. Đúng như C. Mác dự báo: 'tri thức xã hội phổ biến trở thành lực lượng sản xuất trực tiếp'.",
    representatives: [
      {
        name: "Bùi Hải Hưng",
        role: "Cựu Viện trưởng VinAI Research",
        achievement: "PhD Stanford, từng là Researcher tại Google DeepMind",
      },
      {
        name: "Lê Viết Quốc",
        role: "Senior Researcher tại Google Brain",
        achievement: "Đồng tác giả kiến trúc Transformer",
      },
    ],
  },
  {
    id: "semiconductor",
    label: "Kỹ sư Bán dẫn / Vi mạch",
    color: "#FFD700",
    gradient: "from-yellow-500 to-amber-700",
    icon: "Cpu",
    emoji: "lightning",
    tagline: "Thiết kế linh hồn của thiết bị số",
    description:
      "Thiết kế vi mạch, chip xử lý, FPGA. Đây là ngành chiến lược nhất trong chuỗi cung ứng toàn cầu — mỗi chip nhỏ bằng móng tay chứa hàng tỷ bóng bán dẫn do bàn tay và khối óc con người kiến tạo.",
    skills: ["VLSI Design", "Verilog / VHDL", "EDA Tools", "IC Verification", "Physical Design"],
    companies: ["Samsung R&D Vietnam", "Intel Products VN", "Synopsys VN", "Marvell VN", "Renesas VN"],
    roles: ["IC Design Engineer", "Verification Engineer", "Physical Design Engineer", "DFT Engineer"],
    marketSize: "5.000+",
    marketUnit: "kỹ sư bán dẫn tại VN (2024)",
    growth: "Mục tiêu 50.000 đến 2030",
    connection:
      "Nhóm công nhân tri thức có hàm lượng chất xám cao nhất — một kỹ sư bán dẫn lành nghề tương đương hàng trăm lao động giản đơn về giá trị thặng dư tạo ra. Nhà nước định hướng đây là ngành đột phá trong Chiến lược bán dẫn quốc gia 2023.",
    representatives: [
      {
        name: "Nguyễn Thiện Nghĩa",
        role: "Cục trưởng Cục Công nghiệp ICT - Bộ TT&TT",
        achievement: "Kiến trúc sư chính sách bán dẫn Việt Nam",
      },
    ],
  },
  {
    id: "software-engineer",
    label: "Kỹ sư Phần mềm / Backend & Cloud",
    color: "#0EA5A0",
    gradient: "from-teal-500 to-cyan-700",
    icon: "Code2",
    emoji: "computer",
    tagline: "Xây dựng hạ tầng của thế giới số",
    description:
      "Thiết kế và vận hành hệ thống backend, microservices, cloud infrastructure. Đây là nhóm đông đảo nhất trong đội ngũ công nhân tri thức — hơn 530.000 kỹ sư phần mềm đang vận hành nền kinh tế số Việt Nam.",
    skills: ["Java / Golang / Node.js", "Kubernetes / Docker", "AWS / GCP / Azure", "System Design", "API Architecture"],
    companies: ["FPT Software", "Tiki", "MoMo", "VNG Corporation", "KMS Technology", "Axon Active"],
    roles: ["Backend Engineer", "Cloud Architect", "DevOps Engineer", "Platform Engineer", "SRE"],
    marketSize: "530.000+",
    marketUnit: "kỹ sư CNTT tại VN (2024)",
    growth: "+15%/năm",
    connection:
      "Nhóm 'công nhân áo trắng' đại diện cho sự trí tuệ hóa của giai cấp công nhân. Họ gắn bó với tư liệu sản xuất hiện đại (máy chủ, cloud), có tổ chức kỷ luật cao (sprint, code review), và là lực lượng sản xuất tiên tiến nhất của xã hội.",
    representatives: [
      {
        name: "Trương Gia Bình",
        role: "Chủ tịch FPT Group",
        achievement: "Xây dựng đội ngũ 30.000+ kỹ sư phần mềm xuất khẩu toàn cầu",
      },
    ],
  },
  {
    id: "data-scientist",
    label: "Data Scientist / BI Analyst",
    color: "#8B5CF6",
    gradient: "from-violet-600 to-purple-800",
    icon: "BarChart3",
    emoji: "chart",
    tagline: "Khai phá tri thức từ đại dương dữ liệu",
    description:
      "Phân tích dữ liệu lớn, xây dựng mô hình dự đoán, trực quan hóa thông tin. Trong kỷ nguyên mà dữ liệu là 'dầu mỏ mới', Data Scientist là những người khai thác và tinh chế nguồn tài nguyên vô hình đó thành giá trị kinh tế thực.",
    skills: ["Python / R / SQL", "Spark / Hadoop", "PowerBI / Tableau", "Statistical Modeling", "A/B Testing"],
    companies: ["Grab VN", "Shopee VN", "VinBigData", "TPBank", "Techcombank Analytics"],
    roles: ["Data Scientist", "BI Developer", "Analytics Engineer", "Data Platform Engineer", "ML Analyst"],
    marketSize: "25.000+",
    marketUnit: "data professional tại VN (2024)",
    growth: "+28%/năm",
    connection:
      "Lao động của Data Scientist là 'lao động phức tạp' theo Mác — trong cùng một giờ làm việc, họ tạo ra gấp hàng chục lần giá trị so với lao động giản đơn, nhờ tri thức được tích lũy và kết tinh vào từng mô hình phân tích.",
    representatives: [
      {
        name: "Nguyễn Nhật Quang",
        role: "Phó Chủ tịch VINASA",
        achievement: "Tiên phong phát triển hệ sinh thái dữ liệu Việt Nam",
      },
    ],
  },
  {
    id: "cybersecurity",
    label: "Chuyên gia An ninh mạng",
    color: "#10B981",
    gradient: "from-emerald-500 to-green-700",
    icon: "Shield",
    emoji: "shield",
    tagline: "Bảo vệ chủ quyền không gian số",
    description:
      "Bảo vệ hệ thống, phát hiện tấn công mạng, xây dựng hạ tầng bảo mật. Trong thế giới số, chiến tranh mạng là chiến trường không có ranh giới — các chuyên gia an ninh mạng chính là 'người lính biên phòng' bảo vệ chủ quyền số quốc gia.",
    skills: ["Penetration Testing", "Threat Intelligence", "SOC Operations", "Malware Analysis", "Zero-Trust Architecture"],
    companies: ["VNCERT", "Viettel Cyber Security", "FPT Cybersecurity", "CyRadar", "VinCSS"],
    roles: ["Security Engineer", "Penetration Tester", "SOC Analyst", "Security Architect", "Incident Responder"],
    marketSize: "3.500+",
    marketUnit: "chuyên gia an ninh mạng (2024)",
    growth: "Thiếu 1.500 chuyên gia/năm",
    connection:
      "Đây là lực lượng bảo vệ 'tư liệu sản xuất số' của quốc gia và nhân dân. Gắn với sứ mệnh chính trị - an ninh, nhóm này thể hiện sự kết hợp giữa tính chuyên môn cao và bản lĩnh chính trị vững vàng — phẩm chất cốt lõi của giai cấp công nhân tiên tiến.",
    representatives: [
      {
        name: "Nguyễn Hữu Nguyên",
        role: "Giám đốc Viettel Cyber Security",
        achievement: "Xây dựng nền tảng VSOC bảo vệ hạ tầng quốc gia",
      },
    ],
  },
  {
    id: "robotics-iot",
    label: "Kỹ sư Tự động hóa / IoT / Robotics",
    color: "#F97316",
    gradient: "from-orange-500 to-red-700",
    icon: "Bot",
    emoji: "strength",
    tagline: "Kết nối thế giới vật lý và thế giới số",
    description:
      "Thiết kế robot công nghiệp, hệ thống IoT, tự động hóa nhà máy thông minh. Họ là cầu nối giữa thế giới vật lý và thế giới số — biến nhà máy truyền thống thành Smart Factory của tương lai.",
    skills: ["ROS / ROS2", "PLC Programming", "Embedded C/C++", "MQTT / OPC-UA", "Computer Vision", "Industrial Automation"],
    companies: ["Vinfast Automation", "Thaco Industries", "ABB Vietnam", "Bosch Vietnam", "Phenikaa MaaS"],
    roles: ["Automation Engineer", "Robotics Engineer", "IoT Developer", "Embedded Systems Engineer", "Controls Engineer"],
    marketSize: "8.000+",
    marketUnit: "kỹ sư tự động hóa (2024)",
    growth: "+22%/năm",
    connection:
      "Nhóm này thể hiện rõ nhất sự biến đổi của giai cấp công nhân: từ người đứng bên dây chuyền máy móc sang người thiết kế và lập trình cho máy móc. Hao phí lao động từ cơ bắp chuyển hoàn toàn sang trí lực — đúng như xu hướng 'trí tuệ hóa' giai cấp công nhân mà báo cáo phân tích.",
    representatives: [
      {
        name: "Đội kỹ sư VinFast R&D",
        role: "Bộ phận tự động hóa & robotics",
        achievement: "Xây dựng dây chuyền lắp ráp xe điện tự động hóa 95%",
      },
    ],
  },
  {
    id: "biotech",
    label: "Kỹ sư Công nghệ sinh học / Y tế số",
    color: "#EC4899",
    gradient: "from-pink-500 to-rose-700",
    icon: "FlaskConical",
    emoji: "ADN",
    tagline: "Ứng dụng công nghệ vào sức khỏe con người",
    description:
      "Nghiên cứu gen, phát triển thuốc, xây dựng hệ thống AI y tế. Trong đại dịch COVID-19, Việt Nam tự sản xuất kit xét nghiệm và phát triển vaccine — minh chứng hùng hồn cho năng lực của nhân lực công nghệ sinh học trong nước.",
    skills: ["Bioinformatics", "CRISPR / Gene Editing", "Clinical Data Analysis", "Healthcare AI", "Regulatory Affairs"],
    companies: ["VinBigData Health", "BV Bạch Mai AI Lab", "VNVC Biotech", "Nanogen", "IVAC"],
    roles: ["Bioinformatics Engineer", "Clinical Data Scientist", "Healthcare AI Developer", "Biotech Researcher"],
    marketSize: "6.000+",
    marketUnit: "chuyên gia biotech & y tế số (2024)",
    growth: "+18%/năm",
    connection:
      "Lực lượng tiên phong trong việc ứng dụng tư liệu sản xuất hiện đại (AI, gene sequencing) vào phục vụ sức khỏe nhân dân. Gắn bó mật thiết với sứ mệnh xã hội — phẩm chất nổi bật của giai cấp công nhân tiến bộ.",
    representatives: [
      {
        name: "TS. Ngô Tất Trung",
        role: "Viện Tế bào gốc - ĐHQG TP.HCM",
        achievement: "Nghiên cứu ghép tế bào gốc điều trị bệnh nan y",
      },
    ],
  },
  {
    id: "fintech",
    label: "Kỹ sư FinTech / Blockchain",
    color: "#0EA5E9",
    gradient: "from-sky-500 to-blue-700",
    icon: "Banknote",
    emoji: "card",
    tagline: "Dân chủ hóa tài chính bằng công nghệ",
    description:
      "Xây dựng hệ thống thanh toán, ví điện tử, ngân hàng số, blockchain. MoMo, ZaloPay, VNPay đang phục vụ hàng chục triệu người Việt mỗi ngày — tất cả nhờ bàn tay và khối óc của đội ngũ kỹ sư FinTech.",
    skills: ["Distributed Systems", "Blockchain / Smart Contract", "Payment Gateway", "Fraud Detection", "Regulatory Tech"],
    companies: ["MoMo", "VNPay", "ZaloPay", "Timo", "Cake by VPBank", "VNPAY-QR"],
    roles: ["FinTech Engineer", "Blockchain Developer", "Payment Systems Architect", "Risk & Fraud Engineer"],
    marketSize: "15.000+",
    marketUnit: "kỹ sư fintech tại VN (2024)",
    growth: "+30%/năm",
    connection:
      "Công nhân tri thức FinTech đang hiện thực hóa 'tài chính toàn diện' — đưa dịch vụ ngân hàng đến mọi người dân, kể cả vùng sâu vùng xa. Đây là biểu hiện sinh động của tư tưởng phục vụ nhân dân trong hành động cụ thể của giai cấp công nhân.",
    representatives: [
      {
        name: "Nguyễn Mạnh Tường",
        role: "CEO MoMo",
        achievement: "Xây dựng siêu ứng dụng tài chính phục vụ 31 triệu người dùng",
      },
    ],
  },
];
