import React from 'react';

const RowContainer = ({leftElement, rightElement}) => {
    return (
        <div className="row mb2">
        <div className="col-md-6">
            { leftElement }
        </div>
        <div className="col-md-6">
            { rightElement }
        </div>
    </div>
    )

}

export default RowContainer;