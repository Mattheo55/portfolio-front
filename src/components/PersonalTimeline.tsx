import React from 'react'
import { Timeline, TimelineContent, TimelineDate, TimelineHeader, TimelineIndicator, TimelineItem, TimelineSeparator, TimelineTitle } from './reui/timeline'
import { timelineMock } from '@/mocks/timeline_mocks'

export default function PersonalTimeline() {
  return (
    <Timeline defaultValue={4} className="w-full max-w-md">
        {
            timelineMock.map((item) => (
                <TimelineItem step={item.order} key={item.id}>
                    <TimelineHeader>
                        <TimelineSeparator />
                        <TimelineDate className="sm:group-data-[orientation=vertical]/timeline:absolute sm:group-data-[orientation=vertical]/timeline:-left-32 sm:group-data-[orientation=vertical]/timeline:w-20 sm:group-data-[orientation=vertical]/timeline:text-right">
                            {item.date}
                        </TimelineDate>
                        <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
                        <TimelineIndicator />
                    </TimelineHeader>
                    <TimelineContent>{item.description}</TimelineContent>
                </TimelineItem>
            ))
        }
    </Timeline>
  )
}
