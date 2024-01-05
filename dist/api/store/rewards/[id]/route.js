"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
// retrieve a post by its ID
const GET = async (req, res) => {
    const rewardsService = req.scope.resolve("rewardsService");
    const post = await rewardsService.retrieve(req.params.id);
    res.json({
        post,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3Jld2FyZHMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFNRSw0QkFBNEI7QUFDckIsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxjQUFjLEdBQW1CLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUN0RCxnQkFBZ0IsQ0FDakIsQ0FBQTtJQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRXpELEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxJQUFJO0tBQ0wsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBYlksUUFBQSxHQUFHLE9BYWYifQ==