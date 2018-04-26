// 行政强制执行协议
function AdimiEnforPro(param0, param1, param2, param3, param4) {
  this.documentID = null;
	this.legalRepresentative = null;
	this.post = null;
	this.objectName = null;
	this.address = null;
	this.blegalRepresentative = null;
	this.bpost = null;
	this.decisionTime = Date.today().toString("yyyy-MM-dd");
	this.decisionID = null;
	this.agreement = null;
	this.partyA = null;
	this.partyB = null;
	this.partyATime = Date.today().toString("yyyy-MM-dd");
	this.partyBTime = Date.today().toString("yyyy-MM-dd");
	this.partyASign = null;
	this.partyBSign = null;
  
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
  this.decisionTime = this.decisionTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.partyATime = this.partyATime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.partyBTime = this.partyBTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



AdimiEnforPro.prototype.domMap = [
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
    key: "legalRepresentative",
    name: "法定代表人",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "post",
    name: "职务",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "objectName",
    name: "乙方（当事人）",
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
    key: "blegalRepresentative",
    name: "乙方法定代表人",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "bpost",
    name: "职务",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "decisionTime",
    name: "送达行政强制执行决定书时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "decisionID",
    name: "行政强制执行决定书编号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "agreement",
    name: "执行协议",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "partyA",
    name: "甲方（行政机关）",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "partyB",
    name: "乙方（当事人）",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "partyATime",
    name: "甲方签字时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "partyBTime",
    name: "乙方签字时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "partyASign",
    name: "甲方法定代表人签章",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "partyBSign",
    name: "乙方法定代表人签章",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }
];
