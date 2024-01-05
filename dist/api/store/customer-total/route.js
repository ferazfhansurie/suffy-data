"use strict";
// src/api/count-customers.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const GET = async (req, res) => {
    try {
        const customerService = req.scope.resolve("customerService");
        // Count the total number of customers
        const totalCustomers = await customerService.count();
        // Send the count as a response
        res.status(200).json({ totalCustomers });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbWVyLXRvdGFsL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7OztBQUt0QixNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDbkUsSUFBSTtRQUNGLE1BQU0sZUFBZSxHQUFvQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTlFLHNDQUFzQztRQUN0QyxNQUFNLGNBQWMsR0FBRyxNQUFNLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVyRCwrQkFBK0I7UUFDL0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0tBQzFDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUNoRDtBQUNILENBQUMsQ0FBQztBQVpXLFFBQUEsR0FBRyxPQVlkIn0=