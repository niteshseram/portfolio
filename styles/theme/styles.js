const styles = {
	global: (props) => ({
		body: {
			overflowX: 'hidden',
			bg: props.colorMode === 'light' ? 'default.light' : 'default.dark',
			color: props.colorMode === 'light' ? 'default.dark' : 'default.light',
		},
		div: {
			borderRadius: 'sm',
		},
	}),
	config: {
		initialColorMode: 'light',
		useSystemColorMode: false,
	},
}

export default styles
