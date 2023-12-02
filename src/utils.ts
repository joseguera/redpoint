import rating from './images/rating_stars.svg';
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

interface UserEntry {
    name: string; 
    location: string; 
    image: string; 
    rating: string; 
    reviewDate: string;
    notes: string;
    reviewPost: string;
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
    { name: "Rui", location: "2 years on Airbnb", image: rui, rating: rating, reviewDate: "January 2023", notes: "", reviewPost: "It is a lovely place to stay if you are exploring Joshua Tree, especially if you are climbers!!!!! They provided 2 free, like new big crash pads, also has tension hanging board in living room, so great for morning finger warm up. The back yard is big, it's great to stay outside enjoying the night view (tons of stars, you can even see galaxies in late night). They have a double bed in the backyard, you can actually lying on the bed and staring at the night sky, so relaxing.<br />Well designed and clean room, very comfortable bed. Kitchen has equipped everything we need. Very easy to communicate with clear instructions. We will definitely come back next time if we are back in Joshua Tree." },
    { name: "Mary", location: "Inglewood, California", image: mary, rating: rating, reviewDate: "January 2023", notes: "Stayed with kids", reviewPost: "Amazing place! I absolutely loved the open concept layout. The yard was beautiful and location was great. Everything about this home was well thought out. It is great place to hang and unwind. My kids loved this place. I will definitely be back. :)" },
    { name: "Annie", location: "Los Angeles, California", image: annie, rating: rating, reviewDate: "January 2023", notes: "", reviewPost: "Very communicative host, house was very clean. Bedrooms are decent size and bathrooms seem newly renovated. Thank you!" },
    { name: "Ashwin", location: "3 years on Airbnb", image: ashwin, rating: rating, reviewDate: "December 2022", notes: "", reviewPost: "This airbnb was probably the best equipped of all the airbnb's I've ever stayed at. I wish I had the time to enjoy the massive backyard and all the equipment in the garage (they even have crash pads available). The house was well appointed with probably the most well stocked kitchen. While we had a couple challenges getting into the house initially, the host was super responsive and we were able to resolve that issue shortly. In addition, the host went above and beyond in retrieving and shipping us an item that we accidentally discarded. Overall, an absolutely fantastic experience!" },
];
