import {create} from "zustand";
import axios, {AxiosInstance} from "axios";

interface IBackendStore {
	link: string;
	context: () => AxiosInstance;
}

const link = process.env.NODE_ENV === "development" ? "https://dev.example.com" : "https://example.com";

export const BackendStore = create<IBackendStore>(set => ({
	link: link,
	context: () => {
		return axios.create({baseURL: link, withCredentials: true});
	},
}));
