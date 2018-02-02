/**
 * 行政处罚结案报告
 * @param {Object} params 初始化参数
 */
function EndCasePunishment(params) {
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

EndCasePunishment.prototype.domMap = [
    {
        key: "",
        name: "",
        type: "",
        hidden: false
    }
]