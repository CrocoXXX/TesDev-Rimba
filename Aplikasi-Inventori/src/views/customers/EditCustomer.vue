<template>
    <main>
        <h1> Edit Customer Page </h1>

        <div class="container mt-5">
            <div class="card">
                <div class="card-header">
                    <h4> Add Items </h4>
                </div>
                <div class="card-body">
                    <form action="">
                        <div class="mb-3">
                            <label for=""> Nama Customer </label>
                            <input type="text" v-model="name_item" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Kontak </label>
                            <input type="text" v-model="name_item" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Email </label>
                            <input type="text" v-model="name_item" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Alamat </label>
                            <input type="text" v-model="name_item" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Diskon </label>
                            <input type="text" v-model="name_item" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Tipe Diskon </label>
                            <!-- <input type="text" v-model="model.unit" class="form-control" /> -->
                            <select class="form-select" v-model="model.unit" aria-label="Default select example">
                                <option value="persentase"> Percentase </option>
                                <option value="fix_diskon"> Fix Diskon </option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for=""> Foto KTP </label> <br>
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
    name: 'customerUpdate',
    data() {
        return {
            id: '',
            model: {
                nama: '',
                kontak: '',
                email: '',
                alamat: '',
                diskon: '',
                tipe_diskon: '',
                ktp: null,
                formData: null,
            },
            previewImg: ''
        }
    },

    mouted() {},

    methods: {
        handleFileChange(e) {
            this.model.ktp = e.target.files[0]
            this.previewImg = URL.createObjectURL(e.target.files[0])
        },

        async getCustomer(id) {
            const customer = await axios.get(`http://localhost:8080/api/customer/${id}/edit`)
            this.model = customer.data.data
        }
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