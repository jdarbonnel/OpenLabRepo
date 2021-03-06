// messages sent by the bot in response to the user's requests. These can be updated to match your deployment

module.exports = {
  instruct: `**I\'m the RoomRequest Bot!**  I can help you find and book SVP OpenLab rooms in Orange Offices!\n\n 
  * To be guided through the process Type: **book a room**, to get started.\n\n
  * Once you a familiar with the commands you can Type for example: **book a room at FRA tomorrow from 9:00 to 10:00**.\n\n 
  * You will need to know the building ID you want to book a room at. If you don't know it, [click here](https://roomcic.demotogether.com/siteobs.jpg)\n\n 
  * type: **reset** or or **restart** or **cancel** at any time to cancel a request.\n\n 
  * type **support** to join a Spark space to ask questions about this bot\n\n * [click here](https://www.youtube.com/watch?v=uR50kd3JThM) to watch a quick demo video of roomRequest`,

  cancelled: `You current request has been cancelled.`,

  success: `Great! Your room is now booked and you should receive a calendar invite shortly!`,

  error: `Sorry, we ran into an issue booking the room!  This is usually caused by an unknown timezone for your region or your spark email address doesn't match a mailbox on this exchange system. Please type _support_ to join our spark room. Let us know what building you are trying to book a room at and we can fix it.`,
  
  support: `You have been added to the Room Request Spark Space.`
};
