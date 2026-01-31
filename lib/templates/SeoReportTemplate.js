import Info from "@/components/generalComps/Info";
import Stat from "@/components/generalComps/Stat";
import Status from "@/components/generalComps/Status";

export default function SeoReportTemplate({ data }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <style>{`
          * {
            box-sizing: border-box;
          }

          body {
            font-family: 'Montserrat', Arial, sans-serif;
            background: #f1f5f9;
            margin: 0;
            padding: 0;
            color: #0f172a;
          }

          h1, h2, h3 {
            margin: 0;
          }

          p {
            margin: 0;
            line-height: 1.6;
          }

          .page {
            padding: 48px;
          }

          .card {
            background: #ffffff;
            border-radius: 14px;
            padding: 28px;
            margin-bottom: 32px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.04);
          }

          .muted {
            color: #64748b;
            font-size: 13px;
          }

          .title {
            font-size: 32px;
            font-weight: 700;
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
          }

          .stat {
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            padding: 20px;
            text-align: center;
          }

          .stat-value {
            font-size: 26px;
            font-weight: 700;
            margin-top: 6px;
          }

          .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          th, td {
            border-bottom: 1px solid #e5e7eb;
            padding: 12px 8px;
            font-size: 14px;
            text-align: left;
          }

          th {
            color: #475569;
            font-weight: 600;
          }

          .badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 600;
          }

          .ok {
            background: #dcfce7;
            color: #166534;
          }

          .bad {
            background: #fee2e2;
            color: #991b1b;
          }

          .page-break {
            page-break-before: always;
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
        {/* COVER PAGE */}
        <div className="page">
          <div className="card">
            <h1 className="title">SEO Performance Report</h1>
            <p className="muted" style={{ marginTop: 8 }}>
              {data.clientName} • {data.reportingPeriod}
            </p>

            <div style={{ marginTop: 24 }}>
              <p className="muted">Prepared By</p>
              <p style={{ fontWeight: 600 }}>{data.preparedBy}</p>
            </div>
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
              <Stat label="Organic Sessions" value={data.organicSessions} />
              <Stat label="Users" value={data.users} />
              <Stat label="Traffic Growth" value={data.trafficGrowthPercent} />
            </div>

            <div style={{ marginTop: 32, display: 'grid', alignItems: 'stretch', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '24px' }}>
              <div style={{ minWidth: 0 }}>
                <p className="muted" style={{ marginBottom: 8 }}>
                  Sessions vs Users
                </p>
                <div id="bar-chart" />
              </div>

              <div style={{ textAlign: 'center', minWidth: 0 }}>
                <p className="muted" style={{ marginBottom: 8 }}>
                  Traffic Growth
                </p>

                <div
                  id="growth-chart"
                  style={{
                    width: '160px',
                    height: '160px',
                    margin: '0 auto',
                    position: 'relative'
                  }}
                ></div>

                <p
                  id="growth-value"
                  style={{
                    marginTop: 8,
                    fontWeight: 600,
                    fontSize: 14,
                    color: '#475569'
                  }}
                ></p>
              </div>

            </div>

          </div>
        </div>

        {/* PAGE 2 */}
        <div className="page page-break">
          {/* WEBSITE OVERVIEW */}
          <div className="card">
            <h2 className="section-title">Website Overview</h2>

            <div className="grid-2">
              <Info label="Domain Age" value={data.websiteOverview.domainAge} />
              <Info label="CMS" value={data.websiteOverview.cms} />
              <Info label="Industry" value={data.websiteOverview.industry} />
              <Info label="Target Audience" value={data.websiteOverview.targetAudience} />
              <Info label="Target Location" value={data.websiteOverview.targetLocation} />
            </div>
          </div>

          {/* ON-PAGE SEO */}
          <div className="card">
            <h2 className="section-title">On-Page SEO Status</h2>

            <div className="grid-2">
              <Status label="Title & Meta" ok={data.titleMetaOK} />
              <Status label="Headings" ok={data.headingsOK} />
              <Status label="Images Alt Text" ok={data.imagesAltTextOK} />
              <Status label="Internal Linking" ok={data.internalLinkingOK} />
            </div>
          </div>

          {/* KEYWORDS */}
          <div className="card">
            <h2 className="section-title">Keyword Performance</h2>

            <table>
              <thead>
                <tr>
                  <th>Keyword</th>
                  <th>Search Volume</th>
                  <th>Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {data.keywords.map((k, i) => (
                  <tr key={i}>
                    <td>{k.keyword}</td>
                    <td>{k.searchVolume}</td>
                    <td>{k.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PAGE 3 */}
        <div className="page page-break">
          {/* BACKLINKS */}
          <div className="card">
            <h2 className="section-title">Backlink Profile</h2>

            <div className="grid-2">
              <Info label="Total Backlinks" value={data.totalBacklinks} />
              <Info label="Referring Domains" value={data.referringDomains} />
              <Status label="Toxic Backlinks Detected" ok={!data.toxicBacklinksDetected} />
            </div>
          </div>

          {/* COMPETITORS */}
          <div className="card">
            <h2 className="section-title">Competitor Analysis</h2>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Domain</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {data.competitors.map((c, i) => (
                  <tr key={i}>
                    <td>{c.name}</td>
                    <td>{c.domain}</td>
                    <td>{c.notes || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ACTION PLAN */}
          <div className="card">
            <h2 className="section-title">SEO Action Plan</h2>

            <p><strong>30 Days</strong></p>
            <p className="muted">{data.plan30}</p>

            <br />

            <p><strong>60 Days</strong></p>
            <p className="muted">{data.plan60}</p>

            <br />

            <p><strong>90 Days</strong></p>
            <p className="muted">{data.plan90}</p>
          </div>
        </div>

        <footer>
          <span>{data.clientName}</span>
          <span>Confidential SEO Report</span>
        </footer>
      </body>
    </html>
  )
}