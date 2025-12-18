import type { AnalyticsCallbacks, AnalyticsSettings } from "../types/analyticsTypes";
export declare class AnalyticsCore {
    private endpoint;
    private callbacks;
    private settings;
    /**
     * Constructs the analytics wrapper object.
     * @param endpoint - The project name you are currently working from.
     * @param settings - (optional) settings for the core.
     */
    constructor(endpoint: string, callbacks?: AnalyticsCallbacks, settings?: AnalyticsSettings);
    /**
     * Changes the final endpoint at run-time.
     * @param newEndpoint - New endpoint.
     */
    changeEndpoint(newEndpoint: string): void;
    /**
     * Changes the current core's settings at run-time.
     * @param newSettings - New settings.
     */
    changeSettings(newSettings: AnalyticsSettings): void;
    /**
     * Changes the current core's callbacks at run-time.
     * @param newCallbacks - New callbacks.
     */
    changeCallbacks(newCallbacks: AnalyticsCallbacks): void;
    /**
     * Sends an event to the endpoint with a given type and optional description.
     * @param eventName - The actual event's name (preferably in snake_case).
     * @param description - (optional) description for the event.
     */
    send(eventName: string, description?: string): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * Forces a send event to view the page. (sent by default, you probably shouldn't use this).
     * @param description - (optional) description for the event.
     */
    pageView(description?: string): Promise<import("axios").AxiosResponse<any, any, {}>>;
}
//# sourceMappingURL=core.d.ts.map