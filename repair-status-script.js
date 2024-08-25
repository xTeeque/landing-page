document.getElementById("check-status").addEventListener("click", function() {
    const searchInput = document.getElementById("search-input").value.trim();
    const statusDisplay = document.getElementById("status-display");

    if (searchInput === "") {
        statusDisplay.textContent = "אנא הזן מספר תיקון או מספר טלפון נייד.";
        statusDisplay.style.color = "red";
        return;
    }

    // Define your API URL
    const isPhoneNumber = /^\d{10}$/.test(searchInput); // Adjust the regex if your phone number format is different
    const searchUrl = `https://sheetdb.io/api/v1/qzz2tfqfr93pz/search?${isPhoneNumber ? 'phone=' : 'repair_id='}${searchInput}`;

    // Fetch data from the API based on the input type
    fetch(searchUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.length > 0) {
                const status = data[0].status; // Assumes your Google Sheets column is named "status"
                statusDisplay.textContent = `הסטטוס הנוכחי הוא: ${status}`;
                statusDisplay.style.color = "green";
            } else {
                statusDisplay.textContent = "לא נמצאו נתונים תואמים.";
                statusDisplay.style.color = "red";
            }
        })
        .catch(error => {
            statusDisplay.textContent = "שגיאה בחיבור לשרת. נסה שוב מאוחר יותר.";
            statusDisplay.style.color = "red";
            console.error('Error:', error);
        });
});
