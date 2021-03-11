import { useState } from "react"

export const useNotification = (initialOpen = false, initialMessage) => {
	const [open, setOpen] = useState(initialOpen)
	const [message, setMessage] = useState(initialMessage)

	const handleClose = (event, reason) => {
		if (reason === "clickaway") return
		setOpen(false)
		setMessage("")
	}

	return { open, setOpen, handleClose, message, setMessage }
}
