// 不予立案呈批表
function FormUnRegisterCase(param0, param1) {
  this.reportDate = Date.today().toString("yyyy-MM-dd");
  this.brief = null;
  this.occurTime = Date.today().toString("yyyy-MM-dd");
  this.occurPlace = null;
  this.objectName = null;
  this.informantPhone = null;
  this.informantID = null;
  this.informantName = null;
  this.informantAdress = null;
  this.informantAge = null;
  this.informantSex = null;
  this.content = null;
  this.suggestion = null;
  this.responsible = null;
  this.excutor1 = null;
  this.excutor2 = null;
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
  this.reportDate = this.reportDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.occurTime = this.occurTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.excuteDate = this.excuteDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.examDate = this.examDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.reExamDate = this.reExamDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
}

FormUnRegisterCase.prototype.toExamForm = function (caseID, caseType, reExamResponsible) {
  return {
    caseID: caseID,
    caseId: caseID,
    caseName: this.brief,
    caseType: caseType,
    documentName: "不予立案呈批表",
    examDate: this.examDate,
    examResponsible: this.examResponsible,
    examSuggestion: this.examSuggestion,
    userName: reExamResponsible.realname,
    userId: reExamResponsible.uid,
    userName: reExamResponsible.realname
  }
}

FormUnRegisterCase.prototype.toReExamForm = function (caseID) {
  return {
    caseID: this.case_id || caseID,
    leader: this.leader,
    reExamDate: Date.parse(this.reExamDate).toString("yyyy年MM月dd日"),
    reExamSuggestion: this.reExamSuggestion
  }
}

FormUnRegisterCase.prototype.domMap = [
  {
    key: "reportDate",
    name: "接案时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
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
    key: "occurTime",
    name: "发案时间",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return Date.parse(detail[this.key]).toString("yyyy年MM月dd日");
    }
  }, {
    key: "occurPlace",
    name: "发案地点",
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
    key: "informantPhone",
    name: "联系方式",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "informantID",
    name: "身份证件号",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "informantName",
    name: "法定代表人（负责人）",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "informantAdress",
    name: "地址",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "informantAge",
    name: "年龄",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "informantSex",
    name: "性别",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "content",
    name: "案情摘要",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "suggestion",
    name: "违反规定",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "responsible",
    name: "违反规定",
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
    key: "excuteDate",
    name: "办理日期",
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
