// @flow
import React from 'react';
import './FontCard.css';

import {CardPanel, Button, Modal, Chip, Dropdown, NavItem, CollectionItem} from 'react-materialize';
import Collection from 'react-materialize/lib/Collection';

type newFav = {
    id: string,
    family: string,
    category: string,
    url: string,
}

type Props = {
    id: string,
    family: string,
    category: string,
    url: string,
    addFavorite(newFav:newFav):Promise<void>,
}

export default function FontCard (props:Props){
    let formattedFontFamily:string = '';
    let variants = variants;

    function formatFontFamily() {
        let splitFontFamily = props.family.split(' ');
        let joinedFontFamily = splitFontFamily.join('+');
        formattedFontFamily = joinedFontFamily;
    }
    
    function formatVariantValues() {
        variants.forEach(variant => {
            switch (variant) {
                case '100':
                    variant = 'Thin'
                    break;
                case '100italic':
                    variant = 'Thin Italic'
                    break;
                case '200':
                    variant = 'Extra-Light'
                    break;
                case '200italic':
                    variant = 'Extra-Light Italic '
                    break;
                case '300':
                    variant = 'Light'
                    break;
                case '300italic':
                    variant = 'Light Italic'
                    break;
                case '400':
                    variant = 'Regular'
                    break;
                case '400italic':
                    variant = 'Italic'
                    break;
                case '500':
                    variant = 'Medium'
                    break;
                case '500italic':
                    variant = 'Medium Italic'
                    break;
                case '600':
                    variant = 'Semi-Bold'
                    break;
                case '600italic':
                    variant = 'Semi-Bold Italic'
                    break;
                case '700':
                    variant = 'Bold'
                    break;
                case '700italic':
                    variant = 'Bold Italic'
                    break;
                case '800':
                    variant = 'Extra-Bold'
                    break;
                case '800italic':
                    variant = 'Extra-Bold Italic'
                    break;   
                case '900':
                    variant = 'Black'
                    break;
                case '900italic':
                    variant = 'Black Italic'
                    break;   
                default:
                    variant = variant
                    break;
            }
        });
    }

    formatFontFamily()
    formatVariantValues()

    return(
        <CardPanel 
            className="font-card white black-text z-depth-2"
        >
            <div className="info">
                <a href={props.url} target='_blank'>
                    <h1 className="family">{props.family}</h1>
                </a>
                <p className="category">{props.category}</p>
                <Dropdown trigger={
                    <Button>{variants.length} Variant{variants.length > 1 && 's'}</Button>
                }>
                <Collection>
                    {
                        variants.map((variant) => {
                            return <CollectionItem className='variant' key={variant}>{variant}</CollectionItem>
                        })
                    }
                </Collection>
                </Dropdown>
            </div>
            <div className="interaction">
                <Button 
                    floating 
                    // small 
                    className='red' 
                    waves='light' 
                    icon='favorite' 
                    onClick={() => {
                                props.addFavorite({
                                id: props.id,
                                family: props.family,
                                category: props.category,
                                url: props.url
                            })
                        }}
                />
                <Modal
                    header={props.family}
                    trigger={<Button>Expand</Button>}>
                    <h2>Embed Font</h2>
                    <p>{`<link href="https://fonts.googleapis.com/css?family=${formattedFontFamily}" rel="stylesheet">`}</p>
                    <h2>Add to CSS</h2>
                    <p>{`font-family: '${props.family}', ${props.category};`}</p>
                </Modal>
            </div>
        </CardPanel>
    )
}