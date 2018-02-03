/**
 * 添加询问笔录
 * @param {Object} params 初始化参数
 */
function InquireRecordAdd(params) {
    this.answer = null;
    this.appendix = null;
    this.brief = null;
    this.caseID = null;
    this.endExam = null;
    this.examPlace = null;
    this.excutor1 = null;
    this.excutor1Id = null;
    this.excutor2 = null;
    this.excutor2Id = null;
    this.interrogator = null;
    this.noteId = null;
    this.objectAddress = null;
    this.objectAge = null;
    this.objectDepartment = null;
    this.objectId = null;
    this.objectName = null;
    this.objectPhone = null;
    this.objectSex = null;
    this.question = null;
    this.recorder = null;
    this.startExam = null;
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

InquireRecordAdd.prototype.domMap = [
    {
        key: "brief",
        name: "案由",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "startExam",
        name: "询问开始时间",
        type: "date",
        show: function (au) {
            return true;
        }
    },
    {
        key: "endExam",
        name: "询问结束时间",
        type: "date",
        show: function (au) {
            return true;
        }
    },
    {
        key: "examPlace",
        name: "询问地点",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "objectName",
        name: "询问对象姓名",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "objectSex",
        name: "询问对象性别",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "objectAge",
        name: "询问对象年龄",
        type: "number",
        show: function (au) {
            return true;
        }
    },
    {
        key: "objectId",
        name: "询问对象身份证号",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "objectPhone",
        name: "询问对象联系方式",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "objectDepartment",
        name: "询问对象工作单位",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "objectAddress",
        name: "询问对象联系地址",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "interrogator",
        name: "询问人姓名",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "excutor1",
        name: "经办人1姓名",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "excutor2",
        name: "经办人2姓名",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "excutor1Id",
        name: "经办人1证件编号",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "excutor2Id",
        name: "经办人2证件编号",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "recorder",
        name: "记录人",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "question",
        name: "询问事宜",
        type: "text",
        show: function (au) {
            return true;
        }
    },
    {
        key: "answer",
        name: "问答记录",
        type: "textarea",
        show: function (au) {
            return true;
        }
    },
    {
        key: "appendix",
        name: "附录",
        type: "textarea",
        show: function (au) {
            return true;
        }
    },
]