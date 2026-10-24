// Jasmine's Bakery Studio — Dynamic Recipe Scaling & Cost Engine
// =========================================================================
    // 1. EMBEDDED SPREADSHEET DATASET (100% Grounded from Jasmine's Recipe)
    // =========================================================================
    const RAW_DATA = {"ingredients": [{"id": "ING-01", "category": "麵粉", "name": "T55法國麵粉", "packSize": 1500.0, "unit": "g", "packPrice": 95.0, "unitCost": 0.06333333333, "supplier": "旺來興", "note": "法國麵包、肉桂捲配方"}, {"id": "ING-02", "category": "麵粉", "name": "日本霓虹高筋麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 75.0, "unitCost": 0.075, "supplier": "蝦皮", "note": "麵包吐司"}, {"id": "ING-03", "category": "麵粉", "name": "鳥越製粉-哥摩(高筋)", "packSize": 1000.0, "unit": "g", "packPrice": 110.0, "unitCost": 0.11, "supplier": "裕軒", "note": "生吐司專用高筋粉"}, {"id": "ING-04", "category": "麵粉", "name": "水手牌低筋麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 85.0, "unitCost": 0.085, "supplier": "蝦皮", "note": "蛋糕、肉桂捲小麥粉"}, {"id": "ING-05", "category": "麵粉", "name": "水手牌高筋麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 85.0, "unitCost": 0.085, "supplier": "蝦皮", "note": "吐司麵包"}, {"id": "ING-06", "category": "麵粉", "name": "鑽石牌低筋麵粉", "packSize": 1000.0, "unit": "g", "packPrice": 100.0, "unitCost": 0.1, "supplier": "裕軒", "note": "瑪德蓮、費南雪"}, {"id": "ING-07", "category": "麵粉", "name": "統一麥典麵包專用粉", "packSize": 1000.0, "unit": "g", "packPrice": 105.0, "unitCost": 0.105, "supplier": "蝦皮", "note": "麵包吐司"}, {"id": "ING-08", "category": "麵粉", "name": "米森有機小麥粉", "packSize": 500.0, "unit": "g", "packPrice": 105.0, "unitCost": 0.21, "supplier": "全聯", "note": "全麥麵包、肉桂捲"}, {"id": "ING-09", "category": "麵粉", "name": "水手牌小麥粉", "packSize": 1000.0, "unit": "g", "packPrice": 80.0, "unitCost": 0.08, "supplier": "蝦皮", "note": "麥香麵包"}, {"id": "ING-10", "category": "奶油乳脂", "name": "燈塔牌無鹽奶油", "packSize": 500.0, "unit": "g", "packPrice": 230.0, "unitCost": 0.46, "supplier": "裕軒", "note": "經典發酵無鹽奶油"}, {"id": "ING-11", "category": "奶油乳脂", "name": "法國愛樂薇無鹽奶油", "packSize": 4000.0, "unit": "g", "packPrice": 2100.0, "unitCost": 0.525, "supplier": "蝦皮", "note": "頂級發酵奶油(費南雪)"}, {"id": "ING-12", "category": "奶油乳脂", "name": "威士寶無鹽奶油", "packSize": 454.0, "unit": "g", "packPrice": 140.0, "unitCost": 0.3083700441, "supplier": "烘焙樂", "note": "平價無鹽奶油"}, {"id": "ING-13", "category": "奶油乳脂", "name": "法國鐵塔牌動物性鮮奶油", "packSize": 1000.0, "unit": "ml", "packPrice": 270.0, "unitCost": 0.27, "supplier": "裕軒", "note": "生吐司動物性鮮奶油"}, {"id": "ING-14", "category": "奶油乳脂", "name": "法國愛樂薇動物性鮮奶油", "packSize": 1000.0, "unit": "ml", "packPrice": 270.0, "unitCost": 0.27, "supplier": "裕軒", "note": "烘焙鮮奶油"}, {"id": "ING-15", "category": "奶油乳脂", "name": "安佳鮮奶油乳酪", "packSize": 1000.0, "unit": "g", "packPrice": 269.0, "unitCost": 0.269, "supplier": "裕軒", "note": "奶油乳酪抹醬"}, {"id": "ING-16", "category": "糖類", "name": "台糖細砂", "packSize": 1000.0, "unit": "g", "packPrice": 38.0, "unitCost": 0.038, "supplier": "全聯/大賣場", "note": "基礎細砂糖"}, {"id": "ING-17", "category": "糖類", "name": "純手工黑糖", "packSize": 900.0, "unit": "g", "packPrice": 86.0, "unitCost": 0.09555555556, "supplier": "雜糧行", "note": "肉桂捲黑糖餡"}, {"id": "ING-18", "category": "糖類", "name": "品元珍珠糖", "packSize": 250.0, "unit": "g", "packPrice": 70.0, "unitCost": 0.28, "supplier": "烘焙行", "note": "鬆餅、表面裝飾"}, {"id": "ING-19", "category": "糖類", "name": "東洋上白糖", "packSize": 1000.0, "unit": "g", "packPrice": 96.0, "unitCost": 0.096, "supplier": "裕軒", "note": "日式上白糖"}, {"id": "ING-20", "category": "糖類", "name": "日本三溫糖", "packSize": 1000.0, "unit": "g", "packPrice": 90.0, "unitCost": 0.09, "supplier": "蝦皮", "note": "風味溫潤三溫糖"}, {"id": "ING-21", "category": "糖類", "name": "日本三井上白糖", "packSize": 1000.0, "unit": "g", "packPrice": 93.0, "unitCost": 0.093, "supplier": "蝦皮(柚子)", "note": "瑪德蓮、費南雪常用"}, {"id": "ING-22", "category": "糖類", "name": "日本三井白雙糖(粗顆粒)", "packSize": 1000.0, "unit": "g", "packPrice": 135.0, "unitCost": 0.135, "supplier": "蝦皮", "note": "粗顆粒結晶糖"}, {"id": "ING-23", "category": "糖類", "name": "小島製糖-糖粉", "packSize": 1000.0, "unit": "g", "packPrice": 95.0, "unitCost": 0.095, "supplier": "蝦皮", "note": "糖霜、磅蛋糕"}, {"id": "ING-24", "category": "發酵種麵", "name": "旺來興速發酵母", "packSize": 100.0, "unit": "g", "packPrice": 30.0, "unitCost": 0.3, "supplier": "旺來興", "note": "一般速發酵母"}, {"id": "ING-25", "category": "發酵種麵", "name": "燕子牌高糖酵母(金色包裝)", "packSize": 500.0, "unit": "g", "packPrice": 149.0, "unitCost": 0.298, "supplier": "蝦皮", "note": "甜麵包專用耐高糖酵母"}, {"id": "ING-26", "category": "發酵種麵", "name": "燕子牌低糖酵母(紅色包裝)", "packSize": 500.0, "unit": "g", "packPrice": 179.0, "unitCost": 0.358, "supplier": "蝦皮", "note": "低糖法式麵包酵母"}, {"id": "ING-27", "category": "發酵種麵", "name": "波蘭種", "packSize": 520.0, "unit": "g", "packPrice": 24.0, "unitCost": 0.04615384615, "supplier": "自製", "note": "哥摩高筋+水+酵母自製酵種"}, {"id": "ING-28", "category": "調味香料", "name": "喜馬拉雅岩鹽", "packSize": 400.0, "unit": "g", "packPrice": 72.0, "unitCost": 0.18, "supplier": "超市", "note": "純淨粉紅岩鹽"}, {"id": "ING-29", "category": "調味香料", "name": "喜馬拉雅玫瑰鹽", "packSize": 1000.0, "unit": "g", "packPrice": 200.0, "unitCost": 0.2, "supplier": "烘焙樂", "note": "細粒玫瑰鹽"}, {"id": "ING-30", "category": "調味香料", "name": "法國細海鹽", "packSize": 750.0, "unit": "g", "packPrice": 140.0, "unitCost": 0.1866666667, "supplier": "烘焙樂", "note": "法國海鹽"}, {"id": "ING-31", "category": "調味香料", "name": "日本GABAN頂級肉桂粉", "packSize": 100.0, "unit": "g", "packPrice": 180.0, "unitCost": 1.8, "supplier": "蝦皮(橙品)", "note": "肉桂捲主風味"}, {"id": "ING-32", "category": "調味香料", "name": "小磨坊肉桂粉", "packSize": 600.0, "unit": "g", "packPrice": 185.0, "unitCost": 0.3083333333, "supplier": "烘焙樂", "note": "常用肉桂粉"}, {"id": "ING-33", "category": "調味香料", "name": "小磨坊玉桂粉", "packSize": 1000.0, "unit": "g", "packPrice": 320.0, "unitCost": 0.32, "supplier": "十代", "note": "玉桂粉"}, {"id": "ING-34", "category": "調味香料", "name": "小磨坊豆蔻粉", "packSize": 1000.0, "unit": "g", "packPrice": 320.0, "unitCost": 0.32, "supplier": "烘焙行", "note": "提味香料"}, {"id": "ING-35", "category": "調味香料", "name": "小香草莢醬", "packSize": 130.0, "unit": "g", "packPrice": 230.0, "unitCost": 1.769230769, "supplier": "烘焙樂", "note": "頂級天然香草籽醬"}, {"id": "ING-36", "category": "調味香料", "name": "德國香草醬", "packSize": 130.0, "unit": "g", "packPrice": 250.0, "unitCost": 1.923076923, "supplier": "蝦皮", "note": "天然香草醬"}, {"id": "ING-37", "category": "調味香料", "name": "龍眼蜂蜜", "packSize": 1200.0, "unit": "g", "packPrice": 400.0, "unitCost": 0.3333333333, "supplier": "蜂農直營", "note": "瑪德蓮、費南雪提味"}, {"id": "ING-38", "category": "調味香料", "name": "老船長蘭姆酒", "packSize": 350.0, "unit": "ml", "packPrice": 150.0, "unitCost": 0.4285714286, "supplier": "裕軒", "note": "甜點調味蘭姆酒"}, {"id": "ING-39", "category": "調味香料", "name": "Bacardi蘭姆酒", "packSize": 1000.0, "unit": "ml", "packPrice": 450.0, "unitCost": 0.45, "supplier": "Costco", "note": "百加得白蘭姆酒"}, {"id": "ING-40", "category": "乳品蛋水", "name": "蛋", "packSize": 675.0, "unit": "g", "packPrice": 160.0, "unitCost": 0.237037037, "supplier": "全聯", "note": "新鮮雞蛋(一顆約50~60g)"}, {"id": "ING-41", "category": "乳品蛋水", "name": "高大鮮奶", "packSize": 936.0, "unit": "ml", "packPrice": 105.0, "unitCost": 0.1121794872, "supplier": "全聯", "note": "高乳脂優質鮮乳"}, {"id": "ING-42", "category": "乳品蛋水", "name": "瑞穗鮮奶", "packSize": 930.0, "unit": "ml", "packPrice": 91.0, "unitCost": 0.09784946237, "supplier": "超市", "note": "鮮乳"}, {"id": "ING-43", "category": "乳品蛋水", "name": "鷹牌煉乳", "packSize": 450.0, "unit": "g", "packPrice": 144.0, "unitCost": 0.32, "supplier": "Coupang", "note": "生吐司保濕提味"}, {"id": "ING-44", "category": "乳品蛋水", "name": "冷水", "packSize": 1000.0, "unit": "ml", "packPrice": 0.0, "unitCost": 0.0, "supplier": "自來水過濾", "note": "過濾水"}, {"id": "ING-45", "category": "蔬果堅果", "name": "檸檬皮", "packSize": 1.0, "unit": "顆", "packPrice": 15.0, "unitCost": 15.0, "supplier": "全聯", "note": "新鮮無毒檸檬(刨皮)"}, {"id": "ING-46", "category": "蔬果堅果", "name": "檸檬角", "packSize": 250.0, "unit": "g", "packPrice": 135.0, "unitCost": 0.54, "supplier": "全聯", "note": "鮮榨檸檬汁"}, {"id": "ING-47", "category": "蔬果堅果", "name": "蘋果", "packSize": 867.0, "unit": "g", "packPrice": 130.0, "unitCost": 0.1499423299, "supplier": "全聯", "note": "富士蘋果(肉桂捲內餡)"}, {"id": "ING-48", "category": "蔬果堅果", "name": "美國藍鑽杏仁粉", "packSize": 600.0, "unit": "g", "packPrice": 295.0, "unitCost": 0.4916666667, "supplier": "蝦皮(柚子)", "note": "馬卡龍、費南雪、瑪德蓮"}, {"id": "ING-49", "category": "蔬果堅果", "name": "美國生核桃", "packSize": 450.0, "unit": "g", "packPrice": 230.0, "unitCost": 0.5111111111, "supplier": "蝦皮(柚子)", "note": "堅果烘烤提香"}, {"id": "ING-50", "category": "蔬果堅果", "name": "法國Cocao Barry防潮可可粉", "packSize": 1000.0, "unit": "g", "packPrice": 710.0, "unitCost": 0.71, "supplier": "蝦皮(柚子)", "note": "頂級純可可粉"}, {"id": "ING-51", "category": "蔬果堅果", "name": "烤不爆原味麻糬", "packSize": 1000.0, "unit": "g", "packPrice": 172.0, "unitCost": 0.172, "supplier": "蝦皮(柚子)", "note": "麻糬內餡夾心"}, {"id": "ING-52", "category": "蔬果堅果", "name": "舞間茶心(伯爵紅茶粉)", "packSize": 300.0, "unit": "g", "packPrice": 800.0, "unitCost": 2.666666667, "supplier": "蝦皮(舞間茶心)", "note": "伯爵茶點心"}, {"id": "ING-53", "category": "蔬果堅果", "name": "舞間茶心(焙茶粉)", "packSize": 300.0, "unit": "g", "packPrice": 1000.0, "unitCost": 3.333333333, "supplier": "蝦皮(舞間茶心)", "note": "日式焙茶點心"}, {"id": "ING-54", "category": "膨脹輔料", "name": "無鋁泡打粉", "packSize": 80.0, "unit": "g", "packPrice": 95.0, "unitCost": 1.1875, "supplier": "蝦皮(橙品)", "note": "蛋糕膨脹輔料"}, {"id": "ING-55", "category": "包裝耗材", "name": "生吐司包裝袋與提袋", "packSize": 1.0, "unit": "入", "packPrice": 20.0, "unitCost": 20.0, "supplier": "包材行", "note": "吐司專用袋/單入"}, {"id": "ING-56", "category": "包裝耗材", "name": "肉桂捲外帶紙盒", "packSize": 1.0, "unit": "入", "packPrice": 5.0, "unitCost": 5.0, "supplier": "包材行", "note": "肉桂捲專用盒/單入"}, {"id": "ING-57", "category": "包裝耗材", "name": "磅蛋糕長型禮盒", "packSize": 1.0, "unit": "入", "packPrice": 6.25, "unitCost": 6.25, "supplier": "包材行", "note": "磅蛋糕硬盒包裝/單入"}, {"id": "ING-58", "category": "包裝耗材", "name": "瑪德蓮自黏袋與小盒", "packSize": 1.0, "unit": "入", "packPrice": 3.57, "unitCost": 3.57, "supplier": "包材行", "note": "單顆密封袋/小提盒"}, {"id": "ING-59", "category": "包裝耗材", "name": "費南雪封口袋與包裝", "packSize": 1.0, "unit": "入", "packPrice": 8.33, "unitCost": 8.33, "supplier": "包材行", "note": "封口透明袋與外盒"}], "recipes": [{"id": "RCP-01", "name": "生吐司", "baseYield": 8.0, "yieldUnit": "條", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 1893.0, "unit": "g", "unitCost": 0.11, "subtotal": 208.23, "stage": "主麵團高筋粉"}, {"ingredient": "法國鐵塔牌動物性鮮奶油", "baseQty": 307.0, "unit": "g", "unitCost": 0.27, "subtotal": 82.89, "stage": "主麵團乳脂"}, {"ingredient": "燈塔牌無鹽奶油", "baseQty": 152.0, "unit": "g", "unitCost": 0.46, "subtotal": 69.92, "stage": "主麵團後放奶油"}, {"ingredient": "鷹牌煉乳", "baseQty": 189.0, "unit": "g", "unitCost": 0.32, "subtotal": 60.48, "stage": "主麵團保濕增香"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 29.0, "unit": "g", "unitCost": 0.298, "subtotal": 8.642, "stage": "發酵種"}, {"ingredient": "高大鮮奶", "baseQty": 373.0, "unit": "g", "unitCost": 0.1121794872, "subtotal": 41.84294872, "stage": "主麵團液體"}, {"ingredient": "台糖細砂", "baseQty": 267.0, "unit": "g", "unitCost": 0.038, "subtotal": 10.146, "stage": "主麵團糖量"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 29.0, "unit": "g", "unitCost": 0.18, "subtotal": 5.22, "stage": "調味強化麵筋"}, {"ingredient": "波蘭種", "baseQty": 520.0, "unit": "g", "unitCost": 0.04615384615, "subtotal": 24.0, "stage": "隔夜低溫酵種"}, {"ingredient": "冷水", "baseQty": 667.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "主麵團水分"}]}, {"id": "RCP-02", "name": "肉桂捲", "baseYield": 7.0, "yieldUnit": "顆", "items": [{"ingredient": "T55法國麵粉", "baseQty": 330.0, "unit": "g", "unitCost": 0.06333333333, "subtotal": 20.9, "stage": "肉桂捲主麵團"}, {"ingredient": "水手牌低筋麵粉", "baseQty": 20.0, "unit": "g", "unitCost": 0.085, "subtotal": 1.7, "stage": "肉桂捲主麵團"}, {"ingredient": "高大鮮奶", "baseQty": 230.0, "unit": "g", "unitCost": 0.1121794872, "subtotal": 25.80128205, "stage": "肉桂捲主麵團"}, {"ingredient": "台糖細砂", "baseQty": 50.0, "unit": "g", "unitCost": 0.038, "subtotal": 1.9, "stage": "肉桂捲主麵團"}, {"ingredient": "燈塔牌無鹽奶油", "baseQty": 40.0, "unit": "g", "unitCost": 0.46, "subtotal": 18.4, "stage": "肉桂捲主麵團"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 4.5, "unit": "g", "unitCost": 0.18, "subtotal": 0.81, "stage": "肉桂捲主麵團"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 4.0, "unit": "g", "unitCost": 0.298, "subtotal": 1.192, "stage": "肉桂捲主麵團"}, {"ingredient": "燈塔牌無鹽奶油", "baseQty": 15.0, "unit": "g", "unitCost": 0.46, "subtotal": 6.9, "stage": "肉桂黑糖抹醬"}, {"ingredient": "日本GABAN頂級肉桂粉", "baseQty": 10.0, "unit": "g", "unitCost": 1.8, "subtotal": 18.0, "stage": "肉桂黑糖抹醬"}, {"ingredient": "純手工黑糖", "baseQty": 80.0, "unit": "g", "unitCost": 0.09555555556, "subtotal": 7.644444444, "stage": "肉桂黑糖抹醬"}, {"ingredient": "小磨坊豆蔻粉", "baseQty": 2.0, "unit": "g", "unitCost": 0.32, "subtotal": 0.64, "stage": "肉桂黑糖抹醬"}, {"ingredient": "冷水", "baseQty": 10.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "肉桂黑糖抹醬"}, {"ingredient": "蘋果", "baseQty": 650.0, "unit": "g", "unitCost": 0.1499423299, "subtotal": 97.46251442, "stage": "焦糖蘋果餡"}, {"ingredient": "台糖細砂", "baseQty": 104.0, "unit": "g", "unitCost": 0.038, "subtotal": 3.952, "stage": "焦糖蘋果餡"}, {"ingredient": "龍眼蜂蜜", "baseQty": 39.0, "unit": "g", "unitCost": 0.3333333333, "subtotal": 13.0, "stage": "焦糖蘋果餡"}, {"ingredient": "檸檬皮", "baseQty": 33.0, "unit": "g", "unitCost": 15.0, "subtotal": 495.0, "stage": "焦糖蘋果餡"}, {"ingredient": "燈塔牌無鹽奶油", "baseQty": 39.0, "unit": "g", "unitCost": 0.46, "subtotal": 17.94, "stage": "焦糖蘋果餡"}, {"ingredient": "老船長蘭姆酒", "baseQty": 13.0, "unit": "g", "unitCost": 0.4285714286, "subtotal": 5.571428571, "stage": "焦糖蘋果餡"}, {"ingredient": "日本GABAN頂級肉桂粉", "baseQty": 1.5, "unit": "g", "unitCost": 1.8, "subtotal": 2.7, "stage": "焦糖蘋果餡"}]}, {"id": "RCP-03", "name": "檸檬磅蛋糕", "baseYield": 2.0, "yieldUnit": "條", "items": [{"ingredient": "燈塔牌無鹽奶油", "baseQty": 300.0, "unit": "g", "unitCost": 0.46, "subtotal": 138.0, "stage": "蛋糕本體"}, {"ingredient": "小島製糖-糖粉", "baseQty": 260.0, "unit": "g", "unitCost": 0.095, "subtotal": 24.7, "stage": "蛋糕本體"}, {"ingredient": "水手牌低筋麵粉", "baseQty": 300.0, "unit": "g", "unitCost": 0.085, "subtotal": 25.5, "stage": "蛋糕本體"}, {"ingredient": "無鋁泡打粉", "baseQty": 6.0, "unit": "g", "unitCost": 1.1875, "subtotal": 7.125, "stage": "蛋糕本體"}, {"ingredient": "蛋", "baseQty": 260.0, "unit": "g", "unitCost": 0.237037037, "subtotal": 61.62962963, "stage": "蛋糕本體"}, {"ingredient": "喜馬拉雅岩鹽", "baseQty": 3.0, "unit": "g", "unitCost": 0.18, "subtotal": 0.54, "stage": "蛋糕本體"}, {"ingredient": "台糖細砂", "baseQty": 4.0, "unit": "g", "unitCost": 0.038, "subtotal": 0.152, "stage": "檸檬皮糖漬"}, {"ingredient": "檸檬皮", "baseQty": 2.0, "unit": "顆", "unitCost": 15.0, "subtotal": 30.0, "stage": "檸檬皮糖漬"}, {"ingredient": "檸檬角", "baseQty": 60.0, "unit": "g", "unitCost": 0.54, "subtotal": 32.4, "stage": "蛋糕本體鮮檸汁"}, {"ingredient": "台糖細砂", "baseQty": 30.0, "unit": "g", "unitCost": 0.038, "subtotal": 1.14, "stage": "出爐刷面檸檬糖水"}, {"ingredient": "老船長蘭姆酒", "baseQty": 40.0, "unit": "g", "unitCost": 0.4285714286, "subtotal": 17.14285714, "stage": "出爐刷面檸檬糖水"}, {"ingredient": "檸檬角", "baseQty": 50.0, "unit": "g", "unitCost": 0.54, "subtotal": 27.0, "stage": "出爐刷面檸檬糖水"}, {"ingredient": "檸檬角", "baseQty": 40.0, "unit": "g", "unitCost": 0.54, "subtotal": 21.6, "stage": "頂層檸檬糖霜"}, {"ingredient": "小島製糖-糖粉", "baseQty": 200.0, "unit": "g", "unitCost": 0.095, "subtotal": 19.0, "stage": "頂層檸檬糖霜"}, {"ingredient": "冷水", "baseQty": 50.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "頂層檸檬糖霜調勻"}]}, {"id": "RCP-04", "name": "瑪德蓮", "baseYield": 14.0, "yieldUnit": "顆", "items": [{"ingredient": "燈塔牌無鹽奶油", "baseQty": 62.0, "unit": "g", "unitCost": 0.46, "subtotal": 28.52, "stage": "融化奶油"}, {"ingredient": "瑞穗鮮奶", "baseQty": 33.0, "unit": "g", "unitCost": 0.09784946237, "subtotal": 3.229032258, "stage": "麵糊液體"}, {"ingredient": "鑽石牌低筋麵粉", "baseQty": 53.0, "unit": "g", "unitCost": 0.1, "subtotal": 5.3, "stage": "粉類過篩"}, {"ingredient": "無鋁泡打粉", "baseQty": 0.4, "unit": "g", "unitCost": 1.1875, "subtotal": 0.475, "stage": "粉類過篩"}, {"ingredient": "蛋", "baseQty": 300.0, "unit": "g", "unitCost": 0.237037037, "subtotal": 71.11111111, "stage": "全蛋液"}, {"ingredient": "龍眼蜂蜜", "baseQty": 16.0, "unit": "g", "unitCost": 0.3333333333, "subtotal": 5.333333333, "stage": "風味保濕"}, {"ingredient": "日本三井上白糖", "baseQty": 130.0, "unit": "g", "unitCost": 0.093, "subtotal": 12.09, "stage": "主甜度"}, {"ingredient": "美國藍鑽杏仁粉", "baseQty": 80.0, "unit": "g", "unitCost": 0.4916666667, "subtotal": 39.33333333, "stage": "堅果香氣"}, {"ingredient": "法國Cocao Barry防潮可可粉", "baseQty": 17.0, "unit": "g", "unitCost": 0.71, "subtotal": 12.07, "stage": "巧克力風味調色"}]}, {"id": "RCP-05", "name": "費南雪", "baseYield": 6.0, "yieldUnit": "顆", "items": [{"ingredient": "法國愛樂薇無鹽奶油", "baseQty": 50.0, "unit": "g", "unitCost": 0.525, "subtotal": 26.25, "stage": "焦化榛果奶油(Noisette)"}, {"ingredient": "鑽石牌低筋麵粉", "baseQty": 20.0, "unit": "g", "unitCost": 0.1, "subtotal": 2.0, "stage": "粉類過篩"}, {"ingredient": "無鋁泡打粉", "baseQty": 0.5, "unit": "g", "unitCost": 1.1875, "subtotal": 0.59375, "stage": "粉類過篩"}, {"ingredient": "蛋", "baseQty": 100.0, "unit": "g", "unitCost": 0.237037037, "subtotal": 23.7037037, "stage": "純蛋白液"}, {"ingredient": "龍眼蜂蜜", "baseQty": 6.0, "unit": "g", "unitCost": 0.3333333333, "subtotal": 2.0, "stage": "提香保濕"}, {"ingredient": "日本三井上白糖", "baseQty": 63.0, "unit": "g", "unitCost": 0.093, "subtotal": 5.859, "stage": "主甜度"}, {"ingredient": "美國藍鑽杏仁粉", "baseQty": 30.0, "unit": "g", "unitCost": 0.4916666667, "subtotal": 14.75, "stage": "杏仁香氣主料"}, {"ingredient": "美國生核桃", "baseQty": 10.0, "unit": "g", "unitCost": 0.5111111111, "subtotal": 5.111111111, "stage": "表面裝飾烘烤碎核桃"}]}, {"id": "RCP-06", "name": "波蘭種", "baseYield": 1.0, "yieldUnit": "份", "items": [{"ingredient": "鳥越製粉-哥摩(高筋)", "baseQty": 260.0, "unit": "g", "unitCost": 0.11, "subtotal": 28.6, "stage": "酵種高筋麵粉"}, {"ingredient": "冷水", "baseQty": 260.0, "unit": "g", "unitCost": 0.0, "subtotal": 0.0, "stage": "酵種水分"}, {"ingredient": "燕子牌高糖酵母(金色包裝)", "baseQty": 1.0, "unit": "g", "unitCost": 0.298, "subtotal": 0.298, "stage": "起始發酵低溫冷藏發酵"}]}], "costOverview": [{"name": "生吐司", "baseYield": 8.0, "unitFoodCost": 63.92136859, "unitPackCost": 20.0, "unitLaborCost": 20.335, "unitUtilityCost": 0.51875, "unitTotalCost": 104.7751186, "unitPrice": 240.0, "unitProfit": 135.2248814, "margin": 0.5634370059, "advice": "高單價主力品項，獲利結構優良"}, {"name": "肉桂捲", "baseYield": 7.0, "unitFoodCost": 105.6448099, "unitPackCost": 5.0, "unitLaborCost": 93.24, "unitUtilityCost": 2.378571429, "unitTotalCost": 206.2633814, "unitPrice": 150.0, "unitProfit": -56.26338135, "margin": -0.375089209, "advice": "⚠️ 單批工時長導致毛利偏低，建議擴產至14顆攤提工時或調價至 $190+"}, {"name": "檸檬磅蛋糕", "baseYield": 2.0, "unitFoodCost": 202.9647434, "unitPackCost": 6.25, "unitLaborCost": 147.0, "unitUtilityCost": 3.75, "unitTotalCost": 359.9647434, "unitPrice": 520.0, "unitProfit": 160.0352566, "margin": 0.3077601089, "advice": "節慶整條送禮首選，客單價高，可搭配切片單售提升銷量"}, {"name": "瑪德蓮", "baseYield": 14.0, "unitFoodCost": 12.67584357, "unitPackCost": 3.57, "unitLaborCost": 8.12, "unitUtilityCost": 0.2071428571, "unitTotalCost": 24.57298643, "unitPrice": 70.0, "unitProfit": 45.42701357, "margin": 0.6489573367, "advice": "⭐ 高毛利常溫點心，製作效率高，具優良長銷潛力"}, {"name": "費南雪", "baseYield": 6.0, "unitFoodCost": 13.37792747, "unitPackCost": 8.33, "unitLaborCost": 32.66666667, "unitUtilityCost": 0.8333333333, "unitTotalCost": 55.20792747, "unitPrice": 70.0, "unitProfit": 14.79207253, "margin": 0.2113153219, "advice": "焦化榛果奶油風味獨特，建議單批擴大至12顆以攤提工時"}]};

    // Additional Metadata per Recipe (from 動態配方計算器, 生吐司/肉桂捲/... sheets, and 成本與定價總覽)
    const RECIPE_META = {
      "RCP-01": {
        emoji: "🍞",
        subtitle: "鳥越哥摩高筋 × 法國鐵塔鮮奶油 × 隔夜波蘭種",
        panSpec: "450g 12兩吐司模 (模196×106×109mm / 蓋213×120×13mm)",
        laborHours: 0.83,
        packCostUnit: 20.0,
        sellingPriceUnit: 240.0,
        keyFlour: "鳥越製粉-哥摩(高筋)",
        keyButter: "燈塔牌無鹽奶油",
        keyCream: "法國鐵塔牌動物性鮮奶油",
        advice: "高單價主力品項，獲利結構優良"
      },
      "RCP-02": {
        emoji: "innamon",
        displayEmoji: "🌀",
        subtitle: "T55法國麵粉 × 日本GABAN肉桂 × 焦糖富士蘋果餡",
        panSpec: "單批基準 7 顆外帶盒裝",
        laborHours: 3.33,
        packCostUnit: 5.0,
        sellingPriceUnit: 150.0,
        keyFlour: "T55法國麵粉",
        keyButter: "燈塔牌無鹽奶油",
        advice: "⚠️ 單批工時長導致毛利偏低，建議擴產至14顆攤提工時或調價至 $190+"
      },
      "RCP-03": {
        emoji: "🍋",
        subtitle: "燈塔發酵奶油 × 鮮榨檸檬汁 × 老船長蘭姆酒糖霜",
        panSpec: "磅蛋糕長型禮盒裝 (基準 1 份做 2 條)",
        laborHours: 1.50,
        packCostUnit: 6.25,
        sellingPriceUnit: 520.0,
        keyFlour: "水手牌低筋麵粉",
        keyButter: "燈塔牌無鹽奶油",
        advice: "節慶整條送禮首選，客單價高，可搭配切片單售提升銷量"
      },
      "RCP-04": {
        emoji: "🐚",
        subtitle: "鑽石低筋 × 藍鑽杏仁粉 × 法國Cacao Barry可可",
        panSpec: "經典貝殼模 (基準 1 份做 14 顆)",
        laborHours: 0.58,
        packCostUnit: 3.57,
        sellingPriceUnit: 70.0,
        keyFlour: "鑽石牌低筋麵粉",
        keyButter: "燈塔牌無鹽奶油",
        advice: "⭐ 高毛利常溫點心，製作效率高，具優良長銷潛力"
      },
      "RCP-05": {
        emoji: "🧈",
        subtitle: "法國愛樂薇焦化榛果奶油 × 藍鑽杏仁粉 × 烘烤核桃",
        panSpec: "金磚模封口袋裝 (基準 1 份做 6 顆)",
        laborHours: 1.00,
        packCostUnit: 8.33,
        sellingPriceUnit: 70.0,
        keyFlour: "鑽石牌低筋麵粉",
        keyButter: "法國愛樂薇無鹽奶油",
        advice: "焦化榛果奶油風味獨特，建議單批擴大至12顆以攤提工時"
      },
      "RCP-06": {
        emoji: "🫧",
        subtitle: "鳥越哥摩高筋 260g + 冷水 260g + 高糖酵母 1g",
        panSpec: "生吐司專用隔夜低溫冷藏發酵種 (1份約 521g)",
        laborHours: 0.50,
        packCostUnit: 0.0,
        sellingPriceUnit: 0.0,
        keyFlour: "鳥越製粉-哥摩(高筋)",
        keyButter: "冷水",
        advice: "自製隔夜低溫酵種，提供生吐司極致保濕與麥香"
      }
    };

    const HOURLY_WAGE = 196; // 時薪 $196
    const HOURLY_UTILITY = 5; // 電費 $5/hr

    // =========================================================================
    // 2. APPLICATION STATE
    // =========================================================================
    const PASSCODE = '0410';
    const state = {
      activeTab: 'calculator',
      isUnlocked: false,       // 後三個分頁密碼鎖狀態 (密碼: 0410)
      pendingTab: null,        // 等待密碼解鎖後切換的分頁
      selectedRecipeId: 'RCP-01',
      targetPieces: 8,         // 本次欲製作麵包數量 (以整數進位)
      targetBatches: 1.0,      // 配方縮放倍率 (份數)
      weightUnit: 'g',         // 'g' | 'kg' | 'oz'
      selectedStage: 'ALL',
      checkedItems: {},        // key: `${recipeId}_${idx}` -> boolean
      fixCinnamonLemon: false, // 切換肉桂捲檸檬皮($15/顆) vs 檸檬角汁($0.54/g)
      kitchenMode: false,
      // Ingredient Database Filters & Custom Price Overrides
      ingCategory: 'ALL',
      ingSupplier: 'ALL',
      ingSearch: '',
      customPackPrices: {},    // key: ingredient name -> packPrice
      // Daily Production Schedule (Default from Jasmine - Table 1)
      scheduleCounts: {
        'RCP-02': 7,  // 肉桂捲 7
        'RCP-01': 2,  // 生吐司 2
        'RCP-03': 8,  // 檸檬磅蛋糕 8
        'RCP-04': 14, // 瑪德蓮 14
        'RCP-05': 6   // 費南雪 6
      },
      // Pricing Overview Simulator Overrides
      pricingSim: {
        '生吐司': { batchYield: 8, price: 240 },
        '肉桂捲': { batchYield: 7, price: 150 },
        '檸檬磅蛋糕': { batchYield: 2, price: 520 },
        '瑪德蓮': { batchYield: 14, price: 70 },
        '費南雪': { batchYield: 6, price: 70 }
      }
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
      // Special check for Cinnamon Roll lemon zest/juice toggle
      const ingObj = RAW_DATA.ingredients.find(i => i.name === ingName);
      if (!ingObj) return 0;
      const packPrice = (state.customPackPrices[ingName] !== undefined)
        ? state.customPackPrices[ingName]
        : ingObj.packPrice;
      const unitCost = ingObj.packSize > 0 ? (packPrice / ingObj.packSize) : 0;

      // If ingredient is 波蘭種, we keep spreadsheet unit cost unless ingredients inside changed
      return unitCost;
    }

    function getRecipeById(rcpId) {
      return RAW_DATA.recipes.find(r => r.id === rcpId);
    }

    function formatWeight(grams, originalUnit = 'g') {
      if (originalUnit !== 'g' && originalUnit !== 'ml') {
        // e.g. 顆
        return `${Number(grams.toFixed(2))} ${originalUnit}`;
      }
      if (state.weightUnit === 'kg') {
        return `${(grams / 1000).toFixed(3)} kg`;
      } else if (state.weightUnit === 'oz') {
        return `${(grams / 28.3495231).toFixed(2)} oz`;
      }
      // default g
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

    // Calculate total flour weight in a recipe for Baker's Percentage (烘焙百分比)
    function getRecipeBaseFlourWeight(recipe) {
      let flourSum = 0;
      recipe.items.forEach(item => {
        if (item.ingredient.includes('麵粉') || item.ingredient.includes('小麥粉')) {
          flourSum += item.baseQty;
        }
      });
      if (flourSum === 0) {
        // Fallback to total weight if no flour
        flourSum = recipe.items.reduce((acc, cur) => acc + cur.baseQty, 0);
      }
      return flourSum;
    }

    // Calculate dynamic recipe metrics for any recipe & targetPieces
    function calculateRecipeMetrics(recipeId, targetPieces) {
      const recipe = getRecipeById(recipeId);
      const meta = RECIPE_META[recipeId];
      const scale = recipe.baseYield > 0 ? (targetPieces / recipe.baseYield) : 1;
      const baseFlour = getRecipeBaseFlourWeight(recipe);

      let totalWeightG = 0;
      let totalFoodCost = 0;

      const scaledItems = recipe.items.map((item, idx) => {
        const scaledQty = item.baseQty * scale;
        if (item.unit === 'g' || item.unit === 'ml') {
          totalWeightG += scaledQty;
        }
        let unitCost = getIngredientUnitCost(item.ingredient);
        let displayIngName = item.ingredient;
        if (recipeId === 'RCP-02' && item.ingredient === '檸檬皮' && state.fixCinnamonLemon) {
          unitCost = getIngredientUnitCost('檸檬角'); // $0.54/g
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
    // 4. RENDERING FUNCTIONS — TAB 1: DYNAMIC RECIPE CALCULATOR
    // =========================================================================
    function renderRecipeSelectorCards() {
      const container = document.getElementById('recipeSelectorGrid');
      container.innerHTML = '';

      RAW_DATA.recipes.forEach(rcp => {
        const meta = RECIPE_META[rcp.id];
        const isSelected = rcp.id === state.selectedRecipeId;
        const emoji = meta.displayEmoji || meta.emoji;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `card-interactive text-left rounded-3xl p-4 sm:p-5 transition-all flex flex-col justify-between min-h-[138px] sm:min-h-[152px] ${
          isSelected
            ? 'bg-gradient-to-br from-amber-500/30 via-amber-500/15 to-transparent border-2 border-amber-400 shadow-xl shadow-amber-500/20 scale-[1.01]'
            : 'apple-glass-subtle hover:border-white/25'
        }`;

        btn.innerHTML = `
          <div class="flex items-center justify-between w-full">
            <span class="text-3xl sm:text-4xl">${emoji}</span>
            <span class="text-xs font-mono px-2.5 py-1 rounded-full ${
              isSelected ? 'bg-amber-400 text-black font-extrabold' : 'bg-white/10 text-zinc-300'
            }">${rcp.id}</span>
          </div>
          <div class="mt-3">
            <div class="font-extrabold text-lg sm:text-xl text-white tracking-tight">${rcp.name}</div>
            <div class="text-xs sm:text-sm text-zinc-300 mt-1">
              1 份基準：<strong class="text-amber-300 font-mono font-bold">${rcp.baseYield} ${rcp.yieldUnit}</strong>
            </div>
          </div>
          <div class="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
            <span>共 ${rcp.items.length} 項原料</span>
            <span class="text-amber-300/90 font-semibold">${isSelected ? '● 已選中' : '點擊選擇 →'}</span>
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

      // Multipliers: 0.5x, 1x (Base), 1.5x, 2x, 3x, 4x — pieces rounded up to integer (Math.ceil)
      const multipliers = base === 1 ? [1, 2, 3, 4, 5, 6] : [0.5, 1, 1.5, 2, 3, 4];
      multipliers.forEach(mult => {
        const pieces = Math.max(1, Math.ceil(base * mult));
        const actualBatches = pieces / base;
        const isActive = state.targetPieces === pieces;
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = `px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
          isActive
            ? 'bg-amber-400 text-black font-extrabold shadow-md shadow-amber-500/20'
            : 'apple-glass-pill text-zinc-200 hover:text-white'
        }`;
        chip.textContent = pieces === base
          ? `1 份基準 (${pieces}${unit})`
          : `${pieces} ${unit} (${Number(actualBatches.toFixed(2))}份)`;

        chip.addEventListener('click', () => {
          state.targetPieces = pieces;
          state.targetBatches = pieces / base;
          syncInputsAndRenderCalculator();
        });
        container.appendChild(chip);
      });
    }

    function renderReverseScaleDropdown(metrics) {
      const select = document.getElementById('reverseIngSelect');
      const prevVal = select.value;
      select.innerHTML = '';
      metrics.scaledItems.forEach((item, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = `${item.ingredient} (1份基準: ${item.baseQty}${item.unit})`;
        select.appendChild(opt);
      });
      if (prevVal && select.options[prevVal]) {
        select.value = prevVal;
      }
    }

    function renderCalculator() {
      const metrics = calculateRecipeMetrics(state.selectedRecipeId, state.targetPieces);
      const { recipe, meta, scale, scaledItems } = metrics;

      // Update Hero active summary
      document.getElementById('heroActiveSummary').textContent =
        `${recipe.name} ${Math.round(state.targetPieces)} ${recipe.yieldUnit} (${Number(scale.toFixed(2))}份)`;
      const batchTargetLbl = document.getElementById('pricingBatchTargetLabel');
      if (batchTargetLbl) {
        batchTargetLbl.textContent = `目前核算目標：${recipe.name} × ${Math.round(state.targetPieces)} ${recipe.yieldUnit} (${Number(scale.toFixed(2))} 份)`;
      }

      // Update Left Header
      document.getElementById('calcRecipeTitle').textContent = `${meta.displayEmoji || meta.emoji} ${recipe.name}`;
      document.getElementById('calcRecipeMeta').textContent =
        `試算表基準：1 份可做 ${recipe.baseYield} ${recipe.yieldUnit} • ${meta.panSpec}`;
      document.getElementById('calcScaleBadge').textContent = `${Number(scale.toFixed(2))} 份 (${Number(scale.toFixed(2))}x)`;
      document.getElementById('targetPiecesUnitLabel').textContent = `單位：${recipe.yieldUnit}`;
      document.getElementById('baseYieldHint').innerHTML =
        `試算表 1 份基準產量：<strong class="text-amber-300 font-bold">${recipe.baseYield} ${recipe.yieldUnit}</strong>`;

      // Update Slider max & text (always step=1 integer)
      const slider = document.getElementById('piecesSlider');
      const maxSlider = Math.max(Math.round(recipe.baseYield * 5), 20);
      slider.max = maxSlider;
      slider.step = 1;
      slider.value = Math.min(Math.round(state.targetPieces), maxSlider);
      document.getElementById('sliderValueText').textContent =
        `目前：${Math.round(state.targetPieces)} ${recipe.yieldUnit} (${Number(scale.toFixed(2))} 份)`;

      renderQuickPresets(recipe);
      renderReverseScaleDropdown(metrics);

      // Render Key Flour & Butter Cards (回應：在奶油麵粉會有指定克數，按比例提供原料克數)
      const keyContainer = document.getElementById('keyFlourButterCards');
      keyContainer.innerHTML = '';

      // Find all flour & butter/cream items in this recipe to highlight prominently
      const keyItems = scaledItems.filter(it =>
        it.rawIngredient.includes('麵粉') ||
        it.rawIngredient.includes('奶油') ||
        it.rawIngredient.includes('杏仁粉') ||
        it.rawIngredient.includes('波蘭種')
      ).slice(0, 4);

      keyItems.forEach(kItem => {
        const isButter = kItem.rawIngredient.includes('奶油');
        const card = document.createElement('div');
        card.className = 'p-3.5 sm:p-4 rounded-2xl bg-black/50 border border-white/15 flex flex-col justify-between';
        card.innerHTML = `
          <div class="flex items-center justify-between text-xs text-zinc-300 font-medium">
            <span class="truncate pr-1">${isButter ? '🧈' : '🌾'} ${kItem.ingredient}</span>
            <span class="text-[11px] text-zinc-400 shrink-0">${kItem.stage}</span>
          </div>
          <div class="mt-1.5 flex items-baseline justify-between">
            <span class="text-xl sm:text-2xl font-extrabold font-mono ${isButter ? 'text-amber-300' : 'text-white'}">
              ${formatWeight(kItem.scaledQty, kItem.unit)}
            </span>
            <span class="text-xs text-zinc-400 font-mono">1份: ${kItem.baseQty}${kItem.unit}</span>
          </div>
        `;
        keyContainer.appendChild(card);
      });

      // Show/Hide Cinnamon Roll Lemon Notice
      const lemonBox = document.getElementById('cinnamonLemonNotice');
      if (state.selectedRecipeId === 'RCP-02') {
        lemonBox.classList.remove('hidden');
      } else {
        lemonBox.classList.add('hidden');
      }

      // Update Financial Cards
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
      profitEl.className = `text-xl font-extrabold font-mono mt-0.5 ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`;
      marginEl.textContent = `預估毛利率：${metrics.marginPct.toFixed(1)}% (單${recipe.yieldUnit}毛利 ${formatCurrency(metrics.unitProfit, 1)})`;
      marginEl.className = `text-[11px] mt-0.5 ${isPositive ? 'text-emerald-300' : 'text-rose-300'}`;

      // Cost Breakdown Table Body
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

      // Right Column: Total Dough Weight Badge
      document.getElementById('totalDoughWeightBadge').textContent =
        `本批總重 ${formatWeight(metrics.totalWeightG, 'g')}`;

      // Poolish Sub-Recipe Expander (Shown for RCP-01 生吐司)
      const poolishBox = document.getElementById('poolishHelperBox');
      if (state.selectedRecipeId === 'RCP-01') {
        poolishBox.classList.remove('hidden');
        const poolishItem = scaledItems.find(i => i.rawIngredient === '波蘭種');
        const poolishGrams = poolishItem ? poolishItem.scaledQty : 520 * scale;
        document.getElementById('poolishTargetTotal').textContent = `本批需波蘭種：${formatWeight(poolishGrams, 'g')}`;
        const pGrid = document.getElementById('poolishBreakdownGrid');
        pGrid.innerHTML = `
          <div class="p-2.5 rounded-xl bg-black/40 border border-white/10">
            <div class="text-[10px] text-zinc-400">鳥越製粉-哥摩(高筋)</div>
            <div class="text-sm font-bold text-white font-mono mt-0.5">${formatWeight(260 * scale, 'g')}</div>
          </div>
          <div class="p-2.5 rounded-xl bg-black/40 border border-white/10">
            <div class="text-[10px] text-zinc-400">過濾冷水</div>
            <div class="text-sm font-bold text-white font-mono mt-0.5">${formatWeight(260 * scale, 'g')}</div>
          </div>
          <div class="p-2.5 rounded-xl bg-black/40 border border-white/10">
            <div class="text-[10px] text-zinc-400">燕子牌高糖酵母</div>
            <div class="text-sm font-bold text-amber-300 font-mono mt-0.5">${formatWeight(1 * scale, 'g')}</div>
          </div>
        `;
      } else {
        poolishBox.classList.add('hidden');
      }

      // Stage Filter Pills
      const stages = ['ALL', ...new Set(scaledItems.map(i => i.stage))];
      const stageBar = document.getElementById('stageFilterBar');
      stageBar.innerHTML = '';
      stages.forEach(st => {
        const active = state.selectedStage === st;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `px-3 py-1 rounded-full text-xs font-medium transition-all ${
          active
            ? 'bg-white text-black font-semibold'
            : 'bg-white/[0.06] text-zinc-300 hover:bg-white/15'
        }`;
        btn.textContent = st === 'ALL' ? `全部製作環節 (${scaledItems.length})` : st;
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
        `廚房秤重進度：已完成 ${checkedCount} / ${scaledItems.length} 項原料`;
      document.getElementById('weighPercentText').textContent = `${pct}%`;
      document.getElementById('weighProgressBar').style.width = `${pct}%`;

      // Render Ingredient Rows
      const listContainer = document.getElementById('scaledIngredientsContainer');
      listContainer.innerHTML = '';

      const filteredItems = state.selectedStage === 'ALL'
        ? scaledItems
        : scaledItems.filter(i => i.stage === state.selectedStage);

      filteredItems.forEach(item => {
        const checkKey = `${state.selectedRecipeId}_${item.idx}`;
        const isChecked = !!state.checkedItems[checkKey];
        const isKeyFlourOrButter = item.rawIngredient.includes('麵粉') || item.rawIngredient.includes('奶油');

        const row = document.createElement('div');
        row.className = `card-interactive rounded-3xl p-4 sm:px-6 sm:py-5 border transition-all cursor-pointer flex items-center justify-between gap-4 ${
          isChecked
            ? 'bg-emerald-950/25 border-emerald-500/35 opacity-65'
            : isKeyFlourOrButter
              ? 'bg-white/[0.06] border-amber-500/35 shadow-md shadow-amber-500/5'
              : 'apple-glass-subtle border-white/15'
        }`;

        row.innerHTML = `
          <div class="flex items-center gap-3.5 sm:gap-4 min-w-0">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center border-2 transition-all shrink-0 ${
              isChecked
                ? 'bg-emerald-500 border-emerald-400 text-black font-extrabold text-base'
                : 'border-white/30 bg-black/40 text-transparent'
            }">✓</div>
            <div class="min-w-0">
              <div class="flex items-center gap-2.5 flex-wrap">
                <span class="ing-title font-extrabold text-lg sm:text-2xl tracking-tight ${isChecked ? 'line-through text-zinc-400' : 'text-white'}">
                  ${item.ingredient}
                </span>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-zinc-200 font-medium">${item.stage}</span>
                ${isKeyFlourOrButter ? '<span class="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">核心原料</span>' : ''}
              </div>
              <div class="text-xs sm:text-sm text-zinc-300 mt-1.5 flex items-center gap-3 flex-wrap font-mono">
                <span class="px-2.5 py-0.5 rounded-lg bg-sky-500/15 text-sky-300 border border-sky-400/25 font-bold">
                  烘焙比例 ${item.bakersPct.toFixed(1)}%
                </span>
                <span class="text-zinc-400">1 份基準：${item.baseQty} ${item.unit}</span>
              </div>
            </div>
          </div>

          <div class="text-right shrink-0">
            <div class="weight-num text-2xl sm:text-4xl font-extrabold font-mono tracking-tight ${
              isChecked ? 'text-emerald-400' : 'text-amber-400'
            }">
              ${formatWeight(item.scaledQty, item.unit)}
            </div>
            <div class="text-xs sm:text-sm text-zinc-400 font-mono mt-0.5">
              ${Number(scale.toFixed(2))}x 倍率重量
            </div>
          </div>
        `;

        row.addEventListener('click', () => {
          state.checkedItems[checkKey] = !state.checkedItems[checkKey];
          renderCalculator();
        });

        listContainer.appendChild(row);
      });
    }

    function syncInputsAndRenderCalculator() {
      const rcp = getRecipeById(state.selectedRecipeId);
      state.targetPieces = Math.max(1, Math.ceil(state.targetPieces));
      state.targetBatches = state.targetPieces / rcp.baseYield;
      const pInput = document.getElementById('targetPiecesInput');
      const bInput = document.getElementById('targetBatchesInput');
      pInput.value = Math.round(state.targetPieces);
      bInput.value = Number(state.targetBatches.toFixed(2));
      renderRecipeSelectorCards();
      renderCalculator();
    }

    // =========================================================================
    // 5. RENDERING FUNCTIONS — TAB 2: CLASSIC RECIPES & DAILY PLANNER
    // =========================================================================
    function renderDailySchedulePlanner() {
      const grid = document.getElementById('scheduleProductGrid');
      grid.innerHTML = '';

      const mainRecipes = RAW_DATA.recipes.filter(r => r.id !== 'RCP-06');
      let totalRev = 0;
      let totalFood = 0;
      let totalFull = 0;
      let totalHours = 0;
      const consolidatedMap = {}; // ingName -> { qty, unit, cost }

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
            <span class="font-bold text-sm text-white">${m.meta.displayEmoji || m.meta.emoji} ${rcp.name}</span>
            <span class="text-[11px] font-mono text-amber-300">$${m.meta.sellingPriceUnit}/${rcp.yieldUnit}</span>
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
            <span class="text-sky-300">售價: $${Math.round(m.revenueBatch)}</span>
          </div>
        `;
        grid.appendChild(card);
      });

      // Attach listeners for schedule adjusters
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
          state.scheduleCounts[id] = Math.max(0, parseFloat(inp.value) || 0);
          renderDailySchedulePlanner();
        });
      });

      // Update Totals
      const netProfit = totalRev - totalFull;
      document.getElementById('schedTotalRev').textContent = formatCurrency(totalRev, 0);
      document.getElementById('schedFoodCost').textContent = formatCurrency(totalFood, 0);
      document.getElementById('schedFullCost').textContent = formatCurrency(totalFull, 0);
      const netEl = document.getElementById('schedNetProfit');
      netEl.textContent = `${netProfit >= 0 ? '+' : ''}${formatCurrency(netProfit, 0)}`;
      netEl.className = `text-lg font-extrabold font-mono ${netProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`;
      document.getElementById('schedTotalHours').innerHTML =
        `⏱️ 預估總投入工時：約 <strong class="text-white font-mono">${totalHours.toFixed(2)}</strong> 小時`;

      // Render Consolidated Ingredients
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
            ⚖️ 帶入動態計算器調整製作份數 →
          </button>
        `;

        container.appendChild(card);
      });

      container.querySelectorAll('[data-open-calc]').forEach(btn => {
        btn.addEventListener('click', () => {
          const rcpId = btn.getAttribute('data-open-calc');
          const rcp = getRecipeById(rcpId);
          state.selectedRecipeId = rcpId;
          state.targetPieces = rcp.baseYield;
          state.targetBatches = 1.0;
          state.selectedStage = 'ALL';
          switchTab('calculator');
          syncInputsAndRenderCalculator();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
    }

    // =========================================================================
    // 6. RENDERING FUNCTIONS — TAB 3: INGREDIENT DATABASE (59 ITEMS)
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
    // 7. RENDERING FUNCTIONS — TAB 4: COST & PRICING OVERVIEW + CHARTS
    // =========================================================================
    let costChartInstance = null;
    let marginChartInstance = null;

    function renderPricingOverview() {
      const mainRecipeIds = ['RCP-01', 'RCP-02', 'RCP-03', 'RCP-04', 'RCP-05'];
      const rows = [];

      mainRecipeIds.forEach(id => {
        const rcp = getRecipeById(id);
        const meta = RECIPE_META[id];
        const sim = state.pricingSim[rcp.name] || { batchYield: rcp.baseYield, price: meta.sellingPriceUnit };

        // In 成本與定價總覽, base batch food cost is divided by simulated batchYield (if testing batch expansion to amortize labor)
        // Wait: when expanding batchYield (e.g. Cinnamon Roll 7 -> 14), food cost per unit stays constant, while single-batch labor/utility (if 1 batch time can make 14) or simulated price changes margin!
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

      // Compute Store Averages (Matches Sheet R14)
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

      // Update KPI Cards
      document.getElementById('kpiAvgMargin').textContent = `${avgMargin.toFixed(1)}%`;
      document.getElementById('kpiTopProduct').textContent = topRow.name;
      document.getElementById('kpiTopProductSub').textContent = `毛利率達 ${topRow.margin.toFixed(1)}%`;
      document.getElementById('kpiAvgProfit').textContent = `NT$${avgProfit.toFixed(2)}`;

      // Render Table
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

      // Store Average Footer Row
      const avgTr = document.createElement('tr');
      avgTr.className = 'bg-white/[0.06] font-bold border-t border-white/20';
      avgTr.innerHTML = `
        <td class="py-3 px-3 font-sans text-amber-300">全店平均</td>
        <td class="py-3 px-3 text-center text-zinc-200">${avgYield.toFixed(1)}</td>
        <td class="py-3 px-3 text-right text-zinc-200">$${avgFood.toFixed(2)}</td>
        <td class="py-3 px-3 text-right text-zinc-200">$${avgPack.toFixed(2)}</td>
        <td class="py-3 px-3 text-right text-zinc-200">$${avgLabor.toFixed(2)}</td>
        <td class="py-3 px-3 text-right text-zinc-200">$${avgUtility.toFixed(2)}</td>
        <td class="py-3 px-3 text-right text-amber-400">$${avgTotal.toFixed(2)}</td>
        <td class="py-3 px-3 text-center text-sky-400">$${avgPrice.toFixed(0)}</td>
        <td class="py-3 px-3 text-right text-emerald-400">+$${avgProfit.toFixed(2)}</td>
        <td class="py-3 px-3 text-right text-emerald-400">${avgMargin.toFixed(1)}%</td>
        <td class="py-3 px-3 font-sans text-[11px] text-zinc-300">整體菜單組合兼具高單價主力與高毛利小點</td>
      `;
      tbody.appendChild(avgTr);

      // Attach listeners for simulator inputs
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

      // Render Charts
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
            x: { ticks: { color: '#D4D4D8' }, grid: { color: 'rgba(255,255,255,0.06)' } },
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
              borderRadius: 8
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
            x: { ticks: { color: '#D4D4D8' }, grid: { color: 'rgba(255,255,255,0.06)' } },
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
        showToast('密碼驗證成功！已解鎖進階分頁', '🔓');
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
      // Protect tabs 2, 3, 4 with password (0410)
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

      // Update Desktop & Mobile Tab Buttons
      document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        const isMatch = btn.getAttribute('data-tab') === tabName;
        if (btn.closest('header')) {
          btn.className = `nav-tab-btn px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
            isMatch ? 'bg-white text-black shadow-sm font-semibold' : 'text-zinc-300 hover:text-white'
          }`;
        } else {
          btn.className = `nav-tab-btn flex flex-col items-center justify-center py-1.5 rounded-2xl transition-all ${
            isMatch ? 'bg-white/15 text-amber-400 font-semibold' : 'text-zinc-400'
          }`;
        }
      });

      if (tabName === 'pricing') {
        setTimeout(() => renderPricingOverview(), 60);
      }
    }

    function bindEvents() {
      // Tab switching
      document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          switchTab(btn.getAttribute('data-tab'));
        });
      });

      // Jump back to calculator button from Tab 4
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

      // Pieces & Batches Dual Sync Controls (Pieces always integer rounded up via Math.ceil)
      const pInput = document.getElementById('targetPiecesInput');
      const bInput = document.getElementById('targetBatchesInput');
      const slider = document.getElementById('piecesSlider');

      pInput.addEventListener('input', () => {
        const rcp = getRecipeById(state.selectedRecipeId);
        const rawVal = parseFloat(pInput.value);
        if (!isNaN(rawVal) && rawVal > 0) {
          const intPieces = Math.max(1, Math.ceil(rawVal));
          state.targetPieces = intPieces;
          state.targetBatches = intPieces / rcp.baseYield;
          bInput.value = Number(state.targetBatches.toFixed(2));
          renderCalculator();
        }
      });

      pInput.addEventListener('change', () => {
        syncInputsAndRenderCalculator();
      });

      bInput.addEventListener('change', () => {
        const rcp = getRecipeById(state.selectedRecipeId);
        const batchVal = Math.max(0.1, parseFloat(bInput.value) || 0.1);
        const intPieces = Math.max(1, Math.ceil(batchVal * rcp.baseYield));
        state.targetPieces = intPieces;
        state.targetBatches = intPieces / rcp.baseYield;
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

      document.getElementById('decBatchBtn').addEventListener('click', () => {
        const rcp = getRecipeById(state.selectedRecipeId);
        const nextBatch = Math.max(0.25, state.targetBatches - 0.5);
        const intPieces = Math.max(1, Math.ceil(nextBatch * rcp.baseYield));
        state.targetPieces = intPieces;
        state.targetBatches = intPieces / rcp.baseYield;
        syncInputsAndRenderCalculator();
      });

      document.getElementById('incBatchBtn').addEventListener('click', () => {
        const rcp = getRecipeById(state.selectedRecipeId);
        const nextBatch = state.targetBatches + 0.5;
        const intPieces = Math.max(1, Math.ceil(nextBatch * rcp.baseYield));
        state.targetPieces = intPieces;
        state.targetBatches = intPieces / rcp.baseYield;
        syncInputsAndRenderCalculator();
      });

      // Reverse Scale by Available Ingredient Weight (Integer rounded up)
      document.getElementById('openReverseScaleBtn').addEventListener('click', () => {
        document.getElementById('reverseScaleDrawer').classList.toggle('hidden');
      });
      document.getElementById('closeReverseScaleBtn').addEventListener('click', () => {
        document.getElementById('reverseScaleDrawer').classList.add('hidden');
      });
      document.getElementById('applyReverseScaleBtn').addEventListener('click', () => {
        const rcp = getRecipeById(state.selectedRecipeId);
        const idx = parseInt(document.getElementById('reverseIngSelect').value, 10) || 0;
        const grams = parseFloat(document.getElementById('reverseIngGrams').value);
        if (!grams || grams <= 0) {
          showToast('請輸入大於 0 的原料克數', '⚠️');
          return;
        }
        const item = rcp.items[idx];
        if (item && item.baseQty > 0) {
          const rawScale = grams / item.baseQty;
          const intPieces = Math.max(1, Math.ceil(rawScale * rcp.baseYield));
          state.targetPieces = intPieces;
          state.targetBatches = intPieces / rcp.baseYield;
          syncInputsAndRenderCalculator();
          showToast(`已依「${item.ingredient} ${grams}${item.unit}」整數進位反推為 ${intPieces} ${rcp.yieldUnit} (${state.targetBatches.toFixed(2)} 份)`);
        }
      });

      // Weight Unit Toggle (g / kg / oz)
      document.querySelectorAll('.unit-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          state.weightUnit = btn.getAttribute('data-unit');
          document.querySelectorAll('.unit-toggle-btn').forEach(b => {
            b.className = `unit-toggle-btn px-2 py-0.5 rounded-lg ${
              b.getAttribute('data-unit') === state.weightUnit
                ? 'bg-amber-500 text-black font-bold'
                : 'text-zinc-300 hover:text-white'
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
          `🥐 【Jasmine's Bakery 動態配方單】`,
          `品項：${m.recipe.name} (${m.recipe.id})`,
          `本次製作數量：${Number(m.targetPieces.toFixed(1))} ${m.recipe.yieldUnit} (${Number(m.scale.toFixed(2))} 份)`,
          `本批麵團總重：${Math.round(m.totalWeightG)} g`,
          `----------------------------------------`
        ];
        m.scaledItems.forEach(it => {
          lines.push(`• [${it.stage}] ${it.ingredient}：${formatWeight(it.scaledQty, it.unit)} (烘焙比例 ${it.bakersPct.toFixed(1)}%)`);
        });
        copyTextToClipboard(lines.join('\n'), '已複製本批配方克數清單！');
      });

      // Add Current Scaled Recipe to Daily Schedule
      document.getElementById('addToScheduleBtn').addEventListener('click', () => {
        if (state.selectedRecipeId === 'RCP-06') {
          showToast('波蘭種已包含於生吐司製程中', 'ℹ️');
          return;
        }
        state.scheduleCounts[state.selectedRecipeId] = Number(state.targetPieces.toFixed(1));
        renderDailySchedulePlanner();
        showToast(`已將「${getRecipeById(state.selectedRecipeId).name} × ${state.targetPieces}」同步至今日排程總表！`);
      });

      // Daily Schedule Buttons
      document.getElementById('resetScheduleDefaultBtn').addEventListener('click', () => {
        state.scheduleCounts = { 'RCP-02': 7, 'RCP-01': 2, 'RCP-03': 8, 'RCP-04': 14, 'RCP-05': 6 };
        renderDailySchedulePlanner();
        showToast('已還原試算表 Jasmine - Table 1 預設排程');
      });
      document.getElementById('clearScheduleBtn').addEventListener('click', () => {
        state.scheduleCounts = { 'RCP-02': 0, 'RCP-01': 0, 'RCP-03': 0, 'RCP-04': 0, 'RCP-05': 0 };
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
        showToast('已還原全部 59 項原料為試算表預設採購價');
      });

      // Reset Pricing Simulator
      document.getElementById('resetPricingSimBtn').addEventListener('click', () => {
        state.pricingSim = {
          '生吐司': { batchYield: 8, price: 240 },
          '肉桂捲': { batchYield: 7, price: 150 },
          '檸檬磅蛋糕': { batchYield: 2, price: 520 },
          '瑪德蓮': { batchYield: 14, price: 70 },
          '費南雪': { batchYield: 6, price: 70 }
        };
        renderPricingOverview();
        showToast('已還原試算表預設單批產量與目前售價');
      });

      // Viewport Preview Switcher (Full / iPhone / iPad)
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
        showToast(state.kitchenMode ? '已開啟「廚房大字秤重模式」' : '已切換為標準字體大小', '🧑‍🍳');
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
        showToast('已下載 index.html，可直接上傳至 GitHub Repository！');
      });

      document.getElementById('exportCsvReportBtn').addEventListener('click', () => {
        const m = calculateRecipeMetrics(state.selectedRecipeId, state.targetPieces);
        const rows = [
          ['品項', '製作數量', '縮放份數', '原料名稱', '製作環節', '1份基準用量', '本次目標用量', '單位', '單位成本(NT$)', '本批小計(NT$)']
        ];
        m.scaledItems.forEach(it => {
          rows.push([
            m.recipe.name,
            m.targetPieces,
            m.scale.toFixed(2),
            it.ingredient,
            it.stage,
            it.baseQty,
            it.scaledQty.toFixed(2),
            it.unit,
            it.unitCost.toFixed(4),
            it.itemCost.toFixed(2)
          ]);
        });
        const csvContent = '\uFEFF' + rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${m.recipe.name}_${m.targetPieces}${m.recipe.yieldUnit}_配方克數表.csv`;
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
