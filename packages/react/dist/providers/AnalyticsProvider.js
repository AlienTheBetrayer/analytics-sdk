import { AnalyticsCore } from "@alienthebetrayer/analytics-sdk-core";
import React, { useContext } from "react";
const AnalyticsContext = React.createContext(null);
export const AnalyticsProvider = ({ config, children }) => {
    const core = new AnalyticsCore(config.endpoint, config.callbacks, config.settings);
    const value = React.useRef(core);
    return (React.createElement(AnalyticsContext.Provider, { value: value }, children));
};
export const useAnalyticsContext = () => {
    const ctx = useContext(AnalyticsContext);
    if (!ctx)
        throw new Error('useAnalyticsContext() is used outside of its provider.');
    return ctx;
};
