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
            relations: [] // Include any relations if needed
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3dpdGhkcmF3YWxzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BLG1CQUFtQjtBQUNaLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNuRSxJQUFJO1FBQ0YseURBQXlEO1FBQ3pELE1BQU0saUJBQWlCLEdBQXNCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFcEYsNkVBQTZFO1FBQzdFLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztRQUM1RCxNQUFNLE1BQU0sR0FBRztZQUNiLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLEVBQUU7WUFDUixTQUFTLEVBQUUsRUFBRSxDQUFDLGtDQUFrQztTQUNqRCxDQUFDO1FBRUYsMkJBQTJCO1FBQzNCLE1BQU0sV0FBVyxHQUFHLE1BQU0saUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVuRSx5Q0FBeUM7UUFDekMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDbkM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLG9CQUFvQjtRQUNwQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUNoRDtBQUNILENBQUMsQ0FBQztBQXRCVyxRQUFBLEdBQUcsT0FzQmQ7QUFFRixzQkFBc0I7QUFDZixNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLGlCQUFpQixHQUFzQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDNUQsbUJBQW1CLENBQ3BCLENBQUE7SUFFRCxtQ0FBbUM7SUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDNUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFBO0tBQzNEO0lBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRXJELEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxJQUFJO0tBQ0wsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBbEJZLFFBQUEsSUFBSSxRQWtCaEIifQ==