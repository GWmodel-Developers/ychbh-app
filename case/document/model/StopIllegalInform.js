// 责令停止涉嫌违法行为通知书
function StopIllegalInform(param0, param1, param2, param3) {
  this.documentID = null;
  this.objectName = null;
  this.occurTime = Date.today().toString("yyyy-MM-dd");
  this.context = null;
  this.violatePolicy = null;
  this.accordPolicy = null;
  this.illegalAct = null;
  this.attach = null;
  this.issuer = null;
  this.recipient = null;
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
  this.occurTime = this.occurTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.reportDate = this.reportDate.replace(/[年月]/g, "-").replace(/[日]/g, "");

}



StopIllegalInform.prototype.domMap = [
  {
    key: "documentID",
    name: "宜黄综执字",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
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
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "violatePolicy",
    name: "违反规定",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "accordPolicy",
    name: "根据规定",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "illegalAct",
    name: "违法行为",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "attach",
    name: "附",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "issuer",
    name: "签发人",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "recipient",
    name: "接收人",
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
