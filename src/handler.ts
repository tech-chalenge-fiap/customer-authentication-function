// Simulação de CPFs válidos
const validCpfs: string[] = ["12345678900", "98765432100", "11122233344"]

interface IEvent {
  cpf: string
}

interface IAuthenticationResult {
  statusCode: number
  body: string
}

export const handler = async (event: IEvent): Promise<IAuthenticationResult> => {
  try {
    let eventBody

    if (!event) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Nenhum dado fornecido' })
      }
    }

    const { cpf } = event

    if (!cpf) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'CPF não fornecido' })
      }
    }

    // TODO: conectar com a base ou via api de consulta de cpf
    if (validCpfs.includes(cpf)) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Autenticado com sucesso' })
      }
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'CPF não autenticado' })
      }
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro interno', error: (error as Error).message })
    }
  }
}
