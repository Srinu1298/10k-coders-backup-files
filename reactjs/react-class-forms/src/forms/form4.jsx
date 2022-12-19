


import React, { Component } from 'react';

export default class Form4 extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                username: "",
                password: "",
                emailaddress: "",
                dateofbirth: "",
                heightorweight: "",
                
            },
            everyuser : [ ],

            EditIndex : null
        }
    }
    
        CheckingInput=(e)=>{
            console.log(e.target)
            var newperson = {...this.state.person};
            newperson[e.target.name] = e.target.value;
            this.setState({person : newperson})
        }
    
        submit=()=>{
            var neweachusers = [...this.state.everyuser];
            neweachusers.push(this.state.person);
            this.setState({everyuser : neweachusers})
            this.clearform()
        }

        clearform=()=>{
            var freshform ={
                username: "",
                password: "",
                emailaddress: "",
                dateofbirth: "",
                height: "",
                weight:"",

               
            }
            this.setState({person : freshform})
        }

        edituser=(usr , i)=>{
            this.setState({person : usr , editindex: i })
        }

        updateuser=()=>{
            var newupdateones = [...this.state.everyuser];
            newupdateones[this.state.EditIndex] = this.state.person;
            this.setState({everyuser : newupdateones, EditIndex : null});
            this.clearform()
        }

        deleteuser=(usr)=>{
            var deleteones = this.state.everyuser.filter((myuser)=>
               myuser.email!== usr.email
            )
            this.setState({everyuser : deleteones})
        }

    render() {
        return (
            <div className='container'>
                    <h4>pinalove.com </h4><hr />
                    <div className='username'>
                        <label htmlFor="username">username</label><br/>
                        <input type="text" class="form-control" name='username' id="username" placeholder='username' value={this.state.person.name} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                    </div>

                    <div className='password'>
                        <label htmlFor="Username">password</label><br />
                        <input type="text" class="form-control" name='password' id="password" placeholder='password' value={this.state.person.username} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                    </div>

                    <div className='Email address'>
                        <label htmlFor="Email address">Email address</label><br />
                        <input type="text"class="form-control" name="email address"id="email address" placeholder='emailaddress' value={this.state.person.username} onchange={(e)=>{this.CheckingInput(e)}}/><br/>
                        
                     </div>   

                     
                    <div className='Password'>
                        <label htmlFor="Password">Password</label><br />
                        <input type="password" class="form-control" name='password' id="password" placeholder='Password' value={this.state.person.password} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                    </div>

                    <div className='date of birth'>
                        <label for="birthday">date of birth</label><br />
                        <input type="date "  id="birthday"  name="birthday"></input>
                    </div>

                    <div className='Height'>
                        <label htmlFor="Height">Height</label><br />
                        <input type="height" class="form-control" name='height'  id="height" placeholder='height' value={this.state.person.confirmpassword} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                    </div>

                    <div className='Weight'>
                        <label htmlFor="weight">weight</label><br />
                        <input type="weight" class="form-control" name='weight'  id="weight" placeholder='weight' value={this.state.person.confirmpassword} onChange={(e)=>{this.CheckingInput(e)}}/><br />
                    </div>

                    {this.state.EditIndex!== null ? <button type='button' className='btn btn-dark' onClick={this.updateuser}>UPDATE</button> : <button type="button" className='btn btn-primary' onClick={this.submit}>SUBMIT</button>}
                


                <br /><div className='table'>
                     <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Emailaddress</th>
                                <th>Password</th>
                                <th>Date Of Birth</th>
                                <th>Height</th>
                                <th>Weight</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.everyuser.map((usr ,i)=>
                               <tr key={i}>
                                   <td>{usr.username}</td>
                                   <td>{usr.password}</td>
                                   <td>{usr.emailaddress}</td>
                                   <td>{usr.password}</td>
                                   <td>{usr.dateofbirth}</td>
                                   <td>{usr.height}</td>
                                   <td>{usr.weight}</td>
                                   <td><button type='button' className='btn btn-success' onClick={()=>{this.edituser(usr , i)}}>EDIT</button></td>
                                   <td><button type="button" className='btn btn-danger' onClick={()=>{this.deleteuser(usr , i)}}>DELETE</button></td>
                               </tr>
                            )}
                        </tbody>
                     </table>
                </div>
            </div>
            

        );
    }
}
