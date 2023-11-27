import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceServices from "../Services/LanceServices";

class LanceController{

    constructor(){}

    async criarLance(req: Request, res: Response){
        const dados: Prisma.LanceCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const novoLance = await LanceServices.criarLance(dados)
            res.status(200).json({
                status: 'ok',
                novoLance: novoLance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listarLances(req: Request, res: Response){
        const lances = LanceServices.listarLances();

        res.status(200).json({
            status: 'ok',
            lances: lances
        })
    }
    

    async atualizarLance(req: Request, res: Response){
        const lance = LanceServices.atualizarLance = req.body;
        const dados: Prisma.LanceUpdateInput = req.body;


        if(dados.valor !== ""){
            const lanceAtualizado = await LanceServices.atualizarLance(lance.valor, dados)
            res.status(200).json({
                status: 'ok',
                lanceAtualizado: lanceAtualizado
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async deletarLance(req: Request, res: Response){
        const lance = LanceServices.deletarLance = req.body;

        if(lance.valor !== ""){
            const lanceDeletado = await LanceServices.deletarLance(lance.valor)
            res.status(200).json({
                status: 'ok',
                lanceDeletado: lanceDeletado
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados corretamente'
            })

        }
    }
}

export default new LanceController();