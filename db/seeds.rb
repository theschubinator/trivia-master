# Admin User
user = User.create(username: 'theschubinator', email: 'andrew.schubert1986@gmail.com', password:'admin')

# Categories
sports = Category.create(name: 'Sports')
history = Category.create(name: 'History')
science = Category.create(name: 'Science')
entertainment = Category.create(name: 'Entertainment')

# Sports Questions
Question.create(
	question: 'Who Won Super Bowl 1?',
	answer: 'Packers',
	incorrect1: 'Chiefs',
	incorrect2: 'Bears',
	incorrect3: 'Jets',
	category: sports,
	user: user
)

Question.create(
	question: 'Who Won Super Bowl 2?',
	answer: 'Packers',
	incorrect1: 'Chiefs',
	incorrect2: 'Bears',
	incorrect3: 'Jets',
	category: sports,
	user: user
)

Question.create(
	question: 'Who Won Super Bowl 3?',
	answer: 'Chiefs',
	incorrect1: 'Packers',
	incorrect2: 'Bears',
	incorrect3: 'Jets',
	category: sports,
	user: user
)

Question.create(
	question: 'What QB wore the number 13?',
	answer: 'Dan Marino',
	incorrect1: 'Brett Favre',
	incorrect2: 'Tom Brady',
	incorrect3: 'Eli Manning',
	category: sports,
	user: user
)

Question.create(
	question: 'Who was the shortest player ever to play in the NBA?',
	answer: 'Muggsy Bogues',
	incorrect1: 'Nate Robinson',
	incorrect2: 'Spud Webb',
	incorrect3: 'Calvin Murphy',
	category: sports,
	user: user 
)

Question.create(
	question: 'What male tennis player has won the most Grand Slam titles?',
	answer: 'Roger Federer',
	incorrect1: 'Novak Djokovic',
	incorrect2: 'Rafael Nadal',
	incorrect3: 'Andre Agassi',
	category: sports,
	user: user
)

Question.create(
	question: 'How many holes are there in a full round of golf?',
	answer: '18',
	incorrect1: '19',
	incorrect2: '9',
	incorrect3: '10',
	category: sports,
	user: user
)

Question.create(
	question: 'What is the regulation height of a basketball hoop?',
	answer: '10 feet',
	incorrect1: '9 feet',
	incorrect2: '11 feet',
	incorrect3: '12 feet',
	category: sports,
	user: user
)

Question.create(
	question: 'Who is the only athlete ever to play in a Super Bowl and a World Series?',
	answer: 'Deion Sanders',
	incorrect1: 'Bo Jackson',
	incorrect2: 'Tom Brady',
	incorrect3: 'John Elway',
	category: sports,
	user: user
)

Question.create(
	question: 'Tiger Woods become a professional golfer in what year?',
	answer: '1996',
	incorrect1: '1999',
	incorrect2: '1997',
	incorrect3: '1998',
	category: sports,
	user: user
)

Question.create(
	question: 'What year was the first Super Bowl?',
	answer: '1967',
	incorrect1: '1965',
	incorrect2: '1964',
	incorrect3: '1969',
	category: sports,
	user: user
)

Question.create(
	question: 'Who was the last MLB player to hit over .400?',
	answer: 'Ted Williams',
	incorrect1: 'Alex Rodriguez',
	incorrect2: 'Ichiro Suzuki',
	incorrect3: 'Ty Cobb',
	category: sports,
	user: user
)

Question.create(
	question: 'What QB was not drafted in the famous 1983 NFL draft?',
	answer: 'Jeff Hostetler',
	incorrect1: 'Dan Marino',
	incorrect2: 'John Elway',
	incorrect3: 'Tony Eason',
	category: sports,
	user: user 
)

Question.create(
	question: 'What number did Derek Jeter wear for the New York Yankees?',
	answer: '2',
	incorrect1: '3',
	incorrect2: '5',
	incorrect3: '12',
	category: sports,
	user: user
)

# History

Question.create(
	question: 'Who was the second president of the USA?',
	answer: 'John Adams',
	incorrect1: 'Thomas Jefferson',
	incorrect2: 'George Washington',
	incorrect3: 'Benjamin Franklin',
	category: history,
	user: user 
)

Question.create(
	question: 'Who was the first US president to declare war?',
	answer: 'James Madison',
	incorrect1: 'Thomas Jefferson',
	incorrect2: 'Abraham Lincoln',
	incorrect3: 'Geroge Washington',
	category: history,
	user: user 
)

Question.create(
	question: 'Who assassinated President Lincoln?',
	answer: 'John Wilkes Booth',
	incorrect1: 'Alexander Hamilton',
	incorrect2: 'Billy the Kid',
	incorrect3: 'Lee Harvey Oswald',
	category: history,
	user: user 
)

Question.create(
	question: 'Who assassinated President Kennedy?',
	answer: 'Lee Harvey Oswald',
	incorrect1: 'John Wilkes Booth',
	incorrect2: 'Alexander Hamilton',
	incorrect3: 'Billy the Kid',
	category: history,
	user: user 
)

Question.create(
	question: 'What was the original capital city of the United States?',
	answer: 'Philadelphia',
	incorrect1: 'Baltimore',
	incorrect2: 'Washington DC',
	incorrect3: 'Boston',
	category: history,
	user: user 
)

Question.create(
	question: 'Who invented the cotton gin in 1793?',
	answer: 'Eli Whitney',
	incorrect1: 'Alexander Graham Bell',
	incorrect2: 'Thomas Edison',
	incorrect3: 'Henry Ford',
	category: history,
	user: user  
)

Question.create(
	question: 'Who was the first person to walk on the moon?',
	answer: 'Neil Armstrong',
	incorrect1: 'Buzz Aldrin',
	incorrect2: 'John Young',
	incorrect3: 'Harrison Schmitt',
	category: history,
	user: user 
)

Question.create(
	question: 'What religion did Joseph Smith create?',
	answer: 'Mormonism',
	incorrect1: 'Christianity',
	incorrect2: 'Islam',
	incorrect3: 'Jehovah Witness',
	category: history,
	user: user  
)

Question.create(
	question: 'Who was the first president that lived in the White House?',
	answer: 'John Adams',
	incorrect1: 'Franklin Roosevelt',
	incorrect2: 'George Washington',
	incorrect3: 'Thomas Jefferson',
	category: history,
	user: user 
)

Question.create(
	question: 'How many U.S. states are needed in order to ratify an amendment into the constitution?',
	answer: '38',
	incorrect1: '40',
	incorrect2: '21',
	incorrect3: '29',
	category: history,
	user: user  
)

Question.create(
	question: 'What was the date of the Pearl Harbor Attack',
	answer: 'December 7, 1941',
	incorrect1: 'December 13, 1941',
	incorrect2: 'December 9, 1941',
	incorrect3: 'December 13, 1942',
	category: history,
	user: user 
)

Question.create(
	question: 'What holiday was first observed on November 11, 1954?',
	answer: 'Veterans Day',
	incorrect1: 'Memorial Day',
	incorrect2: 'Thanksgiving',
	incorrect3: "President's Day",
	category: history,
	user: user 
)

Question.create(
	question: 'What city was buried by Mount Vesuvius in 79 A.D.?',
	answer: 'Pompeii',
	incorrect1: 'Venice',
	incorrect2: 'Florence',
	incorrect3: 'Rome',
	category: history,
	user: user 
)

Question.create(
	question: 'What city was President Kennedy assassinated in?',
	answer: 'Dallas',
	incorrect1: 'Baltimore',
	incorrect2: 'Houston',
	incorrect3: 'Atlanta',
	category: history,
	user: user 
)

# Science

Question.create(
	question: 'What is the symbol for Silver?',
	answer: 'Ag',
	incorrect1: 'Sr',
	incorrect2: 'Be',
	incorrect3: 'Si',
	category: science,
	user: user 
)

Question.create(
	question: 'What is the strongest known magnet in the Universe?',
	answer: 'Neutron Star',
	incorrect1: 'North Pole',
	incorrect2: 'Jupiter',
	incorrect3: 'Moon',
	category: science,
	user: user 
)

Question.create(
	question: 'Which is the hottest planet in the solar system',
	answer: 'Venus',
	incorrect1: 'Mercury',
	incorrect2: 'Jupiter',
	incorrect3: 'Saturn',
	category: science,
	user: user 
)

Question.create(
	question: 'Which is the rarest blood type in humans?',
	answer: 'AB Negative',
	incorrect1: 'AB Positive',
	incorrect2: 'O Negative',
	incorrect3: 'O Positive',
	category: science,
	user: user 
)

Question.create(
	question: 'What causes an Aurora?',
	answer: 'Solar Wind',
	incorrect1: 'Snow Reflection',
	incorrect2: 'Cold Weather',
	incorrect3: 'Sun',
	category: science,
	user: user 
)

Question.create(
	question: 'Which planet is closest to the sun?',
	answer: 'Mercury',
	incorrect1: 'Venus',
	incorrect2: 'Earth',
	incorrect3: 'Pluto',
	category: science,
	user: user 
)

Question.create(
	question: 'What’s the Symbol to iron?',
	answer: 'Fe',
	incorrect1: 'I',
	incorrect2: 'Ir',
	incorrect3: 'Yb',
	category: science,
	user: user  
)

Question.create(
	question: 'Which planet spins the fastest?',
	answer: 'Jupiter',
	incorrect1: 'Earth',
	incorrect2: 'Venus',
	incorrect3: 'Saturn',
	category: science,
	user: user 
)

Question.create(
	question: 'How long does it take for light from the Sun to reach Earth?',
	answer: '8 minutes, 20 seconds',
	incorrect1: '7 minutes 48 seconds',
	incorrect2: '8 minutes, 35 seconds',
	incorrect3: '9 minutes, 24 seconds',
	category: science,
	user: user 
)

Question.create(
	question: 'How many time zones are there in the world?',
	answer: '24',
	incorrect1: '21',
	incorrect2: '16',
	incorrect3: '18',
	category: science,
	user: user 
)

Question.create(
	question: 'Which planet has the most moons?',
	answer: 'Jupiter',
	incorrect1: 'Venus',
	incorrect2: 'Saturn',
	incorrect3: 'Mercury',
	category: science,
	user: user 
)

Question.create(
	question: 'What is a group of whales called?',
	answer: 'Pod',
	incorrect1: 'School',
	incorrect2: 'Herd',
	incorrect3: 'Posse',
	category: science,
	user: user 
)

Question.create(
	question: 'What is the first element on the periodic table?',
	answer: 'Hydrogen',
	incorrect1: 'Hellium',
	incorrect2: 'Oxygen',
	incorrect3: 'Gold',
	category: science,
	user: user 
)

Question.create(
	question: 'At what temperature are Celsius and Fahrenheit equal?',
	answer: '-40 degrees',
	incorrect1: '0 degrees',
	incorrect2: '32 degrees',
	incorrect3: 'They are never equal',
	category: science,
	user: user 
)

# Entertainment

Question.create(
	question: 'In the movie "The Wizard of Oz", what did the Scarecrow want from the wizard?',
	answer: 'Brain',
	incorrect1: 'Heart',
	incorrect2: 'Soul',
	incorrect3: 'Bird',
	category: entertainment,
	user: user 
)

Question.create(
	question: 'In what year was the original "Jurassic Park" film released?',
	answer: '1993',
	incorrect1: '1994',
	incorrect2: '1995',
	incorrect3: '1996',
	category: entertainment,
	user: user 
)

Question.create(
	question: 'Who does the voice over for Dory from "Finding Nemo"?',
	answer: 'Ellen Degeneres',
	incorrect1: 'Meryl Streep',
	incorrect2: 'Emma Stone',
	incorrect3: 'Julia Roberts',
	category: entertainment,
	user: user 
)

Question.create(
	question: 'What fictional city is the home of Batman?',
	answer: 'Gotham City',
	incorrect1: 'Star City',
	incorrect2: 'Central City',
	incorrect3: 'Metropolis',
	category: entertainment,
	user: user 
)

Question.create(
	question: 'What "Alice in Wonderland" character shouted, "off with his head!"?',
	answer: 'Queen of Hearts',
	incorrect1: 'Cheshire Cat',
	incorrect2: 'Mad Hatter',
	incorrect3: 'Alice',
	category: entertainment,
	user: user 
)

Question.create(
	question: 'What school does Harry Potter attend?',
	answer: 'Hogwarts',
	incorrect1: 'Warthog',
	incorrect2: 'Gooseblood',
	incorrect3: 'Pigbutt',
	category: entertainment,
	user: user 
)

Question.create(
	question: 'What was the name of the whale in the 1993 movie, "Free Willy"?',
	answer: 'Keiko',
	incorrect1: 'Shamu',
	incorrect2: 'Tilikum',
	incorrect3: 'Splash',
	category: entertainment,
	user: user 
)

Question.create(
	question: 'What popular movie musical, directed by John Hutson, was released in 1982?',
	answer: 'Annie',
	incorrect1: 'Sound of Music',
	incorrect2: 'West Side Story',
	incorrect3: 'Fiddler on the Roof',
	category: entertainment,
	user: user 
)

Question.create(
	question: 'Which actor played the main character in the 1990 film "Edward Scissorhands"?',
	answer: 'Johnny Depp',
	incorrect1: 'Al Pacino',
	incorrect2: 'Brad Pitt',
	incorrect3: 'Matt Damon',
	category: entertainment,
	user: user 
)

Question.create(
	question: 'What movie did Elvis Presley first appear in?',
	answer: 'Love Me Tender',
	incorrect1: 'Wild In the Country',
	incorrect2: 'Tickle Me',
	incorrect3: 'Girls! Girls! Girls!',
	category: entertainment,
	user: user 
)

Question.create(
	question: 'In the Superman movies what newspaper does Clark Kent Work for?',
	answer: 'The Daily Planet',
	incorrect1: 'Metropolis Globe',
	incorrect2: 'Daily News',
	incorrect3: 'Planet News',
	category: entertainment,
	user: user 
)

Question.create(
	question: 'What color were the slippers in the original Wizard of Oz?',
	answer: 'Silver',
	incorrect1: 'Red',
	incorrect2: 'Purple',
	incorrect3: 'Blue',
	category: entertainment,
	user: user 
)

Question.create(
	question: 'The first movie that was given the title “Blockbuster” was which movie? ',
	answer: 'Jaws',
	incorrect1: 'Star Wars',
	incorrect2: 'Alien',
	incorrect3: 'E.T.',
	category: entertainment,
	user: user 
)

Question.create(
	question: 'What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?',
	answer: ' Frodo Baggins',
	incorrect1: 'Samwise Gamgee',
	incorrect2: 'Meriadoc Brandybuck',
	incorrect3: 'Déagol',
	category: entertainment,
	user: user 
)