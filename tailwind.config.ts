import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
				sans: ["Inter Variable", "Inter", "sans-serif"],
				display: ["ClashDisplay", "Inter Variable", "sans-serif"],
				mono: ["JetBrains Mono", "monospace"],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
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
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				school: {
					blue: 'hsl(var(--school-blue))',
					purple: 'hsl(var(--school-purple))',
					white: 'hsl(var(--school-white))',
					black: 'hsl(var(--school-black))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1.5rem',
				'3xl': '2rem',
				'4xl': '2.5rem',
			},
			boxShadow: {
				'3d-sm': 'var(--shadow-3d-sm)',
				'3d-md': 'var(--shadow-3d-md)', 
				'3d-lg': 'var(--shadow-3d-lg)',
				'glow': 'var(--shadow-glow)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
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
						height: '0'
					}
				},
				'spin-around': {
					'0%': {
						transform: 'translateZ(0) rotate(0)'
					},
					'15%, 35%': {
						transform: 'translateZ(0) rotate(90deg)'
					},
					'65%, 85%': {
						transform: 'translateZ(0) rotate(270deg)'
					},
					'100%': {
						transform: 'translateZ(0) rotate(360deg)'
					}
				},
				'shimmer-slide': {
					to: {
						transform: 'translate(calc(100cqw - 100%), 0)'
					}
				},
				"mesh-gradient": {
					"0%, 100%": {
						"background-position": "0% 50%",
					},
					"50%": {
						"background-position": "100% 50%",
					},
				},
				float: {
					"0%, 100%": {
						transform: "translateY(0px)",
					},
					"50%": {
						transform: "translateY(-20px)",
					},
				},
				glow: {
					"0%, 100%": {
						"box-shadow": "0 0 20px hsl(var(--secondary) / 0.3)",
					},
					"50%": {
						"box-shadow": "0 0 40px hsl(var(--secondary) / 0.6)",
					},
				},
				typewriter: {
					from: {
						width: "0",
					},
					to: {
						width: "100%",
					},
				},
				blink: {
					"50%": {
						"border-color": "transparent",
					},
				},
				ripple: {
					"0%": {
						transform: "scale(0)",
						opacity: "1",
					},
					"100%": {
						transform: "scale(4)",
						opacity: "0",
					},
				},
				"morph-bg": {
					"0%, 100%": {
						"border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
					},
					"50%": {
						"border-radius": "30% 60% 70% 40% / 50% 60% 30% 60%",
					},
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
				'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
				"mesh-gradient": "mesh-gradient 3s ease-in-out infinite",
				float: "float 3s ease-in-out infinite",
				glow: "glow 2s ease-in-out infinite",
				typewriter: "typewriter 3s steps(40, end)",
				blink: "blink 1s infinite",
				ripple: "ripple 0.6s linear",
				"morph-bg": "morph-bg 8s ease-in-out infinite",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
