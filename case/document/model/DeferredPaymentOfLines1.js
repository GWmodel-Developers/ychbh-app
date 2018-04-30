// 延（分）期缴纳罚款呈批表
function DeferredPaymentOfLines(param0, param1, param2, param3, param4) {
  this.brief = null;
	this.objectName = null;
	this.informantName = null;
	this.doucumentID2 = null;
	this.delayReason = null;
	this.delayDate = Date.today().toString("yyyy-MM-dd");
	this.discussOpinion = null;
	this.attendPerson = null;
	this.discussDate = Date.today().toString("yyyy-MM-dd");
   this.examSuggestion = null;
  this.examDate = Date.today().toString("yyyy-MM-dd");
  this.leader = null;
  this.reExamSuggestion = null;
  this.reExamDate = Date.today().toString("yyyy-MM-dd");
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
  this.delayDate = this.delayDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.discussDate = this.discussDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
   this.examDate = this.examDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.reExamDate = this.reExamDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
}

DeferredPaymentOfLines.prototype.toExamForm = function (caseID, caseType, reExamResponsible) {
  return {
      caseID: caseID,
      caseId: caseID,
      caseName: this.brief,
      caseType: caseType,
      documentName: "延（分）期缴纳罚款呈批表",
      examDate: this.examDate,
      examResponsible: this.examResponsible,
      examSuggestion: this.examSuggestion,
      leader: reExamResponsible.realname,
      userId: reExamResponsible.uid,
      userName: reExamResponsible.realname
  }
}

DeferredPaymentOfLines.prototype.toReExamForm = function () {
  return {
      caseId: this.case_id,
      leader: this.leader,
      reExamDate: Date.parse(this.reExamDate).toString("yyyy年MM月dd日"),
      reExamSuggestion: this.reExamSuggestion
  }
}

DeferredPaymentOfLines.prototype.domMap = [
   {
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
    name: "当事人（单位）",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "informantName",
    name: "法定代表人(负责人)",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "doucumentID2",
    name: "处罚决定文书号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "delayReason",
    name: "请求批准延（分）期缴纳罚款理由",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "delayDate",
    name: "请求批准延（分）期缴纳罚款期限",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "discussOpinion",
    name: "讨论意见",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "attendPerson",
    name: "参加人员",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "discussDate",
    name: "讨论日期",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  },{
  key: "examSuggestion",
  name: "审核意见",
  type: (function () {
      var au = JSON.parse(localStorage.getItem("au"));
      var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
      if (code < 4) return "p";
      else if (code < 8) return "textarea";
      else return "p";
  })(),
  show: function (au) {
      return true;
  },
  get: function (params) {
      return params[this.key];
  }
},{
  key: "examDate",
  name: "审核日期",
  type: (function () {
      var au = JSON.parse(localStorage.getItem("au"));
      var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
      if (code < 4) return "span";
      else if (code < 8) return "date";
      else return "span";
  })(),
  show: function (au) {
      return true;
  },
  get: function (params) {
      return this.type === "date" ? params[this.key] : Date.parse(params[this.key]).toString("yyyy年MM月dd日");
  }
},{
  key: "leader",
  name: "主管领导",
  type: (function () {
      var au = JSON.parse(localStorage.getItem("au"));
      var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
      if (code < 4) return "span";
      else if (code < 8) return "select";
      else return "span";
  })(),
  show: function (au) {
      return true;
  },
  get: function (params) {
      return params[this.key];
  }
},{
  key: "reExamSuggestion",
  name: "审批意见",
  type: (function () {
      var au = JSON.parse(localStorage.getItem("au"));
      var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
      if (code < 8) return "p";
      else return "textarea";
  })(),
  show: function (au) {
      return true;
  },
  get: function (params) {
      return params[this.key];
  }
},{
  key: "reExamDate",
  name: "审批日期",
  type: (function () {
      var au = JSON.parse(localStorage.getItem("au"));
      var code = au.a_case_reexam * 8 + au.a_case_exam * 4 + au.a_case_submit * 2 + au.a_case_read * 1;
      if (code < 8) return "p";
      else return "date";
  })(),
  show: function (au) {
      return true;
  },
  get: function (params) {
      return this.type === "date" ? params[this.key] : Date.parse(params[this.key]).toString("yyyy年MM月dd日");
  }
}
];
