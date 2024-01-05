"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ui_1 = require("@medusajs/ui"); // Make sure to import Table from the correct library
const ui_2 = require("@medusajs/ui");
const ui_3 = require("@medusajs/ui");
const ui_4 = require("@medusajs/ui");
const Redeems = () => {
    const [redeem, setRedeems] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchRedeems = async () => {
            try {
                const response = await fetch('http://localhost:9000/admin/redeems', {
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch redeems');
                }
                const data = await response.json();
                setRedeems(data);
            }
            catch (error) {
                console.error('Error:', error);
            }
        };
        fetchRedeems();
    }, []);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    };
    const handleUpdateStatus = async (newStatus, redeems) => {
        try {
            const response = await fetch(`http://localhost:9000/store/redeems/${redeems.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });
            if (!response.ok) {
                throw new Error('Failed to update withdrawal status');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    };
    const handleAccept = async (redeems) => {
        try {
            // Update withdrawal status to 'approved'
            await handleUpdateStatus('approved', redeems);
            console.log(redeems.customer_id);
            // Deduct points from the customer's LoyaltyPoints
            const response = await fetch('http://localhost:9000/store/update-loyalty-points', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customerId: redeems.customer_id,
                    pointsToDeduct: redeems.rewards.price
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to update customer loyalty points');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(ui_2.Container, { children: [(0, jsx_runtime_1.jsx)(ui_4.Text, { size: "xlarge", weight: "plus", family: "sans", children: "Redemptions" }), (0, jsx_runtime_1.jsxs)(ui_1.Table, { children: [(0, jsx_runtime_1.jsx)(ui_1.Table.Header, { children: (0, jsx_runtime_1.jsxs)(ui_1.Table.Row, { children: [(0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { children: "Date Created" }), (0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { children: "Reward" }), (0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { children: "Price" }), (0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { children: "Status" }), (0, jsx_runtime_1.jsx)(ui_1.Table.HeaderCell, { children: "Customer" })] }) }), (0, jsx_runtime_1.jsx)(ui_1.Table.Body, { children: redeem.map((redeem) => {
                                var _a, _b, _c;
                                return ((0, jsx_runtime_1.jsxs)(ui_1.Table.Row, { children: [(0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { children: formatDate(redeem.created_at) }), (0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { children: (_a = redeem.rewards) === null || _a === void 0 ? void 0 : _a.caption }), (0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { children: (_b = redeem.rewards) === null || _b === void 0 ? void 0 : _b.price }), (0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { children: redeem.status }), (0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { children: ((_c = redeem.customer) === null || _c === void 0 ? void 0 : _c.email) || 'Unknown' }), (0, jsx_runtime_1.jsx)(ui_1.Table.Cell, { children: redeem.status !== 'approved' && redeem.status !== 'rejected' && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ui_3.Button, { onClick: () => handleAccept(redeem), children: "Approve" }), (0, jsx_runtime_1.jsx)(ui_3.Button, { onClick: () => handleUpdateStatus('rejected', redeem), children: "Reject" })] })) })] }, redeem.id));
                            }) })] })] }) }));
};
exports.config = {
    link: {
        label: "Reward Redemption",
    },
};
exports.default = Redeems;
