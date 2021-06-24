import React, { useEffect, useState } from 'react'
import Listitem from '../ListItem';

export default function Lists({ showTitle, data, fetchData }) {
    const [collapseListItem, updateCollapsedListItem] = useState({})

    useEffect(() => {
        fetchData("https://run.mocky.io/v3/b49604f2-3705-4e14-992f-1378fb4b598f?mocky-delay=1000ms");
    }, [])

    const handleCollapsing = (e,id) => {
        e.preventDefault()
        const items = { ...collapseListItem };
        if(items[id]) {
            delete items[id]
        } else {
            items[id] = true
        }
        updateCollapsedListItem(items)
    }

    const createHierarchy = (result, isChildren = false, parentId) => {
        return <>
            <ul {...isChildren && result.length? { className: `child ${collapseListItem[parentId]? "active": ""}` } : ""}>
                {
                    result.map((item) => {
                        return <Listitem key={item.id}>
                            {
                                !isChildren ? <span><i className={getIconClass(item.icon)}></i></span> : null
                            }
                            {
                                showTitle ? <a href="#" {...item.children.length ? { id: item.id, onClick: (e) => { handleCollapsing(e, item.id) } } : ""}>
                                    {item.title}
                                    {
                                        item.children.length ? <div className="arrow"><i className={`bi bi-chevron-${collapseListItem[item.id]? "up": "down"}`}></i></div> : null
                                    }
                                </a> : null
                            }
                            {/* using recursion for multiple level heirarchy */}
                            {item.children.length ? createHierarchy(item.children, true, item.id) : null}
                        </Listitem>
                    })
                }
            </ul>
        </>
    }

    return createHierarchy(data)
}

const getIconClass = (icon) => {
    switch (icon) {
        case "reporting":
            return "bi bi-clipboard-data"
        case "tickets":
            return "bi bi-clipboard-data"
        case "orders":
            return "bi bi-cart4"
        case "castleGate":
            return "bi bi-card-image"
        case "inventory":
            return "bi bi-card-text"
        case "products":
            return "bi bi-calendar4-range"
        case "premiumShelf":
            return "bi bi-emoji-smile"
        case "downloadCenter":
            return "bi bi-dice-2"
        case "helpAndSupport":
            return "bi bi-cloud-arrow-down"
        default:
            return "bi-clipboard-data"

    }
}
