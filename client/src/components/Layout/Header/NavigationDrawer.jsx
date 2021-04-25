import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import navigationDrawerStyles from "../../../styles/layout/navigationDrawer"

const useStyles = makeStyles(navigationDrawerStyles)

const NavigationDrawer = props => {
	const { navLinks, open, setOpen, handleRouting } = props
	const classes = useStyles()

	const close = () => {
		setOpen(false)
	}

	const handleClick = route => {
		handleRouting(route)
		close()
	}

	return (
		<Drawer
			PaperProps={{
				className: classes.root,
			}}
			anchor="left"
			open={open}
			onClose={close}
		>
			<List>
				{navLinks?.length > 0 &&
					navLinks.map((link, index) => (
						<ListItem
							button
							onClick={e => handleClick(link.route)}
							key={index}
						>
							<ListItemText primary={link.name} />
						</ListItem>
					))}
			</List>
		</Drawer>
	)
}

export default NavigationDrawer
