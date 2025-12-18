import { useAnalyticsContext } from "../providers/AnalyticsProvider";

/**
 * A wrapper for your provider.
 * You have to set up a provider first for this to work.
 * @returns AnalyticsCore - a class used to interact with analytics. (primarily use .send())
 */
export const useAnalytics = () => {
	return useAnalyticsContext();
};
