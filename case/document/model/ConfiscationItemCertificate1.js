// 没收物品凭证
function ConfiscationItemCertificate(param0, param1, param2, param3) {
  this.doucumentID = null;
	this.brief = null;
	this.objectName = null;
	this.informantName = null;
	this.doucumentID2 = null;
	this.thing_name = null;
	this.proofDate = Date.today().toString("yyyy-MM-dd");
  
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
  this.proofDate = this.proofDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



ConfiscationItemCertificate.prototype.domMap = [
   {
    key: "doucumentID",
    name: "宜黄综执",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "brief",
    name: "案由",
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
    key: "informantName",
    name: "法定代表人",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "doucumentID2",
    name: "行政处罚决定书号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "thing_name",
    name: "没收物品",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "proofDate",
    name: "凭证时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }
];
