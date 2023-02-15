import { TVShowListItem } from "../TVShowListItem/TVShowListItem"
import s from "./style.module.css"

export function TVShowList({ tvShowList }) {

    return <div>
        <div className={s.title}>Like this show? You'll probably like :</div>
        <div className={s.list}>
            {
                tvShowList.map((tvShow) => {
                    return (
                        <span className={s.tv_show_item} key={tvShow.id}>
                        <TVShowListItem
                            tvShow={tvShow}
                            onClick={() => console.log("list item")}
                        />
                        </span>
                    )
                })
            }
        </div>

    </div>
}