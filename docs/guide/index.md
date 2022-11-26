# About this guide

## What are we building?

We are going to be building a classified ads application. The application will allow our app users to interact with a bot to manage their ads (perform CRUD operations). Users will add, delete and update their ads via bot interactions. Other users will be able to view and search for ads on a website we will create on AWS. In addition, we will have a lot of functionality, from managing user authentication to authorization, etc.


**Example chatbot interaction**

[![](https://mermaid.ink/img/pako:eNqVU11v00AQ_CujExWJsPOFePFDKhoH2gckSBtVVczD4Vs3Vs93xncGoiT_nbXdloASVZwfvLc7mp0dr7citYpEJM7OcF_Jco2bODF8ac773mwt_YX1WF71_2QRhlPMtrdcw8bWFXLjyfjz_TNk1kB2aUXS0w7xatZGn63zVy306z9ILqsd5qsFv0-j6lK1fB9WyzY6jVSkqUF-XMVt9BcSSExiHH2vyaQU55LnLpo0cFkX0oTT6RueOcIl6bLL85Vpp2FbjxDbZm78lMbDW3RzBuj0BWimCWArdDIgUXL_82MtOmOONmnsfe3g1wSfe02wWef2SbJPMr2w9gHjSSLQm4zG7_oI8eV2vri542Bu7nXu1ugtr_svdVTk0iovfW7Ny30XlNXVN6Ym9T8akLFF1ugNXk1Go8FxSbbWqjVb5w8EJ3_QgRhsyA2NPaaJKyc-naEB7pgwlQaODujA67z2vnTRcEi_ZFFqGqS2GI4nb5uF6R4cHBGIgqpC5or_n227WILNKygREYeKMllrn4jE7Bnabcdc5d5WIsqkdhQIWXt7vTGpiHxV0xPocScfUfvfG2EmEA)](https://mermaid.live/edit#pako:eNqVU11v00AQ_CujExWJsPOFePFDKhoH2gckSBtVVczD4Vs3Vs93xncGoiT_nbXdloASVZwfvLc7mp0dr7citYpEJM7OcF_Jco2bODF8ac773mwt_YX1WF71_2QRhlPMtrdcw8bWFXLjyfjz_TNk1kB2aUXS0w7xatZGn63zVy306z9ILqsd5qsFv0-j6lK1fB9WyzY6jVSkqUF-XMVt9BcSSExiHH2vyaQU55LnLpo0cFkX0oTT6RueOcIl6bLL85Vpp2FbjxDbZm78lMbDW3RzBuj0BWimCWArdDIgUXL_82MtOmOONmnsfe3g1wSfe02wWef2SbJPMr2w9gHjSSLQm4zG7_oI8eV2vri542Bu7nXu1ugtr_svdVTk0iovfW7Ny30XlNXVN6Ym9T8akLFF1ugNXk1Go8FxSbbWqjVb5w8EJ3_QgRhsyA2NPaaJKyc-naEB7pgwlQaODujA67z2vnTRcEi_ZFFqGqS2GI4nb5uF6R4cHBGIgqpC5or_n227WILNKygREYeKMllrn4jE7Bnabcdc5d5WIsqkdhQIWXt7vTGpiHxV0xPocScfUfvfG2EmEA)

## Our approach

To achieve our goal, we will leverage AWS services available to us. While we can manually launch services in the AWS console, our approach to managing and provisioning services on AWS will be Infrastructure as Code (IaC). This approach allows us to create configuration files that contain our infrastructure specifications. In addition, having configuration files makes editing and distributing configurations easier. Also, configuration files have additional benefits, including change management, living documentation, and ensuring we provision the same environment each time, to name a few.

We have several options for solutions that will help us with IaC. These include AWS CloudFormation, Terraform, Chef, Puppet, etc. In our case, we are going to be using Terraform.
