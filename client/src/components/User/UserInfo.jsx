import { Fragment } from "react"

import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import userInfoStyles from "../../styles/chat/userInfo"

const useStyles = makeStyles(userInfoStyles)

const UserInfo = props => {
	const { name = "Santiago", onlineStatus = true } = props
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography className={classes.name}>{name}</Typography>

			{onlineStatus && (
				<Fragment>
					<div className={classes.circle}></div>

					<Typography className={classes.online}>Online</Typography>
				</Fragment>
			)}
		</div>
	)
}

export default UserInfo
