// 案件移送函
function TransferLetter(param0, param1, param2, param3, param4, param5) {
  this.document_id = null;
	this.notice_person = null;
	this.case_name = null;
	this.case_context = null;
	this.case_rule = null;
	this.require_time = null;
	this.unit_address = null;
	this.contact_person_name = null;
	this.contact_person_phone = null;
	this.letter_time = Date.today().toString("yyyy-MM-dd");
  
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
	if (param5) {
  for (var key in this) {
    if (param5.hasOwnProperty(key)) {
        this[key] = param5[key];
    }
  }
}
  this.letter_time = this.letter_time.replace(/[年月]/g, "-").replace(/[日]/g, "");
  
}



TransferLetter.prototype.domMap = [
   {
    key: "document_id",
    name: "宜黄综执",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "notice_person",
    name: "移送单位",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "case_name",
    name: "案件名称",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "case_context",
    name: "案件内容",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "case_rule",
    name: "根据规定",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "require_time",
    name: "移交时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "unit_address",
    name: "单位地址",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "contact_person_name",
    name: "联系人",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "contact_person_phone",
    name: "联系电话",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "letter_time",
    name: "填写时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }
];
