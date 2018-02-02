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

RegisterCase.prototype.domMap = [
    {
        key: "brief",
        name: "测试span",
        type: "span",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return "span内容";
        }
    },{
        key: "informantSex",
        name: "测试p",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return "p内容";
        }
    },{
        key: "leader",
        name: "测试p",
        type: "p",
        show: function (au) {
            return true;
        },
        get: function (detail) {
            return "p内容";
        }
    },{
        key: "occurPlace",
        name: "测试textarea",
        type: "textarea",
        show: function (au) {
            return true;
        }
    },{
        key: "examDate",
        name: "测试p",
        type: "select",
        show: function (au) {
            return true;
        },
        options: [
            { value: "1", text: "第一选项"},
            { value: "2", text: "第二选项"},
            { value: "3", text: "第三选项"},
            { value: "4", text: "第四选项"}
        ]
    },{
        key: "informantAge",
        name: "测试p",
        type: "date",
        show: function (au) {
            return true;
        }
    }
]