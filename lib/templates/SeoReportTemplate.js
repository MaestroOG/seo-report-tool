export default function SeoReportTemplate({ data }) {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <title>SEO Report</title>

                {/* Chart.js CDN – REQUIRED for Vercel PDF */}
                <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>

                <style>{`
          * { box-sizing: border-box; }

          body {
            font-family: Arial, Helvetica, sans-serif;
            background: #f1f5f9;
            margin: 0;
            color: #0f172a;
          }

          h1, h2 { margin: 0; }
          p { margin: 0; line-height: 1.6; }

          .page { padding: 48px; }

          .card {
            background: #ffffff;
            border-radius: 14px;
            padding: 28px;
            margin-bottom: 32px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.05);
          }

          .title {
            font-size: 32px;
            font-weight: 700;
          }

          .muted {
            color: #64748b;
            font-size: 13px;
          }

          .section-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            margin-bottom: 32px;
          }

          .stat {
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            padding: 18px;
            text-align: center;
          }

          .stat-label {
            font-size: 13px;
            color: #64748b;
          }

          .stat-value {
            font-size: 26px;
            font-weight: 700;
            margin-top: 6px;
          }

          .chart-block { margin-bottom: 32px; }

          canvas {
            max-width: 100%;
            height: 220px !important;
          }

          footer {
            position: fixed;
            bottom: 20px;
            left: 48px;
            right: 48px;
            font-size: 12px;
            color: #94a3b8;
            display: flex;
            justify-content: space-between;
          }
        `}</style>
            </head>

            <body>
                <div className="page">

                    {/* HEADER */}
                    <div className="card">
                        <h1 className="title">SEO Performance Report</h1>
                        <p className="muted">
                            {data.clientName} • {data.reportingPeriod}
                        </p>

                        <p className="muted" style={{ marginTop: 16 }}>Prepared By</p>
                        <p style={{ fontWeight: 600 }}>{data.preparedBy}</p>
                    </div>

                    {/* EXECUTIVE SUMMARY */}
                    <div className="card">
                        <h2 className="section-title">Executive Summary</h2>
                        <p>{data.executiveSummary}</p>
                    </div>

                    {/* TRAFFIC OVERVIEW */}
                    <div className="card">
                        <h2 className="section-title">Traffic Overview</h2>

                        <div className="stats">
                            <div className="stat">
                                <div className="stat-label">Organic Sessions</div>
                                <div className="stat-value">{data.organicSessions}</div>
                            </div>

                            <div className="stat">
                                <div className="stat-label">Users</div>
                                <div className="stat-value">{data.users}</div>
                            </div>

                            <div className="stat">
                                <div className="stat-label">Traffic Growth</div>
                                <div className="stat-value">{data.trafficGrowthPercent}</div>
                            </div>
                        </div>

                        {/* BAR CHART */}
                        <div className="chart-block">
                            <canvas id="trafficBarChart"></canvas>
                        </div>

                        {/* DONUT CHART */}
                        <div className="chart-block">
                            <canvas id="growthDonutChart"></canvas>
                        </div>
                    </div>
                </div>

                <footer>
                    <span>{data.clientName}</span>
                    <span>Confidential SEO Report</span>
                </footer>

                {/* INLINE CHART SCRIPT */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              const barCtx = document.getElementById('trafficBarChart');
              new Chart(barCtx, {
                type: 'bar',
                data: {
                  labels: ['Organic Sessions', 'Users'],
                  datasets: [{
                    data: [${Number(data.organicSessions)}, ${Number(data.users)}],
                    backgroundColor: ['#2563eb', '#22c55e']
                  }]
                },
                options: {
                  responsive: true,
                  plugins: { legend: { display: false } },
                  scales: { y: { beginAtZero: true } }
                }
              });

              const growth = parseInt('${data.trafficGrowthPercent}'.replace('%','')) || 0;
              const donutCtx = document.getElementById('growthDonutChart');

              new Chart(donutCtx, {
                type: 'doughnut',
                data: {
                  labels: ['Growth', 'Remaining'],
                  datasets: [{
                    data: [growth, 100 - growth],
                    backgroundColor: ['#16a34a', '#e5e7eb'],
                    borderWidth: 0
                  }]
                },
                options: {
                  cutout: '70%',
                  plugins: {
                    legend: { display: false }
                  }
                }
              });
            `
                    }}
                />
            </body>
        </html>
    )
}
