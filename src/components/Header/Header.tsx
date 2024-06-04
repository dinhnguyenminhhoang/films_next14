import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie'
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import MoreIcon from '@mui/icons-material/More'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
    return (
        <header className="h-header flex w-full items-center justify-between bg-primary pl-20 pr-20">
            <List className="flex items-center gap-6">
                <Link href={'/'}>
                    <Image
                        alt="logo"
                        src={
                            'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
                        }
                        width={150}
                        height={40}
                    />
                </Link>
                <ListItemButton>
                    <ListItemIcon className="min-w-8">
                        <MovieIcon className="text-white" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Movies"
                        className="text-lg text-white"
                    />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon className="min-w-8">
                        <ConnectedTvIcon className="text-white" />
                    </ListItemIcon>
                    <ListItemText
                        className="text-lg text-white"
                        primary="Tv Shows"
                    />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon className="min-w-8">
                        <PeopleAltIcon className="text-white" />
                    </ListItemIcon>
                    <ListItemText
                        className="text-lg text-white"
                        primary="People"
                    />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon className="min-w-8">
                        <MoreIcon className="text-white" />
                    </ListItemIcon>
                    <ListItemText
                        className="text-lg text-white"
                        primary="More"
                    />
                </ListItemButton>
            </List>
            <List className="flex items-center gap-6">
                <ListItemButton>
                    <ListItemIcon className="min-w-8">
                        <CircleNotificationsIcon className="text-4xl text-white" />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon className="min-w-8">
                        <AccountCircleIcon className="text-4xl text-white" />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon className="min-w-8">
                        <SearchIcon className="text-4xl text-violet-400" />
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </header>
    )
}
export default Header
