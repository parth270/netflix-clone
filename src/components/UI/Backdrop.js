import React from 'react';
import ReactDom from 'react-dom';

const Backdrop=(props)=>{

    const backdrop=<div className='backdrop'>{props.children}</div>

    return(
        <React.Fragment>
            {ReactDom.createPortal(backdrop,document.getElementById('backdrop'))}
        </React.Fragment>
    );
}

export default Backdrop;