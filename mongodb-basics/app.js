const mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb+srv://nimeshkavindakarunasinghe:${process.env.cluter_password}@cluster0.2sainqy.mongodb.net/`
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// create a user schema

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// create a user model

const User = mongoose.model('User', userSchema);

// await function for create a new user (Run query examples inside this function)

async function runQueryExamples() {
  try {
    // const newUser = await User.create({
    //   name: 'Tavis Head',
    //   email: 'tarvis@gmail.com',
    //   age: 55,
    //   isActive: true,
    //   tags: ['developer', 'nodejs'],
    // });
    // const newUser = new User({
    //   name: 'Kavinda Karunasinghe',
    //   email: 'kavi@gmail.com',
    //   age: 26,
    //   isActive: true,
    //   tags: ['se', 'manager'],
    // });
    // await newUser.save();
    // console.log('New User Created:', newUser);
    // const allUsers = await User.find({});
    // console.log('All Users:', allUsers);
    // const getUserOfActiveFalse = await User.find({ isActive: false });
    // console.log('Users with isActive false:', getUserOfActiveFalse);
    // const getPathumUser = await User.findOne({ name: 'Pathum Nissanka' });
    // console.log('User with name Pathum Nissanka:', getPathumUser);
    // const getLastCreatedUserByUserId = await User.findById(newUser._id);
    // console.log('User with specific ID:', getLastCreatedUserByUserId);
    // const selectedFieldsUsers = await User.find().select('name email -_id');
    // console.log(
    //   'Users with selected fields (name and email):',
    //   selectedFieldsUsers
    // );
    // const limitedUsers = await User.find().limit(2).skip(1);
    // console.log('Limited Users (5 users, skip 1):', limitedUsers);
    // const sortedUsers = await User.find().sort({ age: -1 });
    // console.log('Users sorted by age (descending):', sortedUsers);
    // const countDocuments = await User.countDocuments({ isActive: false });
    // console.log('Count of users with isActive false:', countDocuments);
  } catch (error) {
    console.error('Error running query examples:', error);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
