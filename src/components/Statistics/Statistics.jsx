const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}
      <ul className="stat-list">
        {stats.map((stat) => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
