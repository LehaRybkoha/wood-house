import {Store} from '@tanstack/store';

export const modalStore = new Store<{
    isOpen: boolean
}>({
    isOpen: false
})

export const openModal = () => modalStore.setState(state => ({ isOpen: true }));
export const closeModal = () => modalStore.setState(state => ({ isOpen: false }));