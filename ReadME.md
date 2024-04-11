# SatoshiNakamoto_Backend (The Interface)

Although the backend for The Interface is entirely on the cloud, it tries to implent the MVC design pattern in its project folder (albiet a bit contrived for this coding challenge). 

The entry point for the backend is ```index.mjs```, which routes requests to the appropriate functions within ```processors/CollectionsProcessor.js```.

And ```sql/CollectionsSQL.js``` houses the SQL queries that is sent to a database lambda layer that abstracts the common db connection code. More on lambda layers below.


## AWS Cloud Architecture

As mentioned, the backend is on the cloud(AWS) and it utilizes of the follwing AWS technologies and components:

#### AWS Technologies:
- API Gateway - exposes the backend to the UI to make services calls and retrieve NFT payload 
- Lambda - serverless function that fetches NFT Data from Magic Eden and accesses the database
- RDS PostgreSQL - database that hold the "stale" NFT collection data
- CloudWatch - runtime logs for lambda

#### Networking Components
- VPC
- Subnets
- NAT Gateway
- Internet Gateway






### API Gateway
### RDS PostgreSQL


## AWS Lambda 
### Test Events
##### Fetching NFT Collection Data from Magic Eden (w/ API Key)
##### Developing & Testing Lambda in AWS

### Lambda Layers (Dependencies)
