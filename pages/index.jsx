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
                points.map(point => <li>{point}</li>)
              }
            </ol>
    </>
  )
}
