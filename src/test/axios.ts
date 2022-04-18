import { AxiosResponse, AxiosError } from "axios";

const axios = require("axios");

const testAxios = axios
	.post("http://127.0.0.1/todos", {
		todo: "做点事情",
	})
	.then((res: AxiosResponse) => {
		console.log(`状态码:${res.status}`);
		console.log(res);
	})
	.catch((err: AxiosError) => {
		console.error(err);
	});

export default testAxios;
