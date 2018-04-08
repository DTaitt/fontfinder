// @flow
import React, {Component} from 'react';
import './FontCard.css';

import {CardPanel, Button, Modal, Dropdown, Collection, CollectionItem} from 'react-materialize';

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
    variants: string[],
    addFavorite(newFav:newFav):Promise<void>,
}

export default class FontCard extends Component<Props, State>{

    state = {
        formattedFontFamily: '',
        variants: this.props.variants,
        isInFav: false,
    }

    formatFontFamily() {
        let splitFontFamily = this.props.family.split(' ');
        let joinedFontFamily = splitFontFamily.join('+');
        this.setState({
            formattedFontFamily: joinedFontFamily
        })
    }
    
    formatVariantValues() {
        let tempVariants = []
        this.state.variants.forEach(variant => {
            switch (variant) {
                case '100':
                    variant = 'Thin'
                    tempVariants.push('Thin');
                    break;
                case '100italic':
                    variant = 'Thin Italic'
                    tempVariants.push("Thin Italic");
                    break;
                case '200':
                    variant = 'Extra-Light'
                    tempVariants.push("Extra-Light");
                    break;
                case '200italic':
                    variant = 'Extra-Light Italic'
                    tempVariants.push("Extra-Light Italic");
                    break;
                case '300':
                    variant = 'Light'
                    tempVariants.push("Light");
                    break;
                case '300italic':
                    variant = 'Light Italic'
                    tempVariants.push("Light Italic");
                    break;
                case '400':
                    variant = 'Regular'
                    tempVariants.push("Regular");
                    break;
                case '400italic':
                    variant = 'Italic'
                    tempVariants.push("Italic");
                    break;
                case '500':
                    variant = 'Medium'
                    tempVariants.push("Medium");
                    break;
                case '500italic':
                    variant = 'Medium Italic'
                    tempVariants.push("Medium Italic");
                    break;
                case '600':
                    variant = 'Semi-Bold'
                    tempVariants.push("Semi-Bold");
                    break;
                case '600italic':
                    variant = 'Semi-Bold Italic'
                    tempVariants.push("Semi-Bold Italic");
                    break;
                case '700':
                    variant = 'Bold'
                    tempVariants.push("Bold");
                    break;
                case '700italic':
                    variant = 'Bold Italic'
                    tempVariants.push("Bold Italic");
                    break;
                case '800':
                    variant = 'Extra-Bold'
                    tempVariants.push("Extra-Bold");
                    break;
                case '800italic':
                    variant = 'Extra-Bold Italic'
                    tempVariants.push("Extra-Bold Italic");
                    break;   
                case '900':
                    variant = 'Black'
                    tempVariants.push("Black");
                    break;
                case '900italic':
                    variant = 'Black Italic'
                    tempVariants.push("Black Italic");
                    break;   
                default:
                    variant = variant
                    tempVariants.push(variant);
                    break;
            }
        });

        this.setState({
            variants: tempVariants
        })
    }

    componentDidMount() {
        this.formatFontFamily();
        this.formatVariantValues();
    }
    
    changeFavStatus() {
        this.setState(prevState => ({
            isInFav: !prevState.isInFav,
        }), 
        () => {
            this.addOrRemoveFav()
        })
    }

    addOrRemoveFav() {
        this.state.isInFav
        ? this.props.addFavorite({
            id: this.props.id,
            family: this.props.family,
            category: this.props.category,
            url: this.props.url
        })
        : this.props.deleteFavorite(this.props.id)
    }

    render() {
        return(
            <CardPanel 
                className="font-card white black-text z-depth-2"
            >
                <div className="info">
                    <a href={this.props.url} target='_blank'>
                        <h1 className="family">{this.props.family}</h1>
                    </a>
                    <p className="category">{this.props.category}</p>
                    <Dropdown trigger={
                        <Button>{this.state.variants.length} Variant{this.state.variants.length > 1 && 's'}</Button>
                    }>
                    <Collection>
                        {
                            this.state.variants.map((variant) => {
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
                        icon={
                            this.state.isInFav ? 'remove' : 'favorite'
                        } 
                        onClick={() => {
                                    this.changeFavStatus()
                                    
                            }}
                    />
                    <Modal
                        header={this.props.family}
                        trigger={<Button>Add Style</Button>}
                        className='import-code'
                    >
                        <div className="html">
                            <h2>Add to HTML</h2>
                            <blockquote><pre><code>
                                {`<link href="https://fonts.googleapis.com/css?family=${this.state.formattedFontFamily}" rel="stylesheet">`}
                            </code></pre></blockquote>
                        </div>
                        <div className="css">
                            <h2>Add to CSS</h2>
                            <blockquote><pre><code>
                               {`font-family: '${this.props.family}', ${this.props.category};`}
                            </code></pre></blockquote>
                        </div>                    
                    </Modal>
                </div>
            </CardPanel>
        )
    }
}