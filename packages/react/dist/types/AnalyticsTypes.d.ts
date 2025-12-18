import type analytics from "@alienthebetrayer/analytics-sdk-core";
import type { AnalyticsCallbacks, AnalyticsSettings } from "@alienthebetrayer/analytics-sdk-core";
export type AnalyticsType = analytics.AnalyticsCore;
export type AnalyticsContextType = React.RefObject<AnalyticsType>;
export type AnalyticsProviderConfig = {
    endpoint: string;
    callbacks?: AnalyticsCallbacks | undefined;
    settings?: AnalyticsSettings;
};
//# sourceMappingURL=AnalyticsTypes.d.ts.map