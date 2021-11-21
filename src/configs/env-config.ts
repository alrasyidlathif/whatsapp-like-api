import {config as dotenv} from 'dotenv'
import path from 'path'

dotenv({ path: path.join(process.cwd(), '.env') })

const config = {
    PORT: process.env.PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
}

export default config