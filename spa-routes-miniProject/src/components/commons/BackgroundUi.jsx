import React from "react";

function BackgroundUi() {
  return (
    <div className="min-h-screen w-full fixed">
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
        }}
      />
    </div>
  );
}

export default BackgroundUi;
