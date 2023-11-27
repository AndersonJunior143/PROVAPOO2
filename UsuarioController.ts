import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UsuarioServices from "../Services/UsuarioServices";

class UsuarioController{

    constructor(){}

    async criarUsuario(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const novoUsuario = await UsuarioServices.criarUsuario(dados)
            res.status(200).json({
                status: 'ok',
                novoUsuario: novoUsuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listarUsuario(req: Request, res: Response){
        const usuarios = UsuarioServices.listarUsuarios();

        res.status(200).json({
            status: 'ok',
            usuarios: usuarios
        })
    }
    

    async atualizarUsuario(req: Request, res: Response){
        const usuario = UsuarioServices.atualizarUsuario = req.body;
        const dados: Prisma.UsuarioUpdateInput = req.body;


        if(dados.email !== "" && dados.nome !== ""){
            const usuarioAtualizado = await UsuarioServices.atualizarUsuario(usuario.email, dados)
            res.status(200).json({
                status: 'ok',
                usuarioAtualizado: usuarioAtualizado
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async deletarUsuario(req: Request, res: Response){
        const usuario = UsuarioServices.deletarUsuario = req.body;

        if(usuario.email !== ""){
            const usuarioDeletado = await UsuarioServices.deletarUsuario(usuario.email)
            res.status(200).json({
                status: 'ok',
                usuarioDeletado: usuarioDeletado
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados corretamente'
            })

        }
    }
}

export default new UsuarioController();