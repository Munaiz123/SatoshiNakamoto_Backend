module.exports = {
    fetchCollection: (collectionName) => (`SELECT * FROM COLLECTIONS WHERE collection_symbol='${collectionName}'`),

}


