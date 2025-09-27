import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // load tickets from public/tickets.json
  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  // when a ticket is selected
  const handleSelect = (ticketId) => {
    const ticket = tickets.find((t) => t.id === ticketId);

    if (!ticket) return;

    // if already resolved, don't add
    if (ticket.status === "Resolved") {
      toast.info("This ticket is already resolved!");
      return;
    }

    // if not already in progress, add to inProgress
    if (!inProgress.find((t) => t.id === ticketId)) {
      // update status in tickets list
      const updatedTickets = tickets.map((t) =>
        t.id === ticketId ? { ...t, status: "In Progress" } : t
      );
      setTickets(updatedTickets);

      setInProgress([...inProgress, { ...ticket, status: "In Progress" }]);
      toast.success("Ticket moved to In Progress!");
    } else {
      toast.info("This ticket is already in progress!");
    }
  };

  // when a task is completed
  const handleComplete = (ticketId) => {
    const ticket = tickets.find((t) => t.id === ticketId);
    if (!ticket) return;

    // update status in tickets list
    const updatedTickets = tickets.map((t) =>
      t.id === ticketId ? { ...t, status: "Resolved" } : t
    );
    setTickets(updatedTickets);

    // remove from inProgress
    setInProgress(inProgress.filter((t) => t.id !== ticketId));

    // add to resolved
    setResolved([...resolved, { ...ticket, status: "Resolved" }]);

    toast.success("Ticket marked as Resolved!");
  };

  // counts for banner
  const inProgressCount = tickets.filter((t) => t.status === "In Progress").length;
  const resolvedCount = tickets.filter((t) => t.status === "Resolved").length;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />

      <main className="flex-1 container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side: tickets */}
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
  {tickets.map((ticket) => (
    <TicketCard
      key={ticket.id}
      ticket={ticket}
      onSelect={() => handleSelect(ticket.id)}
    />
  ))}
</div>


        {/* Right side: Task Status */}
        <div>
          <TaskStatus
            inProgress={inProgress}
            resolved={resolved}
            onComplete={handleComplete}
          />
        </div>
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
