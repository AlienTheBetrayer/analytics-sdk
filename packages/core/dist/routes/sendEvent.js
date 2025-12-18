import axios from "axios";
/**
 * Sends a new event to the analytics center.
 *
 * @param projectName - The project / website you are currently sending it from.
 * @param eventName - Event type (ideally snake_case).
 * @param description - Short description about your specific case.
 */
export const sendEvent = async (projectName, eventName, description) => {
    try {
        return await axios.post("/api/analytics/send", {
            projectName,
            eventName,
            description,
        });
    }
    catch (error) {
        const message = axios.isAxiosError(error) ? error.message : "axios error";
        throw message;
    }
};
