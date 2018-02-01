/**
 * 案源登记表
 * @param {Object} params 初始化参数
 */
function CaseView(params) {
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

CaseView.prototype.domMap = [
    {
        key: "",
        name: "",
        type: "",
        hidden: false
    }
]