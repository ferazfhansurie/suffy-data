"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
// list withdrawals
const GET = async (req, res) => {
    try {
        // Resolve the WithdrawalService from the request's scope
        const redeemService = req.scope.resolve("redeemService");
        // Optionally, you can pass selectors and configuration, e.g., for pagination
        const selector = {}; // Define your selector here, if needed
        const config = {
            skip: 0,
            take: 20,
            relations: ["customer", "rewards"] // Include any relations if needed
        };
        // Retrieve all withdrawals
        const redeem = await redeemService.list(selector, config);
        // Respond with the retrieved withdrawals
        res.status(200).json(redeem);
    }
    catch (error) {
        // Handle any errors
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
// create a withdrawal
const POST = async (req, res) => {
    const redeemService = req.scope.resolve("redeemService");
    // basic validation of request body
    if (!req.body.customer_id) {
        throw new Error("`total` and `customer_id` are required.");
    }
    const post = await redeemService.create(req.body);
    res.json({
        post,
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3JlZGVlbXMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUUsbUJBQW1CO0FBQ1osTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ25FLElBQUk7UUFDRix5REFBeUQ7UUFDekQsTUFBTSxhQUFhLEdBQWtCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXhFLDZFQUE2RTtRQUM3RSxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyx1Q0FBdUM7UUFDNUQsTUFBTSxNQUFNLEdBQUc7WUFDYixJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFDLFNBQVMsQ0FBQyxDQUFDLGtDQUFrQztTQUNyRSxDQUFDO1FBRUYsMkJBQTJCO1FBQzNCLE1BQU0sTUFBTSxHQUFHLE1BQU0sYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFMUQseUNBQXlDO1FBQ3pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzlCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxvQkFBb0I7UUFDcEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDaEQ7QUFDSCxDQUFDLENBQUM7QUF0QlcsUUFBQSxHQUFHLE9Bc0JkO0FBRUYsc0JBQXNCO0FBQ2YsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxhQUFhLEdBQWtCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUNwRCxlQUFlLENBQ2hCLENBQUE7SUFFRCxtQ0FBbUM7SUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQTtLQUMzRDtJQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFakQsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLElBQUk7S0FDTCxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFsQlksUUFBQSxJQUFJLFFBa0JoQiJ9