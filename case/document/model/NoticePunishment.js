/**
 * 行政处罚事先告知书
 * @param {Object} caseinfo 案件详情
 * @param {Object} registercase 立案呈批表
 * @param {Object} commoncase 案由信息
 * @param {Object} noticepunishment 行政处罚事先告知书
 */
function NoticePunishment(caseinfo, registercase, commoncase, noticepunishment) {
    this.case_id = null;
    this.document_id = null;
    this.object_name = null;
    this.occur_time = null;
    this.event = null;
    this.violate_policy = null;
    this.accord_policy = null;
    this.punishment = null;
    this.limit_date = null;
    this.plea_place = null;
    this.publish_date = null;
    if (caseinfo) {
        for (var key in this) {
            if (caseinfo.hasOwnProperty(key)) {
                this[key] = caseinfo[key];
            }
        }
    }
    if (registercase) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = registercase[key];
            }
        }
    }
    if (commoncase) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = commoncase[key];
            }
        }
    }
    if (noticepunishment) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = punishment[key];
            }
        }
    }
}

NoticePunishment.prototype.sourceTypesText = {
    "1": "群众举报",
    "2": "巡查发现",
    "3": "媒体发现",
    "4": "部门转办",
    "群众举报": "群众举报",
    "巡查发现": "巡查发现",
    "媒体发现": "媒体发现",
    "部门转办": "部门转办"
};

NoticePunishment.prototype.illegalTypesText = {
    "1": "水利",
    "2": "环保",
    "3": "渔业",
    "4": "海事",
    "水利": "水利",
    "环保": "环保",
    "渔业": "渔业",
    "海事": "海事"
};

NoticePunishment.prototype.placesText = {
    "1": "第一区",
    "2": "第二区",
    "3": "第三区",
    "4": "第四区",
    "第一区": "第一区",
    "第二区": "第二区",
    "第三区": "第三区",
    "第四区": "第四区",
};

NoticePunishment.prototype.cardTypesText = {
    "1": "身份证",
    "2": "军官证",
    "3": "学生证",
    "4": "港澳台同胞证",
    "身份证": "身份证",
    "军官证": "军官证",
    "学生证": "学生证",
    "港澳台同胞证": "港澳台同胞证"
}

NoticePunishment.prototype.domMap = [
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
        name: "主要违法事实",
        key: "event",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "违反规定",
        key: "violate_policy",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "根据规定",
        key: "accord_policy",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "建议给予行政处罚",
        key: "punishment",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },
    {
        name: "承办人",
        key: "excutor",
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
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (params) {
            return params[this.key];
        }
    },{
        key: "reponsible",
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
    },
]