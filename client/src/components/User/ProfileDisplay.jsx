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
	const { imageUrl, name, onlineStatus, message, unread } = props

	return (
		<div className={classes.root}>
			<StyledBadge
				color={onlineStatus ? "primary" : "error"}
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
					<div className={classes.badgeContainer}>
						<Typography className={classes.message} noWrap>
							{message}
						</Typography>

						{unread > 0 && (
							<Badge
								badgeContent={unread}
								color="primary"
								showZero={false}
								max={9}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default ProfileDisplay
