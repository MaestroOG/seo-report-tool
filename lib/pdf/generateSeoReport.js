import { chromium } from 'playwright'
import SeoReportTemplate from '../templates/SeoReportTemplate'
import { trafficChartsScript } from '../templates/charts/TrafficCharts'

export async function generateSeoPdf(data) {
    const { renderToStaticMarkup } = require('react-dom/server');
    const browser = await chromium.launch()
    const page = await browser.newPage()

    const html = renderToStaticMarkup(
        <SeoReportTemplate data={data} />
    )

    const fullHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      body {
        margin: 0;
        font-family: Montserrat, Arial, sans-serif;
      }
    </style>
  </head>
  <body>
    ${html}
    ${trafficChartsScript(data)}
  </body>
</html>
`

    await page.setContent(fullHtml, { waitUntil: 'load' })

    // 🔑 Wait until charts fully rendered
    await page.waitForFunction(() => window.__CHARTS_READY__ === true)

    const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true
    })

    await browser.close()
    return pdfBuffer
}
