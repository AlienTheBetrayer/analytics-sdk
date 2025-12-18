/**
 * Sends a new event to the analytics center.
 *
 * @param projectName - The project / website you are currently sending it from.
 * @param eventName - Event type (ideally snake_case).
 * @param description - Short description about your specific case.
 */
export declare const sendEvent: (projectName: string, eventName: string, description?: string) => Promise<import("axios").AxiosResponse<any, any, {}>>;
//# sourceMappingURL=sendEvent.d.ts.map