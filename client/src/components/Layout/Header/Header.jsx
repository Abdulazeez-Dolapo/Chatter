import { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"
import MenuIcon from "@material-ui/icons/Menu"

import NavigationDrawer from "./NavigationDrawer"

import { logout } from "../../../services/auth"
import AuthContext from "../../../context/AuthContext"

import headerStyles from "../../../styles/layout/header"

const useStyles = makeStyles(headerStyles)

const Header = () => {
	const classes = useStyles()
	const history = useHistory()

	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

	const [open, setOpen] = useState(false)
	const [navLinks, setNavLinks] = useState([])

	const goToPage = route => {
		if (route === "logout") return userLogout()

		history.push(`/${route}`)
	}

	const userLogout = async () => {
		await logout()
		setIsLoggedIn(false)		
	}

	useEffect(() => {
		let navLinks = []

		if (isLoggedIn) {
			navLinks = [
				{
					name: "Chat",
					route: "chat",
				},
				{
					name: "Logout",
					route: "logout",
				},
			]
		} else {
			navLinks = [
				{
					name: "Login",
					route: "login",
				},
				{
					name: "Signup",
					route: "signup",
				},
			]
		}

		setNavLinks(navLinks)
	}, [])

	return (
		<div className={classes.root}>
			<NavigationDrawer
				handleRouting={goToPage}
				navLinks={navLinks}
				open={open}
				setOpen={setOpen}
			/>

			<AppBar position="sticky">
				<Toolbar>
					<Hidden smUp>
						<IconButton
							onClick={() => setOpen(true)}
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
					</Hidden>

					<Grid container>
						<Grid item xs={12} sm={3}>
							<Typography
								onClick={e => goToPage("chat")}
								variant="h6"
								className={classes.title}
							>
								Chatter
							</Typography>
						</Grid>

						<Hidden xsDown>
							<Grid item sm={9} className={classes.navLinkContainer}>
								{navLinks?.length > 0 &&
									navLinks.map((navLink, index) => (
										<Button
											key={index}
											variant="text"
											onClick={e => goToPage(navLink.route)}
											className={classes.button}
										>
											{navLink.name}
										</Button>
									))}
							</Grid>
						</Hidden>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
