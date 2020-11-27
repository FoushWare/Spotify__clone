import React from 'react'
import "./Body.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
// import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";


function Body({ spotify }) {

    const [{ discover_weekly }, dispatch] = useStateValue();
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">

            </div>
            <div className="body__songs">

            </div>

        </div>
    )
}

export default Body
