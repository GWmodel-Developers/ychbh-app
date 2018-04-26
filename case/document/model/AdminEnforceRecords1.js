// 行政强制执行记录
function AdminEnforceRecords(param0, param1, param2) {
  this.time = Date.today().toString("yyyy-MM-dd");
	this.location = null;
	this.objectName = null;
	this.agency = null;
	this.cardName = null;
	this.card = null;
	this.agenceName = null;
	this.cardID = null;
	this.kind = null;
	this.documentkind = null;
	this.documentID = null;
	this.situation = null;
	this.objectsign = null;
	this.objectTime = Date.today().toString("yyyy-MM-dd");
	this.agencysign = null;
	this.agencyTime = Date.today().toString("yyyy-MM-dd");
	this.lawagency = null;
	this.lawTime = Date.today().toString("yyyy-MM-dd");
	this.lawID = null;
  
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
  this.time = this.time.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.objectTime = this.objectTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.agencyTime = this.agencyTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.lawTime = this.lawTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



AdminEnforceRecords.prototype.domMap = [
   {
    key: "time",
    name: "时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "location",
    name: "地点",
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
    key: "agency",
    name: "代理（经办）人",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "cardName",
    name: "证件名称",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "card",
    name: "证件号码",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "agenceName",
    name: "代理（经办）人证件名称",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "cardID",
    name: "证件号码",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "kind",
    name: "行政强制执行种类",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "documentkind",
    name: "法律文书种类",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "documentID",
    name: "法律文书编号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "situation",
    name: "实施（解除）行政强制执行经过及情况",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "objectsign",
    name: "当事人（代理人）签章",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "objectTime",
    name: "时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "agencysign",
    name: "代履行人签章",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "agencyTime",
    name: "时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "lawagency",
    name: "执法人员签章",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "lawTime",
    name: "时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "lawID",
    name: "执法证号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }
];
