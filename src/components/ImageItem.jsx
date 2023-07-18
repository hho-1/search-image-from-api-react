function ImageItem({pic}) {
    return ( 
    <div>
        <img className='imageListImg' src={pic.urls.small} alt={pic.alt_description} />
    </div> 
    );
}

export default ImageItem;