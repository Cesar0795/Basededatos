class ConectarBD{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise");
    }
    async conctarMySql(){
        try {
            this.conexion=await this.mysql.createConnection({
                host:"LOCALHOST",
                user:"root",
                database:"tienda_ut",
                port:"3306"
            });
            console.log("Conexion creada a MySql")
        } catch (error) {
            console.error("Error al crear la conexion "+error);
        }
    }

    async cerrarConexion(){
        if(this.conexion != null){
            try {
                await this.conexion.end();
                console.log("Conexion cerrada de MySql");
            } catch (error) {
                console.error("Error al cerrar la conexion");
            }
        }
    }
}

module.exports=ConectarBD;