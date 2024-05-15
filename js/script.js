const { createApp } = Vue;

createApp({
	data() {
		return {
			url: `https://flynn.boolean.careers/exercises/api/`,
			dataTypeUrl: `random/mail`,
			mailContainer: [],
			mail: null,
			emailNumber: ``,
			myH1Style: `text-center fw-bold display-3 text-black py-3`,
		};
	},
	methods: {
		generateEmail() {
			axios.get(this.url + this.dataTypeUrl).then((result) => {
				this.mail = result.data.response;
				this.mailContainer.push(this.mail);
			});
		},
		getEmailList(n) {
			if (!this.emailNumber == ``) {
				this.generateEmail();
				for (let i = 0; i < n - 1; i++) {
					this.generateEmail();
				}
				this.emailNumber = ``;
			}
		},
		clearList() {
			this.mailContainer.splice(0);
		},
	},
	mounted() {},
}).mount("#app");
