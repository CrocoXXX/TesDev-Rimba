<template>
    <main>
        <h1> Edit Item Page </h1>

        <div class="container mt-5">
            <div class="card">
                <div class="card-header">
                    <h4> Add Items </h4>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for=""> Nama Item </label>
                        <input type="text" v-model="model.name_item" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for=""> Unit </label>
                        <input type="text" v-model="model.unit" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for=""> Stok </label>
                        <input type="text" v-model="model.stok" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for=""> Harga Satuan </label>
                        <input type="text" v-model="model.harga_satuan" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for=""> Barang </label> <br>
                        <!-- <img :src="previewImg" v-if="previewImg" alt="" class="imgPreview"> <br> -->
                        <img :src="model.barang" alt="" class="imgPreview"> <br>
                        <!-- <input type="text" v-model="model.item.barang" class="form-control" /> -->
                        <input type="file" v-on:change="upload" />
                    </div>
                    <div class="mb-3">
                        <a href="/item">
                            <button type="button" @click="updateItem" class="btn btn-primary">
                                Update
                            </button>
                        </a>
                        
                        <RouterLink to="/item" class="btnBack btn btn-light"> Back </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
export default {
    name: 'itemUpdate',
    data() {
        return {
            itemId: '',
            model: {
                name_item: '',
                unit: '',
                stok: '',
                harga_satuan: '',
                barang: '',
                formData: null
            },
            previewImg: ''
        }
    },

    mounted() {
        // this.saveItem()
        // console.log(this.$route.params.id);
        this.itemId = this.$route.params.id
        this.getItem(this.$route.params.id)
    },

    methods: {
        async getItem(itemId) {
            const item = await axios.get(`http://localhost:8080/api/item/${itemId}/edit`)
                this.model = item.data.data
                console.log(item.data.data);
                
        },
        updateItem() {
            axios.put(`http://localhost:8080/api/item/${this.itemId}/update`, this.model).then((res) => {
                console.log(res.data);
                alert(res.data.message)

            })
            // .catch(function(err) {
            //     if(err.res) {
            //         if(err.res.status == 404) {
            //             this.errList = err.res.data.err
            //         }
            //     } else if (err.request) {
            //         console.log(err.request);
            //     } else {
            //         console.log('Error', err.message);
            //     }
            // })
        },
    }
}
</script>

<style lang="scss" scoped>
    .btnBack {
        margin-left: 10px;
    }

    .imgPreview {
        width: 5rem;
        margin: 5px 0;
    }
</style>

