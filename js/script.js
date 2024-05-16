const { createApp } = Vue;

createApp({
	data() {
		return {
			url: `https://flynn.boolean.careers/exercises/api/`,
			dataTypeUrl: `random/mail`,
			mailContainer: [],
			mail: null,
			mailNumber: ``,
			check: 0,
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
			this.mailContainer.splice(0);
			if (!this.mailNumber == ``) {
				for (let i = 0; i < n; i++) {
					this.generateEmail();
				}
				this.check = this.mailNumber;
				this.mailNumber = ``;
			}
		},
		clearList() {
			this.mailContainer.splice(0);
		},
	},
	mounted() {},
}).mount("#app");
