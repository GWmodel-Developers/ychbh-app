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
        key: "",
        name: "",
        type: "",
        hidden: false
    }
]