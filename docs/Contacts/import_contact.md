---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Import contacts

<Tabs>
<TabItem value="javascript" label="Javascript">
Assume we have a function called `selectFileUpload` this function allows you to upload a contacts file to the HudumaSMS API. This code snippet demonstrates how to send a POST request to the API endpoint `'https://dev.hudumasms.com/api/contacts/upload-file'` using JavaScript. The function accepts a `selectedFile` parameter, which represents the file to be uploaded. It creates a FormData object and appends the file to it. The request includes the necessary authorization token in the headers.

```js

const selectFileUpload = async (selectedFile) => {
  try {
    const formData = new FormData()
    formData.append('contacts', selectedFile) //this can be from html tag <input type="file" />

    const apiUrl = 'https://dev.hudumasms.com/api/contacts/upload-file'
    const token = 'Your token from profile page'

    const response = await fetch(apiUrl, {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })

    const json = await response.json()

    if (response.ok) {
      console.log(json.message)
    }

    if (!response.ok) {
      console.log(json.message)
      errorHandler(json)
    }
  } catch (err) {
    console.log('Error while uploading file')
  }
}

```

</TabItem>

<TabItem value="php" label="PHP">

```php 

function selectFileUpload($selectedFile)
{
    try {
        $formData = new FormData();
        $formData->append('contacts', $selectedFile); // This can be obtained from the HTML input tag <input type="file" />

        $apiUrl = 'https://dev.hudumasms.com/api/contacts/upload-file';
        $token = 'Your token from profile page';

        $headers = [
            'Authorization: Bearer ' . $token
        ];

        $context = stream_context_create([
            'http' => [
                'method' => 'POST',
                'header' => implode("\r\n", $headers),
                'content' => $formData->getContents(),
            ]
        ]);

        $response = file_get_contents($apiUrl, false, $context);
        $json = json_decode($response, true);

        if ($response !== false) {
            if (isset($json['ok']) && $json['ok']) {
                echo $json['message'];
            } else {
                echo $json['message'];
                errorHandler($json);
            }
        } else {
            echo 'Error while uploading file';
        }
    } catch (Exception $ex) {
        echo 'Error while uploading file';
    }
}

```

</TabItem>

<TabItem value="java" label="Java">

```java

import java.io.File;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

public class FileUploader {
    public static void selectFileUpload(File selectedFile) {
        try {
            String apiUrl = "https://dev.hudumasms.com/api/contacts/upload-file";
            String token = "Your token from profile page";

            HttpURLConnection connection = (HttpURLConnection) new URL(apiUrl).openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Authorization", "Bearer " + token);
            connection.setDoOutput(true);

            MultipartUtility multipart = new MultipartUtility(connection);
            multipart.addFilePart("contacts", selectedFile);

            int responseCode = connection.getResponseCode();
            String responseMessage = connection.getResponseMessage();
            String jsonResponse = multipart.getResponse();

            if (responseCode == HttpURLConnection.HTTP_OK) {
                System.out.println(jsonResponse);
            } else {
                System.out.println(responseMessage);
                // Handle error response
                // errorHandler(jsonResponse);
            }
        } catch (IOException e) {
            System.out.println("Error while uploading file");
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        File selectedFile = new File("path/to/selected/file");
        selectFileUpload(selectedFile);
    }
}
```

Note that you need to have the `MultipartUtility` class to handle multipart form data. You can find various implementations of `MultipartUtility` online or create your own based on your requirements.


</TabItem>

</Tabs>