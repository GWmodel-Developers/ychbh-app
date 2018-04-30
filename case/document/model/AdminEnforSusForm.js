// 行政强制中止（终止）执行决定书
function AdminEnforSusForm(param0, param1, param2) {
  this.documentID = null;
	this.objectName = null;
	this.address = null;
	this.documentTime = Date.today().toString("yyyy-MM-dd");
	this.decisionDocumentID = null;
	this.reason = null;
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
  this.documentTime = this.documentTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.reportDate = this.reportDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



AdminEnforSusForm.prototype.domMap = [
   {
    key: "documentID",
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
    key: "documentTime",
    name: "下达行政强制执行决定书时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "decisionDocumentID",
    name: "行政强制执行决定书编号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "reason",
    name: "原由",
    type: "p",
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
