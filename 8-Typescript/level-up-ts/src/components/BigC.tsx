import React, { Component } from 'react';

type Props = {
    title: string;
};

type Status = {
    status: string;
};

export class BigC extends Component<Props, Status> {
    render() {
        return (
            <div>
                <h1>I'm {this.props.title} Component</h1>
            </div>
        );
    }
}
