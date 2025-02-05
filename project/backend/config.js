module.exports = {
    useDatabase: true,  // ✅ Change to false to use JSON file instead
    dbConfig: {
        host: "localhost",
        user: "cs472",
        password: "cs472",
        database: "cs472db"
    },
    jsonFile: "contacts.json" // Path to JSON file for local storage
};
