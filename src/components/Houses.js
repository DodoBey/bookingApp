import { v4 as uuidv4 } from 'uuid';

export default {
        checkout: false,
        houses: [{
            id: uuidv4(),
            title: 'Beautiful Lake House',
            address: '5500 Woodchuck Pl, North Vancouver, BC',
            map: 'https://goo.gl/maps/XC5SsFweLZ35Qby17',
            bedrooms: 3,
            price: 360,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:true,
                park:true,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'close',
                climate: true,
            },
            images: [
                "https://source.unsplash.com/1600x900/?property1", 
                "https://source.unsplash.com/1600x900/?property2", 
                "https://source.unsplash.com/1600x900/?property3", 
                "https://source.unsplash.com/1600x900/?property4", 
                "https://source.unsplash.com/1600x900/?property5"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Condo with Good Location',
            address: '150 E 16th Ave, Vancouver, BC',
            map: 'https://goo.gl/maps/GARbx24dzx6XJs2K9',
            bedrooms: 1,
            price: 130,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:false,
                wifi:true,
                park:false,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'mid',
                climate: false,
            },
            images: [
                "https://source.unsplash.com/1600x900/?condo", 
                "https://source.unsplash.com/1600x900/?condo1", 
                "https://source.unsplash.com/1600x900/?condo2", 
                "https://source.unsplash.com/1600x900/?condo3", 
                "https://source.unsplash.com/1600x900/?condo4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Mansion',
            address: '230 W 4th St, North Vancouver, BC',
            map: 'https://goo.gl/maps/E8PzrZoUZT7M7Kt57',
            bedrooms: 8,
            price: 1050,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:true,
                park:true,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'far',
                climate: true,
            },
            images: [
                "https://source.unsplash.com/1600x900/?mansion", 
                "https://source.unsplash.com/1600x900/?mansion1", 
                "https://source.unsplash.com/1600x900/?mansion2", 
                "https://source.unsplash.com/1600x900/?mansion3", 
                "https://source.unsplash.com/1600x900/?mansion4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Room for Couple',
            address: '230 W 4th St, North Vancouver, BC',
            map: 'https://goo.gl/maps/E8PzrZoUZT7M7Kt57',
            bedrooms: 1,
            price: 160,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:true,
                park:false,
                bathroom: 'Shared',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'mid',
                climate: false,
            },
            images: [
                "https://source.unsplash.com/1600x900/?room", 
                "https://source.unsplash.com/1600x900/?room1", 
                "https://source.unsplash.com/1600x900/?room2", 
                "https://source.unsplash.com/1600x900/?room3", 
                "https://source.unsplash.com/1600x900/?room4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Tiny, Sweet House for Family',
            address: '6695 Lochdale St, Burnaby, BC',
            map: 'https://goo.gl/maps/rRTocvgvExPSPVHh7',
            bedrooms: 2,
            price: 240,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:false,
                park:true,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'mid',
                climate: false,
            },
            images: [
                "https://source.unsplash.com/1600x900/?house", 
                "https://source.unsplash.com/1600x900/?house1", 
                "https://source.unsplash.com/1600x900/?house2", 
                "https://source.unsplash.com/1600x900/?house3", 
                "https://source.unsplash.com/1600x900/?house4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Tree House',
            address: '5040 No 6 Rd, Richmond, BC',
            map: 'https://goo.gl/maps/zh4QhGtszdEyeiiN7',
            bedrooms: 2,
            price: 120,
            available: true,
            amenities:{
                kitchen:false,
                kitchenAppliances: false,
                laundry:false,
                wifi:false,
                park:true,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'far',
                climate: false,
            },
            images: [
                "https://source.unsplash.com/1600x900/?treehouse", 
                "https://source.unsplash.com/1600x900/?treehouse1", 
                "https://source.unsplash.com/1600x900/?treehouse2", 
                "https://source.unsplash.com/1600x900/?treehouse3", 
                "https://source.unsplash.com/1600x900/?treehouse4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Penthouse on 52th Floor',
            address: '5500 Woodchuck Pl, North Vancouver, BC',
            map: 'https://goo.gl/maps/XC5SsFweLZ35Qby17',
            bedrooms: 3,
            price: 360,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:true,
                park:true,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'close',
                climate: true,
            },
            images: [
                "https://source.unsplash.com/1600x900/?penthouse", 
                "https://source.unsplash.com/1600x900/?penthouse1", 
                "https://source.unsplash.com/1600x900/?penthouse2", 
                "https://source.unsplash.com/1600x900/?penthouse3", 
                "https://source.unsplash.com/1600x900/?penthouse4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Private Room with Private Bathroom',
            address: '5500 Woodchuck Pl, North Vancouver, BC',
            map: 'https://goo.gl/maps/XC5SsFweLZ35Qby17',
            bedrooms: 3,
            price: 360,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:true,
                park:true,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'close',
                climate: true,
            },
            images: [
                "https://source.unsplash.com/1600x900/?property1", 
                "https://source.unsplash.com/1600x900/?property2", 
                "https://source.unsplash.com/1600x900/?property3", 
                "https://source.unsplash.com/1600x900/?property4", 
                "https://source.unsplash.com/1600x900/?property5"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Shared Room in Large Suit',
            address: '150 E 16th Ave, Vancouver, BC',
            map: 'https://goo.gl/maps/GARbx24dzx6XJs2K9',
            bedrooms: 1,
            price: 130,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:false,
                wifi:true,
                park:false,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'mid',
                climate: false,
            },
            images: [
                "https://source.unsplash.com/1600x900/?condo", 
                "https://source.unsplash.com/1600x900/?condo1", 
                "https://source.unsplash.com/1600x900/?condo2", 
                "https://source.unsplash.com/1600x900/?condo3", 
                "https://source.unsplash.com/1600x900/?condo4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Large Suit Located in Downtown',
            address: '230 W 4th St, North Vancouver, BC',
            map: 'https://goo.gl/maps/E8PzrZoUZT7M7Kt57',
            bedrooms: 8,
            price: 1050,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:true,
                park:true,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'far',
                climate: true,
            },
            images: [
                "https://source.unsplash.com/1600x900/?mansion", 
                "https://source.unsplash.com/1600x900/?mansion1", 
                "https://source.unsplash.com/1600x900/?mansion2", 
                "https://source.unsplash.com/1600x900/?mansion3", 
                "https://source.unsplash.com/1600x900/?mansion4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Big House With Beautiful View',
            address: '230 W 4th St, North Vancouver, BC',
            map: 'https://goo.gl/maps/E8PzrZoUZT7M7Kt57',
            bedrooms: 8,
            price: 1050,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:true,
                park:true,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'far',
                climate: true,
            },
            images: [
                "https://source.unsplash.com/1600x900/?mansion", 
                "https://source.unsplash.com/1600x900/?mansion1", 
                "https://source.unsplash.com/1600x900/?mansion2", 
                "https://source.unsplash.com/1600x900/?mansion3", 
                "https://source.unsplash.com/1600x900/?mansion4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Fully Furnished House for Family',
            address: '230 W 4th St, North Vancouver, BC',
            map: 'https://goo.gl/maps/E8PzrZoUZT7M7Kt57',
            bedrooms: 1,
            price: 160,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:true,
                park:false,
                bathroom: 'Shared',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'mid',
                climate: false,
            },
            images: [
                "https://source.unsplash.com/1600x900/?room", 
                "https://source.unsplash.com/1600x900/?room1", 
                "https://source.unsplash.com/1600x900/?room2", 
                "https://source.unsplash.com/1600x900/?room3", 
                "https://source.unsplash.com/1600x900/?room4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Luxury Designed Mountain House',
            address: '5040 No 6 Rd, Richmond, BC',
            map: 'https://goo.gl/maps/zh4QhGtszdEyeiiN7',
            bedrooms: 2,
            price: 120,
            available: true,
            amenities:{
                kitchen:false,
                kitchenAppliances: false,
                laundry:false,
                wifi:false,
                park:true,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'far',
                climate: false,
            },
            images: [
                "https://source.unsplash.com/1600x900/?treehouse", 
                "https://source.unsplash.com/1600x900/?treehouse1", 
                "https://source.unsplash.com/1600x900/?treehouse2", 
                "https://source.unsplash.com/1600x900/?treehouse3", 
                "https://source.unsplash.com/1600x900/?treehouse4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Cozy Room at Quite Place',
            address: '5500 Woodchuck Pl, North Vancouver, BC',
            map: 'https://goo.gl/maps/XC5SsFweLZ35Qby17',
            bedrooms: 3,
            price: 360,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:true,
                park:true,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'close',
                climate: true,
            },
            images: [
                "https://source.unsplash.com/1600x900/?property1", 
                "https://source.unsplash.com/1600x900/?property2", 
                "https://source.unsplash.com/1600x900/?property3", 
                "https://source.unsplash.com/1600x900/?property4", 
                "https://source.unsplash.com/1600x900/?property5"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Luxury Studio in Mansion',
            address: '230 W 4th St, North Vancouver, BC',
            map: 'https://goo.gl/maps/E8PzrZoUZT7M7Kt57',
            bedrooms: 8,
            price: 1050,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:true,
                park:true,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'far',
                climate: true,
            },
            images: [
                "https://source.unsplash.com/1600x900/?mansion", 
                "https://source.unsplash.com/1600x900/?mansion1", 
                "https://source.unsplash.com/1600x900/?mansion2", 
                "https://source.unsplash.com/1600x900/?mansion3", 
                "https://source.unsplash.com/1600x900/?mansion4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Simple Apartment in New Building',
            address: '5040 No 6 Rd, Richmond, BC',
            map: 'https://goo.gl/maps/zh4QhGtszdEyeiiN7',
            bedrooms: 2,
            price: 120,
            available: true,
            amenities:{
                kitchen:false,
                kitchenAppliances: false,
                laundry:false,
                wifi:false,
                park:true,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'far',
                climate: false,
            },
            images: [
                "https://source.unsplash.com/1600x900/?treehouse", 
                "https://source.unsplash.com/1600x900/?treehouse1", 
                "https://source.unsplash.com/1600x900/?treehouse2", 
                "https://source.unsplash.com/1600x900/?treehouse3", 
                "https://source.unsplash.com/1600x900/?treehouse4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Bright Room Close to Expo Line',
            address: '230 W 4th St, North Vancouver, BC',
            map: 'https://goo.gl/maps/E8PzrZoUZT7M7Kt57',
            bedrooms: 1,
            price: 160,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:true,
                park:false,
                bathroom: 'Shared',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'mid',
                climate: false,
            },
            images: [
                "https://source.unsplash.com/1600x900/?room", 
                "https://source.unsplash.com/1600x900/?room1", 
                "https://source.unsplash.com/1600x900/?room2", 
                "https://source.unsplash.com/1600x900/?room3", 
                "https://source.unsplash.com/1600x900/?room4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Great Spacious Privet House',
            address: '230 W 4th St, North Vancouver, BC',
            map: 'https://goo.gl/maps/E8PzrZoUZT7M7Kt57',
            bedrooms: 1,
            price: 160,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:true,
                park:false,
                bathroom: 'Shared',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'mid',
                climate: false,
            },
            images: [
                "https://source.unsplash.com/1600x900/?room", 
                "https://source.unsplash.com/1600x900/?room1", 
                "https://source.unsplash.com/1600x900/?room2", 
                "https://source.unsplash.com/1600x900/?room3", 
                "https://source.unsplash.com/1600x900/?room4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Gorgeous And Renovated Basement',
            address: '150 E 16th Ave, Vancouver, BC',
            map: 'https://goo.gl/maps/GARbx24dzx6XJs2K9',
            bedrooms: 1,
            price: 130,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:false,
                wifi:true,
                park:false,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'mid',
                climate: false,
            },
            images: [
                "https://source.unsplash.com/1600x900/?condo", 
                "https://source.unsplash.com/1600x900/?condo1", 
                "https://source.unsplash.com/1600x900/?condo2", 
                "https://source.unsplash.com/1600x900/?condo3", 
                "https://source.unsplash.com/1600x900/?condo4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        },{
            id: uuidv4(),
            title: 'Large Private Bedroom for Student',
            address: '230 W 4th St, North Vancouver, BC',
            map: 'https://goo.gl/maps/E8PzrZoUZT7M7Kt57',
            bedrooms: 8,
            price: 1050,
            available: true,
            amenities:{
                kitchen:true,
                kitchenAppliances: true,
                laundry:true,
                wifi:true,
                park:true,
                bathroom: 'Private',
                // Close Range <500m, mid >500 && <2000m, far >2000m ??
                transportation: 'far',
                climate: true,
            },
            images: [
                "https://source.unsplash.com/1600x900/?mansion", 
                "https://source.unsplash.com/1600x900/?mansion1", 
                "https://source.unsplash.com/1600x900/?mansion2", 
                "https://source.unsplash.com/1600x900/?mansion3", 
                "https://source.unsplash.com/1600x900/?mansion4"
            ],
            initialDate: new Date(),
            finalDate: new Date(2021, 11, 17)
        }]
}
