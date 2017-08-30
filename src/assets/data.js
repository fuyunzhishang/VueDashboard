//物流数据
var subtextcontent = "111";
var geoCoordMap = {
  '上海': [121.4648, 31.2891],
  '东莞': [113.8953, 22.901],
  '东营': [118.7073, 37.5513],
  '中山': [113.4229, 22.478],
  '临汾': [111.4783, 36.1615],
  '临沂': [118.3118, 35.2936],
  '丹东': [124.541, 40.4242],
  '丽水': [119.5642, 28.1854],
  '乌鲁木齐': [87.9236, 43.5883],
  '佛山': [112.8955, 23.1097],
  '保定': [115.0488, 39.0948],
  '兰州': [103.5901, 36.3043],
  '包头': [110.3467, 41.4899],
  '北京': [116.4551, 40.2539],
  '北海': [109.314, 21.6211],
  '南京': [118.8062, 31.9208],
  '南宁': [108.479, 23.1152],
  '南昌': [116.0046, 28.6633],
  '南通': [121.1023, 32.1625],
  '厦门': [118.1689, 24.6478],
  '台州': [121.1353, 28.6688],
  '合肥': [117.29, 32.0581],
  '呼和浩特': [111.4124, 40.4901],
  '咸阳': [108.4131, 34.8706],
  '哈尔滨': [127.9688, 45.368],
  '唐山': [118.4766, 39.6826],
  '嘉兴': [120.9155, 30.6354],
  '大同': [113.7854, 39.8035],
  '大连': [122.2229, 39.4409],
  '天津': [117.4219, 39.4189],
  '太原': [112.3352, 37.9413],
  '威海': [121.9482, 37.1393],
  '宁波': [121.5967, 29.6466],
  '宝鸡': [107.1826, 34.3433],
  '宿迁': [118.5535, 33.7775],
  '常州': [119.4543, 31.5582],
  '广州': [113.5107, 23.2196],
  '廊坊': [116.521, 39.0509],
  '延安': [109.1052, 36.4252],
  '张家口': [115.1477, 40.8527],
  '徐州': [117.5208, 34.3268],
  '德州': [116.6858, 37.2107],
  '惠州': [114.6204, 23.1647],
  '成都': [103.9526, 30.7617],
  '扬州': [119.4653, 32.8162],
  '承德': [117.5757, 41.4075],
  '拉萨': [91.1865, 30.1465],
  '无锡': [120.3442, 31.5527],
  '日照': [119.2786, 35.5023],
  '昆明': [102.9199, 25.4663],
  '杭州': [119.5313, 29.8773],
  '枣庄': [117.323, 34.8926],
  '柳州': [109.3799, 24.9774],
  '株洲': [113.5327, 27.0319],
  '武汉': [114.3896, 30.6628],
  '汕头': [117.1692, 23.3405],
  '江门': [112.6318, 22.1484],
  '沈阳': [123.1238, 42.1216],
  '沧州': [116.8286, 38.2104],
  '河源': [114.917, 23.9722],
  '泉州': [118.3228, 25.1147],
  '泰安': [117.0264, 36.0516],
  '泰州': [120.0586, 32.5525],
  '济南': [117.1582, 36.8701],
  '济宁': [116.8286, 35.3375],
  '海口': [110.3893, 19.8516],
  '淄博': [118.0371, 36.6064],
  '淮安': [118.927, 33.4039],
  '深圳': [114.5435, 22.5439],
  '清远': [112.9175, 24.3292],
  '温州': [120.498, 27.8119],
  '渭南': [109.7864, 35.0299],
  '湖州': [119.8608, 30.7782],
  '湘潭': [112.5439, 27.7075],
  '滨州': [117.8174, 37.4963],
  '潍坊': [119.0918, 36.524],
  '烟台': [120.7397, 37.5128],
  '玉溪': [101.9312, 23.8898],
  '珠海': [113.7305, 22.1155],
  '盐城': [120.2234, 33.5577],
  '盘锦': [121.9482, 41.0449],
  '石家庄': [114.4995, 38.1006],
  '福州': [119.4543, 25.9222],
  '秦皇岛': [119.2126, 40.0232],
  '绍兴': [120.564, 29.7565],
  '聊城': [115.9167, 36.4032],
  '肇庆': [112.1265, 23.5822],
  '舟山': [122.2559, 30.2234],
  '苏州': [120.6519, 31.3989],
  '莱芜': [117.6526, 36.2714],
  '菏泽': [115.6201, 35.2057],
  '营口': [122.4316, 40.4297],
  '葫芦岛': [120.1575, 40.578],
  '衡水': [115.8838, 37.7161],
  '衢州': [118.6853, 28.8666],
  '西宁': [101.4038, 36.8207],
  '西安': [109.1162, 34.2004],
  '贵阳': [106.6992, 26.7682],
  '连云港': [119.1248, 34.552],
  '邢台': [114.8071, 37.2821],
  '邯郸': [114.4775, 36.535],
  '郑州': [113.4668, 34.6234],
  '鄂尔多斯': [108.9734, 39.2487],
  '重庆': [107.7539, 30.1904],
  '金华': [120.0037, 29.1028],
  '铜川': [109.0393, 35.1947],
  '银川': [106.3586, 38.1775],
  '镇江': [119.4763, 31.9702],
  '长春': [125.8154, 44.2584],
  '长沙': [113.0823, 28.2568],
  '长治': [112.8625, 36.4746],
  '阳泉': [113.4778, 38.0951],
  '青岛': [120.4651, 36.3373],
  '前海': [113.895797, 22.521678],
  '韶关': [113.7964, 24.7028]
};
var warhouse = [
  [{
    name: '杭州'
  }],
  [{
    name: '宁波'
  }],
  [{
    name: '郑州'
  }],
  [{
    name: '重庆'
  }],
  [{
    name: '前海'
  }]
];
var mainCity = [
  [{
    name: '北京'
  }],
  [{
    name: '天津'
  }],
  [{
    name: '上海'
  }],
  [{
    name: '石家庄'
  }],
  [{
    name: '武汉'
  }],
  [{
    name: '长沙'
  }],
  [{
    name: '南京'
  }],
  [{
    name: '南昌'
  }],
  [{
    name: '沈阳'
  }],
  [{
    name: '长春'
  }],
  [{
    name: '哈尔滨'
  }],
  [{
    name: '西安'
  }],
  [{
    name: '太原'
  }],
  [{
    name: '济南'
  }],
  [{
    name: '成都'
  }],
  [{
    name: '西宁'
  }],
  [{
    name: '合肥'
  }],
  [{
    name: '海口'
  }],
  [{
    name: '广州'
  }],
  [{
    name: '贵阳'
  }],
  [{
    name: '福州'
  }],
  [{
    name: '兰州'
  }],
  [{
    name: '昆明'
  }],
  [{
    name: '拉萨'
  }],
  [{
    name: '银川'
  }],
  [{
    name: '南宁'
  }],
  [{
    name: '乌鲁木齐'
  }],
  [{
    name: '呼和浩特'
  }]
];

var planePath = 'path://M1705.06,1318.313z';
var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i];
    var fromCoord = geoCoordMap[dataItem[0].name];
    var toCoord = geoCoordMap[dataItem[1].name];
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem[0].name,
        toName: dataItem[1].name,
        coords: [fromCoord, toCoord]
      });
    }
  }
  return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9', '#d046e9', '#f42c81'];
var series = [];
series.push({ //仓库圆点
  name: "仓库坐标",
  type: 'scatter',
  coordinateSystem: 'geo',
  zlevel: 20,
  rippleEffect: {
    brushType: 'stroke'
  },
  label: {
    normal: {
      show: true,
      position: 'right',
      formatter: '{b}'
    }
  },
  symbolSize: 20,
  itemStyle: {
    normal: {
      color: '#ffa022',
      shadowBlur: 10,
      shadowColor: '#333'
    }
  },
  data: warhouse.map(function (dataItem) {
    return {
      name: dataItem[0].name,
      value: geoCoordMap[dataItem[0].name].concat('10')
    };
  })
}, { //终点
  name: '包裹终点',
  type: 'scatter',
  coordinateSystem: 'geo',
  zlevel: 2,
  rippleEffect: {
    brushType: 'stroke'
  },
  label: {
    normal: {
      show: true,
      fontSize: 8,
      position: 'right',
      formatter: '{b}'
    }
  },
  symbolSize: function (val) {
    return 5;
  },
  itemStyle: {
    normal: {
      color: '#46bee9'
    }
  },
  data: mainCity.map(function (dataItem) {
    return {
      name: dataItem[0].name,
      value: geoCoordMap[dataItem[0].name].concat('10')
    };
  })
});

function randomGetWarhouse() {
  var c = Math.floor(Math.random() * 15);
  if (c <= 1) return "重庆";
  else if (c > 1 && c <= 2) return "前海";
  else if (c > 2 && c <= 4) return "宁波";
  else if (c > 4 && c <= 9) return "杭州";
  else if (c > 9) return "郑州";
}

function randomChongqing(index) {
  if (index > 93) return "广州";
  else if (index > 83 && index <= 93) return "成都";
  else if (index > 75 && index <= 83) return "武汉";
  else if (index > 69 && index <= 75) return "重庆";
  else if (index > 63 && index <= 69) return "深圳";
  else if (index > 57 && index <= 63) return "西安";
  else if (index > 52 && index <= 57) return "长沙";
  else if (index > 47 && index <= 52) return "郑州";
  else if (index > 42 && index <= 47) return "佛山";
  else if (index > 37 && index <= 42) return "沈阳";
  else if (index > 32 && index <= 37) return "南宁";
  else if (index > 28 && index <= 32) return "邵阳";
  else if (index > 24 && index <= 28) return "北京";
  else if (index > 20 && index <= 24) return "福州";
  else if (index > 16 && index <= 20) return "贵阳";
  else if (index > 12 && index <= 16) return "宝鸡";
  else if (index > 9 && index <= 12) return "玉林";
  else if (index > 6 && index <= 9) return "怀化";
  else if (index > 3 && index <= 6) return "揭阳";
  else return "茂名";
}

function randomQianhai(index) {
  if (index > 81) return "广州";
  else if (index > 61 && index <= 81) return "深圳";
  else if (index > 54 && index <= 61) return "东莞";
  else if (index > 47 && index <= 54) return "佛山";
  else if (index > 41 && index <= 47) return "福州";
  else if (index > 36 && index <= 41) return "厦门";
  else if (index > 32 && index <= 36) return "惠州";
  else if (index > 28 && index <= 32) return "中山";
  else if (index > 24 && index <= 28) return "南宁";
  else if (index > 21 && index <= 24) return "泉州";
  else if (index > 18 && index <= 21) return "湛江";
  else if (index > 16 && index <= 18) return "汕头";
  else if (index > 14 && index <= 16) return "上海";
  else if (index > 12 && index <= 14) return "江门";
  else if (index > 10 && index <= 12) return "珠海";
  else if (index > 8 && index <= 10) return "北京";
  else if (index > 6 && index <= 8) return "龙岩";
  else if (index > 4 && index <= 6) return "清远";
  else if (index > 2 && index <= 4) return "宁德";
  else return "漳州";
}

function randomNingbo(index) {
  if (index > 80) return "上海";
  else if (index > 66 && index <= 80) return "北京";
  else if (index > 53 && index <= 66) return "杭州";
  else if (index > 44 && index <= 53) return "广州";
  else if (index > 39 && index <= 44) return "南京";
  else if (index > 34 && index <= 39) return "深圳";
  else if (index > 30 && index <= 34) return "成都";
  else if (index > 27 && index <= 30) return "温州";
  else if (index > 24 && index <= 27) return "苏州";
  else if (index > 21 && index <= 24) return "武汉";
  else if (index > 18 && index <= 21) return "宁波";
  else if (index > 15 && index <= 18) return "天津";
  else if (index > 13 && index <= 15) return "重庆";
  else if (index > 11 && index <= 13) return "长沙";
  else if (index > 9 && index <= 11) return "昆明";
  else if (index > 7 && index <= 9) return "佛山";
  else if (index > 5 && index <= 7) return "青岛";
  else if (index > 3 && index <= 5) return "哈尔滨";
  else if (index > 1 && index <= 3) return "无锡";
  else return "西安";
}

function randomHangzhou(index) {
  if (index > 83) return "上海";
  else if (index > 69 && index <= 83) return "北京";
  else if (index > 58 && index <= 69) return "杭州";
  else if (index > 50 && index <= 58) return "广州";
  else if (index > 45 && index <= 50) return "深圳";
  else if (index > 41 && index <= 45) return "武汉";
  else if (index > 37 && index <= 41) return "南京";
  else if (index > 33 && index <= 37) return "成都";
  else if (index > 29 && index <= 33) return "苏州";
  else if (index > 26 && index <= 29) return "宁波";
  else if (index > 23 && index <= 26) return "天津";
  else if (index > 20 && index <= 23) return "重庆";
  else if (index > 18 && index <= 20) return "西安";
  else if (index > 16 && index <= 18) return "长沙";
  else if (index > 14 && index <= 16) return "无锡";
  else if (index > 12 && index <= 14) return "沈阳";
  else if (index > 10 && index <= 12) return "哈尔滨";
  else if (index > 8 && index <= 10) return "温州";
  else if (index > 7 && index <= 8) return "郑州";
  else if (index > 6 && index <= 7) return "福州";
  else if (index > 5 && index <= 6) return "佛山";
  else if (index > 4 && index <= 5) return "昆明";
  else if (index > 3 && index <= 4) return "大连";
  else if (index > 2 && index <= 3) return "嘉兴";
  else if (index > 1 && index <= 2) return "合肥";
  else return "东莞";
}

function randomZhengzhou(index) {
  if (index > 95) return "北京";
  else if (index > 86 && index <= 95) return "上海";
  else if (index > 78 && index <= 86) return "杭州";
  else if (index > 71 && index <= 78) return "广州";
  else if (index > 66 && index <= 71) return "成都";
  else if (index > 62 && index <= 66) return "深圳";
  else if (index > 58 && index <= 62) return "武汉";
  else if (index > 55 && index <= 58) return "南京";
  else if (index > 52 && index <= 55) return "天津";
  else if (index > 49 && index <= 52) return "重庆";
  else if (index > 46 && index <= 49) return "西安";
  else if (index > 44 && index <= 46) return "郑州";
  else if (index > 42 && index <= 44) return "苏州";
  else if (index > 40 && index <= 42) return "宁波";
  else if (index > 38 && index <= 40) return "长沙";
  else if (index > 36 && index <= 38) return "沈阳";
  else if (index > 34 && index <= 36) return "青岛";
  else if (index > 32 && index <= 34) return "大连";
  else if (index > 31 && index <= 32) return "温州";
  else if (index > 30 && index <= 31) return "福州";
  else if (index > 29 && index <= 30) return "合肥";
  else if (index > 28 && index <= 29) return "哈尔滨";
  else if (index > 27 && index <= 28) return "佛山";
  else if (index > 26 && index <= 27) return "昆明";
  else if (index > 25 && index <= 26) return "济南";
  else if (index > 24 && index <= 25) return "厦门";
  else if (index > 23 && index <= 24) return "东莞";
  else if (index > 22 && index <= 23) return "无锡";
  else if (index > 21 && index <= 22) return "南昌";
  else if (index > 20 && index <= 21) return "长春";
  else if (index > 19 && index <= 20) return "台州";
  else if (index > 18 && index <= 19) return "嘉兴";
  else if (index > 17 && index <= 18) return "贵阳";
  else if (index > 16 && index <= 17) return "绍兴";
  else if (index > 15 && index <= 16) return "金华";
  else if (index > 14 && index <= 15) return "常州";
  else if (index > 13 && index <= 14) return "南宁";
  else if (index > 12 && index <= 13) return "石家庄";
  else if (index > 11 && index <= 12) return "南通";
  else if (index > 10 && index <= 11) return "湖州";
  else if (index > 9 && index <= 10) return "洛阳";
  else if (index > 8 && index <= 9) return "烟台";
  else if (index > 7 && index <= 8) return "惠州";
  else if (index > 6 && index <= 7) return "徐州";
  else if (index > 5 && index <= 6) return "兰州";
  else if (index > 4 && index <= 5) return "泉州";
  else if (index > 3 && index <= 4) return "汕头";
  else if (index > 2 && index <= 3) return "太原";
  else if (index > 1 && index <= 2) return "中山";
  else return "潍坊";
}

function randomGetCity(warhousename) {
  var returncity = "";
  var c = Math.floor(Math.random() * 100);
  switch (warhousename) {
    case "重庆":
      {
        returncity = randomChongqing(c);
        break;
      }
    case "前海":
      {
        returncity = randomQianhai(c);
        break;
      }
    case "宁波":
      {
        returncity = randomNingbo(c);
        break;
      }
    case "杭州":
      {
        returncity = randomHangzhou(c);
        break;
      }
    case "郑州":
      {
        returncity = randomZhengzhou(c);
        break;
      }
  }
  return returncity;
}

var HZData = [];
//随机生成单位时间内的数量
var packagecitycount = Math.floor(Math.random() * 10 + 5); //生成5-15的随机数
for (var i = 0; i < packagecitycount; i++) {
  var warhousename = randomGetWarhouse();
  var cityname = randomGetCity(warhousename);

  // cityindex = Math.floor(Math.random()* Object.keys(geoCoordMap).length)
  // var cityname = Object.keys(geoCoordMap)[cityindex];
  // var warhouseindex = cityindex%Object.keys(warhouse).length;
  // var warhousename = warhouse[warhouseindex][0].name;
  if (cityname != "") {
    var item = [{
      name: warhousename
    }, {
      name: cityname,
      value: 10
    }];
    HZData.push(item);
  }
}

[
  ['杭州', HZData]
].forEach(function (item, i) {
  series.push({ //线
    name: '包裹线路',
    type: 'lines',
    zlevel: 1,
    //symbol: ['none', 'arrow'],
    //symbolSize: 10,
    effect: {
      show: true,
      period: 6,
      trailLength: 0.5,
      color: '#fff',
      //symbol: planePath,
      symbolSize: 3,
      //loop: true
    },
    //animation: false,
    lineStyle: {
      normal: {
        color: color[i],
        width: 1,
        curveness: 0.2
      }
    },
    data: convertData(HZData)
  }, {
    name: '包裹线路',
    type: 'lines',
    zlevel: 2,
    symbol: ['none', 'arrow'],
    symbolSize: 10,
    effect: {
      show: true,
      period: 6,
      trailLength: 0,
      symbol: 'arrow',
      symbolSize: 10
    },
    lineStyle: {
      normal: {
        color: color[i],
        width: 1,
        opacity: 0.6,
        curveness: 0.2
      }
    },
    data: convertData(HZData)
  }, {
    name: 'f',
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
      brushType: 'stroke'
    },
    label: {
      normal: {
        show: true,
        position: 'right',
        formatter: '{b}'
      }
    },
    symbolSize: 10,
    itemStyle: {
      normal: {
        color: color[i]
      }
    },
    data: HZData.map(function (dataItem) {
      return {
        name: dataItem[1].name,
        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
      };
    })
  });
});

let options = {
  orderOption: {
    title: {
      text: '订单完成进度',
      textStyle: {
        color: '#fff',
      },
      left: 'left'
    },
    tooltip: {
      show: false
    },
    legend: {
      data: ['完成单量', '总单量'],
      right: 10,
      textStyle: {
        color: '#fff'
      }
    },
    xAxis: {
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      }
    },
    yAxis: {
      position: 'left',
      inverse: true,
      show: false,
      data: ['郑州仓', '东芝仓', '杭州仓', '宁波仓', '前海仓', '重庆仓']
    },
    series: [{
      name: '完成单量',
      type: 'bar',
      stack: '222',
      barWidth: '25%',
      itemStyle: {
        normal: {
          color: '#4F81BD'
        }
      },
      data: ['29914', '9828', '6619', '1973', '1094', '154']
    }, {
      name: '总单量',
      type: 'bar',
      stack: '222',
      barMaxWidth: '20',
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}',
          textStyle: {
            color: '#fff'
          }
        }
      },
      data: ['156', '2', '75', '45', '0', '0']
    }, {
      name: 'Total',
      type: 'bar',
      stack: '222',
      barMaxWidth: '20',
      label: {
        normal: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#fff',
            fontStyle: 'normal'
          },

        }
      },
      data: [0, 0, 0, 0, 0, 0]
    }]
  },
  //订单比例
  orderRatio: {
    title: {
      text: '各仓系统订单占比',
      textStyle: {
        color: '#fff',
      },
      subtext: '系统总订单：49860',
      subtextStyle: {
        color: '#fff',
        fontSize: 14
      },
      left: 'left'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      right: 0,
      textStyle: {
        color: '#fff'
      },
      data: ['郑州仓', '东芝仓', '杭州仓', '宁波仓', '前海仓', '重庆仓']
    },
    series: [{
      name: '各仓系统订单占比',
      type: 'pie',
      radius: ['30%', '50%'],
      startAngle: 180,
      itemStyle: {
        normal: {
          color: function (params) {
            // build a color map as your need.
            var colorList = [
              '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#D7504B',
              '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
              '#F4E001', '#C6E579', '#F0805A', '#27727B', '#26C0C0'
            ];
            return colorList[params.dataIndex]
          }
        }
      },
      label: {
        normal: {
          position: 'outside',
          formatter: "{b}\n{c}\n({d}%)"
        }
      },
      data: [{
        value: 30070,
        name: '郑州仓'
      }, {
        value: 9830,
        name: '东芝仓'
      }, {
        value: 6694,
        name: '杭州仓'
      }, {
        value: 2018,
        name: '宁波仓'
      }, {
        value: 1094,
        name: '前海仓'
      }, {
        value: 154,
        name: '重庆仓'
      }]
    }]
  },
  //年度单量趋势
  annualQuantity: {
    backgroundColor: '#404a59',
    color: ['#3398DB'],
    title: {
      text: '月单量趋势图（2016.1-2017.6）(万单)',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    textStyle: {
      color: '#fff'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ["2016/1", "2016/2", "2016/3", "2016/4", "2016/5", "2016/6", "2016/7", "2016/8", "2016/9", "2016/10", "2016/11", "2016/12", "2017/1", "2017/2", "2017/3", "2017/4", "2017/5"],
      axisTick: {
        alignWithLabel: true
      }
    }],
    yAxis: [{
      type: 'value'
    }],
    series: [{
        name: '年度单量趋势',
        type: 'bar',
        barWidth: '60%',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [89, 77, 113, 76, 68, 73, 75, 78, 77, 84, 132, 121, 114, 177, 184, 172, 211]
      },
      {
        type: 'line',
        data: [99, 87, 123, 86, 78, 83, 85, 88, 87, 94, 142, 131, 124, 187, 194, 182, 221]
      }
    ]
  },
  //订单实时监控
  logicView: {
    backgroundColor: '#404a59',
    title: {
      text: '订单实时监控',
      subtext: subtextcontent,
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true,
      animation: true,
      zoom: 1.2,
      center: [107.999579, 35.338858],
      itemStyle: {
        normal: {
          areaColor: '#323c48',
          borderColor: '#404a59'
        },
        emphasis: {
          areaColor: '#2a333d'
        }
      }
    },
    series: series
  },
}

export default {
  options
}
