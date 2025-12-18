import axios from "axios";
import { API_PATH } from "../globals/api";

/**
 * Sends a new event to the analytics center.
 *
 * @param projectName - The project / website you are currently sending it from.
 * @param eventName - Event type (ideally snake_case).
 * @param description - Short description about your specific case.
 */
export const sendEvent = async (
	projectName: string,
	eventName: string,
	description?: string,
) => {
	try {
		return await axios.post(`${API_PATH}/api/analytics/send`, {
			project_name: projectName,
			event_type: eventName,
			description,
		});
	} catch (error) {
		const message = axios.isAxiosError(error) ? error.message : "axios error";
		throw message;
	}
};
