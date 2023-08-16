const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	corePlugins: {
		preflight: false,
	},
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	important: ['#root', '#__next'],
	theme: {
		screens: {
			'cellphone': '360px',
			'tablet': '720px',
			'desktop': '1440px',
		},
		fontSize: {
			base: '16px',
		},
		extend: {
			fontFamily: {
				satoshi: ["Satoshi", ...fontFamily.sans],
				inter: ["Inter", ...fontFamily.sans],
				roboto: ["Roboto", ...fontFamily.sans],
			},
			colors: {
				"primary-orange": "#FF5722",
				"marca-100": "#F1EBFC",
				"marca-600": "#874BF6",
				"marca-700": "#6E36DF",
				"marca-800": "#5520C8",
				"marca-900": "#3902B1",
				"borda-100": "#D3DAE3",
				"base-do-fundo": "#F8F9FC",
				"fundo-secundario": "#F1F3F9",
				"fundo-dark": "#1E1E1E",
				"outras-azul": "#3380BF",
				"outras-amarelo": "#FCDC2C",
				"outras-verde-musgo": "#ACCC4C",
				"outras-verde": "#5CC46C",
				"outras-vermelho": "#F85412",
				"grafite-80": "rgba(30, 30, 30, 0.8)",
				"grafite-60": "rgba(30, 30, 30, 0.6)",
				"grafite-60": "rgba(30, 30, 30, 0.6)",
				"grafite-20": "rgba(30, 30, 30, 0.2)",
				"gray-rgba": "rgba(151, 151, 151, 0.10)",
				"linha-footer": "rgba(255, 255, 255, 0.08)",
				"linha-myquestion": "rgba(255, 255, 255, 0.60)",
				"disabled": "rgba(30, 30, 30, 0.6)",
			},
			maxWidth: {
				'tablet-max': '719px',
				'desktop-max': '1439px',
			  },
			  backgroundImage: {
				'section1': "url('/assets/images/imagem2.png')",
			  }
		},
	},
	plugins: [],
};
