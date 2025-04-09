document.addEventListener('DOMContentLoaded', () => {
    const showSessionBtn = document.getElementById('show-session-btn');
    const showWeeklyBtn = document.getElementById('show-weekly-btn');
    const sessionReportView = document.getElementById('session-report-view');
    const weeklyReportView = document.getElementById('weekly-report-view');

    function showReport(reportToShow) {
        // Hide all reports first
        sessionReportView.classList.add('hidden');
        weeklyReportView.classList.add('hidden');

        // Deactivate all buttons
        showSessionBtn.classList.remove('active');
        showWeeklyBtn.classList.remove('active');

        // Show the selected report and activate its button
        if (reportToShow === 'session') {
            sessionReportView.classList.remove('hidden');
            showSessionBtn.classList.add('active');
        } else if (reportToShow === 'weekly') {
            weeklyReportView.classList.remove('hidden');
            showWeeklyBtn.classList.add('active');
        }
    }

    // Add event listeners
    showSessionBtn.addEventListener('click', () => showReport('session'));
    showWeeklyBtn.addEventListener('click', () => showReport('weekly'));

    // Show the session report by default on load
    showReport('session');

    // --- Optional: Update CSS variables for pie chart based on data ---
    // This is just for show, data is hardcoded in HTML/CSS for this example
    const hardPercent = 56; // Example percentage
    const pieChart = document.querySelector('.pie-chart-mock');
    if (pieChart) {
        // For single conic-gradient:
        // pieChart.style.setProperty('--p-hard', `${hardPercent}%`);

        // For stacked slices:
        const hardSlice = pieChart.querySelector('.slice.hard');
        const softSlice = pieChart.querySelector('.slice.soft');
        if(hardSlice && softSlice) {
            hardSlice.style.setProperty('--p', `${hardPercent}%`);
            softSlice.style.setProperty('--p', `${100 - hardPercent}%`);
            softSlice.style.setProperty('--o', `${hardPercent}%`); // Set offset for soft slice
        }
    }


});