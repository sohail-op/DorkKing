"use client";
import Image from "next/image";
import React, { useState } from "react";

// import Popup from "reactjs-popup";
// import puppeteer from "puppeteer";

/*
 TODO (upcoming):
   Add feature: create/Remove your own cards (before that add login)
   Link Scraping with Number of link option
*/

function Page() {
  const [url, setUrl] = useState("");

  const boxesData = [
    {
      url: `https://www.google.com/search?q=:${url} intitle:index.of`,
      title: "Directory Listing",
      icon: "/images/directory.png",
    },
    {
      url: `https://www.google.com/search?q=:${url} intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"`,
      title: "Sql Error",
      icon: "/images/sql.png",
    },
    {
      url: `https://www.google.com/search?q=:${url} inurl:login | inurl:signin | intitle:Login | intitle: signin | inurl:auth`,
      title: "Login pages",
      icon: "/images/login.png",
    },
    {
      url: `https://www.google.com/search?q=:${url} ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup`,
      title: "Backup/Old Files",
      icon: "/images/backup.png",
    },
    {
      url: `https://www.google.com/search?q=:${url} ext:sql | ext:dbf | ext:mdb`,
      title: "Database Files",
      icon: "/images/database.png",
    },
    {
      url: `https://www.google.com/search?q=:${url} ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini`,
      title: "Config Files",
      icon: "/images/conf.png",
    },
    {
      url: `https://www.google.com/search?q=:${url} ext:php intitle:phpinfo 'published by the PHP Group'`,
      title: "phpinfo()",
      icon: "/images/php.png",
    },
    {
      url: `https://www.google.com/search?q=:${url}  inurl:shell | inurl:backdoor | inurl:wso | inurl:cmd | shadow | passwd | boot.ini | inurl:backdoor`,
      title: "Find Backdoor",
      icon: "/images/backdoor.png",
    },
    {
      url: `https://www.google.com/search?q=:${url} inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http`,
      title: "Open Redirect",
      icon: "/images/redirect.png",
    },
    {
      url: `https://www.google.com/search?q=:pastebin.com "${url}"`,
      title: "Find in pastebin",
      icon: "/images/pastebin.jpeg",
    },
    {
      url: `https://crt.sh/?q=${url}`,
      title: "Subdomain(crt.sh)",
      icon: "/images/crt.sh.jpeg",
    },
    {
      url: `https://www.google.com/search?q=:${url} inurl:wp-content | inurl:wp-includes`,
      title: "Find WordPress #2",
      icon: "/images/wordpress.png",
    },
    {
      url: `https://www.google.com/search?q=:${url} ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv`,
      title: "Exposed Docs",
      icon: "/images/document.png",
    },
    {
      url: `https://www.google.com/search?q=:atlassian.net | https://www.google.com/search?q=:bitbucket.org "${url}"`,
      title: "Bitbucket/Atlassian",
      icon: "/images/bitbucket.png,",
      // icon: "/images/atlassian.png"
    },
    {
      url: `https://www.google.com/search?q=:stackoverflow.com "${url}"`,
      title: "StackOverFlow",
      icon: "/images/stackoverflow.jpeg",
    },
    {
      url: `https://web.archive.org/cdx/search/cdx?url=*.${url}/*&output=text&fl=original&collapse=urlkey`,
      title: "All Wayback Urls",
      icon: "/images/wayBack.jpeg",
    },
    {
      url: `https://github.com/search?q=%22*.${url}%22&type=repositories`,
      title: "Search in gitub",
      icon: "/images/github.png",
    },
    {
      url: `https://www.openbugbounty.org/search/?search=${url}`,
      title: "OpenBugBounty",
      icon: "/images/openbugbounty.jpeg",
    },
    {
      url: `https://github.com/search?q=inurl:"/.git "${url} -github`,
      title: ".git Folder",
      icon: "/images/",
    },
    {
      url: `https://google.com/search?q=inurl:${url} ext:swf"`,
      title: "Find .swf (Google)",
      icon: "/images/swf.png",
    },
    {
      url: `https://www.google.com/search?q=:.s3.amazonaws.com "${url}"`,
      title: "S3 Buckets",
      icon: "/images/S3.png",
    },
    {
      url: `https://www.shodan.io/search?query=${url}`,
      title: "shodan Search",
      icon: "/images/shodan.jpeg",
    },
    {
      url: `https://www.google.com/search?q=:${url} filetype:wsdl | filetype:WSDL | ext:svc | inurl:wsdl | Filetype: ?wsdl | inurl:asmx?wsdl | inurl:jws?wsdl | intitle:_vti_bin/https://www.google.com/search?q=s.asmx?wsdl | inurl:_vti_bin/https://www.google.com/search?q=s.asmx?wsdl`,
      title: "API(WSDL)",
      icon: "/images/wsdl.png",
    },
    {
      url: `https://www.google.com/search?q=:${url} filetype:config "apache"`,
      title: "Apache Config FIles",
      icon: "/images/apache.png",
    },
    {
      url: `https://www.google.com/search?q=:${url} inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config`,
      title: "Install/Setup Files",
      icon: "/images/setup.png",
    },
    {
      url: `https://www.google.com/search?q=:${url} ext:action | ext:struts | ext:do`,
      title: "Apache Struts RCE",
      icon: "/images/struuts.jpeg",
    },
    {
      url: `https://www.google.com/search?q=:${url} inurl:"/phpinfo.php" | inurl:".htaccess"`,
      title: ".hcaccess/phpinfo()",
      icon: "/images/access.png",
    },
    {
      url: `https://securityheaders.com/?q=${url}&followRedirects=on`,
      title: "Security Headers",
      icon: "/images/headers.png",
    },
    {
      url: `https://gist.github.com/search?q=*.%22${url}%22`,
      title: "GIST github search",
      icon: "/images/github.png",
    },
    {
      url: `https://publicwww.com/webhttps://www.google.com/search?q=s/%22${url}%22/`,
      title: "Source Code PublicWWW",
      icon: "/images/sourcecode.png",
    },
    {
      url: `https://www.google.com/search?q=:github.com | https://www.google.com/search?q=:gitlab.com "${url}"`,
      title: "Search GitLab & Github",
      icon: "/images/gitlab.png,",
      // icon: "/images/github.png,"
    },
    {
      url: `https://web.archive.org/cdx/search?url=${url}/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=urlkey:.*php&limit=100000`,
      title: "Find .php(wayBack)",
      icon: "/images/wayBack.jpeg",
    },
    {
      url: `https://www.google.com/search?q=site:*.${url} -site:www.${url}`,
      title: "Find Subdomains(Google)",
      icon: "/images/subdomains.png",
    },
    {
      url: `https://www.google.com/search?q=:digitaloceanspaces.com "${url}"`,
      title: "Digital Ocean Space",
      icon: "/images/digitalocean.png",
    },
    {
      url: `https://www.google.com/search?q=:*.*.${url}`,
      title: "Sub-Subdomains (Google)",
      icon: "/images/subdomains.png,",
      // icon: "/images/subdomains.png"
    },
  ];
  const Crack = async (link) => {
    console.log(link);
    window.open(link);
  };

  return (
    <div className="w-screen p-5">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="font-black text-4xl py-5">
          <span className="text-[#ff7b00]">D</span>🔥rk
          <span className="text-[#ff7b00]">K</span>ing
        </h1>
        <div className="relative w-full md:w-[700px]">
          <label
            htmlFor="target"
            className="bg-black absolute -top-[7px] left-3 text-[10px]"
          >
            Target URL
          </label>
          <div className="flex w-full">
            <input
              type="text"
              name="target"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              value={url}
              className="bg-transparent rounded-md border px-4 py-1 w-full outline-none focus:border-[#ff2600] border-[#ff7b00]"
              required
            />
            {/* <button
              onClick={Crack}
              className="bg-[#ff7b00] rounded-r-md p-1 text-black w-[110px] md:text-lg text-sm font-bold"
              Crack
            </button> **/}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center flex-wrap items-center pt-5">
        {boxesData?.map((box, index) => {
          return (
            <button
              onClick={() => {
                Crack(box?.url);
              }}
              key={index}
              className="px-4 py-2 flex items-center md:w-auto w-full text-black bg-gray-100 hover:bg-[#fff] trasition-all rounded-md m-3 space-x-2"
            >
              <Image src={box?.icon} width={25} height={25} alt="" />
              <h1 className="font-bold tracking-wide">{box?.title}</h1>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
