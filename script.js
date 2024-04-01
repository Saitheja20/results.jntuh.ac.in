// document.getElementById("dropdownBtn").addEventListener("click", function() {
//     var dropdownContent = document.getElementById("dropdownContent");
//     if (dropdownContent.style.display === "none") {
//         dropdownContent.style.display = "block"; // Show content
//     } else {
//         dropdownContent.style.display = "none"; // Hide content
//     }
// });
// document.addEventListener("DOMContentLoaded", function() {
//     // Wait for the DOM to be fully loaded
//     document.getElementById("dropdownBtn").addEventListener("click", function() {
//         var dropdownContent = document.getElementById("dropdownContent");
//         if (dropdownContent.style.display === "none") {
//             dropdownContent.style.display = "block"; // Show content
//         } else {
//             dropdownContent.style.display = "none"; // Hide content
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded
    document.getElementById("dropdownBtn").addEventListener("click", function() {
        var dropdownContent = document.getElementById("dropdownContent");
        if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
            dropdownContent.style.display = "block"; // Show content
        } else {
            dropdownContent.style.display = "none"; // Hide content
        }
    });
});
