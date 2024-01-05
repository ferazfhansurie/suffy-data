"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./NewRewardForm.css"); // Import your CSS file for styling
const NewRewardForm = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        price: '',
        details: '',
        caption: '',
        image: null,
    });
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [imagePreview, setImagePreview] = (0, react_1.useState)(null);
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData({ ...formData, image: files[0] });
        }
        else {
            setFormData({ ...formData, [name]: value });
        }
    };
    const handleImageUpload = async () => {
        const data = new FormData();
        data.append('files', formData.image);
        try {
            const response = await fetch('http://localhost:9000/admin/uploads', {
                method: 'POST',
                body: data,
                credentials: "include",
            });
            const fileData = await response.json();
            return fileData; // Adjust depending on your API response
        }
        catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const imageUrl = await handleImageUpload();
        const url = imageUrl.uploads[0].url;
        console.log(imageUrl.uploads[0]);
        console.log(url);
        const rewardData = {
            price: Math.round(Number(formData.price) * 100),
            details: formData.details,
            caption: formData.caption,
            image: url,
        };
        console.log(rewardData);
        try {
            const response = await fetch('http://localhost:9000/admin/rewards', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(rewardData),
            });
            if (!response.ok) {
                throw new Error('Failed to create reward');
            }
            const result = await response.json();
            console.log('Reward created:', result);
        }
        catch (error) {
            console.error('Error creating reward:', error);
        }
        setLoading(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "new-reward-container", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Create New Reward" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "new-reward-form", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "caption", children: "Caption" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "caption", value: formData.caption, onChange: handleInputChange, placeholder: "Enter a catchy caption" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "details", children: "Details" }), (0, jsx_runtime_1.jsx)("textarea", { name: "details", value: formData.details, onChange: handleInputChange, placeholder: "Describe the reward" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "price", children: "Price" }), (0, jsx_runtime_1.jsx)("input", { type: "number", name: "price", value: formData.price, onChange: handleInputChange, placeholder: "Set a price for the reward" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "image", children: "Reward Image" }), (0, jsx_runtime_1.jsx)("input", { type: "file", name: "image", onChange: handleInputChange }), imagePreview && (0, jsx_runtime_1.jsx)("img", { src: imagePreview, alt: "Reward preview", className: "image-preview" }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "submit-btn", disabled: loading, children: loading ? 'Creating...' : 'Create Reward' })] })] }));
};
exports.default = NewRewardForm;
