import React from "react";

export const HelloWorldComponent = () => {
    
    console.log(`Api base: ${process.env.API_BASE}`);
    
    return (
        <h1>Hello World</h1>
    );
};