import React from 'react';

export class FormComponent extends React.Component {
    constructor(props){
        super(props);
        this.selectedExpOption = this.selectedExpOption.bind(this);
        this.selectedWhereOption = this.selectedWhereOption.bind(this);
        this.state = {
            selectExp: 'Select',
            selectWhere: 'Select',
            selectExpClass: 'inactive',
            selectWhereClass: 'inactive',
            // divInpColor: '#999999'
        }
    }

    selectedExpOption(e){

        

        const selectExp =  e.target.value;
        this.setState(()=>{
            return {
                selectExp,
                selectExpClass: 'active'
            }
        })
    }
    selectedWhereOption(e){
        const selectWhere =  e.target.value;

        this.setState(()=>{
            return {
                selectWhere,
                selectWhereClass: 'active'
            }
        })
    }
    render(){
        let styleColor = {
                 color : this.state.divInpColor
                }

        return (
            <div className="form">
                <form className="flex flex-justify">
                    <div className="form--col">
                        <div className="form--row">
                            <label htmlFor="uname">NAME</label>
                            <input type="text" className="input input__border--t2" id="uname" placeholder="Name" />
                        </div> 
                        <div className="form--row">
                            <label htmlFor="uphone">PHONE</label>
                            <input type="text" className="input input__border--t1" id="uphone" placeholder="Phone" />
                        </div> 
                        <ExperienceComponent selectExp={this.state.selectExp} selectedExpOption={this.selectedExpOption} selectExpClass={this.state.selectExpClass}/>
                    </div> 
                    <div className="form--col">
                        <div className="form--row">
                            <label htmlFor="surname">SURNAME</label>
                            <input type="text" className="input input__border--t2" id="surname" placeholder="Surname" />
                        </div> 
                        <div className="form--row">
                            <label htmlFor="uemail">EMAIL ADDRESS</label>
                            <input type="text" className="input input__border--t1" id="uemail" placeholder="Email" />
                        </div> 
                        <WhereAboutComponent selectWhere={this.state.selectWhere} selectedWhereOption={this.selectedWhereOption} selectWhereClass={this.state.selectWhereClass}/>
                        
                       <div className="form--btn">
                            <button type="submit" className="btn btn--black pull-right">SEND</button>
                       </div>  
                    </div> 
                </form>
            </div>
        )
    }
}


const ExperienceComponent = (props) => {
    let selectExpClass;
    if(props.selectExpClass === 'inactive'){
        selectExpClass = 'input input__border--t2 inactive'
    }
    else{
        selectExpClass = 'input input__border--t2 active'
    }


    return (<div className="form--row">
            <label htmlFor="experience">EXPERIENCE</label>
                <div className="down-arrow"></div>
                <div className={selectExpClass}  id="experience">{props.selectExp}</div>
                <select className="select select__with--opacity" onChange={props.selectedExpOption} name="selectexp"> 
                    <option value="1">1</option>    
                    <option value="2">2</option>    
                    <option value="3">3</option>    
                    <option value="4">4</option>    
                </select>
            </div>)
    } 

    const WhereAboutComponent = (props) => {
         let selectWhereClass;
        if(props.selectWhereClass === 'inactive'){
            selectWhereClass = 'input input__border--t2 inactive'
        }
        else{
            selectWhereClass = 'input input__border--t2 active'
        }

        return(
            <div className="form--row">
                    <label htmlFor="whearabout">WHERE DID YOU HEAR ABOUT US?</label>
                    <div className="down-arrow"></div>
                    <div className={selectWhereClass} id="whearabout">{props.selectWhere}</div>
                    <select className="select select__with--opacity" onChange={props.selectedWhereOption}>
                        <option value="News">News</option>    
                        <option value="Advertisement">Advertisement</option>    
                    </select>
                </div>
                )
}

export default FormComponent;