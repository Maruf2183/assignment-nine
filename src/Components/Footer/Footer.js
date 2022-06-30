import React from 'react';


const Footer = () => {
    return (
        <div>
            
<footer className="footer bg-gray-300 relative pt-1 border-b-2 border-blue-700 font">
    <div className="container mx-auto px-6">

        <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <div className="font-bold text-gray-700 uppercase mb-2"><h2>Need Help ?</h2></div>
                    <div className="my-2"> <h5>call us</h5><h5> 01880910302 </h5></div>
                    <div className="my-2"> <h5>Email for Us</h5> <h4>hello@yoursite.com</h4> </div>
                    <div className="my-2"><h5>Follow Us</h5> <div>  icon sit here </div></div>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">COMPANY</h2>
                    <div className="my-2"> <h4>About Us</h4></div>
                    <div className="my-2"><h5>Rewards</h5></div>
                    <div className="my-2"><h5>Work with us</h5></div>
                    <div className="my-2"><h5>Meet the teem</h5></div>
                  
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2"><h2>Support</h2></div>
                    <div className="my-2">Account </div>
                    <div className="my-2">Legal</div>
                    <div className="my-2">Contact</div>
                    <div className="my-2">Affiliate Programme</div>
                    <div className="my-2">Privacy Policy</div>
                </div>
            </div>
        </div>
    </div>
    <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
                <p className="text-sm text-blue-700 font-bold mb-2">
                    © 2020 by Haven Holidays
                </p>
            </div>
        </div>
    </div>
</footer>
        </div>
    );
};

export default Footer;