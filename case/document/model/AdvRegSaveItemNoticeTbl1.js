// 先行登记保存物品通知书
function AdvRegSaveItemNoticeTbl(param0, param1, param2, param3, param4) {
  this.doucumentID = null;
	this.objectName = null;
	this.occurTime = Date.today().toString("yyyy-MM-dd");
	this.context = null;
	this.case_rule = null;
	this.thing_name = null;
	this.save_place = null;
	this.reportDate = Date.today().toString("yyyy-MM-dd");
  
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
	if (param4) {
  for (var key in this) {
    if (param4.hasOwnProperty(key)) {
        this[key] = param4[key];
    }
  }
}
  this.occurTime = this.occurTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.reportDate = this.reportDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



AdvRegSaveItemNoticeTbl.prototype.domMap = [
   {
    key: "doucumentID",
    name: "宜黄综执号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "objectName",
    name: "当事人",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "occurTime",
    name: "行为时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "context",
    name: "行为",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "case_rule",
    name: "涉嫌违法的规定",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "thing_name",
    name: "物品名称",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "save_place",
    name: "保存地点",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "reportDate",
    name: "通知时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }
];
