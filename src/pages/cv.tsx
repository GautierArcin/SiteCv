import { useRouter } from 'next/router';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

import styles from './cv.module.css';

const CV = (): JSX.Element => {
   const router = useRouter();
   // console.log(router.query);
   const [visible, setVisible] = useState(true);

   //    const styleVisible =
   //    const currentLocal = router.locale;
   return (
      <div className={styles.test} style={{ background: 'rgb(20, 150, 243)' }}>
         <Checkbox
            checked={visible}
            onChange={(event) => setVisible(event.target.checked)}
            inputProps={{ 'aria-label': 'primary checkbox' }}
         />
         Current locale = {router.locale}
         <br />
         All locales = {router.locales}
         <br />
         Default locale = {router.defaultLocale}
         <br />
         <br />
         <VerticalTimeline>
            <VerticalTimelineElement
               // style={{ opacity: 1, transition: 'opacity 10s ease-in', height: '10%', hover: { opacity: 0 } }}
               className={visible ? styles.visible : styles.hidden}
               visible={!visible}
               contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
               contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', height: '10%' }}
               date="2011 - present"
               iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
               icon={<WorkIcon />}>
               <h3 className="vertical-timeline-element-title">Creative Director</h3>
               <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
               <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
               className="vertical-timeline-element--work"
               date="2010 - 2011"
               iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
               className={visible ? styles.visible : styles.hidden}
               visible={!visible}
               icon={<WorkIcon />}>
               <h3 className="vertical-timeline-element-title">Art Director</h3>
               <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
               <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
               // className={visible ? styles.visible : styles.hidden}
               date="2008 - 2010"
               iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
               icon={<WorkIcon />}>
               <h3 className="vertical-timeline-element-title">Web Designer</h3>
               <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
               <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
               date="2006 - 2008"
               iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
               icon={<WorkIcon />}>
               <h3 className="vertical-timeline-element-title">Web Designer</h3>
               <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
               <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
               className="vertical-timeline-element--education"
               date="April 2013"
               iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
               icon={<SchoolIcon />}>
               <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
               <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
               <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
               className="vertical-timeline-element--education"
               date="November 2012"
               iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
               icon={<SchoolIcon />}>
               <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
               <h4 className="vertical-timeline-element-subtitle">Certification</h4>
               <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
               className="vertical-timeline-element--education"
               date="2002 - 2006"
               iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
               icon={<SchoolIcon />}>
               <h3 className="vertical-timeline-element-title">
                  Bachelor of Science in Interactive Digital Media Visual Imaging
               </h3>
               <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
               <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
               iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
               icon={<StarIcon />}
            />
         </VerticalTimeline>
      </div>
   );
};

export default CV;
