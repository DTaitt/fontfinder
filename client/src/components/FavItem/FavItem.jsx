// @flow
import React from 'react';
import './FavItem.css';
import {CollectionItem, Button, Modal} from 'react-materialize';


type Props = {
  id: string,
  family: string,
  category: string,
  url: string,
  formattedFontFamily: string,
};

export default function FavItem(props:Props){
    return(
        <CollectionItem className='fav-item'>
            <div className="info">
                <a href={`https://fonts.google.com/specimen/${props.family}`} className='family'>{props.family}</a>
                <p className='category'>{props.category}</p>
            </div>
            <div className="interaction">
                <Button 
                    floating 
                    // small 
                    className='red' 
                    waves='light' 
                    icon='remove' 
                    onClick={
                        () => {
                            props.currentFav && props.deleteFavorite(props.id);
                        }
                    }
                />
                <Modal
                    header={props.family}
                    trigger={<Button>Add Style</Button>}
                    className='import-code'
                >
                    <div className="html">
                        <h2>Add to HTML</h2>
                        <blockquote><pre><code>
                            {`<link href="https://fonts.googleapis.com/css?family=${props.formattedFontFamily}" rel="stylesheet">`}
                        </code></pre></blockquote>
                    </div>
                    <div className="css">
                        <h2>Add to CSS</h2>
                        <blockquote><pre><code>
                           {`font-family: '${props.family}', ${props.category};`}
                        </code></pre></blockquote>
                    </div>  
                </Modal>
            </div>
        </CollectionItem>
    )
}