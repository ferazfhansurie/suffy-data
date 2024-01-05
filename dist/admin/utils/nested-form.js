"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestedForm = void 0;
const lodash_1 = require("lodash");
function nestedForm(form, path) {
    return {
        ...form,
        path(field) {
            const fullPath = path && field ? `${path}.${field}` : path ? path : field;
            if ("path" in form) {
                return form.path(path);
            }
            return (fullPath || "");
        },
        get(obj, field) {
            const fullPath = path && field ? `${path}.${field}` : path ? path : field;
            if ("get" in form) {
                return form.get(path);
            }
            return fullPath ? (0, lodash_1.get)(obj, fullPath) : obj;
        },
    };
}
exports.nestedForm = nestedForm;
