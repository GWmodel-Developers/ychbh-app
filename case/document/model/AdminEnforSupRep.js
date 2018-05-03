// 行政执法后督查报告
function AdminEnforSupRep(param0, param1, param2) {
  this.objectName = null;
  this.documentTime = Date.today().toString("yyyy-MM-dd");
  this.documentID = null;
  this.documentIID = null;
  this.signTime = Date.today().toString("yyyy-MM-dd");
  this.checkTime = Date.today().toString("yyyy-MM-dd");
  this.correctIllegal = null;
  this.haveFineshed = null;
  this.notFineshed = null;
  this.advice = null;
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
  this.signTime = this.signTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.checkTime = this.checkTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.reportDate = this.reportDate.replace(/[年月]/g, "-").replace(/[日]/g, "");

}



AdminEnforSupRep.prototype.domMap = [
  {
    key: "objectName",
    name: "当事人（单位）",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "documentTime",
    name: "下达通知书时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
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
    key: "documentIID",
    name: "通知书编号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "signTime",
    name: "签收时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "checkTime",
    name: "检查时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "correctIllegal",
    name: "责令改正违法内容",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "haveFineshed",
    name: "已完成整改情况",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "notFineshed",
    name: "未完成整改情况",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "advice",
    name: "处理意见",
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
