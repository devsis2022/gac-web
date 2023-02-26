const messages = {
    USER_ALREADY_REGISTERED: 'Nome de usuário ou email já cadastrado'
}

export const parseErrorMessage = (message) => {
    return messages[message] || 'Ocorreu um erro durante a solicitação'
}