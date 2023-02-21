import * as React from 'react';
import {BottomNavigation, BottomNavigationAction, Paper, Typography} from "@mui/material";

export default function Footer() {


    return (
        <>
            <Paper sx={{  bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                >
<Typography>footer</Typography>
                    {/*<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />*/}
                    {/*<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />*/}
                    {/*<BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />*/}
                </BottomNavigation>
            </Paper>
        </>

    );
}