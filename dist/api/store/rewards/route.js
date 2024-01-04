"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
// list withdrawals
const GET = async (req, res) => {
    try {
        // Resolve the WithdrawalService from the request's scope
        const rewardsService = req.scope.resolve("rewardsService");
        // Optionally, you can pass selectors and configuration, e.g., for pagination
        const selector = {}; // Define your selector here, if needed
        const config = {
            skip: 0,
            take: 20,
            relations: [] // Include any relations if needed
        };
        // Retrieve all withdrawals
        const rewards = await rewardsService.list(selector, config);
        // Respond with the retrieved withdrawals
        res.status(200).json(rewards);
    }
    catch (error) {
        // Handle any errors
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3Jld2FyZHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUUsbUJBQW1CO0FBQ1osTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ25FLElBQUk7UUFDRix5REFBeUQ7UUFDekQsTUFBTSxjQUFjLEdBQW1CLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFM0UsNkVBQTZFO1FBQzdFLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztRQUM1RCxNQUFNLE1BQU0sR0FBRztZQUNiLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLEVBQUU7WUFDUixTQUFTLEVBQUUsRUFBRSxDQUFDLGtDQUFrQztTQUNqRCxDQUFDO1FBRUYsMkJBQTJCO1FBQzNCLE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFNUQseUNBQXlDO1FBQ3pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQy9CO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxvQkFBb0I7UUFDcEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDaEQ7QUFDSCxDQUFDLENBQUM7QUF0QlcsUUFBQSxHQUFHLE9Bc0JkIn0=