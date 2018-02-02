/**
 * 先行登记保存物品呈批表
 * @param {Object} params 初始化参数
 */
function KeepEvidence(params) {
    if (params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                this[key] = element
            }
        }
    }
}

KeepEvidence.prototype.domMap = [
    {
        key: "",
        name: "",
        type: "",
        hidden: false
    }
]