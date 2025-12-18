import { AnalyticsCore } from "@alienthebetrayer/analytics-sdk-core";
import React, { useContext } from "react";
import type {
	AnalyticsContextType,
	AnalyticsProviderConfig,
	AnalyticsType,
} from "../types/AnalyticsTypes";

const AnalyticsContext = React.createContext<AnalyticsContextType | null>(null);

type Props = {
	config: AnalyticsProviderConfig;
	children: React.ReactNode;
};

export const AnalyticsProvider = ({ config, children }: Props) => {
	const core = new AnalyticsCore(config.endpoint, config.callbacks, config.settings);

	const value = React.useRef<AnalyticsType>(core);

	return (
		<AnalyticsContext.Provider value={value}>
			{children}
		</AnalyticsContext.Provider>
	);
};

export const useAnalyticsContext = () => {
    const ctx = useContext(AnalyticsContext);
    if(!ctx)
        throw new Error('useAnalyticsContext() is used outside of its provider.');
    return ctx;
}