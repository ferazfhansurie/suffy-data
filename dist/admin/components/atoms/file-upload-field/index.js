"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const defaultText = ((0, jsx_runtime_1.jsxs)("span", { children: ["Drop your images here, or", " ", (0, jsx_runtime_1.jsx)("span", { className: "text-violet-60", children: "click to browse" })] }));
const FileUploadField = ({ onFileChosen, filetypes, errorMessage, className, text = defaultText, placeholder = "", multiple = false, }) => {
    const inputRef = (0, react_1.useRef)(null);
    const [fileUploadError, setFileUploadError] = (0, react_1.useState)(false);
    const handleFileUpload = (e) => {
        const fileList = e.target.files;
        if (fileList) {
            onFileChosen(Array.from(fileList));
        }
    };
    const handleFileDrop = (e) => {
        setFileUploadError(false);
        e.preventDefault();
        const files = [];
        if (e.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (let i = 0; i < e.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (e.dataTransfer.items[i].kind === "file") {
                    const file = e.dataTransfer.items[i].getAsFile();
                    if (file && filetypes.indexOf(file.type) > -1) {
                        files.push(file);
                    }
                }
            }
        }
        else {
            // Use DataTransfer interface to access the file(s)
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
                if (filetypes.indexOf(e.dataTransfer.files[i].type) > -1) {
                    files.push(e.dataTransfer.files[i]);
                }
            }
        }
        if (files.length === 1) {
            onFileChosen(files);
        }
        else {
            setFileUploadError(true);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { onClick: () => { var _a; return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, onDrop: handleFileDrop, onDragOver: (e) => e.preventDefault(), className: (0, clsx_1.default)("inter-base-regular text-grey-50 rounded-rounded border-grey-20 hover:border-violet-60 hover:text-grey-40 flex h-full w-full cursor-pointer select-none flex-col items-center justify-center border-2 border-dashed transition-colors", className), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center", children: [(0, jsx_runtime_1.jsx)("p", { children: text }), placeholder] }), fileUploadError && ((0, jsx_runtime_1.jsx)("span", { className: "text-rose-60", children: errorMessage || "Please upload an image file" })), (0, jsx_runtime_1.jsx)("input", { ref: inputRef, accept: filetypes.join(", "), multiple: multiple, type: "file", onChange: handleFileUpload, className: "hidden" })] }));
};
exports.default = FileUploadField;
