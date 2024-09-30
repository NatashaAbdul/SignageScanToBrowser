document.addEventListener('DOMContentLoaded', () => {
    const scannerInput = document.getElementById('scannerInput');

    // Focus the input field when the page loads
    scannerInput.focus();

    let inputTimeout; // Variable to hold the timeout ID
    const delay = 2000; // Delay time in milliseconds (e.g., 1 second)
    
    scannerInput.addEventListener('input', (event) => {
        const scannedData = event.target.value.trim();
    
        // Clear the previous timeout if there is new input
        clearTimeout(inputTimeout);
    
        // Set a new timeout to wait for input completion
        inputTimeout = setTimeout(() => {
            // Check if the input is a valid URL (basic check)
            if (scannedData && (scannedData.startsWith('http://') || scannedData.startsWith('https://'))) {
                // <iframe src={scannedData} title={"URL"}></iframe>
                var link = document.createElement('iframe');
                link.src = scannedData;
                link.title = "URL"
                link.width = "100%"; // You can adjust width/height as needed
                link.height = "100%"; // Adjust as needed

                // Append the iframe to the body (or another container element)
                document.getElementsByClassName('container')[0].style.display = 'none'; // Replace 'some-class' with the actual class name to remove
                document.body.appendChild(link);

                console.log(link)
                // link.rel = "noopener noreferrer"
                // document.body.appendChild(link).click();
                // window.open(scannedData, '_blank'); // Open the URL in a new tab
                event.target.value = ''; // Clear the input field
            }else{
                event.target.value = ''; // Clear the input field
            }
        }, delay); // The delay period before opening the new tab
    });

    // // If you want to handle the Enter key press
    // scannerInput.addEventListener('keydown', (event) => {
    //     if (event.key === 'Enter') {
    //         const scannedData = scannerInput.value.trim();
    //         if (scannedData) {
    //             window.open(scannedData, '_blank');
    //             scannerInput.value = '';
    //         }
    //     }
    // });
});