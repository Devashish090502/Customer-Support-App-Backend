const { createTicket, getAllTickets, getTicket, updateTicket, deleteTicket } = require("../Controllers/ticket.controller")
const { verifyJWT } = require("../Middlewares/auth.middlewares")
const { validateTicketRequestBody } = require("../Middlewares/ticket.middlewares")

module.exports=(app)=>{
    app.post("/cs/api/v1/tickets",[verifyJWT,validateTicketRequestBody],createTicket)

    app.post("/cs/api/v1/tickets",[verifyJWT],createTicket)
    app.get("/cs/api/v1/tickets",[verifyJWT],getAllTickets)
    app.get("/cs/api/v1/tickets/:id",getTicket)
    app.put("/cs/api/v1/tickets/:id",updateTicket)
    app.delete("/cs/api/v1/tickets/:id",deleteTicket)

}