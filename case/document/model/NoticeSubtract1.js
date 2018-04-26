// 扣押通知书
function NoticeSubtract(param0, param1, param2) {
  this.objectName = null;
	this.objectID = null;
	this.objectAddress = null;
	this.contactPersonPhone = null;
	this.caseName = null;
	this.caseRule = null;
	this.lawOfficerOne = null;
	this.lawOfficerOneID = null;
	this.lawOfficerTwo = null;
	this.lawOfficerTwoID = null;
	this.letterTime = Date.today().toString("yyyy-MM-dd");
	this.thing = null;
  
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
  this.letterTime = this.letterTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



NoticeSubtract.prototype.domMap = [
   {
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
    key: "objectID",
    name: "当事人身份证号码",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "objectAddress",
    name: "住址",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "contactPersonPhone",
    name: "联系电话",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "caseName",
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
    name: "表格内容",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "lawOfficerOne",
    name: "执法人员",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "lawOfficerOneID",
    name: "执法证件号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "lawOfficerTwo",
    name: "执法人员",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "lawOfficerTwoID",
    name: "执法证件号",
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
  }, {
    key: "thing",
    name: "表格内容",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }
];
