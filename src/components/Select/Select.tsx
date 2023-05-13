import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css';

export type ItemType = {
    id: string
    title: string
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export const Select = React.memo((props: SelectPropsType) => {
    const [active, setActive] = useState<boolean>(false);
    const [hoveredElValue, setHoveredElValue] = useState(props.value);

    useEffect(() => {
        setHoveredElValue(props.value)
    }, [props.value])


    const selectedItem = props.items.find(i => i.id === props.value)
    const hoveredItem = props.items.find(i => i.id === hoveredElValue)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].id === hoveredElValue) {
                    const pretedentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretedentElement) {
                        props.onChange(pretedentElement.id)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].id)
            }

        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }


    return (
        <>
            <div onKeyUp={onKeyUp}
                 tabIndex={0}
                 className={styles.select
                     + ' ' + (active ? styles.active : ' ')}>
                <span
                    onClick={toggleItems}
                    className={styles.main}>
                    {selectedItem && selectedItem.title}
                </span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map(i =>
                            <div key={i.id}
                                 onMouseEnter={() => {
                                     setHoveredElValue(i.id)
                                 }}
                                 className={styles.item + ' ' + (hoveredItem === i ? styles.selected : ' ')}
                                 onClick={() => {
                                     onItemClick(i.id)
                                 }}>
                                {i.title}
                            </div>)}
                    </div>
                }
            </div>
        </>
    );
});


