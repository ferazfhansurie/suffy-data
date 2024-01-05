"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_1 = require("react-hook-form");
const file_upload_field_1 = __importDefault(require("../../../atoms/file-upload-field"));
const trash_icon_1 = __importDefault(require("../../../fundamentals/icons/trash-icon"));
const actionables_1 = __importDefault(require("../../../molecules/actionables"));
const ThumbnailForm = ({ form }) => {
    const { control, path } = form;
    const { fields, remove, replace, append } = (0, react_hook_form_1.useFieldArray)({
        control: control,
        name: path("images"),
    });
    const handleFilesChosen = (files) => {
        const toAppend = files.map((file) => ({
            url: URL.createObjectURL(file),
            name: file.name,
            size: file.size,
            nativeFile: file,
            selected: false,
        }));
        if (files.length) {
            replace(toAppend);
        }
        else {
            append(toAppend);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", { className: "mt-large", children: (0, jsx_runtime_1.jsx)(file_upload_field_1.default, { onFileChosen: handleFilesChosen, placeholder: "1200 x 1600 (3:4) recommended, up to 10MB each", filetypes: ["image/gif", "image/jpeg", "image/png", "image/webp"], className: "py-large" }) }) }), fields.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "mt-large", children: [(0, jsx_runtime_1.jsx)("h2", { className: "inter-large-semibold mb-small", children: "Upload" }), (0, jsx_runtime_1.jsx)("div", { className: "gap-y-2xsmall flex flex-col", children: fields.map((field, index) => {
                            return ((0, jsx_runtime_1.jsx)(Image, { image: field, index: index, remove: remove }, field.id));
                        }) })] }))] }));
};
const Image = ({ image, index, remove }) => {
    const actions = [
        {
            label: "Delete",
            onClick: () => remove(index),
            icon: (0, jsx_runtime_1.jsx)(trash_icon_1.default, { size: 20 }),
            variant: "danger",
        },
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "px-base py-xsmall hover:bg-grey-5 rounded-rounded group flex items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "gap-x-large flex items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex h-16 w-16 items-center justify-center", children: (0, jsx_runtime_1.jsx)("img", { src: image.url, alt: image.name || "Uploaded image", className: "rounded-rounded max-h-[64px] max-w-[64px]" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "inter-small-regular flex flex-col text-left", children: [(0, jsx_runtime_1.jsx)("p", { children: image.name }), (0, jsx_runtime_1.jsx)("p", { className: "text-grey-50", children: image.size ? `${(image.size / 1024).toFixed(2)} KB` : "" })] })] }), (0, jsx_runtime_1.jsx)(actionables_1.default, { actions: actions, forceDropdown: true })] }));
};
exports.default = ThumbnailForm;
