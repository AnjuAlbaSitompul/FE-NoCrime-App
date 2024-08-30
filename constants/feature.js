import { COLORS } from './appearance'

const WellcomeItemData = [
    {
        image: require('../assets/images/kriminal.png'),
        text: 'Pastikan Kemanan Dan Kenyaman Dengan Perencanaan Tempat Tinggal Yang Tepat'
    },
    {
        image: require('../assets/images/kriminal2.png'),
        text: 'Jauhi Tempat Yang Merupakan Rawan Kriminal Di Daerah Anda'
    },
    {
        image: require('../assets/images/kriminal3.png'),
        text: 'Mari Bangun Tempat Yang Nyaman Bersama Dengan Saling Membantu Dan Melapor Tepat Waktu'
    }
]

const jenisKriminal = [
    {
        label: 'Pencurian',
        value: 'Pencurian',
        color: COLORS.warn
    },
    {
        label: 'Pembunuhan',
        value: 'Pembunuhan',
        color: COLORS.danger
    },
    {
        label: 'Pemerkosaan',
        value: 'Pemerkosaan',
        color: COLORS.danger
    },
    {
        label: 'Pelecehan',
        value: 'Pelecehan',
        color: COLORS.warn
    },
    {
        label: 'Pemalsuan',
        value: 'Pemalsuan',
        color: COLORS.warn
    },
    {
        label: 'Pemerasan',
        value: 'Pemerasan',
        color: COLORS.danger
    },
    {
        label: 'Perjudian',
        value: 'Perjudian',
        color: COLORS.primary
    },
    {
        label: 'Penculikan',
        value: 'Penculikan',
        color: COLORS.danger
    },
    {
        label: 'Transaksi Narkoba',
        value: 'Transaksi Narkoba',
        color: COLORS.danger
    }
]

export {
    WellcomeItemData,
    jenisKriminal
}