import {config as dotenv} from 'dotenv'
import path from 'path'

dotenv({ path: path.join(process.cwd(), '.env') })

const config = {
    PORT: process.env.PORT,
}

export default config