// 3CatsMomBakery | 2-Step Sales & Dynamic Recipe Scaling Engine (89 Ingredients & 20 Recipes)
// =========================================================================
    // Jasmine's Bakery Studio — Version v2.2.0
    // 1. EMBEDDED SPREADSHEET DATASET (Synced from gid=2001: 89 Ing, 20 Recipes)
    // =========================================================================
    const APP_VERSION = "v2.2.0";
    const RAW_DATA = {"ingredients": [{"id": "ING-01", "category": "包裝耗材", "name": "生吐司包裝袋與提袋", "packSize": 1.0, "unit": "入", "packPrice": 20.0, "unitCost": 20.0, "supplier": "包材行", "note": "吐司專用袋/單入"}, {"id": "ING-02", "category": "包裝耗材", "name": "肉桂捲外帶紙盒", "packSize": 1.0, "unit": "入", "packPrice": 5.0, "unitCost": 5.0, "supplier": "包材行", "note": "肉桂捲專用盒/單入"}, {"id": "ING-03", "category": "包裝耗材", "name": "厚片土司夾鏈袋", "packSize": 100.0, "unit": "入", "packPrice": 185.0, "unitCost": 1.85, "supplier": "包材行", "note": "吐司專用袋/單入"}, {"id": "ING-04", "category": "包裝耗材", "name": "費南雪封口袋與包裝", "packSize": 1.0, "unit": "入", "packPrice": 8.33, "unitCost": 8.33, "supplier": "包材行", "note": "封口透明袋與外盒"}, {"id": "ING-05", "category": "包裝耗材", "name": "瑪德蓮自黏袋與小盒", "packSize": 1.0, "unit": "入", "packPrice": 3.57, "unitCost": 3.57, "supplier": "包材行", "note": "單顆密封袋/小提盒"}, {"id": "ING-06", "category": "包裝耗材", "name": "磅蛋糕長型禮盒", "packSize": 1.0, "unit": "入", "packPrice": 6.25, "unitCost": 6.25, "supplier": "包材行", "note": "磅蛋糕硬盒包裝/單入"}, {"id": "ING-07", "category": "奶油乳脂", "name": "安佳鮮奶油乳酪", "packSize": 1000.0, "unit": "g", "packPrice": 269.0, "unitCost": 0.269, "supplier": "裕軒", "note": "奶油乳酪抹醬"}, {"id": "ING-08", "category": "奶油乳脂", "name": "法國愛樂薇動物性鮮奶油", "packSize": 1000.0, "unit": "ml", "packPrice": 270.0, "unitCost": 0.27, "supplier": "裕軒", "note": "烘焙鮮奶油"}, {"id": "ING-09", "category": "奶油乳脂", "name": "法國愛樂薇無鹽奶油", "packSize": 4000.0, "unit": "g", "packPrice": 2100.0, "unitCost": 0.525, "supplier": "蝦皮", "note": "頂級發酵奶油(費南雪)"}, {"id": "ING-10", "category": "奶油乳脂", "name": "法國鐵塔牌動物性鮮奶油", "packSize": 1000.0, "unit": "ml", "packPrice": 270.0, "unitCost": 0.27, "supplier": "裕軒", "note": "生吐司動物性鮮奶油"}, {"id": "ING-11", "category": "奶油乳脂", "name": "法國Le Gall燈塔鮮奶油乳酪", "packSize": 1000.0, "unit": "g", "packPrice": 330.0, "unitCost": 0.33, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-12", "category": "奶油乳脂", "name": "威士寶無鹽奶油", "packSize": 454.0, "unit": "g", "packPrice": 140.0, "unitCost": 0.3083700441, "supplier": "烘焙樂", "note": "平價無鹽奶油"}, {"id": "ING-13", "category": "奶油乳脂", "name": "燈塔牌無鹽奶油", "packSize": 500.0, "unit": "g", "packPrice": 230.0, "unitCost": 0.46, "supplier": "裕軒", "note": "經典發酵無鹽奶油"}, {"id": "ING-14", "category": "乳品蛋水", "name": "光泉鮮奶", "packSize": 936.0, "unit": "ml", "packPrice": 88.0, "unitCost": 0.09401709402, "supplier": "全聯/大全聯", "note": "高乳脂優質鮮乳"}, {"id": "ING-15", "category": "乳品蛋水", "name": "冷水", "packSize": 1000.0, "unit": "ml", "packPrice": 0.0, "unitCost": 0.0, "supplier": "自來水過濾", "note": "過濾水"}, {"id": "ING-16", "category": "乳品蛋水", "name": "高大鮮奶", "packSize": 936.0, "unit": "ml", "packPrice": 105.0, "unitCost": 0.1121794872, "supplier": "全聯/大全聯", "note": "高乳脂優質鮮乳"}, {"id": "ING-17", "category": "乳品蛋水", "name": "蛋", "packSize": 675.0, "unit": "g", "packPrice": 160.0, "unitCost": 0.237037037, "supplier": "全聯/大全聯", "note": "新鮮雞蛋(一顆約50~60g)"}, {"id": "ING-18", "category": "乳品蛋水", "name": "瑞穗鮮奶", "packSize": 930.0, "unit": "ml", "packPrice": 91.0, "unitCost": 0.09784946237, "supplier": "超市", "note": "鮮乳"}, {"id": "ING-19", "category": "乳品蛋水", "name": "豐力富高鈣營養奶粉", "packSize": 2200.0, "unit": "g", "packPrice": 515.0, "unitCost": 0.2340909091, "supplier": "COUPANG", "note": ""}, {"id": "ING-20", "category": "乳品蛋水", "name": "鷹牌煉乳", "packSize": 450.0, "unit": "g", "packPrice": 144.0, "unitCost": 0.32, "supplier": "COUPANG", "note": "生吐司保濕提味"}, {"id": "ING-21", "category": "起司", "name": "安佳起司片", "packSize": 84.0, "unit": "片", "packPrice": 392.0, "unitCost": 4.666666667, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-22", "category": "起司", "name": "乳酪內餡", "packSize": 255.0, "unit": "g", "packPrice": 73.28645455, "unitCost": 0.287397861, "supplier": "自製", "note": "燈塔鮮奶油乳酪+細砂+無鹽奶油+岩鹽+玉米澱粉+奶粉自製內餡"}, {"id": "ING-23", "category": "起司", "name": "軟歐蜂蜜起司醬", "packSize": 261.5, "unit": "g", "packPrice": 96.12, "unitCost": 0.3675717017, "supplier": "自製", "note": "愛樂薇奶油+鮮奶油+起司片+蜂蜜自製夾餡"}, {"id": "ING-24", "category": "起司", "name": "義大利Zanetti帕瑪森起司粉", "packSize": 1000.0, "unit": "g", "packPrice": 740.0, "unitCost": 0.74, "supplier": "蝦皮", "note": ""}, {"id": "ING-25", "category": "發酵種麵", "name": "旺來興速發酵母", "packSize": 100.0, "unit": "g", "packPrice": 30.0, "unitCost": 0.3, "supplier": "旺來興", "note": "一般速發酵母"}, {"id": "ING-26", "category": "發酵種麵", "name": "法國老麵麵糰", "packSize": 1729.0, "unit": "g", "packPrice": 106.358, "unitCost": 0.06151417004, "supplier": "自製", "note": "常溫發酵60分+冷藏16小時自製老麵"}, {"id": "ING-27", "category": "發酵種麵", "name": "波蘭種", "packSize": 520.0, "unit": "g", "packPrice": 24.0, "unitCost": 0.04615384615, "supplier": "自製", "note": "哥摩高筋+水+酵母自製酵種"}, {"id": "ING-28", "category": "發酵種麵", "name": "湯種", "packSize": 2120.0, "unit": "g", "packPrice": 117.4, "unitCost": 0.05537735849, "supplier": "自製", "note": "高筋粉+糖+鹽+沸水燙麵冷藏16小時"}, {"id": "ING-29", "category": "發酵種麵", "name": "燕子牌低糖酵母(紅色包裝)", "packSize": 500.0, "unit": "g", "packPrice": 179.0, "unitCost": 0.358, "supplier": "蝦皮", "note": "低糖法式麵包酵母"}, {"id": "ING-30", "category": "發酵種麵", "name": "燕子牌高糖酵母(金色包裝)", "packSize": 500.0, "unit": "g", "packPrice": 149.0, "unitCost": 0.298, "supplier": "蝦皮", "note": "甜麵包專用耐高糖酵母"}, {"id": "ING-31", "category": "蔬果堅果", "name": "免剝蒜仁", "packSize": 200.0, "unit": "g", "packPrice": 149.0, "unitCost": 0.745, "supplier": "全聯/大全聯", "note": ""}, {"id": "ING-32", "category": "蔬果堅果", "name": "冷凍藍莓(加拿大)", "packSize": 350.0, "unit": "g", "packPrice": 168.0, "unitCost": 0.48, "supplier": "全聯/大全聯", "note": ""}, {"id": "ING-33", "category": "蔬果堅果", "name": "法國Cocao Barry防潮可可粉", "packSize": 1000.0, "unit": "g", "packPrice": 710.0, "unitCost": 0.71, "supplier": "蝦皮(柚子)", "note": "頂級純可可粉"}, {"id": "ING-34", "category": "蔬果堅果", "name": "芝初高鈣無糖黑芝麻粉", "packSize": 380.0, "unit": "g", "packPrice": 289.0, "unitCost": 0.7605263158, "supplier": "蝦皮(芝初原廠)", "note": ""}, {"id": "ING-35", "category": "蔬果堅果", "name": "芝初黑芝麻粒", "packSize": 105.0, "unit": "g", "packPrice": 89.0, "unitCost": 0.8476190476, "supplier": "蝦皮(芝初原廠)", "note": ""}, {"id": "ING-36", "category": "蔬果堅果", "name": "美國生核桃", "packSize": 450.0, "unit": "g", "packPrice": 230.0, "unitCost": 0.5111111111, "supplier": "蝦皮(柚子)", "note": "堅果烘烤提香"}, {"id": "ING-37", "category": "蔬果堅果", "name": "美國藍鑽杏仁粉", "packSize": 600.0, "unit": "g", "packPrice": 295.0, "unitCost": 0.4916666667, "supplier": "蝦皮(柚子)", "note": "馬卡龍、費南雪、瑪德蓮"}, {"id": "ING-38", "category": "蔬果堅果", "name": "烤不爆原味麻糬", "packSize": 1000.0, "unit": "g", "packPrice": 172.0, "unitCost": 0.172, "supplier": "蝦皮(柚子)", "note": "麻糬內餡夾心"}, {"id": "ING-39", "category": "蔬果堅果", "name": "博列羅耐烤黑可可豆", "packSize": 1000.0, "unit": "g", "packPrice": 260.0, "unitCost": 0.26, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-40", "category": "蔬果堅果", "name": "富味鄉黑芝麻餡", "packSize": 1000.0, "unit": "g", "packPrice": 339.0, "unitCost": 0.339, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-41", "category": "蔬果堅果", "name": "萬丹紅豆粒餡", "packSize": 1000.0, "unit": "g", "packPrice": 245.0, "unitCost": 0.245, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-42", "category": "蔬果堅果", "name": "舞間茶心(伯爵紅茶粉)", "packSize": 300.0, "unit": "g", "packPrice": 800.0, "unitCost": 2.666666667, "supplier": "蝦皮(舞間茶心)", "note": "伯爵茶點心"}, {"id": "ING-43", "category": "蔬果堅果", "name": "舞間茶心(焙茶粉)", "packSize": 300.0, "unit": "g", "packPrice": 1000.0, "unitCost": 3.333333333, "supplier": "蝦皮(舞間茶心)", "note": "日式焙茶點心"}, {"id": "ING-44", "category": "蔬果堅果", "name": "檸檬皮", "packSize": 1.0, "unit": "顆", "packPrice": 15.0, "unitCost": 15.0, "supplier": "全聯/大全聯", "note": "新鮮無毒檸檬(刨皮)"}, {"id": "ING-45", "category": "蔬果堅果", "name": "檸檬角", "packSize": 250.0, "unit": "g", "packPrice": 135.0, "unitCost": 0.54, "supplier": "全聯/大全聯", "note": "鮮榨檸檬汁"}, {"id": "ING-46", "category": "蔬果堅果", "name": "藍莓果醬", "packSize": 412.0, "unit": "g", "packPrice": 153.56, "unitCost": 0.3727184466, "supplier": "自製", "note": "冷凍藍莓+岩鹽+細砂+鮮榨檸檬汁自製果醬"}, {"id": "ING-47", "category": "蔬果堅果", "name": "蘋果", "packSize": 867.0, "unit": "g", "packPrice": 130.0, "unitCost": 0.1499423299, "supplier": "全聯/大全聯", "note": "富士蘋果(肉桂捲內餡)"}, {"id": "ING-48", "category": "蔬果堅果", "name": "Cacao Barry法國無糖巧克力粉", "packSize": 1000.0, "unit": "g", "packPrice": 745.0, "unitCost": 0.745, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-49", "category": "調味香料", "name": "小香草莢醬", "packSize": 130.0, "unit": "g", "packPrice": 230.0, "unitCost": 1.769230769, "supplier": "烘焙樂", "note": "頂級天然香草籽醬"}, {"id": "ING-50", "category": "調味香料", "name": "小磨坊玉桂粉", "packSize": 1000.0, "unit": "g", "packPrice": 320.0, "unitCost": 0.32, "supplier": "十代", "note": "玉桂粉"}, {"id": "ING-51", "category": "調味香料", "name": "小磨坊肉桂粉", "packSize": 600.0, "unit": "g", "packPrice": 185.0, "unitCost": 0.3083333333, "supplier": "烘焙樂", "note": "常用肉桂粉"}, {"id": "ING-52", "category": "調味香料", "name": "小磨坊豆蔻粉", "packSize": 1000.0, "unit": "g", "packPrice": 320.0, "unitCost": 0.32, "supplier": "烘焙行", "note": "提味香料"}, {"id": "ING-53", "category": "調味香料", "name": "小磨坊洋香菜葉", "packSize": 85.0, "unit": "g", "packPrice": 165.0, "unitCost": 1.941176471, "supplier": "COUPANG", "note": ""}, {"id": "ING-54", "category": "調味香料", "name": "日本雙葉明太子醬", "packSize": 500.0, "unit": "g", "packPrice": 595.0, "unitCost": 1.19, "supplier": "蝦皮(萬福水產)", "note": ""}, {"id": "ING-55", "category": "調味香料", "name": "日本GABAN頂級肉桂粉", "packSize": 100.0, "unit": "g", "packPrice": 180.0, "unitCost": 1.8, "supplier": "蝦皮(橙品)", "note": "肉桂捲主風味"}, {"id": "ING-56", "category": "調味香料", "name": "日本KEWPIE美乃滋", "packSize": 450.0, "unit": "g", "packPrice": 135.0, "unitCost": 0.3, "supplier": "COUPANG", "note": ""}, {"id": "ING-57", "category": "調味香料", "name": "台榮玉米澱粉", "packSize": 500.0, "unit": "g", "packPrice": 25.0, "unitCost": 0.05, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-58", "category": "調味香料", "name": "老船長蘭姆酒", "packSize": 350.0, "unit": "ml", "packPrice": 150.0, "unitCost": 0.4285714286, "supplier": "裕軒", "note": "甜點調味蘭姆酒"}, {"id": "ING-59", "category": "調味香料", "name": "法國細海鹽", "packSize": 750.0, "unit": "g", "packPrice": 140.0, "unitCost": 0.1866666667, "supplier": "烘焙樂", "note": "法國海鹽"}, {"id": "ING-60", "category": "調味香料", "name": "桂冠沙拉醬", "packSize": 20.0, "unit": "g", "packPrice": 29.0, "unitCost": 1.45, "supplier": "全聯/大全聯", "note": ""}, {"id": "ING-61", "category": "調味香料", "name": "軟法奶油大蒜醬", "packSize": 216.0, "unit": "g", "packPrice": 124.0580392, "unitCost": 0.5743427741, "supplier": "自製", "note": "愛樂薇奶油+蒜仁+蜂蜜+岩鹽+帕瑪森起司粉+洋香菜葉+鮮奶油自製抹醬"}, {"id": "ING-62", "category": "調味香料", "name": "軟法明太子醬", "packSize": 372.0, "unit": "g", "packPrice": 306.044186, "unitCost": 0.8226994249, "supplier": "自製", "note": "愛樂薇奶油+雙葉明太子+美乃滋+沙拉醬+檸檬+山葵特調抹醬"}, {"id": "ING-63", "category": "調味香料", "name": "喜馬拉雅岩鹽", "packSize": 400.0, "unit": "g", "packPrice": 72.0, "unitCost": 0.18, "supplier": "超市", "note": "純淨粉紅岩鹽"}, {"id": "ING-64", "category": "調味香料", "name": "喜馬拉雅玫瑰鹽", "packSize": 1000.0, "unit": "g", "packPrice": 200.0, "unitCost": 0.2, "supplier": "烘焙樂", "note": "細粒玫瑰鹽"}, {"id": "ING-65", "category": "調味香料", "name": "德國香草醬", "packSize": 130.0, "unit": "g", "packPrice": 250.0, "unitCost": 1.923076923, "supplier": "蝦皮", "note": "天然香草醬"}, {"id": "ING-66", "category": "調味香料", "name": "靜岡抹茶粉", "packSize": 100.0, "unit": "g", "packPrice": 265.0, "unitCost": 2.65, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-67", "category": "調味香料", "name": "龍眼蜂蜜", "packSize": 1200.0, "unit": "g", "packPrice": 400.0, "unitCost": 0.3333333333, "supplier": "蜂農直營", "note": "瑪德蓮、費南雪提味"}, {"id": "ING-68", "category": "調味香料", "name": "Bacardi蘭姆酒", "packSize": 1000.0, "unit": "ml", "packPrice": 450.0, "unitCost": 0.45, "supplier": "Costco", "note": "百加得白蘭姆酒"}, {"id": "ING-69", "category": "調味香料", "name": "HOUSE好侍山葵", "packSize": 43.0, "unit": "g", "packPrice": 60.0, "unitCost": 1.395348837, "supplier": "COUPANG", "note": ""}, {"id": "ING-70", "category": "糖類", "name": "小島製糖-糖粉", "packSize": 1000.0, "unit": "g", "packPrice": 95.0, "unitCost": 0.095, "supplier": "蝦皮", "note": "糖霜、磅蛋糕"}, {"id": "ING-71", "category": "糖類", "name": "日本三井上白糖", "packSize": 1000.0, "unit": "g", "packPrice": 93.0, "unitCost": 0.093, "supplier": "蝦皮(柚子)", "note": "瑪德蓮、費南雪常用"}, {"id": "ING-72", "category": "糖類", "name": "日本三井白雙糖(粗顆粒)", "packSize": 1000.0, "unit": "g", "packPrice": 135.0, "unitCost": 0.135, "supplier": "蝦皮", "note": "粗顆粒結晶糖"}, {"id": "ING-73", "category": "糖類", "name": "日本三溫糖", "packSize": 1000.0, "unit": "g", "packPrice": 90.0, "unitCost": 0.09, "supplier": "蝦皮", "note": "風味溫潤三溫糖"}, {"id": "ING-74", "category": "糖類", "name": "台糖細砂", "packSize": 1000.0, "unit": "g", "packPrice": 38.0, "unitCost": 0.038, "supplier": "全聯/大全聯", "note": "基礎細砂糖"}, {"id": "ING-75", "category": "糖類", "name": "東洋上白糖", "packSize": 1000.0, "unit": "g", "packPrice": 96.0, "unitCost": 0.096, "supplier": "裕軒", "note": "日式上白糖"}, {"id": "ING-76", "category": "糖類", "name": "品元珍珠糖", "packSize": 250.0, "unit": "g", "packPrice": 70.0, "unitCost": 0.28, "supplier": "烘焙行", "note": "鬆餅、表面裝飾"}, {"id": "ING-77", "category": "糖類", "name": "純手工黑糖", "packSize": 900.0, "unit": "g", "packPrice": 86.0, "unitCost": 0.09555555556, "supplier": "雜糧行", "note": "肉桂捲黑糖餡"}, {"id": "ING-78", "category": "糖類", "name": "義大利EUROMALT麥芽精", "packSize": 100.0, "unit": "g", "packPrice": 87.0, "unitCost": 0.87, "supplier": "蝦皮", "note": "歐式麵包專用"}, {"id": "ING-79", "category": "膨脹輔料", "name": "無鋁泡打粉", "packSize": 80.0, "unit": "g", "packPrice": 95.0, "unitCost": 1.1875, "supplier": "蝦皮(橙品)", "note": "蛋糕膨脹輔料"}, {"id": "ING-80", "category": "麵粉", "name": "日本霓虹高筋麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 75.0, "unitCost": 0.075, "supplier": "蝦皮", "note": "麵包吐司"}, {"id": "ING-81", "category": "麵粉", "name": "水手牌小麥粉", "packSize": 1000.0, "unit": "g", "packPrice": 80.0, "unitCost": 0.08, "supplier": "蝦皮", "note": "麥香麵包"}, {"id": "ING-82", "category": "麵粉", "name": "水手牌低筋麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 85.0, "unitCost": 0.085, "supplier": "蝦皮", "note": "蛋糕、肉桂捲小麥粉"}, {"id": "ING-83", "category": "麵粉", "name": "水手牌高筋麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 85.0, "unitCost": 0.085, "supplier": "蝦皮", "note": "吐司麵包"}, {"id": "ING-84", "category": "麵粉", "name": "米森有機小麥粉", "packSize": 500.0, "unit": "g", "packPrice": 105.0, "unitCost": 0.21, "supplier": "全聯", "note": "全麥麵包、肉桂捲"}, {"id": "ING-85", "category": "麵粉", "name": "鳥越製粉-哥摩(高筋)", "packSize": 1000.0, "unit": "g", "packPrice": 110.0, "unitCost": 0.11, "supplier": "裕軒", "note": "生吐司專用高筋粉"}, {"id": "ING-86", "category": "麵粉", "name": "統一麥典麵包專用粉", "packSize": 1000.0, "unit": "g", "packPrice": 105.0, "unitCost": 0.105, "supplier": "蝦皮", "note": "麵包吐司"}, {"id": "ING-87", "category": "麵粉", "name": "鐵塔法印法國麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 98.0, "unitCost": 0.098, "supplier": "蝦皮", "note": "歐式麵包專用麵粉"}, {"id": "ING-88", "category": "麵粉", "name": "鑽石牌低筋麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 100.0, "unitCost": 0.1, "supplier": "裕軒", "note": "瑪德蓮、費南雪"}, {"id": "ING-89", "category": "麵粉", "name": "T55法國麵粉", "packSize": 1500.0, "unit": "g", "packPrice": 95.0, "unitCost": 0.06333333333, "supplier": "旺來興", "note": "法國麵包、肉桂捲配方"}], "recipes": [{"id": "RCP-01", "name": "生吐司", "baseYield": 8.0, "yieldUnit": "條", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 1893.0, "unit": "g", "unitCost": 0.11, "subtotal": 208.23, "stage": "主麵團高筋粉"}, {"ingredient": "法國鐵塔牌動物性鮮奶油", "baseQty": 307.0, "unit": "g", "unitCost": 0.27, "subtotal": 82.89, "stage": "主麵團乳脂"}, {"ingredient": "燈塔牌無鹽奶油", "baseQty": 152.0, "unit": "g", "unitCost": 0.46, "subtotal": 69.92, "stage": "主麵團後放奶油"}, {"ingredient": "鷹牌煉乳", "baseQty": 189.0, "unit": "g", "unitCost": 0.32, "subtotal": 60.48, "stage": "主麵團保濕增香"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 29.0, "unit": "g", "unitCost": 0.298, "subtotal": 8.642, "stage": "發酵種"}, {"ingredient": "高大鮮奶", "baseQty": 373.0, "unit": "g", "unitCost": 0.1121794872, "subtotal": 41.84294872, "stage": "主麵團液體"}, {"ingredient": "台糖細砂", "baseQty": 267.0, "unit": "g", "unitCost": 0.038, "subtotal": 10.146, "stage": "主麵團糖量"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 29.0, "unit": "g", "unitCost": 0.18, "subtotal": 5.22, "stage": "調味強化麵筋"}, {"ingredient": "波蘭種", "baseQty": 520.0, "unit": "g", "unitCost": 0.04615384615, "subtotal": 24.0, "stage": "隔夜低溫酵種"}, {"ingredient": "冷水", "baseQty": 667.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}]}, {"id": "RCP-02", "name": "肉桂捲", "baseYield": 7.0, "yieldUnit": "顆", "items": [{"ingredient": "T55法國麵粉", "baseQty": 330.0, "unit": "g", "unitCost": 0.06333333333, "subtotal": 20.9, "stage": "肉桂捲主麵團"}, {"ingredient": "水手牌低筋麵粉", "baseQty": 20.0, "unit": "g", "unitCost": 0.085, "subtotal": 1.7, "stage": "肉桂捲主麵團"}, {"ingredient": "高大鮮奶", "baseQty": 230.0, "unit": "g", "unitCost": 0.1121794872, "subtotal": 25.80128205, "stage": "肉桂捲主麵團"}, {"ingredient": "台糖細砂", "baseQty": 50.0, "unit": "g", "unitCost": 0.038, "subtotal": 1.9, "stage": "肉桂捲主麵團"}, {"ingredient": "燈塔牌無鹽奶油", "baseQty": 40.0, "unit": "g", "unitCost": 0.46, "subtotal": 18.4, "stage": "肉桂捲主麵團"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 4.5, "unit": "g", "unitCost": 0.18, "subtotal": 0.81, "stage": "肉桂捲主麵團"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 4.0, "unit": "g", "unitCost": 0.298, "subtotal": 1.192, "stage": "肉桂捲主麵團"}, {"ingredient": "燈塔牌無鹽奶油", "baseQty": 15.0, "unit": "g", "unitCost": 0.46, "subtotal": 6.9, "stage": "肉桂黑糖抹醬"}, {"ingredient": "日本GABAN頂級肉桂粉", "baseQty": 10.0, "unit": "g", "unitCost": 1.8, "subtotal": 18.0, "stage": "肉桂黑糖抹醬"}, {"ingredient": "純手工黑糖", "baseQty": 80.0, "unit": "g", "unitCost": 0.09555555556, "subtotal": 7.644444444, "stage": "肉桂黑糖抹醬"}, {"ingredient": "小磨坊豆蔻粉", "baseQty": 2.0, "unit": "g", "unitCost": 0.32, "subtotal": 0.64, "stage": "肉桂黑糖抹醬"}, {"ingredient": "冷水", "baseQty": 10.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "肉桂黑糖抹醬"}, {"ingredient": "蘋果", "baseQty": 650.0, "unit": "g", "unitCost": 0.1499423299, "subtotal": 97.46251442, "stage": "焦糖蘋果餡"}, {"ingredient": "台糖細砂", "baseQty": 104.0, "unit": "g", "unitCost": 0.038, "subtotal": 3.952, "stage": "焦糖蘋果餡"}, {"ingredient": "龍眼蜂蜜", "baseQty": 39.0, "unit": "g", "unitCost": 0.3333333333, "subtotal": 13.0, "stage": "焦糖蘋果餡"}, {"ingredient": "檸檬皮", "baseQty": 33.0, "unit": "g", "unitCost": 15.0, "subtotal": 495.0, "stage": "焦糖蘋果餡"}, {"ingredient": "燈塔牌無鹽奶油", "baseQty": 39.0, "unit": "g", "unitCost": 0.46, "subtotal": 17.94, "stage": "焦糖蘋果餡"}, {"ingredient": "老船長蘭姆酒", "baseQty": 13.0, "unit": "g", "unitCost": 0.4285714286, "subtotal": 5.571428571, "stage": "焦糖蘋果餡"}, {"ingredient": "日本GABAN頂級肉桂粉", "baseQty": 1.5, "unit": "g", "unitCost": 1.8, "subtotal": 2.7, "stage": "焦糖蘋果餡"}]}, {"id": "RCP-03", "name": "檸檬磅蛋糕", "baseYield": 2.0, "yieldUnit": "條", "items": [{"ingredient": "燈塔牌無鹽奶油", "baseQty": 300.0, "unit": "g", "unitCost": 0.46, "subtotal": 138.0, "stage": "蛋糕本體"}, {"ingredient": "小島製糖-糖粉", "baseQty": 260.0, "unit": "g", "unitCost": 0.095, "subtotal": 24.7, "stage": "蛋糕本體"}, {"ingredient": "水手牌低筋麵粉", "baseQty": 300.0, "unit": "g", "unitCost": 0.085, "subtotal": 25.5, "stage": "蛋糕本體"}, {"ingredient": "無鋁泡打粉", "baseQty": 6.0, "unit": "g", "unitCost": 1.1875, "subtotal": 7.125, "stage": "蛋糕本體"}, {"ingredient": "蛋", "baseQty": 260.0, "unit": "g", "unitCost": 0.237037037, "subtotal": 61.62962963, "stage": "蛋糕本體"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 3.0, "unit": "g", "unitCost": 0.18, "subtotal": 0.54, "stage": "蛋糕本體"}, {"ingredient": "台糖細砂", "baseQty": 4.0, "unit": "g", "unitCost": 0.038, "subtotal": 0.152, "stage": "檸檬皮糖漬"}, {"ingredient": "檸檬皮", "baseQty": 2.0, "unit": "顆", "unitCost": 15.0, "subtotal": 30.0, "stage": "檸檬皮糖漬"}, {"ingredient": "檸檬角", "baseQty": 60.0, "unit": "g", "unitCost": 0.54, "subtotal": 32.4, "stage": "蛋糕本體鮮檸汁"}, {"ingredient": "台糖細砂", "baseQty": 30.0, "unit": "g", "unitCost": 0.038, "subtotal": 1.14, "stage": "出爐刷面檸檬糖水"}, {"ingredient": "老船長蘭姆酒", "baseQty": 40.0, "unit": "g", "unitCost": 0.4285714286, "subtotal": 17.14285714, "stage": "出爐刷面檸檬糖水"}, {"ingredient": "檸檬角", "baseQty": 50.0, "unit": "g", "unitCost": 0.54, "subtotal": 27.0, "stage": "出爐刷面檸檬糖水"}, {"ingredient": "檸檬角", "baseQty": 40.0, "unit": "g", "unitCost": 0.54, "subtotal": 21.6, "stage": "頂層檸檬糖霜"}, {"ingredient": "小島製糖-糖粉", "baseQty": 200.0, "unit": "g", "unitCost": 0.095, "subtotal": 19.0, "stage": "頂層檸檬糖霜"}, {"ingredient": "冷水", "baseQty": 50.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "頂層檸檬糖霜調勻"}]}, {"id": "RCP-04", "name": "瑪德蓮", "baseYield": 14.0, "yieldUnit": "顆", "items": [{"ingredient": "燈塔牌無鹽奶油", "baseQty": 62.0, "unit": "g", "unitCost": 0.46, "subtotal": 28.52, "stage": "融化奶油"}, {"ingredient": "瑞穗鮮奶", "baseQty": 33.0, "unit": "g", "unitCost": 0.09784946237, "subtotal": 3.229032258, "stage": "麵糊液體"}, {"ingredient": "鑽石牌低筋麵粉", "baseQty": 53.0, "unit": "g", "unitCost": 0.1, "subtotal": 5.3, "stage": "粉類過篩"}, {"ingredient": "無鋁泡打粉", "baseQty": 0.4, "unit": "g", "unitCost": 1.1875, "subtotal": 0.475, "stage": "粉類過篩"}, {"ingredient": "蛋", "baseQty": 300.0, "unit": "g", "unitCost": 0.237037037, "subtotal": 71.11111111, "stage": "全蛋液"}, {"ingredient": "龍眼蜂蜜", "baseQty": 16.0, "unit": "g", "unitCost": 0.3333333333, "subtotal": 5.333333333, "stage": "風味保濕"}, {"ingredient": "日本三井上白糖", "baseQty": 130.0, "unit": "g", "unitCost": 0.093, "subtotal": 12.09, "stage": "主甜度"}, {"ingredient": "美國藍鑽杏仁粉", "baseQty": 80.0, "unit": "g", "unitCost": 0.4916666667, "subtotal": 39.33333333, "stage": "堅果香氣"}, {"ingredient": "法國Cocao Barry防潮可可粉", "baseQty": 17.0, "unit": "g", "unitCost": 0.71, "subtotal": 12.07, "stage": "巧克力風味調色"}]}, {"id": "RCP-05", "name": "費南雪", "baseYield": 6.0, "yieldUnit": "顆", "items": [{"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 50.0, "unit": "g", "unitCost": 0.525, "subtotal": 26.25, "stage": "焦化榛果奶油(Noisette)"}, {"ingredient": "鑽石牌低筋麵粉", "baseQty": 20.0, "unit": "g", "unitCost": 0.1, "subtotal": 2.0, "stage": "粉類過篩"}, {"ingredient": "無鋁泡打粉", "baseQty": 0.5, "unit": "g", "unitCost": 1.1875, "subtotal": 0.59375, "stage": "粉類過篩"}, {"ingredient": "蛋", "baseQty": 100.0, "unit": "g", "unitCost": 0.237037037, "subtotal": 23.7037037, "stage": "純蛋白液"}, {"ingredient": "龍眼蜂蜜", "baseQty": 6.0, "unit": "g", "unitCost": 0.3333333333, "subtotal": 2.0, "stage": "提香保濕"}, {"ingredient": "日本三井上白糖", "baseQty": 63.0, "unit": "g", "unitCost": 0.093, "subtotal": 5.859, "stage": "主甜度"}, {"ingredient": "美國藍鑽杏仁粉", "baseQty": 30.0, "unit": "g", "unitCost": 0.4916666667, "subtotal": 14.75, "stage": "杏仁香氣主料"}, {"ingredient": "美國生核桃", "baseQty": 10.0, "unit": "g", "unitCost": 0.5111111111, "subtotal": 5.111111111, "stage": "表面裝飾烘烤碎核桃"}]}, {"id": "RCP-06", "name": "波蘭種", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 260.0, "unit": "g", "unitCost": 0.11, "subtotal": 28.6, "stage": "酵種高筋麵粉"}, {"ingredient": "冷水", "baseQty": 260.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "酵種水分"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 1.0, "unit": "g", "unitCost": 0.298, "subtotal": 0.298, "stage": "起始發酵低溫冷藏發酵"}]}, {"id": "RCP-07", "name": "法國老麵麵糰", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "鐵塔法印法國麵粉", "baseQty": 1000.0, "unit": "g", "unitCost": 0.098, "subtotal": 98.0, "stage": "法國老麵主粉"}, {"ingredient": "冷水", "baseQty": 700.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "攪拌水分"}, {"ingredient": "義大利EUROMALT麥芽精", "baseQty": 3.0, "unit": "g", "unitCost": 0.87, "subtotal": 2.61, "stage": "麥芽精助發酵"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 20.0, "unit": "g", "unitCost": 0.18, "subtotal": 3.6, "stage": "強化筋性調味"}, {"ingredient": "燕子牌低糖酵母(紅色包裝)", "baseQty": 6.0, "unit": "g", "unitCost": 0.358, "subtotal": 2.148, "stage": "低糖耐冷藏酵母"}]}, {"id": "RCP-08", "name": "湯種", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 1000.0, "unit": "g", "unitCost": 0.11, "subtotal": 110.0, "stage": "湯種燙麵粉"}, {"ingredient": "冷水", "baseQty": 1000.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "燙麵水分"}, {"ingredient": "台糖細砂", "baseQty": 100.0, "unit": "g", "unitCost": 0.038, "subtotal": 3.8, "stage": "湯種保濕"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 20.0, "unit": "g", "unitCost": 0.18, "subtotal": 3.6, "stage": "強化麵筋風味"}]}, {"id": "RCP-09", "name": "軟歐蜂蜜起司醬", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 70.0, "unit": "g", "unitCost": 0.525, "subtotal": 36.75, "stage": "奶油基底融化"}, {"ingredient": "台糖細砂", "baseQty": 35.0, "unit": "g", "unitCost": 0.038, "subtotal": 1.33, "stage": "起司抹醬甜度"}, {"ingredient": "安佳起司片", "baseQty": 6.0, "unit": "片", "unitCost": 4.666666667, "subtotal": 28.0, "stage": "起司香氣增稠(6片/66g)"}, {"ingredient": "法國愛樂薇動物性鮮奶油", "baseQty": 65.0, "unit": "g", "unitCost": 0.27, "subtotal": 17.55, "stage": "鮮奶油乳香滑順"}, {"ingredient": "龍眼蜂蜜", "baseQty": 15.0, "unit": "g", "unitCost": 0.3333333333, "subtotal": 5.0, "stage": "龍眼花蜜香氣"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 0.5, "unit": "g", "unitCost": 0.18, "subtotal": 0.09, "stage": "解甜提鮮"}, {"ingredient": "義大利Zanetti帕瑪森起司粉", "baseQty": 10.0, "unit": "g", "unitCost": 0.74, "subtotal": 7.4, "stage": "濃郁起司風味"}]}, {"id": "RCP-10", "name": "蜂蜜起司軟歐", "baseYield": 11.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 500.0, "unit": "g", "unitCost": 0.11, "subtotal": 55.0, "stage": "主麵團高筋粉"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.5, "unit": "g", "unitCost": 0.18, "subtotal": 1.35, "stage": "強化筋性調味"}, {"ingredient": "東洋上白糖", "baseQty": 80.0, "unit": "g", "unitCost": 0.096, "subtotal": 7.68, "stage": "日式上白糖甜度保濕"}, {"ingredient": "光泉鮮奶", "baseQty": 160.0, "unit": "g", "unitCost": 0.09401709402, "subtotal": 15.04273504, "stage": "鮮乳水分與乳香"}, {"ingredient": "冷水", "baseQty": 160.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 7.0, "unit": "g", "unitCost": 0.298, "subtotal": 2.086, "stage": "耐高糖速發酵母"}, {"ingredient": "法國老麵麵糰", "baseQty": 100.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 6.151417004, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 100.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 5.537735849, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 25.0, "unit": "g", "unitCost": 0.525, "subtotal": 13.125, "stage": "後放發酵奶油"}, {"ingredient": "安佳起司片", "baseQty": 11.0, "unit": "片", "unitCost": 4.666666667, "subtotal": 51.33333333, "stage": "包入起司夾餡(11片/121g)"}, {"ingredient": "軟歐蜂蜜起司醬", "baseQty": 165.0, "unit": "g", "unitCost": 0.3675717017, "subtotal": 60.64933078, "stage": "特調蜂蜜起司淋醬夾餡"}]}, {"id": "RCP-11", "name": "軟法明太子醬", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 60.0, "unit": "g", "unitCost": 0.525, "subtotal": 31.5, "stage": "融化奶油基底"}, {"ingredient": "桂冠沙拉醬", "baseQty": 20.0, "unit": "g", "unitCost": 1.45, "subtotal": 29.0, "stage": "傳統沙拉醬增添甜滑"}, {"ingredient": "日本KEWPIE美乃滋", "baseQty": 110.0, "unit": "g", "unitCost": 0.3, "subtotal": 33.0, "stage": "日式美乃滋微酸風味"}, {"ingredient": "日本雙葉明太子醬", "baseQty": 160.0, "unit": "g", "unitCost": 1.19, "subtotal": 190.4, "stage": "主角明太子鮮甜微辣"}, {"ingredient": "檸檬角", "baseQty": 10.0, "unit": "g", "unitCost": 0.54, "subtotal": 5.4, "stage": "新鮮檸檬汁解膩提味"}, {"ingredient": "HOUSE好侍山葵", "baseQty": 12.0, "unit": "g", "unitCost": 1.395348837, "subtotal": 16.74418605, "stage": "山葵微嗆層次香氣"}]}, {"id": "RCP-12", "name": "明太子軟法", "baseYield": 9.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 500.0, "unit": "g", "unitCost": 0.11, "subtotal": 55.0, "stage": "主麵團高筋粉"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.5, "unit": "g", "unitCost": 0.18, "subtotal": 1.35, "stage": "強化筋性與鹹香"}, {"ingredient": "東洋上白糖", "baseQty": 80.0, "unit": "g", "unitCost": 0.096, "subtotal": 7.68, "stage": "日式上白糖甜度保濕"}, {"ingredient": "光泉鮮奶", "baseQty": 160.0, "unit": "g", "unitCost": 0.09401709402, "subtotal": 15.04273504, "stage": "鮮乳水分與乳香"}, {"ingredient": "冷水", "baseQty": 160.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 7.0, "unit": "g", "unitCost": 0.298, "subtotal": 2.086, "stage": "耐高糖速發酵母"}, {"ingredient": "法國老麵麵糰", "baseQty": 100.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 6.151417004, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 100.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 5.537735849, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 25.0, "unit": "g", "unitCost": 0.525, "subtotal": 13.125, "stage": "後放發酵奶油"}, {"ingredient": "軟法明太子醬", "baseQty": 180.0, "unit": "g", "unitCost": 0.8226994249, "subtotal": 148.0858965, "stage": "劃刀填餡與表面抹醬(9顆/約20g顆)"}]}, {"id": "RCP-13", "name": "軟法奶油大蒜醬", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 100.0, "unit": "g", "unitCost": 0.525, "subtotal": 52.5, "stage": "融化奶油基底"}, {"ingredient": "免剝蒜仁", "baseQty": 40.0, "unit": "g", "unitCost": 0.745, "subtotal": 29.8, "stage": "新鮮蒜仁壓泥爆香"}, {"ingredient": "龍眼蜂蜜", "baseQty": 10.0, "unit": "g", "unitCost": 0.3333333333, "subtotal": 3.333333333, "stage": "圓潤花蜜提香解膩"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 2.0, "unit": "g", "unitCost": 0.18, "subtotal": 0.36, "stage": "鹹度平衡提味"}, {"ingredient": "義大利Zanetti帕瑪森起司粉", "baseQty": 30.0, "unit": "g", "unitCost": 0.74, "subtotal": 22.2, "stage": "濃郁乳酪鹹香風味"}, {"ingredient": "小磨坊洋香菜葉", "baseQty": 4.0, "unit": "g", "unitCost": 1.941176471, "subtotal": 7.764705882, "stage": "翠綠香草碎提色增香"}, {"ingredient": "法國愛樂薇動物性鮮奶油", "baseQty": 30.0, "unit": "g", "unitCost": 0.27, "subtotal": 8.1, "stage": "鮮奶油滑順乳化乳香"}]}, {"id": "RCP-14", "name": "乳酪內餡", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "法國Le Gall燈塔鮮奶油乳酪", "baseQty": 200.0, "unit": "g", "unitCost": 0.33, "subtotal": 66.0, "stage": "主體奶油乳酪微酸奶香"}, {"ingredient": "台糖細砂", "baseQty": 37.0, "unit": "g", "unitCost": 0.038, "subtotal": 1.406, "stage": "內餡基礎甜度"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 8.0, "unit": "g", "unitCost": 0.525, "subtotal": 4.2, "stage": "質地潤滑增添乳香"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 2.0, "unit": "g", "unitCost": 0.18, "subtotal": 0.36, "stage": "提鮮解膩鹹甜平衡"}, {"ingredient": "台榮玉米澱粉", "baseQty": 3.0, "unit": "g", "unitCost": 0.05, "subtotal": 0.15, "stage": "烘烤定型質地穩定"}, {"ingredient": "豐力富高鈣營養奶粉", "baseQty": 5.0, "unit": "g", "unitCost": 0.2340909091, "subtotal": 1.170454545, "stage": "濃郁奶香強化風味"}]}, {"id": "RCP-15", "name": "藍莓果醬", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "冷凍藍莓(加拿大)", "baseQty": 300.0, "unit": "g", "unitCost": 0.48, "subtotal": 144.0, "stage": "藍莓果粒主角"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 2.0, "unit": "g", "unitCost": 0.18, "subtotal": 0.36, "stage": "提鮮襯托果香"}, {"ingredient": "台糖細砂", "baseQty": 100.0, "unit": "g", "unitCost": 0.038, "subtotal": 3.8, "stage": "果醬濃縮熬煮糖度"}, {"ingredient": "檸檬角", "baseQty": 10.0, "unit": "g", "unitCost": 0.54, "subtotal": 5.4, "stage": "鮮榨檸檬汁天然果膠提酸"}]}, {"id": "RCP-16", "name": "蒜香軟法", "baseYield": 9.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 500.0, "unit": "g", "unitCost": 0.11, "subtotal": 55.0, "stage": "主麵團高筋粉"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.5, "unit": "g", "unitCost": 0.18, "subtotal": 1.35, "stage": "強化筋性與鹹香"}, {"ingredient": "東洋上白糖", "baseQty": 80.0, "unit": "g", "unitCost": 0.096, "subtotal": 7.68, "stage": "日式上白糖甜度保濕"}, {"ingredient": "光泉鮮奶", "baseQty": 160.0, "unit": "g", "unitCost": 0.09401709402, "subtotal": 15.04273504, "stage": "鮮乳水分與乳香"}, {"ingredient": "冷水", "baseQty": 160.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 7.0, "unit": "g", "unitCost": 0.298, "subtotal": 2.086, "stage": "耐高糖速發酵母"}, {"ingredient": "法國老麵麵糰", "baseQty": 100.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 6.151417004, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 100.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 5.537735849, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 25.0, "unit": "g", "unitCost": 0.525, "subtotal": 13.125, "stage": "後放發酵奶油"}, {"ingredient": "軟法奶油大蒜醬", "baseQty": 225.0, "unit": "g", "unitCost": 0.5743427741, "subtotal": 129.2271242, "stage": "劃刀填餡與表面抹蒜醬(9顆/約25g顆)"}]}, {"id": "RCP-17", "name": "抹茶紅豆乳酪歐包", "baseYield": 8.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 392.0, "unit": "g", "unitCost": 0.11, "subtotal": 43.12, "stage": "主麵團高筋粉"}, {"ingredient": "靜岡抹茶粉", "baseQty": 16.0, "unit": "g", "unitCost": 2.65, "subtotal": 42.4, "stage": "靜岡純抹茶粉微苦回甘"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.2, "unit": "g", "unitCost": 0.18, "subtotal": 1.296, "stage": "強化麵筋與風味"}, {"ingredient": "東洋上白糖", "baseQty": 20.0, "unit": "g", "unitCost": 0.096, "subtotal": 1.92, "stage": "麵團基礎保濕甜度"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 4.8, "unit": "g", "unitCost": 0.298, "subtotal": 1.4304, "stage": "耐高糖速發酵母"}, {"ingredient": "冷水", "baseQty": 272.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "法國老麵麵糰", "baseQty": 80.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 4.921133603, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 80.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 4.430188679, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 20.8, "unit": "g", "unitCost": 0.525, "subtotal": 10.92, "stage": "後放發酵奶油"}, {"ingredient": "乳酪內餡", "baseQty": 240.0, "unit": "g", "unitCost": 0.287397861, "subtotal": 68.97548663, "stage": "濃郁特調乳酪夾餡(8顆/約30g顆)"}, {"ingredient": "萬丹紅豆粒餡", "baseQty": 200.0, "unit": "g", "unitCost": 0.245, "subtotal": 49.0, "stage": "萬丹紅豆香甜粒餡(8顆/約25g顆)"}]}, {"id": "RCP-18", "name": "巧克力乳酪歐包", "baseYield": 8.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 392.0, "unit": "g", "unitCost": 0.11, "subtotal": 43.12, "stage": "主麵團高筋粉"}, {"ingredient": "Cacao Barry法國無糖巧克力粉", "baseQty": 16.0, "unit": "g", "unitCost": 0.745, "subtotal": 11.92, "stage": "純可可粉濃郁醇厚香氣"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.2, "unit": "g", "unitCost": 0.18, "subtotal": 1.296, "stage": "強化麵筋與風味"}, {"ingredient": "東洋上白糖", "baseQty": 20.0, "unit": "g", "unitCost": 0.096, "subtotal": 1.92, "stage": "麵團基礎保濕甜度"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 4.8, "unit": "g", "unitCost": 0.298, "subtotal": 1.4304, "stage": "耐高糖速發酵母"}, {"ingredient": "冷水", "baseQty": 272.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "法國老麵麵糰", "baseQty": 80.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 4.921133603, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 80.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 4.430188679, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 20.8, "unit": "g", "unitCost": 0.525, "subtotal": 10.92, "stage": "後放發酵奶油"}, {"ingredient": "乳酪內餡", "baseQty": 240.0, "unit": "g", "unitCost": 0.287397861, "subtotal": 68.97548663, "stage": "濃郁特調乳酪夾餡(8顆/約30g顆)"}, {"ingredient": "博列羅耐烤黑可可豆", "baseQty": 80.0, "unit": "g", "unitCost": 0.26, "subtotal": 20.8, "stage": "耐烤黑可可豆爆漿顆粒(8顆/約10g顆)"}]}, {"id": "RCP-19", "name": "芝麻乳酪歐包", "baseYield": 8.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 376.0, "unit": "g", "unitCost": 0.11, "subtotal": 41.36, "stage": "主麵團高筋粉"}, {"ingredient": "芝初高鈣無糖黑芝麻粉", "baseQty": 32.0, "unit": "g", "unitCost": 0.7605263158, "subtotal": 24.33684211, "stage": "高鈣純黑芝麻細粉香氣"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.2, "unit": "g", "unitCost": 0.18, "subtotal": 1.296, "stage": "強化麵筋與風味"}, {"ingredient": "東洋上白糖", "baseQty": 20.0, "unit": "g", "unitCost": 0.096, "subtotal": 1.92, "stage": "麵團基礎保濕甜度"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 4.8, "unit": "g", "unitCost": 0.298, "subtotal": 1.4304, "stage": "耐高糖速發酵母"}, {"ingredient": "冷水", "baseQty": 272.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "法國老麵麵糰", "baseQty": 80.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 4.921133603, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 80.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 4.430188679, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 20.8, "unit": "g", "unitCost": 0.525, "subtotal": 10.92, "stage": "後放發酵奶油"}, {"ingredient": "乳酪內餡", "baseQty": 240.0, "unit": "g", "unitCost": 0.287397861, "subtotal": 68.97548663, "stage": "濃郁特調乳酪夾餡(8顆/約30g顆)"}, {"ingredient": "芝初黑芝麻粒", "baseQty": 16.0, "unit": "g", "unitCost": 0.8476190476, "subtotal": 13.56190476, "stage": "烘烤黑芝麻粒增添脆感"}, {"ingredient": "富味鄉黑芝麻餡", "baseQty": 48.0, "unit": "g", "unitCost": 0.339, "subtotal": 16.272, "stage": "富味鄉濃香黑芝麻餡"}]}, {"id": "RCP-20", "name": "藍莓乳酪歐包", "baseYield": 8.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 392.0, "unit": "g", "unitCost": 0.11, "subtotal": 43.12, "stage": "主麵團高筋粉"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.2, "unit": "g", "unitCost": 0.18, "subtotal": 1.296, "stage": "強化麵筋與風味"}, {"ingredient": "東洋上白糖", "baseQty": 8.0, "unit": "g", "unitCost": 0.096, "subtotal": 0.768, "stage": "麵團基礎保濕甜度"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 4.8, "unit": "g", "unitCost": 0.298, "subtotal": 1.4304, "stage": "耐高糖速發酵母"}, {"ingredient": "冷水", "baseQty": 240.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "法國老麵麵糰", "baseQty": 80.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 4.921133603, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 80.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 4.430188679, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 20.8, "unit": "g", "unitCost": 0.525, "subtotal": 10.92, "stage": "後放發酵奶油"}, {"ingredient": "乳酪內餡", "baseQty": 240.0, "unit": "g", "unitCost": 0.287397861, "subtotal": 68.97548663, "stage": "濃郁特調乳酪夾餡(8顆/約30g顆)"}, {"ingredient": "藍莓果醬", "baseQty": 128.0, "unit": "g", "unitCost": 0.3727184466, "subtotal": 47.70796117, "stage": "自製酸甜藍莓果醬夾餡(8顆/約16g顆)"}]}], "costOverview": [{"name": "生吐司", "baseYield": 8.0, "unitFoodCost": 63.92136859, "unitPackCost": 20.0, "unitLaborCost": 20.335, "unitUtilityCost": 0.51875, "unitTotalCost": 104.7751186, "unitPrice": 240.0, "unitProfit": 135.2248814, "margin": 0.5634370059, "advice": "高單價主力品項，獲利結構優良"}, {"name": "肉桂捲", "baseYield": 7.0, "unitFoodCost": 105.6448099, "unitPackCost": 5.0, "unitLaborCost": 93.24, "unitUtilityCost": 2.378571429, "unitTotalCost": 206.2633814, "unitPrice": 150.0, "unitProfit": -56.26338135, "margin": -0.375089209, "advice": "⚠️ 單批工時長導致毛利偏低，建議擴產至14顆攤提工時或調價至 $190+"}, {"name": "檸檬磅蛋糕", "baseYield": 2.0, "unitFoodCost": 202.9647434, "unitPackCost": 6.25, "unitLaborCost": 147.0, "unitUtilityCost": 3.75, "unitTotalCost": 359.9647434, "unitPrice": 520.0, "unitProfit": 160.0352566, "margin": 0.3077601089, "advice": "節慶整條送禮首選，客單價高，可搭配切片單售提升銷量"}, {"name": "瑪德蓮", "baseYield": 14.0, "unitFoodCost": 12.67584357, "unitPackCost": 3.57, "unitLaborCost": 8.12, "unitUtilityCost": 0.2071428571, "unitTotalCost": 24.57298643, "unitPrice": 70.0, "unitProfit": 45.42701357, "margin": 0.6489573367, "advice": "⭐ 高毛利常溫點心，製作效率高，具優良長銷潛力"}, {"name": "費南雪", "baseYield": 6.0, "unitFoodCost": 13.37792747, "unitPackCost": 8.33, "unitLaborCost": 32.66666667, "unitUtilityCost": 0.8333333333, "unitTotalCost": 55.20792747, "unitPrice": 70.0, "unitProfit": 14.79207253, "margin": 0.2113153219, "advice": "焦化榛果奶油風味獨特，建議單批擴大至12顆以攤提工時"}, {"name": "蜂蜜起司軟歐", "baseYield": 11.0, "unitFoodCost": 19.81414109, "unitPackCost": 1.85, "unitLaborCost": 23.69818182, "unitUtilityCost": 0.6045454545, "unitTotalCost": 45.96686836, "unitPrice": 85.0, "unitProfit": 39.03313164, "margin": 0.4592133134, "advice": "⭐ 扣除2小時靜置發酵後單批操作工時為1.33小時，單件成本降至約$46.9，毛利率大幅提升至44.8%，獲利表現穩健"}, {"name": "明太子軟法", "baseYield": 9.0, "unitFoodCost": 28.22875382, "unitPackCost": 1.85, "unitLaborCost": 28.96444444, "unitUtilityCost": 0.7388888889, "unitTotalCost": 59.78208715, "unitPrice": 95.0, "unitProfit": 35.21791285, "margin": 0.3707148721, "advice": "鹹香濃郁明太子搭配老麵軟法，單批9顆毛利率優異，極具人氣明星商品潛力"}, {"name": "蒜香軟法", "baseYield": 9.0, "unitFoodCost": 26.13333468, "unitPackCost": 1.85, "unitLaborCost": 28.96444444, "unitUtilityCost": 0.7388888889, "unitTotalCost": 57.68666801, "unitPrice": 85.0, "unitProfit": 27.31333199, "margin": 0.3213333175, "advice": "濃厚自製大蒜奶油抹醬搭配外脆內軟軟法，單批9顆毛利率優異，極具人氣鹹麵包潛力"}, {"name": "抹茶紅豆乳酪歐包", "baseYield": 8.0, "unitFoodCost": 28.55165111, "unitPackCost": 1.85, "unitLaborCost": 32.585, "unitUtilityCost": 0.83125, "unitTotalCost": 63.81790111, "unitPrice": 95.0, "unitProfit": 31.18209889, "margin": 0.3282326199, "advice": "⭐ 靜岡純抹茶粉苦甜搭配自製乳酪內餡與紅豆，高客單價且毛利穩健"}, {"name": "巧克力乳酪歐包", "baseYield": 8.0, "unitFoodCost": 21.21665111, "unitPackCost": 1.85, "unitLaborCost": 32.585, "unitUtilityCost": 0.83125, "unitTotalCost": 56.48290111, "unitPrice": 85.0, "unitProfit": 28.51709889, "margin": 0.335495281, "advice": "法國純可可粉結合爆漿耐烤可可豆與乳酪，風味濃郁甜鹹平衡"}, {"name": "芝麻乳酪歐包", "baseYield": 8.0, "unitFoodCost": 23.67799447, "unitPackCost": 1.85, "unitLaborCost": 32.585, "unitUtilityCost": 0.83125, "unitTotalCost": 58.94424447, "unitPrice": 85.0, "unitProfit": 26.05575553, "margin": 0.3065383003, "advice": "高鈣無糖黑芝麻粉結合脆芝麻粒與乳酪，兼具養生與香濃口感"}, {"name": "藍莓乳酪歐包", "baseYield": 8.0, "unitFoodCost": 22.94614626, "unitPackCost": 1.85, "unitLaborCost": 32.585, "unitUtilityCost": 0.83125, "unitTotalCost": 58.21239626, "unitPrice": 85.0, "unitProfit": 26.78760374, "margin": 0.3151482793, "advice": "自製酸甜藍莓果醬搭配香濃乳酪內餡，清爽果香深受女性喜愛"}]};

    // Product Categories for STEP 1 Categorized Selection (不用全部攤開)
    const PRODUCT_CATEGORIES = [
      {
        id: 'toast',
        name: '經典吐司與肉桂捲',
        emoji: '🍞',
        desc: '店內招牌生吐司、焦糖蘋果肉桂捲',
        recipeIds: ['RCP-01', 'RCP-02']
      },
      {
        id: 'euro',
        name: '人氣軟歐與鹹香軟法',
        emoji: '🥖',
        desc: '蜂蜜起司、明太子、蒜香軟法與 4 款乳酪歐包',
        recipeIds: ['RCP-10', 'RCP-12', 'RCP-16', 'RCP-17', 'RCP-18', 'RCP-19', 'RCP-20']
      },
      {
        id: 'dessert',
        name: '法式常溫甜點',
        emoji: '🍰',
        desc: '檸檬磅蛋糕、瑪德蓮、焦化奶油費南雪',
        recipeIds: ['RCP-03', 'RCP-04', 'RCP-05']
      },
      {
        id: 'starter',
        name: '自製酵種與內餡抹醬',
        emoji: '🥣',
        desc: '波蘭種、法國老麵、湯種與 5 款特調內餡抹醬',
        recipeIds: ['RCP-06', 'RCP-07', 'RCP-08', 'RCP-09', 'RCP-11', 'RCP-13', 'RCP-14', 'RCP-15']
      }
    ];

    // Map of Self-Made Sub-Recipes for Automatic Breakdown in STEP 2
    const SUB_RECIPE_NAME_TO_ID = {
      '波蘭種': 'RCP-06',
      '法國老麵麵糰': 'RCP-07',
      '湯種': 'RCP-08',
      '軟歐蜂蜜起司醬': 'RCP-09',
      '軟法明太子醬': 'RCP-11',
      '軟法奶油大蒜醬': 'RCP-13',
      '乳酪內餡': 'RCP-14',
      '藍莓果醬': 'RCP-15'
    };

    // Metadata for all 20 Recipes (Synced with 成本與定價總覽 gid=2001)
    const RECIPE_META = {
      "RCP-01": {
        category: "toast",
        emoji: "🍞",
        subtitle: "鳥越哥摩高筋 × 法國鐵塔鮮奶油 × 隔夜波蘭種",
        panSpec: "450g 12兩吐司模 (基準 1 份做 8 條)",
        laborHours: 0.83,
        packCostUnit: 20.0,
        sellingPriceUnit: 240.0,
        advice: "高單價主力品項，獲利結構優良"
      },
      "RCP-02": {
        category: "toast",
        emoji: "🌀",
        subtitle: "T55法國麵粉 × 日本GABAN肉桂 × 焦糖富士蘋果餡",
        panSpec: "外帶專屬盒裝 (基準 1 份做 7 顆)",
        laborHours: 3.33,
        packCostUnit: 5.0,
        sellingPriceUnit: 150.0,
        advice: "⚠️ 單批工時長導致毛利偏低，建議擴產至14顆攤提工時或調價至 $190+"
      },
      "RCP-03": {
        category: "dessert",
        emoji: "🍋",
        subtitle: "燈塔發酵奶油 × 鮮榨檸檬汁 × 老船長蘭姆酒糖霜",
        panSpec: "磅蛋糕長型禮盒裝 (基準 1 份做 2 條)",
        laborHours: 1.50,
        packCostUnit: 6.25,
        sellingPriceUnit: 520.0,
        advice: "節慶整條送禮首選，客單價高，可搭配切片單售提升銷量"
      },
      "RCP-04": {
        category: "dessert",
        emoji: "🐚",
        subtitle: "鑽石低筋 × 藍鑽杏仁粉 × 法國Cacao Barry可可",
        panSpec: "經典貝殼模 (基準 1 份做 14 顆)",
        laborHours: 0.58,
        packCostUnit: 3.57,
        sellingPriceUnit: 70.0,
        advice: "⭐ 高毛利常溫點心，製作效率高，具優良長銷潛力"
      },
      "RCP-05": {
        category: "dessert",
        emoji: "🧈",
        subtitle: "法國愛樂薇焦化榛果奶油 × 藍鑽杏仁粉 × 烘烤核桃",
        panSpec: "金磚模封口袋裝 (基準 1 份做 6 顆)",
        laborHours: 1.00,
        packCostUnit: 8.33,
        sellingPriceUnit: 70.0,
        advice: "焦化榛果奶油風味獨特，建議單批擴大至12顆以攤提工時"
      },
      "RCP-06": {
        category: "starter",
        emoji: "🫧",
        subtitle: "鳥越哥摩高筋 260g + 冷水 260g + 高糖酵母 1g",
        panSpec: "生吐司專用隔夜低溫冷藏發酵種 (1份約 521g)",
        laborHours: 0.50,
        packCostUnit: 0.0,
        sellingPriceUnit: 0.0,
        advice: "自製隔夜低溫酵種，提供生吐司極致保濕與麥香"
      },
      "RCP-07": {
        category: "starter",
        emoji: "🥖",
        subtitle: "鐵塔法印法國麵粉 1000g + 水 700g + 麥芽精 3g + 低糖酵母 6g",
        panSpec: "軟歐與軟法專用自製法國老麵 (1份約 1,729g)",
        laborHours: 0.50,
        packCostUnit: 0.0,
        sellingPriceUnit: 0.0,
        advice: "自製法國老麵麵糰，賦予歐包與軟法深層小麥發酵香氣"
      },
      "RCP-08": {
        category: "starter",
        emoji: "♨️",
        subtitle: "鳥越哥摩高筋 1000g + 水 1000g + 細砂 100g + 岩鹽 20g",
        panSpec: "軟歐與軟法保濕柔軟湯種 (1份約 2,120g)",
        laborHours: 0.50,
        packCostUnit: 0.0,
        sellingPriceUnit: 0.0,
        advice: "自製燙麵湯種，鎖住水分讓麵包隔日依然Q彈柔軟"
      },
      "RCP-09": {
        category: "starter",
        emoji: "🍯",
        subtitle: "愛樂薇奶油 × 安佳起司片 × 龍眼蜂蜜 × 帕瑪森起司粉",
        panSpec: "蜂蜜起司軟歐專用抹醬 (1份約 261.5g)",
        laborHours: 0.50,
        packCostUnit: 0.0,
        sellingPriceUnit: 0.0,
        advice: "自製鹹甜濃郁蜂蜜起司醬，每顆軟歐約使用 15g"
      },
      "RCP-10": {
        category: "euro",
        emoji: "🧀",
        subtitle: "哥摩高筋 × 老麵湯種雙酵種 × 安佳起司片 & 蜂蜜起司醬",
        panSpec: "歐包夾鏈袋裝 (基準 1 份做 11 顆)",
        laborHours: 1.33,
        packCostUnit: 1.85,
        sellingPriceUnit: 85.0,
        advice: "⭐ 扣除2小時靜置發酵後單批操作工時為1.33小時，毛利率達45.9%，獲利表現穩健"
      },
      "RCP-11": {
        category: "starter",
        emoji: "🐟",
        subtitle: "日本雙葉明太子醬 × KEWPIE美乃滋 × 愛樂薇奶油 × 好侍山葵",
        panSpec: "明太子軟法專用抹醬 (1份約 372g)",
        laborHours: 0.50,
        packCostUnit: 0.0,
        sellingPriceUnit: 0.0,
        advice: "自製日式鹹香微嗆明太子抹醬，每顆軟法約填餡 20g"
      },
      "RCP-12": {
        category: "euro",
        emoji: "🥖",
        subtitle: "哥摩高筋 × 法國老麵 & 湯種 × 特調雙葉明太子山葵抹醬",
        panSpec: "軟法夾鏈袋裝 (基準 1 份做 9 顆)",
        laborHours: 1.33,
        packCostUnit: 1.85,
        sellingPriceUnit: 95.0,
        advice: "鹹香濃郁明太子搭配老麵軟法，單批9顆毛利率優異，極具人氣明星商品潛力"
      },
      "RCP-13": {
        category: "starter",
        emoji: "🧄",
        subtitle: "愛樂薇奶油 × 新鮮蒜仁泥 × 帕瑪森起司粉 × 龍眼蜂蜜 & 洋香菜",
        panSpec: "蒜香軟法專用抹醬 (1份約 216g)",
        laborHours: 0.50,
        packCostUnit: 0.0,
        sellingPriceUnit: 0.0,
        advice: "自製法式濃郁奶油大蒜醬，每顆軟法約填餡 25g"
      },
      "RCP-14": {
        category: "starter",
        emoji: "🥛",
        subtitle: "法國Le Gall燈塔鮮奶油乳酪 × 愛樂薇奶油 × 豐力富奶粉",
        panSpec: "歐包系列通用特調乳酪內餡 (1份約 255g)",
        laborHours: 0.50,
        packCostUnit: 0.0,
        sellingPriceUnit: 0.0,
        advice: "自製滑順微酸乳酪夾心內餡，每顆乳酪歐包約包入 30g"
      },
      "RCP-15": {
        category: "starter",
        emoji: "🫐",
        subtitle: "加拿大冷凍藍莓果粒 300g × 細砂 100g × 鮮榨檸檬汁 10g",
        panSpec: "藍莓乳酪歐包專用自製果醬 (1份約 412g，濃縮後約 256g)",
        laborHours: 0.50,
        packCostUnit: 0.0,
        sellingPriceUnit: 0.0,
        advice: "自製低糖鮮果粒藍莓果醬，每顆藍莓歐包約包入 16g"
      },
      "RCP-16": {
        category: "euro",
        emoji: "🧄",
        subtitle: "哥摩高筋 × 法國老麵 & 湯種 × 法式帕瑪森奶油大蒜抹醬",
        panSpec: "軟法夾鏈袋裝 (基準 1 份做 9 顆)",
        laborHours: 1.33,
        packCostUnit: 1.85,
        sellingPriceUnit: 85.0,
        advice: "濃厚自製大蒜奶油抹醬搭配外脆內軟軟法，單批9顆毛利率優異，極具人氣鹹麵包潛力"
      },
      "RCP-17": {
        category: "euro",
        emoji: "🍵",
        subtitle: "靜岡純抹茶粉 × 萬丹紅豆粒餡 × 自製燈塔鮮奶油乳酪內餡",
        panSpec: "歐包夾鏈袋裝 (基準 1 份做 8 顆)",
        laborHours: 1.33,
        packCostUnit: 1.85,
        sellingPriceUnit: 95.0,
        advice: "⭐ 靜岡純抹茶粉苦甜搭配自製乳酪內餡與紅豆，高客單價且毛利穩健"
      },
      "RCP-18": {
        category: "euro",
        emoji: "🍫",
        subtitle: "Cacao Barry法國無糖可可粉 × 博列羅耐烤黑可可豆 × 乳酪內餡",
        panSpec: "歐包夾鏈袋裝 (基準 1 份做 8 顆)",
        laborHours: 1.33,
        packCostUnit: 1.85,
        sellingPriceUnit: 85.0,
        advice: "法國純可可粉結合爆漿耐烤可可豆與乳酪，風味濃郁甜鹹平衡"
      },
      "RCP-19": {
        category: "euro",
        emoji: "⚫",
        subtitle: "芝初高鈣無糖黑芝麻粉 × 富味鄉黑芝麻餡 × 特調乳酪內餡",
        panSpec: "歐包夾鏈袋裝 (基準 1 份做 8 顆)",
        laborHours: 1.33,
        packCostUnit: 1.85,
        sellingPriceUnit: 85.0,
        advice: "高鈣無糖黑芝麻粉結合脆芝麻粒與乳酪，兼具養生與香濃口感"
      },
      "RCP-20": {
        category: "euro",
        emoji: "🫐",
        subtitle: "哥摩高筋老麵湯種 × 自製加拿大藍莓果醬 × 特調乳酪內餡",
        panSpec: "歐包夾鏈袋裝 (基準 1 份做 8 顆)",
        laborHours: 1.33,
        packCostUnit: 1.85,
        sellingPriceUnit: 85.0,
        advice: "自製酸甜藍莓果醬搭配香濃乳酪內餡，清爽果香深受女性喜愛"
      }
    };

    // 12 Main Retail Products Order (Matches 成本與定價總覽 gid=2001)
    const RETAIL_RECIPE_IDS = [
      'RCP-01', 'RCP-02', 'RCP-03', 'RCP-04', 'RCP-05',
      'RCP-10', 'RCP-12', 'RCP-16', 'RCP-17', 'RCP-18', 'RCP-19', 'RCP-20'
    ];

    const HOURLY_WAGE = 196;    // 時薪 $196
    const HOURLY_UTILITY = 5;   // 電費 $5/hr

    // =========================================================================
    // 2. APPLICATION STATE
    // =========================================================================
    const PASSCODE = '0410';
    const DEFAULT_PRICING_SIM = {
      '生吐司': { batchYield: 8, price: 240 },
      '肉桂捲': { batchYield: 7, price: 150 },
      '檸檬磅蛋糕': { batchYield: 2, price: 520 },
      '瑪德蓮': { batchYield: 14, price: 70 },
      '費南雪': { batchYield: 6, price: 70 },
      '蜂蜜起司軟歐': { batchYield: 11, price: 85 },
      '明太子軟法': { batchYield: 9, price: 95 },
      '蒜香軟法': { batchYield: 9, price: 85 },
      '抹茶紅豆乳酪歐包': { batchYield: 8, price: 95 },
      '巧克力乳酪歐包': { batchYield: 8, price: 85 },
      '芝麻乳酪歐包': { batchYield: 8, price: 85 },
      '藍莓乳酪歐包': { batchYield: 8, price: 85 }
    };

    const DEFAULT_SCHEDULE_COUNTS = {
      'RCP-01': 8,
      'RCP-02': 7,
      'RCP-10': 11,
      'RCP-12': 9,
      'RCP-16': 9,
      'RCP-17': 8,
      'RCP-18': 0,
      'RCP-19': 0,
      'RCP-20': 0,
      'RCP-03': 2,
      'RCP-04': 14,
      'RCP-05': 6
    };

    const state = {
      activeTab: 'calculator',
      isUnlocked: false,            // 後三個分頁密碼鎖狀態 (密碼: 0410)
      pendingTab: null,             // 等待密碼解鎖後切換的分頁
      activeProductCategory: 'toast', // STEP 1 目前選中分類 ('toast' | 'euro' | 'dessert' | 'starter')
      selectedRecipeId: 'RCP-01',
      targetPieces: 8,              // 本次欲製作數量 (以整數進位)
      targetBatches: 1.0,           // 內部換算倍率 (targetPieces / baseYield)
      weightUnit: 'g',              // 'g' | 'kg' | 'oz'
      selectedStage: 'ALL',
      checkedItems: {},             // key: `${recipeId}_${idx}` -> boolean
      fixCinnamonLemon: false,      // 切換肉桂捲檸檬皮($15/顆) vs 檸檬角汁($0.54/g)
      kitchenMode: false,
      ingCategory: 'ALL',
      ingSupplier: 'ALL',
      ingSearch: '',
      customPackPrices: {},
      scheduleCounts: { ...DEFAULT_SCHEDULE_COUNTS },
      pricingSim: JSON.parse(JSON.stringify(DEFAULT_PRICING_SIM))
    };

    // =========================================================================
    // 3. HELPER & CALCULATION FUNCTIONS
    // =========================================================================
    function showToast(msg, icon = '✅') {
      const box = document.getElementById('toastBox');
      document.getElementById('toastIcon').textContent = icon;
      document.getElementById('toastText').textContent = msg;
      box.classList.remove('hidden');
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => box.classList.add('hidden'), 2600);
    }

    function copyTextToClipboard(text, successMsg) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => showToast(successMsg)).catch(() => fallbackCopy(text, successMsg));
      } else {
        fallbackCopy(text, successMsg);
      }
    }

    function fallbackCopy(text, successMsg) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showToast(successMsg); } catch (e) {}
      document.body.removeChild(ta);
    }

    function getIngredientUnitCost(ingName) {
      const ingObj = RAW_DATA.ingredients.find(i => i.name === ingName);
      if (!ingObj) return 0;
      const packPrice = (state.customPackPrices[ingName] !== undefined)
        ? state.customPackPrices[ingName]
        : ingObj.packPrice;
      return ingObj.packSize > 0 ? (packPrice / ingObj.packSize) : 0;
    }

    function getRecipeById(rcpId) {
      return RAW_DATA.recipes.find(r => r.id === rcpId);
    }

    function formatWeight(grams, originalUnit = 'g') {
      if (originalUnit !== 'g' && originalUnit !== 'ml') {
        const roundedOther = Math.abs(grams - Math.round(grams)) < 0.05
          ? Math.round(grams)
          : Number(grams.toFixed(1));
        return `${roundedOther} ${originalUnit}`;
      }
      if (state.weightUnit === 'kg') {
        return `${(grams / 1000).toFixed(3)} kg`;
      } else if (state.weightUnit === 'oz') {
        return `${(grams / 28.3495231).toFixed(2)} oz`;
      }
      const rounded = Math.abs(grams - Math.round(grams)) < 0.05
        ? Math.round(grams).toLocaleString('zh-TW')
        : Number(grams.toFixed(1)).toLocaleString('zh-TW');
      return `${rounded} ${originalUnit}`;
    }

    function formatCurrency(val, decimals = 1) {
      const sign = val < 0 ? '-' : '';
      const absVal = Math.abs(val);
      return `${sign}NT$${absVal.toLocaleString('zh-TW', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;
    }

    function getRecipeBaseFlourWeight(recipe) {
      let flourSum = 0;
      recipe.items.forEach(item => {
        if (item.ingredient.includes('麵粉') || item.ingredient.includes('小麥粉')) {
          flourSum += item.baseQty;
        }
      });
      if (flourSum === 0) {
        flourSum = recipe.items.reduce((acc, cur) => acc + cur.baseQty, 0);
      }
      return flourSum;
    }

    function calculateRecipeMetrics(recipeId, targetPieces) {
      const recipe = getRecipeById(recipeId);
      const meta = RECIPE_META[recipeId] || {
        category: 'euro', emoji: '🥐', subtitle: '', panSpec: '', laborHours: 1.0, packCostUnit: 0, sellingPriceUnit: 0, advice: ''
      };
      const scale = recipe.baseYield > 0 ? (targetPieces / recipe.baseYield) : 1;
      const baseFlour = getRecipeBaseFlourWeight(recipe);

      let totalWeightG = 0;
      let totalFoodCost = 0;

      const scaledItems = recipe.items.map((item, idx) => {
        const scaledQty = item.baseQty * scale;
        if (item.unit === 'g' || item.unit === 'ml') {
          totalWeightG += scaledQty;
        } else if (item.ingredient === '安佳起司片' && item.unit === '片') {
          totalWeightG += scaledQty * 11; // 1片約11g
        }
        let unitCost = getIngredientUnitCost(item.ingredient);
        if (!unitCost && item.unitCost) unitCost = item.unitCost;
        let displayIngName = item.ingredient;
        if (recipeId === 'RCP-02' && item.ingredient === '檸檬皮' && state.fixCinnamonLemon) {
          unitCost = getIngredientUnitCost('檸檬角');
          displayIngName = '檸檬角 (鮮榨檸檬汁校正)';
        }
        const itemCost = scaledQty * unitCost;
        totalFoodCost += itemCost;
        const bakersPct = baseFlour > 0 ? ((item.baseQty / baseFlour) * 100) : 0;

        return {
          idx: idx + 1,
          ingredient: displayIngName,
          rawIngredient: item.ingredient,
          baseQty: item.baseQty,
          scaledQty,
          unit: item.unit,
          unitCost,
          itemCost,
          stage: item.stage,
          bakersPct
        };
      });

      const packCostBatch = meta.packCostUnit * targetPieces;
      const laborHoursBatch = meta.laborHours * scale;
      const laborCostBatch = laborHoursBatch * HOURLY_WAGE;
      const utilityCostBatch = laborHoursBatch * HOURLY_UTILITY;
      const fullCostBatch = totalFoodCost + packCostBatch + laborCostBatch + utilityCostBatch;
      const revenueBatch = meta.sellingPriceUnit * targetPieces;
      const profitBatch = revenueBatch - fullCostBatch;
      const marginPct = revenueBatch > 0 ? (profitBatch / revenueBatch) * 100 : 0;

      const divisor = targetPieces > 0 ? targetPieces : 1;

      return {
        recipe,
        meta,
        targetPieces,
        scale,
        totalWeightG,
        totalFoodCost,
        packCostBatch,
        laborHoursBatch,
        laborCostBatch,
        utilityCostBatch,
        fullCostBatch,
        revenueBatch,
        profitBatch,
        marginPct,
        unitFoodCost: totalFoodCost / divisor,
        unitPackCost: meta.packCostUnit,
        unitLaborCost: laborCostBatch / divisor,
        unitUtilityCost: utilityCostBatch / divisor,
        unitFullCost: fullCostBatch / divisor,
        unitPrice: meta.sellingPriceUnit,
        unitProfit: profitBatch / divisor,
        scaledItems
      };
    }

    // =========================================================================
    // 4. RENDERING FUNCTIONS — TAB 1: 2-STEP SALES & PRODUCTION CALCULATOR
    // =========================================================================
    function renderCategoryTabs() {
      const bar = document.getElementById('step1CategoryBar');
      bar.innerHTML = '';

      PRODUCT_CATEGORIES.forEach(cat => {
        const isActive = state.activeProductCategory === cat.id;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `card-interactive text-left rounded-2xl p-4 sm:p-5 transition-all flex items-center justify-between gap-3 ${
          isActive
            ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-black font-extrabold shadow-xl shadow-amber-500/25 scale-[1.01]'
            : 'apple-glass-subtle text-white hover:border-white/25'
        }`;

        btn.innerHTML = `
          <div class="flex items-center gap-3 min-w-0">
            <span class="text-3xl sm:text-4xl shrink-0">${cat.emoji}</span>
            <div class="min-w-0">
              <div class="text-base sm:text-xl font-extrabold truncate">${cat.name}</div>
              <div class="text-xs sm:text-sm truncate ${isActive ? 'text-black/80 font-semibold' : 'text-zinc-400'}">${cat.desc}</div>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full text-xs sm:text-sm font-mono font-extrabold shrink-0 ${
            isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-amber-300'
          }">${cat.recipeIds.length}款</span>
        `;

        btn.addEventListener('click', () => {
          state.activeProductCategory = cat.id;
          // If current recipe is not in this category, automatically select the first recipe in this category
          if (!cat.recipeIds.includes(state.selectedRecipeId)) {
            const firstId = cat.recipeIds[0];
            const rcp = getRecipeById(firstId);
            if (rcp) {
              state.selectedRecipeId = rcp.id;
              state.targetPieces = Math.max(1, Math.ceil(rcp.baseYield));
              state.targetBatches = state.targetPieces / rcp.baseYield;
              state.selectedStage = 'ALL';
            }
          }
          syncInputsAndRenderCalculator();
        });

        bar.appendChild(btn);
      });
    }

    function renderRecipeSelectorCards() {
      const container = document.getElementById('recipeSelectorGrid');
      container.innerHTML = '';

      const currentCat = PRODUCT_CATEGORIES.find(c => c.id === state.activeProductCategory) || PRODUCT_CATEGORIES[0];
      const catRecipes = currentCat.recipeIds.map(id => getRecipeById(id)).filter(Boolean);

      catRecipes.forEach(rcp => {
        const meta = RECIPE_META[rcp.id] || { emoji: '🥐' };
        const isSelected = rcp.id === state.selectedRecipeId;
        const emoji = meta.displayEmoji || meta.emoji;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `card-interactive text-left rounded-3xl p-5 sm:p-6 transition-all flex flex-col justify-between min-h-[145px] ${
          isSelected
            ? 'bg-gradient-to-br from-amber-500/35 via-amber-500/15 to-transparent border-2 border-amber-400 shadow-xl shadow-amber-500/20 scale-[1.01]'
            : 'apple-glass-subtle hover:border-white/25'
        }`;

        btn.innerHTML = `
          <div class="flex items-center justify-between w-full">
            <span class="text-4xl sm:text-5xl">${emoji}</span>
            <span class="text-xs sm:text-sm font-mono px-3 py-1 rounded-full ${
              isSelected ? 'bg-amber-400 text-black font-extrabold' : 'bg-white/10 text-zinc-300'
            }">${rcp.id}</span>
          </div>
          <div class="mt-3.5">
            <div class="font-extrabold text-xl sm:text-2xl text-white tracking-tight">${rcp.name}</div>
            <div class="text-sm sm:text-base text-zinc-300 mt-1">
              1 份基準：<strong class="text-amber-300 font-mono font-extrabold">${rcp.baseYield} ${rcp.yieldUnit}</strong>
            </div>
          </div>
          <div class="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-zinc-300">
            <span>共 ${rcp.items.length} 項原料</span>
            <span class="text-amber-300 font-extrabold">${isSelected ? '● 目前選中' : '點擊選擇 →'}</span>
          </div>
        `;

        btn.addEventListener('click', () => {
          state.selectedRecipeId = rcp.id;
          state.targetPieces = Math.max(1, Math.ceil(rcp.baseYield));
          state.targetBatches = state.targetPieces / rcp.baseYield;
          state.selectedStage = 'ALL';
          syncInputsAndRenderCalculator();
        });

        container.appendChild(btn);
      });
    }

    function renderQuickPresets(recipe) {
      const container = document.getElementById('quickPresetsContainer');
      container.innerHTML = '';
      const base = recipe.baseYield;
      const unit = recipe.yieldUnit;

      const multipliers = base === 1 ? [1, 2, 3, 4, 5, 6] : [0.5, 1, 1.5, 2, 3, 4];
      const seenPieces = new Set();

      multipliers.forEach(mult => {
        const pieces = Math.max(1, Math.ceil(base * mult));
        if (seenPieces.has(pieces)) return;
        seenPieces.add(pieces);

        const isActive = state.targetPieces === pieces;
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = `px-4 py-2.5 rounded-2xl text-sm sm:text-base font-extrabold transition-all ${
          isActive
            ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/25 scale-105'
            : 'apple-glass-pill text-zinc-100 hover:text-white'
        }`;
        chip.textContent = pieces === base
          ? `${pieces} ${unit} (基準)`
          : `${pieces} ${unit}`;

        chip.addEventListener('click', () => {
          state.targetPieces = pieces;
          state.targetBatches = pieces / base;
          syncInputsAndRenderCalculator();
        });
        container.appendChild(chip);
      });
    }

    function renderCalculator() {
      const metrics = calculateRecipeMetrics(state.selectedRecipeId, state.targetPieces);
      const { recipe, meta, scale, scaledItems } = metrics;

      // Hero active summary removed per user request (streamlined top bar)

      const batchTargetLbl = document.getElementById('pricingBatchTargetLabel');
      if (batchTargetLbl) {
        batchTargetLbl.textContent = `目前核算目標：${recipe.name} × ${Math.round(state.targetPieces)} ${recipe.yieldUnit} (${Number(scale.toFixed(2))} 份)`;
      }

      // Update STEP 1 Selected Item Info
      document.getElementById('calcRecipeTitle').textContent = `${meta.displayEmoji || meta.emoji} ${recipe.name}`;
      document.getElementById('calcRecipeMeta').textContent =
        `試算表基準：1 份可做 ${recipe.baseYield} ${recipe.yieldUnit} • ${meta.panSpec}`;
      document.getElementById('calcScaleBadge').textContent = `基準 1 份 = ${recipe.baseYield} ${recipe.yieldUnit}`;
      document.getElementById('targetPiecesUnitLabel').textContent = `單位：${recipe.yieldUnit}`;
      document.getElementById('baseYieldHint').innerHTML =
        `試算表 1 份基準產量：<strong class="text-amber-300 font-extrabold">${recipe.baseYield} ${recipe.yieldUnit}</strong>（目前已自動按比例換算下方克數）`;

      // Update Slider
      const slider = document.getElementById('piecesSlider');
      const maxSlider = Math.max(Math.round(recipe.baseYield * 5), 20);
      slider.max = maxSlider;
      slider.step = 1;
      slider.value = Math.min(Math.round(state.targetPieces), maxSlider);
      document.getElementById('sliderValueText').textContent =
        `目前：${Math.round(state.targetPieces)} ${recipe.yieldUnit}`;

      renderQuickPresets(recipe);

      // Update STEP 2 Total Dough Weight Badge
      document.getElementById('totalDoughWeightBadge').textContent =
        `本批總重 ${formatWeight(metrics.totalWeightG, 'g')}`;

      // Stage Filter Pills (Enlarged Font)
      const stages = ['ALL', ...new Set(scaledItems.map(i => i.stage))];
      const stageBar = document.getElementById('stageFilterBar');
      stageBar.innerHTML = '';
      stages.forEach(st => {
        const active = state.selectedStage === st;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `px-4 py-2 rounded-full text-sm sm:text-base font-bold transition-all ${
          active
            ? 'bg-white text-black shadow-md'
            : 'bg-white/[0.08] text-zinc-200 hover:bg-white/15'
        }`;
        btn.textContent = st === 'ALL' ? `全部原料 (${scaledItems.length})` : st;
        btn.addEventListener('click', () => {
          state.selectedStage = st;
          renderCalculator();
        });
        stageBar.appendChild(btn);
      });

      // Weighing Progress
      let checkedCount = 0;
      scaledItems.forEach(item => {
        if (state.checkedItems[`${state.selectedRecipeId}_${item.idx}`]) checkedCount++;
      });
      const pct = scaledItems.length > 0 ? Math.round((checkedCount / scaledItems.length) * 100) : 0;
      document.getElementById('weighProgressText').textContent =
        `備料秤重進度：已完成 ${checkedCount} / ${scaledItems.length} 項原料`;
      document.getElementById('weighPercentText').textContent = `${pct}%`;
      document.getElementById('weighProgressBar').style.width = `${pct}%`;

      // Render Enlarged Real-Time Ingredient Cards in STEP 2
      const listContainer = document.getElementById('scaledIngredientsContainer');
      listContainer.innerHTML = '';

      const filteredItems = state.selectedStage === 'ALL'
        ? scaledItems
        : scaledItems.filter(i => i.stage === state.selectedStage);

      filteredItems.forEach(item => {
        const checkKey = `${state.selectedRecipeId}_${item.idx}`;
        const isChecked = !!state.checkedItems[checkKey];
        const isKeyItem = item.rawIngredient.includes('麵粉') ||
                          item.rawIngredient.includes('奶油') ||
                          SUB_RECIPE_NAME_TO_ID[item.rawIngredient];

        const row = document.createElement('div');
        row.className = `card-interactive rounded-3xl p-5 sm:p-6 border-2 transition-all cursor-pointer flex items-center justify-between gap-4 ${
          isChecked
            ? 'bg-emerald-950/30 border-emerald-500/45 opacity-65'
            : isKeyItem
              ? 'bg-white/[0.07] border-amber-400/45 shadow-lg shadow-amber-500/5'
              : 'apple-glass-subtle border-white/15'
        }`;

        row.innerHTML = `
          <div class="flex items-center gap-4 min-w-0">
            <div class="w-10 h-10 rounded-2xl flex items-center justify-center border-2 transition-all shrink-0 ${
              isChecked
                ? 'bg-emerald-500 border-emerald-400 text-black font-extrabold text-xl'
                : 'border-white/35 bg-black/50 text-transparent'
            }">✓</div>
            <div class="min-w-0">
              <div class="ing-title font-extrabold text-xl sm:text-3xl tracking-tight leading-snug ${isChecked ? 'line-through text-zinc-400' : 'text-white'}">
                ${item.ingredient}
              </div>
              <div class="text-xs sm:text-base text-zinc-300 mt-1.5 flex items-center gap-2.5 flex-wrap font-medium">
                <span class="px-3 py-0.5 rounded-full bg-white/10 text-amber-200 font-semibold">${item.stage}</span>
                <span class="text-zinc-400 font-mono">1份基準: ${item.baseQty} ${item.unit}</span>
              </div>
            </div>
          </div>

          <div class="text-right shrink-0">
            <div class="weight-num text-3xl sm:text-5xl font-extrabold font-mono tracking-tight ${
              isChecked ? 'text-emerald-400' : 'text-amber-400'
            }">
              ${formatWeight(item.scaledQty, item.unit)}
            </div>
          </div>
        `;

        row.addEventListener('click', () => {
          state.checkedItems[checkKey] = !state.checkedItems[checkKey];
          renderCalculator();
        });

        listContainer.appendChild(row);
      });

      // Render Self-Made Sub-Recipe Breakdown Box (if current recipe uses 波蘭種, 湯種, 法國老麵麵糰, 乳酪內餡, etc.)
      const poolishBox = document.getElementById('poolishHelperBox');
      const usedSubItems = scaledItems.filter(it => SUB_RECIPE_NAME_TO_ID[it.rawIngredient]);

      if (usedSubItems.length > 0) {
        poolishBox.classList.remove('hidden');
        document.getElementById('poolishTargetTotal').textContent =
          `本配方共使用 ${usedSubItems.length} 款自製酵種／抹醬內餡`;
        const pGrid = document.getElementById('poolishBreakdownGrid');
        pGrid.innerHTML = '';

        usedSubItems.forEach(subItem => {
          const subRcpId = SUB_RECIPE_NAME_TO_ID[subItem.rawIngredient];
          const subRcp = getRecipeById(subRcpId);
          if (!subRcp) return;
          // Calculate total base weight of sub-recipe
          let subTotalBaseWeight = 0;
          subRcp.items.forEach(si => {
            if (si.unit === 'g' || si.unit === 'ml') subTotalBaseWeight += si.baseQty;
            else if (si.ingredient === '安佳起司片') subTotalBaseWeight += si.baseQty * 11;
          });
          const subScale = subTotalBaseWeight > 0 ? (subItem.scaledQty / subTotalBaseWeight) : scale;

          const subRowsHtml = subRcp.items.map(si => `
            <div class="flex justify-between items-center py-1.5 border-b border-white/10 text-sm sm:text-base">
              <span class="text-zinc-200 font-semibold">${si.ingredient}</span>
              <span class="font-mono font-extrabold text-amber-300 text-base sm:text-lg">${formatWeight(si.baseQty * subScale, si.unit)}</span>
            </div>
          `).join('');

          const card = document.createElement('div');
          card.className = 'p-4 rounded-2xl bg-black/50 border border-sky-400/30 space-y-2.5';
          card.innerHTML = `
            <div class="flex items-center justify-between border-b border-sky-400/20 pb-2">
              <span class="font-extrabold text-base sm:text-lg text-white">${subItem.rawIngredient} (${subRcp.id})</span>
              <span class="font-mono font-extrabold text-base sm:text-lg text-sky-300">需 ${formatWeight(subItem.scaledQty, subItem.unit)}</span>
            </div>
            <div class="space-y-0.5">
              ${subRowsHtml}
            </div>
          `;
          pGrid.appendChild(card);
        });
      } else {
        poolishBox.classList.add('hidden');
      }

      // Also update Tab 4 Live Batch Cost & Profit Summary Card
      const lemonBox = document.getElementById('cinnamonLemonNotice');
      if (lemonBox) {
        if (state.selectedRecipeId === 'RCP-02') lemonBox.classList.remove('hidden');
        else lemonBox.classList.add('hidden');
      }

      document.getElementById('batchFoodCostVal').textContent = formatCurrency(metrics.totalFoodCost, 1);
      document.getElementById('unitFoodCostVal').textContent = `單${recipe.yieldUnit}食材：${formatCurrency(metrics.unitFoodCost, 2)}`;
      document.getElementById('batchTotalCostVal').textContent = formatCurrency(metrics.fullCostBatch, 1);
      document.getElementById('unitTotalCostVal').textContent = `單${recipe.yieldUnit}總成本：${formatCurrency(metrics.unitFullCost, 2)}`;
      document.getElementById('batchRevenueVal').textContent = formatCurrency(metrics.revenueBatch, 0);
      document.getElementById('unitPriceVal').textContent = `單${recipe.yieldUnit}售價：${formatCurrency(metrics.unitPrice, 0)}`;

      const profitEl = document.getElementById('batchProfitVal');
      const marginEl = document.getElementById('unitMarginVal');
      const isPositive = metrics.profitBatch >= 0;
      profitEl.textContent = `${isPositive ? '+' : ''}${formatCurrency(metrics.profitBatch, 1)}`;
      profitEl.className = `text-xl sm:text-2xl font-extrabold font-mono mt-1 ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`;
      marginEl.textContent = `預估毛利率：${metrics.marginPct.toFixed(1)}% (單${recipe.yieldUnit}毛利 ${formatCurrency(metrics.unitProfit, 1)})`;
      marginEl.className = `text-xs mt-1 ${isPositive ? 'text-emerald-300' : 'text-rose-300'}`;

      const costBody = document.getElementById('calcCostBreakdownBody');
      costBody.innerHTML = `
        <tr>
          <td class="py-2 font-sans text-zinc-200">食材原料成本</td>
          <td class="py-2 font-sans text-zinc-400">依配方克數動態換算</td>
          <td class="py-2 text-right text-white font-semibold">${formatCurrency(metrics.totalFoodCost, 1)}</td>
          <td class="py-2 text-right text-zinc-300">${formatCurrency(metrics.unitFoodCost, 2)}</td>
        </tr>
        <tr>
          <td class="py-2 font-sans text-zinc-200">包材耗材費用</td>
          <td class="py-2 font-sans text-zinc-400">$${meta.packCostUnit} 元 / ${recipe.yieldUnit}</td>
          <td class="py-2 text-right text-white">${formatCurrency(metrics.packCostBatch, 1)}</td>
          <td class="py-2 text-right text-zinc-300">${formatCurrency(metrics.unitPackCost, 2)}</td>
        </tr>
        <tr>
          <td class="py-2 font-sans text-zinc-200">製作人力工時</td>
          <td class="py-2 font-sans text-zinc-400">${metrics.laborHoursBatch.toFixed(2)} hr × $196</td>
          <td class="py-2 text-right text-white">${formatCurrency(metrics.laborCostBatch, 1)}</td>
          <td class="py-2 text-right text-zinc-300">${formatCurrency(metrics.unitLaborCost, 2)}</td>
        </tr>
        <tr>
          <td class="py-2 font-sans text-zinc-200">烤箱電費雜項</td>
          <td class="py-2 font-sans text-zinc-400">${metrics.laborHoursBatch.toFixed(2)} hr × $5/hr</td>
          <td class="py-2 text-right text-white">${formatCurrency(metrics.utilityCostBatch, 1)}</td>
          <td class="py-2 text-right text-zinc-300">${formatCurrency(metrics.unitUtilityCost, 2)}</td>
        </tr>
        <tr class="bg-white/[0.04] font-bold">
          <td class="py-2.5 font-sans text-amber-300">總生產成本 (可外帶)</td>
          <td class="py-2.5 font-sans text-zinc-400">食材+包材+人工+電費</td>
          <td class="py-2.5 text-right text-amber-400">${formatCurrency(metrics.fullCostBatch, 1)}</td>
          <td class="py-2.5 text-right text-amber-300">${formatCurrency(metrics.unitFullCost, 2)}</td>
        </tr>
      `;
    }

    function syncInputsAndRenderCalculator() {
      const rcp = getRecipeById(state.selectedRecipeId);
      const meta = RECIPE_META[state.selectedRecipeId];
      if (meta && meta.category) {
        state.activeProductCategory = meta.category;
      }
      state.targetPieces = Math.max(1, Math.ceil(state.targetPieces));
      state.targetBatches = state.targetPieces / rcp.baseYield;
      const pInput = document.getElementById('targetPiecesInput');
      if (pInput) pInput.value = Math.round(state.targetPieces);
      renderCategoryTabs();
      renderRecipeSelectorCards();
      renderCalculator();
    }

    // =========================================================================
    // 5. RENDERING FUNCTIONS — TAB 2: CLASSIC RECIPES & DAILY PLANNER
    // =========================================================================
    function renderDailySchedulePlanner() {
      const grid = document.getElementById('scheduleProductGrid');
      grid.innerHTML = '';

      const mainRecipes = RETAIL_RECIPE_IDS.map(id => getRecipeById(id)).filter(Boolean);
      let totalRev = 0;
      let totalFood = 0;
      let totalFull = 0;
      let totalHours = 0;
      const consolidatedMap = {};

      mainRecipes.forEach(rcp => {
        const count = state.scheduleCounts[rcp.id] || 0;
        const m = calculateRecipeMetrics(rcp.id, count);
        if (count > 0) {
          totalRev += m.revenueBatch;
          totalFood += m.totalFoodCost;
          totalFull += m.fullCostBatch;
          totalHours += m.laborHoursBatch;

          m.scaledItems.forEach(it => {
            const key = `${it.ingredient}__${it.unit}`;
            if (!consolidatedMap[key]) {
              consolidatedMap[key] = { name: it.ingredient, qty: 0, unit: it.unit, cost: 0 };
            }
            consolidatedMap[key].qty += it.scaledQty;
            consolidatedMap[key].cost += it.itemCost;
          });
        }

        const card = document.createElement('div');
        card.className = 'apple-glass-subtle rounded-2xl p-3.5 border border-white/10 flex flex-col justify-between gap-2.5';
        card.innerHTML = `
          <div class="flex items-center justify-between">
            <span class="font-bold text-sm text-white truncate">${m.meta.displayEmoji || m.meta.emoji} ${rcp.name}</span>
            <span class="text-[11px] font-mono text-amber-300 shrink-0">$${m.meta.sellingPriceUnit}/${rcp.yieldUnit}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <button type="button" data-sched-dec="${rcp.id}" class="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold">−</button>
            <div class="text-center">
              <input type="number" data-sched-input="${rcp.id}" value="${count}" min="0" step="1" class="w-16 text-center bg-transparent text-xl font-extrabold text-white font-mono focus:outline-none" />
              <div class="text-[10px] text-zinc-400">${rcp.yieldUnit} (${(count / rcp.baseYield).toFixed(2)}份)</div>
            </div>
            <button type="button" data-sched-inc="${rcp.id}" class="w-9 h-9 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold">+</button>
          </div>
          <div class="pt-2 border-t border-white/10 flex justify-between text-[11px] font-mono text-zinc-400">
            <span>食材: $${Math.round(m.totalFoodCost)}</span>
            <span class="text-sky-300">營收: $${Math.round(m.revenueBatch)}</span>
          </div>
        `;
        grid.appendChild(card);
      });

      grid.querySelectorAll('[data-sched-dec]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-sched-dec');
          state.scheduleCounts[id] = Math.max(0, (state.scheduleCounts[id] || 0) - 1);
          renderDailySchedulePlanner();
        });
      });
      grid.querySelectorAll('[data-sched-inc]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-sched-inc');
          state.scheduleCounts[id] = (state.scheduleCounts[id] || 0) + 1;
          renderDailySchedulePlanner();
        });
      });
      grid.querySelectorAll('[data-sched-input]').forEach(inp => {
        inp.addEventListener('change', () => {
          const id = inp.getAttribute('data-sched-input');
          state.scheduleCounts[id] = Math.max(0, Math.ceil(parseFloat(inp.value) || 0));
          renderDailySchedulePlanner();
        });
      });

      const netProfit = totalRev - totalFull;
      document.getElementById('schedTotalRev').textContent = formatCurrency(totalRev, 0);
      document.getElementById('schedFoodCost').textContent = formatCurrency(totalFood, 0);
      document.getElementById('schedFullCost').textContent = formatCurrency(totalFull, 0);
      const netEl = document.getElementById('schedNetProfit');
      netEl.textContent = `${netProfit >= 0 ? '+' : ''}${formatCurrency(netProfit, 0)}`;
      netEl.className = `text-lg font-extrabold font-mono ${netProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`;
      document.getElementById('schedTotalHours').innerHTML =
        `⏱️ 預估總投入工時：約 <strong class="text-white font-mono">${totalHours.toFixed(2)}</strong> 小時`;

      const listEl = document.getElementById('schedConsolidatedIngList');
      listEl.innerHTML = '';
      const sortedIngs = Object.values(consolidatedMap).sort((a, b) => b.qty - a.qty);
      document.getElementById('schedUniqueIngCount').textContent = `共 ${sortedIngs.length} 項原料`;

      if (sortedIngs.length === 0) {
        listEl.innerHTML = `<div class="col-span-full text-center py-8 text-xs text-zinc-500">請在上方設定至少一項今日要製作的烘焙品項數量</div>`;
      } else {
        sortedIngs.forEach(item => {
          const div = document.createElement('div');
          div.className = 'p-2.5 rounded-xl bg-black/45 border border-white/10 flex items-center justify-between gap-2';
          div.innerHTML = `
            <div class="truncate text-xs text-zinc-200 font-medium">${item.name}</div>
            <div class="text-right shrink-0 font-mono">
              <div class="text-xs font-bold text-amber-400">${formatWeight(item.qty, item.unit)}</div>
              <div class="text-[10px] text-zinc-500">$${Math.round(item.cost)}</div>
            </div>
          `;
          listEl.appendChild(div);
        });
      }

      window.__latestConsolidatedList = sortedIngs;
    }

    function renderClassicRecipesLibrary() {
      const container = document.getElementById('classicRecipesBentoGrid');
      container.innerHTML = '';

      RAW_DATA.recipes.forEach(rcp => {
        const m = calculateRecipeMetrics(rcp.id, rcp.baseYield);
        const emoji = m.meta.displayEmoji || m.meta.emoji;

        const card = document.createElement('div');
        card.className = 'apple-glass rounded-3xl p-5 flex flex-col justify-between space-y-4 border border-white/10';

        const topIngredientsHtml = m.scaledItems.slice(0, 6).map(it => `
          <div class="flex justify-between text-xs py-1 border-b border-white/5">
            <span class="text-zinc-300">${it.ingredient} <span class="text-[10px] text-zinc-500">(${it.stage})</span></span>
            <span class="font-mono font-semibold text-amber-300">${it.baseQty} ${it.unit}</span>
          </div>
        `).join('');

        card.innerHTML = `
          <div class="space-y-3">
            <div class="flex items-start justify-between gap-2">
              <div class="flex items-center gap-2.5">
                <span class="text-2xl">${emoji}</span>
                <div>
                  <div class="flex items-center gap-2">
                    <h3 class="text-lg font-bold text-white">${rcp.name}</h3>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-zinc-300">${rcp.id}</span>
                  </div>
                  <p class="text-[11px] text-zinc-400">${m.meta.subtitle}</p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-2 text-center">
              <div class="p-2.5 rounded-2xl bg-white/[0.04] border border-white/5">
                <div class="text-[10px] text-zinc-400">1 份基準產量</div>
                <div class="text-sm font-bold text-amber-400 font-mono mt-0.5">${rcp.baseYield} ${rcp.yieldUnit}</div>
              </div>
              <div class="p-2.5 rounded-2xl bg-white/[0.04] border border-white/5">
                <div class="text-[10px] text-zinc-400">1 份總重量</div>
                <div class="text-sm font-bold text-white font-mono mt-0.5">${Math.round(m.totalWeightG).toLocaleString()} g</div>
              </div>
              <div class="p-2.5 rounded-2xl bg-white/[0.04] border border-white/5">
                <div class="text-[10px] text-zinc-400">1 份食材成本</div>
                <div class="text-sm font-bold text-emerald-400 font-mono mt-0.5">NT$${Math.round(m.totalFoodCost)}</div>
              </div>
            </div>

            <div class="space-y-1">
              <div class="text-[11px] font-semibold text-zinc-400">核心配方克數預覽 (共 ${rcp.items.length} 項)：</div>
              ${topIngredientsHtml}
              ${rcp.items.length > 6 ? `<div class="text-[11px] text-zinc-500 pt-1">...及其他 ${rcp.items.length - 6} 項原料</div>` : ''}
            </div>
          </div>

          <button type="button" data-open-calc="${rcp.id}" class="w-full py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-xs shadow-md shadow-amber-500/15 hover:brightness-110 transition-all">
            ⚖️ 帶入首頁計算即時克數 →
          </button>
        `;

        container.appendChild(card);
      });

      container.querySelectorAll('[data-open-calc]').forEach(btn => {
        btn.addEventListener('click', () => {
          const rcpId = btn.getAttribute('data-open-calc');
          const rcp = getRecipeById(rcpId);
          state.selectedRecipeId = rcpId;
          state.targetPieces = Math.max(1, Math.ceil(rcp.baseYield));
          state.targetBatches = 1.0;
          state.selectedStage = 'ALL';
          switchTab('calculator');
          syncInputsAndRenderCalculator();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
    }

    // =========================================================================
    // 6. RENDERING FUNCTIONS — TAB 3: INGREDIENT DATABASE (89 ITEMS)
    // =========================================================================
    function initIngredientFilters() {
      const categories = ['ALL', ...new Set(RAW_DATA.ingredients.map(i => i.category))];
      const catBar = document.getElementById('ingCategoryBar');
      catBar.innerHTML = '';
      categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.type = 'button';
        const isActive = state.ingCategory === cat;
        btn.className = `px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          isActive ? 'bg-amber-400 text-black font-bold' : 'apple-glass-pill text-zinc-300'
        }`;
        const count = cat === 'ALL'
          ? RAW_DATA.ingredients.length
          : RAW_DATA.ingredients.filter(i => i.category === cat).length;
        btn.textContent = `${cat === 'ALL' ? '全部類別' : cat} (${count})`;
        btn.addEventListener('click', () => {
          state.ingCategory = cat;
          initIngredientFilters();
          renderIngredientTable();
        });
        catBar.appendChild(btn);
      });

      const suppliers = ['ALL', ...new Set(RAW_DATA.ingredients.map(i => i.supplier).filter(Boolean))];
      const supSelect = document.getElementById('ingSupplierFilter');
      if (supSelect.options.length <= 1) {
        suppliers.forEach(sup => {
          if (sup === 'ALL') return;
          const opt = document.createElement('option');
          opt.value = sup;
          opt.textContent = `供應商：${sup}`;
          supSelect.appendChild(opt);
        });
      }
    }

    function renderIngredientTable() {
      const tbody = document.getElementById('ingredientTableBody');
      tbody.innerHTML = '';

      const q = state.ingSearch.trim().toLowerCase();
      const filtered = RAW_DATA.ingredients.filter(ing => {
        if (state.ingCategory !== 'ALL' && ing.category !== state.ingCategory) return false;
        if (state.ingSupplier !== 'ALL' && ing.supplier !== state.ingSupplier) return false;
        if (q) {
          const hay = `${ing.name} ${ing.category} ${ing.supplier} ${ing.note}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });

      document.getElementById('ingFilteredCount').textContent =
        `顯示 ${filtered.length} / ${RAW_DATA.ingredients.length} 項原料`;

      filtered.forEach(ing => {
        const currentPrice = state.customPackPrices[ing.name] !== undefined
          ? state.customPackPrices[ing.name]
          : ing.packPrice;
        const unitCost = ing.packSize > 0 ? (currentPrice / ing.packSize) : 0;
        const isModified = state.customPackPrices[ing.name] !== undefined && state.customPackPrices[ing.name] !== ing.packPrice;

        const tr = document.createElement('tr');
        tr.className = 'hover:bg-white/[0.04] transition-colors';
        tr.innerHTML = `
          <td class="py-2.5 px-3.5">
            <span class="px-2.5 py-0.5 rounded-full text-[11px] bg-white/10 text-zinc-200">${ing.category}</span>
          </td>
          <td class="py-2.5 px-3.5 font-semibold text-white">${ing.name}</td>
          <td class="py-2.5 px-3.5 text-right font-mono text-zinc-300">${ing.packSize.toLocaleString()} ${ing.unit}</td>
          <td class="py-2.5 px-3.5 text-right font-mono">
            <div class="inline-flex items-center justify-end gap-1">
              <span class="text-zinc-400">NT$</span>
              <input type="number" data-ing-price="${ing.name}" value="${currentPrice}" min="0" step="1" class="w-20 text-right rounded-lg px-2 py-1 bg-black/50 border ${
                isModified ? 'border-amber-400 text-amber-300 font-bold' : 'border-white/15 text-white'
              } focus:outline-none focus:border-amber-400" />
            </div>
          </td>
          <td class="py-2.5 px-3.5 text-right font-mono text-amber-400 font-semibold">
            NT$${unitCost.toFixed(3)} / ${ing.unit}
          </td>
          <td class="py-2.5 px-3.5 text-zinc-300">${ing.supplier || '—'}</td>
          <td class="py-2.5 px-3.5 text-zinc-400">${ing.note || ''}</td>
        `;
        tbody.appendChild(tr);
      });

      tbody.querySelectorAll('[data-ing-price]').forEach(inp => {
        inp.addEventListener('change', () => {
          const name = inp.getAttribute('data-ing-price');
          const val = Math.max(0, parseFloat(inp.value) || 0);
          state.customPackPrices[name] = val;
          renderIngredientTable();
          renderCalculator();
          renderDailySchedulePlanner();
          renderPricingOverview();
          showToast(`已更新「${name}」採購價為 NT$${val}，全站成本已同步重算`);
        });
      });
    }

    // =========================================================================
    // 7. RENDERING FUNCTIONS — TAB 4: COST & PRICING OVERVIEW (12 RETAIL ITEMS)
    // =========================================================================
    let costChartInstance = null;
    let marginChartInstance = null;

    function renderPricingOverview() {
      const rows = [];

      RETAIL_RECIPE_IDS.forEach(id => {
        const rcp = getRecipeById(id);
        const meta = RECIPE_META[id];
        if (!rcp || !meta) return;
        const sim = state.pricingSim[rcp.name] || { batchYield: rcp.baseYield, price: meta.sellingPriceUnit };

        const baseMetrics = calculateRecipeMetrics(id, rcp.baseYield);
        const unitFood = baseMetrics.unitFoodCost;
        const unitPack = meta.packCostUnit;
        const unitLabor = (meta.laborHours * HOURLY_WAGE) / sim.batchYield;
        const unitUtility = (meta.laborHours * HOURLY_UTILITY) / sim.batchYield;
        const unitTotal = unitFood + unitPack + unitLabor + unitUtility;
        const unitPrice = sim.price;
        const unitProfit = unitPrice - unitTotal;
        const margin = unitPrice > 0 ? (unitProfit / unitPrice) * 100 : 0;

        rows.push({
          id,
          name: rcp.name,
          yieldUnit: rcp.yieldUnit,
          baseYield: rcp.baseYield,
          simYield: sim.batchYield,
          unitFood,
          unitPack,
          unitLabor,
          unitUtility,
          unitTotal,
          unitPrice,
          unitProfit,
          margin,
          advice: meta.advice
        });
      });

      const avgYield = rows.reduce((a, r) => a + r.simYield, 0) / rows.length;
      const avgFood = rows.reduce((a, r) => a + r.unitFood, 0) / rows.length;
      const avgPack = rows.reduce((a, r) => a + r.unitPack, 0) / rows.length;
      const avgLabor = rows.reduce((a, r) => a + r.unitLabor, 0) / rows.length;
      const avgUtility = rows.reduce((a, r) => a + r.unitUtility, 0) / rows.length;
      const avgTotal = rows.reduce((a, r) => a + r.unitTotal, 0) / rows.length;
      const avgPrice = rows.reduce((a, r) => a + r.unitPrice, 0) / rows.length;
      const avgProfit = rows.reduce((a, r) => a + r.unitProfit, 0) / rows.length;
      const avgMargin = rows.reduce((a, r) => a + r.margin, 0) / rows.length;

      const topRow = [...rows].sort((a, b) => b.margin - a.margin)[0];

      document.getElementById('kpiAvgMargin').textContent = `${avgMargin.toFixed(1)}%`;
      document.getElementById('kpiTopProduct').textContent = topRow.name;
      document.getElementById('kpiTopProductSub').textContent = `毛利率達 ${topRow.margin.toFixed(1)}%`;
      document.getElementById('kpiAvgProfit').textContent = `NT$${avgProfit.toFixed(2)}`;

      const tbody = document.getElementById('pricingOverviewTableBody');
      tbody.innerHTML = '';

      rows.forEach(r => {
        const isPos = r.unitProfit >= 0;
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-white/[0.04] transition-colors';
        tr.innerHTML = `
          <td class="py-3 px-3 font-sans font-bold text-white">${r.name}</td>
          <td class="py-3 px-3 text-center">
            <input type="number" data-sim-yield="${r.name}" value="${r.simYield}" min="1" step="1" class="w-16 text-center rounded-lg px-1.5 py-1 bg-black/50 border border-white/15 text-amber-300 font-bold focus:outline-none focus:border-amber-400" />
            <span class="text-[10px] font-sans text-zinc-400">${r.yieldUnit}</span>
          </td>
          <td class="py-3 px-3 text-right text-zinc-200">$${r.unitFood.toFixed(2)}</td>
          <td class="py-3 px-3 text-right text-zinc-300">$${r.unitPack.toFixed(2)}</td>
          <td class="py-3 px-3 text-right text-zinc-300">$${r.unitLabor.toFixed(2)}</td>
          <td class="py-3 px-3 text-right text-zinc-400">$${r.unitUtility.toFixed(2)}</td>
          <td class="py-3 px-3 text-right font-bold text-amber-400">$${r.unitTotal.toFixed(2)}</td>
          <td class="py-3 px-3 text-center">
            <input type="number" data-sim-price="${r.name}" value="${r.unitPrice}" min="10" step="5" class="w-20 text-center rounded-lg px-1.5 py-1 bg-black/50 border border-white/15 text-sky-300 font-bold focus:outline-none focus:border-sky-400" />
          </td>
          <td class="py-3 px-3 text-right font-bold ${isPos ? 'text-emerald-400' : 'text-rose-400'}">
            ${isPos ? '+' : ''}$${r.unitProfit.toFixed(2)}
          </td>
          <td class="py-3 px-3 text-right font-bold ${isPos ? 'text-emerald-400' : 'text-rose-400'}">
            ${r.margin.toFixed(1)}%
          </td>
          <td class="py-3 px-3 font-sans text-[11px] text-zinc-300">${r.advice}</td>
        `;
        tbody.appendChild(tr);
      });

      const avgTr = document.createElement('tr');
      avgTr.className = 'bg-white/[0.06] font-bold border-t border-white/20';
      avgTr.innerHTML = `
        <td class="py-3 px-3 font-sans text-amber-300">全店平均 (12款)</td>
        <td class="py-3 px-3 text-center text-zinc-200">${avgYield.toFixed(1)}</td>
        <td class="py-3 px-3 text-right text-zinc-200">$${avgFood.toFixed(2)}</td>
        <td class="py-3 px-3 text-right text-zinc-200">$${avgPack.toFixed(2)}</td>
        <td class="py-3 px-3 text-right text-zinc-200">$${avgLabor.toFixed(2)}</td>
        <td class="py-3 px-3 text-right text-zinc-200">$${avgUtility.toFixed(2)}</td>
        <td class="py-3 px-3 text-right text-amber-400">$${avgTotal.toFixed(2)}</td>
        <td class="py-3 px-3 text-center text-sky-400">$${avgPrice.toFixed(0)}</td>
        <td class="py-3 px-3 text-right text-emerald-400">+$${avgProfit.toFixed(2)}</td>
        <td class="py-3 px-3 text-right text-emerald-400">${avgMargin.toFixed(1)}%</td>
        <td class="py-3 px-3 font-sans text-[11px] text-zinc-300">整體菜單組合兼具高單價主力、人氣軟歐軟法與高毛利常溫小點</td>
      `;
      tbody.appendChild(avgTr);

      tbody.querySelectorAll('[data-sim-yield]').forEach(inp => {
        inp.addEventListener('change', () => {
          const name = inp.getAttribute('data-sim-yield');
          state.pricingSim[name].batchYield = Math.max(1, parseFloat(inp.value) || 1);
          renderPricingOverview();
        });
      });
      tbody.querySelectorAll('[data-sim-price]').forEach(inp => {
        inp.addEventListener('change', () => {
          const name = inp.getAttribute('data-sim-price');
          state.pricingSim[name].price = Math.max(1, parseFloat(inp.value) || 1);
          renderPricingOverview();
        });
      });

      updatePricingCharts(rows);
    }

    function updatePricingCharts(rows) {
      const labels = rows.map(r => r.name);
      const ctx1 = document.getElementById('costStructureChart');
      const ctx2 = document.getElementById('marginComparisonChart');
      if (!ctx1 || !ctx2 || typeof Chart === 'undefined') return;

      if (costChartInstance) costChartInstance.destroy();
      costChartInstance = new Chart(ctx1, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: '單件食材成本',
              data: rows.map(r => Number(r.unitFood.toFixed(1))),
              backgroundColor: 'rgba(245, 166, 35, 0.85)',
              stack: 'cost'
            },
            {
              label: '單件人工與電費',
              data: rows.map(r => Number((r.unitLabor + r.unitUtility).toFixed(1))),
              backgroundColor: 'rgba(10, 132, 255, 0.85)',
              stack: 'cost'
            },
            {
              label: '單件包材費用',
              data: rows.map(r => Number(r.unitPack.toFixed(1))),
              backgroundColor: 'rgba(191, 90, 242, 0.85)',
              stack: 'cost'
            },
            {
              label: '目前單件售價',
              data: rows.map(r => r.unitPrice),
              backgroundColor: 'rgba(48, 209, 88, 0.75)',
              stack: 'price'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: '#D4D4D8', font: { size: 11 } } }
          },
          scales: {
            x: { ticks: { color: '#D4D4D8', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.06)' } },
            y: { ticks: { color: '#A1A1AA' }, grid: { color: 'rgba(255,255,255,0.06)' } }
          }
        }
      });

      if (marginChartInstance) marginChartInstance.destroy();
      marginChartInstance = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: '產品毛利率 (%)',
              data: rows.map(r => Number(r.margin.toFixed(1))),
              backgroundColor: rows.map(r => r.margin >= 0 ? 'rgba(48, 209, 88, 0.82)' : 'rgba(255, 69, 58, 0.85)'),
              borderRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: '#D4D4D8', font: { size: 11 } } }
          },
          scales: {
            x: { ticks: { color: '#D4D4D8', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.06)' } },
            y: {
              ticks: {
                color: '#A1A1AA',
                callback: (val) => val + '%'
              },
              grid: { color: 'rgba(255,255,255,0.06)' }
            }
          }
        }
      });
    }

    // =========================================================================
    // 8. TAB NAVIGATION & EVENT LISTENERS
    // =========================================================================
    function openPasscodeModal(targetTab) {
      state.pendingTab = targetTab;
      const modal = document.getElementById('passcodeModal');
      const inp = document.getElementById('passcodeInput');
      const err = document.getElementById('passcodeErrorMsg');
      inp.value = '';
      err.textContent = '';
      modal.classList.remove('hidden');
      setTimeout(() => inp.focus(), 80);
    }

    function verifyPasscode() {
      const inp = document.getElementById('passcodeInput');
      const err = document.getElementById('passcodeErrorMsg');
      if (inp.value === PASSCODE) {
        state.isUnlocked = true;
        document.getElementById('passcodeModal').classList.add('hidden');
        document.querySelectorAll('.lock-indicator').forEach(el => {
          el.textContent = '🔓';
        });
        showToast('密碼驗證成功！已解鎖進階管理分頁', '🔓');
        if (state.pendingTab) {
          const target = state.pendingTab;
          state.pendingTab = null;
          switchTab(target);
        }
      } else {
        err.textContent = '密碼錯誤，請輸入正確密碼';
        inp.value = '';
        inp.focus();
      }
    }

    function switchTab(tabName) {
      if (tabName !== 'calculator' && !state.isUnlocked) {
        openPasscodeModal(tabName);
        return;
      }

      state.activeTab = tabName;
      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.add('hidden');
      });
      const activePanel = document.getElementById(`tab-${tabName}`);
      if (activePanel) activePanel.classList.remove('hidden');

      document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        const isMatch = btn.getAttribute('data-tab') === tabName;
        if (btn.closest('header')) {
          btn.className = `nav-tab-btn px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
            isMatch ? 'bg-white text-black shadow-sm font-semibold' : 'text-zinc-300 hover:text-white'
          }`;
        } else {
          btn.className = `nav-tab-btn w-full flex flex-col items-center justify-center py-1.5 rounded-2xl transition-all ${
            isMatch ? 'bg-white/15 text-amber-400 font-semibold' : 'text-zinc-400'
          }`;
        }
      });

      if (tabName === 'pricing') {
        setTimeout(() => renderPricingOverview(), 60);
      }
    }

    function bindEvents() {
      document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          switchTab(btn.getAttribute('data-tab'));
        });
      });

      const jumpBackBtn = document.getElementById('jumpBackToCalcBtn');
      if (jumpBackBtn) {
        jumpBackBtn.addEventListener('click', () => {
          switchTab('calculator');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      // Passcode Modal Events
      const passModal = document.getElementById('passcodeModal');
      const passInput = document.getElementById('passcodeInput');
      document.getElementById('closePasscodeModalBtn').addEventListener('click', () => {
        passModal.classList.add('hidden');
        state.pendingTab = null;
      });
      passModal.addEventListener('click', (e) => {
        if (e.target === passModal) {
          passModal.classList.add('hidden');
          state.pendingTab = null;
        }
      });
      document.querySelectorAll('.passcode-key').forEach(btn => {
        btn.addEventListener('click', () => {
          if (passInput.value.length < 4) {
            passInput.value += btn.getAttribute('data-key');
            document.getElementById('passcodeErrorMsg').textContent = '';
            if (passInput.value.length === 4) {
              verifyPasscode();
            }
          }
        });
      });
      document.getElementById('passcodeClearBtn').addEventListener('click', () => {
        passInput.value = '';
        document.getElementById('passcodeErrorMsg').textContent = '';
        passInput.focus();
      });
      document.getElementById('passcodeSubmitBtn').addEventListener('click', () => {
        verifyPasscode();
      });
      passInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          verifyPasscode();
        }
      });
      passInput.addEventListener('input', () => {
        if (passInput.value.length === 4) {
          verifyPasscode();
        }
      });

      // STEP 1 Target Pieces Integer Controls
      const pInput = document.getElementById('targetPiecesInput');
      const slider = document.getElementById('piecesSlider');

      pInput.addEventListener('input', () => {
        const rcp = getRecipeById(state.selectedRecipeId);
        const rawVal = parseFloat(pInput.value);
        if (!isNaN(rawVal) && rawVal > 0) {
          const intPieces = Math.max(1, Math.ceil(rawVal));
          state.targetPieces = intPieces;
          state.targetBatches = intPieces / rcp.baseYield;
          renderCalculator();
        }
      });

      pInput.addEventListener('change', () => {
        syncInputsAndRenderCalculator();
      });

      slider.addEventListener('input', () => {
        const rcp = getRecipeById(state.selectedRecipeId);
        const intPieces = Math.max(1, Math.ceil(parseFloat(slider.value) || 1));
        state.targetPieces = intPieces;
        state.targetBatches = intPieces / rcp.baseYield;
        syncInputsAndRenderCalculator();
      });

      document.getElementById('decPiecesBtn').addEventListener('click', () => {
        const rcp = getRecipeById(state.selectedRecipeId);
        state.targetPieces = Math.max(1, Math.ceil(state.targetPieces) - 1);
        state.targetBatches = state.targetPieces / rcp.baseYield;
        syncInputsAndRenderCalculator();
      });

      document.getElementById('incPiecesBtn').addEventListener('click', () => {
        const rcp = getRecipeById(state.selectedRecipeId);
        state.targetPieces = Math.max(1, Math.ceil(state.targetPieces) + 1);
        state.targetBatches = state.targetPieces / rcp.baseYield;
        syncInputsAndRenderCalculator();
      });

      // Weight Unit Toggle (g / kg / oz)
      document.querySelectorAll('.unit-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          state.weightUnit = btn.getAttribute('data-unit');
          document.querySelectorAll('.unit-toggle-btn').forEach(b => {
            b.className = `unit-toggle-btn px-3 py-1 rounded-xl ${
              b.getAttribute('data-unit') === state.weightUnit
                ? 'bg-amber-500 text-black font-extrabold'
                : 'text-zinc-300 hover:text-white font-semibold'
            }`;
          });
          renderCalculator();
          renderDailySchedulePlanner();
        });
      });

      // Cinnamon Roll Lemon Toggle
      document.getElementById('fixCinnamonLemonToggle').addEventListener('change', (e) => {
        state.fixCinnamonLemon = e.target.checked;
        renderCalculator();
        renderDailySchedulePlanner();
        renderPricingOverview();
        showToast(state.fixCinnamonLemon
          ? '已切換為鮮榨檸檬汁 ($0.54/g) 計算肉桂捲成本'
          : '已還原為試算表檸檬皮 ($15/顆) 原始設定');
      });

      // Reset Checklist
      document.getElementById('resetChecklistBtn').addEventListener('click', () => {
        const rcp = getRecipeById(state.selectedRecipeId);
        rcp.items.forEach((_, idx) => {
          delete state.checkedItems[`${state.selectedRecipeId}_${idx + 1}`];
        });
        renderCalculator();
        showToast('已重置本配方秤重打勾紀錄');
      });

      // Copy Scaled Recipe to Clipboard
      document.getElementById('copyScaledRecipeBtn').addEventListener('click', () => {
        const m = calculateRecipeMetrics(state.selectedRecipeId, state.targetPieces);
        const lines = [
          `🥐 【3CatsMomBakery 即時配方克數單 (${APP_VERSION})】`,
          `品項：${m.recipe.name} (${m.recipe.id})`,
          `本次欲製作數量：${Math.round(m.targetPieces)} ${m.recipe.yieldUnit}`,
          `本批麵團總重：${Math.round(m.totalWeightG)} g`,
          `----------------------------------------`
        ];
        m.scaledItems.forEach(it => {
          lines.push(`• [${it.stage}] ${it.ingredient}：${formatWeight(it.scaledQty, it.unit)}`);
        });
        copyTextToClipboard(lines.join('\n'), '已複製本批即時原料克數清單！');
      });

      // Add Current Scaled Recipe to Daily Schedule
      document.getElementById('addToScheduleBtn').addEventListener('click', () => {
        if (!RETAIL_RECIPE_IDS.includes(state.selectedRecipeId)) {
          showToast('自製酵種與抹醬已自動包含於各麵包配方製程中', 'ℹ️');
          return;
        }
        state.scheduleCounts[state.selectedRecipeId] = Math.round(state.targetPieces);
        renderDailySchedulePlanner();
        showToast(`已將「${getRecipeById(state.selectedRecipeId).name} × ${Math.round(state.targetPieces)}」加入今日排程總表！`);
      });

      // Daily Schedule Buttons
      document.getElementById('resetScheduleDefaultBtn').addEventListener('click', () => {
        state.scheduleCounts = { ...DEFAULT_SCHEDULE_COUNTS };
        renderDailySchedulePlanner();
        showToast('已還原預設排程數量');
      });
      document.getElementById('clearScheduleBtn').addEventListener('click', () => {
        Object.keys(state.scheduleCounts).forEach(k => state.scheduleCounts[k] = 0);
        renderDailySchedulePlanner();
        showToast('已清空今日排程數量');
      });
      document.getElementById('copyConsolidatedListBtn').addEventListener('click', () => {
        const list = window.__latestConsolidatedList || [];
        if (!list.length) {
          showToast('目前排程無原料可複製', '⚠️');
          return;
        }
        const lines = ['🧺 【Jasmine\'s Bakery 今日總備料採購清單】'];
        list.forEach(it => {
          lines.push(`• ${it.name}：${formatWeight(it.qty, it.unit)} (預估 $${Math.round(it.cost)})`);
        });
        copyTextToClipboard(lines.join('\n'), '已複製跨品項合併總備料清單！');
      });

      // Ingredient Search & Filter
      document.getElementById('ingSearchInput').addEventListener('input', (e) => {
        state.ingSearch = e.target.value;
        renderIngredientTable();
      });
      document.getElementById('ingSupplierFilter').addEventListener('change', (e) => {
        state.ingSupplier = e.target.value;
        renderIngredientTable();
      });
      document.getElementById('resetIngPricesBtn').addEventListener('click', () => {
        state.customPackPrices = {};
        renderIngredientTable();
        renderCalculator();
        renderDailySchedulePlanner();
        renderPricingOverview();
        showToast('已還原全部 89 項原料為試算表預設採購價');
      });

      // Reset Pricing Simulator
      document.getElementById('resetPricingSimBtn').addEventListener('click', () => {
        state.pricingSim = JSON.parse(JSON.stringify(DEFAULT_PRICING_SIM));
        renderPricingOverview();
        showToast('已還原試算表預設單批產量與目前售價');
      });

      // Viewport Preview Switcher
      const wrapper = document.getElementById('appFrameWrapper');
      const vpBtns = [
        { id: 'vpAutoBtn', cls: '' },
        { id: 'vpIphoneBtn', cls: 'viewport-iphone' },
        { id: 'vpIpadBtn', cls: 'viewport-ipad' }
      ];
      vpBtns.forEach(item => {
        const btn = document.getElementById(item.id);
        if (!btn) return;
        btn.addEventListener('click', () => {
          wrapper.classList.remove('viewport-iphone', 'viewport-ipad');
          if (item.cls) wrapper.classList.add(item.cls);
          vpBtns.forEach(b => {
            const el = document.getElementById(b.id);
            el.className = b.id === item.id
              ? 'px-2.5 py-1 rounded-full bg-white/15 text-white font-medium transition-all'
              : 'px-2.5 py-1 rounded-full text-zinc-400 hover:text-white transition-all';
          });
        });
      });

      // Kitchen Big-Font Mode
      document.getElementById('kitchenModeBtn').addEventListener('click', () => {
        state.kitchenMode = !state.kitchenMode;
        document.body.classList.toggle('kitchen-mode', state.kitchenMode);
        document.getElementById('kitchenModeBtn').classList.toggle('bg-amber-500/30', state.kitchenMode);
        document.getElementById('kitchenModeBtn').classList.toggle('border-amber-400', state.kitchenMode);
        showToast(state.kitchenMode ? '已開啟「超大字體模式」' : '已切換為標準大字模式', '🧑‍🍳');
      });

      // GitHub Modal & Export
      const ghModal = document.getElementById('githubModal');
      document.getElementById('openGithubModalBtn').addEventListener('click', () => {
        ghModal.classList.remove('hidden');
      });
      document.getElementById('closeGithubModalBtn').addEventListener('click', () => {
        ghModal.classList.add('hidden');
      });
      ghModal.addEventListener('click', (e) => {
        if (e.target === ghModal) ghModal.classList.add('hidden');
      });

      document.getElementById('copyGitCmdBtn').addEventListener('click', () => {
        const cmd = document.getElementById('gitCmdBlock').innerText;
        copyTextToClipboard(cmd, '已複製 GitHub 部署指令！');
      });

      document.getElementById('downloadIndexHtmlBtn').addEventListener('click', () => {
        const htmlContent = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
        const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'index.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('已下載 index.html (v2.2.0)，可直接上傳至 GitHub Repository！');
      });

      document.getElementById('exportCsvReportBtn').addEventListener('click', () => {
        const m = calculateRecipeMetrics(state.selectedRecipeId, state.targetPieces);
        const rows = [
          ['版本', '品項', '製作數量', '原料名稱', '製作環節', '1份基準用量', '本次目標克數', '單位']
        ];
        m.scaledItems.forEach(it => {
          rows.push([
            APP_VERSION,
            m.recipe.name,
            m.targetPieces,
            it.ingredient,
            it.stage,
            it.baseQty,
            it.scaledQty.toFixed(1),
            it.unit
          ]);
        });
        const csvContent = '\uFEFF' + rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${m.recipe.name}_${m.targetPieces}${m.recipe.yieldUnit}_即時克數表_${APP_VERSION}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('已匯出 CSV 配方克數報表！');
      });
    }

    // Initialize App on Load
    window.addEventListener('DOMContentLoaded', () => {
      bindEvents();
      syncInputsAndRenderCalculator();
      renderDailySchedulePlanner();
      renderClassicRecipesLibrary();
      initIngredientFilters();
      renderIngredientTable();
      renderPricingOverview();
    });
