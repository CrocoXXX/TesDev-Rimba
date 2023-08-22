<template>
    <main>
        <h1> Edit Item Page </h1>

        <div class="container mt-5">
            <div class="card">
                <div class="card-header">
                    <h4> Add Items </h4>
                </div>
                <div class="card-body">
                    <form action="">
                        <div class="mb-3">
                            <label for=""> Nama Item </label>
                            <input type="text" v-model="model.name_item" class="form-control" />
                        </div>
                        <div class="mb-3">
                            <label for=""> Unit </label>
                            <!-- <input type="text" v-model="model.unit" class="form-control" /> -->
                            <select class="form-select" v-model="model.unit" aria-label="Default select example">
                                <option value="kg"> KG </option>
                                <option value="pcs"> PCS </option>
                            </select>
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
                            <img :src="previewImg" v-if="previewImg" alt="" class="imgPreview"> <br>
                            <img :src="model.barang" alt="" class="imgPreview"> <br>
                            <!-- <input type="text" v-model="model.item.barang" class="form-control" /> -->
                            <input type="file" @change="handleFileChange" />
                        </div>
                        <div class="mb-3">
                            <a href="/item">
                                <button type="button" @click="updateItem" class="btn btn-primary">
                                    Update
                                </button>
                            </a>
                            
                            <RouterLink to="/item" class="btnBack btn btn-light"> Back </RouterLink>
                        </div>
                    </form>
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
                barang: null,
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
        handleFileChange(e) {
            this.model.barang = e.target.files[0]
            console.log(this.model.barang);
            this.previewImg = URL.createObjectURL(e.target.files[0])
        },
        async getItem(itemId) {
            const item = await axios.get(`http://localhost:8080/api/item/${itemId}/edit`)
            this.model = item.data.data
            console.log(item.data.data);
                
        },
        async updateItem() {
            this.model.formData = new FormData()
            this.model.formData.append('name_item', this.model.name_item) 
            this.model.formData.append('unit', this.model.unit)
            this.model.formData.append('stok', this.model.stok)
            this.model.formData.append('harga_satuan', this.model.harga_satuan)
            this.model.formData.append('barang', this.model.barang)
            await axios.put(`http://localhost:8080/api/item/${this.itemId}/update`, this.model.formData)
            this.$router.push('/item')
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

