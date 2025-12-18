import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "demasiri.com",
	description: "Me, Myself, and i = 0",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{
				text: "About",
				items: [
					{ text: "About Me", link: "/about/me" }
				]
			}
		],

		lastUpdated: {
			text: "Updated on",
			formatOptions: {
				dateStyle: "full",
				timeStyle: "medium"
			}
		},

		sidebar: {
			"/projects/": [
				{
					text: "General",
					items: [
						{ text: "Index", link: "projects/index" },
						{ text: "My Dev Environment", link: "projects/code/devenv" },
						{ text: "Godot x Neovim Setup", link: "projects/code/godot_x_neovim" }
					]
				},
				{
					text: "FoundryVTT Modules",
					items: [
						{ text: "PF2e Rep Tracker", link: "projects/code/foundryvtt/pf2e-rep-tracker" },
						{ text: "PF2e Vessaya", link: "projects/code/foundryvtt/pf2e-vessaya" },
					]
				},
				{
					text: "Writing",
					items: [
						{ text: "Index", link: "projects/writing/index" },
            { text: "Finding the Fun Again", link: "projects/writing/omarch.md" }
					]
				}
			]
		},
		socialLinks: [
			{ icon: "github", link: "https://github.com/dade" },
			{ icon: "linkedin", link: "https://linkedin.com/in/demasiri" },
			{ icon: "bluesky", link: "https://bsky.app/profile/demasiri.com" },
		]
	},
	markdown: {
		theme: {
			light: "catppuccin-latte",
			dark: "catppuccin-macchiato",
		},
	}
})
