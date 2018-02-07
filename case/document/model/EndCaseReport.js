/**
 * 行政处罚结案报告
 * @param {Object} params 初始化参数
 */
function EndCaseReport(params) {
    this.brief = null;
    this.source = null;
    this.objectName = null;
    this.responsible = null;
    this.registerDate = null;
    this.punishDate = null;
    this.punishDocId = null;
    this.excutor = null;
    this.description = null;
    this.punishment = null;
    this.excuteSituation = null;
    this.endSuggestion = null;
    this.endDate = null;
    this.examResponsible = null;
    this.examSuggestion = null;
    this.examDate = null;
    this.leader = null;
    this.reExamSuggestion = null;
    this.reExamDate = null;
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

EndCaseReport.prototype.domMap = [
    {
        key: "brief",
        name: "案由",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "source",
        name: "来源类型",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "objectName",
        name: "被处罚单位",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "responsible",
        name: "法定代表人（负责人）",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "registerDate",
        name: "立案日期",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "punishDate",
        name: "处罚日期",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "punishDocId",
        name: "处罚文书号",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "excutor",
        name: "经办人",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "description",
        name: "简要案情及调查经过",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "punishment",
        name: "处罚内容",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "excuteSituation",
        name: "执行情况",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "endSuggestion",
        name: "结案建议",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "endDate",
        name: "结案日期",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "examResponsible",
        name: "综合执法支队负责人",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "examSuggestion",
        name: "审核意见",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "examDate",
        name: "审核时间",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "leader",
        name: "主管领导",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "reExamSuggestion",
        name: "审批意见",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        key: "reExamDate",
        name: "审批时间",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
]