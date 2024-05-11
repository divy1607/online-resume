import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Divy() {
    return (
        <>
            <h1 style={{
                textAlign: "center",
                fontSize: "4em"
            }}>Education</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="2017-18"
                    style={{
                        zIndex: 0
                    }}>
                    <h1> Senior Secondary Certificate </h1>
                    <h2> RPM Academy</h2>
                    <h3> Central Board of Secondary Education</h3>
                    <h4>93.6%</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="2019-20"
                    style={{
                        zIndex: 0
                    }}>
                    <h1> Higher Secondary Certificate </h1>
                    <h2> RPM Academy</h2>
                    <h3> Central Board of Secondary Education</h3>
                    <h4>92%</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="2021-present"
                    style={{
                        zIndex: 0
                    }}>
                    <h1> Bachelor of Technology </h1>
                    <h2> Engineering Physics </h2>
                    <h3> Indian Institute of Technology, Bombay</h3>
                    <h4></h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    );
}



export default Divy