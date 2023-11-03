// Below is a workable script but was not helpful in my case. As it was not possible to find the id of the 'confirm button selector'
// without having the access to the source code. 
// But this script can be used for the similar operation in some of my own project where the source code is known.

(async () => {
    // Selector for the delete button, update this to the actual selector
    const deleteButtonSelector = '.delete_review_link'; 

    // Selector for the OK button in the confirmation dialog
    const confirmButtonSelector = '#confirm-ok-button'; 

    // Get all the delete buttons
    const deleteButtons = document.querySelectorAll(deleteButtonSelector);

    for (let i = 0; i < deleteButtons.length; i++) {
        // Simulate a click on the delete button
        deleteButtons[i].click();
        
        // Wait for the confirmation dialog to appear, adjust delay if needed
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulate a click on the confirmation button
        const confirmButton = document.querySelector(confirmButtonSelector);
        if (confirmButton) {
            confirmButton.click();
        }

        // Wait for the deletion to complete, adjust delay if needed
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
})();


