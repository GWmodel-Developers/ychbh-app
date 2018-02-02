/**
 * 行政处罚决定审批表
 * @param {Object} params 初始化参数
 */
function PunishmentDecisionExam(params) {
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

PunishmentDecisionExam.prototype.domMap = [
    {
        key: "",
        name: "",
        type: "",
        hidden: false
    }
]