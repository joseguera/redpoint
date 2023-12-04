// USER PICTURES
import rating from './images/rating_stars.svg';
import rating_4_stars from './images/rating_4_stars.svg';
import olivia from './images/user-avatars/olivia.png';
import venkata from './images/user-avatars/venkata.png';
import yifan from './images/user-avatars/yifan.png';
import junjie from './images/user-avatars/junjie.png';
import j from './images/user-avatars/J.png';
import xochilth from './images/user-avatars/xochilth.png';
import meghan from './images/user-avatars/meghan.png';
import jake from './images/user-avatars/jake.png';
import regina from './images/user-avatars/regina.png';
import rishi from './images/user-avatars/rishi.png';
import justin from './images/user-avatars/justin.png';
import aimee from './images/user-avatars/aimee.png';
import rui from './images/user-avatars/rui.png';
import mary from './images/user-avatars/mary.png';
import annie from './images/user-avatars/annie.png';
import ashwin from './images/user-avatars/ashwin.png';

// ATTRACTION PICTURES
import desert_hills1 from './images/attractions-images/00-desert-hills-premium-outlets-01.png';
import desert_hills2 from './images/attractions-images/00-desert-hills-premium-outlets-02.png';
import pioneertown1 from './images/attractions-images/01-pioneertown1.png';
import pioneertown2 from './images/attractions-images/01-pioneertown2.png';
import sky1 from './images/attractions-images/02-sky1.png';
import sky2 from './images/attractions-images/02-sky2.png';
import big_morongo1 from './images/attractions-images/03-bigmorongo1.png';
import big_morongo2 from './images/attractions-images/03-bigmorongo2.png';
import joshua_tree1 from './images/attractions-images/04-joshua1.png';
import joshua_tree2 from './images/attractions-images/04-joshua2.png';
import mission_creek1 from './images/attractions-images/05-missioncreek1.png';
import mission_creek2 from './images/attractions-images/05-missioncreek2.png';
import whitewater1 from './images/attractions-images/06-whitewaterpreserve1.png';
import whitewater2 from './images/attractions-images/06-whitewaterpreserve2.png';

// SCORES PICTURES
import cleanliness from "./images/icons/clean_svgrepo.com.svg";
import accuracy from "./images/icons/fact-check_svgrepo.com.svg";
import check_in from "./images/icons/key-alt_svgrepo.com.svg";
import communication from "./images/icons/communication-bubble-chat-comment-talk-speech-icon_svgrepo.com.svg";
import location from "./images/icons/location-pin_svgrepo.com.svg";
import value from "./images/icons/price-tag-price_svgrepo.com.svg";

// FEATURES PICTURES
import hair_dryer from './images/icons/hair-dryer_svgrepo.com.svg';
import shampoo from './images/icons/shampoo_svgrepo.com.svg';
import hot_water from './images/icons/bath-and-shower_svgrepo.com.svg';
import washer from "./images/icons/washing-machine_svgrepo.com.svg";
import dryer from "./images/icons/washing-machine_svgrepo.com-1.svg";
import essentials from './images/icons/toilet-paper-dots_svgrepo.com.svg';
import hangers from './images/icons/hanger_svgrepo.com.svg';
import bed_linens from './images/icons/toilet-paper-dots_svgrepo.com.svg';
import pillow from './images/icons/bed-bold_svgrepo.com.svg';
import iron from './images/icons/iron_svgrepo.com.svg';
import entrance from './images/icons/door-closed_svgrepo.com.svg'
import patio from './images/icons/patio_svgrepo.com.svg'
import backyard from './images/icons/flower-heart_svgrepo.com.svg'
import bbq from './images/icons/grill_svgrepo.com.svg'
import parking from './images/icons/car_svgrepo.com.svg'
import kitchen from './images/icons/kitchen-pack-spoon_svgrepo.com.svg'
import refrigerator from './images/icons/refrigerator-round-695_svgrepo.com.svg'
import microwave from './images/icons/microwave_svgrepo.com.svg'
import cooking from './images/icons/spatula_svgrepo.com.svg'
import dishes from './images/icons/dishes-plate_svgrepo.com.svg'
import dishwasher from './images/icons/dishwasher_svgrepo.com.svg'
import stove from './images/icons/stove_svgrepo.com.svg'
import oven from './images/icons/oven_svgrepo.com.svg'
import coffee from './images/icons/coffee-maker_svgrepo.com.svg'
import security from './images/icons/security-camera-cctv_svgrepo.com.svg'
import smoke from './images/icons/smoke-alarm_svgrepo.com.svg'
import carbon from './images/icons/fire-alarm_svgrepo.com.svg'
import extinguisher from './images/icons/fire-extinguisher-safety_svgrepo.com.svg'
import first_aid from './images/icons/first-aid-kit_svgrepo.com.svg'
import wifi from './images/icons/wifi_svgrepo.com.svg'
import workspace from './images/icons/desk_svgrepo.com.svg'
import tv from './images/icons/tv-alt_svgrepo.com.svg';
import fireplace from './images/icons/fireplace-heating_svgrepo.com.svg';
import air_conditioning from './images/icons/air-conditioning_svgrepo.com.svg';
import indoor_fireplace from './images/icons/fireplace_svgrepo.com.svg';
import heating from './images/icons/temperature-arrow-up_svgrepo.com.svg';


interface UserEntry {
    name: string; 
    location: string; 
    image: string; 
    rating: string; 
    reviewDate: string;
    notes: string;
    reviewPost: string;
}

interface Attraction {
    id: number;
    type: string;
    name: string; 
    location: string;
    description: string;
    images: string[];
}

interface Score {
    icon: string; 
    category: string; 
    rating: number;
}

interface Feature {
    icon: string; 
    category: string; 
}

interface Rating {
    ratingCategory: number;
    ratingTotal: string;
}

export const userReviews: UserEntry[] = [
    { name: "Olivia", location: "Los Angeles, United States", image: olivia, notes: "", rating: rating, reviewDate: "October 2023", reviewPost: "Great place to stay in Yucca Valley! We only stayed one night but would definitely come back for more. The house is very spacious and the yard even more. It has everything you need and is very clean. The surroundings are beautiful and really quiet. The hosts are also very accommodating and communicative!" },
    { name: "Venkata Sai Jyothi Swaroop", location: "1 year on Airbnb", image: venkata, rating: rating, reviewDate: "September 2023", notes: "Group Trip", reviewPost: "It is a great place to stay and Daisy was so helpful. Everything that has to be in a home for use are available in their house." },
    { name: "Yifan", location: "El Cerrito, California", image: yifan, rating: rating, reviewDate: "August 2023", notes: "", reviewPost: "Very close to Joshua Tree National Park while the place remains away from noisy traffic and tourist. A great place to enjoy. The room is very clean and organized. Responsive host." },
    { name: "Junjie", location: "1 year on Airbnb", image: junjie, rating: rating, reviewDate: "August 2023", notes: "", reviewPost: "Very lovely place to stay. Large backyard and lots of amenities. Spent two nights and had unforgettable experiences." },
    { name: "Jaren", location: "7 months on Airbnb", image: j, rating: rating, reviewDate: "April 2023", notes: "", reviewPost: "Super relaxing stay, beautiful surroundings. Definitely would come again and recommend to friends." },
    { name: "Xochilth", location: "Tampa, Florida", image: xochilth, rating: rating, reviewDate: "April 2023", notes: "", reviewPost: "Thank you for the stay!" },
    { name: "Meghan", location: "Los Angeles, California", image: meghan, rating: rating, reviewDate: "April 2023", notes: "", reviewPost: "I stayed here with a friend for an extended weekend trip, and we loved it! Everything was clean, the house had wonderful amenities, and the location was beautiful! Would absolutely go back." },
    { name: "Jake", location: "Madison, Wisconsin", image: jake, rating: rating, reviewDate: "April 2023", notes: "", reviewPost: "Nice place to stay. Close to Joshua tree. It's been renovated recently and the back yard is really cool. Would stay again." },
    { name: "Joseph", location: "Marana, Arizona", image: j, rating: rating, reviewDate: "March 2023", notes: "Stayed with kids", reviewPost: "We very much enjoyed our stay here, it was clean and the entire process was smooth. Also, the price was a great deal." },
    { name: "Regina", location: "Los Angeles, California", image: regina, rating: rating, reviewDate: "March 2023", notes: "", reviewPost: "Daisy was extremely kind and accommodating for our brief stay. The backyard was the selling point for us as we spent most of the day lounging around on the hammock swings and daybed. She was very responsive and the entire check in and check out process was very smooth. Very quiet neighborhood and lots of privacy. Would definitely stay here again." },
    { name: "Rishi", location: "Orange, California", image: rishi, rating: rating, reviewDate: "March 2023", notes: "Group trip", reviewPost: "Daisy was extremely helpful with the check-in/check-out instructions, provided great recommendations, and was very responsive throughout our stay. The house is huge with a massive backyard with a fire-pit. Great place to star-gaze, and hand out with your friends and family." },
    { name: "Justin", location: "Santa Barbara, California", image: justin, rating: rating, reviewDate: "February 2023", notes: "Group trip", reviewPost: "Only a short drive to the park entrance, this listing was a fantastic place to stay for a quick trip to Joshua Tree. The space was exactly as seen in the photos, the backyard and kitchen were beautiful. The host team was responsive and gave clear, easy instructions for check-in and check-out. I would highly recommend." },
    { name: "Aimee", location: "9 months on Airbnb", image: aimee, rating: rating, reviewDate: "February 2023", notes: "", reviewPost: "The second time I came to the desert, the house felt very good, and the host was very thoughtful at first glance.Thinking about all our needs, especially the queen bed in the yard, where you can lie in the yard and watch the stars.It's so beautiful, definitely worth the trip, we'll introduce our friends to try it out." },
    { name: "Rui", location: "2 years on Airbnb", image: rui, rating: rating, reviewDate: "January 2023", notes: "", reviewPost: "It is a lovely place to stay if you are exploring Joshua Tree, especially if you are climbers!!!!! They provided 2 free, like new big crash pads, also has tension hanging board in living room, so great for morning finger warm up. The back yard is big, it's great to stay outside enjoying the night view (tons of stars, you can even see galaxies in late night). They have a double bed in the backyard, you can actually lying on the bed and staring at the night sky, so relaxing. Well designed and clean room, very comfortable bed. Kitchen has equipped everything we need. Very easy to communicate with clear instructions. We will definitely come back next time if we are back in Joshua Tree." },
    { name: "Mary", location: "Inglewood, California", image: mary, rating: rating, reviewDate: "January 2023", notes: "Stayed with kids", reviewPost: "Amazing place! I absolutely loved the open concept layout. The yard was beautiful and location was great. Everything about this home was well thought out. It is great place to hang and unwind. My kids loved this place. I will definitely be back. :)" },
    { name: "Annie", location: "Los Angeles, California", image: annie, rating: rating_4_stars, reviewDate: "January 2023", notes: "", reviewPost: "Very communicative host, house was very clean. Bedrooms are decent size and bathrooms seem newly renovated. Thank you!" },
    { name: "Ashwin", location: "3 years on Airbnb", image: ashwin, rating: rating, reviewDate: "December 2022", notes: "", reviewPost: "This airbnb was probably the best equipped of all the airbnb's I've ever stayed at. I wish I had the time to enjoy the massive backyard and all the equipment in the garage (they even have crash pads available). The house was well appointed with probably the most well stocked kitchen. While we had a couple challenges getting into the house initially, the host was super responsive and we were able to resolve that issue shortly. In addition, the host went above and beyond in retrieving and shipping us an item that we accidentally discarded. Overall, an absolutely fantastic experience!" },
];

export const attractions: Attraction[] = [
    { id: 1, type: "shopping", name: "Desert Hills Premium Outlets", location: "33 mi (53 km) from Redpoint", description: "Desert Hills Premium Outlets® is home to the largest collection of luxury outlets in California. The outdoor shopping center features 180 designer stores including Alexander McQueen, Burberry, Coach, Gucci, Kate Spade New York, Prada, Fendi, Saint Laurent Paris and many more. There are several dining options at Desert Hills Premium Outlets such as Blaze Pizza, Five Guys Burgers & Fries, and Panda Express.", images: [desert_hills1, desert_hills2] },
    { id: 2, type: "attractions", name: "Pioneertown Mountains Preserve", location: "10 mi (16 km) from Redpoint", description: "The 25,500-acre Pioneertown Mountains Preserve descends from the high piney 7,800-foot ridges into the Pioneertown Valley. The small community of Pioneertown is surrounded by conservancy-owned volcanic mesas, the Sawtooth Mountains, and Preserve lands leading to the San Bernardino National Forest. The Preserve has year-round riparian corridors in Pipes Canyon and Little Morongo Canyons. It is an important landscape linkage between Joshua Tree National Park, San Bernardino National Forest, and the Big Horn BLM Wilderness.", images: [pioneertown1, pioneertown2] },
    { id: 3, type: "attractions", name: "Sky's the Limit Observatory and Nature Center", location: "27 mi (43.5 km) from Redpoint", description: "Sky's The Limit is a non-profit organization dedicated to providing hands-on learning opportunities for the people of and visitors to the Joshua Tree Gateway Communities. We provide a place where the honest pursuit of knowledge enriches the lives of all willing to participate, whether to view the smallest objects on the Earth, or observe the colossal displays in the sky.", images: [sky1, sky2] },
    { id: 4, type: "attractions", name: "Big Morongo Canyon Preserve", location: "10 mi (16.3 km) from Redpoint", description: "Nestled in the Little San Bernardino Mountains, the desert oasis at Big Morongo Canyon is one of the 10 largest cottonwood and willow riparian (stream) habitats in California. Water draining from the surrounding mountains flows into a river through the canyon, and ground water rises up along the Morongo fault to form the marsh habitat, which is a great attractor for wildlife.", images: [big_morongo1, big_morongo2] },
    { id: 5, type: "attractions", name: "Joshua Tree National Park", location: "11mi (17.7 km) from Redpoint", description: "Joshua Tree National Park is open year-round. There are few facilities within the park's approximately 800,000 acres, making Joshua Tree a true desert wilderness just a few hours outside Los Angeles, San Diego, Las Vegas, and Phoenix. About 2.8 million visitors come to the park each year to enjoy activities such as hiking, camping, photography, rock climbing, and simply enjoying the serene desert scenery. You have lots of things to do out here: backpacking, biking, birding, climbing, slacklining, hiking, horseback riding, photography, ranger-guided activities, stargazing, and wildflower viewing.<br /><br />The top 3 Filming locations in Joshua Tree, CA right now are Lucious Cactus Gardens with Huge Boulders & valley, Straw bale house in the desert with views and SPACE AGE 1974 AURORA. Movies have been filmed in Joshua Tree National Park: Seven Psychopaths (2012), The Big Year (2011), A Lot Like Love (2005), The Satan Bug (1965), Road Rules (1995-2007), Zombie Nation (2004), BlackBoxTV (2010-2015), Ghost Ship (1992).", images: [joshua_tree1, joshua_tree2] },
    { id: 6, type: "attractions", name: "Mission Creek Preserve", location: "18 mi (28.6 km) from Redpoint", description: "Located in a transition zone between the Sonoran and Mojave deserts, the 4,760-acre Mission Creek Preserve has a rich species composition with flora and fauna representing both deserts. Visitors are surprised to discover the center of the Preserve is a lush wetland with a backdrop of eroded painted hills and Mount San Gorgonio looming in the background. The wetlands are important habitat for the endangered least Bell's vireo and southwest willow flycatcher. It is a great place to spot colorful summer tanagers and vermillion flycatchers. The Preserve hosts deer, bear, big horn sheep and mountain lions, and has spectacular displays of spring wildflowers in wet years. The trail system leads onto the Pacific Crest Trail, which is two miles from the Stone House Group Campground.", images: [mission_creek1, mission_creek2] },
    { id: 7, type: "attractions", name: "Whitewater Preserve", location: "28 mi (45 km) from Redpoint", description: "Whitewater Preserve is 2,851 acres surrounded by the Bureau of Land Management's San Gorgonio Wilderness and includes the year-round Whitewater River. Rich riparian habitat hosts the endangered southwestern willow flycatcher and least Bell's vireo, and provides opportunity to see migrating summer tanagers and vermilion flycatchers. The canyon has a robust population of bighorn sheep, deer and bear, and is an important wildlife corridor between the San Bernardino and San Jacinto Mountains. The Wildlands Conservancy purchased an additional 3,200 acres in the Whitewater corridor that were donated to the Bureau of Land Management. These donated lands include sand dunes that are home to the endangered fringe-toed lizard at Windy Point, which lies at the confluence of the Whitewater and San Gorgonio Rivers.", images: [whitewater1, whitewater2] }
]

export const scores: Score[] = [
    { icon: cleanliness, category: "Cleanliness", rating: 4.9 },
    { icon: accuracy, category: "Accuracy", rating: 5.0 },
    { icon: check_in, category: "Check-in", rating: 4.9 },
    { icon: communication, category: "Communication", rating: 5.0 },
    { icon: location, category: "Location", rating: 4.9 },
    { icon: value, category: "Value", rating: 4.9 }
];

export const overallRatings: Rating[] = [
    { ratingCategory: 5, ratingTotal: "w-11/12"  },
    { ratingCategory: 4, ratingTotal: "w-1/12"  },
    { ratingCategory: 3, ratingTotal: "w-0"  },
    { ratingCategory: 2, ratingTotal: "w-0"  },
    { ratingCategory: 1, ratingTotal: "w-0"  },
  ];

// Bathroom
export const bathroomFeatures: Feature[] = [
    { icon: hair_dryer, category: "Hair Dryer" },
    { icon: shampoo, category: "Shampoo" },
    { icon: hot_water, category: "Hot Water" }
];

// Bedroom and laundry
export const bedroomLaundryFeatures: Feature[] = [
    { icon: washer, category: "Washer" },
    { icon: dryer, category: "Dryer" },
    { icon: essentials, category: "Essentials" },
    { icon: hangers, category: "Hangers" },
    { icon: bed_linens, category: "Bed linens" },
    { icon: pillow, category: "Extra pillows and blankets" },
    { icon: iron, category: "iron" }
];

// Entertainment
export const entertainmentFeatures: Feature[] = [
    { icon: tv, category: "TV" },
];

// Family
export const familyFeatures: Feature[] = [
    { icon: fireplace, category: "Fireplace guards" },
];

// Heating and cooling
export const heatingCoolingFeatures: Feature[] = [
    { icon: air_conditioning, category: "Air conditioning" },
    { icon: indoor_fireplace, category: "Indoor fireplace" },
    { icon: heating, category: "Heating" }
];

// Home safety
export const homeSafetyFeatures: Feature[] = [
    { icon: security, category: "Security cameras on property" },
    { icon: smoke, category: "Smoke alarm" },
    { icon: carbon, category: "Carbon monoxide alarm" },
    { icon: extinguisher, category: "Fire extinguisher" },
    { icon: first_aid, category: "First aid kit" }
];

// Internet and office
export const internetOfficeFeatures: Feature[] = [
    { icon: wifi, category: "Wifi" },
    { icon: workspace, category: "Dedicated workspace" }

];

// Kitchen and dining
export const kitchenDiningFeatures: Feature[] = [
    { icon: kitchen, category: "Kitchen" },
    { icon: refrigerator, category: "Refrigerator" },
    { icon: microwave, category: "Microwave" },
    { icon: cooking, category: "Cooking basics" },
    { icon: dishes, category: "Dishes and silverware" },
    { icon: dishwasher, category: "Dishwasher" },
    { icon: stove, category: "Stove" },
    { icon: oven, category: "Oven" },
    { icon: coffee, category: "Coffee maker" }
];

// Location features
export const locationFeatures: Feature[] = [
    { icon: entrance, category: "Private entrance" },
];

// Outdoor
export const outdoorFeatures: Feature[] = [
    { icon: patio, category: "Patio or balcony" },
    { icon: backyard, category: "Backyard" },
    { icon: bbq, category: "BBQ grill" }
];

// Parking and facilities
export const parkingFeatures: Feature[] = [
    { icon: parking, category: "Free parking on premises" },
];
