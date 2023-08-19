const { where } = require("sequelize");
const multer = require('multer')
const path = require('path')
const { Item } = require("../models");

class Controller {
    // Get Item
    static async getItem(req, res) {
        try {
            const result = await Item.findAll({
                order: [["id", "ASC"]],
            })

            res.status(200).json({ data: result });
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Item'
            })
        }
    }

    // Create Item
    static async createItem(req, res) {
        try {
            const {name_item, unit, stok, harga_satuan, barang} = req.body
            
            const item = await Item.create({name_item, unit, stok, harga_satuan, barang})
            
            res.status(200).json({
                message: `New Category with id ${item.id} created.`
            })
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Item'
            })
        }
    }

    // Create Item using Photo
    static async createItemPhoto(req, res) {
        try {
            const {name_item, unit, stok, harga_satuan} = req.body
            let dataItem = {
                name_item,
                unit, 
                stok, 
                harga_satuan
            }

            if(req.file) {
                const imageUrl = `http://localhost:8080/${req.file.path.replace(/\\/g, "/")}`
                console.log(req.file.path.replace(/\\/g, "/"));
                dataItem = {
                    ...dataItem,
                    barang: imageUrl,
                }
            }
            
            const item = await Item.create(dataItem)
            
            res.status(200).json({
                message: `New Category with id ${item.id} created.`
            })
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Item'
            })
        }
    }

    // Edit Item
    static async editItem(req, res) {
        try {
            const item = await Item.findByPk(req.params.id);
            
            if (!item) {
                res.status(404).json({
                    error: 'Items not found.'
                })
            }

            res.status(200).json({ data: item });
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Item'
            })
        }
    }

    // Update Item
    static async updateItem(req, res) {
        try {
            const item = await Item.findByPk(req.params.id);
            
            if (!item) {
                res.status(404).json({
                    error: 'Items not found.'
                })
            }
            
            const {name_item, unit, stok, harga_satuan, barang} = req.body
            let dataItem = {
                name_item,
                unit, 
                stok, 
                harga_satuan
            }

            if(req.file) {
                const imageUrl = `http://localhost:8080/${req.file.path.replace(/\\/g, "/")}`
                console.log(req.file.path.replace(/\\/g, "/"));
                dataItem = {
                    ...dataItem,
                    barang: imageUrl,
                }
            }
            
            await Item.update(dataItem ,{ where: {id: req.params.id}})

            res.status(200).json({ message: `Category with id ${item.id} updated` });
            
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Item'
            })
        }
    }

    // Delete Item
    static async deleteItem(req, res) {
        try {
            const item = await Item.findByPk(req.params.id);

            if(!item) {
                res.status(404).json({
                    error: 'Items not found.'
                })
            }

            Item.destroy({ where: { id: req.params.id } });

            res.status(200).json({ message: `Category with id ${item.id} deleted` });
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Item'
            })
        }
    }
}

module.exports = Controller;