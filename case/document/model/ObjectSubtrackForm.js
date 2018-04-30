// 扣押物品审批表
function ObjectSubtrackForm(param0, param1, param2, param3, param4, param5) {
  this.brief = null;
  this.objectName = null;
  this.documentID = null;
  this.documentArriveDate = null;
  this.punishContent = null;
  this.objectStateContent = null;
  this.excutorOpinion = null;
  this.excutor = null;
  this.excuteDate = Date.today().toString("yyyy-MM-dd");
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
  this.excuteDate = this.excuteDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.examDate = this.examDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.reExamDate = this.reExamDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
}

ObjectSubtrackForm.prototype.toExamForm = function (caseID, caseType, reExamResponsible) {
  return {
    caseID: caseID,
    caseId: caseID,
    caseName: this.brief,
    caseType: caseType,
    documentName: "扣押物品审批表",
    examDate: this.examDate,
    examResponsible: this.examResponsible,
    examSuggestion: this.examSuggestion,
    leader: reExamResponsible.realname,
    userId: reExamResponsible.uid,
    userName: reExamResponsible.realname
  }
}

ObjectSubtrackForm.prototype.toReExamForm = function (caseID) {
  return {
    caseID: this.case_id || caseID,
    leader: this.leader,
    reExamDate: Date.parse(this.reExamDate).toString("yyyy年MM月dd日"),
    reExamSuggestion: this.reExamSuggestion
  }
}

ObjectSubtrackForm.prototype.domMap = [
  {
    key: "brief",
    name: "案由",
    type: "p",
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
    key: "documentID",
    name: "事先告知书文书编号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "documentArriveDate",
    name: "事先告知书文书送达日期",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "punishContent",
    name: "事先告知书建议处罚内容",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "objectStateContent",
    name: "当事人陈述、申辩的意见和理由",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "excutorOpinion",
    name: "承办人意见",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "excutor",
    name: "承办人",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "excuteDate",
    name: "办理时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
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
