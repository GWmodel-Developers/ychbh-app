// 不予行政处罚决定书
function NoAdministrativePenalty(param0, param1, param2, param3, param4) {
  this.document_id = null;
	this.object_name = null;
	this.occur_date = Date.today().toString("yyyy-MM-dd");
	this.occur_place = null;
	this.event = null;
	this.violate_policy = null;
	this.publish_date = Date.today().toString("yyyy-MM-dd");
  
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
  this.occur_date = this.occur_date.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.publish_date = this.publish_date.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



NoAdministrativePenalty.prototype.domMap = [
   {
    key: "document_id",
    name: "文书编号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "object_name",
    name: "当事人(单位)",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "occur_date",
    name: "时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "occur_place",
    name: "地点",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "event",
    name: "违法行为",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "violate_policy",
    name: "违反规定",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "publish_date",
    name: "处罚决定书填写日期",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }
];
