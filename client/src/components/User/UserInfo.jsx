import { Fragment } from "react"

import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import userInfoStyles from "../../styles/chat/userInfo"

const useStyles = makeStyles(userInfoStyles)

const UserInfo = props => {
	const { username, onlineStatus } = props
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography className={classes.name}>{username}</Typography>

			<Fragment>
				<div
					className={
						onlineStatus ? classes.onlineCircle : classes.offlineCircle
					}
				></div>

				<Typography className={classes.online}>
					{onlineStatus ? "Online" : "Offline"}
				</Typography>
			</Fragment>
		</div>
	)
}

export default UserInfo
