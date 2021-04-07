<template>
        <div>
                <pre>
                        {{form.file}}
                </pre>
                <img v-for="(i, index) in form.file" :key="index" :src="i.file.data" alt="">
                <v-upload multiple v-model="form.file" @input="file" @update="files">
                        <template v-slot:default="a">
                                <i @click="a.open()" class="cursor-pointer material-icons">add_circle_outline</i>
                        </template>
                </v-upload>
        </div>
</template>

<script>
        import VUpload from 'v-upload-base64';

        export default {
                data () {
                        return {
                                form: {
                                        file: []
                                }
                        }
                },
                components: {VUpload},
                methods: {
                        file (f) {
                                console.log(f); // a File object or collection of File objects
                        },
                        files(f) {
                                console.log(f); // a collection of File objects
                        }
                }
        }
</script>
