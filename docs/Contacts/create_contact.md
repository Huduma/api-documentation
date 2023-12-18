---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create contact
**Introduction**: The following code snippet illustrates how to integrate the HudumaSMS API into your application to add a new contact. By making a `POST` request to the designated API endpoint (`hhttps://api.hudumasms.com/v2/contacts/create`), you can securely send the contact's name, phone number, and email as JSON in the request body. This code demonstrates the necessary steps and headers, including authentication with a bearer token, to successfully add a contact to the HudumaSMS system.

<Tabs>
<TabItem value="javascript" label="Javascript">

```javascript

const saveContact = async () => {
  try {
    // Send a POST request to the API endpoint for creating contacts
    const response = await fetch('hhttps://api.hudumasms.com/v2/contacts/create', {
      method: 'POST',
      body: JSON.stringify({
        names: name,
        number: Number(phone),
        email: email
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    // Parse the response body as JSON
    const json = await response.json();

    // Check if the response is successful
    if (response.ok) {
      console.log('New contact added successfully.');
    }

    // Handle error responses
    if (!response.ok) {
      console.log('Error:', json.message);
    }
  } catch (err) {
    console.log('Error while adding new contact:', err);
  }
};
```
</TabItem>

<TabItem value="php" label="PHP">
Certainly! Here's a  PHP code snippet for adding a new contact to the HudumaSMS system:

```php
<?php
// API endpoint URL
$url = 'hhttps://api.hudumasms.com/v2/contacts/create';

// Data to send in the request body
$data = array(
    'names' => $name,
    'number' => $phone,
    'email' => $email
);

// Set the headers and request options
$options = array(
    'http' => array(
        'header' => "Content-Type: application/json\r\n" .
                    "Accept: application/json\r\n" .
                    "Authorization: Bearer " . $token . "\r\n",
        'method' => 'POST',
        'content' => json_encode($data)
    )
);

// Create a stream context
$context = stream_context_create($options);

// Send the request and get the response
$response = file_get_contents($url, false, $context);

// Parse the response JSON
$responseData = json_decode($response, true);

// Check if the response is successful
if (isset($responseData['success']) && $responseData['success']) {
    echo "New contact added successfully.";
    // Additional actions upon successful contact creation
} else {
    echo "Error: " . $responseData['message'];
    // Handle the error response
}
?>
```

In this simplified version, we use the `file_get_contents` function along with a stream context to send a `POST` request to the specified API endpoint (`hhttps://api.hudumasms.com/v2/contacts/create`). The request body is set as JSON using `json_encode`, and the necessary headers are included in the context options. After receiving the response, we decode the JSON and check if the request was successful. If successful, we display a success message. Otherwise, we handle the error response by displaying the corresponding error message.

Please note that this simplified version uses the `file_get_contents` function, which requires the `allow_url_fopen` setting to be enabled on your server.


</TabItem>

<TabItem value="java" label="Java"> Here's a version of the Java code snippet for adding a new contact to the HudumaSMS system:

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class AddContactExample {

    public static void main(String[] args) {
        // API endpoint URL
        String apiUrl = "hhttps://api.hudumasms.com/v2/contacts/create";

        // Request body data
        String requestBody = "{\"names\": \"John Doe\", \"number\": \"123456789\", \"email\": \"johndoe@example.com\"}";

        try {
            // Create URL object
            URL url = new URL(apiUrl);

            // Create HTTP connection
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Accept", "application/json");
            conn.setRequestProperty("Authorization", "Bearer YOUR_API_TOKEN"); // Replace with your API token
            conn.setDoOutput(true);

            // Write the request body
            OutputStream outputStream = conn.getOutputStream();
            outputStream.write(requestBody.getBytes());
            outputStream.flush();

            // Get the response code
            int responseCode = conn.getResponseCode();

            // Read the response body
            BufferedReader reader;
            if (responseCode == HttpURLConnection.HTTP_OK) {
                reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                reader = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }
            StringBuilder response = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            // Check if the request was successful
            if (responseCode == HttpURLConnection.HTTP_OK) {
                System.out.println("New contact added successfully.");
                // Additional actions upon successful contact creation
            } else {
                System.out.println("Error: " + response.toString());
                // Handle the error response
            }

            // Close the connection
            conn.disconnect();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

Please note that you'll need to replace the placeholder values in the `requestBody` and `"Bearer YOUR_API_TOKEN"` with the actual values for the contact you want to add and your HudumaSMS API token, respectively.


</TabItem>
</Tabs>