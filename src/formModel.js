import {useForm} from "@inertiajs/vue3";
import {computed, ref} from "vue";
import mitt from "mitt";

export function useFormModel(model, pathName) {
    const form = useForm(model);
    const isNew = computed(() => !model.id || model.id === 'new');
    const events = mitt();
    const transform = ref(null);

    function submit(options) {
        if(isNew.value) {
            if(typeof transform.value === 'function') {
                form.transform(transform.value)
            }
            form.post(route(pathName+'.store'), {
                ...(options ?? {}),
                onSuccess: (page) => {events.emit('success', page)},
                onError: (errors) => {events.emit('error', errors)},
            })
        } else {
            form.transform((data) => {
                const newData = {
                    ...data,
                    _method: 'patch'
                };
                if(typeof transform.value === 'function') {
                    return transform.value(newData);
                }
                return newData
            })
            form.post(route(pathName+'.update', model.id), {
                ...(options ?? {}),
                onSuccess: (page) => {events.emit('success', page)},
                onError: (errors) => {events.emit('error', errors)},
            })
        }
    }

    function destroy(options) {
        if(!isNew.value) {
            form.delete(route(pathName+'.destroy', model.id), {
                ...(options ?? {}),
                onSuccess: (page) => {events.emit('success', page)},
                onError: (errors) => {events.emit('error', errors)},
            })
        }
    }

    return {
        form,
        isNew,
        submit,
        destroy,
        events,
        transform,
    }
}