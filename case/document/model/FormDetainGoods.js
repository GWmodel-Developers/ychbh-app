// 扣押物品呈批表
function FormDetainGoods(param0, param1) {
  this.objectName = null;
  this.brief = null;
  this.occurTime = Date.today().toString("yyyy-MM-dd");
  this.occurBehavior = null;
  this.violateRule = null;
  this.caseRule = null;
  this.detainPerson = null;
  this.detainGoodsReserveAddress = null;
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
  this.occurTime = this.occurTime.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.excuteDate = this.excuteDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.examDate = this.examDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
  this.reExamDate = this.reExamDate.replace(/[年月]/g, "-").replace(/[日]/g, "");
}

FormDetainGoods.prototype.toExamForm = function (caseID, caseType, reExamResponsible) {
  return {
    caseID: caseID,
    caseId: caseID,
    caseName: this.brief,
    caseType: caseType,
    documentName: "扣押物品呈批表",
    examDate: this.examDate,
    examResponsible: this.examResponsible,
    examSuggestion: this.examSuggestion,
    leader: reExamResponsible.realname,
    userId: reExamResponsible.uid,
    userName: reExamResponsible.realname
  }
}

FormDetainGoods.prototype.toReExamForm = function (caseID) {
  return {
    caseID: this.case_id || caseID,
    leader: this.leader,
    reExamDate: Date.parse(this.reExamDate).toString("yyyy年MM月dd日"),
    reExamSuggestion: this.reExamSuggestion
  }
}

FormDetainGoods.prototype.domMap = [
  {
    key: "objectName",
    name: "当事人（单位）",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
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
    key: "occurBehavior",
    name: "发案行为",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "violateRule",
    name: "违反规定",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "caseRule",
    name: "依据规定",
    type: "span",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "detainPerson",
    name: "扣押物品",
    type: "p",
    show: function (au) {
      return true;
    },
    get: function (detail) {
      return detail[this.key];
    }
  }, {
    key: "detainGoodsReserveAddress",
    name: "扣押物品保存地点",
    type: "p",
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
