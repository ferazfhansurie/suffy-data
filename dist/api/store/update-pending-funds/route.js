"use strict";
// src/api/update-customer-loyalty-points.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const POST = async (req, res) => {
    try {
        const { customerId, pointsToDeduct, operation } = req.body;
        const customerService = req.scope.resolve("customerService");
        const customer = await customerService.retrieve(customerId);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        if (operation == "add") {
            // Update customer's LoyaltyPoints
            const updatedLoyaltyPoints = customer.pendingFunds + pointsToDeduct; // Ensure it doesn't go below 0
            //await customerService.update(customerId, { pendingFunds: updatedLoyaltyPoints });
        }
        else if (operation == "subtract") {
            const updatedLoyaltyPoints = Math.max(customer.pendingFunds - pointsToDeduct, 0); // Ensure it doesn't go below 0
            //await customerService.update(customerId, { pendingFunds: updatedLoyaltyPoints });
        }
        res.status(200).json({ message: 'Customer updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3VwZGF0ZS1wZW5kaW5nLWZ1bmRzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7OztBQUtyQyxNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDcEUsSUFBSTtRQUNGLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDM0QsTUFBTSxlQUFlLEdBQW9CLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFOUUsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUcsU0FBUyxJQUFJLEtBQUssRUFBQztZQUN0QixrQ0FBa0M7WUFDbEMsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQyxDQUFDLCtCQUErQjtZQUNwRyxtRkFBbUY7U0FDbEY7YUFBTSxJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDbEMsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsK0JBQStCO1lBQ2pILG1GQUFtRjtTQUNwRjtRQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLENBQUMsQ0FBQztLQUNwRTtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDaEQ7QUFDSCxDQUFDLENBQUM7QUF0QlcsUUFBQSxJQUFJLFFBc0JmIn0=