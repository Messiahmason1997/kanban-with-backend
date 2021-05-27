import axios, { AxiosResponse } from 'axios';

const fetchAllColumns = (): Promise<AxiosResponse> => {
	return axios.get('http://localhost:3011/columns/fetch').then((response) => {
		return response;
	});
};

const kanbanServices = {
	fetchAllColumns: fetchAllColumns,
};

export default kanbanServices;
