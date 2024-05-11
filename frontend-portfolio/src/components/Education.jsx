import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Education() {
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
                    <h1 style={{
                        textAlign: "center"
                    }}> Senior Secondary Certificate </h1>
                    <h2 style={{
                        textAlign: "center"
                    }}> RPM Academy</h2>
                    <h3 style={{
                        textAlign: "center"
                    }}> Central Board of Secondary Education</h3>
                    <h4 style={{
                        textAlign: "center"
                    }}>93.6%</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="2019-20"
                    style={{
                        zIndex: 0
                    }}>
                    <h1 style={{
                        textAlign: "center"
                    }}> Higher Secondary Certificate </h1>
                    <h2 style={{
                        textAlign: "center"
                    }}> RPM Academy</h2>
                    <h3 style={{
                        textAlign: "center"
                    }}> Central Board of Secondary Education</h3>
                    <h4 style={{
                        textAlign: "center"
                    }}>92%</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="2021-present"
                    style={{
                        zIndex: 0
                    }}>
                    <h1 style={{
                        textAlign: "center"
                    }}> Bachelor of Technology </h1>
                    <h2 style={{
                        textAlign: "center"
                    }}> Engineering Physics </h2>
                    <h3 style={{
                        textAlign: "center"
                    }}> Indian Institute of Technology, Bombay</h3>
                    <h4 style={{
                        textAlign: "center"
                    }}></h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    );
}



export default Education