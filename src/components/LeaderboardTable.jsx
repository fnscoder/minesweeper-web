import PropTypes from 'prop-types';

const LeaderboardTable = ({ mode, data }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2 capitalize">{mode}</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Duration</th>
            <th className="border px-4 py-2">Finished At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{entry.user || 'Anonymous'}</td>
              <td className="border px-4 py-2">{entry.duration}</td>
              <td className="border px-4 py-2">{new Date(entry.finished_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

LeaderboardTable.propTypes = {
  mode: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string,
      duration: PropTypes.number.isRequired,
      finished_at: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LeaderboardTable;