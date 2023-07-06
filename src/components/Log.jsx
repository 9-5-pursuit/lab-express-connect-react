import { Link } from 'react-router-dom';

function log({ log, index }) {
  return (
    <Link
      to={`/logs/${index}`}
      className="Log"
      style={{ textDecoration: 'none ' }}
    >
      <span key={index}>{log.title}</span>
    </Link>
  );
}

export default log;
