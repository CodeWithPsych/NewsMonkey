import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className='bg-dark py-5 mt-5'>
                    <div className="container text-light text-center">
                        <h3 className="dispaly-5 mb-3">
                            Psych Programing
                        </h3>
                        <div className="my-3 d-inline-flex" style={{ cursor: "pointer" }}>
                            <p className="text-white mx-3">About Us</p>
                            <p className="text-white mx-3">Contact</p>
                            <p className="text-white mx-3">Terms of Service</p>
                            <p className="text-white mx-3">Privacy Policy</p>
                            <p className="text-white mx-3">FAQ</p>
                            <p className="text-white mx-3">Careers</p>
                        </div>
                        <small className="text-white-50 d-flex justify-content-center">
                            &copy; Copyright by Byte. All rights reserved.
                        </small>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
