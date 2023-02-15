"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "Платеж успешен",
    statusCode: StatusCode.SUCCESS,
};
if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status) { }
action(StatusCode.SUCCESS);
action(1);
const res2 = 1 /* Roles.ADMIN */;
