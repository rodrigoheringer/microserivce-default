class ObjectUtils {
    /**
     * Transforma uma string separada por vírgula em array
     * @param {string} elements String de dados no separados por vírgula
     */
    static transformToArray(elements) {
        return JSON.parse(`[${elements}]`);
    }

    /**
     * Método que adiciona ao array caso a chave não exista
     * @param {string[]} keysToMatch Keys que devem existir
     * @param {string} cur chave para ser validada
     * @param {string[]} all todas as chaves que não foram encontradas
     */
    static addIfNotExist(keysToMatch, cur, all) {
        return keysToMatch.indexOf(cur) === -1 ? all.push(cur) : undefined;
    }

    /**
     * Função que retorna as propriedades ausentes do objeto    
     * @param {any} obj Objeto alvo
     * @param {string[]} keys Chaves que devem estar presentes no objeto
     */
    static missingKeys(obj = {}, keys = []) {
        const keysToMatch = Object.keys(obj);
        return keys.reduce((all, cur) => {
            return void(ObjectUtils.addIfNotExist(keysToMatch, cur, all)) || all;
        }, []);
    }
}

module.exports = ObjectUtils;