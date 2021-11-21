import mssql from 'mssql'
import config from "../configs/env-config"

interface PoolConfig {
    max: number
    min: number
    idleTimeoutMillis: number
}

interface Options {
    trustServerCertificate: boolean
}

interface ConnectionConfig {
    server: string
    user: string
    password: string
    database: string
    pool: PoolConfig
    options: Options
}

class DB {
    private static instance: DB
    private config: ConnectionConfig = {
        user: config.DB_USER || '',
        password: config.DB_PASSWORD || '',
        database: config.DB_NAME || '',
        server: config.DB_HOST || '',
        pool: {
            max: 5,
            min: 0,
            idleTimeoutMillis: 10000
        },
        options: {
            trustServerCertificate: true
        }
    }
    private pool: mssql.ConnectionPool
    private poolConnect: Promise<mssql.ConnectionPool>

    private constructor() {
        this.pool = new mssql.ConnectionPool(this.config)
        this.poolConnect = this.pool.connect()
        this.pool.on('error', err => {
            throw new Error(`Database Connection Failed! Error: ${err}`)
        })
    }

    public static getInstance(): DB {
        if (!DB.instance) {
            DB.instance = new DB()
        }

        return DB.instance
    }

    getPool(): mssql.ConnectionPool {
        return this.pool
    }

    getPoolConnect(): Promise<mssql.ConnectionPool> {
        return this.poolConnect
    }
}

export default DB.getInstance()