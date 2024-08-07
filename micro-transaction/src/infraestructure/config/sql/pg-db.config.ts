/**
 * Autor: EVER CARLOS ROJAS
*/

import { Property } from "../config-server/config-server.decorador";


export class PGDBConfig {
    
    @Property('db.pg.url')
    public static readonly pgdbUri: string;

    @Property('db.pg.name')
    public static readonly pgdbName: string;

    @Property('db.pg.port')
    public static readonly pgdbPort: number;

    @Property('db.pg.user')
    public static readonly pgdbUser: string;

    @Property('db.pg.password')
    public static readonly pgdbPassword: string;
}