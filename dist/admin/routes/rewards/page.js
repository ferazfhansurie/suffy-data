"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./RewardsList.css"); // Import your CSS file
const icons_1 = require("@medusajs/icons");
const RewardsPage = () => {
    const [rewards, setRewards] = (0, react_1.useState)([]);
    const [selectedReward, setSelectedReward] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchRewards = async () => {
            const response = await fetch('http://localhost:9000/admin/rewards', {
                credentials: "include",
            });
            const data = await response.json();
            setRewards(data);
        };
        fetchRewards();
    }, []);
    const handleRewardClick = (reward) => {
        setSelectedReward(reward);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "rewards-container", children: [(0, jsx_runtime_1.jsx)("h1", { className: "title", children: "Rewards" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => window.location.href = '/a/rewards/new', className: "create-reward-btn", children: "Create New Reward" }), (0, jsx_runtime_1.jsx)("div", { className: "rewards-grid", children: rewards.map(reward => ((0, jsx_runtime_1.jsxs)("div", { className: "reward-card", onClick: () => handleRewardClick(reward), children: [(0, jsx_runtime_1.jsx)("img", { src: reward.image, alt: reward.caption, className: "reward-image" }), (0, jsx_runtime_1.jsxs)("div", { className: "reward-info", children: [(0, jsx_runtime_1.jsx)("h2", { children: reward.caption }), (0, jsx_runtime_1.jsx)("p", { children: reward.details }), (0, jsx_runtime_1.jsxs)("p", { className: "price", children: ["Price: ", reward.price / 100] })] })] }, reward.id))) }), selectedReward && ((0, jsx_runtime_1.jsx)(RewardDetails, { reward: selectedReward, onClose: () => setSelectedReward(null) }))] }));
};
const RewardDetails = ({ reward, onClose }) => {
    const [editForm, setEditForm] = (0, react_1.useState)({
        created_at: reward.created_at,
        updated_at: reward.updated_at,
        price: reward.price,
        details: reward.details,
        caption: reward.caption,
    });
    const [newImage, setNewImage] = (0, react_1.useState)(reward.image);
    const handleDeleteReward = async () => {
        try {
            await fetch(`http://localhost:9000/admin/rewards/${reward.id}`, {
                method: 'DELETE',
                credentials: "include",
            });
            // Update UI to reflect the image deletion
        }
        catch (error) {
            console.error('Error deleting image:', error);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };
    const handleSubmit = async () => {
        const updatedReward = {
            ...editForm,
            price: Math.round(editForm.price * 100),
        };
        try {
            const response = await fetch(`http://localhost:9000/admin/rewards/${reward.id}`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editForm),
            });
            if (!response.ok) {
                throw new Error('Failed to update reward');
            }
            onClose(); // Refresh or fetch new data as needed
        }
        catch (error) {
            console.error('Error updating reward:', error);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "reward-details-modal", children: [(0, jsx_runtime_1.jsx)("img", { src: newImage || 'default-image-path', alt: reward.caption }), (0, jsx_runtime_1.jsx)("p", { children: "Caption" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "caption", value: editForm.caption, onChange: handleInputChange }), (0, jsx_runtime_1.jsx)("p", { children: "Details" }), (0, jsx_runtime_1.jsx)("textarea", { name: "details", value: editForm.details, onChange: handleInputChange }), (0, jsx_runtime_1.jsx)("p", { children: "Price" }), (0, jsx_runtime_1.jsx)("input", { type: "number", name: "price", value: editForm.price, onChange: handleInputChange }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { onClick: handleSubmit, children: "Update Reward" }), (0, jsx_runtime_1.jsx)("button", { onClick: onClose, children: "Close" }), (0, jsx_runtime_1.jsx)("button", { onClick: handleDeleteReward, children: "Delete Reward" })] })] }));
};
exports.config = {
    link: {
        label: "Rewards",
        icon: icons_1.ShoppingBag,
    },
};
exports.default = RewardsPage;
