const { where } = require('sequelize')
const {TipeDiskon} = require('../models')

class Controller {
    // Get Tipe Diskon
    static async getTipeDiskon(req, res) {
        try {
            const result = await TipeDiskon.findAll({
                order: [["id", "ASC"]]
            })

            res.status(200).json({ data: result })
            
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Tipe Diskon'
            })
        }
    }

    // Create Tipe Diskon
    static async createTipeDiskon(req, res) {
        try {
            const {name} = req.body
            
            const tipe = await TipeDiskon.create({name})

            res.status(200).json({
                message: `New Tipe Diskon with id ${tipe.id} created`
            })
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Tipe Diskon'
            })
        }
    }

    // Update Tipe Diskon
    static async updateTipeDiskon(req, res) {
        try {
            const tipe = await TipeDiskon.findByPk(req.params.id)

            if(!tipe) {
                res.status(404).json({
                    error: 'Tipe Diskon not found.'
                })
            }

            const { name } = req.body

            await TipeDiskon.update({name}, {where: { id: req.params.id }})

            res.status(200).json({
                message: `Tipe Diskon with id ${tipe.id} updated`
            })

        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Tipe Diskon'
            })
        }
    }
    
    // Delete Tipe Diskon
    static async deleteTipeDiskon(req, res) {
        try {
            const tipe = await TipeDiskon.findByPk(req.params.id)

            if(!tipe) {
                res.status(404).json({
                    error: 'Tipe Diskon not found'
                })
            }

            TipeDiskon.destroy({ where: { id: req.params.id }})

            res.status(200).json({
                message: `Tipe Diskon with id ${tipe.id} deleted`
            })
            
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Tipe Diskon'
            })
        }
    }
}

module.exports = Controller