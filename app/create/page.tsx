import CreateForm from "@/components/CreateForm"
import HeadingText from "@/components/HeadingText"

const CreatePage = () => (
 <section>
  <HeadingText
   title="Add Contact"
   description="Add contact below"
  />
  <div className="flex flex-col items-center justify-center">
   <CreateForm />
  </div>
 </section>
)

export default CreatePage