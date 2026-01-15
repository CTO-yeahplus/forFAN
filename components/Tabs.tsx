"use client";

import { Phase } from "@/content/types";

export default function Tabs({
  value,
  onChange,
}: {
  value: Phase;
  onChange: (v: Phase) => void;
}) {
  return (
    <div className="segmented-control">
      {(["Before", "During", "After"] as Phase[]).map((p) => (
        <button
          key={p}
          className={`segment-btn ${value === p ? "active" : ""}`}
          onClick={() => onChange(p)}
          type="button"
        >
          {p}
        </button>
      ))}

      <style jsx>{`
        .segmented-control {
          display: inline-flex;
          background: rgba(118, 118, 128, 0.12);
          padding: 2px;
          border-radius: 9px;
          margin-bottom: 32px;
        }
        .segment-btn {
          padding: 6px 20px;
          font-size: 13px;
          font-weight: 500;
          border-radius: 7px;
          border: none;
          cursor: pointer;
          background: transparent;
          color: #1d1d1f;
          transition: all 0.2s ease;
        }
        .segment-btn:hover { opacity: 0.7; }
        .segment-btn.active {
          background: #ffffff;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}