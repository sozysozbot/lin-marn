const NEW_IMAGE_EXISTENCE_TABLE = {
    "燐字画像": ["我", "汝", "此", "其", "彼", "何", "或", "全", "無", "在", "己", "物", "人", "如", "之", "処", "時", "故", "位", "術", "言", "字", "筆", "書", "墨", "論", "紙", "絵", "手", "足", "心", "目", "口", "骨", "頭", "腹", "背", "肉", "光", "闇", "木", "草", "火", "水", "風", "石", "金", "膠", "花", "種", "果", "油", "脂", "大", "中", "小", "周", "内", "外", "軸", "衣", "糸", "日", "月", "星", "天", "地", "山", "谷", "川", "海", "陸", "島", "上", "下", "左", "右", "東", "西", "南", "北", "縦", "横", "高", "低", "始", "終", "出", "入", "一", "二", "三", "四", "五", "六", "七", "八", "九", "撃", "行", "来", "識", "獣", "鳥", "魚", "虫", "龍", "機", "箱", "男", "女", "皇", "神", "船", "兵", "弓", "車", "虎", "馬", "巫", "将", "王", "類", "為", "貝", "刀", "声", "家", "善", "友", "美", "受", "与", "力", "而", "御", "再", "乎", "於", "悪", "真", "噫", "律", "集", "亦", "値", "積", "国", "同", "閉", "開", "倉", "官", "意", "連", "笑", "戦", "壊", "等", "静", "層", "色", "季", "銭", "名", "冠", "満", "族", "清", "錘", "菓", "硬", "牌", "机", "席", "認", "輩", "輪", "覆", "古", "米", "勿", "猫", "学", "守", "囲", "新", "蜜", "使", "唯", "味", "党", "加", "別"],
    "燐字画像2": ["我", "汝", "此", "其", "彼", "何", "或", "全", "無", "在", "己", "物", "人", "如", "之", "処", "時", "故", "位", "術", "言", "字", "筆", "書", "墨", "論", "紙", "絵", "手", "足", "心", "目", "口", "骨", "頭", "腹", "背", "肉", "光", "闇", "木", "草", "火", "水", "風", "石", "金", "膠", "花", "種", "果", "油", "脂", "大", "中", "小", "周", "内", "外", "軸", "衣", "糸", "日", "月", "星", "天", "地", "山", "谷", "川", "海", "陸", "島", "上", "下", "左", "右", "東", "西", "南", "北", "縦", "横", "高", "低", "始", "終", "出", "入", "一", "二", "三", "四", "五", "六", "七", "八", "九", "撃", "行", "来", "識", "獣", "鳥", "魚", "虫", "龍", "機", "箱", "男", "女", "皇", "神", "船", "兵", "弓", "車", "虎", "馬", "巫", "将", "王", "類", "為", "貝", "刀", "声", "家", "善", "友", "美", "受", "与", "力", "而", "御", "再", "乎", "於", "悪", "真", "噫", "律", "集", "亦", "値", "積", "国", "同", "閉", "開", "倉", "官", "意", "連", "笑", "戦", "壊", "等", "静", "層", "色", "季", "銭", "名", "冠", "満", "族", "清", "錘", "菓", "硬", "牌", "机", "席", "認", "輩", "輪", "覆", "古", "米", "勿", "猫", "学", "守", "囲", "新", "蜜", "使", "唯", "味", "党", "加", "別"],
    "燐字画像3": ["我", "汝", "此", "其", "彼", "何", "或", "全", "無", "在", "己", "物", "人", "如", "之", "処", "時", "故", "位", "術", "言", "字", "筆", "書", "墨", "論", "紙", "絵", "手", "足", "心", "目", "口", "骨", "頭", "腹", "背", "肉", "光", "闇", "木", "草", "火", "水", "風", "石", "金", "膠", "花", "種", "果", "油", "脂", "大", "中", "小", "周", "内", "外", "軸", "衣", "糸", "日", "月", "星", "天", "地", "山", "谷", "川", "海", "陸", "島", "上", "下", "左", "右", "東", "西", "南", "北", "縦", "横", "高", "低", "始", "終", "出", "入", "一", "二", "三", "四", "五", "六", "七", "八", "九", "撃", "行", "来", "識", "獣", "鳥", "魚", "虫", "龍", "機", "箱", "男", "女", "皇", "神", "船", "兵", "弓", "車", "虎", "馬", "巫", "将", "王", "類", "為", "貝", "刀", "声", "家", "善", "友", "美", "受", "与", "力", "而", "御", "再", "乎", "於", "悪", "真", "噫", "律", "集", "亦", "値", "積", "国", "同", "閉", "開", "倉", "官", "意", "連", "笑", "戦", "壊", "等", "静", "層", "色", "季", "銭", "名", "冠", "満", "族", "清", "錘", "菓", "硬", "牌", "机", "席", "認", "輩", "輪", "覆", "古", "米", "勿", "猫", "学", "守", "囲", "新", "蜜", "使", "唯", "味", "党", "加", "別"],
    "燐字画像4": ["我", "汝", "此", "其", "彼", "何", "或", "全", "無", "在", "互", "己", "物", "人", "如", "之", "処", "時", "故", "位", "術", "言", "字", "筆", "書", "墨", "文", "論", "紙", "絵", "手", "足", "心", "目", "口", "骨", "頭", "腹", "背", "肉", "光", "闇", "木", "草", "火", "水", "風", "石", "金", "膠", "花", "種", "果", "油", "脂", "大", "中", "小", "周", "内", "外", "軸", "衣", "糸", "日", "月", "星", "天", "地", "山", "谷", "川", "海", "陸", "島", "上", "下", "左", "右", "東", "西", "南", "北", "縦", "横", "高", "低", "始", "終", "出", "入", "一", "二", "三", "四", "五", "六", "七", "八", "九", "撃", "行", "来", "識", "獣", "鳥", "魚", "虫", "龍", "機", "箱", "男", "女", "皇", "神", "船", "兵", "弓", "車", "虎", "馬", "巫", "将", "王", "類", "為", "貝", "刀", "声", "家", "善", "友", "美", "受", "与", "力", "而", "御", "再", "乎", "於", "悪", "真", "噫", "律", "集", "亦", "値", "積", "国", "同", "閉", "開", "春", "倉", "官", "意", "連", "笑", "戦", "壊", "等", "静", "層", "色", "季", "銭", "名", "冠", "満", "族", "清", "錘", "菓", "硬", "牌", "豊", "机", "席", "認", "寝", "輩", "黒", "輪", "覆", "琴", "古", "米", "勿", "猫", "学", "守", "囲", "新", "蜜", "使", "唯", "味", "党", "加", "別", "近", "欽", "夘", "布", "械", "函", "輝", "累", "岩", "禦"],
    "燐字画像5": ["圧", "包", "門", "綿", "父", "母", "十", "平", "耒", "貓", "柔"],
    "燐字画像6": ["互", "文", "雪", "夏", "春", "定", "軟", "豊", "圧", "包", "門", "傷", "棚", "寝", "綿", "少", "反", "血", "琴", "煙", "耳", "十", "道", "近", "平", "欽", "夘", "布", "械", "函", "岩", "禦", "疲", "耒", "貓", "柔", "聯", "棉", "箏"],
    "燐字画像7": ["端", "混", "祭", "労", "助", "貧", "長", "傾", "鼓", "散", "深", "黒", "豆", "父", "抗", "母", "酒", "奮", "素", "祖", "前", "従", "茶", "正", "樽", "甘", "裁", "片", "件", "震", "嗅", "歪", "広", "挽", "立", "疲", "座", "能", "短", "直", "㕮", "吁", "救", "皷", "从", "后"],
    "燐字画像8": ["後", "哩", "麗", "店", "鎖"],
    "燐字画像9": ["即", "極", "倒", "多", "笛", "筒", "増", "笙", "竹", "竺", "属"]
};
function convert_old_to_new(old) {
    let ans = {
        "燐字画像": [],
        "燐字画像2": [],
        "燐字画像3": [],
        "燐字画像4": [],
        "燐字画像5": [],
        "燐字画像6": [],
        "燐字画像7": [],
        "燐字画像8": [],
        "燐字画像9": [],
    };
    for (let character in old) {
        for (let filepath in old[character]) {
            let foldername = filepath;
            if (old[character][foldername]) {
                ans[foldername].push(character);
            }
        }
    }
    return ans;
}
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
        };
        for (let filepath in newer) {
            let foldername = filepath;
            ans[linzi_list[i]][foldername] = newer[foldername].includes(linzi_list[i]);
        }
    }
    return ans;
}
const IMAGE_EXISTENCE_TABLE = convert_new_to_old(NEW_IMAGE_EXISTENCE_TABLE);
