import {AdminApi} from '@oryd/hydra-client'

const hydraAdmin = new AdminApi(process.env.HYDRA_ADMIN_URL || 'http://127.0.0.1:4445')
if (process.env.MOCK_TLS_TERMINATION) {
  hydraAdmin.defaultHeaders['X-Forwarded-Proto'] = 'https'
}

export {
  hydraAdmin
}
