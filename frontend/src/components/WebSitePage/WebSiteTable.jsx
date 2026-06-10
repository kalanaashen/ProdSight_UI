const defaultWebsiteRows = [
  {
    id: 1,
    webname: "github.com",
    time: "2h 15m",
    duration: "1h 05m",
    lastvisited: "2026.06.10",
  },
  {
    id: 2,
    webname: "figma.com",
    time: "1h 40m",
    duration: "45m",
    lastvisited: "2026.06.10",
  },
  {
    id: 3,
    webname: "docs.google.com",
    time: "58m",
    duration: "22m",
    lastvisited: "2026.06.09",
  },
];

export const WebSiteTable = ({ websites = defaultWebsiteRows }) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-600 bg-black/20">
      <div className="flex flex-col gap-1 border-b border-gray-700 px-6 py-5">
        <h2 className="text-xl font-bold text-white">Website Visit Details</h2>
        <p className="text-sm text-gray-400">
          Recent domains, time spent, and last visit activity
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead className="bg-slate-900/80 text-xs uppercase text-gray-400">
            <tr>
              <th className="px-6 py-4 font-semibold">Website</th>
              <th className="px-6 py-4 font-semibold">Time Spent</th>
              <th className="px-6 py-4 font-semibold">Duration</th>
              <th className="px-6 py-4 font-semibold">Last Visited</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {websites.length > 0 ? (
              websites.map((website) => (
                <tr
                  key={website.id ?? website.webname}
                  className="bg-slate-900 transition-colors hover:bg-slate-950"
                >
                  <td className="px-6 py-4 font-semibold text-white">
                    {website.webname}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{website.time}</td>
                  <td className="px-6 py-4 text-gray-300">
                    {website.duration}
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    {website.lastvisited}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="px-6 py-10 text-center text-sm text-gray-400"
                  colSpan="4"
                >
                  No website visits available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
