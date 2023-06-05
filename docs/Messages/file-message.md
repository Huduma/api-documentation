---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# File message
The File message feature allows you to upload a contacts file in CSV (Comma-Separated Values) format. This file contains a list of phone numbers or contacts. The system will then send a message to each phone number listed in the file, allowing you to reach multiple recipients with a single action.

This feature simplifies the process of sending messages to a large number of contacts by automating the message distribution based on the phone numbers provided in the CSV file. By leveraging the CSV format, you can easily organize and manage your contact information in a structured manner.

<Tabs>
<TabItem value="javascript" label="Javascript">

```javascript
const sendFileMessage = async() => {
  try {
    const formData = new FormData()
    formData.append('contacts', selectedFile) // can be from html <input type="file" />
    formData.append('sender_id', 1)  //see the ID of the sender-ID on system dashboard
    formData.append('message', "Hello")

    const response = await fetch('https://dev.hudumasms.com/api/smses/file/send', {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });

    const json = await response.json()

    if (response.ok) {
      console.log(json.message)
    }

    if (!response.ok) {
      console.log(json.message);
    }

  } catch (err) {
    console.log('Error while uploading file');
  }
}

```


1. The `sendFileMessage` function handles the process of sending a file message.
2. The API endpoint URL is set to `'https://api.hudumasms.com/api/smses/file/send'`.
3. The response messages are logged to the console using `console.log` instead of `toast` for simplicity.
4. The necessary form data is appended to the `FormData` object.
5. The API request is made using the `fetch` function with the appropriate method, body, and headers.
6. The response is parsed as JSON using `response.json()`.
7. If the response is successful (`response.ok`), the success message is logged and the necessary actions are taken.
8. If the response is not successful, the error message is logged and the error handler function is called.
9. Any errors that occur during the process are logged to the console.

</TabItem>

<TabItem value="php" label="PHP">

```php

<?php
// Set up the API endpoint URL
$apiUrl = 'https://dev.hudumasms.com/api/smses/file/send';

// Set the request parameters
$contactsFile = $_FILES['contacts'];
$senderId = $_POST['sender_id'];
$message = $_POST['message'];
$token = 'Your token from profile page';

// Create the request body
$requestBody = array(
    'sender_id' => $senderId,
    'message' => $message
);

// Append the file to the request body
$requestBody['contacts'] = new \CURLFile($contactsFile['tmp_name'], $contactsFile['type'], $contactsFile['name']);

// Set the request headers
$requestHeaders = array(
    'Authorization: Bearer ' . $token
);

// Create a new HTTP context
$context = stream_context_create(array(
    'http' => array(
        'method' => 'POST',
        'header' => $requestHeaders,
        'content' => $requestBody
    )
));

// Send the request and get the response
$response = file_get_contents($apiUrl, false, $context);

// Handle the response
if ($response !== false) {
    $responseData = json_decode($response, true);
    if ($responseData['success']) {
        echo 'Success: ' . $responseData['message'];
        // Perform necessary actions on success
    } else {
        echo 'Error: ' . $responseData['message'];
        // Handle error cases
    }
} else {
    echo 'Error: Failed to send the request.';
}
?>


```

</TabItem>

<TabItem value="java" label="Java">

```java

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class FileMessageSender {
    public static void main(String[] args) {
        String apiUrl = "https://dev.hudumasms.com/api/smses/file/send";
        String token = "Your token from profile page";

        try {
            String filePath = "path/to/contacts.csv";
            File contactsFile = new File(filePath);

            // Set request parameters
            String senderId = "2";
            String message = "Hello";

            // Create a new HTTP connection
            URL url = new URL(apiUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setDoOutput(true);

            // Set request headers
            connection.setRequestProperty("Content-Type", "multipart/form-data");
            connection.setRequestProperty("Authorization", "Bearer " + token);

            // Create the request body
            OutputStream outputStream = connection.getOutputStream();
            PrintWriter writer = new PrintWriter(new OutputStreamWriter(outputStream));
            writer.append("--").append(getBoundary()).append("\r\n");
            writer.append("Content-Disposition: form-data; name=\"contacts\"; filename=\"").append(contactsFile.getName()).append("\"\r\n");
            writer.append("Content-Type: ").append(connection.guessContentTypeFromName(contactsFile.getName())).append("\r\n");
            writer.append("\r\n");
            writer.flush();

            // Write file content to the request body
            FileInputStream fileInputStream = new FileInputStream(contactsFile);
            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = fileInputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
            outputStream.flush();
            fileInputStream.close();

            // Write remaining request body
            writer.append("\r\n");
            writer.append("--").append(getBoundary()).append("\r\n");
            writer.append("Content-Disposition: form-data; name=\"sender_id\"\r\n");
            writer.append("\r\n").append(senderId).append("\r\n");
            writer.append("--").append(getBoundary()).append("\r\n");
            writer.append("Content-Disposition: form-data; name=\"message\"\r\n");
            writer.append("\r\n").append(message).append("\r\n");
            writer.append("--").append(getBoundary()).append("--").append("\r\n");
            writer.close();

            // Send the request and get the response
            int responseCode = connection.getResponseCode();
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line;
            StringBuilder response = new StringBuilder();
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            // Handle the response
            if (responseCode == HttpURLConnection.HTTP_OK) {
                System.out.println("File message sent successfully.");
                // Perform necessary actions on success
            } else {
                System.out.println("Failed to send file message. Response code: " + responseCode);
                // Handle error cases
            }

            connection.disconnect();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String getBoundary() {
        return "===" + System.currentTimeMillis() + "===";
    }
}

```

</TabItem>

</Tabs>