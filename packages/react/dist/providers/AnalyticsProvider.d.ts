import React from "react";
import type { AnalyticsContextType, AnalyticsProviderConfig } from "../types/AnalyticsTypes";
type Props = {
    config: AnalyticsProviderConfig;
    children: React.ReactNode;
};
export declare const AnalyticsProvider: ({ config, children }: Props) => React.JSX.Element;
export declare const useAnalyticsContext: () => AnalyticsContextType;
export {};
//# sourceMappingURL=AnalyticsProvider.d.ts.map