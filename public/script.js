document.addEventListener('DOMContentLoaded', () => {
    const scannerInput = document.getElementById('scannerInput');

    // Focus the input field when the page loads
    scannerInput.focus();

    let inputTimeout; // Variable to hold the timeout ID
    const delay = 1000; // Delay time in milliseconds (e.g., 1 second)
    
    scannerInput.addEventListener('input', (event) => {
        const scannedData = event.target.value.trim();
    
        // Clear the previous timeout if there is new input
        clearTimeout(inputTimeout);
    
        // Set a new timeout to wait for input completion
        inputTimeout = setTimeout(() => {
            // Check if the input is a valid URL (basic check)
            if (scannedData && (scannedData.startsWith('http://') || scannedData.startsWith('https://'))) {
                //check if iframe exist, else create
                var iframeExist = document.getElementById('iframeContainer')
                if(iframeExist){
                    iframeExist.parentElement.removeChild(iframeExist)
                }
                var link = document.createElement('iframe');
                link.id = "iframeContainer"
                link.src = scannedData;
                link.title = "URL"
                link.width = "100%"; // You can adjust width/height as needed
                link.height = "100%"; // Adjust as needed

                // Append the iframe to the body (or another container element)
                document.body.appendChild(link);
                event.target.value = ''; // Clear the input field
            }else{
                event.target.value = ''; // Clear the input field
            }
        }, delay); // The delay period before opening the new tab
    });
});