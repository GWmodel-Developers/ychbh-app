// 行政强制结案报告
function AdimiEnforEndReport(param0, param1, param2) {
  this.brief = null;
	this.source = null;
	this.objectName = null;
	this.responsible = null;
	this.registerDate = Date.today().toString("yyyy-MM-dd");
	this.punishDate = Date.today().toString("yyyy-MM-dd");
	this.punishDocId = null;
	this.excutor = null;
	this.description = null;
	this.punishment = null;
	this.excuteSituation = null;
	this.endSuggestion = null;
	this.endDate = Date.today().toString("yyyy-MM-dd");
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
  this.registerDate = this.registerDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.punishDate = this.punishDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
this.endDate = this.endDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
   this.examDate = this.examDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.reExamDate = this.reExamDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
}

AdimiEnforEndReport.prototype.toExamForm = function (caseID, caseType, reExamResponsible) {
  return {
      caseID: caseID,
      caseId: caseID,
      caseName: this.brief,
      caseType: caseType,
      documentName: "行政强制结案报告",
      examDate: this.examDate,
      examResponsible: this.examResponsible,
      examSuggestion: this.examSuggestion,
      leader: this.leader,
      userId: reExamResponsible.uid,
      userName: reExamResponsible.realname
  }
}

AdimiEnforEndReport.prototype.toReExamForm = function (caseID) {
  return {
      caseID: this.case_id || caseID,
      leader: this.leader,
      reExamDate: Date.parse(this.reExamDate).toString("yyyy年MM月dd日"),
      reExamSuggestion: this.reExamSuggestion
  }
}

AdimiEnforEndReport.prototype.domMap = [
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
    key: "source",
    name: "来源类型",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "objectName",
    name: "被处罚单位",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "responsible",
    name: "法定代表人（负责人）",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "registerDate",
    name: "立案日期",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "punishDate",
    name: "处罚日期",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "punishDocId",
    name: "处罚文书号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "excutor",
    name: "经办人",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "description",
    name: "简要案情及调查经过",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "punishment",
    name: "处罚内容",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "excuteSituation",
    name: "执行情况",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "endSuggestion",
    name: "结案建议",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "endDate",
    name: "结案日期",
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
