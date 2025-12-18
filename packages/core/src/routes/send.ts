/**
 * Sends an event to the analytics center.
 *
 * @param project - The project / website you are currently sending it from.
 * @param eventName - Event type (ideally snake_case).
 * @param description - Short description about your specific case.
 */
export const send = async (
	project: string,
	eventName: string,
	description: string,
) => {
    const a = project + eventName + description;
    return a;
};
