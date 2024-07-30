import {Store} from '@tanstack/store';

export const modalStore = new Store<{
    isOpen: boolean
}>({
    isOpen: false
})

export const toggleModal = (value: boolean) => modalStore.setState(state => ({ isOpen: value }));