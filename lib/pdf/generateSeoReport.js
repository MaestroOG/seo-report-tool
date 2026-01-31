import { chromium } from 'playwright-core';
import Chromium from '@sparticuz/chromium-min';
import SeoReportTemplate from '../templates/SeoReportTemplate'
import { trafficChartsScript } from '../templates/charts/TrafficCharts'

export async function generateSeoPdf(data) {
  const { renderToStaticMarkup } = require('react-dom/server');

  const isLocal = process.env.NODE_ENV === 'development' || !process.env.VERCEL;

  const executablePath = await Chromium.executablePath(
    'https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar'
  );

  const options = isLocal ? { headless: true, } : {
    args: Chromium.args,
    executablePath,
    headless: true
  }

  const browser = await chromium.launch(options)
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
