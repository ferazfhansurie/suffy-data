"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
// Example route to list withdrawals for the logged-in user
const GET = async (req, res) => {
    const withdrawalService = req.scope.resolve("withdrawalService");
    const loggedInUserId = req.user.customer_id; // Assuming you have a way to get the logged-in user's ID
    if (!loggedInUserId) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        const withdrawals = await withdrawalService.listByCustomerPending({}, {}, loggedInUserId);
        res.status(200).json({ withdrawals });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3dpdGhkcmF3YWxzL2N1c3RvbWVyL3BlbmRpbmcvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUEsMkRBQTJEO0FBQ3BELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNqRSxNQUFNLGlCQUFpQixHQUFzQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3BGLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMseURBQXlEO0lBQ3RHLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDakIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0tBQ3hEO0lBQ0gsSUFBSTtRQUNGLE1BQU0sV0FBVyxHQUFHLE1BQU0saUJBQWlCLENBQUMscUJBQXFCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMxRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDdkM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ2hEO0FBQ0gsQ0FBQyxDQUFDO0FBWlMsUUFBQSxHQUFHLE9BWVoifQ==