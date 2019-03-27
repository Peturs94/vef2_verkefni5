import React, { Component } from 'react'

import './item.scss';

export default class Item extends Component {

    makeElement(item) {
        switch (item.type) {
            case 'youtube':
                return (
                    <div className="item item--youtube">
                        <div className="item__content">
                            <iframe className="item_iFrame" src= {`${item.data}`} title={item.type}></iframe>
                        </div>
                    </div>
                )
            case 'text':
                return (
                    <div className="item--text item">
                        <div className="item__content">
                            <p className="item__text">{item.data}</p>
                        </div>
                    </div>
                )
            case 'list':
                return (
                    <div className="item--list item">
                        <div className="item__content">
                            <ul className="item__ul">
                                {item.data.map((liItem, i) => (
                                <li key={i} className="item__li">{liItem}</li> 
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            case 'heading':
                return (
                    <div className="item item--heading">
                        <div className="item__content">
                            <h3 className="item__heading">{item.data}</h3>
                        </div>
                    </div>
                )
            case 'code':
                return (
                    <div class="item--code item">
                        <div class="item__content">
                            <pre class="item__code">{item.data}</pre>
                        </div>
                    </div>
                )
            case 'quote':
                return(
                    <div className="item item--blockquote">
                        <div className="item__content">
                            <blockquote>
                                <p className="item__quote">{item.data}</p>
                                <p className="item__attribute">{item.attribute}</p>
                            </blockquote>
                        </div>
                    </div>
                )
            case 'image':
                return(
                    <div className="item item--image">
                        <div className="item__content">
                            <div>
                                <img className="image__img" alt={item.caption} src={`${item.data}`}></img>
                                <p className="item_caption">{item.caption}</p>
                            </div>
                        </div>
                    </div>
                )
            default:
                return (<div>item.data</div>)
        }
    }
    render () {
        const { item } = this.props;
        return (
            <div className="lecture__content" > {this.makeElement(item)}</div>
        )
    }
}
