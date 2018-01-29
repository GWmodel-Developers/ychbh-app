/**
 * 水库检测报告构造函数
 * @param {Object} param 水库检测报告JSON对象
 */
function PoolRep(param) {
    this.tx_id = "";
    this.wperson = "";
    this.date = "";
    this.yearm = "";
    this.year = "";
    this.month = "";
    this.xun = "";
    this.poolZshus = [];
    if (param) {
        this.tx_id = (param.hasOwnProperty("tx_id") ? param.tx_id : this.tx_id);
        this.wperson = (param.hasOwnProperty("wperson") ? param.wperson : this.wperson);
        this.date = (param.hasOwnProperty("date") ? param.date : this.date);
        this.yearm = (param.hasOwnProperty("yearm") ? param.yearm : this.yearm);
        this.xun = (param.hasOwnProperty("xun") ? param.xun : this.xun);
        if (param.hasOwnProperty("poolZshus") && param.poolZshus instanceof Array) {
            this.poolZshus = param.poolZshus.map(function (item, index) {
                return new Pool(item);
            })
        }
    }
}

/**
 * 水库检测报告转为表单字符串
 */
PoolRep.prototype.toForm = function () {
    var data = "";
    for (var key in this) {
        if (this.hasOwnProperty(key) && (typeof this[key] !== "function")) {
            var element = this[key];
            switch (key) {
                case "poolZshus":
                    data += this.poolZshus.map(function (item) {
                        return item.toForm();
                    }).join("");
                    break;
                case "yearm":
                    data += ("&" + "yearm" + "=" + this.year + "-" + this.month);
                    break;
                case "year":
                    break;
                case "month":
                    break;
                case "date":
                    data += ("&" + key + "=" + Date.parse(element).toString("yyyy年MM月dd日"));
                    break;
                default:
                    data += ("&" + key + "=" + element);
                    break;
            }
        }
    }
    return data;
}