// 3CatsMomBakery | 2-Step Sales & Dynamic Recipe Scaling Engine (89 Ingredients & 20 Recipes)
// =========================================================================
    // 3CatsMomBakery — Version v2.3.0
    // =========================================================================
    const APP_VERSION = "v2.3.0";
    const RAW_DATA = {"ingredients": [{"id": "ING-01", "category": "包裝耗材", "name": "生吐司包裝袋與提袋", "packSize": 1.0, "unit": "入", "packPrice": 20.0, "unitCost": 20.0, "supplier": "包材行", "note": "吐司專用袋/單入"}, {"id": "ING-02", "category": "包裝耗材", "name": "肉桂捲外帶紙盒", "packSize": 1.0, "unit": "入", "packPrice": 5.0, "unitCost": 5.0, "supplier": "包材行", "note": "肉桂捲專用盒/單入"}, {"id": "ING-03", "category": "包裝耗材", "name": "厚片土司夾鏈袋", "packSize": 100.0, "unit": "入", "packPrice": 185.0, "unitCost": 1.85, "supplier": "包材行", "note": "吐司專用袋/單入"}, {"id": "ING-04", "category": "包裝耗材", "name": "費南雪封口袋與包裝", "packSize": 1.0, "unit": "入", "packPrice": 8.33, "unitCost": 8.33, "supplier": "包材行", "note": "封口透明袋與外盒"}, {"id": "ING-05", "category": "包裝耗材", "name": "瑪德蓮自黏袋與小盒", "packSize": 1.0, "unit": "入", "packPrice": 3.57, "unitCost": 3.57, "supplier": "包材行", "note": "單顆密封袋/小提盒"}, {"id": "ING-06", "category": "包裝耗材", "name": "磅蛋糕長型禮盒", "packSize": 1.0, "unit": "入", "packPrice": 6.25, "unitCost": 6.25, "supplier": "包材行", "note": "磅蛋糕硬盒包裝/單入"}, {"id": "ING-07", "category": "奶油乳脂", "name": "安佳鮮奶油乳酪", "packSize": 1000.0, "unit": "g", "packPrice": 269.0, "unitCost": 0.269, "supplier": "裕軒", "note": "奶油乳酪抹醬"}, {"id": "ING-08", "category": "奶油乳脂", "name": "法國愛樂薇動物性鮮奶油", "packSize": 1000.0, "unit": "ml", "packPrice": 270.0, "unitCost": 0.27, "supplier": "裕軒", "note": "烘焙鮮奶油"}, {"id": "ING-09", "category": "奶油乳脂", "name": "法國愛樂薇無鹽奶油", "packSize": 4000.0, "unit": "g", "packPrice": 2100.0, "unitCost": 0.525, "supplier": "蝦皮", "note": "頂級發酵奶油(費南雪)"}, {"id": "ING-10", "category": "奶油乳脂", "name": "法國鐵塔牌動物性鮮奶油", "packSize": 1000.0, "unit": "ml", "packPrice": 270.0, "unitCost": 0.27, "supplier": "裕軒", "note": "生吐司動物性鮮奶油"}, {"id": "ING-11", "category": "奶油乳脂", "name": "法國Le Gall燈塔鮮奶油乳酪", "packSize": 1000.0, "unit": "g", "packPrice": 330.0, "unitCost": 0.33, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-12", "category": "奶油乳脂", "name": "威士寶無鹽奶油", "packSize": 454.0, "unit": "g", "packPrice": 140.0, "unitCost": 0.3083700441, "supplier": "烘焙樂", "note": "平價無鹽奶油"}, {"id": "ING-13", "category": "奶油乳脂", "name": "燈塔牌無鹽奶油", "packSize": 500.0, "unit": "g", "packPrice": 230.0, "unitCost": 0.46, "supplier": "裕軒", "note": "經典發酵無鹽奶油"}, {"id": "ING-14", "category": "乳品蛋水", "name": "光泉鮮奶", "packSize": 936.0, "unit": "ml", "packPrice": 88.0, "unitCost": 0.09401709402, "supplier": "全聯/大全聯", "note": "高乳脂優質鮮乳"}, {"id": "ING-15", "category": "乳品蛋水", "name": "冷水", "packSize": 1000.0, "unit": "ml", "packPrice": 0.0, "unitCost": 0.0, "supplier": "自來水過濾", "note": "過濾水"}, {"id": "ING-16", "category": "乳品蛋水", "name": "高大鮮奶", "packSize": 936.0, "unit": "ml", "packPrice": 105.0, "unitCost": 0.1121794872, "supplier": "全聯/大全聯", "note": "高乳脂優質鮮乳"}, {"id": "ING-17", "category": "乳品蛋水", "name": "蛋", "packSize": 675.0, "unit": "g", "packPrice": 160.0, "unitCost": 0.237037037, "supplier": "全聯/大全聯", "note": "新鮮雞蛋(一顆約50~60g)"}, {"id": "ING-18", "category": "乳品蛋水", "name": "瑞穗鮮奶", "packSize": 930.0, "unit": "ml", "packPrice": 91.0, "unitCost": 0.09784946237, "supplier": "超市", "note": "鮮乳"}, {"id": "ING-19", "category": "乳品蛋水", "name": "豐力富高鈣營養奶粉", "packSize": 2200.0, "unit": "g", "packPrice": 515.0, "unitCost": 0.2340909091, "supplier": "COUPANG", "note": ""}, {"id": "ING-20", "category": "乳品蛋水", "name": "鷹牌煉乳", "packSize": 450.0, "unit": "g", "packPrice": 144.0, "unitCost": 0.32, "supplier": "COUPANG", "note": "生吐司保濕提味"}, {"id": "ING-21", "category": "起司", "name": "安佳起司片", "packSize": 84.0, "unit": "片", "packPrice": 392.0, "unitCost": 4.666666667, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-22", "category": "起司", "name": "乳酪內餡", "packSize": 255.0, "unit": "g", "packPrice": 73.28645455, "unitCost": 0.287397861, "supplier": "自製", "note": "燈塔鮮奶油乳酪+細砂+無鹽奶油+岩鹽+玉米澱粉+奶粉自製內餡"}, {"id": "ING-23", "category": "起司", "name": "軟歐蜂蜜起司醬", "packSize": 261.5, "unit": "g", "packPrice": 96.12, "unitCost": 0.3675717017, "supplier": "自製", "note": "愛樂薇奶油+鮮奶油+起司片+蜂蜜自製夾餡"}, {"id": "ING-24", "category": "起司", "name": "義大利Zanetti帕瑪森起司粉", "packSize": 1000.0, "unit": "g", "packPrice": 740.0, "unitCost": 0.74, "supplier": "蝦皮", "note": ""}, {"id": "ING-25", "category": "發酵種麵", "name": "旺來興速發酵母", "packSize": 100.0, "unit": "g", "packPrice": 30.0, "unitCost": 0.3, "supplier": "旺來興", "note": "一般速發酵母"}, {"id": "ING-26", "category": "發酵種麵", "name": "法國老麵麵糰", "packSize": 1729.0, "unit": "g", "packPrice": 106.358, "unitCost": 0.06151417004, "supplier": "自製", "note": "常溫發酵60分+冷藏16小時自製老麵"}, {"id": "ING-27", "category": "發酵種麵", "name": "波蘭種", "packSize": 520.0, "unit": "g", "packPrice": 24.0, "unitCost": 0.04615384615, "supplier": "自製", "note": "哥摩高筋+水+酵母自製酵種"}, {"id": "ING-28", "category": "發酵種麵", "name": "湯種", "packSize": 2120.0, "unit": "g", "packPrice": 117.4, "unitCost": 0.05537735849, "supplier": "自製", "note": "高筋粉+糖+鹽+沸水燙麵冷藏16小時"}, {"id": "ING-29", "category": "發酵種麵", "name": "燕子牌低糖酵母(紅色包裝)", "packSize": 500.0, "unit": "g", "packPrice": 179.0, "unitCost": 0.358, "supplier": "蝦皮", "note": "低糖法式麵包酵母"}, {"id": "ING-30", "category": "發酵種麵", "name": "燕子牌高糖酵母(金色包裝)", "packSize": 500.0, "unit": "g", "packPrice": 149.0, "unitCost": 0.298, "supplier": "蝦皮", "note": "甜麵包專用耐高糖酵母"}, {"id": "ING-31", "category": "蔬果堅果", "name": "免剝蒜仁", "packSize": 200.0, "unit": "g", "packPrice": 149.0, "unitCost": 0.745, "supplier": "全聯/大全聯", "note": ""}, {"id": "ING-32", "category": "蔬果堅果", "name": "冷凍藍莓(加拿大)", "packSize": 350.0, "unit": "g", "packPrice": 168.0, "unitCost": 0.48, "supplier": "全聯/大全聯", "note": ""}, {"id": "ING-33", "category": "蔬果堅果", "name": "法國Cocao Barry防潮可可粉", "packSize": 1000.0, "unit": "g", "packPrice": 710.0, "unitCost": 0.71, "supplier": "蝦皮(柚子)", "note": "頂級純可可粉"}, {"id": "ING-34", "category": "蔬果堅果", "name": "芝初高鈣無糖黑芝麻粉", "packSize": 380.0, "unit": "g", "packPrice": 289.0, "unitCost": 0.7605263158, "supplier": "蝦皮(芝初原廠)", "note": ""}, {"id": "ING-35", "category": "蔬果堅果", "name": "芝初黑芝麻粒", "packSize": 105.0, "unit": "g", "packPrice": 89.0, "unitCost": 0.8476190476, "supplier": "蝦皮(芝初原廠)", "note": ""}, {"id": "ING-36", "category": "蔬果堅果", "name": "美國生核桃", "packSize": 450.0, "unit": "g", "packPrice": 230.0, "unitCost": 0.5111111111, "supplier": "蝦皮(柚子)", "note": "堅果烘烤提香"}, {"id": "ING-37", "category": "蔬果堅果", "name": "美國藍鑽杏仁粉", "packSize": 600.0, "unit": "g", "packPrice": 295.0, "unitCost": 0.4916666667, "supplier": "蝦皮(柚子)", "note": "馬卡龍、費南雪、瑪德蓮"}, {"id": "ING-38", "category": "蔬果堅果", "name": "烤不爆原味麻糬", "packSize": 1000.0, "unit": "g", "packPrice": 172.0, "unitCost": 0.172, "supplier": "蝦皮(柚子)", "note": "麻糬內餡夾心"}, {"id": "ING-39", "category": "蔬果堅果", "name": "博列羅耐烤黑可可豆", "packSize": 1000.0, "unit": "g", "packPrice": 260.0, "unitCost": 0.26, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-40", "category": "蔬果堅果", "name": "富味鄉黑芝麻餡", "packSize": 1000.0, "unit": "g", "packPrice": 339.0, "unitCost": 0.339, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-41", "category": "蔬果堅果", "name": "萬丹紅豆粒餡", "packSize": 1000.0, "unit": "g", "packPrice": 245.0, "unitCost": 0.245, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-42", "category": "蔬果堅果", "name": "舞間茶心(伯爵紅茶粉)", "packSize": 300.0, "unit": "g", "packPrice": 800.0, "unitCost": 2.666666667, "supplier": "蝦皮(舞間茶心)", "note": "伯爵茶點心"}, {"id": "ING-43", "category": "蔬果堅果", "name": "舞間茶心(焙茶粉)", "packSize": 300.0, "unit": "g", "packPrice": 1000.0, "unitCost": 3.333333333, "supplier": "蝦皮(舞間茶心)", "note": "日式焙茶點心"}, {"id": "ING-44", "category": "蔬果堅果", "name": "檸檬皮", "packSize": 1.0, "unit": "顆", "packPrice": 15.0, "unitCost": 15.0, "supplier": "全聯/大全聯", "note": "新鮮無毒檸檬(刨皮)"}, {"id": "ING-45", "category": "蔬果堅果", "name": "檸檬角", "packSize": 250.0, "unit": "g", "packPrice": 135.0, "unitCost": 0.54, "supplier": "全聯/大全聯", "note": "鮮榨檸檬汁"}, {"id": "ING-46", "category": "蔬果堅果", "name": "藍莓果醬", "packSize": 412.0, "unit": "g", "packPrice": 153.56, "unitCost": 0.3727184466, "supplier": "自製", "note": "冷凍藍莓+岩鹽+細砂+鮮榨檸檬汁自製果醬"}, {"id": "ING-47", "category": "蔬果堅果", "name": "蘋果", "packSize": 867.0, "unit": "g", "packPrice": 130.0, "unitCost": 0.1499423299, "supplier": "全聯/大全聯", "note": "富士蘋果(肉桂捲內餡)"}, {"id": "ING-48", "category": "蔬果堅果", "name": "Cacao Barry法國無糖巧克力粉", "packSize": 1000.0, "unit": "g", "packPrice": 745.0, "unitCost": 0.745, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-49", "category": "調味香料", "name": "小香草莢醬", "packSize": 130.0, "unit": "g", "packPrice": 230.0, "unitCost": 1.769230769, "supplier": "烘焙樂", "note": "頂級天然香草籽醬"}, {"id": "ING-50", "category": "調味香料", "name": "小磨坊玉桂粉", "packSize": 1000.0, "unit": "g", "packPrice": 320.0, "unitCost": 0.32, "supplier": "十代", "note": "玉桂粉"}, {"id": "ING-51", "category": "調味香料", "name": "小磨坊肉桂粉", "packSize": 600.0, "unit": "g", "packPrice": 185.0, "unitCost": 0.3083333333, "supplier": "烘焙樂", "note": "常用肉桂粉"}, {"id": "ING-52", "category": "調味香料", "name": "小磨坊豆蔻粉", "packSize": 1000.0, "unit": "g", "packPrice": 320.0, "unitCost": 0.32, "supplier": "烘焙行", "note": "提味香料"}, {"id": "ING-53", "category": "調味香料", "name": "小磨坊洋香菜葉", "packSize": 85.0, "unit": "g", "packPrice": 165.0, "unitCost": 1.941176471, "supplier": "COUPANG", "note": ""}, {"id": "ING-54", "category": "調味香料", "name": "日本雙葉明太子醬", "packSize": 500.0, "unit": "g", "packPrice": 595.0, "unitCost": 1.19, "supplier": "蝦皮(萬福水產)", "note": ""}, {"id": "ING-55", "category": "調味香料", "name": "日本GABAN頂級肉桂粉", "packSize": 100.0, "unit": "g", "packPrice": 180.0, "unitCost": 1.8, "supplier": "蝦皮(橙品)", "note": "肉桂捲主風味"}, {"id": "ING-56", "category": "調味香料", "name": "日本KEWPIE美乃滋", "packSize": 450.0, "unit": "g", "packPrice": 135.0, "unitCost": 0.3, "supplier": "COUPANG", "note": ""}, {"id": "ING-57", "category": "調味香料", "name": "台榮玉米澱粉", "packSize": 500.0, "unit": "g", "packPrice": 25.0, "unitCost": 0.05, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-58", "category": "調味香料", "name": "老船長蘭姆酒", "packSize": 350.0, "unit": "ml", "packPrice": 150.0, "unitCost": 0.4285714286, "supplier": "裕軒", "note": "甜點調味蘭姆酒"}, {"id": "ING-59", "category": "調味香料", "name": "法國細海鹽", "packSize": 750.0, "unit": "g", "packPrice": 140.0, "unitCost": 0.1866666667, "supplier": "烘焙樂", "note": "法國海鹽"}, {"id": "ING-60", "category": "調味香料", "name": "桂冠沙拉醬", "packSize": 20.0, "unit": "g", "packPrice": 29.0, "unitCost": 1.45, "supplier": "全聯/大全聯", "note": ""}, {"id": "ING-61", "category": "調味香料", "name": "軟法奶油大蒜醬", "packSize": 216.0, "unit": "g", "packPrice": 124.0580392, "unitCost": 0.5743427741, "supplier": "自製", "note": "愛樂薇奶油+蒜仁+蜂蜜+岩鹽+帕瑪森起司粉+洋香菜葉+鮮奶油自製抹醬"}, {"id": "ING-62", "category": "調味香料", "name": "軟法明太子醬", "packSize": 372.0, "unit": "g", "packPrice": 306.044186, "unitCost": 0.8226994249, "supplier": "自製", "note": "愛樂薇奶油+雙葉明太子+美乃滋+沙拉醬+檸檬+山葵特調抹醬"}, {"id": "ING-63", "category": "調味香料", "name": "喜馬拉雅岩鹽", "packSize": 400.0, "unit": "g", "packPrice": 72.0, "unitCost": 0.18, "supplier": "超市", "note": "純淨粉紅岩鹽"}, {"id": "ING-64", "category": "調味香料", "name": "喜馬拉雅玫瑰鹽", "packSize": 1000.0, "unit": "g", "packPrice": 200.0, "unitCost": 0.2, "supplier": "烘焙樂", "note": "細粒玫瑰鹽"}, {"id": "ING-65", "category": "調味香料", "name": "德國香草醬", "packSize": 130.0, "unit": "g", "packPrice": 250.0, "unitCost": 1.923076923, "supplier": "蝦皮", "note": "天然香草醬"}, {"id": "ING-66", "category": "調味香料", "name": "靜岡抹茶粉", "packSize": 100.0, "unit": "g", "packPrice": 265.0, "unitCost": 2.65, "supplier": "蝦皮(柚子)", "note": ""}, {"id": "ING-67", "category": "調味香料", "name": "龍眼蜂蜜", "packSize": 1200.0, "unit": "g", "packPrice": 400.0, "unitCost": 0.3333333333, "supplier": "蜂農直營", "note": "瑪德蓮、費南雪提味"}, {"id": "ING-68", "category": "調味香料", "name": "Bacardi蘭姆酒", "packSize": 1000.0, "unit": "ml", "packPrice": 450.0, "unitCost": 0.45, "supplier": "Costco", "note": "百加得白蘭姆酒"}, {"id": "ING-69", "category": "調味香料", "name": "HOUSE好侍山葵", "packSize": 43.0, "unit": "g", "packPrice": 60.0, "unitCost": 1.395348837, "supplier": "COUPANG", "note": ""}, {"id": "ING-70", "category": "糖類", "name": "小島製糖-糖粉", "packSize": 1000.0, "unit": "g", "packPrice": 95.0, "unitCost": 0.095, "supplier": "蝦皮", "note": "糖霜、磅蛋糕"}, {"id": "ING-71", "category": "糖類", "name": "日本三井上白糖", "packSize": 1000.0, "unit": "g", "packPrice": 93.0, "unitCost": 0.093, "supplier": "蝦皮(柚子)", "note": "瑪德蓮、費南雪常用"}, {"id": "ING-72", "category": "糖類", "name": "日本三井白雙糖(粗顆粒)", "packSize": 1000.0, "unit": "g", "packPrice": 135.0, "unitCost": 0.135, "supplier": "蝦皮", "note": "粗顆粒結晶糖"}, {"id": "ING-73", "category": "糖類", "name": "日本三溫糖", "packSize": 1000.0, "unit": "g", "packPrice": 90.0, "unitCost": 0.09, "supplier": "蝦皮", "note": "風味溫潤三溫糖"}, {"id": "ING-74", "category": "糖類", "name": "台糖細砂", "packSize": 1000.0, "unit": "g", "packPrice": 38.0, "unitCost": 0.038, "supplier": "全聯/大全聯", "note": "基礎細砂糖"}, {"id": "ING-75", "category": "糖類", "name": "東洋上白糖", "packSize": 1000.0, "unit": "g", "packPrice": 96.0, "unitCost": 0.096, "supplier": "裕軒", "note": "日式上白糖"}, {"id": "ING-76", "category": "糖類", "name": "品元珍珠糖", "packSize": 250.0, "unit": "g", "packPrice": 70.0, "unitCost": 0.28, "supplier": "烘焙行", "note": "鬆餅、表面裝飾"}, {"id": "ING-77", "category": "糖類", "name": "純手工黑糖", "packSize": 900.0, "unit": "g", "packPrice": 86.0, "unitCost": 0.09555555556, "supplier": "雜糧行", "note": "肉桂捲黑糖餡"}, {"id": "ING-78", "category": "糖類", "name": "義大利EUROMALT麥芽精", "packSize": 100.0, "unit": "g", "packPrice": 87.0, "unitCost": 0.87, "supplier": "蝦皮", "note": "歐式麵包專用"}, {"id": "ING-79", "category": "膨脹輔料", "name": "無鋁泡打粉", "packSize": 80.0, "unit": "g", "packPrice": 95.0, "unitCost": 1.1875, "supplier": "蝦皮(橙品)", "note": "蛋糕膨脹輔料"}, {"id": "ING-80", "category": "麵粉", "name": "日本霓虹高筋麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 75.0, "unitCost": 0.075, "supplier": "蝦皮", "note": "麵包吐司"}, {"id": "ING-81", "category": "麵粉", "name": "水手牌小麥粉", "packSize": 1000.0, "unit": "g", "packPrice": 80.0, "unitCost": 0.08, "supplier": "蝦皮", "note": "麥香麵包"}, {"id": "ING-82", "category": "麵粉", "name": "水手牌低筋麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 85.0, "unitCost": 0.085, "supplier": "蝦皮", "note": "蛋糕、肉桂捲小麥粉"}, {"id": "ING-83", "category": "麵粉", "name": "水手牌高筋麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 85.0, "unitCost": 0.085, "supplier": "蝦皮", "note": "吐司麵包"}, {"id": "ING-84", "category": "麵粉", "name": "米森有機小麥粉", "packSize": 500.0, "unit": "g", "packPrice": 105.0, "unitCost": 0.21, "supplier": "全聯", "note": "全麥麵包、肉桂捲"}, {"id": "ING-85", "category": "麵粉", "name": "鳥越製粉-哥摩(高筋)", "packSize": 1000.0, "unit": "g", "packPrice": 110.0, "unitCost": 0.11, "supplier": "裕軒", "note": "生吐司專用高筋粉"}, {"id": "ING-86", "category": "麵粉", "name": "統一麥典麵包專用粉", "packSize": 1000.0, "unit": "g", "packPrice": 105.0, "unitCost": 0.105, "supplier": "蝦皮", "note": "麵包吐司"}, {"id": "ING-87", "category": "麵粉", "name": "鐵塔法印法國麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 98.0, "unitCost": 0.098, "supplier": "蝦皮", "note": "歐式麵包專用麵粉"}, {"id": "ING-88", "category": "麵粉", "name": "鑽石牌低筋麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 100.0, "unitCost": 0.1, "supplier": "裕軒", "note": "瑪德蓮、費南雪"}, {"id": "ING-89", "category": "麵粉", "name": "T55法國麵粉", "packSize": 1500.0, "unit": "g", "packPrice": 95.0, "unitCost": 0.06333333333, "supplier": "旺來興", "note": "法國麵包、肉桂捲配方"}], "recipes": [{"id": "RCP-01", "name": "生吐司", "baseYield": 8.0, "yieldUnit": "條", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 1893.0, "unit": "g", "unitCost": 0.11, "subtotal": 208.23, "stage": "主麵團高筋粉"}, {"ingredient": "法國鐵塔牌動物性鮮奶油", "baseQty": 307.0, "unit": "g", "unitCost": 0.27, "subtotal": 82.89, "stage": "主麵團乳脂"}, {"ingredient": "燈塔牌無鹽奶油", "baseQty": 152.0, "unit": "g", "unitCost": 0.46, "subtotal": 69.92, "stage": "主麵團後放奶油"}, {"ingredient": "鷹牌煉乳", "baseQty": 189.0, "unit": "g", "unitCost": 0.32, "subtotal": 60.48, "stage": "主麵團保濕增香"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 29.0, "unit": "g", "unitCost": 0.298, "subtotal": 8.642, "stage": "發酵種"}, {"ingredient": "高大鮮奶", "baseQty": 373.0, "unit": "g", "unitCost": 0.1121794872, "subtotal": 41.84294872, "stage": "主麵團液體"}, {"ingredient": "台糖細砂", "baseQty": 267.0, "unit": "g", "unitCost": 0.038, "subtotal": 10.146, "stage": "主麵團糖量"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 29.0, "unit": "g", "unitCost": 0.18, "subtotal": 5.22, "stage": "調味強化麵筋"}, {"ingredient": "波蘭種", "baseQty": 520.0, "unit": "g", "unitCost": 0.04615384615, "subtotal": 24.0, "stage": "隔夜低溫酵種"}, {"ingredient": "冷水", "baseQty": 667.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}]}, {"id": "RCP-02", "name": "肉桂捲", "baseYield": 7.0, "yieldUnit": "顆", "items": [{"ingredient": "T55法國麵粉", "baseQty": 330.0, "unit": "g", "unitCost": 0.06333333333, "subtotal": 20.9, "stage": "肉桂捲主麵團"}, {"ingredient": "水手牌低筋麵粉", "baseQty": 20.0, "unit": "g", "unitCost": 0.085, "subtotal": 1.7, "stage": "肉桂捲主麵團"}, {"ingredient": "高大鮮奶", "baseQty": 230.0, "unit": "g", "unitCost": 0.1121794872, "subtotal": 25.80128205, "stage": "肉桂捲主麵團"}, {"ingredient": "台糖細砂", "baseQty": 50.0, "unit": "g", "unitCost": 0.038, "subtotal": 1.9, "stage": "肉桂捲主麵團"}, {"ingredient": "燈塔牌無鹽奶油", "baseQty": 40.0, "unit": "g", "unitCost": 0.46, "subtotal": 18.4, "stage": "肉桂捲主麵團"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 4.5, "unit": "g", "unitCost": 0.18, "subtotal": 0.81, "stage": "肉桂捲主麵團"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 4.0, "unit": "g", "unitCost": 0.298, "subtotal": 1.192, "stage": "肉桂捲主麵團"}, {"ingredient": "燈塔牌無鹽奶油", "baseQty": 15.0, "unit": "g", "unitCost": 0.46, "subtotal": 6.9, "stage": "肉桂黑糖抹醬"}, {"ingredient": "日本GABAN頂級肉桂粉", "baseQty": 10.0, "unit": "g", "unitCost": 1.8, "subtotal": 18.0, "stage": "肉桂黑糖抹醬"}, {"ingredient": "純手工黑糖", "baseQty": 80.0, "unit": "g", "unitCost": 0.09555555556, "subtotal": 7.644444444, "stage": "肉桂黑糖抹醬"}, {"ingredient": "小磨坊豆蔻粉", "baseQty": 2.0, "unit": "g", "unitCost": 0.32, "subtotal": 0.64, "stage": "肉桂黑糖抹醬"}, {"ingredient": "冷水", "baseQty": 10.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "肉桂黑糖抹醬"}, {"ingredient": "蘋果", "baseQty": 650.0, "unit": "g", "unitCost": 0.1499423299, "subtotal": 97.46251442, "stage": "焦糖蘋果餡"}, {"ingredient": "台糖細砂", "baseQty": 104.0, "unit": "g", "unitCost": 0.038, "subtotal": 3.952, "stage": "焦糖蘋果餡"}, {"ingredient": "龍眼蜂蜜", "baseQty": 39.0, "unit": "g", "unitCost": 0.3333333333, "subtotal": 13.0, "stage": "焦糖蘋果餡"}, {"ingredient": "檸檬皮", "baseQty": 33.0, "unit": "g", "unitCost": 15.0, "subtotal": 495.0, "stage": "焦糖蘋果餡"}, {"ingredient": "燈塔牌無鹽奶油", "baseQty": 39.0, "unit": "g", "unitCost": 0.46, "subtotal": 17.94, "stage": "焦糖蘋果餡"}, {"ingredient": "老船長蘭姆酒", "baseQty": 13.0, "unit": "g", "unitCost": 0.4285714286, "subtotal": 5.571428571, "stage": "焦糖蘋果餡"}, {"ingredient": "日本GABAN頂級肉桂粉", "baseQty": 1.5, "unit": "g", "unitCost": 1.8, "subtotal": 2.7, "stage": "焦糖蘋果餡"}]}, {"id": "RCP-03", "name": "檸檬磅蛋糕", "baseYield": 2.0, "yieldUnit": "條", "items": [{"ingredient": "燈塔牌無鹽奶油", "baseQty": 300.0, "unit": "g", "unitCost": 0.46, "subtotal": 138.0, "stage": "蛋糕本體"}, {"ingredient": "小島製糖-糖粉", "baseQty": 260.0, "unit": "g", "unitCost": 0.095, "subtotal": 24.7, "stage": "蛋糕本體"}, {"ingredient": "水手牌低筋麵粉", "baseQty": 300.0, "unit": "g", "unitCost": 0.085, "subtotal": 25.5, "stage": "蛋糕本體"}, {"ingredient": "無鋁泡打粉", "baseQty": 6.0, "unit": "g", "unitCost": 1.1875, "subtotal": 7.125, "stage": "蛋糕本體"}, {"ingredient": "蛋", "baseQty": 260.0, "unit": "g", "unitCost": 0.237037037, "subtotal": 61.62962963, "stage": "蛋糕本體"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 3.0, "unit": "g", "unitCost": 0.18, "subtotal": 0.54, "stage": "蛋糕本體"}, {"ingredient": "台糖細砂", "baseQty": 4.0, "unit": "g", "unitCost": 0.038, "subtotal": 0.152, "stage": "檸檬皮糖漬"}, {"ingredient": "檸檬皮", "baseQty": 2.0, "unit": "顆", "unitCost": 15.0, "subtotal": 30.0, "stage": "檸檬皮糖漬"}, {"ingredient": "檸檬角", "baseQty": 60.0, "unit": "g", "unitCost": 0.54, "subtotal": 32.4, "stage": "蛋糕本體鮮檸汁"}, {"ingredient": "台糖細砂", "baseQty": 30.0, "unit": "g", "unitCost": 0.038, "subtotal": 1.14, "stage": "出爐刷面檸檬糖水"}, {"ingredient": "老船長蘭姆酒", "baseQty": 40.0, "unit": "g", "unitCost": 0.4285714286, "subtotal": 17.14285714, "stage": "出爐刷面檸檬糖水"}, {"ingredient": "檸檬角", "baseQty": 50.0, "unit": "g", "unitCost": 0.54, "subtotal": 27.0, "stage": "出爐刷面檸檬糖水"}, {"ingredient": "檸檬角", "baseQty": 40.0, "unit": "g", "unitCost": 0.54, "subtotal": 21.6, "stage": "頂層檸檬糖霜"}, {"ingredient": "小島製糖-糖粉", "baseQty": 200.0, "unit": "g", "unitCost": 0.095, "subtotal": 19.0, "stage": "頂層檸檬糖霜"}, {"ingredient": "冷水", "baseQty": 50.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "頂層檸檬糖霜調勻"}]}, {"id": "RCP-04", "name": "瑪德蓮", "baseYield": 14.0, "yieldUnit": "顆", "items": [{"ingredient": "燈塔牌無鹽奶油", "baseQty": 62.0, "unit": "g", "unitCost": 0.46, "subtotal": 28.52, "stage": "融化奶油"}, {"ingredient": "瑞穗鮮奶", "baseQty": 33.0, "unit": "g", "unitCost": 0.09784946237, "subtotal": 3.229032258, "stage": "麵糊液體"}, {"ingredient": "鑽石牌低筋麵粉", "baseQty": 53.0, "unit": "g", "unitCost": 0.1, "subtotal": 5.3, "stage": "粉類過篩"}, {"ingredient": "無鋁泡打粉", "baseQty": 0.4, "unit": "g", "unitCost": 1.1875, "subtotal": 0.475, "stage": "粉類過篩"}, {"ingredient": "蛋", "baseQty": 300.0, "unit": "g", "unitCost": 0.237037037, "subtotal": 71.11111111, "stage": "全蛋液"}, {"ingredient": "龍眼蜂蜜", "baseQty": 16.0, "unit": "g", "unitCost": 0.3333333333, "subtotal": 5.333333333, "stage": "風味保濕"}, {"ingredient": "日本三井上白糖", "baseQty": 130.0, "unit": "g", "unitCost": 0.093, "subtotal": 12.09, "stage": "主甜度"}, {"ingredient": "美國藍鑽杏仁粉", "baseQty": 80.0, "unit": "g", "unitCost": 0.4916666667, "subtotal": 39.33333333, "stage": "堅果香氣"}, {"ingredient": "法國Cocao Barry防潮可可粉", "baseQty": 17.0, "unit": "g", "unitCost": 0.71, "subtotal": 12.07, "stage": "巧克力風味調色"}]}, {"id": "RCP-05", "name": "費南雪", "baseYield": 6.0, "yieldUnit": "顆", "items": [{"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 50.0, "unit": "g", "unitCost": 0.525, "subtotal": 26.25, "stage": "焦化榛果奶油(Noisette)"}, {"ingredient": "鑽石牌低筋麵粉", "baseQty": 20.0, "unit": "g", "unitCost": 0.1, "subtotal": 2.0, "stage": "粉類過篩"}, {"ingredient": "無鋁泡打粉", "baseQty": 0.5, "unit": "g", "unitCost": 1.1875, "subtotal": 0.59375, "stage": "粉類過篩"}, {"ingredient": "蛋", "baseQty": 100.0, "unit": "g", "unitCost": 0.237037037, "subtotal": 23.7037037, "stage": "純蛋白液"}, {"ingredient": "龍眼蜂蜜", "baseQty": 6.0, "unit": "g", "unitCost": 0.3333333333, "subtotal": 2.0, "stage": "提香保濕"}, {"ingredient": "日本三井上白糖", "baseQty": 63.0, "unit": "g", "unitCost": 0.093, "subtotal": 5.859, "stage": "主甜度"}, {"ingredient": "美國藍鑽杏仁粉", "baseQty": 30.0, "unit": "g", "unitCost": 0.4916666667, "subtotal": 14.75, "stage": "杏仁香氣主料"}, {"ingredient": "美國生核桃", "baseQty": 10.0, "unit": "g", "unitCost": 0.5111111111, "subtotal": 5.111111111, "stage": "表面裝飾烘烤碎核桃"}]}, {"id": "RCP-06", "name": "波蘭種", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 260.0, "unit": "g", "unitCost": 0.11, "subtotal": 28.6, "stage": "酵種高筋麵粉"}, {"ingredient": "冷水", "baseQty": 260.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "酵種水分"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 1.0, "unit": "g", "unitCost": 0.298, "subtotal": 0.298, "stage": "起始發酵低溫冷藏發酵"}]}, {"id": "RCP-07", "name": "法國老麵麵糰", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "鐵塔法印法國麵粉", "baseQty": 1000.0, "unit": "g", "unitCost": 0.098, "subtotal": 98.0, "stage": "法國老麵主粉"}, {"ingredient": "冷水", "baseQty": 700.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "攪拌水分"}, {"ingredient": "義大利EUROMALT麥芽精", "baseQty": 3.0, "unit": "g", "unitCost": 0.87, "subtotal": 2.61, "stage": "麥芽精助發酵"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 20.0, "unit": "g", "unitCost": 0.18, "subtotal": 3.6, "stage": "強化筋性調味"}, {"ingredient": "燕子牌低糖酵母(紅色包裝)", "baseQty": 6.0, "unit": "g", "unitCost": 0.358, "subtotal": 2.148, "stage": "低糖耐冷藏酵母"}]}, {"id": "RCP-08", "name": "湯種", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 1000.0, "unit": "g", "unitCost": 0.11, "subtotal": 110.0, "stage": "湯種燙麵粉"}, {"ingredient": "冷水", "baseQty": 1000.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "燙麵水分"}, {"ingredient": "台糖細砂", "baseQty": 100.0, "unit": "g", "unitCost": 0.038, "subtotal": 3.8, "stage": "湯種保濕"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 20.0, "unit": "g", "unitCost": 0.18, "subtotal": 3.6, "stage": "強化麵筋風味"}]}, {"id": "RCP-09", "name": "軟歐蜂蜜起司醬", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 70.0, "unit": "g", "unitCost": 0.525, "subtotal": 36.75, "stage": "奶油基底融化"}, {"ingredient": "台糖細砂", "baseQty": 35.0, "unit": "g", "unitCost": 0.038, "subtotal": 1.33, "stage": "起司抹醬甜度"}, {"ingredient": "安佳起司片", "baseQty": 6.0, "unit": "片", "unitCost": 4.666666667, "subtotal": 28.0, "stage": "起司香氣增稠(6片/66g)"}, {"ingredient": "法國愛樂薇動物性鮮奶油", "baseQty": 65.0, "unit": "g", "unitCost": 0.27, "subtotal": 17.55, "stage": "鮮奶油乳香滑順"}, {"ingredient": "龍眼蜂蜜", "baseQty": 15.0, "unit": "g", "unitCost": 0.3333333333, "subtotal": 5.0, "stage": "龍眼花蜜香氣"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 0.5, "unit": "g", "unitCost": 0.18, "subtotal": 0.09, "stage": "解甜提鮮"}, {"ingredient": "義大利Zanetti帕瑪森起司粉", "baseQty": 10.0, "unit": "g", "unitCost": 0.74, "subtotal": 7.4, "stage": "濃郁起司風味"}]}, {"id": "RCP-10", "name": "蜂蜜起司軟歐", "baseYield": 11.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 500.0, "unit": "g", "unitCost": 0.11, "subtotal": 55.0, "stage": "主麵團高筋粉"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.5, "unit": "g", "unitCost": 0.18, "subtotal": 1.35, "stage": "強化筋性調味"}, {"ingredient": "東洋上白糖", "baseQty": 80.0, "unit": "g", "unitCost": 0.096, "subtotal": 7.68, "stage": "日式上白糖甜度保濕"}, {"ingredient": "光泉鮮奶", "baseQty": 160.0, "unit": "g", "unitCost": 0.09401709402, "subtotal": 15.04273504, "stage": "鮮乳水分與乳香"}, {"ingredient": "冷水", "baseQty": 160.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 7.0, "unit": "g", "unitCost": 0.298, "subtotal": 2.086, "stage": "耐高糖速發酵母"}, {"ingredient": "法國老麵麵糰", "baseQty": 100.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 6.151417004, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 100.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 5.537735849, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 25.0, "unit": "g", "unitCost": 0.525, "subtotal": 13.125, "stage": "後放發酵奶油"}, {"ingredient": "安佳起司片", "baseQty": 11.0, "unit": "片", "unitCost": 4.666666667, "subtotal": 51.33333333, "stage": "包入起司夾餡(11片/121g)"}, {"ingredient": "軟歐蜂蜜起司醬", "baseQty": 165.0, "unit": "g", "unitCost": 0.3675717017, "subtotal": 60.64933078, "stage": "特調蜂蜜起司淋醬夾餡"}]}, {"id": "RCP-11", "name": "軟法明太子醬", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 60.0, "unit": "g", "unitCost": 0.525, "subtotal": 31.5, "stage": "融化奶油基底"}, {"ingredient": "桂冠沙拉醬", "baseQty": 20.0, "unit": "g", "unitCost": 1.45, "subtotal": 29.0, "stage": "傳統沙拉醬增添甜滑"}, {"ingredient": "日本KEWPIE美乃滋", "baseQty": 110.0, "unit": "g", "unitCost": 0.3, "subtotal": 33.0, "stage": "日式美乃滋微酸風味"}, {"ingredient": "日本雙葉明太子醬", "baseQty": 160.0, "unit": "g", "unitCost": 1.19, "subtotal": 190.4, "stage": "主角明太子鮮甜微辣"}, {"ingredient": "檸檬角", "baseQty": 10.0, "unit": "g", "unitCost": 0.54, "subtotal": 5.4, "stage": "新鮮檸檬汁解膩提味"}, {"ingredient": "HOUSE好侍山葵", "baseQty": 12.0, "unit": "g", "unitCost": 1.395348837, "subtotal": 16.74418605, "stage": "山葵微嗆層次香氣"}]}, {"id": "RCP-12", "name": "明太子軟法", "baseYield": 9.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 500.0, "unit": "g", "unitCost": 0.11, "subtotal": 55.0, "stage": "主麵團高筋粉"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.5, "unit": "g", "unitCost": 0.18, "subtotal": 1.35, "stage": "強化筋性與鹹香"}, {"ingredient": "東洋上白糖", "baseQty": 80.0, "unit": "g", "unitCost": 0.096, "subtotal": 7.68, "stage": "日式上白糖甜度保濕"}, {"ingredient": "光泉鮮奶", "baseQty": 160.0, "unit": "g", "unitCost": 0.09401709402, "subtotal": 15.04273504, "stage": "鮮乳水分與乳香"}, {"ingredient": "冷水", "baseQty": 160.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 7.0, "unit": "g", "unitCost": 0.298, "subtotal": 2.086, "stage": "耐高糖速發酵母"}, {"ingredient": "法國老麵麵糰", "baseQty": 100.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 6.151417004, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 100.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 5.537735849, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 25.0, "unit": "g", "unitCost": 0.525, "subtotal": 13.125, "stage": "後放發酵奶油"}, {"ingredient": "軟法明太子醬", "baseQty": 180.0, "unit": "g", "unitCost": 0.8226994249, "subtotal": 148.0858965, "stage": "劃刀填餡與表面抹醬(9顆/約20g顆)"}]}, {"id": "RCP-13", "name": "軟法奶油大蒜醬", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 100.0, "unit": "g", "unitCost": 0.525, "subtotal": 52.5, "stage": "融化奶油基底"}, {"ingredient": "免剝蒜仁", "baseQty": 40.0, "unit": "g", "unitCost": 0.745, "subtotal": 29.8, "stage": "新鮮蒜仁壓泥爆香"}, {"ingredient": "龍眼蜂蜜", "baseQty": 10.0, "unit": "g", "unitCost": 0.3333333333, "subtotal": 3.333333333, "stage": "圓潤花蜜提香解膩"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 2.0, "unit": "g", "unitCost": 0.18, "subtotal": 0.36, "stage": "鹹度平衡提味"}, {"ingredient": "義大利Zanetti帕瑪森起司粉", "baseQty": 30.0, "unit": "g", "unitCost": 0.74, "subtotal": 22.2, "stage": "濃郁乳酪鹹香風味"}, {"ingredient": "小磨坊洋香菜葉", "baseQty": 4.0, "unit": "g", "unitCost": 1.941176471, "subtotal": 7.764705882, "stage": "翠綠香草碎提色增香"}, {"ingredient": "法國愛樂薇動物性鮮奶油", "baseQty": 30.0, "unit": "g", "unitCost": 0.27, "subtotal": 8.1, "stage": "鮮奶油滑順乳化乳香"}]}, {"id": "RCP-14", "name": "乳酪內餡", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "法國Le Gall燈塔鮮奶油乳酪", "baseQty": 200.0, "unit": "g", "unitCost": 0.33, "subtotal": 66.0, "stage": "主體奶油乳酪微酸奶香"}, {"ingredient": "台糖細砂", "baseQty": 37.0, "unit": "g", "unitCost": 0.038, "subtotal": 1.406, "stage": "內餡基礎甜度"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 8.0, "unit": "g", "unitCost": 0.525, "subtotal": 4.2, "stage": "質地潤滑增添乳香"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 2.0, "unit": "g", "unitCost": 0.18, "subtotal": 0.36, "stage": "提鮮解膩鹹甜平衡"}, {"ingredient": "台榮玉米澱粉", "baseQty": 3.0, "unit": "g", "unitCost": 0.05, "subtotal": 0.15, "stage": "烘烤定型質地穩定"}, {"ingredient": "豐力富高鈣營養奶粉", "baseQty": 5.0, "unit": "g", "unitCost": 0.2340909091, "subtotal": 1.170454545, "stage": "濃郁奶香強化風味"}]}, {"id": "RCP-15", "name": "藍莓果醬", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "冷凍藍莓(加拿大)", "baseQty": 300.0, "unit": "g", "unitCost": 0.48, "subtotal": 144.0, "stage": "藍莓果粒主角"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 2.0, "unit": "g", "unitCost": 0.18, "subtotal": 0.36, "stage": "提鮮襯托果香"}, {"ingredient": "台糖細砂", "baseQty": 100.0, "unit": "g", "unitCost": 0.038, "subtotal": 3.8, "stage": "果醬濃縮熬煮糖度"}, {"ingredient": "檸檬角", "baseQty": 10.0, "unit": "g", "unitCost": 0.54, "subtotal": 5.4, "stage": "鮮榨檸檬汁天然果膠提酸"}]}, {"id": "RCP-16", "name": "蒜香軟法", "baseYield": 9.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 500.0, "unit": "g", "unitCost": 0.11, "subtotal": 55.0, "stage": "主麵團高筋粉"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.5, "unit": "g", "unitCost": 0.18, "subtotal": 1.35, "stage": "強化筋性與鹹香"}, {"ingredient": "東洋上白糖", "baseQty": 80.0, "unit": "g", "unitCost": 0.096, "subtotal": 7.68, "stage": "日式上白糖甜度保濕"}, {"ingredient": "光泉鮮奶", "baseQty": 160.0, "unit": "g", "unitCost": 0.09401709402, "subtotal": 15.04273504, "stage": "鮮乳水分與乳香"}, {"ingredient": "冷水", "baseQty": 160.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 7.0, "unit": "g", "unitCost": 0.298, "subtotal": 2.086, "stage": "耐高糖速發酵母"}, {"ingredient": "法國老麵麵糰", "baseQty": 100.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 6.151417004, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 100.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 5.537735849, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 25.0, "unit": "g", "unitCost": 0.525, "subtotal": 13.125, "stage": "後放發酵奶油"}, {"ingredient": "軟法奶油大蒜醬", "baseQty": 225.0, "unit": "g", "unitCost": 0.5743427741, "subtotal": 129.2271242, "stage": "劃刀填餡與表面抹蒜醬(9顆/約25g顆)"}]}, {"id": "RCP-17", "name": "抹茶紅豆乳酪歐包", "baseYield": 8.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 392.0, "unit": "g", "unitCost": 0.11, "subtotal": 43.12, "stage": "主麵團高筋粉"}, {"ingredient": "靜岡抹茶粉", "baseQty": 16.0, "unit": "g", "unitCost": 2.65, "subtotal": 42.4, "stage": "靜岡純抹茶粉微苦回甘"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.2, "unit": "g", "unitCost": 0.18, "subtotal": 1.296, "stage": "強化麵筋與風味"}, {"ingredient": "東洋上白糖", "baseQty": 20.0, "unit": "g", "unitCost": 0.096, "subtotal": 1.92, "stage": "麵團基礎保濕甜度"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 4.8, "unit": "g", "unitCost": 0.298, "subtotal": 1.4304, "stage": "耐高糖速發酵母"}, {"ingredient": "冷水", "baseQty": 272.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "法國老麵麵糰", "baseQty": 80.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 4.921133603, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 80.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 4.430188679, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 20.8, "unit": "g", "unitCost": 0.525, "subtotal": 10.92, "stage": "後放發酵奶油"}, {"ingredient": "乳酪內餡", "baseQty": 240.0, "unit": "g", "unitCost": 0.287397861, "subtotal": 68.97548663, "stage": "濃郁特調乳酪夾餡(8顆/約30g顆)"}, {"ingredient": "萬丹紅豆粒餡", "baseQty": 200.0, "unit": "g", "unitCost": 0.245, "subtotal": 49.0, "stage": "萬丹紅豆香甜粒餡(8顆/約25g顆)"}]}, {"id": "RCP-18", "name": "巧克力乳酪歐包", "baseYield": 8.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 392.0, "unit": "g", "unitCost": 0.11, "subtotal": 43.12, "stage": "主麵團高筋粉"}, {"ingredient": "Cacao Barry法國無糖巧克力粉", "baseQty": 16.0, "unit": "g", "unitCost": 0.745, "subtotal": 11.92, "stage": "純可可粉濃郁醇厚香氣"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.2, "unit": "g", "unitCost": 0.18, "subtotal": 1.296, "stage": "強化麵筋與風味"}, {"ingredient": "東洋上白糖", "baseQty": 20.0, "unit": "g", "unitCost": 0.096, "subtotal": 1.92, "stage": "麵團基礎保濕甜度"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 4.8, "unit": "g", "unitCost": 0.298, "subtotal": 1.4304, "stage": "耐高糖速發酵母"}, {"ingredient": "冷水", "baseQty": 272.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "法國老麵麵糰", "baseQty": 80.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 4.921133603, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 80.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 4.430188679, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 20.8, "unit": "g", "unitCost": 0.525, "subtotal": 10.92, "stage": "後放發酵奶油"}, {"ingredient": "乳酪內餡", "baseQty": 240.0, "unit": "g", "unitCost": 0.287397861, "subtotal": 68.97548663, "stage": "濃郁特調乳酪夾餡(8顆/約30g顆)"}, {"ingredient": "博列羅耐烤黑可可豆", "baseQty": 80.0, "unit": "g", "unitCost": 0.26, "subtotal": 20.8, "stage": "耐烤黑可可豆爆漿顆粒(8顆/約10g顆)"}]}, {"id": "RCP-19", "name": "芝麻乳酪歐包", "baseYield": 8.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 376.0, "unit": "g", "unitCost": 0.11, "subtotal": 41.36, "stage": "主麵團高筋粉"}, {"ingredient": "芝初高鈣無糖黑芝麻粉", "baseQty": 32.0, "unit": "g", "unitCost": 0.7605263158, "subtotal": 24.33684211, "stage": "高鈣純黑芝麻細粉香氣"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.2, "unit": "g", "unitCost": 0.18, "subtotal": 1.296, "stage": "強化麵筋與風味"}, {"ingredient": "東洋上白糖", "baseQty": 20.0, "unit": "g", "unitCost": 0.096, "subtotal": 1.92, "stage": "麵團基礎保濕甜度"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 4.8, "unit": "g", "unitCost": 0.298, "subtotal": 1.4304, "stage": "耐高糖速發酵母"}, {"ingredient": "冷水", "baseQty": 272.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "法國老麵麵糰", "baseQty": 80.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 4.921133603, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 80.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 4.430188679, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 20.8, "unit": "g", "unitCost": 0.525, "subtotal": 10.92, "stage": "後放發酵奶油"}, {"ingredient": "乳酪內餡", "baseQty": 240.0, "unit": "g", "unitCost": 0.287397861, "subtotal": 68.97548663, "stage": "濃郁特調乳酪夾餡(8顆/約30g顆)"}, {"ingredient": "芝初黑芝麻粒", "baseQty": 16.0, "unit": "g", "unitCost": 0.8476190476, "subtotal": 13.56190476, "stage": "烘烤黑芝麻粒增添脆感"}, {"ingredient": "富味鄉黑芝麻餡", "baseQty": 48.0, "unit": "g", "unitCost": 0.339, "subtotal": 16.272, "stage": "富味鄉濃香黑芝麻餡"}]}, {"id": "RCP-20", "name": "藍莓乳酪歐包", "baseYield": 8.0, "yieldUnit": "顆", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 392.0, "unit": "g", "unitCost": 0.11, "subtotal": 43.12, "stage": "主麵團高筋粉"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 7.2, "unit": "g", "unitCost": 0.18, "subtotal": 1.296, "stage": "強化麵筋與風味"}, {"ingredient": "東洋上白糖", "baseQty": 8.0, "unit": "g", "unitCost": 0.096, "subtotal": 0.768, "stage": "麵團基礎保濕甜度"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 4.8, "unit": "g", "unitCost": 0.298, "subtotal": 1.4304, "stage": "耐高糖速發酵母"}, {"ingredient": "冷水", "baseQty": 240.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}, {"ingredient": "法國老麵麵糰", "baseQty": 80.0, "unit": "g", "unitCost": 0.06151417004, "subtotal": 4.921133603, "stage": "自製老麵添小麥香"}, {"ingredient": "湯種", "baseQty": 80.0, "unit": "g", "unitCost": 0.05537735849, "subtotal": 4.430188679, "stage": "自製湯種保濕柔軟"}, {"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 20.8, "unit": "g", "unitCost": 0.525, "subtotal": 10.92, "stage": "後放發酵奶油"}, {"ingredient": "乳酪內餡", "baseQty": 240.0, "unit": "g", "unitCost": 0.287397861, "subtotal": 68.97548663, "stage": "濃郁特調乳酪夾餡(8顆/約30g顆)"}, {"ingredient": "藍莓果醬", "baseQty": 128.0, "unit": "g", "unitCost": 0.3727184466, "subtotal": 47.70796117, "stage": "自製酸甜藍莓果醬夾餡(8顆/約16g顆)"}]}], "costOverview": [{"name": "生吐司", "baseYield": 8.0, "unitFoodCost": 63.92136859, "unitPackCost": 20.0, "unitLaborCost": 20.335, "unitUtilityCost": 0.51875, "unitTotalCost": 104.7751186, "unitPrice": 240.0, "unitProfit": 135.2248814, "margin": 0.5634370059, "advice": "高單價主力品項，獲利結構優良"}, {"name": "肉桂捲", "baseYield": 7.0, "unitFoodCost": 105.6448099, "unitPackCost": 5.0, "unitLaborCost": 93.24, "unitUtilityCost": 2.378571429, "unitTotalCost": 206.2633814, "unitPrice": 150.0, "unitProfit": -56.26338135, "margin": -0.375089209, "advice": "⚠️ 單批工時長導致毛利偏低，建議擴產至14顆攤提工時或調價至 $190+"}, {"name": "檸檬磅蛋糕", "baseYield": 2.0, "unitFoodCost": 202.9647434, "unitPackCost": 6.25, "unitLaborCost": 147.0, "unitUtilityCost": 3.75, "unitTotalCost": 359.9647434, "unitPrice": 520.0, "unitProfit": 160.0352566, "margin": 0.3077601089, "advice": "節慶整條送禮首選，客單價高，可搭配切片單售提升銷量"}, {"name": "瑪德蓮", "baseYield": 14.0, "unitFoodCost": 12.67584357, "unitPackCost": 3.57, "unitLaborCost": 8.12, "unitUtilityCost": 0.2071428571, "unitTotalCost": 24.57298643, "unitPrice": 70.0, "unitProfit": 45.42701357, "margin": 0.6489573367, "advice": "⭐ 高毛利常溫點心，製作效率高，具優良長銷潛力"}, {"name": "費南雪", "baseYield": 6.0, "unitFoodCost": 13.37792747, "unitPackCost": 8.33, "unitLaborCost": 32.66666667, "unitUtilityCost": 0.8333333333, "unitTotalCost": 55.20792747, "unitPrice": 70.0, "unitProfit": 14.79207253, "margin": 0.2113153219, "advice": "焦化榛果奶油風味獨特，建議單批擴大至12顆以攤提工時"}, {"name": "蜂蜜起司軟歐", "baseYield": 11.0, "unitFoodCost": 19.81414109, "unitPackCost": 1.85, "unitLaborCost": 23.69818182, "unitUtilityCost": 0.6045454545, "unitTotalCost": 45.96686836, "unitPrice": 85.0, "unitProfit": 39.03313164, "margin": 0.4592133134, "advice": "⭐ 扣除2小時靜置發酵後單批操作工時為1.33小時，單件成本降至約$46.9，毛利率大幅提升至44.8%，獲利表現穩健"}, {"name": "明太子軟法", "baseYield": 9.0, "unitFoodCost": 28.22875382, "unitPackCost": 1.85, "unitLaborCost": 28.96444444, "unitUtilityCost": 0.7388888889, "unitTotalCost": 59.78208715, "unitPrice": 95.0, "unitProfit": 35.21791285, "margin": 0.3707148721, "advice": "鹹香濃郁明太子搭配老麵軟法，單批9顆毛利率優異，極具人氣明星商品潛力"}, {"name": "蒜香軟法", "baseYield": 9.0, "unitFoodCost": 26.13333468, "unitPackCost": 1.85, "unitLaborCost": 28.96444444, "unitUtilityCost": 0.7388888889, "unitTotalCost": 57.68666801, "unitPrice": 85.0, "unitProfit": 27.31333199, "margin": 0.3213333175, "advice": "濃厚自製大蒜奶油抹醬搭配外脆內軟軟法，單批9顆毛利率優異，極具人氣鹹麵包潛力"}, {"name": "抹茶紅豆乳酪歐包", "baseYield": 8.0, "unitFoodCost": 28.55165111, "unitPackCost": 1.85, "unitLaborCost": 32.585, "unitUtilityCost": 0.83125, "unitTotalCost": 63.81790111, "unitPrice": 95.0, "unitProfit": 31.18209889, "margin": 0.3282326199, "advice": "⭐ 靜岡純抹茶粉苦甜搭配自製乳酪內餡與紅豆，高客單價且毛利穩健"}, {"name": "巧克力乳酪歐包", "baseYield": 8.0, "unitFoodCost": 21.21665111, "unitPackCost": 1.85, "unitLaborCost": 32.585, "unitUtilityCost": 0.83125, "unitTotalCost": 56.48290111, "unitPrice": 85.0, "unitProfit": 28.51709889, "margin": 0.335495281, "advice": "法國純可可粉結合爆漿耐烤可可豆與乳酪，風味濃郁甜鹹平衡"}, {"name": "芝麻乳酪歐包", "baseYield": 8.0, "unitFoodCost": 23.67799447, "unitPackCost": 1.85, "unitLaborCost": 32.585, "unitUtilityCost": 0.83125, "unitTotalCost": 58.94424447, "unitPrice": 85.0, "unitProfit": 26.05575553, "margin": 0.3065383003, "advice": "高鈣無糖黑芝麻粉結合脆芝麻粒與乳酪，兼具養生與香濃口感"}, {"name": "藍莓乳酪歐包", "baseYield": 8.0, "unitFoodCost": 22.94614626, "unitPackCost": 1.85, "unitLaborCost": 32.585, "unitUtilityCost": 0.83125, "unitTotalCost": 58.21239626, "unitPrice": 85.0, "unitProfit": 26.78760374, "margin": 0.3151482793, "advice": "自製酸甜藍莓果醬搭配香濃乳酪內餡，清爽果香深受女性喜愛"}]};

    // 4 Clean Product Categories (No truncation, zero ellipsis)
    const PRODUCT_CATEGORIES = [
      { id: 'toast', name: '吐司・肉桂', emoji: '🍞', recipeIds: ['RCP-01', 'RCP-02'] },
      { id: 'euro', name: '軟歐・軟法', emoji: '🥖', recipeIds: ['RCP-10', 'RCP-12', 'RCP-16', 'RCP-17', 'RCP-18', 'RCP-19', 'RCP-20'] },
      { id: 'dessert', name: '常溫甜點', emoji: '🍰', recipeIds: ['RCP-03', 'RCP-04', 'RCP-05'] },
      { id: 'starter', name: '酵種・抹醬', emoji: '🥣', recipeIds: ['RCP-06', 'RCP-07', 'RCP-08', 'RCP-09', 'RCP-11', 'RCP-13', 'RCP-14', 'RCP-15'] }
    ];

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

    const RECIPE_META = {
      "RCP-01": { category: "toast", emoji: "🍞", subtitle: "哥摩高筋 × 鐵塔鮮奶油 × 波蘭種", panSpec: "450g 12兩模", laborHours: 0.83, packCostUnit: 20.0, sellingPriceUnit: 240.0, advice: "高單價主力品項" },
      "RCP-02": { category: "toast", emoji: "🌀", subtitle: "T55法國粉 × GABAN肉桂 × 蘋果餡", panSpec: "專屬外帶盒", laborHours: 3.33, packCostUnit: 5.0, sellingPriceUnit: 150.0, advice: "建議擴產攤提工時" },
      "RCP-03": { category: "dessert", emoji: "🍋", subtitle: "燈塔奶油 × 鮮檸汁 × 蘭姆酒糖霜", panSpec: "長型禮盒", laborHours: 1.50, packCostUnit: 6.25, sellingPriceUnit: 520.0, advice: "節慶送禮首選" },
      "RCP-04": { category: "dessert", emoji: "🐚", subtitle: "鑽石低筋 × 杏仁粉 × Cacao Barry", panSpec: "貝殼模", laborHours: 0.58, packCostUnit: 3.57, sellingPriceUnit: 70.0, advice: "高毛利常溫小點" },
      "RCP-05": { category: "dessert", emoji: "🧈", subtitle: "愛樂薇焦化奶油 × 藍鑽杏仁粉", panSpec: "金磚模", laborHours: 1.00, packCostUnit: 8.33, sellingPriceUnit: 70.0, advice: "焦化榛果奶油風味" },
      "RCP-06": { category: "starter", emoji: "🫧", subtitle: "哥摩高筋260g+水260g+酵母1g", panSpec: "隔夜低溫酵種", laborHours: 0.50, packCostUnit: 0.0, sellingPriceUnit: 0.0, advice: "自製隔夜波蘭種" },
      "RCP-07": { category: "starter", emoji: "🥖", subtitle: "鐵塔法國粉1000g+水700g+麥芽精3g", panSpec: "法國老麵", laborHours: 0.50, packCostUnit: 0.0, sellingPriceUnit: 0.0, advice: "自製法國老麵" },
      "RCP-08": { category: "starter", emoji: "♨️", subtitle: "哥摩高筋1000g+水1000g+糖100g", panSpec: "柔軟湯種", laborHours: 0.50, packCostUnit: 0.0, sellingPriceUnit: 0.0, advice: "燙麵保濕湯種" },
      "RCP-09": { category: "starter", emoji: "🍯", subtitle: "愛樂薇奶油 × 起司片 × 蜂蜜", panSpec: "特調抹醬", laborHours: 0.50, packCostUnit: 0.0, sellingPriceUnit: 0.0, advice: "蜂蜜起司淋醬" },
      "RCP-10": { category: "euro", emoji: "🧀", subtitle: "哥摩高筋 × 老麵湯種 × 蜂蜜起司醬", panSpec: "歐包袋", laborHours: 1.33, packCostUnit: 1.85, sellingPriceUnit: 85.0, advice: "毛利率45.9%穩健主力" },
      "RCP-11": { category: "starter", emoji: "🐟", subtitle: "雙葉明太子 × 美乃滋 × 愛樂薇奶油", panSpec: "明太子醬", laborHours: 0.50, packCostUnit: 0.0, sellingPriceUnit: 0.0, advice: "日式明太子抹醬" },
      "RCP-12": { category: "euro", emoji: "🥖", subtitle: "老麵軟法 × 雙葉明太子抹醬", panSpec: "軟法袋", laborHours: 1.33, packCostUnit: 1.85, sellingPriceUnit: 95.0, advice: "鹹香人氣軟法" },
      "RCP-13": { category: "starter", emoji: "🧄", subtitle: "愛樂薇奶油 × 蒜仁泥 × 帕瑪森起司", panSpec: "大蒜抹醬", laborHours: 0.50, packCostUnit: 0.0, sellingPriceUnit: 0.0, advice: "法式奶油大蒜醬" },
      "RCP-14": { category: "starter", emoji: "🥛", subtitle: "Le Gall燈塔鮮奶油乳酪 × 愛樂薇", panSpec: "乳酪內餡", laborHours: 0.50, packCostUnit: 0.0, sellingPriceUnit: 0.0, advice: "特調滑順乳酪餡" },
      "RCP-15": { category: "starter", emoji: "🫐", subtitle: "加拿大冷凍藍莓300g × 檸檬汁", panSpec: "鮮果醬", laborHours: 0.50, packCostUnit: 0.0, sellingPriceUnit: 0.0, advice: "自製藍莓鮮果醬" },
      "RCP-16": { category: "euro", emoji: "🧄", subtitle: "老麵軟法 × 帕瑪森奶油大蒜抹醬", panSpec: "軟法袋", laborHours: 1.33, packCostUnit: 1.85, sellingPriceUnit: 85.0, advice: "蒜香濃郁人氣軟法" },
      "RCP-17": { category: "euro", emoji: "🍵", subtitle: "靜岡抹茶粉 × 萬丹紅豆 × 乳酪餡", panSpec: "歐包袋", laborHours: 1.33, packCostUnit: 1.85, sellingPriceUnit: 95.0, advice: "靜岡抹茶苦甜回甘" },
      "RCP-18": { category: "euro", emoji: "🍫", subtitle: "Cacao Barry可可 × 耐烤黑可可豆", panSpec: "歐包袋", laborHours: 1.33, packCostUnit: 1.85, sellingPriceUnit: 85.0, advice: "濃郁巧克力乳酪" },
      "RCP-19": { category: "euro", emoji: "⚫", subtitle: "芝初高鈣黑芝麻粉 × 黑芝麻餡", panSpec: "歐包袋", laborHours: 1.33, packCostUnit: 1.85, sellingPriceUnit: 85.0, advice: "養生濃郁芝麻歐包" },
      "RCP-20": { category: "euro", emoji: "🫐", subtitle: "自製藍莓果醬 × 特調乳酪內餡", panSpec: "歐包袋", laborHours: 1.33, packCostUnit: 1.85, sellingPriceUnit: 85.0, advice: "酸甜果香人氣歐包" }
    };

    const RETAIL_RECIPE_IDS = [
      'RCP-01', 'RCP-02', 'RCP-03', 'RCP-04', 'RCP-05',
      'RCP-10', 'RCP-12', 'RCP-16', 'RCP-17', 'RCP-18', 'RCP-19', 'RCP-20'
    ];

    const HOURLY_WAGE = 196;
    const HOURLY_UTILITY = 5;

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
      'RCP-01': 8, 'RCP-02': 7, 'RCP-10': 11, 'RCP-12': 9, 'RCP-16': 9,
      'RCP-17': 8, 'RCP-18': 0, 'RCP-19': 0, 'RCP-20': 0, 'RCP-03': 2,
      'RCP-04': 14, 'RCP-05': 6
    };

    const state = {
      activeTab: 'calculator',
      isUnlocked: false,
      pendingTab: null,
      activeProductCategory: 'euro', // Default to 'euro' as user requested (蜂蜜起司軟歐, 明太子軟法)
      selectedRecipeId: 'RCP-10',   // 蜂蜜起司軟歐 as active
      targetPieces: 11,
      targetBatches: 1.0,
      weightUnit: 'g',
      selectedStage: 'ALL',
      checkedItems: {},
      fixCinnamonLemon: false,
      kitchenMode: false,
      ingCategory: 'ALL',
      ingSupplier: 'ALL',
      ingSearch: '',
      customPackPrices: {},
      scheduleCounts: { ...DEFAULT_SCHEDULE_COUNTS },
      pricingSim: JSON.parse(JSON.stringify(DEFAULT_PRICING_SIM))
    };

    function showToast(msg, icon = '✅') {
      const box = document.getElementById('toastBox');
      document.getElementById('toastIcon').textContent = icon;
      document.getElementById('toastText').textContent = msg;
      box.classList.remove('hidden');
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => box.classList.add('hidden'), 2200);
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
        const roundedOther = Math.abs(grams - Math.round(grams)) < 0.05 ? Math.round(grams) : Number(grams.toFixed(1));
        return `${roundedOther} ${originalUnit}`;
      }
      if (state.weightUnit === 'kg') {
        return `${(grams / 1000).toFixed(3)} kg`;
      }
      const rounded = Math.abs(grams - Math.round(grams)) < 0.05 ? Math.round(grams).toLocaleString('zh-TW') : Number(grams.toFixed(1)).toLocaleString('zh-TW');
      return `${rounded} ${originalUnit}`;
    }

    function formatCurrency(val, decimals = 1) {
      const sign = val < 0 ? '-' : '';
      const absVal = Math.abs(val);
      return `${sign}NT$${absVal.toLocaleString('zh-TW', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;
    }

    function calculateRecipeMetrics(recipeId, targetPieces) {
      const recipe = getRecipeById(recipeId);
      const meta = RECIPE_META[recipeId] || { category: 'euro', emoji: '🥐', subtitle: '', panSpec: '', laborHours: 1.0, packCostUnit: 0, sellingPriceUnit: 0, advice: '' };
      const scale = recipe.baseYield > 0 ? (targetPieces / recipe.baseYield) : 1;

      let totalWeightG = 0;
      let totalFoodCost = 0;

      const scaledItems = recipe.items.map((item, idx) => {
        const scaledQty = item.baseQty * scale;
        if (item.unit === 'g' || item.unit === 'ml') {
          totalWeightG += scaledQty;
        } else if (item.ingredient === '安佳起司片' && item.unit === '片') {
          totalWeightG += scaledQty * 11;
        }
        let unitCost = getIngredientUnitCost(item.ingredient);
        if (!unitCost && item.unitCost) unitCost = item.unitCost;
        if (recipeId === 'RCP-02' && item.ingredient === '檸檬皮' && state.fixCinnamonLemon) {
          unitCost = getIngredientUnitCost('檸檬角');
        }
        const itemCost = scaledQty * unitCost;
        totalFoodCost += itemCost;

        return {
          idx: idx + 1,
          ingredient: item.ingredient,
          rawIngredient: item.ingredient,
          baseQty: item.baseQty,
          scaledQty,
          unit: item.unit,
          unitCost,
          itemCost,
          stage: item.stage
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
    // 4. RENDERING FUNCTIONS — 3-BLOCK NO-SCROLL LAYOUT
    // =========================================================================
    // Block 1: 選種類 (Category Selector - Horizontal scroll, full text)
    function renderCategoryTabs() {
      const bar = document.getElementById('step1CategoryBar');
      bar.innerHTML = '';

      PRODUCT_CATEGORIES.forEach(cat => {
        const isActive = state.activeProductCategory === cat.id;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
          isActive
            ? 'bg-amber-400 text-black shadow-md shadow-amber-500/25 scale-[1.02]'
            : 'apple-glass-pill text-zinc-300 hover:text-white'
        }`;

        btn.innerHTML = `
          <span>${cat.emoji}</span>
          <span>${cat.name}</span>
          <span class="text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-400'}">${cat.recipeIds.length}</span>
        `;

        btn.addEventListener('click', () => {
          state.activeProductCategory = cat.id;
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

    // Block 2: 左右選品項 (Horizontal Product Chips User Swipes/Scrolls Left & Right)
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
        btn.className = `px-3 py-1.5 rounded-xl text-left whitespace-nowrap transition-all shrink-0 flex items-center gap-2 border ${
          isSelected
            ? 'bg-amber-400 text-black border-amber-400 font-extrabold shadow-md shadow-amber-500/25 scale-[1.02]'
            : 'apple-glass-subtle border-white/10 text-zinc-300 hover:border-white/25 hover:text-white'
        }`;

        btn.innerHTML = `
          <span class="text-base sm:text-lg">${emoji}</span>
          <div class="leading-tight">
            <div class="font-extrabold text-xs sm:text-sm ${isSelected ? 'text-black' : 'text-white'}">${rcp.name}</div>
            <div class="text-[10px] font-mono ${isSelected ? 'text-black/75' : 'text-zinc-400'}">${rcp.baseYield} ${rcp.yieldUnit}</div>
          </div>
          ${isSelected ? '<span class="text-xs font-black text-black ml-0.5">✓</span>' : ''}
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

    // Quick presets removed per user request (保留顆數計算就好)
    function renderQuickPresets(recipe) {
      const container = document.getElementById('quickPresetsContainer');
      if (container) container.innerHTML = '';
    }

    // Block 3: 呈現即時配方 (Compact 2-Column Scaled Recipe Grid)
    function renderCalculator() {
      const metrics = calculateRecipeMetrics(state.selectedRecipeId, state.targetPieces);
      const { recipe, meta, scale, scaledItems } = metrics;

      const batchTargetLbl = document.getElementById('pricingBatchTargetLabel');
      if (batchTargetLbl) {
        batchTargetLbl.textContent = `目前核算目標：${recipe.name} × ${Math.round(state.targetPieces)} ${recipe.yieldUnit}`;
      }

      // Stepper Labels in Block 2
      document.getElementById('calcRecipeTitle').textContent = `${meta.displayEmoji || meta.emoji} ${recipe.name}`;
      document.getElementById('calcRecipeMeta').textContent = `試算表基準：1 份可做 ${recipe.baseYield} ${recipe.yieldUnit}`;
      document.getElementById('targetPiecesUnitLabel').textContent = `${recipe.yieldUnit}`;
      const batchNum = Number(scale.toFixed(2));
      const batchStr = (scale % 1 === 0 || Math.abs(scale - Math.round(scale)) < 0.001)
        ? Math.round(scale)
        : batchNum;
      const batchEl = document.getElementById('targetBatchesDisplay');
      if (batchEl) {
        batchEl.textContent = `(${batchStr}份)`;
      }

      renderQuickPresets(recipe);

      // Block 3: Total Dough Weight Badge
      document.getElementById('totalDoughWeightBadge').textContent =
        `本批總重 ${formatWeight(metrics.totalWeightG, 'g')}`;

      // Render Scaled Ingredient Cells (2 Columns on Phone!)
      const listContainer = document.getElementById('scaledIngredientsContainer');
      listContainer.innerHTML = '';

      scaledItems.forEach(item => {
        const checkKey = `${state.selectedRecipeId}_${item.idx}`;
        const isChecked = !!state.checkedItems[checkKey];
        const isKeyItem = item.rawIngredient.includes('麵粉') || item.rawIngredient.includes('奶油') || SUB_RECIPE_NAME_TO_ID[item.rawIngredient];

        const cell = document.createElement('div');
        cell.className = `card-interactive rounded-xl px-2.5 py-1.5 sm:py-2 border transition-all cursor-pointer flex items-center justify-between gap-1.5 ${
          isChecked
            ? 'bg-emerald-950/30 border-emerald-500/40 opacity-60'
            : isKeyItem
              ? 'bg-white/[0.08] border-amber-400/35 shadow-sm'
              : 'apple-glass-subtle border-white/10'
        }`;

        cell.innerHTML = `
          <div class="flex items-center gap-1.5 min-w-0">
            <span class="w-4 h-4 rounded-md flex items-center justify-center border text-[10px] shrink-0 ${
              isChecked ? 'bg-emerald-500 border-emerald-400 text-black font-black' : 'border-white/30 text-transparent'
            }">✓</span>
            <div class="min-w-0">
              <div class="ing-title font-extrabold text-sm sm:text-base text-white truncate leading-snug ${isChecked ? 'line-through text-zinc-400' : ''}">
                ${item.ingredient}
              </div>
              <div class="text-[10px] sm:text-xs text-zinc-400 truncate">${item.stage || ''}</div>
            </div>
          </div>

          <div class="text-right shrink-0">
            <div class="weight-num text-base sm:text-xl font-black font-mono tracking-tight ${
              isChecked ? 'text-emerald-400' : 'text-amber-400'
            }">
              ${formatWeight(item.scaledQty, item.unit)}
            </div>
          </div>
        `;

        cell.addEventListener('click', () => {
          state.checkedItems[checkKey] = !state.checkedItems[checkKey];
          renderCalculator();
        });

        listContainer.appendChild(cell);
      });

      // Sub-Recipe Breakdown Drawer
      const poolishBox = document.getElementById('poolishHelperBox');
      const usedSubItems = scaledItems.filter(it => SUB_RECIPE_NAME_TO_ID[it.rawIngredient]);

      if (usedSubItems.length > 0) {
        poolishBox.classList.remove('hidden');
        document.getElementById('poolishTargetTotal').textContent = `內含 ${usedSubItems.length} 款自製種/餡`;
        const pGrid = document.getElementById('poolishBreakdownGrid');
        pGrid.innerHTML = '';

        usedSubItems.forEach(subItem => {
          const subRcpId = SUB_RECIPE_NAME_TO_ID[subItem.rawIngredient];
          const subRcp = getRecipeById(subRcpId);
          if (!subRcp) return;

          let subTotalBaseWeight = 0;
          subRcp.items.forEach(si => {
            if (si.unit === 'g' || si.unit === 'ml') subTotalBaseWeight += si.baseQty;
            else if (si.ingredient === '安佳起司片') subTotalBaseWeight += si.baseQty * 11;
          });
          const subScale = subTotalBaseWeight > 0 ? (subItem.scaledQty / subTotalBaseWeight) : scale;

          const subRowsHtml = subRcp.items.map(si => `
            <div class="flex justify-between items-center py-0.5 text-[10px]">
              <span class="text-zinc-300 truncate">${si.ingredient}</span>
              <span class="font-mono font-bold text-amber-300 ml-1 shrink-0">${formatWeight(si.baseQty * subScale, si.unit)}</span>
            </div>
          `).join('');

          const card = document.createElement('div');
          card.className = 'p-1.5 rounded-lg bg-black/50 border border-sky-400/20';
          card.innerHTML = `
            <div class="flex items-center justify-between border-b border-sky-400/20 pb-0.5 mb-1 font-bold text-[11px] text-white">
              <span>${subItem.rawIngredient}</span>
              <span class="text-sky-300 font-mono">${formatWeight(subItem.scaledQty, subItem.unit)}</span>
            </div>
            ${subRowsHtml}
          `;
          pGrid.appendChild(card);
        });
      } else {
        poolishBox.classList.add('hidden');
      }

      // Financials in Tab 4
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
      profitEl.className = `text-lg font-black font-mono mt-0.5 ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`;
      marginEl.textContent = `毛利率：${metrics.marginPct.toFixed(1)}%`;
      marginEl.className = `text-[10px] mt-0.5 ${isPositive ? 'text-emerald-300' : 'text-rose-300'}`;

      const costBody = document.getElementById('calcCostBreakdownBody');
      costBody.innerHTML = `
        <tr><td class="py-1 text-zinc-200">食材成本</td><td class="py-1 text-zinc-400">配方換算</td><td class="py-1 text-right text-white font-semibold">${formatCurrency(metrics.totalFoodCost, 1)}</td><td class="py-1 text-right text-zinc-300">${formatCurrency(metrics.unitFoodCost, 2)}</td></tr>
        <tr><td class="py-1 text-zinc-200">包材費用</td><td class="py-1 text-zinc-400">$${meta.packCostUnit}/${recipe.yieldUnit}</td><td class="py-1 text-right text-white">${formatCurrency(metrics.packCostBatch, 1)}</td><td class="py-1 text-right text-zinc-300">${formatCurrency(metrics.unitPackCost, 2)}</td></tr>
        <tr><td class="py-1 text-zinc-200">人力工時</td><td class="py-1 text-zinc-400">${metrics.laborHoursBatch.toFixed(2)}hr×$196</td><td class="py-1 text-right text-white">${formatCurrency(metrics.laborCostBatch, 1)}</td><td class="py-1 text-right text-zinc-300">${formatCurrency(metrics.unitLaborCost, 2)}</td></tr>
        <tr><td class="py-1 text-zinc-200">電費雜項</td><td class="py-1 text-zinc-400">${metrics.laborHoursBatch.toFixed(2)}hr×$5</td><td class="py-1 text-right text-white">${formatCurrency(metrics.utilityCostBatch, 1)}</td><td class="py-1 text-right text-zinc-300">${formatCurrency(metrics.unitUtilityCost, 2)}</td></tr>
        <tr class="bg-white/[0.04] font-bold"><td class="py-1.5 text-amber-300">總成本</td><td class="py-1.5 text-zinc-400">完整分攤</td><td class="py-1.5 text-right text-amber-400">${formatCurrency(metrics.fullCostBatch, 1)}</td><td class="py-1.5 text-right text-amber-300">${formatCurrency(metrics.unitFullCost, 2)}</td></tr>
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
        card.className = 'apple-glass-subtle rounded-xl p-2.5 border border-white/10 flex items-center justify-between gap-2';
        card.innerHTML = `
          <div class="truncate text-xs">
            <div class="font-bold text-white truncate">${m.meta.displayEmoji || m.meta.emoji} ${rcp.name}</div>
            <div class="text-[10px] text-zinc-400 font-mono">$${m.meta.sellingPriceUnit}/${rcp.yieldUnit}</div>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button type="button" data-sched-dec="${rcp.id}" class="w-7 h-7 rounded-lg bg-white/10 text-white font-bold text-xs">−</button>
            <input type="number" data-sched-input="${rcp.id}" value="${count}" min="0" step="1" class="w-12 text-center bg-black/60 border border-white/15 rounded-lg text-sm font-bold text-white font-mono py-0.5" />
            <button type="button" data-sched-inc="${rcp.id}" class="w-7 h-7 rounded-lg bg-amber-500 text-black font-bold text-xs">+</button>
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
      netEl.className = `font-extrabold font-mono text-xs ${netProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`;
      document.getElementById('schedTotalHours').innerHTML = `⏱️ 工時：約 <strong class="text-white font-mono">${totalHours.toFixed(1)}</strong> 小時`;

      const listEl = document.getElementById('schedConsolidatedIngList');
      listEl.innerHTML = '';
      const sortedIngs = Object.values(consolidatedMap).sort((a, b) => b.qty - a.qty);
      document.getElementById('schedUniqueIngCount').textContent = `共 ${sortedIngs.length} 項原料`;

      if (sortedIngs.length === 0) {
        listEl.innerHTML = `<div class="col-span-full text-center py-4 text-xs text-zinc-500">請設定排程數量</div>`;
      } else {
        sortedIngs.forEach(item => {
          const div = document.createElement('div');
          div.className = 'p-1.5 rounded-lg bg-black/45 border border-white/10 flex items-center justify-between gap-1';
          div.innerHTML = `
            <div class="truncate text-[11px] text-zinc-200 font-medium">${item.name}</div>
            <div class="text-right shrink-0 font-mono text-[11px] font-bold text-amber-400">${formatWeight(item.qty, item.unit)}</div>
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
        card.className = 'apple-glass rounded-xl p-3 flex flex-col justify-between space-y-2.5 border border-white/10 text-xs';
        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between">
              <span class="font-bold text-sm text-white">${emoji} ${rcp.name}</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-zinc-300">${rcp.baseYield} ${rcp.yieldUnit}</span>
            </div>
            <div class="text-[11px] text-zinc-400 mt-1">${m.meta.subtitle}</div>
          </div>
          <button type="button" data-open-calc="${rcp.id}" class="w-full py-1.5 rounded-lg bg-amber-400 text-black font-extrabold text-xs">
            帶入計算器 →
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
    // 6. RENDERING FUNCTIONS — TAB 3: INGREDIENTS DATABASE
    // =========================================================================
    function initIngredientFilters() {
      const categories = ['ALL', ...new Set(RAW_DATA.ingredients.map(i => i.category))];
      const catBar = document.getElementById('ingCategoryBar');
      catBar.innerHTML = '';
      categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.type = 'button';
        const isActive = state.ingCategory === cat;
        btn.className = `px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
          isActive ? 'bg-amber-400 text-black font-bold' : 'apple-glass-pill text-zinc-300'
        }`;
        const count = cat === 'ALL' ? RAW_DATA.ingredients.length : RAW_DATA.ingredients.filter(i => i.category === cat).length;
        btn.textContent = `${cat === 'ALL' ? '全部' : cat} (${count})`;
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

      document.getElementById('ingFilteredCount').textContent = `顯示 ${filtered.length} / ${RAW_DATA.ingredients.length} 項原料`;

      filtered.forEach(ing => {
        const currentPrice = state.customPackPrices[ing.name] !== undefined ? state.customPackPrices[ing.name] : ing.packPrice;
        const unitCost = ing.packSize > 0 ? (currentPrice / ing.packSize) : 0;
        const isModified = state.customPackPrices[ing.name] !== undefined && state.customPackPrices[ing.name] !== ing.packPrice;

        const tr = document.createElement('tr');
        tr.className = 'hover:bg-white/[0.04] transition-colors';
        tr.innerHTML = `
          <td class="py-2 px-2.5"><span class="px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-zinc-200">${ing.category}</span></td>
          <td class="py-2 px-2.5 font-bold text-white">${ing.name}</td>
          <td class="py-2 px-2.5 text-right font-mono text-zinc-300">${ing.packSize.toLocaleString()} ${ing.unit}</td>
          <td class="py-2 px-2.5 text-right font-mono">
            <input type="number" data-ing-price="${ing.name}" value="${currentPrice}" min="0" step="1" class="w-16 text-right rounded px-1.5 py-0.5 bg-black/60 border ${
              isModified ? 'border-amber-400 text-amber-300 font-bold' : 'border-white/15 text-white'
            } focus:outline-none" />
          </td>
          <td class="py-2 px-2.5 text-right font-mono text-amber-400 font-bold">$${unitCost.toFixed(3)}/${ing.unit}</td>
          <td class="py-2 px-2.5 text-zinc-300">${ing.supplier || '—'}</td>
          <td class="py-2 px-2.5 text-zinc-400 text-[11px]">${ing.note || ''}</td>
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
          showToast(`已更新「${name}」採購價為 NT$${val}`);
        });
      });
    }

    // =========================================================================
    // 7. RENDERING FUNCTIONS — TAB 4: PRICING OVERVIEW
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

        rows.push({ id, name: rcp.name, yieldUnit: rcp.yieldUnit, simYield: sim.batchYield, unitFood, unitPack, unitLabor, unitUtility, unitTotal, unitPrice, unitProfit, margin, advice: meta.advice });
      });

      const avgMargin = rows.reduce((a, r) => a + r.margin, 0) / rows.length;
      const avgProfit = rows.reduce((a, r) => a + r.unitProfit, 0) / rows.length;
      const topRow = [...rows].sort((a, b) => b.margin - a.margin)[0];

      document.getElementById('kpiAvgMargin').textContent = `${avgMargin.toFixed(1)}%`;
      document.getElementById('kpiTopProduct').textContent = topRow.name;
      document.getElementById('kpiTopProductSub').textContent = `${topRow.margin.toFixed(1)}%`;
      document.getElementById('kpiAvgProfit').textContent = `NT$${avgProfit.toFixed(2)}`;

      const tbody = document.getElementById('pricingOverviewTableBody');
      tbody.innerHTML = '';

      rows.forEach(r => {
        const isPos = r.unitProfit >= 0;
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-white/[0.04] text-xs';
        tr.innerHTML = `
          <td class="py-2 px-2 font-sans font-bold text-white">${r.name}</td>
          <td class="py-2 px-2 text-center">
            <input type="number" data-sim-yield="${r.name}" value="${r.simYield}" min="1" step="1" class="w-12 text-center rounded px-1 py-0.5 bg-black/60 border border-white/15 text-amber-300 font-bold" />
          </td>
          <td class="py-2 px-2 text-right">$${r.unitFood.toFixed(1)}</td>
          <td class="py-2 px-2 text-right text-zinc-400">$${r.unitPack.toFixed(1)}</td>
          <td class="py-2 px-2 text-right text-zinc-400">$${r.unitLabor.toFixed(1)}</td>
          <td class="py-2 px-2 text-right text-zinc-400">$${r.unitUtility.toFixed(1)}</td>
          <td class="py-2 px-2 text-right font-bold text-amber-400">$${r.unitTotal.toFixed(1)}</td>
          <td class="py-2 px-2 text-center">
            <input type="number" data-sim-price="${r.name}" value="${r.unitPrice}" min="10" step="5" class="w-14 text-center rounded px-1 py-0.5 bg-black/60 border border-white/15 text-sky-300 font-bold" />
          </td>
          <td class="py-2 px-2 text-right font-bold ${isPos ? 'text-emerald-400' : 'text-rose-400'}">${isPos ? '+' : ''}$${r.unitProfit.toFixed(1)}</td>
          <td class="py-2 px-2 text-right font-bold ${isPos ? 'text-emerald-400' : 'text-rose-400'}">${r.margin.toFixed(1)}%</td>
          <td class="py-2 px-2 font-sans text-[11px] text-zinc-400">${r.advice}</td>
        `;
        tbody.appendChild(tr);
      });

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
            { label: '食材', data: rows.map(r => Number(r.unitFood.toFixed(1))), backgroundColor: 'rgba(245, 166, 35, 0.85)', stack: 'cost' },
            { label: '人工電費', data: rows.map(r => Number((r.unitLabor + r.unitUtility).toFixed(1))), backgroundColor: 'rgba(10, 132, 255, 0.85)', stack: 'cost' },
            { label: '包材', data: rows.map(r => Number(r.unitPack.toFixed(1))), backgroundColor: 'rgba(191, 90, 242, 0.85)', stack: 'cost' },
            { label: '售價', data: rows.map(r => r.unitPrice), backgroundColor: 'rgba(48, 209, 88, 0.75)', stack: 'price' }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#D4D4D8', font: { size: 10 } } } },
          scales: {
            x: { ticks: { color: '#D4D4D8', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,0.06)' } },
            y: { ticks: { color: '#A1A1AA', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.06)' } }
          }
        }
      });

      if (marginChartInstance) marginChartInstance.destroy();
      marginChartInstance = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: '毛利率 (%)',
            data: rows.map(r => Number(r.margin.toFixed(1))),
            backgroundColor: rows.map(r => r.margin >= 0 ? 'rgba(48, 209, 88, 0.82)' : 'rgba(255, 69, 58, 0.85)'),
            borderRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#D4D4D8', font: { size: 10 } } } },
          scales: {
            x: { ticks: { color: '#D4D4D8', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,0.06)' } },
            y: { ticks: { color: '#A1A1AA', callback: (val) => val + '%' }, grid: { color: 'rgba(255,255,255,0.06)' } }
          }
        }
      });
    }

    // =========================================================================
    // 8. TABS, PASSCODE & EVENT LISTENERS
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
        document.querySelectorAll('.lock-indicator').forEach(el => { el.textContent = '🔓'; });
        showToast('密碼正確！已解鎖管理分頁', '🔓');
        if (state.pendingTab) {
          const target = state.pendingTab;
          state.pendingTab = null;
          switchTab(target);
        }
      } else {
        err.textContent = '密碼錯誤，請重新輸入';
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
        if (isMatch) {
          btn.className = `nav-tab-btn px-2.5 sm:px-3.5 py-1 rounded-full text-xs sm:text-sm font-extrabold transition-all bg-white text-black shadow-sm flex items-center justify-center gap-0.5 whitespace-nowrap`;
        } else {
          btn.className = `nav-tab-btn px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold transition-all text-zinc-300 hover:text-white flex items-center justify-center gap-0.5 whitespace-nowrap`;
        }
      });

      if (tabName === 'pricing') {
        setTimeout(() => renderPricingOverview(), 50);
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
            if (passInput.value.length === 4) verifyPasscode();
          }
        });
      });
      document.getElementById('passcodeClearBtn').addEventListener('click', () => {
        passInput.value = '';
        document.getElementById('passcodeErrorMsg').textContent = '';
        passInput.focus();
      });
      document.getElementById('passcodeSubmitBtn').addEventListener('click', () => verifyPasscode());
      passInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); verifyPasscode(); }
      });
      passInput.addEventListener('input', () => {
        if (passInput.value.length === 4) verifyPasscode();
      });

      // Target Pieces Stepper in Block 2
      const pInput = document.getElementById('targetPiecesInput');
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
      pInput.addEventListener('change', () => syncInputsAndRenderCalculator());

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

      // Weight Unit Toggle
      document.querySelectorAll('.unit-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          state.weightUnit = btn.getAttribute('data-unit');
          document.querySelectorAll('.unit-toggle-btn').forEach(b => {
            b.className = `unit-toggle-btn px-2 py-0.5 rounded ${
              b.getAttribute('data-unit') === state.weightUnit ? 'bg-amber-500 text-black font-extrabold' : 'text-zinc-300 font-semibold'
            }`;
          });
          renderCalculator();
        });
      });

      // Reset Checklist
      document.getElementById('resetChecklistBtn').addEventListener('click', () => {
        const rcp = getRecipeById(state.selectedRecipeId);
        rcp.items.forEach((_, idx) => {
          delete state.checkedItems[`${state.selectedRecipeId}_${idx + 1}`];
        });
        renderCalculator();
        showToast('已重置打勾');
      });

      // Copy Scaled Recipe
      document.getElementById('copyScaledRecipeBtn').addEventListener('click', () => {
        const m = calculateRecipeMetrics(state.selectedRecipeId, state.targetPieces);
        const lines = [
          `🥐 【3CatsMomBakery 配方克數單】`,
          `品項：${m.recipe.name} (${m.recipe.id})`,
          `本次製作數量：${Math.round(m.targetPieces)} ${m.recipe.yieldUnit}`,
          `本批麵團總重：${Math.round(m.totalWeightG)} g`,
          `----------------------------------------`
        ];
        m.scaledItems.forEach(it => {
          lines.push(`• ${it.ingredient}：${formatWeight(it.scaledQty, it.unit)}`);
        });
        copyTextToClipboard(lines.join('\n'), '已複製配方克數！');
      });

      // Cinnamon Roll Lemon Toggle
      const cNotice = document.getElementById('fixCinnamonLemonToggle');
      if (cNotice) {
        cNotice.addEventListener('change', (e) => {
          state.fixCinnamonLemon = e.target.checked;
          renderCalculator();
          renderDailySchedulePlanner();
          renderPricingOverview();
        });
      }

      // Reset Pricing Simulator
      document.getElementById('resetPricingSimBtn').addEventListener('click', () => {
        state.pricingSim = JSON.parse(JSON.stringify(DEFAULT_PRICING_SIM));
        renderPricingOverview();
        showToast('已還原預設售價與產量');
      });

      // Ingredient Search
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
        showToast('已還原原料採購價');
      });

// Large font enabled by default per user request; chef symbol removed

      // GitHub Modal
      const ghModal = document.getElementById('githubModal');
      const ghBtn = document.getElementById('openGithubModalBtn');
      if (ghBtn) {
        ghBtn.addEventListener('click', () => ghModal.classList.remove('hidden'));
      }
      document.getElementById('closeGithubModalBtn').addEventListener('click', () => ghModal.classList.add('hidden'));
      ghModal.addEventListener('click', (e) => { if (e.target === ghModal) ghModal.classList.add('hidden'); });
      document.getElementById('copyGitCmdBtn').addEventListener('click', () => {
        copyTextToClipboard(document.getElementById('gitCmdBlock').innerText, '已複製 Git 指令');
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
        showToast('已下載 index.html');
      });
      document.getElementById('exportCsvReportBtn').addEventListener('click', () => {
        const m = calculateRecipeMetrics(state.selectedRecipeId, state.targetPieces);
        const rows = [['品項', '數量', '原料', '克數', '單位']];
        m.scaledItems.forEach(it => rows.push([m.recipe.name, m.targetPieces, it.ingredient, it.scaledQty.toFixed(1), it.unit]));
        const csvContent = '\uFEFF' + rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${m.recipe.name}_${m.targetPieces}${m.recipe.yieldUnit}_配方表.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('已匯出 CSV');
      });
    }

    window.addEventListener('DOMContentLoaded', () => {
      bindEvents();
      syncInputsAndRenderCalculator();
      renderDailySchedulePlanner();
      renderClassicRecipesLibrary();
      initIngredientFilters();
      renderIngredientTable();
      renderPricingOverview();
    });
