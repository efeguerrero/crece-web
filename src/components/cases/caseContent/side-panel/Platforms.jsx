import React from 'react';

export default function Platforms({ platforms }) {
  return (
    <div className="mb-6 flex flex-col gap-6 rounded-lg border border-bravo/30 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold leading-none tracking-tight text-bravo">
        Platforms
      </h3>

      <div className="">
        <ul className="list-inside list-disc space-y-2 text-sm">
          {platforms.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
