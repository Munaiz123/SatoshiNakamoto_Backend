module.exports = {
    fetchCollectionBySymbol: (collectionSymbol) => (`SELECT * FROM COLLECTIONS WHERE collection_symbol='${collectionSymbol}'`),
}


