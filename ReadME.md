# SatoshiNakamoto_Backend (The Interface)

Although the backend for The Interface is entirely on the cloud, it tries to implent the MVC design pattern in its project folder (albiet a bit contrived for this coding challenge). 

The entry point for the backend is ```index.mjs```, which routes requests to the appropriate functions within ```processors/CollectionsProcessor.js```.

And ```sql/CollectionsSQL.js``` houses the SQL queries that is sent to a database lambda layer that abstracts the common db connection code. More on lambda layers below.


## AWS Cloud Architecture

As mentioned, the backend is on the cloud(AWS) and it utilizes of the follwing AWS technologies:

#### AWS Technologies:
- API Gateway
- Lambda - serverless function that fetches NFT Data from Magic Eden and accesses the database
- RDS PostgreSQL - database that hold the "stale" NFT collection data
- CloudWatch - runtime logs for lambda

![Alt Text](./public/diagram2.png)
*Subnets & Security groups not diagramed or listed above*


### API Gateway
AWS API Gatway exposes the backend to the UI through an GET API request: ```https://lyq1fqdqn9.execute-api.us-east-1.amazonaws.com/dev/collections/{collectionName}```. 

Currently only the following values for ```{collectionName}``` will yield a response to the UI:
- pizza-ninjas *
- quantum_cats
- omb
- ordinal_geese
- tiny_vikings *
  
* = will need to directly update url in the UI
  



### RDS PostgreSQL
The following sql script was used to create the only table in the database:
```SQL
CREATE TABLE Collections (
    id SERIAL ,
    inscription_number INT PRIMARY KEY,
    image_url VARCHAR(255),
    btc_price DECIMAL(18, 8),
    satoshi_price BIGINT,
    collection_symbol VARCHAR(50),
    collection_name VARCHAR(100),
    token_name VARCHAR(100),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### AWS Lambda 
#### Test Events
##### Fetching NFT Collection Data from Magic Eden (w/ API Key)
##### Developing & Testing Lambda in AWS

### Lambda Layers (Dependencies)
