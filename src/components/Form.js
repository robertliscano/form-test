import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            password:'',
            strength:0,
            strengthUpper: false,
            strengthNumeric: false,
            strengthLength: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState ({
            password: e.target.value,
        })
        this.strenghtPass(e.target.value);
    }

    strenghtPass(password) {
        var strength = 0

        if (password.match(/[A-Z]/)) {
            this.setState ({ strengthUpper: true });
            strength ++
        } else {
            this.setState ({ strengthUpper: false });
        }
        if (password.match(/[0-9]/)) {
            this.setState ({ strengthNumeric: true });
            strength ++
        }else {
            this.setState ({ strengthNumeric: false });
        }
        if (password.length > 0 ){
            strength ++
        }
        if (password.length > 5 ){
            this.setState ({ strengthLength: true });
            strength ++
        } else {
            this.setState ({ strengthLength: false });
        }
        this.setState ({
            strength
         });
    }    
      
    render() {    
        var color = "";
        const strength = this.state.strength;
        console.log(this.state);
        
        switch(strength) {
            case 1: color = "low"
                    break
            case 2: color = "low";
                    break
            case 3: color = "mediun";
                    break
            case 4: color = "high";
                    break
            default:color = "default";    
        }

        let strengthLenClass
        let strengthUppClass
        let strengthNumClass
        if (this.state.password.length === 0) {
            strengthLenClass = "default";
            strengthUppClass = "default";
            strengthNumClass = "default";
          } else {
            strengthLenClass = this.state.strengthLength ? "success" : "error";
            strengthUppClass = this.state.strengthUpper ? "success" : "error";
            strengthNumClass = this.state.strengthNumeric ? "success" : "error";
          }

        return (
            <main>
                <form action="">
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" required/>
                    <label htmlFor="password">Senha</label>
                    <input type="password" 
                    name="password" 
                    id="password"
                    className={color}
                    required
                    value={this.state.password} 
                    onChange={this.handleChange}/>
                    <div className={`psw-level-security ${color}`}>
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                    </div>
                    <ul>
                        <li><span className={strengthLenClass}>Pelo menos 6 caracteres</span></li>
                        <li><span className={strengthUppClass}>Pelo menos 1 letra maiúscula</span></li>
                        <li><span className={strengthNumClass}>Pelo menos 1 número</span></li>
                    </ul>
                    <label htmlFor="c_password">Confirme sua senha</label>
                    <input type="text" name="c_password" id="c_password" required/>
                    <button>Cadastrar</button>
                </form>
            </main>
        )
    }
}
