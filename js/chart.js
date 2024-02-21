function updatePieChart(currentScore, goal) {
  var ctx = document.getElementById('pieChart').getContext('2d');
  var percent = calculatePercentage(currentScore, goal);
  var percentChange = correctPercent(percent)

  if (pieChart) {
      pieChart.destroy(); // Destroy the previous chart instance
  }

  pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Percentage Achieved', 'Percentage to Goal'],
          datasets: [{
              data: [percent, percentChange],
              backgroundColor: [
                  'rgba(255, 0, 0)',
                  '#FFCCCB',

              ],
              borderColor: [
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0)',

              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
              display: true,
              text: 'Progress Towards Goal'
          },
          plugins: {
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          var label = context.label || '';
                          if (label) {
                              label += ': ';
                          }
                          if (context.parsed) {
                              label += context.parsed.toFixed(2) + '%';
                          }
                          return label;
                      }
                  }
              }
          }
      }
  });
}
