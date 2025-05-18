import SectionContainer from "@/components/styles-wrappers/SectionContainer";

function Services() {
    return (


        <SectionContainer
            title="Our Services"
            description="This section highlights our key services and what we offer."
            progressColor="bg-main"
        >
            {/* Your section content goes here */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                Here you can find information about our services.
            </div>
        </SectionContainer>



    );
}

export default Services;