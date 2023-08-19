<template>
    <main>
        <h1> Create Item Page </h1>

        <div class="container mt-5">
            <div class="card">
                <div class="card-header">
                    <h4> Add Items </h4>
                </div>
                <div class="card-body">
                    <form action="" @submit.prevent="saveItem">
                        <div class="mb-3">
                            <label for=""> Nama Item </label>
                            <input type="text" v-model="name_item" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Unit </label>
                            <!-- <input type="text" v-model="unit" class="form-control" /> -->
                            <select class="form-select" v-model="unit" aria-label="Default select example">
                                <option value="kg"> KG </option>
                                <option value="pcs"> PCS </option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for=""> Stok </label>
                            <input type="text" v-model="stok" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Harga Satuan </label>
                            <input type="text" v-model="harga_satuan" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Barang </label> <br>
                            <img :src="previewImg" v-if="previewImg" alt="" class="imgPreview"> <br>
                            
                            <!-- <input type="text" v-model="model.item.barang" class="form-control" required /> -->
                            <input type="file" @change="handleFileChange" />
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary"> 
                                Save
                            </button>
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
    name: 'itemCreate',
    data() {
        return {
            name_item: '',
            unit: '',
            stok: '',
            harga_satuan: '',
            barang: null,
            formData: null,
            previewImg: ''
        }
    },

    methods: {
        handleFileChange(e) {
            this.barang = e.target.files[0]
            console.log(this.barang);
            this.previewImg = URL.createObjectURL(e.target.files[0])
        },
        async saveItem() {
            this.formData = new FormData()
            this.formData.append('name_item', this.name_item)
            this.formData.append('unit', this.unit)
            this.formData.append('stok', this.stok)
            this.formData.append('harga_satuan', this.harga_satuan)
            this.formData.append('barang', this.barang)
            await axios.post('http://localhost:8080/api/item/file', this.formData)
            // console.log(this.formData.message)
            this.$router.push('/item')
            // .then((res) => {
            //     console.log(res.data);

            //     this.model.item = {
            //         name_item: '',
            //         unit: '',
            //         stok: '',
            //         harga_satuan: '',
            //         barang: '',
            //     }

            //     
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
    .btnBack {
        margin-left: 10px;
    }

    .imgPreview {
        width: 10rem;
        margin: 5px 0;
    }
</style>

