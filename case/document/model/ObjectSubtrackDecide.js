// 扣押物品决定书
function ObjectSubtrackDecide(param0, param1, param2, param3) {
  this.documentID = null;
	this.objectName = null;
	this.occurTime = Date.today().toString("yyyy-MM-dd");
	this.occurBehavior = null;
	this.caseRule = null;
	this.detainGoodsName = null;
	this.governmentName = null;
	this.otherGovernmentName = null;
	this.courtName = null;
	this.detainGoodsReserveAddress = null;
	this.letterTime = Date.today().toString("yyyy-MM-dd");
  
  if (param0) {
  for (var key in this) {
    if (param0.hasOwnProperty(key)) {
        this[key] = param0[key];
    }
  }
}
	if (param1) {
  for (var key in this) {
    if (param1.hasOwnProperty(key)) {
        this[key] = param1[key];
    }
  }
}
	if (param2) {
  for (var key in this) {
    if (param2.hasOwnProperty(key)) {
        this[key] = param2[key];
    }
  }
}
	if (param3) {
  for (var key in this) {
    if (param3.hasOwnProperty(key)) {
        this[key] = param3[key];
    }
  }
}
  this.occurTime = this.occurTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.letterTime = this.letterTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



ObjectSubtrackDecide.prototype.domMap = [
   {
    key: "documentID",
    name: "宜黄综执",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "objectName",
    name: "当事人姓名",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "occurTime",
    name: "案件发生时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "occurBehavior",
    name: "案件名称",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "caseRule",
    name: "根据规定",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "detainGoodsName",
    name: "扣押物品",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "governmentName",
    name: "人民政府名称",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "otherGovernmentName",
    name: "其他行政复议单位",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "courtName",
    name: "人民法院",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "detainGoodsReserveAddress",
    name: "扣押物品保存地点",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "letterTime",
    name: "填写时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }
];
