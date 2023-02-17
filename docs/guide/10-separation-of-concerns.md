# Separation of concerns

Right now, we have our application code for Lex UI together with our Infrastructure-as-Code. While this may be ok for a small application, this may cause issues down the road. For example, you want to avoid unnecessarily triggering your Terraform pipelines because of updates to application code, etc.

## Seperate Lex UI

Remove Lex UI source code from your Infrastructure-as-Code by running the following command:

```shell
rm -rf src/aws-lex-web-ui
```

Clone the repository to use for UI in another location on your machine:

```shell
git clone git@github.com:musonza/aws-terraform-by-example-lex-ui.git
```

1. Make the following updates to add your poolId to `src/main.js`.

Obtain the poolId by running:

```shell
terraform console
resource.aws_cognito_identity_pool.main.id
```

_src/main.js_

```js
// ...
const poolId = '<YOUR_POOL_ID_HERE>' // example: 'us-east-1:738de87b-0fac-4460-bba5-47c2a3467ff6'
const region = '<REGION>' // example: us-east-1
// ...
```

2. Install dependencies `npm install`

3. Serve with hot reload at localhost:8080 `npm run dev`

Navigating to the dev URL, you will see your UI and will be able to interact with your chatbot.

![lex ui](../images/separate-lex-ui.png)

## Terraform Output Values

Earlier, we used Terraform console to get the `poolId`. What if you want to get a bunch of resource properties at once? It would be tedious to run each one by one in the console. An alternative is to use Output values. Output values make information about your infrastructure available on the command line. Additionally, Output values can expose information for other Terraform configurations to use. Output values are similar to return values in a programming language.

### Declare Output Values

To export Output values, they must be declared using an output block.

Create a file `outputs.tf` in the root of your Terraform project and add the following:

```hcl
output "cognito_identity_pool_id" {
  value = aws_cognito_identity_pool.main.id
}
```

:::info
It's worth noting that Outputs will only be rendered when Terraform applies a plan. So running `terraform plan` will not render outputs.
:::

Too see the outputs run `terraform destroy` first.

Then run `terraform apply -auto-approve`.

You should see the following, with `cognito_identity_pool_id` in the outputs.

```bash
aws_lex_bot.classifieds: Still creating... [10s elapsed]
aws_lex_bot.classifieds: Creation complete after 14s [id=Classifieds]

Apply complete! Resources: 20 added, 0 changed, 0 destroyed.

Outputs:

cognito_identity_pool_id = "us-east-1:ec1bbb2a-8345-4f3b-af99-dbdc607ac50d"
```
