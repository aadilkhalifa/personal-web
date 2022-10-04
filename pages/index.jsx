import Head from 'next/head'
import '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg w-full bg-slate-100 p-8">
      <div className="wrapper max-w-5xl bg-white min-h-screen my-0 mx-auto drop-shadow-sm flex">
        <div className="left max-w-full w-72 bg-gray-700 text-white">
          left
        </div>
        <div className="right flex-1 p-16">
          <div>
            <h2 className="font-medium text-2xl text-gray-700 uppercase mb-2">Experiences</h2>
            <ExperienceSection
              job_title="Software Development Intern"
              duration="May 2022 – July 2022"
              company_name="GEP Worldwide, Mumbai, India"
              points = {[
                'Worked on enhancements to an SQL engine on .NET framework, retrieving report data from Databricks.',
                'Redesigned and implemented SQL queries to incorporate sub-total, grand-total, pagination for all report types.',
                'Worked on functional and unit testing of implemented features using Postman and UI setup.',
              ]}
            />
            <ExperienceSection
              job_title="App Developer"
              duration="June 2021 - Present"
              company_name="IRIS NITK"
              points = {[
                'IRIS is the student-led UIMS developed for automating all administrative and academic activities.',
                'The IRIS app is developed using Flutter and has over 1K+ downloads and 4.7/5 rating.',
                'Designed and tested UI/UX for several modules, contributed in the development to incorporate responsive design.',
              ]}
            />
            <ExperienceSection
              job_title="Head of Media"
              duration="April 2021 - Present"
              company_name="E-Cell NITK"
              points = {[
                'Oversaw the media and publicity activities, actively improving the engagement and perception of the club.',
                'Researched, planned and executed social media campaigns to improve entrepreneurial awareness on campus.',
                'Helped organize the business and entrepreneurship fest of NITK, with over 1000+ participants.',
              ]}
            />
            <h2 className="font-medium text-2xl text-gray-700 uppercase mt-8 mb-2">Projects</h2>
            <ProjectSection
              title = "COSH NITK Website"
              duration="Dec 2021 - Jan 2022"
              tech="ReactJS, Firebase, Nginx, Git"
              website_link='https://cosh.nitk.ac.in/'
              code_link='https://github.com/COSH-NITK/cosh-website'
              points = {[
                'Designed and developed a web application for university having 100+ monthly visitors.',
                'Collaborated with university faculty and stakeholders to gather requirements and plan process.',
                'Built the application with ReactJS as the frontend and Firestore Firebase as datasource.',
                'Integrated the application with Ghost blogging CMS and Twitter APIs.',
                'Deployed the entire project on a container running Nginix, and worked on Search Engine Optimisation.'
              ]}
            />
            <ProjectSection
              title = "Virtual Try On"
              duration="Mar 2022 - Apr 2022"
              tech="Flutter, Flask, Snapchat Lens, Blender, Unity, Git"
              code_link='https://github.com/aadilkhalifa/virtual-try-on'
              points = {[
                'Developed a mobile application that helps users measure shoe size and try on footwear using AR.',
                'Explored image processing techniques to measure shoe size from a single image given a known reference object.',
                'Worked on creating and integrating Snapchat filters using Snapchat lens to allow users try on footware using AR.',
                'Added a feedback module to the app and performed user and usability testing of the app.',
              ]}
            />
            <ProjectSection
              title = "Crop Prediction"
              duration="Nov 2021 - Dec 2021"
              tech="ReactJS, Flask, Python, Git"
              code_link='https://github.com/aadilkhalifa/crop-prediction'
              points = {[
                'Developed an application to help farmers get a crop/fertilizer recommendation based on soil and location details',
                'Explored and analysed several machine learning algorithms to generate best recommendation model.',
                'Integrated with Mapbox API & OpenWeatherMap API to get additional details that is input to the model.',
              ]}
            />
            <h2 className="font-medium text-2xl text-gray-700 uppercase mt-8 mb-2">Published Papers</h2>
            <PaperSection
              title='Smart Traffic Management System Using Multithreading and IPC'
              duration = 'Jul 2021'
              paper_link = 'https://ieeexplore.ieee.org/document/9579506'
              points = {[
                'Developed a novel algorithm to help reduce the traffic congestion at intersections based on vehicle density.',
                'Implemented traffic visualisation to test and record static waiting time for vehicles.',
                'Designed and developed an interface for users to view traffic information and suggest best route.',
                'Analysed compared our algorithm with traditional algorithm and found a 23% decrease in average wait time.',
              ]}
            />
            <h2 className="font-medium text-2xl text-gray-700 uppercase mt-8 mb-2">Technical Skills</h2>
            <h3 className="flex-1 text-md text-gray-700 font-medium mt-2">Languages</h3>
            <p className="text-gray-600 text-sm">Python • C/C++ • SQL • JavaScript • HTML/CSS • C# • Dart</p>
            <h3 className="flex-1 text-md text-gray-700 font-medium mt-2">Frameworks</h3>
            <p className="text-gray-600 text-sm">React • Node.js • Express • Flask • Flutter • ASP.NET</p>
            <h3 className="flex-1 text-md text-gray-700 font-medium mt-2">Developer Tools</h3>
            <p className="text-gray-600 text-sm">Git • Docker • VS Code • Visual Studio</p>
            <h3 className="flex-1 text-md text-gray-700 font-medium mt-2">Libraries</h3>
            <p className="text-gray-600 text-sm">Tailwind • Pandas • NumPy • Matplotlib</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ExperienceSection({job_title, company_name, duration, points}){
  return (
    <>
    <div className="flex mt-4">
              <h3 className="flex-1 text-md text-gray-700 font-medium">{job_title}</h3>
              <p className="text-md text-gray-400 text-sm">{duration}</p>
            </div>
            <h4 className="text-gray-400 text-sm">{company_name}</h4>
            <ol className="pl-10   list-disc text-gray-600 text-sm mt-2">
              {
                points.map((point, i) => <li key={i}>{point}</li>)
              }
            </ol>
    </>
  )
}
function ProjectSection({title, duration, tech, website_link, code_link, points}){
  return (
    <>
      <div className="flex mt-4 justify-between">
          <h3 className="text-md text-gray-700 font-medium">{title}</h3>
          <p className="text-md text-gray-400 text-sm">{duration}</p>
      </div>
      <div className="flex justify-between">
        <h4 className="text-gray-400 text-sm">{tech}</h4>
        <span>
          {
            website_link
            ? <a href="https://cosh.nitk.ac.in/" className="text-gray-400 text-sm underline ml-2">Website link</a>
            : null
          }
          {
            code_link
            ? <a href="https://github.com/COSH-NITK/cosh-website" className="text-gray-400 text-sm underline ml-2">Code link</a>
            : null
          }
        </span>
      </div>
      <ol className="pl-10 list-disc text-gray-600 text-sm mt-2">
        {
          points.map((point, i) => <li key={i}>{point}</li>)
        }
      </ol>
    </>
  )
}
function PaperSection({title, duration, tech, paper_link, points}){
  return (
    <>
      <div className="flex mt-4 justify-between">
          <h3 className="text-md text-gray-700 font-medium">{title}</h3>
          <p className="text-md text-gray-400 text-sm">{duration}</p>
      </div>
      <div className="flex justify-between">
        <h4 className="text-gray-400 text-sm">{tech}</h4>
        <span>
          {
            paper_link
            ? <a href="https://cosh.nitk.ac.in/" className="text-gray-400 text-sm underline ml-2">Paper link</a>
            : null
          }
        </span>
      </div>
      <ol className="pl-10   list-disc text-gray-600 text-sm mt-2">
        {
          points.map((point, i) => <li key={i}>{point}</li>)
        }
      </ol>
    </>
  )
}
