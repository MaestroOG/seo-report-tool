export function trafficChartsScript(data) {
  const growthValue = parseFloat(
    String(data.trafficGrowthPercent).replace('%', '')
  ) || 0

  const remaining = Math.max(0, 100 - growthValue)

  return `
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
    <script>
      (function () {

      window.__CHARTS_READY__ = false
        // BAR CHART: Sessions vs Users
        const barCanvas = document.createElement('canvas')
        document.getElementById('bar-chart').appendChild(barCanvas)

        new Chart(barCanvas.getContext('2d'), {
          type: 'bar',
          data: {
            labels: ['Organic Sessions', 'Users'],
            datasets: [{
              data: [${Number(data.organicSessions) || 0}, ${Number(data.users) || 0}],
              backgroundColor: ['#3b82f6', '#22c55e'],
              borderRadius: 8,
              barThickness: 50
            }]
          },
          options: {
  responsive: false,
  animation: false,            // ✅ ADD HERE
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { color: '#475569' },
      grid: { color: '#e5e7eb' }
    },
    x: {
      ticks: { color: '#475569' },
      grid: { display: false }
    }
  }
},
        })

       // DONUT CHART: Traffic Growth %
const growth = ${growthValue}
const remaining = ${remaining}

const donutCanvas = document.createElement('canvas')
donutCanvas.width = 160
donutCanvas.height = 160

document.getElementById('growth-chart').appendChild(donutCanvas)

// Custom plugin to draw center text
const centerTextPlugin = {
  id: 'centerText',
  beforeDraw(chart) {
    const { width } = chart
    const { ctx } = chart
    ctx.restore()

    const fontSize = 24
    ctx.font = 'bold ' + fontSize + 'px Montserrat'
    ctx.fillStyle = '#0f172a'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    ctx.fillText(growth + '%', width / 2, width / 2)
    ctx.save()
  }
}

new Chart(donutCanvas.getContext('2d'), {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [growth, remaining],
      backgroundColor: ['#6366f1', '#e5e7eb'],
      borderWidth: 0
    }]
  },
  options: {
  responsive: false,
  animation: false,            // ✅ ADD HERE
  cutout: '70%',
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  }
},
  plugins: [centerTextPlugin]
})

// Fallback text (for safety)
document.getElementById('growth-value').innerText = growth + '% Growth'

window.__CHARTS_READY__ = true

      })()
    </script>
  `
}
