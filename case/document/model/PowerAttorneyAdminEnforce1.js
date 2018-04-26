// 行政强制执行委托书
function PowerAttorneyAdminEnforce(param0, param1) {
  this.documentID = null;
	this.agency = null;
	this.address = null;
	this.legalRepresentative = null;
	this.post = null;
	this.bagency = null;
	this.baddress = null;
	this.blegalRepresentative = null;
	this.bpost = null;
	this.object = null;
	this.replaceStandard = null;
	this.replaceWay = null;
	this.replaceTime = Date.today().toString("yyyy-MM-dd");
	this.replaceMoney = null;
	this.partyA = null;
	this.partyASign = null;
	this.partyATime = Date.today().toString("yyyy-MM-dd");
	this.partyB = null;
	this.partyBTime = Date.today().toString("yyyy-MM-dd");
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
  this.replaceTime = this.replaceTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.partyATime = this.partyATime.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.partyBTime = this.partyBTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



PowerAttorneyAdminEnforce.prototype.domMap = [
   {
    key: "documentID",
    name: "文书编号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "agency",
    name: "委托机关",
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
    type: "p",
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
    key: "bagency",
    name: "被委托人（单位）",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "baddress",
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
    name: "法定代表人",
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
    key: "object",
    name: "委托拍卖财物",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "replaceStandard",
    name: "委托代履行下标的",
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
    key: "replaceMoney",
    name: "代履行费用预算",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "partyA",
    name: "委托机关",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "partyASign",
    name: "委托机关法定代表人签章",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "partyATime",
    name: "委托机关签字时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "partyB",
    name: "被委托人（单位）",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "partyBTime",
    name: "被委托人（单位）签字时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "partyBSign",
    name: "被委托人（单位）法定代表人签章",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }
];
