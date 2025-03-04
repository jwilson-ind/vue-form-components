<template>
    <VueSelect v-if="taggable && canAdd"
               v-model="values"
               :options="options"
               :placeholder="`Type to add ${placeholder ?? 'item'}`"
               multiple
               :show-labels="false"
               :disabled="disabled"
               taggable
               :tag-placeholder="`Create new ${placeholder ?? 'item'}`"
               @tag="addFromTag"
               @update:modelValue="$emit('update:modelValue', $event)"
    ></VueSelect>
    <div v-else class="space-y-2 gray-300">
        <div class="relative" v-for="(value, index) in values" :key="index">
            <div class="flex">
                <label v-if="label" :for="inputIds[index]" class="multiple-label rounded-r-none bg-gray-300">{{ value[label] }}</label>
                <input :id="inputIds[index]" class="input-multiple flex-1" :class="{'rounded-l-none': label, 'rounded-r-none': canAdd && values.length > 1}" :type="type" :value="field ? value[field] : value" :placeholder="placeholders[index]" :disabled="disabled" @input="update(index, $event.target.value)">
                <div class="multiple-remove rounded-l-none bg-gray-200 cursor-pointer hover:bg-gray-300" v-if="canAdd && values.length > 1" @click="remove(index)">remove</div>
            </div>
        </div>
        <button v-if="canAdd" class="cursor-pointer text-sm form-btn-green py-1 px-2" @click.prevent="add(null)">Add {{ placeholder }}</button>
    </div>
</template>

<script setup>
import {ref, computed} from "vue";
import _ from "lodash";
import VueSelect from "vue-multiselect";
import {titleCase} from "../utilities.js";

const props = defineProps({
    modelValue: {},
    type: {},
    field: {},
    label: {},
    placeholder: {},
    disabled: {},
    canAdd: {
        type: Boolean,
        default: true,
    },
    taggable: {
        type: Boolean,
        default: false,
    },
    options: {
        type: Array,
        default: [],
    }
});
const emit = defineEmits(['update:modelValue']);

const values = ref(Array.isArray(props.modelValue) ? props.modelValue : (props.taggable && !props.modelValue ? [] : [props.modelValue]));

const inputIds = computed(() => {
    return values.value.map(value => {
        return props.label ? value[props.label]+'_'+props.field+'_'+Math.random().toString(36).slice(2) : null
    });
})

const placeholders = computed(() => {
    return values.value.map(value => {
        return props.label ? value[props.label]+' '+titleCase(props.field) : props.placeholder
    });
})

function remove(index) {
    values.value.splice(index, 1)
    emit('update:modelValue', values.value);
}

function add(val) {
    let newValue = val;
    if(props.field) {
        newValue = _.cloneDeep(values.value[0]);
        newValue[props.field] = val;
    }
    values.value.push(newValue);
    if(props.taggable) {
        props.options.push(newValue);
    }
}

function update(index, val) {
    if(props.field) {
        values.value[index][props.field] = val;
    } else {
        if(!val && values.value.length === 1) {
            values.value = [];
        } else {
            values.value[index] = val;
        }
    }
    emit('update:modelValue', values.value);
}

function addFromTag(val) {
    add(val);
    emit('update:modelValue', values.value);
}

</script>
