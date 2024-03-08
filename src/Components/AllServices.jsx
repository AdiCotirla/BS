import React, { Component } from 'react'
import { ServicesData } from '../Data/ServicesData'
import ServiceFound from './ServiceFound'
import "../Styling/ServiceFound.css"
export default class AllServices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: this.props.filter,
            show: this.props.show,
            genders: this.props.gender,
            filteredService: [...ServicesData],
            service: [...ServicesData]
        }
        this.data = [
            { letter: "Female", selected : "Servicii Femei" },
            { letter: "Male", selected : "Servicii Barbati" },
            { letter: "Both", selected :"Toate serviciile" },
        ]
    }
    FindService(letter) {
        if (letter === "Both" || letter === null) {
            this.setState({ filteredService: ServicesData })
        }
        else {
            const startsWithN = this.state.service.filter((sex) => sex.gender.startsWith(letter));
            this.setState({ filteredService: startsWithN })
        }
    }

  render() {
    return (
        <div className='services-container' >
            <h1 className='services-header'>BLACK SCISSORS</h1>
            <div className='filter-container'>
                {this.data.map((service, id) => {
                    return (
                        <button className='letter-button' key={id} onClick={() => {
                            this.FindService(service.letter)
                        }}>{service.selected}</button>
                    )
                })}</div>
            <ServiceFound array={this.state.filteredService} gender={this.state.genders} show={this.state.show} filter={this.state.filter}></ServiceFound>
        </div>
    )
  }
}
