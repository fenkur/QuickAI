// Middleware to check userId and hasPremiumPlan

import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
    try {
        const { userId, has } = await req.auth();
        
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const hasPremiumPlan = await has({ plan: 'premium' });

        // Only fetch user if they don't have premium (to check free usage)
        if (!hasPremiumPlan) {
            const user = await clerkClient.users.getUser(userId);
            
            if (user.privateMetadata.free_usage !== undefined) {
                req.free_usage = user.privateMetadata.free_usage;
            } else {
                // Initialize free_usage if it doesn't exist
                await clerkClient.users.updateUserMetadata(userId, {
                    privateMetadata: { free_usage: 0 }
                });
                req.free_usage = 0;
            }
        } else {
            req.free_usage = null; // Premium users don't need free_usage tracking
        }

        req.plan = hasPremiumPlan ? 'premium' : 'free';
        req.userId = userId; // Add userId to request for use in controllers
        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}