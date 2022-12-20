
const inpFile = document.getElementById( "inpFile" );
const privewContainer = document.getElementById( "imagePrivew" );
const privewImage = privewContainer.querySelector( ".imge-privew--image" );
const privewDefaultText = privewContainer.querySelector( ".imagepreview--default-text" );
inpFile.addEventListener( "change", function () {
    const file = this.files[ 0 ];
    if ( file ) {
        const reader = new FileReader();
        privewDefaultText.style.display = "none";
        privewImage.style.display = "block";
        reader.addEventListener( "load", function () {
            privewImage.setAttribute( "src", this.result );
        } )

        reader.readAsDataURL( file );
    }
    else {
        privewDefaultText.style.display = "block";
        privewImage.style.display = "none";
    }
} )

