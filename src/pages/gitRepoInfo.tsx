import { useState, useEffect } from 'react';
import Head from "next/head";
import { type NextPage } from "next";
import { Octokit } from '@octokit/core';
import MainHeader from "@/layout/Header.component";
import Footer from "@/layout/Footer.component";
import toast from 'react-hot-toast';

const GitRepoInfo: NextPage = () => {
  const [repoOwner, setRepoOwner] = useState('rcos');
  const [repoName, setRepoName] = useState('soundscape-main-website');
  const [contributors, setContributors] = useState<any[]>([]);
  const [topContributors, setTopContributors] = useState<any[]>([]);
  const [linesAdded, setLinesAdded] = useState(0);
  const [linesDeleted, setLinesDeleted] = useState(0);

  const notifyPageMissing = () => toast('This page is coming soon!');
  const HeaderLinks = [ 'Privacy Policy', /*'How to Contribute' /*'Home', 'Features', 'About', 'Support', 'People', 'News & Features'*/];
  const fetchAllContributors = async (octokit: any, repoOwner: string, repoName: string) => {
    let all_contributors: any[] = [];
    let currentPage = 1;
    const maxPerPage = 100; // maximum allowed by GitHub API

    while (true) {
      const response = await octokit.request(`GET /repos/${repoOwner}/${repoName}/contributors`, {
        owner: repoOwner,
        repo: repoName,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        },
        per_page: maxPerPage,
        page: currentPage
      });

      if (response.status !== 200) {
        console.error('API request failed with status:', response.status);
        break;
      }

      all_contributors = all_contributors.concat(response.data);

      if (response.data.length < maxPerPage) {
        break;
      }

      currentPage++;
    }

    return all_contributors;
  }
    const fetchAllCommits = async (octokit: any, repoOwner: string, repoName: string) => {
      let all_commits: any[] = [];
      let currentPage = 1;
      const maxPerPage = 100; // maximum allowed by GitHub API

      while (true) {
        const response = await octokit.request(`GET /repos/${repoOwner}/${repoName}/commits`, {
          owner: repoOwner,
          repo: repoName,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          },
          per_page: maxPerPage,
          page: currentPage
        });

        if (response.status !== 200) {
          console.error('API request failed with status:', response.status);
          break;
        }

        all_commits = all_commits.concat(response.data);

        if (response.data.length < maxPerPage) {
          break;
        }

        currentPage++;
      }

      return all_commits;
  };
  const fetchRepoInfo = async () => { 

    const octokit = new Octokit({
      auth: process.env.GITHUB_ACCESS_TOKEN,
    })
    // contributors
    try {
      const contributorsData = await fetchAllContributors(octokit, repoOwner, repoName);
      console.log(contributorsData);
      setContributors(contributorsData);
      setTopContributors(contributorsData.slice(0, 10).map(contributor => ({
        ...contributor,
        linesAdded: 0,
        linesDeleted: 0
      })));
    } catch (error) {
      console.error("Error fetching all contributors:", error);
    }
   // commits
    setLinesAdded(0);
    setLinesDeleted(0);

    try {
      const commits = await fetchAllCommits(octokit, repoOwner, repoName);
      
      let tempTopContributors = [...topContributors];  // Make a copy of the current topContributors state

      for (const commit of commits) {
        try {
          const commitResponse = await octokit.request(`GET /repos/${repoOwner}/${repoName}/commits/${commit.sha}`, {
            owner: repoOwner,
            repo: repoName,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          });

          if (commitResponse.status !== 200) {
            console.error('API request for commit failed with status:', commitResponse.status);
            continue; // go to the next iteration of the loop
          }

          const filesChanged = commitResponse.data.stats;
          const contributorLogin = commitResponse.data.author?.login; // Use optional chaining in case "author" is not present

          // Update global lines added and deleted
          setLinesAdded((prev) => prev + filesChanged.additions);
          setLinesDeleted((prev) => prev + filesChanged.deletions);

          // Update the temporary topContributors array
          tempTopContributors = tempTopContributors.map((contributor) => {
            if (contributor.login === contributorLogin) {
              return {
                ...contributor,
                linesAdded: (contributor.linesAdded || 0) + filesChanged.additions,  // Ensure that linesAdded/linesDeleted has default value
                linesDeleted: (contributor.linesDeleted || 0) + filesChanged.deletions,
              };
            }
            return contributor;
          });

        } catch (innerError) {
          console.error(`Error processing commit ${commit.sha}:`, innerError);
        }
      }

      // Update the state once after all processing
      setTopContributors(tempTopContributors);

    } catch (error) {
      console.log('Error fetching commits:', error);
    }

  };

  useEffect(()=>{
      fetchRepoInfo();
  },[])

  return (
    <>
      <Head>
          <title>Soundscape for Everyone</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/Soundscape_Logo.svg" />
      </Head>
      <main className="flex min-h-screen w-full flex-col bg-grey-bg mt-header-gap font-poppins overflow-x-hidden">
        <MainHeader headerLinks={HeaderLinks} notifyPageMissing = {notifyPageMissing}/>
        <div className='px-10 py-10'>
          <div className="flex space-x-4">
              <input
                className="text-xs w-96 border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                type="text"
                value={repoOwner}
                onChange={(e) => setRepoOwner(e.target.value)}
                placeholder="Enter repository owner"
              />
              <input
                className="text-xs w-96 border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                type="text"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
                placeholder="Enter repository name"
              />
              <button
                className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 text-black font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-200"
                onClick={fetchRepoInfo}
              >
                Get Repo Info
              </button>
          </div>

          {/* Display the contributors and top 10 contributors here */}
          <div>
            <h2>Unique Contributors: {contributors.length}</h2>
            <h2>Lines Added: {linesAdded}</h2>
            <h2>Lines Deleted: {linesDeleted}</h2>
            <h2>Top 10 Contributors:</h2>
            <ol className="list-decimal pl-4">
              {topContributors.map((contributor) => (
                <li key={contributor.login}>{contributor.login}</li>
              ))}
            </ol>
          </div>
        </div>
        {contributors ? <>
        <div className="flex flex-col w-full h-auto bg-white py-28 
  tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
          <h2 className="section-title-orange2 w-fit bg-transparent py-2 font-semibold leading-normal text-orange text-features-title">Top Contributors</h2>
          <div className="flex justify-center items-end mb-12 bg-soundscape-blue-bg p-12 rounded-lg">
            {[1, 0, 2].map(index => {
              const contributor = topContributors[index] ?? {};
              return (
                <div key={contributor.login}
                    className={`flex flex-col items-center justify-center 
                                ${index === 0 ? 'w-48 h-48' : 'w-40 h-40'} 
                                mx-6 py-6 rounded-lg shadow-lg relative`}>
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className={`${index === 0 ? 'w-24 h-24' : 'w-20 h-20'} rounded-full mb-2 border-4 border-white`}
                  />
                  <div className={'w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center text-white text-2xl absolute -top-8'}>
                    {index+1}
                  </div>
                  <p className="font-bold text-lg leading-tight text-center text-white">{contributor.login}</p>
                  <p className="text-white text-sm mb-1 text-center">Lines Added: <span className="font-semibold">{contributor.linesAdded}</span></p>
                  <p className="text-white text-sm text-center">Lines Deleted: <span className="font-semibold">{contributor.linesDeleted}</span></p>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col">
            {topContributors.slice(3).map((contributor, index) => (
              <div key={contributor.login} className="flex items-center p-4 mb-4 bg-white shadow-lg rounded-lg">
                <div className={`w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center text-white text-base mr-4`}>
                  {index+4}
                </div>
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-base leading-tight">{contributor.login}</p>
                  <p className="text-gray-600 text-sm mb-1">Lines Added: <span className="font-semibold">{contributor.linesAdded}</span></p>
                  <p className="text-gray-600 text-sm">Lines Deleted: <span className="font-semibold">{contributor.linesDeleted}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full h-auto bg-light-grey-bg py-28 
                    tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
    <div className="flex flex-row flex-wrap w-full h-auto items-center">
        <div className=" flex flex-col desktop:basis-1/2 laptop:basis-full s-laptop:basis-full tablet-basis:full py-12 gap-6">
            <h2 className="section-title-orange2 w-fit bg-transparent py-2 font-semibold leading-normal text-orange text-features-title">Contributors</h2>
            <p className="font-work-sans text-dark-grey text-xl leading-8">Over {linesAdded} lines added and {linesDeleted} deleted !</p>
            <p className="font-work-sans text-dark-grey text-xl leading-8">
                All these amazing contributors made this possible. Come join our community on <a href="https://github.com/rcos/soundscape-main-website" className="underline" >GitHub</a>!
            </p>
            <div className="flex flex-wrap">
                {contributors.map((user) => (
                    <a 
                        key={user.id} 
                        href={user.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ml-[-16px] relative z-10">
                        <img
                            src={user.avatar_url}
                            className="w-16 h-16 rounded-full cursor-pointer border-2 border-light-grey-bg"
                            alt="contributor"
                        />
                    </a>
                ))}
             </div>
            </div>     
          </div>
     </div>

        </>:<></>}
        <Footer headerLinks={HeaderLinks} notifyPageMissing={notifyPageMissing}/>
      </main>
    </>

  );
};

export default GitRepoInfo;
