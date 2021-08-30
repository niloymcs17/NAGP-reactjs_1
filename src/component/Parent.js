import React, { Component } from 'react'
import Child from './Child'
export class Parent extends Component {

    constructor(){
        super()
        this.state = {
            blogs : [
                {
                  "id":1,
                  "title":"Nagarro",
                  "description":"Nagarro is a MNC"
                },
                {
                  "id":2,
                  "title":"Nagarro Noida",
                  "description":"Nagarro is a MNC in Noida"
                }
            ],
            comments : [
                {
                  "id":1,
                  "blogId":1,
                  "comment":"This is a comment 1",
                  "isActive":true
                },
                {
                  "id":2,
                  "blogId":1,
                  "comment":"This is a comment 2",
                  "isActive":false
                },
                {
                  "id":3,
                  "blogId":2,
                  "comment":"This is a comment 1",
                  "isActive":true
                },
                {
                  "id":4,
                  "blogId":2,
                  "comment":"This is a comment 2",
                  "isActive":false
                }
              ] 
        }
        console.log (this.state) ;
    }
     
    render() {
        return (
            <div>
                { this.state.blogs.map((blog) =>
                    <div key={blog.id}>
                      <h1>Blog: {blog.title}</h1>
                     <Child ids={blog.id} comments={this.state.comments}></Child>
                    </div>
                )}
            </div>
        )
    }
}

export default Parent
