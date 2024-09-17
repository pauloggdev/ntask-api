module.exports = {
    database: "ntask",
    username: "",
    password: "",
    params: {
        dialect: "sqlite", //Define qual banco de dados
        storage: "ntask.sqlite", //pasta que sera gravado os dados
        define: {
            underscored: true //Padroniza o nomes do campos da tabela em minúsculo
        }
    },
    jwtSecret: "Nta$K-API",
    jwtSession: { session: false }
}