interface IProps
{
  id:number;
  instructorName:string;
  description:string;
  rating:number;
  imgUrl:string;
  education:string;
  university:string;
  specialist:string[];
  reviews:string[];
  students:string;
  courses:number;
}
export const InstructorData: IProps[] = [
  {
    id: 2,
    instructorName: "Lisa Green",
    imgUrl: "/imgs/1Z2A5050-qw0mxgpm53x23st7yw80h3uy9znzt7vykmev65qk68.jpg",
    description: "Master Python and Data Science with hands-on projects to boost your skills!",
    rating: 4.8,
    education: 'MSc in Data Science',
    university: 'MIT',
    reviews: [
      "Incredible course! I learned so much about data analysis. Highly recommend! ⭐⭐⭐⭐⭐",
      "The projects were challenging but rewarding. Great for hands-on learning! ⭐⭐⭐⭐⭐",
      "Lisa provides insightful feedback on assignments, which really helped me improve. ⭐⭐⭐⭐",
      "Incredible course! I learned so much about data analysis. Highly recommend! ⭐⭐⭐⭐⭐",
      "The projects were challenging but rewarding. Great for hands-on learning! ⭐⭐⭐⭐⭐",
      "Lisa provides insightful feedback on assignments, which really helped me improve. ⭐⭐⭐⭐",
    ],
    students: '8,1544',
    courses: 86,
    specialist: [
      "Python",
      "Data Science",
      "Machine Learning"
    ]
  },
  {
    id: 3,
    instructorName: "James Smith",
    imgUrl: "/imgs/2019-10-03_NPower_Fall_2019_Harlem_Classes_0260-qw0mxlet3a3hpume7g95bko98x0tvpem99oakjjlb4.jpg",
    description: "Become a Web Developer: Learn HTML, CSS, and JavaScript with real-world projects!",
    rating: 4.6,
    education: 'BSc in Computer Science',
    university: 'Stanford University',
    reviews: [
      "Great course for beginners! I love the hands-on approach. ⭐⭐⭐⭐⭐",
      "The instructor was very engaging and made learning fun! ⭐⭐⭐⭐",
      "I now feel confident to build my own projects. Thank you! ⭐⭐⭐⭐⭐",
      "Great course for beginners! I love the hands-on approach. ⭐⭐⭐⭐⭐",
      "The instructor was very engaging and made learning fun! ⭐⭐⭐⭐",
      "I now feel confident to build my own projects. Thank you! ⭐⭐⭐⭐⭐",
    ],
    students: '10,500',
    courses: 120,
    specialist: [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  },
  {
    id: 4,
    instructorName: "Susan Lee",
    imgUrl: "/imgs/medium-shot-woman-recording-herself.jpeg",
    description: "Unlock the power of React: Build dynamic web applications with ease!",
    rating: 4.7,
    education: 'BSc in Software Engineering',
    university: 'UCB',
    reviews: [
      "Absolutely loved this course! Learned so much about React! ⭐⭐⭐⭐⭐",
      "Everything was explained so well. Highly recommend for anyone looking to learn React. ⭐⭐⭐⭐",
      "Interactive exercises were really helpful. Great course! ⭐⭐⭐⭐⭐",
      "Absolutely loved this course! Learned so much about React! ⭐⭐⭐⭐⭐",
      "Everything was explained so well. Highly recommend for anyone looking to learn React. ⭐⭐⭐⭐",
      "Interactive exercises were really helpful. Great course! ⭐⭐⭐⭐⭐",
    ],
    students: '9,432',
    courses: 75,
    specialist: [
      "ReactJS",
      "Front-end Development"
    ]
  },
  {
    id: 5,
    instructorName: "Robert Brown",
    imgUrl: "/imgs/Classroom07-qw0mxjj4pm0x2mp4iffw6l5c25a3gb75l0dblzmdnk.jpg",
    description: "Dive into Machine Learning and AI with practical examples and projects!",
    rating: 4.9,
    education: 'PhD in Artificial Intelligence',
    university: 'Harvard',
    reviews: [
      "This course exceeded my expectations. Very informative! ⭐⭐⭐⭐⭐",
      "The projects were challenging but rewarding. ⭐⭐⭐⭐⭐",
      "I have a much better understanding of machine learning concepts now. ⭐⭐⭐⭐",
      "This course exceeded my expectations. Very informative! ⭐⭐⭐⭐⭐",
      "The projects were challenging but rewarding. ⭐⭐⭐⭐⭐",
      "I have a much better understanding of machine learning concepts now. ⭐⭐⭐⭐",
    ],
    students: '5,789',
    courses: 50,
    specialist: [
      "Machine Learning",
      "Artificial Intelligence"
    ]
  },
  {
    id: 6,
    instructorName: "Emily Johnson",
    imgUrl: "/imgs/teacher-young-cute-instructor-suit-classrom-with-laptop-whiteboard-standing-by-board_140725-163453.avif",
    description: "Learn Full Stack Development with exciting projects and engaging content!",
    rating: 4.4,
    education: 'BSc in Information Technology',
    university: 'NYU',
    reviews: [
      "Well-structured course that covers everything you need to know. ⭐⭐⭐⭐⭐",
      "The hands-on projects were fantastic! ⭐⭐⭐⭐",
      "Instructor was very helpful with questions. ⭐⭐⭐⭐",
      "Well-structured course that covers everything you need to know. ⭐⭐⭐⭐⭐",
      "The hands-on projects were fantastic! ⭐⭐⭐⭐",
      "Instructor was very helpful with questions. ⭐⭐⭐⭐",
    ],
    students: '6,350',
    courses: 65,
    specialist: [
      "Full Stack Development",
      "Web Applications"
    ]
  },
  {
    id: 7,
    instructorName: "Michael White",
    imgUrl: "/imgs/teacher-smart-instructor-grey-suit-classroom-with-computer-whiteboard-buttoning-suit_140725-163373.avif",
    description: "Explore the world of Cyber Security: Protect data and systems from threats!",
    rating: 4.5,
    education: 'MSc in Cyber Security',
    university: 'UCL',
    reviews: [
      "This course is a must for anyone interested in Cyber Security! ⭐⭐⭐⭐⭐",
      "Great insights and practical knowledge. ⭐⭐⭐⭐⭐",
      "The materials were very detailed and helpful. ⭐⭐⭐⭐",
      "This course is a must for anyone interested in Cyber Security! ⭐⭐⭐⭐⭐",
      "Great insights and practical knowledge. ⭐⭐⭐⭐⭐",
      "The materials were very detailed and helpful. ⭐⭐⭐⭐",
    ],
    students: '4,200',
    courses: 40,
    specialist: [
      "Cyber Security ",
      "Network Security"
    ]
  },
  {
    id: 8,
    instructorName: "Jessica Wilson",
    imgUrl: "/imgs/young-woman-isolated-white-wall-showing-ok-sign-with-fingers_1368-72887.jpg",
    description: "Become an expert in Digital Marketing: Learn concepts and strategies to grow your business!",
    rating: 4.6,
    education: 'BBA in Marketing',
    university: 'Wharton',
    reviews: [
      "This course helped me immensely with my own business! ⭐⭐⭐⭐⭐",
      "The instructor makes complex topics easy to understand. ⭐⭐⭐⭐",
      "Fantastic course with lots of valuable insights. ⭐⭐⭐⭐⭐",
      "This course helped me immensely with my own business! ⭐⭐⭐⭐⭐",
      "The instructor makes complex topics easy to understand. ⭐⭐⭐⭐",
      "Fantastic course with lots of valuable insights. ⭐⭐⭐⭐⭐",
    ],
    students: '3,491',
    courses: 30,
    specialist: [
      "Digital Marketing",
      "SEO",
      "Content Marketing"
    ]
  },
  {
    id: 9,
    instructorName: "David Martinez",
    imgUrl: "/imgs/NPower-220-qw0mxtvcssf2mca3u1wsg0jeldv4szc7afjnw171r4.jpg",
    description: "Learn how to create stunning graphics and designs using Adobe Photoshop!",
    rating: 4.7,
    education: 'BA in Graphic Design',
    university: 'Rhode Island School of Design',
    reviews: [
      "A fantastic introduction to Photoshop! ⭐⭐⭐⭐⭐",
      "David is a great teacher, very engaging. ⭐⭐⭐⭐",
      "Really enjoyed the hands-on projects! ⭐⭐⭐⭐⭐",
      "A fantastic introduction to Photoshop! ⭐⭐⭐⭐⭐",
      "David is a great teacher, very engaging. ⭐⭐⭐⭐",
      "Really enjoyed the hands-on projects! ⭐⭐⭐⭐⭐",
    ],
    students: '2,300',
    courses: 25,
    specialist: [
      "Graphic Design",
      "Photoshop"
    ]
  },
  {
    id: 1,
    instructorName: "Mickel Lucied",
    imgUrl: "/imgs/2-5-how-do-i-apply-block.jpg",
    description: "Master JavaScrip and TypeScrip with hands-on projects to boost your skills!",
    rating: 4.5,
    education: 'Faculty of Computers and Artificial Intelligence',
    university: 'BU',
    reviews: [
      "This course was amazing! I learned so much about JavaScript in a short time. Highly recommended! ⭐⭐⭐⭐⭐",
      "Mohammed explains concepts clearly and provides great examples. I feel confident in my skills now! ⭐⭐⭐⭐",
      "The course materials were comprehensive, and I appreciated the bonus section on Vue JS. Great value! ⭐⭐⭐⭐⭐",
      "This course was amazing! I learned so much about JavaScript in a short time. Highly recommended! ⭐⭐⭐⭐⭐",
      "Mohammed explains concepts clearly and provides great examples. I feel confident in my skills now! ⭐⭐⭐⭐",
      "The course materials were comprehensive, and I appreciated the bonus section on Vue JS. Great value! ⭐⭐⭐⭐⭐",
    ],
    students: '12,3087',
    courses: 156,
    specialist: [
      "JavaScript",
      "ReactJS",
      "TypeScript",
      "NextJS"
    ]
  },
  {
    id: 10,
    instructorName: "Oliver Jones",
    imgUrl: "/imgs/instructor-led-hero.jpg",
    description: "Get started with SQL and database management with this practical course!",
    rating: 4.5,
    education: 'BSc in Computer Science',
    university: 'UCLA',
    reviews: [
      "Simple and straightforward! I enjoyed the course! ⭐⭐⭐⭐⭐",
      "The practice exercises were very helpful. ⭐⭐⭐⭐⭐",
      "Learning SQL has never been easier! ⭐⭐⭐⭐",
      "Simple and straightforward! I enjoyed the course! ⭐⭐⭐⭐⭐",
      "The practice exercises were very helpful. ⭐⭐⭐⭐⭐",
      "Learning SQL has never been easier! ⭐⭐⭐⭐",
    ],
    students: '1,800',
    courses: 15,
    specialist: [
      "SQL",
      "Database Management"
    ]
  }
];
