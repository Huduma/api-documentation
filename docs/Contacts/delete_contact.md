---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Delete contact

<Tabs>
<TabItem value="javascript" label="Javascript">

```javascript

const deleteContact = async (contact_id) => {
  try {
    const contact_id = 1
    const response = await fetch('https://dev.hudumasms.com/api/contacts/delete/' + contact_id, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });

    const json = await response.json()
    if (response.ok) {
      console.log('Contact deleted successfully')
    }

    if (!response.ok) {
      console.log(json.message)
    }
  } catch (err) {
    console.log('Error while deleting contact')
  }
}

```
</TabItem>

<TabItem value="php" label="PHP">
 Here's an alternative version of the code using PHP's `file_get_contents` function:

```php
function deleteContact($contact_id, $token) {
    $url = 'https://dev.hudumasms.com/api/contacts/delete/' . $contact_id;

    $headers = array(
        'Authorization: Bearer ' . $token,
        'Content-Type: application/json',
        'Accept: application/json'
    );

    $options = array(
        'http' => array(
            'header' => $headers,
            'method' => 'DELETE'
        )
    );

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result) {
        listContacts();
        echo 'Contact deleted successfully';
    } else {
        $error = error_get_last();
        echo $error['message'];
    }
}
```

Ensure to replace `$token` with the valid authentication token. You can call the `deleteContact` function with the appropriate contact ID to delete the contact.

</TabItem>

<TabItem value="java" label="Java">
 Here's an example code snippet in Java to delete a contact using HttpURLConnection:

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class ContactDeletion {

    public static void deleteContact(String contactId, String token) throws IOException {
        String url = "https://dev.hudumasms.com/api/contacts/delete/" + contactId;

        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("DELETE");
        con.setRequestProperty("Authorization", "Bearer " + token);

        int responseCode = con.getResponseCode();
        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuilder response = new StringBuilder();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        if (responseCode == HttpURLConnection.HTTP_OK) {
            System.out.println("Contact deleted successfully");
            listContacts(); // Call your function to list contacts
        } else {
            System.out.println("Error while deleting contact: " + response.toString());
        }
    }

    public static void listContacts() {
        // Implement your logic to list contacts here
    }

    public static void main(String[] args) {
        String contactId = "123"; // Replace with the actual contact ID
        String token = "YOUR_AUTH_TOKEN"; // Replace with the valid authentication token
        try {
            deleteContact(contactId, token);
        } catch (IOException e) {
            System.out.println("Exception occurred: " + e.getMessage());
        }
    }
}
```

Make sure to replace `contactId` with the appropriate contact ID and `YOUR_AUTH_TOKEN` with the valid authentication token. The `deleteContact` method sends a DELETE request to the specified API endpoint.
</TabItem>

</Tabs>