---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List contacts 
The following  code snippet demonstrates how to retrieve a list of contacts from the HudumaSMS system. For instance we create a function called `listContacts`. This function makes a `GET` request to the HudumaSMS API endpoint, including the specified parameters (`records` and `page`) in the URL. The request includes the authorization token in the headers.

<Tabs>
<TabItem value="Javascript" label="Javascript">

```javascript
// Function to list contacts
const listContacts = async () => {
  try {
    const records = 20
    const page = 1
    const baseURL = "https://dev.hudumasms.com"; // Replace with your HudumaSMS base URL
    const response = await fetch(`${baseURL}/api/contacts/list/records/${records}?page=${page}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });

    const json = await response.json()
    if (response.ok) {
      setContacts(json.data.data)
    }

    if (!response.ok) {
      setIsLoading(false)
      console.log(json.message)
    }
  } catch (err) {
    console.log('Error while listing contacts');
  }
}
```

In this code snippet, the `listContacts` function is defined to retrieve a list of contacts from the HudumaSMS system. It sends a `GET` request to the HudumaSMS API endpoint, appending the `records` and `page` parameters to the URL. The authorization token is included in the request headers.

If the response is successful (`response.ok`), the contact data is extracted from the JSON response and assigned to corresponding variables. Pagination-related information, such as the total number of items, the range of displayed items, and the page indexes, is also updated.

If the response is not successful, the error message from the JSON response is logged to the console using `console.log`.
</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
// Function to list contacts
function listContacts() {
  try {
    $baseURL = "https://dev.hudumasms.com"; // Replace with your HudumaSMS base URL
    $records = 10; // Specify the number of records to retrieve
    $page = 1; // Specify the page number
    
    $url = $baseURL . "/api/contacts/list/records/$records?page=$page";
    $headers = [
      'Authorization: Bearer ' . $token,
    ];

    // Initialize a new HTTP request
    $request = new HttpRequest();
    $request->setUrl($url);
    $request->setMethod(HttpRequest::METHOD_GET);
    $request->setHeaders($headers);

    // Send the HTTP request
    $response = $request->send();

    // Check the response status
    if ($response->getStatusCode() === 200) {
      $json = $response->getBody();
      $data = json_decode($json, true);

      // Retrieve the contacts
      $contacts = $data['data'];

      // Return the retrieved contacts
      return $contacts;
    } else {
      $json = $response->getBody();
      $data = json_decode($json, true);
      throw new Exception($data['message']);
    }
  } catch (Exception $e) {
    echo "Error while listing contacts: " . $e->getMessage();
  }
}
?>
```

In this simplified version, the `HttpRequest` class is used to send the HTTP request to the HudumaSMS API endpoint. The response is checked for a status code of 200 (indicating success), and the JSON response is processed accordingly.

Please note that you may need to include the necessary dependencies or adjust the code based on your specific PHP environment and the HTTP library you are using.
</TabItem>

<TabItem value="java" label="Java">
Java code snippet for listing contacts from the HudumaSMS system:

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class ContactLister {
    public static void main(String[] args) {
        try {
            String baseURL = "https://dev.hudumasms.com"; // Replace with your HudumaSMS base URL
            int records = 10; // Specify the number of records to retrieve
            int page = 1; // Specify the page number
            
            String url = baseURL + "/api/contacts/list/records/" + records + "?page=" + page;
            
            URL apiUrl = new URL(url);
            HttpURLConnection connection = (HttpURLConnection) apiUrl.openConnection();
            connection.setRequestMethod("GET");
            
            // Add authorization token to headers
            String token = "YOUR_AUTH_TOKEN"; // Replace with your authorization token
            connection.setRequestProperty("Authorization", "Bearer " + token);
            
            int responseCode = connection.getResponseCode();
            
            if (responseCode == HttpURLConnection.HTTP_OK) {
                BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String line;
                StringBuilder response = new StringBuilder();
                
                while ((line = reader.readLine()) != null) {
                    response.append(line);
                }
                
                reader.close();
                
                // Process the JSON response
                String jsonResponse = response.toString();
                // TODO: Parse the JSON and retrieve the contacts
                
                System.out.println("Contacts retrieved successfully.");
            } else {
                System.out.println("Failed to retrieve contacts. Response code: " + responseCode);
            }
            
            connection.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

Using Java, a `HttpURLConnection` object is used to send a `GET` request to the HudumaSMS API endpoint, including the specified parameters (`records` and `page`) in the URL. The authorization token is added to the request headers.

The response code is checked to determine if the request was successful. If the response code is `HTTP_OK` (indicating success), the response is read and processed accordingly. Please note that you will need to add the necessary JSON parsing logic to retrieve the contacts from the JSON response.

Remember to replace `"YOUR_AUTH_TOKEN"` with your actual authorization token.
</TabItem>

</Tabs>


