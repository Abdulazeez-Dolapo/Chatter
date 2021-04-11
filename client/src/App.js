import { BrowserRouter, Route } from "react-router-dom"

import { MuiThemeProvider } from "@material-ui/core"

import { theme } from "./themes/theme.js"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Chat from "./pages/Chat"
import ProtectedRoute from "./components/UtilityComponents/ProtectedRoute.jsx"

import { AuthProvider } from "./context/AuthContext"
import { MessageProvider } from "./context/MessageContext"

function App() {
	return (
		<AuthProvider>
			<MuiThemeProvider theme={theme}>
				<BrowserRouter>
					<Route exact path="/login" component={Login} />

					<Route exact path="/signup" component={Signup} />

					<ProtectedRoute exact path="/chat">
						<MessageProvider>
							<Chat />
						</MessageProvider>
					</ProtectedRoute>
				</BrowserRouter>
			</MuiThemeProvider>
		</AuthProvider>
	)
}

export default App
