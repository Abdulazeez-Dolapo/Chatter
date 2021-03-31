import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from "@material-ui/icons/Search"

const TextInput = props => {
	const { onChange, classes, value, placeholder, icon } = props

	return (
		<TextField
			variant="outlined"
			margin="normal"
			required
			fullWidth
			id={value}
			name={value}
			autoFocus
			value={value}
			className={classes.input}
			placeholder={placeholder}
			onChange={onChange}
			InputProps={{
				startAdornment: icon && (
					<InputAdornment position="start">
						<SearchIcon color="secondary" />
					</InputAdornment>
				),
				classes: { notchedOutline: classes.noBorder },
			}}
		/>
	)
}

export default TextInput
