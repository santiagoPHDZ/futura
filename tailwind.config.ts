/** @type {import('tailwindcss').Config} */
import type { PluginAPI } from 'tailwindcss/types/config'

module.exports = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				header: ['var(--font-nasa)', 'sans-serif'],
			},
			willChange: {
				'opacity-transform': 'opacity, transform'
			},
			height: {
				'screen-fixed': '100vh', // fallback for older browsers
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				blue: 'hsl(var(--blue))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					text: 'hsl(var(--primary))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					text: 'hsl(var(--primary) / 0.75)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
					text: 'hsl(var(--primary) / 0.45)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: 0
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: 0
					}
				},
				shimmer: {
					shimmer: {
						'0%': {
							backgroundPosition: '200% 0'
						},
						'100%': {
							backgroundPosition: '-200% 0'
						}
					}
				},
				shine: {
					'0%': {
						'background-position': '0% 0%'
					},
					'50%': {
						'background-position': '100% 100%'
					},
					to: {
						'background-position': '0% 0%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				shimmer: 'shimmer 2s linear infinite',
				shine: 'shine var(--duration) infinite linear'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }: PluginAPI) {
			addUtilities({
				'.h-screen-dynamic': {
					height: '100vh', // fallback
					// '@supports (height: 100dvh)': {
					// 	height: '100dvh', // modern browsers
					// },
				},
			})
		},
		function ({ addComponents }: PluginAPI) {
			addComponents({
				'.max-container': {
					'@apply max-w-2xl md:max-w-4xl': {},
				},
			})
		},
		// function ({ addComponents }: PluginAPI) {
		// 	addComponents({
		// 		'.font-header': {
		// 			fontFamily: 'var(--font-nasa), sans-serif',
		// 			wordSpacing: '0.1em',  // same as your config
		// 			letterSpacing: '0.05em'
		// 		},
		// 	})
		// },
	],
}