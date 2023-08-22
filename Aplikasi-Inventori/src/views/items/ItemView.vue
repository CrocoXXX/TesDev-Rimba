<template>
    <main>
        <h1> This is Item Page </h1>

        <div>
            <div class="card">
                <div class="card-header">
                    <h4>
                        Items
                        <RouterLink to="/item/create" class="btn btn-primary float-end">
                            Add Item
                        </RouterLink>
                    </h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th> ID </th>
                                <th> Nama Item </th>
                                <th> Unit </th>
                                <th> Stok </th>
                                <th> Harga Satuan </th>
                                <th> Barang </th>
                                <th> Created At </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody v-if="this.items.length > 0" key="" >
                            <tr v-for="(item, index) in this.items" :key="index">
                                <td> {{item.id }} </td>
                                <td> {{item.name_item }} </td>
                                <td> {{item.unit }} </td>
                                <td> {{item.stok }} </td>
                                <td> {{item.harga_satuan }} </td>
                                <td>
                                    <!-- {{item.barang}} -->
                                    <img :src="item.barang" alt="" class="imgPreview">
                                </td>
                                <td> {{item.createdAt }} </td>
                                <td>
                                    <RouterLink :to="{path: '/item/'+item.id+'/edit'}" class="btn btn-success">
                                        Edit
                                    </RouterLink>
                                    <button type="button" @click="deleteItem(item.id)" class="btnDelete btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td colspan="7"> Loading... </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    name: 'items',
    data() {
        return {
            items: [],
        }
    },

    mounted() {
        this.getItems()
    },

    methods: {
        async getItems() {
            const item = await axios.get('http://localhost:8080/api/item')
            this.items = item.data.data
            console.log(this.items);
            console.log(this.items.barang);
            // .then(res => {
                
            // }).catch(err => {
            //     console.log(err);
            // })
        },

        deleteItem(itemId) {
            if(confirm(`Apakah kamu yakin ingin menghapus data ini?`)) {
                axios.delete(`http://localhost:8080/api/item/${itemId}`).then((res) => {
                    alert(res.data.message)
                    this.getItems()
                })
            }

            // axios.delete()
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        margin-top: 40px;
    }

    .btnDelete {
        margin-left: 5px;
    }

    .imgPreview {
        width: 60px;
    }
</style>