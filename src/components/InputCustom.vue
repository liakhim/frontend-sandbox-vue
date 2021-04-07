<template>
    <div class="col-md-4 mb-3">
        <div class="input-group">
            <input type="text"
                   v-model="value"
                   @focus="show_valid = false"
                   @blur="show_valid = true"
                   class="form-control"
                   :class="{'is-invalid':valid && show_valid}"
                   placeholder="Username"
                   aria-describedby="inputGroupPrepend" required>
            <div v-if="error.length > 0" class="invalid-feedback text-left">
                {{error}}
            </div>
            <div v-if="value.length < min" class="invalid-feedback text-left">
                Min characters {{min}}
            </div>
            <div v-if="value.length > max" class="invalid-feedback text-left">
                Max characters {{max}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'InputCustom',
    props: {
        error: {
            type: String,
            default: 'Error'
        },
        min: {
            type: Number,
            default: 5
        },
        max: {
            type: Number,
            default: 55
        }
    },
    data() {
        return {
            value: '',
            show_valid: false
        }
    },
    methods: {

    },
    computed: {
        valid() {
            return (this.value.length < this.min) || (this.value.length > this.max) || (this.error.length !== 0)
        }
    }
}
</script>
<style lang="scss">

</style>
