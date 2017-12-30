
// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friendArray = [
 
  {
    friendname: "Brown Bird",
    friendphoto: "http://cdn.skim.gs/image/upload/v1456342058/msi/buff-orpington-hen_dy7ikq.jpg",
    scores: [
    "5",
    "1",
    "4",
    "4",
    "5",
    "1",
    "2",
    "5",
    "4",
    "1"
    ]
    },

    {
      friendname: "Green Caterpillar",
      friendphoto: "https://usercontent1.hubstatic.com/12484636_f520.jpg",
      scores: [
      "5",
      "1",
      "1",
      "4",
      "2",
      "5",
      "1",
      "4",
      "3",
      "2"
      ]
      },

      {
        friendname: "Laughing Zebra",
        friendphoto: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/Q-Z/zebra-herd.ngsversion.1396530732836.adapt.1900.1.jpg",
        scores: [
        "2",
        "4",
        "3",
        "2",
        "1",
        "4",
        "5",
        "2",
        "4",
        "1"
        ]
        }
];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;