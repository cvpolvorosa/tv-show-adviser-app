import s from "./style.module.css"
import { Search as SearchIcon } from "react-bootstrap-icons"
export function SearchBar({ onSubmit }) {

    function submit(e) {
        if(e.key == "Enter" && e.target.value.trim() != ""){ //trigger when Enter is pressed & trim empty string
            onSubmit(e.target.value);
        }
    }

    return <>
        <SearchIcon size={27} className={s.icon} />
        <input
            onKeyUp={submit}
            className={s.input}
            type="text"
            placeholder={"Search a show!"} />
    </>
}