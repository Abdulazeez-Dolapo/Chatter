import { BrowserRouter, Route } from "react-router-dom"

import { MuiThemeProvider } from "@material-ui/core"

import { theme } from "./themes/theme.js"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/UtilityComponents/ProtectedRoute.jsx"

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<Route exact path="/login" component={Login} />

				<Route exact path="/signup" component={Signup} />

				<ProtectedRoute path="/dashboard">
					<Dashboard />
				</ProtectedRoute>
			</BrowserRouter>
		</MuiThemeProvider>
	)
}

export default App
