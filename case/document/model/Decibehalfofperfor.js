// 代履行决定书
function Decibehalfofperfor(param0, param1, param2, param3, param4) {
  this.documentID = null;
	this.objectName = null;
	this.address = null;
	this.udocumentID = null;
	this.udocumentName = null;
	this.adminEnforceID = null;
	this.replaceWay = null;
	this.replaceTime = Date.today().toString("yyyy-MM-dd");
	this.replaceBehavior = null;
	this.replaceStandard = null;
	this.money = null;
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
    
  this.replaceTime = this.replaceTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.reportDate = this.reportDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



Decibehalfofperfor.prototype.domMap = [
   {
    key: "documentID",
    name: "黄综执号",
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
    key: "address",
    name: "地址",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "udocumentID",
    name: "未履行文书编号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "udocumentName",
    name: "未履行文书名称",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "adminEnforceID",
    name: "行政强制执行催告书编号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "replaceWay",
    name: "代履行方式",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "replaceTime",
    name: "代履行时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "replaceBehavior",
    name: "代履行人行为",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "replaceStandard",
    name: "代履行的标",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "money",
    name: "代履行的费用预算",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "reportDate",
    name: "告知日期",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }
];
