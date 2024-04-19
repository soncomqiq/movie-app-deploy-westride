import { IconType } from 'react-icons'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv  } from 'react-icons/hi2'

type menuObject = {
    name : string
    icon : IconType
}

const menu : menuObject = [
        {
            name : 'HOME',
            icon : HiHome
        },
        {
            name : 'SEARCH',
            icon : HiMagnifyingGlass
        },
        {
            name : 'WATCH LIST',
            icon : HiPlus
        },
        {
            name : 'ORIGINALS',
            icon : HiStar
        },
        {
            name : 'MOVIES',
            icon : HiPlayCircle

        },
        {
            name : 'SERIES',
            icon : HiTv
        }
    ]