const NEW_IMAGE_EXISTENCE_TABLE = {
    "燐字画像": ["我", "汝", "此", "其", "彼", "何", "或", "全", "無", "在", "己", "物", "人", "如", "之", "処", "時", "故", "位", "術", "言", "字", "筆", "書", "墨", "論", "紙", "絵", "手", "足", "心", "目", "口", "骨", "頭", "腹", "背", "肉", "光", "闇", "木", "草", "火", "水", "風", "石", "金", "膠", "花", "種", "果", "油", "脂", "大", "中", "小", "周", "内", "外", "軸", "衣", "糸", "日", "月", "星", "天", "地", "山", "谷", "川", "海", "陸", "島", "上", "下", "左", "右", "東", "西", "南", "北", "縦", "横", "高", "低", "始", "終", "生", "入", "一", "二", "三", "四", "五", "六", "七", "八", "九", "撃", "行", "来", "識", "獣", "鳥", "魚", "虫", "龍", "機", "箱", "男", "女", "皇", "神", "船", "兵", "弓", "車", "虎", "馬", "巫", "将", "王", "類", "為", "貝", "刀", "声", "家", "善", "友", "美", "受", "与", "力", "而", "御", "再", "乎", "於", "悪", "真", "噫", "律", "集", "亦", "値", "積", "国", "同", "閉", "開", "倉", "官", "意", "連", "笑", "戦", "壊", "等", "静", "層", "色", "季", "銭", "名", "冠", "満", "族", "清", "錘", "菓", "硬", "牌", "机", "席", "認", "輩", "輪", "覆", "古", "米", "勿", "猫", "学", "守", "囲", "新", "蜜", "使", "唯", "味", "党", "加", "別"],
    "燐字画像2": ["我", "汝", "此", "其", "彼", "何", "或", "全", "無", "在", "己", "物", "人", "如", "之", "処", "時", "故", "位", "術", "言", "字", "筆", "書", "墨", "論", "紙", "絵", "手", "足", "心", "目", "口", "骨", "頭", "腹", "背", "肉", "光", "闇", "木", "草", "火", "水", "風", "石", "金", "膠", "花", "種", "果", "油", "脂", "大", "中", "小", "周", "内", "外", "軸", "衣", "糸", "日", "月", "星", "天", "地", "山", "谷", "川", "海", "陸", "島", "上", "下", "左", "右", "東", "西", "南", "北", "縦", "横", "高", "低", "始", "終", "生", "入", "一", "二", "三", "四", "五", "六", "七", "八", "九", "撃", "行", "来", "識", "獣", "鳥", "魚", "虫", "龍", "機", "箱", "男", "女", "皇", "神", "船", "兵", "弓", "車", "虎", "馬", "巫", "将", "王", "類", "為", "貝", "刀", "声", "家", "善", "友", "美", "受", "与", "力", "而", "御", "再", "乎", "於", "悪", "真", "噫", "律", "集", "亦", "値", "積", "国", "同", "閉", "開", "倉", "官", "意", "連", "笑", "戦", "壊", "等", "静", "層", "色", "季", "銭", "名", "冠", "満", "族", "清", "錘", "菓", "硬", "牌", "机", "席", "認", "輩", "輪", "覆", "古", "米", "勿", "猫", "学", "守", "囲", "新", "蜜", "使", "唯", "味", "党", "加", "別"],
    "燐字画像3": ["我", "汝", "此", "其", "彼", "何", "或", "全", "無", "在", "己", "物", "人", "如", "之", "処", "時", "故", "位", "術", "言", "字", "筆", "書", "墨", "論", "紙", "絵", "手", "足", "心", "目", "口", "骨", "頭", "腹", "背", "肉", "光", "闇", "木", "草", "火", "水", "風", "石", "金", "膠", "花", "種", "果", "油", "脂", "大", "中", "小", "周", "内", "外", "軸", "衣", "糸", "日", "月", "星", "天", "地", "山", "谷", "川", "海", "陸", "島", "上", "下", "左", "右", "東", "西", "南", "北", "縦", "横", "高", "低", "始", "終", "生", "入", "一", "二", "三", "四", "五", "六", "七", "八", "九", "撃", "行", "来", "識", "獣", "鳥", "魚", "虫", "龍", "機", "箱", "男", "女", "皇", "神", "船", "兵", "弓", "車", "虎", "馬", "巫", "将", "王", "類", "為", "貝", "刀", "声", "家", "善", "友", "美", "受", "与", "力", "而", "御", "再", "乎", "於", "悪", "真", "噫", "律", "集", "亦", "値", "積", "国", "同", "閉", "開", "倉", "官", "意", "連", "笑", "戦", "壊", "等", "静", "層", "色", "季", "銭", "名", "冠", "満", "族", "清", "錘", "菓", "硬", "牌", "机", "席", "認", "輩", "輪", "覆", "古", "米", "勿", "猫", "学", "守", "囲", "新", "蜜", "使", "唯", "味", "党", "加", "別"],
    "燐字画像4": ["我", "汝", "此", "其", "彼", "何", "或", "全", "無", "在", "互", "己", "物", "人", "如", "之", "処", "時", "故", "位", "術", "言", "字", "筆", "書", "墨", "文", "論", "紙", "絵", "手", "足", "心", "目", "口", "骨", "頭", "腹", "背", "肉", "光", "闇", "木", "草", "火", "水", "風", "石", "金", "膠", "花", "種", "果", "油", "脂", "大", "中", "小", "周", "内", "外", "軸", "衣", "糸", "日", "月", "星", "天", "地", "山", "谷", "川", "海", "陸", "島", "上", "下", "左", "右", "東", "西", "南", "北", "縦", "横", "高", "低", "始", "終", "生", "入", "一", "二", "三", "四", "五", "六", "七", "八", "九", "撃", "行", "来", "識", "獣", "鳥", "魚", "虫", "龍", "機", "箱", "男", "女", "皇", "神", "船", "兵", "弓", "車", "虎", "馬", "巫", "将", "王", "類", "為", "貝", "刀", "声", "家", "善", "友", "美", "受", "与", "力", "而", "御", "再", "乎", "於", "悪", "真", "噫", "律", "集", "亦", "値", "積", "国", "同", "閉", "開", "春", "倉", "官", "意", "連", "笑", "戦", "壊", "等", "静", "層", "色", "季", "銭", "名", "冠", "満", "族", "清", "錘", "菓", "硬", "牌", "豊", "机", "席", "認", "寝", "輩", "黒", "輪", "覆", "琴", "古", "米", "勿", "猫", "学", "守", "囲", "新", "蜜", "使", "唯", "味", "党", "加", "別", "近", "欽", "夘", "布", "械", "函", "輝", "累", "岩", "禦"],
    "燐字画像5": ["圧", "包", "門", "綿", "父", "母", "十", "平", "耒", "貓", "柔"],
    "燐字画像6": ["互", "文", "雪", "夏", "春", "定", "軟", "豊", "圧", "包", "門", "傷", "棚", "寝", "綿", "少", "反", "血", "琴", "煙", "耳", "十", "道", "近", "平", "欽", "夘", "布", "械", "函", "岩", "禦", "疲", "耒", "貓", "柔", "聯", "棉", "箏"],
    "燐字画像7": ["端", "混", "祭", "労", "助", "貧", "長", "傾", "鼓", "散", "深", "黒", "豆", "父", "抗", "母", "酒", "奮", "素", "祖", "前", "従", "茶", "正", "樽", "甘", "裁", "片", "件", "震", "嗅", "歪", "広", "挽", "立", "疲", "座", "能", "短", "直", "㕮", "吁", "救", "皷", "从", "后"],
    "燐字画像8": ["後", "哩", "麗", "店", "鎖"],
    "燐字画像9": ["即", "極", "倒", "多", "笛", "筒", "増", "笙", "竹", "竺", "属"],
    "燐字画像10": ["謝", "針", "翰", "歌", "寐", "恒", "享", "軍", "隊", "青", "止", "秋", "冬"],
    "燐字画像11": ["㕮", "一", "七", "三", "上", "下", "与", "中", "之", "乎", "九",
        "二", "互", "五", "亦", "享", "人", "从", "件", "位", "低", "何",
        "使", "倉", "倒", "値", "傷", "傾", "光", "党", "入", "全", "八",
        "六", "兵", "其", "内", "再", "冠", "冬", "処", "函", "刀", "別",
        "前", "力", "加", "助", "労", "包", "北", "十", "南", "即", "友",
        "反", "受", "口", "古", "右", "吁", "同", "名", "后", "周", "味",
        "哩", "唯", "善", "嗅", "噫", "四", "囲", "国", "圧", "在", "地",
        "増", "墨", "壊", "声", "夏", "外", "夘", "多", "大", "天", "奮",
        "女", "如", "始", "字", "季", "学", "守", "官", "定", "家", "寐",
        "寝", "将", "小", "少", "属", "層", "山", "岩", "島", "川", "左",
        "巫", "己", "布", "席", "平", "広", "店", "座", "弓", "彼", "律",
        "後", "従", "御", "心", "恒", "悪", "意", "我", "或", "戦", "手",
        "抗", "挽", "撃", "故", "救", "散", "文", "新", "於", "族", "日",
        "星", "春", "時", "書", "月", "木", "机", "来", "東", "果", "柔",
        "械", "棉", "棚", "極", "横", "樽", "機", "欽", "歌", "止", "正",
        "此", "歪", "母", "氏", "水", "汝", "油", "海", "深", "混", "清",
        "満", "火", "為", "無", "煙", "父", "片", "牌", "物", "猫", "獣",
        "王", "琴", "甘", "男", "疲", "皇", "皷", "目", "直", "真", "短",
        "石", "硬", "祖", "神", "祭", "禦", "秋", "種", "積", "穐", "立",
        "端", "竹", "竺", "笑", "笙", "笛", "筆", "等", "筒", "箏", "箱",
        "米", "糸", "紙", "素", "累", "終", "絵", "綿", "縦", "纂", "美",
        "而", "耒", "耳", "聯", "肉", "背", "能", "脂", "腹", "膠", "船",
        "色", "花", "茶", "草", "菓", "虎", "虫", "蜜", "血", "行", "術",
        "衣", "裁", "西", "覆", "言", "認", "論", "謝", "識", "谷", "豆",
        "豊", "貓", "貝", "貧", "足", "車", "軍", "軟", "軸", "輝", "輩",
        "輪", "近", "連", "道", "酒", "金", "針", "銭", "錘", "鎖", "長",
        "門", "閉", "開", "閥", "闇", "陸", "隊", "集", "雪", "震", "青",
        "静", "頭", "類", "風", "馬", "骨", "高", "魚", "鳥", "麗", "黒",
        "鼓", "龍"],
    "燐字画像12": ["即", "冬", "止", "秋", "極", "倒", "謝", "歌", "油", "後", "輝", "累", "通", "哩", "麗", "恒", "店", "鎖", "多", "笛",
        "筒", "増", "竹", "竺", "属", "針", "翰", "寐", "享", "軍", "戦", "氏", "閥", "纂", "穐", "啌", "哇"],
    "燐字画像13": ["浬", "刻", "羅", "聚", "叛", "科", "吏", "宦", "僚", "健", "兄"],
    "燐字画像14": ["互", "文", "即", "雪", "夏", "冬", "止", "端", "春", "秋", "混", "祭", "極", "労", "助", "定", "軟", "豊", "貧", "倒",
        "長", "傾", "圧", "鼓", "包", "散", "深", "門", "傷", "棚", "寝", "綿", "少", "黒", "反", "血", "謝", "豆", "父", "琴",
        "煙", "耳", "抗", "母", "酒", "十", "道", "奮", "素", "祖", "前", "従", "茶", "正", "樽", "甘", "歌", "裁", "片", "件",
        "震", "青", "嗅", "後", "歪", "近", "広", "挽", "平", "欽", "夘", "布", "械", "函", "輝", "累", "岩", "禦", "立", "疲",
        "座", "通", "哩", "麗", "耒", "貓", "能", "柔", "恒", "聯", "短", "直", "棉", "箏", "店", "㕮", "吁", "鎖", "多", "救",
        "皷", "从", "后", "笛", "筒", "増", "笙", "竹", "竺", "属", "針", "翰", "寐", "享", "軍", "隊", "氏", "閥", "纂", "穐",
        "啌", "哇", "浬", "刻", "羅", "聚", "叛", "科", "吏", "宦", "僚", "健", "兄"],
    "燐字画像15": ["互", "文", "即", "雪", "夏", "冬", "止", "端", "春", "秋", "混", "祭", "極", "労", "助", "定", "軟", "豊", "貧", "倒",
        "長", "傾", "圧", "鼓", "包", "散", "深", "門", "傷", "棚", "寝", "綿", "少", "黒", "反", "血", "謝", "豆", "父", "琴",
        "煙", "耳", "抗", "母", "酒", "十", "道", "奮", "素", "祖", "前", "従", "茶", "正", "樽", "甘", "歌", "裁", "片", "件",
        "震", "青", "嗅", "後", "歪", "近", "広", "挽", "平", "欽", "夘", "布", "械", "函", "輝", "累", "岩", "禦", "立", "疲",
        "座", "通", "哩", "麗", "耒", "貓", "能", "柔", "恒", "聯", "短", "直", "棉", "箏", "店", "㕮", "吁", "鎖", "多", "救",
        "皷", "从", "后", "笛", "筒", "増", "笙", "竹", "竺", "属", "針", "翰", "寐", "享", "軍", "隊", "氏", "閥", "纂", "穐",
        "啌", "哇", "浬", "刻", "羅", "聚", "叛", "科", "吏", "宦", "僚", "健", "兄"],
    "燐字画像16": ["赤", "百", "佰", "失", "橋", "網", "顫", "振", "帽", "瑪", "産", "須"],
    "燐字画像17": ["呻", "刺", "育", "民"],
    "燐字画像18": ["民", "網", "育", "球", "橋", "産", "刺", "失", "振", "須", "赤", "百", "帽", "卵", "佰", "呻", "淮", "瑪", "顫", "可"],
    "燐字画像19": ["民", "網", "育", "球", "橋", "産", "刺", "失", "振", "須", "赤", "百", "帽", "卵", "佰", "呻", "淮", "瑪", "顫", "可"],
};
function convert_new_to_old(newer) {
    let ans = {};
    for (let i = 0; i < linzi_list.length; i++) {
        ans[linzi_list[i]] = {
            "燐字画像": false,
            "燐字画像2": false,
            "燐字画像3": false,
            "燐字画像4": false,
            "燐字画像5": false,
            "燐字画像6": false,
            "燐字画像7": false,
            "燐字画像8": false,
            "燐字画像9": false,
            "燐字画像10": false,
            "燐字画像11": false,
            "燐字画像12": false,
            "燐字画像13": false,
            "燐字画像14": false,
            "燐字画像15": false,
            "燐字画像16": false,
            "燐字画像17": false,
            "燐字画像18": false,
            "燐字画像19": false,
        };
        for (let filepath in newer) {
            let foldername = filepath;
            ans[linzi_list[i]][foldername] = newer[foldername].includes(linzi_list[i]);
        }
    }
    return ans;
}
const IMAGE_EXISTENCE_TABLE = convert_new_to_old(NEW_IMAGE_EXISTENCE_TABLE);
