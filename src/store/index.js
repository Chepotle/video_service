import { createStore } from 'vuex';
import { dataModule } from "./dataModule";

export default createStore({

	modules: {
		data: dataModule,
	}
})
