import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class UsuarioServices{
    constructor(){}

    async listarUsuarios(email?: string){
        try{
            if (email){
                const usuario = await prisma.usuario.findUnique({
                    where:{
                        email
                    }
                });return usuario
            }
            else{
                const usuarios = await prisma.usuarios.findMany();
                return usuarios
            }
        }catch(error){
            console.log(error)
            return null
        }
    }

    async criarUsuario(usuario: Prisma.UsuarioCreateInput){
        try{
            const novoUsuario = await prisma.usuario.create({
                data: usuario
            });
            return novoUsuario
        }catch(error){
            console.log(error)
            return null
        }
    }

    async atualizarUsuario(email: string, usuario: Prisma.UsuarioUpdateInput){
        try{
            const usuarioAtualizado = await prisma.usuario.update({
                where:{
                    email
                },
                data:usuario
            });return usuarioAtualizado
        }catch(error){
            console.log(error)
            return null
        }
    }

    async deletarUsuario(email: string){
        try{
            const usuariodeletado = await prisma.usuario.delete({
                where:{
                    email
                }
            });return usuariodeletado
        }catch(error){
            console.log(error)
            return null
        }
    }
};


export default new UsuarioServices();