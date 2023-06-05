"use strict";(self.webpackChunkapi_documentation=self.webpackChunkapi_documentation||[]).push([[2865],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(6010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,o),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7462),a=t(7294),s=t(6010),o=t(2466),i=t(6550),l=t(1980),u=t(7392),p=t(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,u]=h({queryString:t,groupId:r}),[c,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,p.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),g=(()=>{const e=l??c;return m({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var g=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),r=u[t].value;r!==i&&(c(n),l(r))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function v(e){const n=f(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",b.tabList)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function w(e){const n=(0,g.Z)();return a.createElement(v,(0,r.Z)({key:String(n)},e))}},846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=t(7462),a=(t(7294),t(3905)),s=t(4866),o=t(5162);const i={sidebar_position:1},l="Sending Messages",u={unversionedId:"Messages/sending-messages",id:"Messages/sending-messages",title:"Sending Messages",description:"To ensure successful communication with the API, please include the following headers in all your requests:",source:"@site/docs/Messages/sending-messages.md",sourceDirName:"Messages",slug:"/Messages/sending-messages",permalink:"/swa/docs/Messages/sending-messages",draft:!1,editUrl:"https://github.com/MegaJoint/api-documentation/tree/master/docs/Messages/sending-messages.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Messages",permalink:"/swa/docs/category/messages"},next:{title:"Scheduled Message",permalink:"/swa/docs/Messages/schedule-message"}},p={},c=[],d={toc:c},m="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sending-messages"},"Sending Messages"),(0,a.kt)("p",null,"To ensure successful communication with the API, please include the following headers in all your requests:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,a.kt)("li",{parentName:"ul"},"Accept: application/json")),(0,a.kt)("p",null,"The API responses will be returned in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "success": true|false,\n  "message": "response message",\n  "data": { ... }\n}\n')),(0,a.kt)("p",null,"You can access the status code of the response using the response's status code parameter."),(0,a.kt)("p",null,"By following these guidelines, you can effectively interact with the API and interpret the responses. If you have any further questions or need assistance, please let us know."),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Set up the API endpoint URL\nconst apiUrl = `https://dev.hudumasms.com/api/send-sms`\nconst token = `Your token from profile page`\n\n// Define the payload for the API request\nconst payload = {\nsender_id: 2,\nsms: \"Hello\",\nrecipients: [{ number: 255712500282 }, { number: 255766296543 }]\n};\n\n// Make the API request using the fetch function\nconst response = await fetch(apiUrl, {\nmethod: 'POST',\nbody: JSON.stringify(payload),\nheaders: {\n  'Content-Type': 'application/json',\n  'Accept': 'application/json',\n  'Authorization': `Bearer ${token}`\n}\n});\n\n// Handle the response from the API\nif (response.ok) {\nconst data = await response.json();\nconsole.log(\"API response:\", data);\n} else {\nconsole.error(\"API request failed with status:\", response.status);\n}\n")),(0,a.kt)("p",null,"The code snippet demonstrates how to use JavaScript's ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," function to make a POST request to the HudumaSMS API. It sets up the API endpoint URL, defines the payload object with the necessary information, and includes the required headers, including the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header with the bearer token."),(0,a.kt)("p",null,"After making the request, the code handles the response by checking if it is successful (",(0,a.kt)("inlineCode",{parentName:"p"},"response.ok"),"). If it is, it extracts the JSON response using ",(0,a.kt)("inlineCode",{parentName:"p"},"response.json()")," and logs it to the console. If the request fails, it logs the corresponding error status.")),(0,a.kt)(o.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$url = 'https://dev.hudumasms.com/api/send-sms';\n$token = 'YOUR_API_TOKEN';\n\n$data = array(\n    'sender_id' => 2,\n    'sms' => 'Hello',\n    'recipients' => array(\n        array('number' => '255712500282'),\n        array('number' => '255766296543')\n    )\n);\n\n$options = array(\n    'http' => array(\n        'header' => \"Content-Type: application/json\\r\\n\" .\n                    \"Accept: application/json\\r\\n\" .\n                    \"Authorization: Bearer $token\\r\\n\",\n        'method' => 'POST',\n        'content' => json_encode($data)\n    )\n);\n\n$context = stream_context_create($options);\n$response = file_get_contents($url, false, $context);\n\nif ($response !== false) {\n    $responseData = json_decode($response, true);\n    if ($responseData !== null) {\n        // Handle the API response\n        var_dump($responseData);\n    } else {\n        echo \"Invalid API response\";\n    }\n} else {\n    echo \"Failed to make API request\";\n}\n")),(0,a.kt)("p",null,"In the PHP code above, we set the API endpoint URL to ",(0,a.kt)("inlineCode",{parentName:"p"},"$url")," and the API token to ",(0,a.kt)("inlineCode",{parentName:"p"},"$token"),". The payload is defined as an associative array in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$data")," variable, containing the ",(0,a.kt)("inlineCode",{parentName:"p"},"sender_id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sms"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"recipients")," information."),(0,a.kt)("p",null,"We then set up the necessary options for the HTTP request, including the headers and method (",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),"). The payload data is encoded as JSON using ",(0,a.kt)("inlineCode",{parentName:"p"},"json_encode()")," and included in the request."),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"stream_context_create()"),", we create the stream context with the specified options. Then, we make the API request using ",(0,a.kt)("inlineCode",{parentName:"p"},"file_get_contents()")," with the URL, stream context, and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," parameter to disable SSL verification."),(0,a.kt)("p",null,"The response is stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$response")," variable. We decode the JSON response using ",(0,a.kt)("inlineCode",{parentName:"p"},"json_decode()")," and check if it's valid. If valid, you can handle the API response as needed. In the example, we simply use ",(0,a.kt)("inlineCode",{parentName:"p"},"var_dump()")," to display the response data. If the API response is invalid or the request fails, appropriate error messages are displayed."),(0,a.kt)("p",null,"Feel free to modify the code snippet based on your specific requirements, such as adjusting the payload or handling the API response differently."),(0,a.kt)("p",null,"If you have any further questions, feel free to ask!")),(0,a.kt)(o.Z,{value:"jave",label:"Java",mdxType:"TabItem"},"Apologies for the oversight in the previous code snippet. The code provided was missing the handling of the response using the `HttpURLConnection` class. Here's an updated version of the code that includes the necessary modifications:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import java.io.BufferedReader;\nimport java.io.InputStreamReader;\nimport java.io.OutputStream;\nimport java.net.HttpURLConnection;\nimport java.net.URL;\n\npublic class HudumaSMSApiClient {\n\n    public static void main(String[] args) {\n        String apiUrl = "https://dev.hudumasms.com/api/send-sms";\n        String apiToken = "YOUR_API_TOKEN";\n\n        String payload = "{\\"sender_id\\": 2, \\"sms\\": \\"Hello\\", \\"recipients\\": [{\\"number\\": \\"255712500282\\"}, {\\"number\\": \\"255766296543\\"}]}";\n\n        try {\n            URL url = new URL(apiUrl);\n            HttpURLConnection connection = (HttpURLConnection) url.openConnection();\n\n            connection.setRequestMethod("POST");\n            connection.setRequestProperty("Content-Type", "application/json");\n            connection.setRequestProperty("Accept", "application/json");\n            connection.setRequestProperty("Authorization", "Bearer " + apiToken);\n            connection.setDoOutput(true);\n\n            OutputStream outputStream = connection.getOutputStream();\n            outputStream.write(payload.getBytes());\n            outputStream.flush();\n            outputStream.close();\n\n            int responseCode = connection.getResponseCode();\n\n            BufferedReader reader;\n            if (responseCode == HttpURLConnection.HTTP_OK) {\n                reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));\n            } else {\n                reader = new BufferedReader(new InputStreamReader(connection.getErrorStream()));\n            }\n\n            StringBuilder response = new StringBuilder();\n            String line;\n            while ((line = reader.readLine()) != null) {\n                response.append(line);\n            }\n            reader.close();\n\n            System.out.println("API response: " + response.toString());\n\n            connection.disconnect();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}\n')),(0,a.kt)("p",null,"In this updated code snippet, the response is handled properly by checking the response code. If the response code is ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpURLConnection.HTTP_OK"),", we read the response from the input stream using ",(0,a.kt)("inlineCode",{parentName:"p"},"connection.getInputStream()"),". If the response code indicates an error, we read the error stream using ",(0,a.kt)("inlineCode",{parentName:"p"},"connection.getErrorStream()"),"."),(0,a.kt)("p",null,"The response is then read and stored in a ",(0,a.kt)("inlineCode",{parentName:"p"},"StringBuilder")," called ",(0,a.kt)("inlineCode",{parentName:"p"},"response"),". Finally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," is printed to the console."))))}h.isMDXComponent=!0}}]);