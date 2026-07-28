import User from "./User.js";
import Space from "./Space.js";
import Resource from "./Resource.js";
import Booking from "./Booking.js";

/* User -> Booking */

User.hasMany(Booking);
Booking.belongsTo(User);

/* Space -> Booking */

Space.hasMany(Booking);
Booking.belongsTo(Space);

/* Resource -> Booking */

Resource.hasMany(Booking);
Booking.belongsTo(Resource);

export {
  User,
  Space,
  Resource,
  Booking,
};