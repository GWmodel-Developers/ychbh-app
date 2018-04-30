// 先行登记保存物品呈批表
function AdvRegSaveItemTbl(param0, param1, param2, param3, param4, param5) {
  this.brief = null;
  this.objectName = null;
  this.occurTime = Date.today().toString("yyyy-MM-dd");
  this.context = null;
  this.thing_name = null;
  this.save_place = null;
  this.excutor1 = null;
  this.excutor2 = null;
  this.excutorDate = Date.today().toString("yyyy-MM-dd");
  this.case_rule = null;
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
  if (param5) {
    for (var key in this) {
      if (param5.hasOwnProperty(key)) {
        this[key] = param5[key];
      }
    }
  }
  this.occurTime = this.occurTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.excutorDate = this.excutorDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.examDate = this.examDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.reExamDate = this.reExamDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
}

AdvRegSaveItemTbl.prototype.toExamForm = function (caseID, caseType, reExamResponsible) {
  return {
    caseID: caseID,
    caseId: caseID,
    caseName: this.brief,
    caseType: caseType,
    documentName: "先行登记保存物品呈批表",
    examDate: this.examDate,
    examResponsible: this.examResponsible,
    examSuggestion: this.examSuggestion,
    leader: this.leader,
    userId: reExamResponsible.uid,
    userName: reExamResponsible.realname
  }
}

AdvRegSaveItemTbl.prototype.toReExamForm = function (caseID) {
  return {
    caseID: this.case_id || caseID,
    leader: this.leader,
    reExamDate: Date.parse(this.reExamDate).toString("yyyy年MM月dd日"),
    reExamSuggestion: this.reExamSuggestion
  }
}

AdvRegSaveItemTbl.prototype.domMap = [
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
    key: "occurTime",
    name: "发案日期",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "context",
    name: "地点及行为",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "thing_name",
    name: "先行登记保存物品名称",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "save_place",
    name: "保存地点",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "excutor1",
    name: "经办人1",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "excutor2",
    name: "经办人2",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "excutorDate",
    name: "办理日期",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "case_rule",
    name: "违反规定",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
