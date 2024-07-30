"use client"
import React, { useState } from 'react'
import { Template } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import OutputSection from '../_components/OutputSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import FormSection from '../_components/FormSection';
import { chatSession } from '@/utils/AiModal';


interface PROPS{
    params:{
        'template-slug':string
    }
}

function CreateNewContent(props:PROPS) {
    const selectedTemplate:Template|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
    const [loading,setLoading]=useState(false);
    const [aiOutput,setAiOutput]=useState<string>('');


    const GenerateAIContent=async(formData:any)=>{
        setLoading(true);
        const SelectedPrompt=selectedTemplate?.aiPrompt;
        const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;
        const result=await chatSession.sendMessage(FinalAIPrompt);

          console.log(result.response.text())
          setAiOutput(result?.response.text());
          setLoading(false)
    }
  return (
    <div className='p-5'>
    <Link href={"/dashboard"}>
        <Button> <ArrowLeft/> Back</Button>
    </Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 '>
        {/* FormSection  */}
            <FormSection 
            selectedTemplate={selectedTemplate}
            userFormInput={(v:any)=>GenerateAIContent(v)}
            loading={loading} />
        {/* OutputSection  */}
        <div className='col-span-2'>
            <OutputSection aiOutput={aiOutput} />
            </div>
    </div>
</div>
  )
}

export default CreateNewContent
