# Authentication

We have the setting `allow_unauthenticated_identities` set to `true` for Amazon Cognito identity, meaning we are allowing access to AWS resources to unauthenticated users through our identity pool.

Ideally we should only allow access to authenticated users. There are several reasons why we might want to only allow authenticated users:

**Security**

If we keep `allow_unauthenticated_identities` set to `true`, anyone can assume an identity in our identity pool and access our AWS resources. This can be a security risk, especially if the AWS resources contain sensitive information or functionality.

**Billing**

We would like to avoid unexpected charges from unauthenticated access.

**User management**

By requiring users to authenticate before accessing our AWS resources, we can better manage our user base. We can set up user authentication policies, track user activity, and revoke access if necessary. This is going to come in handy when we need to associate posts with specific users, etc.

**Integration**

Setting `allow_unauthenticated_identities` to `false` can make it easier to integrate our AWS resources with other authentication providers (Google, Facebook, etc). By requiring users to authenticate with a specific provider, we can ensure that our AWS resources are accessed only by authorized users.

:::info

Overall, many good reasons exist to set `allow_unauthenticated_identities` to `false`. First, by requiring authentication before accessing your AWS resources, you can better protect your resources, manage your users, and customize the user experience.

:::

## Disallow unauthenticated users
