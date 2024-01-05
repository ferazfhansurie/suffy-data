"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const DropdownMenu = __importStar(require("@radix-ui/react-dropdown-menu"));
const clsx_1 = __importDefault(require("clsx"));
const button_1 = __importDefault(require("../fundamentals/button"));
const more_horizontal_icon_1 = __importDefault(require("../fundamentals/icons/more-horizontal-icon"));
const Actionables = ({ actions, customTrigger, forceDropdown = false, }) => {
    if (actions && (forceDropdown || actions.length > 1)) {
        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(DropdownMenu.Root, { children: [(0, jsx_runtime_1.jsx)(DropdownMenu.Trigger, { asChild: true, children: !customTrigger ? ((0, jsx_runtime_1.jsx)(button_1.default, { variant: "ghost", size: "small", className: "w-xlarge h-xlarge focus-visible:shadow-input focus-visible:border-violet-60 focus:shadow-none focus-visible:outline-none", children: (0, jsx_runtime_1.jsx)(more_horizontal_icon_1.default, { size: 20 }) })) : (customTrigger) }), (0, jsx_runtime_1.jsx)(DropdownMenu.Content, { sideOffset: 5, className: "bg-grey-0 border-grey-20 rounded-rounded shadow-dropdown p-xsmall z-30 min-w-[200px] border", children: actions.map((action, i) => {
                            return ((0, jsx_runtime_1.jsx)(DropdownMenu.Item, { className: "mb-1 last:mb-0", children: (0, jsx_runtime_1.jsxs)(button_1.default, { variant: "ghost", size: "small", className: (0, clsx_1.default)("flex w-full justify-start", {
                                        "text-rose-50": (action === null || action === void 0 ? void 0 : action.variant) === "danger",
                                        "pointer-events-none select-none opacity-50": action === null || action === void 0 ? void 0 : action.disabled,
                                    }), onClick: action === null || action === void 0 ? void 0 : action.onClick, children: [action.icon, action.label] }) }, i));
                        }) })] }) }));
    }
    if (customTrigger) {
        const triggers = Array.isArray(customTrigger)
            ? customTrigger
            : [customTrigger];
        return ((0, jsx_runtime_1.jsx)("div", { children: triggers.map((trigger, i) => ((0, jsx_runtime_1.jsx)("div", { children: trigger }, i))) }));
    }
    const [action] = actions !== null && actions !== void 0 ? actions : [];
    if (action) {
        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(button_1.default, { variant: "secondary", size: "small", type: "button", className: "flex items-center", onClick: action.onClick, children: action.icon ? ((0, jsx_runtime_1.jsxs)("div", { className: "gap-x-2xsmall flex items-center", children: [action.icon, action.label] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: action.label })) }) }));
    }
    return null;
};
exports.default = Actionables;
