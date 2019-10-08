module.exports = {
    cpfSize: 11,
    clientType: {
        cpf: 1,
        cnpj: 2
    },
    emptyValue: "-     ",
    statusCodes: {
        notFound: {
            code: "049",
            message: "CONSUMIDOR SEM HISTÓRICO DE CRÉDITO"
        },
        success: {
            code: "0",
            message: "CONSUMIDOR PARTICIPANTE DO CADASTRO POSITIVO COM INFORMAÇÃO"
        }
    }
}