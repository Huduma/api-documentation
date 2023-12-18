---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Edit contact

<Tabs>
<TabItem value="javascript" label="Javascript">

Assume we have created a function called `saveContactChanges` function is an asynchronous function that is used to update the changes made to a contact in the system. It makes a PUT request to the specified API endpoint (`hhttps://api.hudumasms.com/v2/contacts/update/{contact_id}`) with the updated contact details.

Here's a breakdown of the code inside the function:
- It  assigns contact ID  it to the `contact_id` variable.
- It uses the `fetch` function to send a PUT request to the API endpoint.
- The request body contains the updated contact information: `names`, `number`, and `email`.
- The `credentials` option is set to `'include'` to include any credentials such as cookies.
- The headers include the necessary information: `Content-Type`, `Accept`, and `Authorization` with the `Bearer` token.
- The response from the API is then parsed as JSON using `response.json()`.
- If the response is successful (status code 200), a success message is logged to the console using `console.log`.
- If the response is not successful, an error message or any relevant error handling is performed.

```javascript

const saveContactChanges = async () => {
  try {
    const  id = 3
    const response = await fetch('hhttps://api.hudumasms.com/v2/contacts/update/' + contact_id, {
      method: 'PUT',
      body: JSON.stringify({
        names: 'Joseph',
        number: 255766294723,
        email: 'test@mail.com'
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    const json = await response.json()
    if (response.ok) {
      console.log('Contact changes saved successfully')
    }

    if (!response.ok) {
      console.log(json.message)
    }
  } catch (err) {
    console.log('Error occurred while saving contact changes')
  }
}
```

</TabItem>

<TabItem value="php" label="PHP">
Here's a PHP version of the code built-in `file_get_contents` function to send an HTTP PUT request:

```php
function saveContactChanges() {
  // Code for saving contact changes

  // API endpoint URL
  $url = 'hhttps://api.hudumasms.com/v2/contacts/update/' . $contact_id;

  // Request data
  $data = array(
    'names' => $name,
    'number' => (int)$phone,
    'email' => $email
  );

  // Request headers
  $headers = array(
    'Content-Type: application/json',
    'Accept: application/json',
    'Authorization: Bearer ' . $token
  );

  // Set the PUT request options
  $options = array(
    'http' => array(
      'header' => implode("\r\n", $headers),
      'method' => 'PUT',
      'content' => json_encode($data),
      'ignore_errors' => true
    )
  );

  // Create the stream context
  $context = stream_context_create($options);

  // Send the PUT request and get the response
  $response = file_get_contents($url, false, $context);

  // Handle the response
  if ($response === false) {
    // Handle error
    echo 'Error: Failed to send the request';
  } else {
    // Process the response
    $json = json_decode($response, true);
    if ($json && isset($json['success'])) {
      if ($json['success']) {
        // Handle successful update
        echo 'Contact changes saved successfully';
      } else {
        // Handle unsuccessful update
        echo 'Error: ' . $json['message'];
      }
    } else {
      // Handle response parsing error
      echo 'Error parsing API response';
    }
  }
}
```

Please make sure you have the necessary variables available (`$contact_id`, `$name`, `$phone`, `$email`, `$token`) before calling the `saveContactChanges()` function. This code constructs the PUT request by setting the necessary headers and request body. It then uses `file_get_contents` with a stream context to send the PUT request and retrieve the response.

Note that you may need to enable the `allow_url_fopen` configuration option in your PHP settings for the `file_get_contents` function to work with remote URLs.
</TabItem>

<TabItem value="java" label="Java">
 Here's a version of the code using Java's `HttpURLConnection` to send an HTTP PUT request:

```java

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class ContactUpdater {
    public static void saveContactChanges() {
        try {
            // API endpoint URL
            String apiUrl = "hhttps://api.hudumasms.com/v2/contacts/update/" + contactId;

            // Request data
            String requestData = "{\"names\":\"" + name + "\",\"number\":" + phone + ",\"email\":\"" + email + "\"}";

            // Create the HttpURLConnection
            URL url = new URL(apiUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            // Set the request method to PUT
            conn.setRequestMethod("PUT");

            // Set the request headers
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Accept", "application/json");
            conn.setRequestProperty("Authorization", "Bearer " + token);

            // Enable output and set the request body
            conn.setDoOutput(true);
            try (OutputStream outputStream = conn.getOutputStream()) {
                outputStream.write(requestData.getBytes());
                outputStream.flush();
            }

            // Get the response code
            int responseCode = conn.getResponseCode();

            if (responseCode == HttpURLConnection.HTTP_OK) {
                // Read the response
                try (BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()))) {
                    String line;
                    StringBuilder response = new StringBuilder();
                    while ((line = reader.readLine()) != null) {
                        response.append(line);
                    }
                    // Handle successful update
                    System.out.println("Contact changes saved successfully");
                }
            } else {
                // Read the error response
                try (BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getErrorStream()))) {
                    String line;
                    StringBuilder errorResponse = new StringBuilder();
                    while ((line = reader.readLine()) != null) {
                        errorResponse.append(line);
                    }
                    // Handle unsuccessful update
                    System.out.println("Error: " + errorResponse.toString());
                }
            }

            // Close the connection
            conn.disconnect();
        } catch (IOException e) {
            e.printStackTrace();
            // Handle exception
            System.out.println("Error while saving contact changes");
        }
    }
}
```

Please ensure that you have the necessary variables available (`contactId`, `name`, `phone`, `email`, `token`) before calling the `saveContactChanges()` method. This code constructs the PUT request by setting the necessary headers and request body. It then uses `HttpURLConnection` to send the PUT request and retrieve the response. The response is read and processed accordingly based on the HTTP status code.

Note: This code snippet provides a basic framework for making an HTTP PUT request. You may need to customize it further based on your specific requirements and the libraries or frameworks you are using in your Java project.

</TabItem>

</Tabs>
 