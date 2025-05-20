import { projects } from "@/consts/projects";
import SectionContainer from "../styled-wrappers/SectionContainer";
import Card from "../Card/Card";

function OurProject() {
    return (
        <SectionContainer title={"Top Projects"} description={"Each project delivers both a custom-designed front-facing website and a powerful administrative dashboard, providing clients with complete digital ecosystems tailored to their specific business needs"}  >
            <div className="flex  gap-4 flex-wrap justify-center">
                {projects.map(
                (project)=>(<Card  key={project.title} title={project.title} description={project.shortDescription} image={project.image} />)
                )}
                

            </div>
        </SectionContainer>
    );
}

export default OurProject;