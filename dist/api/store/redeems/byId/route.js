"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
// Example route to list withdrawals for the logged-in user
const GET = async (req, res) => {
    const redeemService = req.scope.resolve("redeemService");
    const loggedInUserId = req.user.customer_id; // Assuming you have a way to get the logged-in user's ID
    const config = {
        skip: 0,
        take: 20,
        relations: ["rewards"] // Include any relations if needed
    };
    try {
        const redeems = await redeemService.listById({}, config, loggedInUserId);
        res.status(200).json({ redeems });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3JlZGVlbXMvYnlJZC9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFNQSwyREFBMkQ7QUFDcEQsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ2pFLE1BQU0sYUFBYSxHQUFrQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN4RSxNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLHlEQUF5RDtJQUN0RyxNQUFNLE1BQU0sR0FBRztRQUNiLElBQUksRUFBRSxDQUFDO1FBQ1AsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxrQ0FBa0M7S0FDMUQsQ0FBQztJQUNGLElBQUk7UUFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUN6RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDbkM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ2hEO0FBQ0gsQ0FBQyxDQUFDO0FBZFMsUUFBQSxHQUFHLE9BY1oifQ==