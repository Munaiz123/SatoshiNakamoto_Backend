# SatoshiNakamoto_Backend (The Interface)

Although the backend is entirely on the cloud, the actual project folder structure tries to implent the MVC design pattern in its project folder(albiet a little contrived for this coding challenged). 

The entry point for the backend is ```index.mjs```, which routes requests to the appropriate functions within ```processors/CollectionsProcessor.js``` and ```sql/CollectionsSQL.js``` houses the SQL queries that is sent to a database lambda layer that abstracts the common db connection code. More on lambda layers below.


## AWS Cloud Architecture

As mentioned, the backend is hosted on AWS and it takes advantage of the follwing AWS technologies and components:

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