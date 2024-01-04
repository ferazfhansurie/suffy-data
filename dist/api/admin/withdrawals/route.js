"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
// list withdrawals
const GET = async (req, res) => {
    try {
        // Resolve the WithdrawalService from the request's scope
        const withdrawalService = req.scope.resolve("withdrawalService");
        // Optionally, you can pass selectors and configuration, e.g., for pagination
        const selector = {}; // Define your selector here, if needed
        const config = {
            skip: 0,
            take: 20,
            relations: ["customer"] // Include any relations if needed
        };
        // Retrieve all withdrawals
        const withdrawals = await withdrawalService.list(selector, config);
        // Respond with the retrieved withdrawals
        res.status(200).json(withdrawals);
    }
    catch (error) {
        // Handle any errors
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
// create a withdrawal
const POST = async (req, res) => {
    const withdrawalService = req.scope.resolve("withdrawalService");
    // basic validation of request body
    if (!req.body.total || !req.body.customer_id) {
        throw new Error("`total` and `customer_id` are required.");
    }
    const post = await withdrawalService.create(req.body);
    res.json({
        post,
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3dpdGhkcmF3YWxzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BLG1CQUFtQjtBQUNaLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNuRSxJQUFJO1FBQ0YseURBQXlEO1FBQ3pELE1BQU0saUJBQWlCLEdBQXNCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFcEYsNkVBQTZFO1FBQzdFLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztRQUM1RCxNQUFNLE1BQU0sR0FBRztZQUNiLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLEVBQUU7WUFDUixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxrQ0FBa0M7U0FDM0QsQ0FBQztRQUVGLDJCQUEyQjtRQUMzQixNQUFNLFdBQVcsR0FBRyxNQUFNLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFbkUseUNBQXlDO1FBQ3pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ25DO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxvQkFBb0I7UUFDcEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDaEQ7QUFDSCxDQUFDLENBQUM7QUF0QlcsUUFBQSxHQUFHLE9Bc0JkO0FBRUYsc0JBQXNCO0FBQ2YsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxpQkFBaUIsR0FBc0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQzVELG1CQUFtQixDQUNwQixDQUFBO0lBRUQsbUNBQW1DO0lBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQzVDLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQTtLQUMzRDtJQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQWlCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUVyRCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsSUFBSTtLQUNMLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQWxCWSxRQUFBLElBQUksUUFrQmhCIn0=