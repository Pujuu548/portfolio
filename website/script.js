document.addEventListener('DOMContentLoaded', function () {
    // Admin-specific JavaScript logic can go here

    // Function to show/hide sections
    window.showSection = function (sectionId) {
        const sections = document.getElementsByClassName("admin-section");
        for (let section of sections) {
            section.style.display = "none";
        }

        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = "block";
        }
    };

    // Function to add NGO details
    window.addNgo = function (event) {
        event.preventDefault();

        const ngoName = document.getElementById("ngo-name").value;
        const ngoDescription = document.getElementById("ngo-description").value;

        const ngoData = { name: ngoName, description: ngoDescription };
        saveData("ngoData", ngoData);
        displayNgoData();
    };

    // Function to add daily updates
    window.addUpdate = function (event) {
        event.preventDefault();

        const disasterType = document.getElementById("disaster-type").value;
        const deathCount = document.getElementById("death-count").value;
        const updateDescription = document.getElementById("update-description").value;

        const updatesData = { disasterType, deathCount, updateDescription };
        saveData("updatesData", updatesData);
        displayUpdatesData();
    };

    // Function to save data to local storage
    function saveData(key, data) {
        const storedData = JSON.parse(localStorage.getItem(key)) || [];
        storedData.push(data);
        localStorage.setItem(key, JSON.stringify(storedData));
    }

    // Function to display NGO data
    function displayNgoData() {
        const ngoData = JSON.parse(localStorage.getItem("ngoData")) || [];
        displayData("ngo-output", ngoData);
    }

    // Function to display daily updates
    function displayUpdatesData() {
        const updatesData = JSON.parse(localStorage.getItem("updatesData")) || [];
        displayData("updates-output", updatesData);
    }

    // Function to display data in the specified element
    function displayData(elementId, data) {
        const outputElement = document.getElementById(elementId);
        outputElement.innerText = JSON.stringify(data, null, 2);
    }

    // Initial display
    showSection("add-ngo");
    displayNgoData();
    displayUpdatesData();
});
