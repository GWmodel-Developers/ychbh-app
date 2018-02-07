/**
 * 行政处罚决定审批表
 * @param {Object} params 初始化参数
 */
function PunishmentDecisionExam(caseinfo, registercase, punishmentdecisionexam) {
    this.caseId = null;
    this.brief = null;
    this.objectName = null;
    this.pretellDocId = null;
    this.pretellReceiverDate = null;
    this.pretellSuggestion = null;
    this.objectReason = null;
    this.excuteSuggestion = null;
    this.excutor = null;
    this.excuteDate = null;
    this.examSuggestion = null;
    this.examResponsible = null;
    this.examDate = null;
    this.leader = null;
    this.reExamSuggestion = null;
    this.reExamDate = null;
    if (registercase) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = registercase[key];
            }
        }
    }
    if (reportendinvastigate) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = reportendinvastigate[key];
            }
        }
    }
    if (punishmentdecisionexam) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = punishmentdecisionexam[key];
            }
        }
    }
}

PunishmentDecisionExam.prototype.domMap = [
    {
        name: "案由/案件名称",
        key: "brief",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "当事人",
        key: "objectName",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "事先告知文书编号",
        key: "pretellDocId",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "事先告知文书送达日期",
        key: "pretellReceiverDate",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "建议处罚内容",
        key: "pretellSuggestion",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "当事人陈述申辩意见和理由",
        key: "objectReason",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "承办人处理意见",
        key: "excuteSuggestion",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },{
        name: "承办人",
        key: "excutor",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },
    {
        name: "办理日期",
        key: "excuteDate",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return detail[this.key];
        }
    },
    {
        key: "examResponsible",
        name: "综合执法支队负责人",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "examSuggestion",
        name: "审核意见",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "examDate",
        name: "审核日期",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "leader",
        name: "主管领导",
        type: "select",
        options: [],
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "reExamSuggestion",
        name: "审批意见",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "reExamDate",
        name: "审批日期",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    }
]