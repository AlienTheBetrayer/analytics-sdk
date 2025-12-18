import axios from "axios";
import { AnalyticsSettingsDefault } from "../defaults/analyticsDefaults";
import { sendEvent } from "../routes/sendEvent";
import type {
	AnalyticsCallbacks,
	AnalyticsSettings,
} from "../types/analyticsTypes";

export class AnalyticsCore {
	// variables
	private endpoint: string;
	private callbacks: AnalyticsCallbacks = {};
	private settings: AnalyticsSettings;

	/**
	 * Constructs the analytics wrapper object.
	 * @param endpoint - The project name you are currently working from.
	 * @param settings - (optional) settings for the core.
	 */
	constructor(
		endpoint: string,
		callbacks?: AnalyticsCallbacks,
		settings: AnalyticsSettings = AnalyticsSettingsDefault,
	) {
		if (endpoint.trim().length < 2) {
			throw new Error("Endpoint has to be longer.");
		}

		this.endpoint = endpoint;
		this.settings = settings;
		this.callbacks = callbacks ?? {};

		// page_view
		if (this.settings.automaticEvents.page_view === true) {
			this.send("page_view", "");
		}
	}

	/**
	 * Changes the final endpoint at run-time.
	 * @param newEndpoint - New endpoint.
	 */
	changeEndpoint(newEndpoint: string) {
		if (newEndpoint.trim().length < 2) {
			throw new Error("Event name has to be longer.");
		}

		this.endpoint = newEndpoint;
	}

	/**
	 * Changes the current core's settings at run-time.
	 * @param newSettings - New settings.
	 */
	changeSettings(newSettings: AnalyticsSettings) {
		this.settings = newSettings;
	}

	/**
	 * Changes the current core's callbacks at run-time.
	 * @param newCallbacks - New callbacks.
	 */
	changeCallbacks(newCallbacks: AnalyticsCallbacks) {
		this.callbacks = newCallbacks;
	}

	/**
	 * Sends an event to the endpoint with a given type and optional description.
	 * @param eventName - The actual event's name (preferably in snake_case).
	 * @param description - (optional) description for the event.
	 */
	async send(eventName: string, description?: string) {
		if (eventName.trim().length < 2) {
			throw new Error("Event name has to be longer.");
		}

		this.callbacks.onSend?.(eventName, description);

		try {
			const event = await sendEvent(this.endpoint, eventName, description);
			this.callbacks.onSuccess?.(eventName, description);
			return event;
		} catch (error) {
			const message = axios.isAxiosError(error) ? error.message : "axios error";
			this.callbacks.onFailure?.(eventName, message);
			throw error;
		}
	}

	/**
	 * Forces a send event to view the page. (sent by default, you probably shouldn't use this).
	 * @param description - (optional) description for the event.
	 */
	async pageView(description?: string) {
		return this.send("page_view", description);
	}
}
