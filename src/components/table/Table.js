import React from 'react';

export const Table = ({ children }) => {
    return (
        <div className="table-div">
            {children}
        </div>
    );
};
export const Tbody = ({ children }) => {
    return (
        <div className="table-body">
            {children}
        </div>
    );
};
export const Thead = ({ children }) => {
    return (
        <ul className="table-row table-header">
            {
                children.map((child, index) => {
                    return (
                        <li className={["table-column", `tr_item_${index}`, child.props.className].join(" ")} key={`th_${index}`}  {...child.props} >
                            {child}
                        </li>
                    )

                })
            }
        </ul>
    )
}

export const Trow = ({ children }) => {
    return Array.isArray(children) ? (
        <ul className="table-row table-tr">
            {
                children.map((child, index) => {
                    return (
                        <li className={["table-column", `tr_item_${index}`, child.props.className].join(" ")} key={`th_${index}`} {...child.props} >
                            {child}
                        </li>
                    )

                })
            }
        </ul>
    ) : (
            <ul className="table-row table-tr">{children}</ul>
        )
}

export const Column = ({ children }) => {


    return Array.isArray(children) ? (
        <>
            {
                React.Children.map(children, child => {
                    const height = { height: ` ${100 / children.length}%` };
                    return React.cloneElement(child, { style: height });
                })
            }
        </>
    ) : (
            <>{children}</>
        )
}