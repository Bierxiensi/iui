import React from "react";

interface IHello {
    message?: string;
}

const Hello: React.FunctionComponent<IHello> = (props) => {
    return <h2>{props.message}</h2>
}

Hello.defaultProps = {
    message: 'Hello world'
}

export default Hello;