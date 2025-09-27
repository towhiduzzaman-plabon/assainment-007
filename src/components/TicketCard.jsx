import React from "react";
import { MdCalendarToday } from "react-icons/md"; // calendar icon

function PriorityBadge({ priority }) {
  const map = {
    Critical: "bg-red-100 text-red-700",
    High: "bg-red-50 text-red-600",
    Medium: "bg-yellow-50 text-yellow-600",
    Low: "bg-green-50 text-green-700",
  };
  const cls = map[priority] || "bg-gray-100 text-gray-700";
  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded ${cls}`}>
      {priority}
    </span>
  );
}

export default function TicketCard({ ticket, onSelect }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition p-4 cursor-pointer"
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onSelect();
      }}
    >
      {/* top row: title + status */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-md font-semibold text-gray-800 leading-tight">
          {ticket.title}
        </h3>
        <span
          className={`text-xs px-2 py-1 rounded-full border font-semibold ${
            ticket.status === "In Progress"
              ? "bg-orange-50 text-orange-600 border-orange-200"
              : ticket.status === "Resolved"
              ? "bg-green-50 text-green-600 border-green-200"
              : "bg-blue-50 text-blue-600 border-blue-200"
          }`}
        >
          {ticket.status || "Open"}
        </span>
      </div>

      {/* description */}
      <p className="text-sm text-gray-600 mb-4">{ticket.description}</p>

      {/* bottom row: ID + priority left, customer+date right */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        {/* Left: ID + priority */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500 font-semibold">#{ticket.id}</span>
          <PriorityBadge priority={ticket.priority} />
        </div>

        {/* Right: customer + calendar + date */}
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-gray-600 font-medium">{ticket.customer}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <MdCalendarToday size={14} className="text-gray-400" />
            <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
