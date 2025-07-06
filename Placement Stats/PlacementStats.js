// B.Tech Placement %
    const btechCtx = document.getElementById('btechPlacementChart').getContext('2d');
    new Chart(btechCtx, {
      type: 'bar',
      data: {
        labels: ['Electrical', 'Chemical', 'Mechanical', 'CSE', 'Electronics', 'Civil'],
        datasets: [{
          label: 'Placement %',
          data: [75, 74, 73, 73, 71, 54],
          backgroundColor: 'rgba(54, 162, 235, 0.7)'
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true, max: 100 }
        }
      }
    });

    // M.Tech Average Salary
    const mtechCtx = document.getElementById('mtechSalaryChart').getContext('2d');
    new Chart(mtechCtx, {
      type: 'bar',
      data: {
        labels: ['Power Elec.', 'Thermal', 'Struct. Engg.', 'VLSI', 'Geotech', 'Mech.', 'CSE', 'Data Sci.', 'IS&P'],
        datasets: [{
          label: 'Avg Salary (LPA)',
          data: [9.5, 7.94, 6.61, 19.57, 9.08, 8.15, 11.65, 13.4, 7.69],
          backgroundColor: 'rgba(255, 99, 132, 0.7)'
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    // M.Sc. Placement %
    const mscCtx = document.getElementById('mscPlacementChart').getContext('2d');
    new Chart(mscCtx, {
      type: 'bar',
      data: {
        labels: ['Chemistry', 'Maths', 'Physics'],
        datasets: [{
          label: 'Placement %',
          data: [46, 38, 36],
          backgroundColor: 'rgba(75, 192, 192, 0.7)'
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true, max: 100 }
        }
      }
    });