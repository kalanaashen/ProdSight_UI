const defaultAppRows = [
  {
    id: 1,
    appname: "github.com",
    time: "2h 15m",
    duration: "1h 05m",
    lastvisited: "2026.06.10",
  },
  {
    id: 2,
    appname: "figma.com",
    time: "1h 40m",
    duration: "45m",
    lastvisited: "2026.06.10",
  },
  {
    id: 3,
    appname: "docs.google.com",
    time: "58m",
    duration: "22m",
    lastvisited: "2026.06.09",
  },
];
export const AppTable = ({ apps = defaultAppRows }) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-600 bg-black/20">
      <div className="flex flex-col gap-1 border-b border-gray-700 px-6 py-5">
        <h2 className="text-xl font-bold text-white">App Visit Details</h2>
        <p className="text-sm text-gray-400">
          Recent apps, time spent, and last visit activity
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead className="bg-slate-900/80 text-xs uppercase text-gray-400">
            <tr>
              <th className="px-6 py-4 font-semibold">App</th>
              <th className="px-6 py-4 font-semibold">Time Spent</th>
              <th className="px-6 py-4 font-semibold">Duration</th>
              <th className="px-6 py-4 font-semibold">Last Visited</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {apps.length > 0 ? (
              apps.map((app) => (
                <tr
                  key={app.id ?? app.appname}
                  className="bg-slate-900 transition-colors hover:bg-slate-950"
                >
                  <td className="px-6 py-4 font-semibold text-white">
                    {app.appname}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{app.time}</td>
                  <td className="px-6 py-4 text-gray-300">
                    {app.duration}
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    {app.lastvisited}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="px-6 py-10 text-center text-sm text-gray-400"
                  colSpan="4"
                >
                  No app visits available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
