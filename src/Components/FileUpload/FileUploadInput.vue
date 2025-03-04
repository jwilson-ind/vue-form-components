<template>
    <div :class="{'blur-sm': disabled}">
        <div v-if="fileName" class="image-preview-container bg-gray-100 relative border rounded mx-auto shadow">
            <div class="bg-contain bg-no-repeat bg-center absolute top-2 left-2 bottom-2 right-2 grid justify-items-center content-center items-center" :style="previewImageStyle">
                <div v-if="!previewImageStyle" class="flex flex-col justify-center items-center">
                    <svg v-if="previewType === 'document' || previewType === 'other'"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1/2 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <svg v-if="previewType === 'image'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1/2 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <svg v-if="previewType === 'video'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1/2 inline-block">
                        <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <svg v-if="previewType === 'sound'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1/2 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                    </svg>
                    <svg v-if="previewType === 'empty'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1/2 inline-block text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div class="text-sm" v-if="previewType !== 'image'">
                        <a v-if="isString(modelValue)" :href="modelValue" target="_blank" class="hover:underline">{{ fileName }}</a>
                        <span v-else>{{ fileName }}</span>
                    </div>
                </div>
            </div>
            <button v-if="modelValue && modelValue != placeholder"
                    @click="remove()"
                    type="button"
                    class="text-red-500 rounded-full hover:bg-red-200 p-1 shadow border border-red-200 bg-white absolute -top-3 -right-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
            </button>
        </div>

        <div v-if="!fileName" class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-white"
             :class="upload?.dropActive ? 'border-blue-500 bg-blue-100': ''">
            <div class="space-y-1 text-center">
                <svg :class="upload?.dropActive ? 'text-blue-500': ''"
                     class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                     aria-hidden="true">
                    <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="flex text-sm text-gray-600 justify-center">
                    <FileUpload
                        class="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        :input-id="id"
                        :multiple="multiple"
                        :drop="true"
                        :drop-directory="true"
                        :accept="acceptableMimeTypes"
                        :size="maxSizeNumber"
                        v-model="value"
                        @input-file="getPreview"
                        ref="upload">
                        <span>Upload a file</span>
                    </FileUpload>
                    <div class="pl-1">or drag and drop</div>
                </div>
                <div class="text-xs text-gray-500">{{ limitations }}</div>
                <ul v-if="multiple && value.length" role="list" class="divide-y divide-gray-200">
                    <li v-for="file in value" :key="file.id" class="p-2 flex items-center rounded-md">
                        <button @click="remove(file)"
                                type="button"
                                class=" text-red-500 rounded-full hover:bg-red-200 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <span class="mx-2">{{ file.name }} - {{ formatSize(file.size) }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div v-if="false">
            <button type="button" class="text-blue-500" v-if="!$refs.upload || !$refs.upload.active"
                    @click.prevent="$refs.upload.active = true">
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
                Start Upload
            </button>
            <button type="button" class="text-blue-500" v-else @click.prevent="$refs.upload.active = false">
                <i class="fa fa-stop" aria-hidden="true"></i>
                Stop Upload
            </button>
        </div>
    </div>
</template>

<script setup>
import {computed, onMounted, ref, nextTick, watch} from 'vue';
import {isString} from "lodash";
import FileUpload from "./FileUpload.vue";

const emit = defineEmits(['update:modelValue', 'preview']);
const props = defineProps({
    modelValue: null,
    id: {
        default() {
            return Math.random().toString(36).slice(2);
        }
    },
    placeholder: {
        type: String,
        default: '/images/placeholder-image.png',
    },
    acceptableTypes: {
        type: Array,
        default() {
            return ['image'];
        }
    },
    maxSize: {
        type: [Number, String],
        default: '10MB'
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    multiple: {
        type: Boolean,
        default: false,
    }
});

const preview = ref(props.placeholder);
const upload = ref(null);

const getPreview = () => {
    nextTick(() => {
        if (fileName.value && fileNameIsType(fileName.value, 'image')) {
            if (props.modelValue.file) {
                let reader = new FileReader;
                reader.onload = e => {
                    preview.value = e.target.result
                }
                reader.readAsDataURL(props.modelValue.file);
            } else if (isString(props.modelValue)) {
                preview.value = props.modelValue;
            }
        } else {
            preview.value = props.placeholder;
        }
    });
}

watch(preview, (value) => {
    emit('preview', value === props.placeholder ? null : value)
});

const fileName = computed(() => {
    if(!props.modelValue || props.multiple) {
        return null;
    }
    let fileName = props.modelValue.file ? props.modelValue.file.name : (isString(props.modelValue) ? props.modelValue : null);
    fileName = fileName.split('/').pop();
    const index = fileName.indexOf('?');
    return decodeURI(index > -1 ? fileName.substring(0, index) : fileName);
})

const previewType = computed(() => {
    if(props.modelValue) {
        if(fileName.value) {
            return getFileGroupType(fileName.value);
        }
    }
    return 'empty';
});

const previewImageStyle = computed(() => {
    return previewType.value === 'image' || (
        previewType.value === 'empty'
        && preview.value === props.placeholder
    ) ? {'background-image': `url(${preview.value})`} : null;
})

const value = computed({
    get() {
        return props.modelValue ?? [];
    },
    set(value) {
        emit('update:modelValue', props.multiple ? value : value[0]);
    }
})

onMounted(() => {
    if (isString(props.modelValue) && fileNameIsType(props.modelValue, 'image')) {
        preview.value = props.modelValue;
    }
});

const maxSizeNumber = computed(() => {
    let number = Number(props.maxSize);
    let multiplier = 1;
    if(Number.isNaN(number)) {
        let index = props.maxSize.indexOf('GB');
        if(index > 0) {
            multiplier = 1024*1024*1024
        } else {
            index = props.maxSize.indexOf('MB')
        }
        if(index > 0) {
            multiplier = 1024*1024
        } else {
            index = props.maxSize.indexOf('KB')
        }
        if(index > 0) {
            number = Number(props.maxSize.substring(0, index));
        }
    }
    return Number.isNaN(number) ? null : number * multiplier;
})

const maxSizeString = computed(() => {
    const number = Number(props.maxSize);
    if(Number.isNaN(number)) {
        return props.maxSize;
    }
    if(number >= 1073741824) {
        return (number / (1024*1024*1024)).toFixed(2)+'GB'
    }
    if(number >= 10485760) {
        return (number / (1024*1024)).toFixed(2)+'MB'
    }
    return (number / 1024).toFixed(2)+'KB'
})

const limitations = computed(() =>{
    return props.acceptableTypes.map(type => {
        let typeGroup = extensionTypeGroups[type]?.split(',');
        if(typeGroup) {
            return Object.entries(extensionTypes).map(entry => typeGroup.includes(entry[1]) ? entry[0].toUpperCase() : null).filter(entry => !!entry).join(', ')
        }
        return type.replace('.', '').toUpperCase()
    }).join(', ')+' up to '+maxSizeString.value;
})

const formatSize = (size) => {
    if (size > 1024 * 1024 * 1024 * 1024) {
        return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB';
    } else if (size > 1024 * 1024 * 1024) {
        return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB';
    } else if (size > 1024 * 1024) {
        return (size / 1024 / 1024).toFixed(2) + ' MB';
    } else if (size > 1024) {
        return (size / 1024).toFixed(2) + ' KB';
    }
    return size.toString() + ' B';
}

function remove(file) {
    emit('update:modelValue', props.multiple ? props.modelValue.filter(el => el !== file) : null);
    getPreview();
}

function getFileExtension(fileName) {
    let fileExtension = fileName.split('.').pop();
    const index = fileExtension.indexOf('?');
    return index > -1 ? fileExtension.substring(0, fileExtension.indexOf('?')) : fileExtension;
}

function getFileGroupType(fileName) {
    let fileExtension = getFileExtension(fileName).toLowerCase();
    for(let groupType in extensionTypeGroups) {
        if(extensionTypeGroups.hasOwnProperty(groupType) && fileExtensionIsType(fileExtension, groupType)) {
            return groupType;
        }
    }
    return 'other';
}

function fileNameIsType(fileName, type) {
    return fileExtensionIsType(getFileExtension(fileName), type);
}

function fileExtensionIsType(fileExtension, type) {
    let mimeTypes = extensionTypeGroups[type]?.split(',');
    let typeExtensions = Object.entries(extensionTypes).map(entry => mimeTypes.includes(entry[1]) ? entry[0] : null).filter(entry => !!entry);
    return typeExtensions.indexOf(fileExtension) > -1;
}

const acceptableMimeTypes = computed(() => {
    return props.acceptableTypes.map(type => {
        type = type.replace('.','');
        return extensionTypes[type] || extensionTypeGroups[type] || null
    }).filter(type => !!type).join(',')
});

const extensionTypes = {
    aac: 'audio/aac',
    avi: 'video/x-msvideo',
    azw: 'application/vnd.amazon.ebook',
    bin: 'application/octet-stream',
    bmp: 'image/bmp',
    css: 'text/css',
    csv: 'text/csv',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    eot: 'application/vnd.ms-fontobject',
    epub: 'application/epub+zip',
    gz: 'application/gzip',
    gif: 'image/gif',
    htm: 'text/html',
    html: 'text/html',
    ico: 'image/vnd.microsoft.icon',
    ics: 'text/calendar',
    jar: 'application/java-archive',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    js: 'text/javascript,',
    json: 'application/json',
    jsonld: 'application/ld+json',
    geojson: 'application/geo+json',
    mid: 'audio/midi,audio/x-midi',
    midi: 'audio/midi,audio/x-midi',
    mjs: 'text/javascript',
    mp3: 'audio/mpeg',
    mpeg: 'video/mpeg',
    mpkg: 'application/vnd.apple.installer+xml',
    mov: 'video/quicktime',
    odp: 'application/vnd.oasis.opendocument.presentation',
    ods: 'application/vnd.oasis.opendocument.spreadsheet',
    odt: 'application/vnd.oasis.opendocument.text',
    oga: 'audio/ogg',
    ogv: 'video/ogg',
    ogx: 'application/ogg',
    opus: 'audio/opus',
    otf: 'font/otf',
    png: 'image/png',
    pdf: 'application/pdf',
    php: 'application/x-httpd-php',
    ppt: 'application/vnd.ms-powerpoint',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    rar: 'application/vnd.rar',
    rtf: 'application/rtf',
    sh: 'application/x-sh',
    svg: 'image/svg+xml',
    swf: 'application/x-shockwave-flash',
    tar: 'application/x-tar',
    tif: 'image/tiff',
    tiff: 'image/tiff',
    ts: 'video/mp2t',
    ttf: 'font/ttf',
    txt: 'text/plain',
    vsd: 'application/vnd.visio',
    wav: 'audio/wav',
    weba: 'audio/webm',
    webm: 'video/webm',
    webp: 'image/webp',
    woff: 'font/woff',
    woff2: 'font/woff2',
    xhtml: 'application/xhtml+xml',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    xml: 'application/xml',
    xul: 'application/vnd.mozilla.xul+xml',
    zip: 'application/zip',
    mp4: 'video/mp4',
}

const extensionTypeGroups = {
    image: [
        extensionTypes.bmp,
        extensionTypes.gif,
        extensionTypes.ico,
        extensionTypes.jpeg,
        extensionTypes.jpg,
        extensionTypes.png,
        extensionTypes.svg,
        extensionTypes.tif,
        extensionTypes.tiff,
        extensionTypes.webp,
    ].join(','),
    video: [
        extensionTypes.avi,
        extensionTypes.mpeg,
        extensionTypes.mov,
        extensionTypes.ogv,
        extensionTypes.ts,
        extensionTypes.webm,
        extensionTypes.mp4,
    ].join(','),
    document: [
        extensionTypes.doc,
        extensionTypes.docx,
        extensionTypes.odp,
        extensionTypes.ods,
        extensionTypes.odt,
        extensionTypes.pdf,
        extensionTypes.rtf,
        extensionTypes.txt,
        extensionTypes.xls,
        extensionTypes.xlsx,
    ].join(','),
    audio: [
        extensionTypes.aac,
        extensionTypes.mid,
        extensionTypes.midi,
        extensionTypes.mp3,
        extensionTypes.oga,
        extensionTypes.opus,
        extensionTypes.wav,
        extensionTypes.weba,
    ].join(',')
}






</script>
<style>
.image-preview-container {
    height: 250px;
}
</style>