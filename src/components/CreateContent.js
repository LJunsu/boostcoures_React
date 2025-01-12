import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        console.log("CreateContent render");
        return (
            <article>
                <h2>Create</h2>

                <form 
                    action="/create_process" 
                    method="post"
                    onSubmit = {function(e) {
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value
                            , e.target.desc.value
                        );
                    }.bind(this)}
                >
                    <p>
                        <input type="text" name="title" placeholder="title"/>
                    </p>

                    <p>
                        <textarea name="desc" placeholder="description" />
                    </p>

                    <input type="submit" />
                </form>
            </article>
        );
    }
}

export default CreateContent;