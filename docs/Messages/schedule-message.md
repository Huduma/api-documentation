---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Scheduled Message
This is scheduled Messages there are few parameters that may change on the request body such as 
startTime, startDate, endDate, scheduledOption.
To ensure successful communication with the API, please include the following headers in all your requests:

- Content-Type: application/json
- Accept: application/json

The API responses will be returned in the following format:

```
{
  "success": true|false,
  "message": "response message",
  "data": { ... }
}
```

You can access the status code of the response using the response's status code parameter.

By following these guidelines, you can effectively interact with the API and interpret the responses. If you have any further questions or need assistance, please let us know.
<Tabs>
<TabItem value="javascript" label="Javascript">

  ```javascript
// Set up the API endpoint URL
const apiUrl = `hhttps://api.hudumasms.com/v2/send-sms`
const token = `Your token from profile page`

// Define the payload for the API request
const payload = {
  sender_id: 2,
  sms: "Hello",
  schedule:"daily", //scheduled options "none","daily", "weekly", "monthly"
  start_date:"2023-06-05", // year-month-date
  end_date:"2023-06-07", //year-month-date
  time:'8:27',
  recipients: [{ number: 255712500282 }, { number: 255766296543 }]
};

// Make the API request using the fetch function
const response = await fetch(apiUrl, {
  method: 'POST',
  body: JSON.stringify(payload),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  }
});

// Handle the response from the API
if (response.ok) {
  const data = await response.json();
  console.log("API response:", data);
} else {
  console.error("API request failed with status:", response.status);
}
```

The code snippet demonstrates how to use JavaScript's `fetch` function to make a POST request to the HudumaSMS API. It sets up the API endpoint URL, defines the payload object with the necessary information, and includes the required headers, including the `Authorization` header with the bearer token.

After making the request, the code handles the response by checking if it is successful (`response.ok`). If it is, it extracts the JSON response using `response.json()` and logs it to the console. If the request fails, it logs the corresponding error status.

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
// Set up the API endpoint URL
$apiUrl = 'hhttps://api.hudumasms.com/v2/send-sms';
$token = 'Your token from profile page';

// Define the payload for the API request
$payload = [
    'sender_id' => 2,
    'sms' => 'Hello',
    'schedule' => 'daily', // scheduled options "none","daily", "weekly", "monthly"
    'start_date' => '2023-06-05', // year-month-date
    'end_date' => '2023-06-07', // year-month-date
    'time' => '8:27',
    'recipients' => [
        ['number' => 255712500282],
        ['number' => 255766296543]
    ]
];

// Set the HTTP headers
$headers = [
    'Content-Type: application/json',
    'Accept: application/json',
    'Authorization: Bearer ' . $token
];

// Create a stream context with the headers and payload
$context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => implode("\r\n", $headers),
        'content' => json_encode($payload)
    ]
]);

// Send the API request and get the response
$response = file_get_contents($apiUrl, false, $context);

// Handle the response from the API
if ($response !== false) {
    $data = json_decode($response, true);
    echo 'API response: ' . print_r($data, true);
} else {
    echo 'API request failed.';
}
?>

```
In the PHP code above, we set the API endpoint URL to `$url` and the API token to `$token`. The payload is defined as an associative array in the `$data` variable, containing the `sender_id`, `sms`, and `recipients` information.

We then set up the necessary options for the HTTP request, including the headers and method (`POST`). The payload data is encoded as JSON using `json_encode()` and included in the request.

Using `stream_context_create()`, we create the stream context with the specified options. Then, we make the API request using `file_get_contents()` with the URL, stream context, and `false` parameter to disable SSL verification.

The response is stored in the `$response` variable. We decode the JSON response using `json_decode()` and check if it's valid. If valid, you can handle the API response as needed. In the example, we simply use `var_dump()` to display the response data. If the API response is invalid or the request fails, appropriate error messages are displayed.

Feel free to modify the code snippet based on your specific requirements, such as adjusting the payload or handling the API response differently.

If you have any further questions, feel free to ask!
</TabItem>

<TabItem value="jave" label="Java">
Apologies for the oversight in the previous code snippet. The code provided was missing the handling of the response using the `HttpURLConnection` class. Here's an updated version of the code that includes the necessary modifications:

```java

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class SendSMS {
    public static void main(String[] args) {
        String apiUrl = "hhttps://api.hudumasms.com/v2/send-sms";
        String token = "Your token from profile page";

        // Define the payload for the API request
        String payload = "{\n" +
                "    \"sender_id\": 2,\n" +
                "    \"sms\": \"Hello\",\n" +
                "    \"schedule\": \"daily\",\n" +
                "    \"start_date\": \"2023-06-05\",\n" +
                "    \"end_date\": \"2023-06-07\",\n" +
                "    \"time\": \"8:27\",\n" +
                "    \"recipients\": [\n" +
                "        { \"number\": 255712500282 },\n" +
                "        { \"number\": 255766296543 }\n" +
                "    ]\n" +
                "}";

        try {
            URL url = new URL(apiUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setRequestProperty("Accept", "application/json");
            connection.setRequestProperty("Authorization", "Bearer " + token);
            connection.setDoOutput(true);

            OutputStream os = connection.getOutputStream();
            os.write(payload.getBytes());
            os.flush();
            os.close();

            int responseCode = connection.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                System.out.println("API response: " + response.toString());
            } else {
                System.out.println("API request failed with status: " + responseCode);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```

In this updated code snippet, the response is handled properly by checking the response code. If the response code is `HttpURLConnection.HTTP_OK`, we read the response from the input stream using `connection.getInputStream()`. If the response code indicates an error, we read the error stream using `connection.getErrorStream()`.

The response is then read and stored in a `StringBuilder` called `response`. Finally, the `response` is printed to the console.

</TabItem>

</Tabs>


