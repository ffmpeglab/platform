# LoginApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**loginControllerPlatformLogin**](LoginApi.md#logincontrollerplatformlogin) | **GET** /platform/login |  |
| [**loginControllerPlatformLoginCallback**](LoginApi.md#logincontrollerplatformlogincallback) | **GET** /platform/oauth2/callback |  |



## loginControllerPlatformLogin

> ConnectRedirectResponseDTO loginControllerPlatformLogin()



### Example

```ts
import {
  Configuration,
  LoginApi,
} from 'ffmpeglab-platform-sdk';
import type { LoginControllerPlatformLoginRequest } from 'ffmpeglab-platform-sdk';

async function example() {
  console.log("🚀 Testing ffmpeglab-platform-sdk SDK...");
  const api = new LoginApi();

  try {
    const data = await api.loginControllerPlatformLogin();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ConnectRedirectResponseDTO**](ConnectRedirectResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## loginControllerPlatformLoginCallback

> loginControllerPlatformLoginCallback()



### Example

```ts
import {
  Configuration,
  LoginApi,
} from 'ffmpeglab-platform-sdk';
import type { LoginControllerPlatformLoginCallbackRequest } from 'ffmpeglab-platform-sdk';

async function example() {
  console.log("🚀 Testing ffmpeglab-platform-sdk SDK...");
  const api = new LoginApi();

  try {
    const data = await api.loginControllerPlatformLoginCallback();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

