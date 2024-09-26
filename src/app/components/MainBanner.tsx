import React from "react"
import TryForFreeButton from "./TryForFreeButton"
import PersonCard from "./PersonCard"
import AppleIcon from '@mui/icons-material/Apple';
import LanguageIcon from '@mui/icons-material/Language';
import { CheckCircleIcon } from "lucide-react";

export default function MainBanner() {

    const personsData = [
        {
            name: 'Cliff',
            title: 'Speechify Founder',
            verified: true,
            photo: '/person-logos/Cliff.png'
        },
        {
            name: 'Gwyneth',
            title: 'Actress',
            verified: true,
            photo: '/person-logos/Gwyneth.png'
        },
        {
            name: 'Beast',
            title: 'Youtuber',
            verified: true,
            photo: '/person-logos/Beast.png'
        },
        {
            name: 'Snoop',
            title: 'Music Icon',
            verified: true,
            photo: '/person-logos/Snoop.png'
        }

    ]

  return (
    <>
      {/*<!-- Component: One column even layout --> */}
      <section className="bg-black pt-12">
        <div>
            <div className="px-6 text-white">
                <div className="flex flex-col justify-between min-h-[60vh]">
                    <div className="flex flex-col">
                        <div className="text-5xl">
                            CUT YOUR READING TIME IN HALF.
                        </div>
                        <div className="text-5xl">
                            LET SPEECHIFY READ TO YOU.
                        </div>

                        <span className="mt-6">
                            <TryForFreeButton />
                        </span>
                    </div>
                    <div className="pb-12">
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-end">
                                <div className="flex flex-col gap-y-4">
                                    <div className="flex ">
                                        <p>
                                            <AppleIcon />
                                            App of the Day
                                        </p>
                                        <p className="pl-4">
                                            <LanguageIcon />
                                            Chrome Extension of The Year
                                        </p>
                                    </div>
                                    <div className="flex">
                                    <p>
                                    250k+ 5-star reviews

                                        </p>
                                        <p className="pl-4">
                                        30M+ Users

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex justify-end text-slate-500">
                                <CheckCircleIcon fontSize="small" />
                                    <span className="pl-1">

                                        Official Speechify partnership
                                    </span>
                                </div>
                                <div className="flex">
                                    {personsData.map((data, i) => {
                                        return (
                                            <div className="px-2" key={i}>
                                                <PersonCard {...data} />
                                            </div>

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      {/*<!-- End One column even layout --> */}
    </>
  )
}
