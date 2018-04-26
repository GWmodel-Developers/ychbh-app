// 人民法院不予受理（执行）裁定复议申请书
function CourtNotAccept(param0, param1, param2, param3) {
  this.documentID = null;
	this.peopleCourt = null;
	this.applyTime = Date.today().toString("yyyy-MM-dd");
	this.enforceDocumentID = null;
	this.bpeopleCourt = null;
	this.disregardTime = Date.today().toString("yyyy-MM-dd");
	this.disregardID = null;
	this.reportDate = Date.today().toString("yyyy-MM-dd");
	this.noninforceID = null;
	this.contacts = null;
	this.contactNumber = null;
  
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
  this.applyTime = this.applyTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.disregardTime = this.disregardTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.reportDate = this.reportDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



CourtNotAccept.prototype.domMap = [
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
    key: "applyTime",
    name: "申请强制执行时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "enforceDocumentID",
    name: "强制执行申请书编号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "bpeopleCourt",
    name: "被申请强制执行人民法院",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "disregardTime",
    name: "作出不予受理裁定时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "disregardID",
    name: "不予受理裁定编号",
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
  }, {
    key: "noninforceID",
    name: "不予执行裁定编号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "contacts",
    name: "联系人",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "contactNumber",
    name: "联系电话",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }
];
