import { Typography, Badge } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/core/styles"

import ProfileDisplayStyles from "../../styles/user/profileDisplay"

const StyledBadge = withStyles(theme => ({
	badge: {
		bottom: 8,
		right: 7,
		border: `1px solid ${theme.palette.background.paper}`,
	},
}))(Badge)

const useStyles = makeStyles(ProfileDisplayStyles)

const ProfileDisplay = props => {
	const classes = useStyles()
	const {
		imageUrl = "https://picsum.photos/id/237/200/300",
		name,
		onlineStatus = true,
		message,
	} = props

	return (
		<div className={classes.root}>
			<StyledBadge
				color={onlineStatus ? "primary" : "secondary"}
				badgeContent=" "
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				variant="dot"
			>
				<img
					className={classes.image}
					src={imageUrl}
					alt={`chatter-${name}`}
				/>
			</StyledBadge>

			<div className={classes.textContainer}>
				{name && <Typography className={classes.name}>{name}</Typography>}
				{message && (
					<Typography className={classes.message}>{message}</Typography>
				)}
			</div>
		</div>
	)
}

export default ProfileDisplay
