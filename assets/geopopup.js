fetch('https://ipinfo.io/json')
  .then(response => response.json())
  .then(data => {
      const country = data.country;
      showPopupBasedOnCountry(country);
  });

function showPopupBasedOnCountry(country) {
    // Check if the popup has already been shown to the user
    if (!localStorage.getItem('popupShown')) {
        var message = "";
        if(country != "SG") {
            message = `
            <h3>For International Orders Only</h3>
            <p>I acknowledge that I am responsible for all import duties, customs and local sales taxes based on the country I am shipping to. Glovida is not liable if my package is seized by local customs/tax authorities. (<a href="/policies/terms-of-service">Terms of Use</a>)*.
</p>
<p>
There will be no exchange or refunds once items have been shipped out for international orders. Kindly check your country's local regulations for importing products from overseas before making your purchase.
</p>
<p>Please note that we are unable to ship any liquids or aerosol overseas.
</p>
<p>I have read and agree to the website terms and conditions.
</p>

            `;
        }
        // Add other countries as needed

        if (message) {
            document.getElementById('popupMessage').innerHTML = message;
            document.getElementById('customPopup').style.display = "block";
            // Mark the popup as shown so it doesn't display on future visits
            localStorage.setItem('popupShown', 'true');
        }
    }
}

document.getElementById('agreeButton').addEventListener('click', function() {
    // Close the popup
    document.getElementById('customPopup').style.display = "none";
});