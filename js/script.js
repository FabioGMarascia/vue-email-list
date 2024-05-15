const { createApp } = Vue;

createApp({
	data() {
		return {
			url: `https://flynn.boolean.careers/exercises/api/`,
			dataTypeUrl: `random/mail`,
			mailContainer: [],
			x: null,
		};
	},
	methods: {
		generateEmail() {
			axios.get(this.url + this.dataTypeUrl).then((result) => {
				this.x = result.data.response;
				this.mailContainer.push(this.x);
			});
		},
		getEmailList(n) {
			this.generateEmail();
			for (let i = 0; i < n; i++) {
				this.generateEmail();
			}
		},
	},
	mounted() {
		this.getEmailList(9);
		console.log(this.mailContainer);
	},
}).mount("#app");
