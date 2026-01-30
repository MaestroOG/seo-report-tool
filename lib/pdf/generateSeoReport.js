import { chromium } from "playwright";
import SeoReportTemplate from "../templates/SeoReportTemplate";
import { trafficChartsScript } from "../templates/charts/TrafficCharts";

export async function generateSeoPdf(data) {

    const { renderToStaticMarkup } = require("react-dom/server");

    const browser = await chromium.launch();

    const page = await browser.newPage();

    const html = renderToStaticMarkup(
        <SeoReportTemplate data={data} />
    )

    const fullHtml = `
    <!DOCTYPE html>
    ${html}
    ${trafficChartsScript(data)}
  `

    await page.setContent(fullHtml, {
        waitUntil: 'networkidle0'
    })

    const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true
    })

    await browser.close();

    return pdfBuffer;
}