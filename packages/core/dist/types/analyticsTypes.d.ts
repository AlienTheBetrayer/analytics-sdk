export type AnalyticsSettings = {
    automaticEvents: {
        page_view: boolean;
    };
};
export type AnalyticsCallbacks = {
    onSend?: (eventName: string, description?: string) => void;
    onSuccess?: (eventName: string, description?: string) => void;
    onFailure?: (eventName: string, error?: string) => void;
};
//# sourceMappingURL=analyticsTypes.d.ts.map