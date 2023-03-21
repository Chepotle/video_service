import axios from "axios";

export const dataModule = {
	state: () => ({
		filmsData: null,
	}),
	getters: {

	},
	mutations: {
		setData(state, filmsData) {
			state.filmsData = filmsData;
		},
		changeMarkData(state, object) {
			state.filmsData.forEach((el) => {
				if (el.title == object.title) {
					let index = state.filmsData.findIndex(item => item.title == object.title);
					state.filmsData[index].isBookmarked = !state.filmsData[index].isBookmarked;
				}
			});
		}
	},
	actions: {
		async getData({ commit }) {
			try {
				let response = await axios.get("https://api.jsonbin.io/v3/b/63d513bfc0e7653a05630ed3", { headers: { 'X-Master-Key': '$2b$10$7CwsFbKb.BLW1kd8jKK7teW5dEX4qa9NxaWIayCWwQWirol8YktBu' } });
				commit("setData", response.data.record);
				console.log(response);
			} catch (e) {
				alert('Ошибка');
			}
		},
	},
	namespaced: true
}