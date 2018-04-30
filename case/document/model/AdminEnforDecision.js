// 行政强制执行决定书
function AdminEnforDecision(param0, param1, param2) {
  this.documentID = null;
	this.objectName = null;
	this.address = null;
	this.udocumentID = null;
	this.udocumentName = null;
	this.adminEnforceID = null;
	this.enforceTime = Date.today().toString("yyyy-MM-dd");
	this.enforcement = null;
	this.department = null;
	this.peopleCourt = null;
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
  this.enforceTime = this.enforceTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.reportDate = this.reportDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



AdminEnforDecision.prototype.domMap = [
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
    name: "催告书编号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "enforceTime",
    name: "强制执行时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "enforcement",
    name: "强制执行措施",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "department",
    name: "申请行政复议部门",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "peopleCourt",
    name: "人民法院",
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
