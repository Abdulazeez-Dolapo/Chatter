import { Fragment } from "react"

import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Snackbar from "@material-ui/core/Snackbar"

const Notification = props => {
	const { open, handleClose, message } = props

	return (
		<Snackbar
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "center",
			}}
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
			message={message}
			action={
				<Fragment>
					<IconButton
						size="small"
						aria-label="close"
						color="inherit"
						onClick={handleClose}
					>
						<CloseIcon fontSize="small" />
					</IconButton>
				</Fragment>
			}
		/>
	)
}

export default Notification
