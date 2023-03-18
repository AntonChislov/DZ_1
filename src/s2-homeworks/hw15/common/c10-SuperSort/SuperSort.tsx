import React from 'react'

// добавить в проект иконки и импортировать
import downIcon from '../../img/down.png'
import upIcon from '../../img/up.png'
import noneIcon from '../../img/not-sort.png'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    let res
    if (sort === '') res = down
    else if (sort === down) res = up
    else if (sort === up) res = ''
    else res = down
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return res // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img style={{width: '17px'}}
                id={id + '-icon-' + sort}
                src={icon}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort