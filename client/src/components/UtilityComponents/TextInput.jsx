import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from "@material-ui/icons/Search"

import { makeStyles } from "@material-ui/core/styles"

import textInputStyles from "../../styles/textInput"

const useStyles = makeStyles(textInputStyles)

const TextInput = props => {
	const classes = useStyles()
	const { onChange, value, placeholder, icon, multiline, rows } = props

	return (
		<TextField
			variant="outlined"
			margin="normal"
			required
			multiline={multiline}
			rows={rows}
			fullWidth
			id={value}
			name={value}
			autoFocus
			value={value}
			className={classes?.input}
			placeholder={placeholder}
			onChange={onChange}
			InputProps={{
				startAdornment: icon && (
					<InputAdornment position="start">
						<SearchIcon color="secondary" />
					</InputAdornment>
				),
				classes: { notchedOutline: classes?.noBorder },
			}}
		/>
	)
}

export default TextInput
