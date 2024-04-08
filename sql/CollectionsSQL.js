module.exports = {
    fetchCollection: (collectionName) => (`SELECT * FROM COLLECTIONS WHERE collection_symbol='${collectionName}'`),
}
//   Select * from Collections where collection_symbol = 'cats'