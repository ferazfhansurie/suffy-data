"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ui_1 = require("@medusajs/ui"); // Make sure to import Table from the correct library
const ui_2 = require("@medusajs/ui");
const ui_3 = require("@medusajs/ui");
const ui_4 = require("@medusajs/ui");
const icons_1 = require("@medusajs/icons");
const Withdrawals = () => {
    const [withdrawals, setWithdrawals] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchWithdrawals = async () => {
            try {
                const response = await fetch('http://localhost:9000/admin/withdrawals', {
                    credentials: "include"
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch withdrawals');
                }
                const data = await response.json();
                setWithdrawals(data);
            }
            catch (error) {
                console.error('Error:', error);
            }
        };
        fetchWithdrawals();
    }, []);
    const [selectedWithdrawal, setSelectedWithdrawal] = (0, react_1.useState)(null);
    const handleRowClick = (withdrawal) => {
        setSelectedWithdrawal(withdrawal);
    };
    const handleCloseDetails = () => {
        setSelectedWithdrawal(null);
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    };
    const WithdrawalDetails = ({ withdrawal, onClose }) => {
        if (!withdrawal)
            return null;
        const handleAccept = async () => {
            try {
                // Update withdrawal status to 'approved'
                await handleUpdateStatus('approved');
                // Deduct points from the customer's LoyaltyPoints
                const response = await fetch('http://localhost:9000/store/update-loyalty-points', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        customerId: withdrawal.customer_id,
                        pointsToDeduct: withdrawal.total,
                    }),
                });
                if (!response.ok) {
                    throw new Error('Failed to update customer loyalty points');
                }
                onClose(); // Close the modal after updating
            }
            catch (error) {
                console.error('Error:', error);
            }
        };
        const handleUpdateStatus = async (newStatus) => {
            try {
                const response = await fetch(`http://localhost:9000/store/withdrawals/${withdrawal.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ status: newStatus }),
                });
                if (!response.ok) {
                    throw new Error('Failed to update withdrawal status');
                }
                onClose(); // Close the modal after updating
            }
            catch (error) {
                console.error('Error:', error);
            }
        };
        return ((0, jsx_runtime_1.jsxs)(ui_2.Container, { children: [(0, jsx_runtime_1.jsx)(ui_4.Text, { children: "Withdrawal Details" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Total: ", withdrawal.total] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Status: ", withdrawal.status] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Reason: ", withdrawal.reason] }), withdrawal.status !== 'approved' && withdrawal.status !== 'rejected' && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ui_3.Button, { onClick: handleAccept, children: "Approve" }), (0, jsx_runtime_1.jsx)(ui_3.Button, { onClick: () => handleUpdateStatus('rejected'), children: "Reject" })] })), (0, jsx_runtime_1.jsx)(ui_3.Button, { onClick: onClose, children: "Close" })] }));
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(ui_2.Container, { children: [(0, jsx_runtime_1.jsx)(ui_4.Text, { size: "xlarge", weight: "plus", family: "sans", children: "Withdrawals" }), (0, jsx_runtime_1.jsxs)(ui_1.Table, { children: [(0, jsx_runtime_1.jsx)(ui_1.Table.Header, { children: (0, jsx_runtime_1.jsxs)(ui_1.Table.Row, { children: [(0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { children: "Date Created" }), (0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { children: "Total RM" }), (0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { children: "Status" }), (0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { children: "Customer" })] }) }), (0, jsx_runtime_1.jsx)(ui_1.Table.Body, { children: withdrawals.map((withdrawal) => {
                                var _a;
                                return ((0, jsx_runtime_1.jsxs)(ui_1.Table.Row, { onClick: () => handleRowClick(withdrawal), children: [(0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { children: formatDate(withdrawal.created_at) }), (0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { children: withdrawal.total / 100 }), (0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { children: withdrawal.status }), (0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { children: ((_a = withdrawal.customer) === null || _a === void 0 ? void 0 : _a.email) || 'Unknown' })] }, withdrawal.id));
                            }) })] }), (0, jsx_runtime_1.jsx)("div", { children: selectedWithdrawal && ((0, jsx_runtime_1.jsx)(WithdrawalDetails, { withdrawal: selectedWithdrawal, onClose: handleCloseDetails })) })] }) }));
};
const WithdrawalDetails = ({ withdrawal, onClose, onUpdateStatus }) => {
    if (!withdrawal)
        return null;
    return ((0, jsx_runtime_1.jsxs)(ui_2.Container, { children: [(0, jsx_runtime_1.jsx)(ui_4.Text, { size: "base", weight: "regular", family: "sans", children: "Withdrawal Details" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Total: ", withdrawal.total] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Status: ", withdrawal.status] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => onUpdateStatus(withdrawal.id), children: "Update Status" }), (0, jsx_runtime_1.jsx)("button", { onClick: onClose, children: "Close" })] }));
};
exports.config = {
    link: {
        label: "Withdrawals",
        icon: icons_1.Cash,
    },
};
exports.default = Withdrawals;
