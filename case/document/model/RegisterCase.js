/**
 * 立案呈批表
 * @param {Object} params 初始化参数
 */
function RegisterCase(params) {
    this.brief = null;
    this.informantSex = null;
    this.leader = null;
    this.occurPlace = null;
    this.examDate = null;
    this.informantAge = null;
    this.excutor1 = null;
    this.occurTime = null;
    this.informantPhone = null;
    this.suggestion = null;
    this.informantID = null;
    this.reExamSuggestion = null;
    this.content = null;
    this.reponsible = null;
    this.examSuggestion = null;
    this.informantAdress = null;
    this.reportDate = null;
    this.informantName = null;
    this.responsible = null;
    this.reExamDate = null;
    this.excuteDate = null;
    this.objectName = null;
    this.excutor2 = null;
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

RegisterCase.prototype.sourceTypesText = {
    "1": "群众举报",
    "2": "巡查发现",
    "3": "媒体发现",
    "4": "部门转办"
};

RegisterCase.prototype.illegalTypesText = {
    "1": "水利",
    "2": "环保",
    "3": "渔业",
    "4": "海事"
};

RegisterCase.prototype.placesText = {
    "1": "第一区",
    "2": "第二区",
    "3": "第三区",
    "4": "第四区"    
};

RegisterCase.prototype.cardTypesText = {
    "1": "身份证",
    "1": "军官证",
    "1": "学生证",
    "1": "港澳台同胞证"
}

RegisterCase.prototype.domMap = [
    {
        name: "案由",
        key: "brief",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "案件来源",
        key: "sourceID",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return RegisterCase.prototype.sourceTypesText[params[this.key]];
        }
    },
    {
        name: "接案时间",
        key: "reportDate",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "发案时间",
        key: "occurTime",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "发案地点",
        key: "occurPlace",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "当事人（单位）",
        key: "objectName",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "法定代表人（负责人）",
        key: "informantName",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "性别",
        key: "informantSex",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "年龄",
        key: "informantAge",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "身份证件号",
        key: "informantID",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "地址、单位",
        key: "informantAdress",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "联系方式",
        key: "informantPhone",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "案情摘要",
        key: "content",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "办理意见",
        key: "suggestion",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "经办人1",
        key: "excutor1",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "经办人2",
        key: "excutor2",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "办理日期",
        key: "excuteDate",
        type: "date",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "综合执法支队负责人",
        key: "reponsible",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "审核意见",
        key: "examSuggestion",
        type: "span",
        show: function (au) {
            return au.a_case_exam == 1;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "审核日期",
        key: "examDate",
        type: "date",
        show: function (au) {
            return au.a_case_exam == 1;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "审批意见",
        key: "reExamSuggestion",
        type: "span",
        show: function (au) {
            return au.a_case_reexam == 1;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "主管领导",
        key: "leader",
        type: "select",
        options: [],
        show: function (au) {
            return au.a_case_exam == 1;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "审批日期",
        key: "reExamDate",
        type: "date",
        show: function (au) {
            return au.a_case_reexam == 1;
        },
        get: function (params) {
            return params[this.key];            
        }
    }
]