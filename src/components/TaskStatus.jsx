import React from "react";

export default function TaskStatus({ inProgress, resolved, onComplete }) {
  return (
    <div className="space-y-6">
      {/* In Progress */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Task Status
        </h3>

        {inProgress.length === 0 ? (
          <div className="text-sm text-gray-400">No tasks in progress</div>
        ) : (
          <div className="space-y-4">
            {inProgress.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-lg shadow p-4 space-y-3"
              >
                <div className="font-medium text-gray-800">{t.title}</div>

                <button
                  onClick={() => onComplete(t.id)}
                  className="w-full rounded-md py-3 text-white bg-[#02A53B] hover:bg-pink-600 transition font-semibold"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resolved */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Resolved Task
        </h3>

        {resolved.length === 0 ? (
          <div className="text-sm text-gray-400">No resolved tasks yet.</div>
        ) : (
          <div className="space-y-3">
            {resolved.map((r) => (
              <div
                key={r.id}
                className="bg-white rounded-lg shadow p-3 text-gray-700"
              >
                {r.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
