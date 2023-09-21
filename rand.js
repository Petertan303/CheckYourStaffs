// 定义一个数组，存储对应的字符
var items = [
    [
        "杖/锤/棍",
        "刀/剑/斧",
        "弓/弩",
        "铳/炮/喷射器",
        "枪/矛",
        "锯/剪/镰",
        "投掷物(镖/飞轮/梭/手雷)",
        "盾/甲胄/头盔",
        "臂铠/手套/指虎/爪",
        "钩索/软剑/链锤/鞭/针线",
        "工程工具",
        "自动机械/无人机/载具/机甲",
        "召唤生物",
        "乐器/法球/魔典/符文/图腾",
        "饰物(冠冕/戒指/挂饰/手镯手链/耳环/眼镜)",
        "杂项(伞/扇/罗盘/拂尘/毛刷/旗帜/瓶装液体/食物/钥匙/钟表/灯、灯笼/钱币/骰子及其他)",
        "自定义"
    ],
    [
        "碳素",
        "异铁",
        "源石",
        "其它无机质",
        "有机质",
        "能量体",
        "自定义",
        "龙骨"
    ],
    [
        "碳素",
        "异铁",
        "源石",
        "其它无机质",
        "有机质",
        "能量体",
        "自定义",
        "赤金"
    ],
    [
        "源岩系列",
        "锰矿系列",
        "RMA-70 系列",
        "源石系列(60以上可设定为火锻/晶化等特殊处理)",
        "D32钢",
        "烧结核凝晶",
        "黑曜石/耶拉冈德之石/“兽之泪”/火龙的红玉",
        "自定义"
    ],
    [
        "源岩系列",
        "职业芯片(30-40为双芯片)",
        "研磨石系列",
        "装置系列",
        "晶体系列",
        "合成玉",
        "双极纳米片",
        "晶体电子单元",
        "自定义"
    ],
    [
        "切削液系列",
        "凝胶系列",
        "扭转醇系列",
        "聚酸酯系列",
        "转质盐组系列",
        "聚合剂",
        "生机细胞",
        "递质",
        "数据黑盒",
        "理智",
        "自定义"
    ],
    [
        "自然的风",
        "普通的水",
        "酮凝集系列",
        "半自然溶剂系列",
        "汽化源石",
        "夕墨/罐装晌午茶/新酿烈刀子",
        "自定义"
    ],
    [
        "100元以内", // 1-10
        "500元以内", // 11-20
        "1000元以内", // 21-30
        "5000元以内", // 31-40
        "10000元以内", // 41-50
        "50000元以内", // 51-60
        "100000元以内", // 61-70
        "500000元以内", // 71-80
        "1000000元以内", // 81-90
        "1000000元以上", // 91-100
    ],
];

// 定义一个数组，存储对应的范围
var ranges = [20, 40, 50, 60, 65, 90, 100, 100];

var titles = [
    "法杖的形制(小-大；易操作-难使用)",
    "法杖的主体材质(粗加工-精加工；部件少-多)",
    "法杖的次要材质(粗加工-精加工；部件少-多)",
    "法杖的施术单元(纯度/稀有度低-高；处理方式普通-特殊)",
    "法杖的源石技艺回路材料(简单-复杂；运转慢-快)",
    "法杖的加工材料(粗加工-精加工；工艺简单-复杂)",
    "法杖的循环及冷却系统(低效-高效)",
    "法杖的造价(廉价-昂贵)"
];

// 定义一个数组，存储对应的区间
var intervals = [
    [
        [1, 20],
        [21, 30],
        [31, 40],
        [41, 50],
        [51, 55],
        [56, 60],
        [61, 65],
        [66, 70],
        [71, 73],
        [74, 76],
        [77, 78],
        [79, 85],
        [86, 87],
        [88, 90],
        [91, 92],
        [93, 95],
        [96, 100]
    ],
    [
        [1, 20],
        [21, 40],
        [41, 50],
        [51, 65],
        [66, 85],
        [86, 90],
        [91, 99],
        [100, 100]
    ],
    [
        [1, 20],
        [21, 40],
        [41, 50],
        [51, 65],
        [66, 85],
        [86, 90],
        [91, 99],
        [100, 100]
    ],
    [
        [1, 25],
        [26, 40],
        [41, 55],
        [56, 65],
        [66, 75],
        [76, 85],
        [86, 90],
        [91, 100]
    ],
    [
        [1, 25],
        [26, 40],
        [41, 55],
        [56, 65],
        [66, 75],
        [76, 85],
        [86, 90],
        [91, 100]
    ],
    [
        [1, 10],
        [11, 20],
        [21, 30],
        [31, 40],
        [41, 50],
        [51, 60],
        [61, 70],
        [71, 80],
        [81, 90],
        [91, 100]
    ],
    [
        [1, 30],
        [31, 50],
        [51, 60],
        [61, 70],
        [71, 80],
        [81, 90],
        [91, 100]
    ],
    [
        [1, 10],
        [11, 20],
        [21, 30],
        [31, 40],
        [41, 50],
        [51, 60],
        [61, 65],
        [66, 70],
        [71, 75],
        [76, 90],
        [91, 100]
    ],
];

// 定义一个函数，根据输入的字符生成一个种子
function getSeed(text) {
    // 将输入的字符转换为ASCII码的和
    var sum = 0;
    for (var i = 0; i < text.length; i++) {
        sum += text.charCodeAt(i);
    }
    // 将和取模100，得到一个0-99的整数
    var seed = sum % 114514;
    // 返回种子
    return seed;
}

// 定义一个函数，根据种子和范围生成一个随机整数
function randomInt(seed, range) {
    // 使用线性同余法生成随机数序列
    // 设置参数a, b, m
    var a = 11;
    var b = 17;
    var m = range;
    // 计算下一个随机数
    var next = (a * seed + b) % m;
    // 将随机数加一，得到一个1-range的整数
    var num = next + 1;
    // 返回随机数
    return num;
}

// 定义一个函数，根据随机数和条目，返回对应的字符
// function getItem(num, entry) {
// return items[entry][num - 1];
// }
// 定义一个函数，根据随机数和条目，返回对应的字符
function getItem(num, entry) {
    // 根据条目获取区间数组
    var interval = intervals[entry];
    // 遍历区间数组，找到随机数所在的区间索引
    var index = -1;
    for (var i = 0; i < interval.length; i++) {
        if (num >= interval[i][0] && num <= interval[i][1]) {
            index = i;
            break;
        }
    }
    // 如果找到了区间索引，返回对应的字符
    if (index != -1) {
        return items[entry][index];
    } else {
        // return "无效的数字";
        return items[entry][-1];
    }
}


// 定义一个函数，生成十个随机数，并显示在列表中
function generate() {
    var data = [];

    // 获取输入框的值
    var text = document.getElementById("text").value;
    // 获取列表的元素
    var list = document.getElementById("list");
    // 清空列表的内容
    list.innerHTML = "";
    // 如果输入框不为空，才进行生成
    if (text != "") {
        // 根据输入的字符获取种子
        var seed = getSeed(text);
        // 循环八次，生成八个条目的随机数和字符
        for (var i = 0; i < 8; i++) {
            // 根据条目获取范围
            // var range = [20, 40, 50, 60, 65, 90, 100, 100][i];
            // 根据种子和范围生成一个随机数
            var num = randomInt(seed, 100);
            // 根据随机数和条目获取对应的字符
            var item = getItem(num, i);
            // 创建一个列表项元素
            var li = document.createElement("li");
            li.style = "padding-top: 8px;"
            var div1 = document.createElement("div");
            var div2 = document.createElement("div");
            // 设置列表项的内容为条目、随机数和字符
            // li.innerHTML = titles[i] + "：" + num + " " + item;
            div1.innerHTML = titles[i] + ": " + item;
            div2.innerHTML = "出值：" + num;
            li.appendChild(div1);
            li.appendChild(div2);
            data[i] = item;
            // 将列表项添加到列表中
            list.appendChild(li);
            // 更新种子为随机数
            seed = num;
        }
    }

    var div = document.getElementById("div");
    div.innerHTML = "亲爱的" + text + "博士，" + "你的法杖是一根" + data[0] + ", 主体由" + data[1] + "打造，辅以" + data[2] + "，并使用" + data[5] + "进行加工" + "。其施术单元由" + data[3] + "构成，循环及冷却系统是" + data[6] + ", 而核心的源石技艺回路材料是" + data[4] + "。这把法杖的制造的开销在" + data[7] + "，真是一把好法杖！"

}

// function printTable(tableId) {
//     var data = [];
//     // 将li数据赋值给数组
//     data[0] = "法杖的形制(小-大；易操作-难使用)：1 杖/锤/棍";
//     data[1] = "法杖的主体材质(粗加工-精加工；部件少-多)：21 异铁";
//     data[2] = "法杖的次要材质(粗加工-精加工；部件少-多)：41 源石";
//     data[3] = "法杖的施术单元(纯度/稀有度低-高；处理方式普通-特殊)：56 源石系列(60以上可设定为火锻/晶化等特殊处理)";
//     data[4] = "法杖的源石技艺回路材料(简单-复杂；运转慢-快)：61 晶体系列";
//     data[5] = "法杖的加工材料(粗加工-精加工；工艺简单-复杂)：11 切削液系列";
//     data[6] = "法杖的循环及冷却系统(低效-高效)：31 普通的水";
//     data[7] = "法杖的造价(廉价-昂贵)：91 >1000000元";
//     // 获取表格的元素
//     var table = document.getElementById("table");
//     // 循环遍历数组中的每个元素
//     for (var i = 0; i < data.length; i++) {
//         // 创建一个表格行元素
//         var tr = document.createElement("tr");
//         // 创建一个表格单元格元素
//         var td = document.createElement("td");
//         // 设置单元格的内容为数组中的元素
//         td.innerHTML = data[i];
//         // 将单元格添加到行中
//         tr.appendChild(td);
//         // 将行添加到表格中
//         table.appendChild(tr);
//     }
//     // 获取表格元素
//     var table = document.getElementById(tableId);
//     // 创建一个新的窗口
//     var newWin = window.open("");
//     // 将表格元素的HTML内容写入新窗口
//     newWin.document.write(table.outerHTML);
//     // 调用新窗口的打印方法
//     newWin.print();
//     // 关闭新窗口
//     newWin.close();
// }
