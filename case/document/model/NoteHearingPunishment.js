/**
 * 行政处罚听证笔录
 * @param {Object} params 初始化参数
 */
function NoteHearingPunishment(params) {
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

NoteHearingPunishment.prototype.domMap = [
    {
        key: "",
        name: "",
        type: "",
        hidden: false
    }
]